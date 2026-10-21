# -*- coding: utf-8 -*-
# # HW2：Multiple Linear Regression（19 個原始特徵完整版）
# 
# **研究題目：**利用多元線性迴歸預測學生考試成績  
# **學號：**7115064197  
# **Kaggle：**[Student Performance Factors](https://www.kaggle.com/datasets/lainguyn123/student-performance-factors)  
# **預測目標：**`Exam_Score`；使用其餘 **19 個原始欄位** 作為候選輸入。  
# 
# > 由原始上傳版本改寫。請先將 `StudentPerformanceFactors.csv` 上傳 Colab（或放在筆記本相同執行資料夾），再依序「執行階段 → 全部執行」。本修訂版沒有在未提供 CSV 時捏造新結果。類別編碼後的數值欄位數可能大於 19，特徵數的統計以**原始欄位群組**為準。
# 
# ## 1. Business Understanding（商業理解）
# 
# 目標是根據讀書時間、出席率、家庭及學習環境等學生資料，以多元線性迴歸預測 `Exam_Score`。比較完整 19 欄位基準模型，以及兩種選取 **15 個原始特徵** 的模型。此研究是預測性分析，不代表相關因素具有因果關係。

import os
import warnings
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from IPython.display import display
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder
from sklearn.feature_selection import f_regression
from sklearn.inspection import permutation_importance
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

RANDOM_STATE = 42
sns.set_theme(style='whitegrid')
print('套件載入成功。')

# ## 2. Data Understanding（資料理解）
# 
# 檢查資料來源、原始欄位數、欄位型態、缺失值、重複值及目標分布。資料來源為 Kaggle 公開 Dataset，**不是此研究實際參加的排行榜競賽**，因此不宣稱 Kaggle 名次。

# Colab 可先點左側資料夾上傳 CSV；也可取消註解以下兩行使用對話框。
# from google.colab import files
# uploaded = files.upload()

candidates = ['/content/StudentPerformanceFactors.csv', 'StudentPerformanceFactors.csv']
csv_path = next((p for p in candidates if os.path.isfile(p)), None)
if csv_path is None:
    raise FileNotFoundError('找不到 StudentPerformanceFactors.csv：請先在 Colab 左側檔案區上傳 CSV。')
df = pd.read_csv(csv_path)
assert 'Exam_Score' in df.columns, 'CSV 缺少預測目標 Exam_Score，請確認使用正確資料集。'
original_features = [c for c in df.columns if c != 'Exam_Score']
print('讀取路徑：', csv_path)
print('資料形狀（筆數、含目標欄位數）：', df.shape)
print('原始輸入特徵數：', len(original_features))
if len(original_features) != 19:
    raise ValueError(f'預期原始輸入欄位為 19，實際為 {len(original_features)}；請確認 CSV 版本及欄位。')
display(df.head())

print('各欄位型態及非空值：')
df.info()
print('缺失值統計：')
display(df.isna().sum().rename('Missing').to_frame())
print('重複列數：', df.duplicated().sum())
print('描述性統計：')
display(df.describe(include='all').T)
fig, axes = plt.subplots(1, 2, figsize=(13, 4))
axes[0].hist(df['Exam_Score'].dropna(), bins=25, edgecolor='white')
axes[0].set_title('Distribution of Exam Score')
missing = df.isna().sum().sort_values(ascending=False)

if (missing > 0).any():
    missing[missing > 0].plot(kind='bar', ax=axes[1])
else:
    axes[1].text(.5, .5, 'No missing values', ha='center', va='center', transform=axes[1].transAxes)
axes[1].set_title('Missing Values by Column')
axes[1].set_ylabel('Count')
plt.tight_layout()
plt.show()

# ## 3. Data Preparation（資料準備）
# 
# 1. 分離 `Exam_Score`（Y）與其他 19 個原始欄位（X）；缺失目標值不參與訓練。
# 2. **先**切分訓練集 80%／測試集 20%，避免資料洩漏。
# 3. 數值欄位以訓練集的中位數補值；類別欄位以訓練集眾數補值後 One-Hot Encoding；未知類別採忽略處理。
# 4. 前處理放在 Pipeline 中，僅在訓練資料 `fit`；測試集只 `transform`。
# 5. 依原始欄位群組選出 15 項特徵，而非把 One-Hot 展開欄位誤當成原始特徵。

data = df.dropna(subset=['Exam_Score']).copy()
X = data[original_features].copy()
y = pd.to_numeric(data['Exam_Score'], errors='coerce')
valid = y.notna()
X, y = X.loc[valid], y.loc[valid]
num_cols = X.select_dtypes(include=np.number).columns.tolist()
cat_cols = [c for c in original_features if c not in num_cols]
print('數值欄位：', num_cols)
print('類別欄位：', cat_cols)
print('原始輸入欄位數：', len(num_cols) + len(cat_cols))
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=RANDOM_STATE
)
print('訓練／測試筆數：', len(X_train), len(X_test))

