# 🎓 AIoT HW2：多元線性迴歸與特徵選取分析平台 (CRISP-DM)

> **課程**：物聯網數據分析與應用 (AIoT)  
> **學號**：`7115064197`  
> **姓名**：`吳佳駿`  
> **主要繳交**：GitHub Repository & Web 應用系統（遵循 DIC2 繳交規範）

---


## 🌐 線上展示與本機執行 (Web App & Live Demo)

* 🐙 **GitHub 專案儲存庫**：**[https://github.com/jiajun1014/Multiple-Linear-regression](https://github.com/jiajun1014/Multiple-Linear-regression)**
* 🔗 **GitHub Pages 線上展示**：**[https://jiajun1014.github.io/Multiple-Linear-regression/](https://jiajun1014.github.io/Multiple-Linear-regression/)**
* 🖥️ **本地快速預覽**：直接以瀏覽器開啟 `index.html`，或啟動輕量伺服器：
  ```bash
  node dev_server.js
  ```
  打開瀏覽器造訪：`http://127.0.0.1:3000/`

---

## 📖 主題一 (Problem 1)：利用多元線性迴歸預測學生考試成績

* **資料來源**：Kaggle 公開資料集 [Student Performance Factors](https://www.kaggle.com/datasets/lainguyn123/student-performance-factors)
* **樣本數量**：6,607 筆學生紀錄（訓練集 80% 共 5,285 筆，測試集 20% 共 1,322 筆）
* **預測目標**：`Exam_Score`（連續數值分數 0~100）
* **輸入特徵**：19 個原始候選特徵（6 個數值型特徵、13 個類別型特徵）

### 📊 CRISP-DM 核心模型評估結果 (保留測試集 1,322 筆)

| 模型方案 | 原始特徵數 | 編碼後特徵數 | MAE | MSE | RMSE | R² 判定係數 | 評估結論 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Model A (全部 19 特徵)** | **19** | **40** | **0.4524** | **3.2560** | **1.8044** | **0.7696** | 🏆 **全域最佳表現** |
| **Model B (群組 F 分數 Top 15)** | 15 | 34 | 0.5019 | 3.2856 | 1.8126 | 0.7676 | 精簡模型 (一致選取) |
| **Model C (Permutation Top 15)** | 15 | 34 | 0.5019 | 3.2856 | 1.8126 | 0.7676 | 精簡模型 (一致選取) |

> 📌 **核心發現**：
> 1. 群組 F 分數與 Permutation Importance 兩種截然不同的特徵選擇方法，選出的 Top 15 原始欄位集合完全一致（排除欄位均為 `Physical_Activity`、`Sleep_Hours`、`School_Type`、`Gender`）。
> 2. 完整 19 特徵的 Model A 在測試集上獲得最低 RMSE (1.8044) 與最高 R² (0.7696)，顯示各項學習與家庭因子均具有互補資訊。

---

## 🏢 主題二 (Problem 2)：50 Startups 獲利預測與 5 大特徵演算法比較

* **資料來源**：[Avik Jain 100-Days-Of-ML / 50_Startups.csv](https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv)
* **預測目標**：`Profit`（新創公司獲利金額）
* **比較演算法**：Lasso (L1)、Forward SFS (順向逐步)、RFE (遞迴消除)、ElasticNet (L1+L2)、Exhaustive Search (最佳子集)
* **最佳平衡點 (Sweet Spot)**：$k = 2$（`R&D Spend` + `Marketing Spend`），測試 RMSE 為 **14,684.79**，符合奧坎剃刀原則。

---

## 🚀 任意資料集即時載入分析平台 (Arbitrary Dataset Live CRISP-DM Studio)

在 Web 介面的「Arbitrary Dataset Live CRISP-DM Studio」中，使用者可體驗純瀏覽器端打造的自動化機器學習流水線：
1. **多元載入管道**：
   - 支援輸入任何公開 CSV 網址（內建 AllOrigins CORS Proxy 備援）。
   - 支援本機檔案選取 (`FileReader API`)。
   - 支援直接複製貼上 CSV 表格文字。
   - 提供 4 組一鍵快捷預設資料集（含老師指定的 50 Startups 官方網址）。
2. **自動化前處理 (Data Preparation)**：
   - 自動區分數值欄位與類別欄位。
   - 類別變數自動進行 One-Hot Encoding，並**自動剔除第一基準項**，防範虛擬變數陷阱 (Dummy Variable Trap)。
   - 嚴格落實 80% 訓練集與 20% 測試集拆分。
3. **即時特徵選取與正則方程求解 (Modeling)**：
   - 使用純 JavaScript 實作矩陣轉置、矩陣乘法與高斯-若爾當消除求逆（加入 Ridge 穩定因子防奇異矩陣）。
   - 執行順向逐步選取 (Forward Stepwise Selection)，動態評估 $k=1$ 至 $K$ 項特徵之泛化能力並自動標記最佳 Sweet Spot。
4. **統計推論與即時推論器 (Evaluation & Deployment)**：
   - 計算各特徵之回歸係數 $\hat{\beta}$、標準誤 $\text{SE}$、t 統計量、p 值、95% 信賴區間與 VIF 多重共線性指標。
   - 自動產生即時響應之特徵滑動桿（Range Sliders），拖曳數值即時毫秒級預測！
   - 提供測試集殘差診斷表，依絕對誤差降冪排列並標註潛在離群值。

---

## 📁 專案檔案清單目錄

```
7115064197_hw2/
├── index.html                           # 核心 Web 應用程式 (整合 Glassmorphism + StatsUnlock 設計系統)
├── app.js                               # 前端非同步互動、即時推論與純前端 CRISP-DM 機器學習引擎
├── model_data.js                        # 多問題回歸模型資料庫 (學生表現、50 Startups等)
├── dev_server.js                        # 零依賴 Node.js 輕量開發伺服器
├── StudentPerformanceFactors.csv        # Kaggle 學生考試成績原始資料集 (6,607 筆)
├── 7115064197_hw2.py                    # Python CRISP-DM 主分析程式 (Scikit-learn Pipeline)
├── 7115064197_hw2.ipynb                 # 包含執行輸出的完整 Google Colab 筆記本
├── 7115064197_HW2_CRISP-DM_完整報告.pdf # 正式書面研究報告 (7 頁完整出版級排版)
├── chatgpt對話紀錄.pdf                  # ChatGPT 輔助對話完整匯出紀錄
├── hw2_model_comparison.csv             # 三組模型測試集評估指標對照表
├── hw2_test_predictions.csv            # 1,322 筆保留測試集真實值與模型預測值
├── dashboard_demo.png                   # Web 儀表板設計參考與實際展示截圖
└── README.md                            # 專案完整說明文件
```