def make_preprocessor(cols):
    ncols = [c for c in cols if c in num_cols]
    ccols = [c for c in cols if c in cat_cols]
    transformers = []
    if ncols:
        transformers.append(('num', SimpleImputer(strategy='median'), ncols))
    if ccols:
        cat_pipe = Pipeline([
            ('imputer', SimpleImputer(strategy='most_frequent')),
            ('onehot', OneHotEncoder(handle_unknown='ignore', sparse_output=False))
        ])
        transformers.append(('cat', cat_pipe, ccols))
    return ColumnTransformer(transformers=transformers, remainder='drop', sparse_threshold=0)

def make_model(cols):
    return Pipeline([
        ('preprocess', make_preprocessor(cols)),
        ('regressor', LinearRegression())
    ])

# ### Feature Selection A：SelectKBest 思路（依原始欄位分組）
# 
# 先在**訓練集**上做缺失值處理及 One-Hot Encoding，計算編碼後各數值欄位對目標的 `f_regression` F 分數。針對每個原始類別欄位，彙整該欄位衍生虛擬變數的**最高 F 分數**，再選原始欄位分數前 15 名。這是群組化的單變量 F 篩選，**不是**直接對 19 個原始欄位呼叫 `SelectKBest`；類別欄位中的最高分彙整是本作業明確定義的選取準則。

# 僅用訓練資料擬合此特徵篩選的前處理。
rank_prep = make_preprocessor(original_features)
Z_train = rank_prep.fit_transform(X_train)
encoded_names = []
raw_mapping = []
if num_cols:
    encoded_names.extend(num_cols)
    raw_mapping.extend(num_cols)
if cat_cols:
    encoder = rank_prep.named_transformers_['cat'].named_steps['onehot']
    all_cat_names = encoder.get_feature_names_out(cat_cols).tolist()
    offset = 0
    for col, cats in zip(cat_cols, encoder.categories_):
        names = all_cat_names[offset:offset + len(cats)]
        encoded_names.extend(names)
        raw_mapping.extend([col] * len(names))
        offset += len(cats)
assert Z_train.shape[1] == len(encoded_names) == len(raw_mapping)
with warnings.catch_warnings():
    warnings.simplefilter('ignore', RuntimeWarning)
    f_scores, p_values = f_regression(Z_train, y_train)
rank_detail = pd.DataFrame({
    'Encoded_Feature': encoded_names,
    'Original_Feature': raw_mapping,
    'F_Score': np.nan_to_num(f_scores, nan=0.0, posinf=0.0, neginf=0.0)
})
group_scores = rank_detail.groupby('Original_Feature')['F_Score'].max().sort_values(ascending=False)
selected_f = group_scores.head(15).index.tolist()
print('編碼後輸入欄位數：', Z_train.shape[1])
print('F 分數方法選出的 15 個原始欄位：', selected_f)
display(group_scores.rename('Max_F_Score').to_frame())
assert len(selected_f) == 15

# ### Feature Selection B：Permutation Importance（依原始欄位）
# 
# 先只在訓練集擬合 19 特徵線性迴歸模型，再於**訓練集**打亂每個原始欄位並觀察 MSE 增加量（`neg_mean_squared_error` 分數的下降幅度）。選重要性前 15 個原始特徵；不接觸測試集決定特徵。此數值只是模型依賴程度，不能推論因果關係。

full_model = make_model(original_features)
full_model.fit(X_train[original_features], y_train)
perm = permutation_importance(
    full_model, X_train[original_features], y_train,
    scoring='neg_mean_squared_error', n_repeats=3,
    random_state=RANDOM_STATE, n_jobs=-1
)
perm_scores = pd.Series(perm.importances_mean, index=original_features).sort_values(ascending=False)
selected_perm = perm_scores.head(15).index.tolist()
print('Permutation Importance 選出的 15 個原始欄位：', selected_perm)
display(perm_scores.rename('Importance_MSE_Increase').to_frame())
assert len(selected_perm) == 15
fig, ax = plt.subplots(figsize=(9, 6))
perm_scores.sort_values().plot.barh(ax=ax)
ax.set_title('Permutation Importance (Training Data Only)')
ax.set_xlabel('Mean increase in MSE after shuffling')
plt.tight_layout()
plt.show()

# ## 4. Modeling（模型建立）
# 
# 比較三種多元線性迴歸：A 全部 19 個原始特徵、B 群組 F 分數選出的 15 個原始特徵、C Permutation Importance 選出的 15 個原始特徵。類別編碼後的**模型實際係數個數**可能不同於原始欄位數。

feature_sets = {
    'A_All_19': original_features,
    'B_Group_F_Top15': selected_f,
    'C_Permutation_Top15': selected_perm
}
models, predictions, rows = {}, {}, []
for name, cols in feature_sets.items():
    model = make_model(cols)
    model.fit(X_train[cols], y_train)
    pred = model.predict(X_test[cols])
    models[name], predictions[name] = model, pred
    rows.append({
        'Model': name,
        'Original_Features': len(cols),
        'Encoded_Features': model.named_steps['preprocess'].transform(X_train[cols]).shape[1],
        'MAE': mean_absolute_error(y_test, pred),
        'MSE': mean_squared_error(y_test, pred),
        'RMSE': np.sqrt(mean_squared_error(y_test, pred)),
        'R2': r2_score(y_test, pred)
    })
results = pd.DataFrame(rows).set_index('Model')
print('測試集評估（模型選擇及特徵篩選都未使用測試集）：')
display(results.round(4))
print('各模型使用的原始特徵：')
for name, cols in feature_sets.items():
    print(f'{name} ({len(cols)}): {cols}')

# 顯示完整 19 特徵模型的編碼後迴歸係數
best_model = models['A_All_19']
encoded_feature_names = best_model.named_steps['preprocess'].get_feature_names_out()
coefficient_df = pd.DataFrame({'Encoded_Feature': encoded_feature_names, 'Coefficient': best_model.named_steps['regressor'].coef_})
print('截距：', best_model.named_steps['regressor'].intercept_)
display(coefficient_df.sort_values('Coefficient', key=abs, ascending=False))


# ## 5. Evaluation（模型評估）
# 
# MAE、MSE、RMSE 越小越好；R² 越大通常代表較佳測試集預測表現，可能為負。比較三種模型的預測結果與殘差，並檢視基本線性迴歸診斷圖。若以測試集挑最佳模型，報告中應註明它僅是本次比較，正式調參應另設驗證集或交叉驗證。

# 三模型評估指標視覺化
fig, axes = plt.subplots(2, 2, figsize=(13, 9))
for ax, metric in zip(axes.ravel(), ['MAE', 'MSE', 'RMSE', 'R2']):
    results[metric].plot.bar(ax=ax, rot=15)
    ax.set_title(metric + ' on Held-out Test Set')
    ax.set_xlabel('')
    ax.set_ylabel(metric)
plt.tight_layout()
plt.show()

# 真實值 vs 預測值：三組模型並列
fig, axes = plt.subplots(1, 3, figsize=(17, 5))
all_values = np.concatenate([y_test.to_numpy()] + list(predictions.values()))
lo, hi = all_values.min(), all_values.max()
for ax, (name, pred) in zip(axes, predictions.items()):
    ax.scatter(y_test, pred, alpha=.35, s=12)
    ax.plot([lo, hi], [lo, hi], 'r--', label='Ideal y=x')
    ax.set(title=f'{name} | R²={r2_score(y_test, pred):.3f}',
           xlabel='Actual Exam Score', ylabel='Predicted Exam Score')
    ax.legend()
plt.tight_layout()
plt.show()

# 殘差診斷：殘差 vs 預測、殘差分布、Q-Q 圖與訓練資料相關係數熱圖
from scipy import stats
# 用測試集繪圖描述誤差，不用其數值重新調整特徵。
name = 'A_All_19'
pred = predictions[name]
residuals = y_test.to_numpy() - pred
fig, axes = plt.subplots(1, 3, figsize=(17, 4.5))
axes[0].scatter(pred, residuals, alpha=.35, s=12)
axes[0].axhline(0, color='red', linestyle='--')
axes[0].set(xlabel='Predicted', ylabel='Residual (Actual - Predicted)', title='Residuals vs Predicted')
axes[1].hist(residuals, bins=25, edgecolor='white')
axes[1].set_title('Residual Distribution')
stats.probplot(residuals, dist='norm', plot=axes[2])
axes[2].set_title('Residual Q-Q Plot')
plt.tight_layout()
plt.show()

plt.figure(figsize=(9, 7))
sns.heatmap(X_train[num_cols].corr(), annot=True, fmt='.2f', cmap='coolwarm', center=0)
plt.title('Numerical Feature Correlations (Training Set)')
plt.tight_layout()
plt.show()
print('提醒：線性、獨立性、常態性、等變異與共線性假設需搭配研究脈絡及診斷圖討論；圖形本身不能保證假設成立。')

# 輸出評估表與測試集預測（可在 Colab 左側檔案下載）
results.to_csv('hw2_model_comparison.csv', encoding='utf-8-sig')
prediction_table = pd.DataFrame({'Actual_Exam_Score': y_test.to_numpy()})
for name, pred in predictions.items():
    prediction_table[name + '_Predicted'] = pred
prediction_table.to_csv('hw2_test_predictions.csv', index=False, encoding='utf-8-sig')
display(prediction_table.head(10).round(2))
print('已產生 hw2_model_comparison.csv 與 hw2_test_predictions.csv')

# ## 6. Deployment（模型應用示範）
# 
# 使用全 19 個原始特徵模型，將**訓練集一筆資料作為欄位格式示範**，再預測其考試成績。正式應用時可替換為真正的新學生資料（須提供全部原始欄位，且欄位與訓練時一致）。此處只演示流程，**未正式部署**。

example_input = X_train[original_features].iloc[[0]].copy()  # 僅作輸入格式示範
example_prediction = models['A_All_19'].predict(example_input)[0]
print('示範輸入（來自訓練集的既有紀錄，不是新學生）：')
display(example_input.T.rename(columns={example_input.index[0]: 'Example_Value'}))
print('模型示範預測分數：', round(float(example_prediction), 2))
