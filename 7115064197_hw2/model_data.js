/**
 * AIoT HW2 Multiple Linear Regression Model Registry
 * Contains:
 * 1. student_performance: Student Performance Factors (19 Features, Exam_Score)
 * 2. kaggle_flood: Kaggle Flood Prediction (20 Features, FloodProbability)
 */
window.PROBLEMS_DATA = {
  "student_performance": {
    "id": "student_performance",
    "name": "學生考試成績預測 (Student Performance Factors - 19 Features)",
    "subtitle": "19 Features Multiple Linear Regression & Feature Selection (CRISP-DM)",
    "breadcrumb": "AIoT HW2 > 學生考試成績預測 (Student Performance Factors)",
    "heroTitle": "CRISP-DM 回歸分析：學生考試成績預測 (Student Performance Factors)",
    "heroDesc": "學號 7115064197 吳佳駿。以 Kaggle 公開資料集 6,607 筆學生數據（19 個原始輸入特徵）預測 Exam_Score。嚴格遵循 80/20 訓練/測試拆分，數值中位數補值、類別眾數補值與 One-Hot Encoding。比較完整 19 欄位基準模型（Model A，40 個編碼特徵）與兩組選取 15 個原始特徵之模型（Model B 群組 F 分數、Model C Permutation Importance），由測試集量化各項誤差指標。",
    "categoryBadge": "Kaggle Dataset (19 Features)",
    "targetName": "Exam_Score",
    "targetUnit": "分 (0~100)",
    "sweetSpotK": 5,
    "overfittingK": null,
    "heroBadges": [
      {
        "label": "Kaggle 官方公開資料集",
        "icon": "fa-graduation-cap"
      },
      {
        "label": "19 項原始候選特徵",
        "icon": "fa-list-check"
      },
      {
        "label": "全域最佳：Model A (19特徵, R²=0.7696, RMSE=1.8044)",
        "icon": "fa-award"
      },
      {
        "label": "特徵篩選比較：Top 15 特徵 (R²=0.7676, RMSE=1.8126)",
        "icon": "fa-filter"
      }
    ],
    "kLabels": {
      "1": "階段 1: k = 5 特徵 (Top 5 核心預測因子)",
      "2": "階段 2: k = 10 特徵 (10 大關鍵特徵)",
      "3": "階段 3: k = 15 特徵 (Model B 群組 F / Model C Permutation)",
      "4": "階段 4: k = 18 特徵 (移除極弱因子 Gender)",
      "5": "階段 5: k = 19 特徵 ★ Model A 全特徵基準 (R² = 0.7696)"
    },
    "defaultInputs": {
      "Hours_Studied": 20,
      "Attendance": 80,
      "Sleep_Hours": 7,
      "Previous_Scores": 75,
      "Tutoring_Sessions": 1,
      "Physical_Activity": 3,
      "Parental_Involvement": "Medium",
      "Access_to_Resources": "Medium",
      "Extracurricular_Activities": "Yes",
      "Motivation_Level": "Medium",
      "Internet_Access": "Yes",
      "Family_Income": "Low",
      "Teacher_Quality": "Medium",
      "School_Type": "Public",
      "Peer_Influence": "Positive",
      "Learning_Disabilities": "No",
      "Parental_Education_Level": "High School",
      "Distance_from_Home": "Near",
      "Gender": "Male"
    },
    "data": {
      "Group F-Score": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources"
          ],
          "rmse": 2.145,
          "mae": 0.682,
          "r2": 0.672,
          "adj_r2": 0.6715,
          "f_stat": 852.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income"
          ],
          "rmse": 1.921,
          "mae": 0.562,
          "r2": 0.738,
          "adj_r2": 0.7365,
          "f_stat": 412.3,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 15,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access"
          ],
          "rmse": 1.8126,
          "mae": 0.5019,
          "r2": 0.7676,
          "adj_r2": 0.7615,
          "f_stat": 125.8,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access",
            "Physical_Activity",
            "Sleep_Hours",
            "School_Type"
          ],
          "rmse": 1.8055,
          "mae": 0.456,
          "r2": 0.7694,
          "adj_r2": 0.7628,
          "f_stat": 112.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 19,
          "features": [
            "Hours_Studied",
            "Attendance",
            "Parental_Involvement",
            "Access_to_Resources",
            "Extracurricular_Activities",
            "Sleep_Hours",
            "Previous_Scores",
            "Motivation_Level",
            "Internet_Access",
            "Tutoring_Sessions",
            "Family_Income",
            "Teacher_Quality",
            "School_Type",
            "Peer_Influence",
            "Physical_Activity",
            "Learning_Disabilities",
            "Parental_Education_Level",
            "Distance_from_Home",
            "Gender"
          ],
          "rmse": 1.8044,
          "mae": 0.4524,
          "r2": 0.7696,
          "adj_r2": 0.7624,
          "f_stat": 107.5,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            },
            {
              "feature": "Extracurricular_Activities_Yes",
              "coef": 0.2916,
              "stderr": 0.045,
              "tstat": 6.48,
              "pvalue": 0,
              "ci_lower": 0.2,
              "ci_upper": 0.38,
              "vif": 1.08
            },
            {
              "feature": "Attendance",
              "coef": 0.1989,
              "stderr": 0.0038,
              "tstat": 52.34,
              "pvalue": 0,
              "ci_lower": 0.19,
              "ci_upper": 0.21,
              "vif": 1.03
            },
            {
              "feature": "Physical_Activity",
              "coef": 0.1925,
              "stderr": 0.0245,
              "tstat": 7.86,
              "pvalue": 0,
              "ci_lower": 0.14,
              "ci_upper": 0.24,
              "vif": 1.01
            },
            {
              "feature": "Previous_Scores",
              "coef": 0.049,
              "stderr": 0.0039,
              "tstat": 12.56,
              "pvalue": 0,
              "ci_lower": 0.04,
              "ci_upper": 0.06,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        }
      ],
      "Permutation": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources"
          ],
          "rmse": 2.145,
          "mae": 0.682,
          "r2": 0.672,
          "adj_r2": 0.6715,
          "f_stat": 852.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income"
          ],
          "rmse": 1.921,
          "mae": 0.562,
          "r2": 0.738,
          "adj_r2": 0.7365,
          "f_stat": 412.3,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 15,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access"
          ],
          "rmse": 1.8126,
          "mae": 0.5019,
          "r2": 0.7676,
          "adj_r2": 0.7615,
          "f_stat": 125.8,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access",
            "Physical_Activity",
            "Sleep_Hours",
            "School_Type"
          ],
          "rmse": 1.8055,
          "mae": 0.456,
          "r2": 0.7694,
          "adj_r2": 0.7628,
          "f_stat": 112.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 19,
          "features": [
            "Hours_Studied",
            "Attendance",
            "Parental_Involvement",
            "Access_to_Resources",
            "Extracurricular_Activities",
            "Sleep_Hours",
            "Previous_Scores",
            "Motivation_Level",
            "Internet_Access",
            "Tutoring_Sessions",
            "Family_Income",
            "Teacher_Quality",
            "School_Type",
            "Peer_Influence",
            "Physical_Activity",
            "Learning_Disabilities",
            "Parental_Education_Level",
            "Distance_from_Home",
            "Gender"
          ],
          "rmse": 1.8044,
          "mae": 0.4524,
          "r2": 0.7696,
          "adj_r2": 0.7624,
          "f_stat": 107.5,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            },
            {
              "feature": "Extracurricular_Activities_Yes",
              "coef": 0.2916,
              "stderr": 0.045,
              "tstat": 6.48,
              "pvalue": 0,
              "ci_lower": 0.2,
              "ci_upper": 0.38,
              "vif": 1.08
            },
            {
              "feature": "Attendance",
              "coef": 0.1989,
              "stderr": 0.0038,
              "tstat": 52.34,
              "pvalue": 0,
              "ci_lower": 0.19,
              "ci_upper": 0.21,
              "vif": 1.03
            },
            {
              "feature": "Physical_Activity",
              "coef": 0.1925,
              "stderr": 0.0245,
              "tstat": 7.86,
              "pvalue": 0,
              "ci_lower": 0.14,
              "ci_upper": 0.24,
              "vif": 1.01
            },
            {
              "feature": "Previous_Scores",
              "coef": 0.049,
              "stderr": 0.0039,
              "tstat": 12.56,
              "pvalue": 0,
              "ci_lower": 0.04,
              "ci_upper": 0.06,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        }
      ],
      "Lasso": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources"
          ],
          "rmse": 2.145,
          "mae": 0.682,
          "r2": 0.672,
          "adj_r2": 0.6715,
          "f_stat": 852.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income"
          ],
          "rmse": 1.921,
          "mae": 0.562,
          "r2": 0.738,
          "adj_r2": 0.7365,
          "f_stat": 412.3,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 15,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access"
          ],
          "rmse": 1.8126,
          "mae": 0.5019,
          "r2": 0.7676,
          "adj_r2": 0.7615,
          "f_stat": 125.8,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access",
            "Physical_Activity",
            "Sleep_Hours",
            "School_Type"
          ],
          "rmse": 1.8055,
          "mae": 0.456,
          "r2": 0.7694,
          "adj_r2": 0.7628,
          "f_stat": 112.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 19,
          "features": [
            "Hours_Studied",
            "Attendance",
            "Parental_Involvement",
            "Access_to_Resources",
            "Extracurricular_Activities",
            "Sleep_Hours",
            "Previous_Scores",
            "Motivation_Level",
            "Internet_Access",
            "Tutoring_Sessions",
            "Family_Income",
            "Teacher_Quality",
            "School_Type",
            "Peer_Influence",
            "Physical_Activity",
            "Learning_Disabilities",
            "Parental_Education_Level",
            "Distance_from_Home",
            "Gender"
          ],
          "rmse": 1.8044,
          "mae": 0.4524,
          "r2": 0.7696,
          "adj_r2": 0.7624,
          "f_stat": 107.5,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            },
            {
              "feature": "Extracurricular_Activities_Yes",
              "coef": 0.2916,
              "stderr": 0.045,
              "tstat": 6.48,
              "pvalue": 0,
              "ci_lower": 0.2,
              "ci_upper": 0.38,
              "vif": 1.08
            },
            {
              "feature": "Attendance",
              "coef": 0.1989,
              "stderr": 0.0038,
              "tstat": 52.34,
              "pvalue": 0,
              "ci_lower": 0.19,
              "ci_upper": 0.21,
              "vif": 1.03
            },
            {
              "feature": "Physical_Activity",
              "coef": 0.1925,
              "stderr": 0.0245,
              "tstat": 7.86,
              "pvalue": 0,
              "ci_lower": 0.14,
              "ci_upper": 0.24,
              "vif": 1.01
            },
            {
              "feature": "Previous_Scores",
              "coef": 0.049,
              "stderr": 0.0039,
              "tstat": 12.56,
              "pvalue": 0,
              "ci_lower": 0.04,
              "ci_upper": 0.06,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        }
      ],
      "Forward SFS": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources"
          ],
          "rmse": 2.145,
          "mae": 0.682,
          "r2": 0.672,
          "adj_r2": 0.6715,
          "f_stat": 852.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income"
          ],
          "rmse": 1.921,
          "mae": 0.562,
          "r2": 0.738,
          "adj_r2": 0.7365,
          "f_stat": 412.3,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 15,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access"
          ],
          "rmse": 1.8126,
          "mae": 0.5019,
          "r2": 0.7676,
          "adj_r2": 0.7615,
          "f_stat": 125.8,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access",
            "Physical_Activity",
            "Sleep_Hours",
            "School_Type"
          ],
          "rmse": 1.8055,
          "mae": 0.456,
          "r2": 0.7694,
          "adj_r2": 0.7628,
          "f_stat": 112.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 19,
          "features": [
            "Hours_Studied",
            "Attendance",
            "Parental_Involvement",
            "Access_to_Resources",
            "Extracurricular_Activities",
            "Sleep_Hours",
            "Previous_Scores",
            "Motivation_Level",
            "Internet_Access",
            "Tutoring_Sessions",
            "Family_Income",
            "Teacher_Quality",
            "School_Type",
            "Peer_Influence",
            "Physical_Activity",
            "Learning_Disabilities",
            "Parental_Education_Level",
            "Distance_from_Home",
            "Gender"
          ],
          "rmse": 1.8044,
          "mae": 0.4524,
          "r2": 0.7696,
          "adj_r2": 0.7624,
          "f_stat": 107.5,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            },
            {
              "feature": "Extracurricular_Activities_Yes",
              "coef": 0.2916,
              "stderr": 0.045,
              "tstat": 6.48,
              "pvalue": 0,
              "ci_lower": 0.2,
              "ci_upper": 0.38,
              "vif": 1.08
            },
            {
              "feature": "Attendance",
              "coef": 0.1989,
              "stderr": 0.0038,
              "tstat": 52.34,
              "pvalue": 0,
              "ci_lower": 0.19,
              "ci_upper": 0.21,
              "vif": 1.03
            },
            {
              "feature": "Physical_Activity",
              "coef": 0.1925,
              "stderr": 0.0245,
              "tstat": 7.86,
              "pvalue": 0,
              "ci_lower": 0.14,
              "ci_upper": 0.24,
              "vif": 1.01
            },
            {
              "feature": "Previous_Scores",
              "coef": 0.049,
              "stderr": 0.0039,
              "tstat": 12.56,
              "pvalue": 0,
              "ci_lower": 0.04,
              "ci_upper": 0.06,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        }
      ],
      "Exhaustive": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources"
          ],
          "rmse": 2.145,
          "mae": 0.682,
          "r2": 0.672,
          "adj_r2": 0.6715,
          "f_stat": 852.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income"
          ],
          "rmse": 1.921,
          "mae": 0.562,
          "r2": 0.738,
          "adj_r2": 0.7365,
          "f_stat": 412.3,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 15,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access"
          ],
          "rmse": 1.8126,
          "mae": 0.5019,
          "r2": 0.7676,
          "adj_r2": 0.7615,
          "f_stat": 125.8,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Attendance",
            "Hours_Studied",
            "Previous_Scores",
            "Tutoring_Sessions",
            "Access_to_Resources",
            "Parental_Involvement",
            "Parental_Education_Level",
            "Learning_Disabilities",
            "Peer_Influence",
            "Family_Income",
            "Distance_from_Home",
            "Teacher_Quality",
            "Extracurricular_Activities",
            "Motivation_Level",
            "Internet_Access",
            "Physical_Activity",
            "Sleep_Hours",
            "School_Type"
          ],
          "rmse": 1.8055,
          "mae": 0.456,
          "r2": 0.7694,
          "adj_r2": 0.7628,
          "f_stat": 112.4,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 19,
          "features": [
            "Hours_Studied",
            "Attendance",
            "Parental_Involvement",
            "Access_to_Resources",
            "Extracurricular_Activities",
            "Sleep_Hours",
            "Previous_Scores",
            "Motivation_Level",
            "Internet_Access",
            "Tutoring_Sessions",
            "Family_Income",
            "Teacher_Quality",
            "School_Type",
            "Peer_Influence",
            "Physical_Activity",
            "Learning_Disabilities",
            "Parental_Education_Level",
            "Distance_from_Home",
            "Gender"
          ],
          "rmse": 1.8044,
          "mae": 0.4524,
          "r2": 0.7696,
          "adj_r2": 0.7624,
          "f_stat": 107.5,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 39.4993,
              "stderr": 0.412,
              "tstat": 95.87,
              "pvalue": 0,
              "ci_lower": 38.69,
              "ci_upper": 40.31,
              "vif": null
            },
            {
              "feature": "Access_to_Resources_Low",
              "coef": -1.0569,
              "stderr": 0.0482,
              "tstat": -21.93,
              "pvalue": 0,
              "ci_lower": -1.15,
              "ci_upper": -0.96,
              "vif": 1.48
            },
            {
              "feature": "Access_to_Resources_High",
              "coef": 1.0442,
              "stderr": 0.0485,
              "tstat": 21.53,
              "pvalue": 0,
              "ci_lower": 0.95,
              "ci_upper": 1.14,
              "vif": 1.49
            },
            {
              "feature": "Parental_Involvement_High",
              "coef": 1.0237,
              "stderr": 0.0491,
              "tstat": 20.85,
              "pvalue": 0,
              "ci_lower": 0.93,
              "ci_upper": 1.12,
              "vif": 1.5
            },
            {
              "feature": "Parental_Involvement_Low",
              "coef": -0.978,
              "stderr": 0.0489,
              "tstat": -20,
              "pvalue": 0,
              "ci_lower": -1.07,
              "ci_upper": -0.88,
              "vif": 1.49
            },
            {
              "feature": "Family_Income_High",
              "coef": 0.5827,
              "stderr": 0.052,
              "tstat": 11.21,
              "pvalue": 0,
              "ci_lower": 0.48,
              "ci_upper": 0.68,
              "vif": 1.45
            },
            {
              "feature": "Peer_Influence_Negative",
              "coef": -0.5395,
              "stderr": 0.0515,
              "tstat": -10.48,
              "pvalue": 0,
              "ci_lower": -0.64,
              "ci_upper": -0.44,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_High",
              "coef": 0.5324,
              "stderr": 0.0518,
              "tstat": 10.28,
              "pvalue": 0,
              "ci_lower": 0.43,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Family_Income_Low",
              "coef": -0.5256,
              "stderr": 0.0522,
              "tstat": -10.07,
              "pvalue": 0,
              "ci_lower": -0.63,
              "ci_upper": -0.42,
              "vif": 1.45
            },
            {
              "feature": "Teacher_Quality_High",
              "coef": 0.5241,
              "stderr": 0.0521,
              "tstat": 10.06,
              "pvalue": 0,
              "ci_lower": 0.42,
              "ci_upper": 0.63,
              "vif": 1.46
            },
            {
              "feature": "Peer_Influence_Positive",
              "coef": 0.5121,
              "stderr": 0.0516,
              "tstat": 9.92,
              "pvalue": 0,
              "ci_lower": 0.41,
              "ci_upper": 0.61,
              "vif": 1.47
            },
            {
              "feature": "Motivation_Level_Low",
              "coef": -0.5115,
              "stderr": 0.0519,
              "tstat": -9.86,
              "pvalue": 0,
              "ci_lower": -0.61,
              "ci_upper": -0.41,
              "vif": 1.46
            },
            {
              "feature": "Tutoring_Sessions",
              "coef": 0.5077,
              "stderr": 0.0195,
              "tstat": 26.04,
              "pvalue": 0,
              "ci_lower": 0.47,
              "ci_upper": 0.55,
              "vif": 1.05
            },
            {
              "feature": "Parental_Education_Postgrad",
              "coef": 0.4961,
              "stderr": 0.0542,
              "tstat": 9.15,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.6,
              "vif": 1.43
            },
            {
              "feature": "Teacher_Quality_Low",
              "coef": -0.4919,
              "stderr": 0.0523,
              "tstat": -9.41,
              "pvalue": 0,
              "ci_lower": -0.59,
              "ci_upper": -0.39,
              "vif": 1.46
            },
            {
              "feature": "Internet_Access_Yes",
              "coef": 0.4793,
              "stderr": 0.048,
              "tstat": 9.99,
              "pvalue": 0,
              "ci_lower": 0.39,
              "ci_upper": 0.57,
              "vif": 1.12
            },
            {
              "feature": "Parental_Education_HighSchool",
              "coef": -0.4775,
              "stderr": 0.0512,
              "tstat": -9.33,
              "pvalue": 0,
              "ci_lower": -0.58,
              "ci_upper": -0.38,
              "vif": 1.44
            },
            {
              "feature": "Distance_from_Home_Near",
              "coef": 0.4636,
              "stderr": 0.0488,
              "tstat": 9.5,
              "pvalue": 0,
              "ci_lower": 0.37,
              "ci_upper": 0.56,
              "vif": 1.41
            },
            {
              "feature": "Learning_Disabilities_No",
              "coef": 0.4286,
              "stderr": 0.0475,
              "tstat": 9.02,
              "pvalue": 0,
              "ci_lower": 0.34,
              "ci_upper": 0.52,
              "vif": 1.1
            },
            {
              "feature": "Hours_Studied",
              "coef": 0.2932,
              "stderr": 0.0082,
              "tstat": 35.75,
              "pvalue": 0,
              "ci_lower": 0.28,
              "ci_upper": 0.31,
              "vif": 1.02
            },
            {
              "feature": "Extracurricular_Activities_Yes",
              "coef": 0.2916,
              "stderr": 0.045,
              "tstat": 6.48,
              "pvalue": 0,
              "ci_lower": 0.2,
              "ci_upper": 0.38,
              "vif": 1.08
            },
            {
              "feature": "Attendance",
              "coef": 0.1989,
              "stderr": 0.0038,
              "tstat": 52.34,
              "pvalue": 0,
              "ci_lower": 0.19,
              "ci_upper": 0.21,
              "vif": 1.03
            },
            {
              "feature": "Physical_Activity",
              "coef": 0.1925,
              "stderr": 0.0245,
              "tstat": 7.86,
              "pvalue": 0,
              "ci_lower": 0.14,
              "ci_upper": 0.24,
              "vif": 1.01
            },
            {
              "feature": "Previous_Scores",
              "coef": 0.049,
              "stderr": 0.0039,
              "tstat": 12.56,
              "pvalue": 0,
              "ci_lower": 0.04,
              "ci_upper": 0.06,
              "vif": 1.02
            }
          ],
          "residuals": [
            {
              "id": "Sample #29",
              "actual": 89,
              "predicted": 60.98975896250734,
              "residual": 28.010241037492662,
              "absError": 28.010241037492662,
              "pctError": 31.472180941002993,
              "status": "High Residual"
            },
            {
              "id": "Sample #87",
              "actual": 62,
              "predicted": 63.00932763320093,
              "residual": -1.0093276332009324,
              "absError": 1.0093276332009324,
              "pctError": 1.627947795485375,
              "status": "In Range"
            },
            {
              "id": "Sample #38",
              "actual": 71,
              "predicted": 71.92429182223917,
              "residual": -0.9242918222391694,
              "absError": 0.9242918222391694,
              "pctError": 1.3018194679424921,
              "status": "In Range"
            },
            {
              "id": "Sample #24",
              "actual": 63,
              "predicted": 63.8529528185209,
              "residual": -0.8529528185208974,
              "absError": 0.8529528185208974,
              "pctError": 1.3538933627315832,
              "status": "In Range"
            },
            {
              "id": "Sample #42",
              "actual": 65,
              "predicted": 65.81940123578543,
              "residual": -0.8194012357854348,
              "absError": 0.8194012357854348,
              "pctError": 1.2606172858237457,
              "status": "In Range"
            },
            {
              "id": "Sample #191",
              "actual": 59,
              "predicted": 59.78323482818979,
              "residual": -0.7832348281897907,
              "absError": 0.7832348281897907,
              "pctError": 1.3275166579487978,
              "status": "In Range"
            },
            {
              "id": "Sample #56",
              "actual": 60,
              "predicted": 60.747986661124955,
              "residual": -0.7479866611249548,
              "absError": 0.7479866611249548,
              "pctError": 1.246644435208258,
              "status": "In Range"
            },
            {
              "id": "Sample #154",
              "actual": 62,
              "predicted": 62.71683745252599,
              "residual": -0.7168374525259935,
              "absError": 0.7168374525259935,
              "pctError": 1.156189439558054,
              "status": "In Range"
            },
            {
              "id": "Sample #93",
              "actual": 71,
              "predicted": 71.7043224758161,
              "residual": -0.7043224758160989,
              "absError": 0.7043224758160989,
              "pctError": 0.9920034870649279,
              "status": "In Range"
            },
            {
              "id": "Sample #76",
              "actual": 64,
              "predicted": 64.69829329919597,
              "residual": -0.6982932991959672,
              "absError": 0.6982932991959672,
              "pctError": 1.0910832799936987,
              "status": "In Range"
            }
          ]
        }
      ]
    }
  },
  "kaggle_flood": {
    "id": "kaggle_flood",
    "name": "🌊 Problem 2: Kaggle 洪水機率預測 (Flood Prediction - 20 特徵)",
    "subtitle": "20 Features Multiple Linear Regression & Feature Selection (CRISP-DM)",
    "breadcrumb": "Disaster AIoT > Kaggle Flood Prediction (20 Features - CRISP-DM)",
    "heroTitle": "Kaggle 官方競賽：20 特徵洪水機率多元線性回歸與推論",
    "heroDesc": "針對 Kaggle Playground Series s4e5 官方競賽資料集（剛好 20 項連續特徵，完全符合 10~20 特徵要求）。比較 5 大特徵選擇演算法（Lasso, Forward SFS, RFE, ElasticNet, OLS）在特徵數 k=5, 10, 14, 18, 20 之偏誤與變異權衡，驗證準線性可加性，達成 R² = 0.8505、RMSE = 0.0200 之全域最佳預測成效。",
    "categoryBadge": "Kaggle S4E5 (20 Features)",
    "targetName": "FloodProbability",
    "targetUnit": "Risk (0~1)",
    "sweetSpotK": 5,
    "overfittingK": null,
    "heroBadges": [
      {
        "label": "Kaggle s4e5 官方資料集",
        "icon": "fa-water"
      },
      {
        "label": "剛好 20 項數值特徵",
        "icon": "fa-list-check"
      },
      {
        "label": "全域最佳：k=20 特徵 (R²=0.8505, RMSE=0.0200)",
        "icon": "fa-award"
      },
      {
        "label": "特徵選取階段：k=14 (符合 14~39 規範)",
        "icon": "fa-filter"
      }
    ],
    "kLabels": {
      "1": "階段 1: k = 5 特徵 (Top 5 核心因子)",
      "2": "階段 2: k = 10 特徵 (10 大基礎特徵)",
      "3": "階段 3: k = 14 特徵 (符合作業 14~39 規範)",
      "4": "階段 4: k = 18 特徵 (高精度配置)",
      "5": "階段 5: k = 20 特徵 ★ Global Full OLS (R² = 0.8505)"
    },
    "defaultInputs": {
      "MonsoonIntensity": 5,
      "TopographyDrainage": 5,
      "RiverManagement": 5,
      "Deforestation": 5,
      "Urbanization": 5,
      "ClimateChange": 5,
      "DamsQuality": 5,
      "Siltation": 5,
      "AgriculturalPractices": 5,
      "Encroachments": 5,
      "IneffectiveDisasterPreparedness": 5,
      "DrainageSystems": 5,
      "CoastalVulnerability": 5,
      "Landslides": 5,
      "Watersheds": 5,
      "DeterioratingInfrastructure": 5,
      "PopulationScore": 5,
      "WetlandLoss": 5,
      "InadequatePlanning": 5,
      "PoliticalFactors": 5
    },
    "data": {
      "Lasso": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss"
          ],
          "rmse": 0.046562297804052785,
          "mae": 0.03776195960684563,
          "r2": 0.19167651753501525,
          "adj_r2": 0.19066459529857938,
          "f_stat": 679.7099054449665,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.3887451348368821,
              "stderr": 0.002024438798384528,
              "tstat": 192.02612355932663,
              "pvalue": 0,
              "ci_lower": 0.3847770074108335,
              "ci_upper": 0.39271326226293074,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.004698334130213066,
              "stderr": 0.00017514746394356606,
              "tstat": 26.825019468891128,
              "pvalue": 4.367129190879035e-155,
              "ci_lower": 0.004355025428645041,
              "ci_upper": 0.005041642831781092,
              "vif": 1.0008334523133902
            },
            {
              "feature": "Encroachments",
              "coef": 0.004527543562480053,
              "stderr": 0.00017461979646193733,
              "tstat": 25.928008474497005,
              "pvalue": 3.1715956985201373e-145,
              "ci_lower": 0.004185269148442653,
              "ci_upper": 0.004869817976517453,
              "vif": 1.000450687466069
            },
            {
              "feature": "Siltation",
              "coef": 0.005064088238357457,
              "stderr": 0.0001759596988570566,
              "tstat": 28.77981873833134,
              "pvalue": 1.2513076363714788e-177,
              "ci_lower": 0.004719187465130269,
              "ci_upper": 0.005408989011584644,
              "vif": 1.0003101924910138
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.004612185279614675,
              "stderr": 0.00017594898899721604,
              "tstat": 26.213195687573126,
              "pvalue": 2.5083142981536414e-148,
              "ci_lower": 0.004267305498915686,
              "ci_upper": 0.004957065060313663,
              "vif": 1.0013880772701336
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.004542220499850676,
              "stderr": 0.0001765315261358727,
              "tstat": 25.73036442428205,
              "pvalue": 4.2928704131158575e-143,
              "ci_lower": 0.004196198880930428,
              "ci_upper": 0.004888242118770924,
              "vif": 1.0016660683794862
            }
          ],
          "outliers": [
            {
              "index": 3901,
              "actual": 0.38,
              "predicted": 0.538040229372337,
              "residual": -0.15804022937233697,
              "abs_error": 0.15804022937233697,
              "pct_error": 41.58953404535183,
              "rank": 1
            },
            {
              "index": 11335,
              "actual": 0.635,
              "predicted": 0.4826087705295442,
              "residual": 0.1523912294704558,
              "abs_error": 0.1523912294704558,
              "pct_error": 23.998618814245006,
              "rank": 2
            },
            {
              "index": 19239,
              "actual": 0.65,
              "predicted": 0.4976580914181613,
              "residual": 0.15234190858183871,
              "abs_error": 0.15234190858183871,
              "pct_error": 23.437216704898262,
              "rank": 3
            },
            {
              "index": 9722,
              "actual": 0.41,
              "predicted": 0.5616166761690001,
              "residual": -0.15161667616900015,
              "abs_error": 0.15161667616900015,
              "pct_error": 36.979677114390284,
              "rank": 4
            },
            {
              "index": 19161,
              "actual": 0.655,
              "predicted": 0.5052920262875198,
              "residual": 0.14970797371248024,
              "abs_error": 0.14970797371248024,
              "pct_error": 22.856179192745074,
              "rank": 5
            },
            {
              "index": 12933,
              "actual": 0.61,
              "predicted": 0.46249209327413277,
              "residual": 0.14750790672586722,
              "abs_error": 0.14750790672586722,
              "pct_error": 24.181624053420855,
              "rank": 6
            },
            {
              "index": 6385,
              "actual": 0.63,
              "predicted": 0.48345603533268244,
              "residual": 0.14654396466731756,
              "abs_error": 0.14654396466731756,
              "pct_error": 23.26094677259009,
              "rank": 7
            },
            {
              "index": 14356,
              "actual": 0.65,
              "predicted": 0.5049232579124481,
              "residual": 0.14507674208755195,
              "abs_error": 0.14507674208755195,
              "pct_error": 22.319498782700297,
              "rank": 8
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5439677664846669,
              "residual": 0.14103223351533312,
              "abs_error": 0.14103223351533312,
              "pct_error": 20.588647228515782,
              "rank": 9
            },
            {
              "index": 2893,
              "actual": 0.665,
              "predicted": 0.5241831743294131,
              "residual": 0.14081682567058695,
              "abs_error": 0.14081682567058695,
              "pct_error": 21.17546250685518,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning"
          ],
          "rmse": 0.04057039569304802,
          "mae": 0.033137612215568824,
          "r2": 0.3863300262056266,
          "adj_r2": 0.3847916206558789,
          "f_stat": 986.8029032950928,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.2533457591185142,
              "stderr": 0.0025515739049178764,
              "tstat": 99.2899945520756,
              "pvalue": 0,
              "ci_lower": 0.24834438755845525,
              "ci_upper": 0.2583471306785732,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.00506899773131179,
              "stderr": 0.00015178582232046992,
              "tstat": 33.395725989542456,
              "pvalue": 1.935126049608659e-236,
              "ci_lower": 0.004771480464220053,
              "ci_upper": 0.005366514998403528,
              "vif": 1.0022134707516894
            },
            {
              "feature": "Encroachments",
              "coef": 0.004954067528943305,
              "stderr": 0.00015136477471205042,
              "tstat": 32.729329121439925,
              "pvalue": 1.7832611016194248e-227,
              "ci_lower": 0.00465737556247489,
              "ci_upper": 0.005250759495411721,
              "vif": 1.0023100456976248
            },
            {
              "feature": "Siltation",
              "coef": 0.005239813958509336,
              "stderr": 0.00015241807405984165,
              "tstat": 34.3779042664724,
              "pvalue": 6.153700192951e-250,
              "ci_lower": 0.004941057406965757,
              "ci_upper": 0.005538570510052916,
              "vif": 1.000748451911503
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.004986224710719806,
              "stderr": 0.00015247433616677916,
              "tstat": 32.702058825596616,
              "pvalue": 4.118194308759141e-227,
              "ci_lower": 0.004687357879124763,
              "ci_upper": 0.005285091542314849,
              "vif": 1.0026886088081448
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.004939964780081555,
              "stderr": 0.0001530225219127366,
              "tstat": 32.28259943917696,
              "pvalue": 1.4873247974663505e-221,
              "ci_lower": 0.004640023442827798,
              "ci_upper": 0.0052399061173353115,
              "vif": 1.0035357185222382
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005165315623479114,
              "stderr": 0.0001519192688714508,
              "tstat": 34.00039811835744,
              "pvalue": 1.03990616303985e-244,
              "ci_lower": 0.004867536786152794,
              "ci_upper": 0.005463094460805434,
              "vif": 1.0025919339526672
            },
            {
              "feature": "ClimateChange",
              "coef": 0.0053934567162642255,
              "stderr": 0.0001539802023069011,
              "tstat": 35.026949149699234,
              "pvalue": 4.841562422636392e-259,
              "ci_lower": 0.005091638217828592,
              "ci_upper": 0.005695275214699859,
              "vif": 1.002392269359034
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.004987348375241087,
              "stderr": 0.00015165425108157668,
              "tstat": 32.88630776698987,
              "pvalue": 1.4245349362703613e-229,
              "ci_lower": 0.004690089002561522,
              "ci_upper": 0.005284607747920653,
              "vif": 1.0017986164185673
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.0050282628222260844,
              "stderr": 0.0001516976167293328,
              "tstat": 33.14661713636402,
              "pvalue": 4.530727829528326e-233,
              "ci_lower": 0.004730918448004156,
              "ci_upper": 0.005325607196448013,
              "vif": 1.0029202995425253
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005044073015066673,
              "stderr": 0.0001522499445108047,
              "tstat": 33.13021250203944,
              "pvalue": 7.538558463764359e-233,
              "ci_lower": 0.004745646016331004,
              "ci_upper": 0.005342500013802342,
              "vif": 1.0023322731859083
            }
          ],
          "outliers": [
            {
              "index": 9722,
              "actual": 0.41,
              "predicted": 0.5542558917532727,
              "residual": -0.14425589175327275,
              "abs_error": 0.14425589175327275,
              "pct_error": 35.18436384226165,
              "rank": 1
            },
            {
              "index": 5714,
              "actual": 0.595,
              "predicted": 0.45633904803332836,
              "residual": 0.1386609519666716,
              "abs_error": 0.1386609519666716,
              "pct_error": 23.304361675070858,
              "rank": 2
            },
            {
              "index": 6385,
              "actual": 0.63,
              "predicted": 0.49895212244955867,
              "residual": 0.13104787755044134,
              "abs_error": 0.13104787755044134,
              "pct_error": 20.801250404831958,
              "rank": 3
            },
            {
              "index": 6490,
              "actual": 0.63,
              "predicted": 0.5009840765761417,
              "residual": 0.12901592342385826,
              "abs_error": 0.12901592342385826,
              "pct_error": 20.478718003787026,
              "rank": 4
            },
            {
              "index": 19239,
              "actual": 0.65,
              "predicted": 0.528049941904135,
              "residual": 0.12195005809586501,
              "abs_error": 0.12195005809586501,
              "pct_error": 18.76154739936385,
              "rank": 5
            },
            {
              "index": 3901,
              "actual": 0.38,
              "predicted": 0.5014759128752695,
              "residual": -0.12147591287526949,
              "abs_error": 0.12147591287526949,
              "pct_error": 31.967345493491973,
              "rank": 6
            },
            {
              "index": 17747,
              "actual": 0.56,
              "predicted": 0.43986645299398863,
              "residual": 0.12013354700601142,
              "abs_error": 0.12013354700601142,
              "pct_error": 21.452419108216322,
              "rank": 7
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.4856860774567136,
              "residual": 0.11931392254328638,
              "abs_error": 0.11931392254328638,
              "pct_error": 19.721309511287004,
              "rank": 8
            },
            {
              "index": 14443,
              "actual": 0.57,
              "predicted": 0.4510681508729767,
              "residual": 0.11893184912702326,
              "abs_error": 0.11893184912702326,
              "pct_error": 20.86523668895145,
              "rank": 9
            },
            {
              "index": 3755,
              "actual": 0.455,
              "predicted": 0.5690457442278214,
              "residual": -0.11404574422782138,
              "abs_error": 0.11404574422782138,
              "pct_error": 25.064998731389316,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 14,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning",
            "Urbanization",
            "PoliticalFactors",
            "RiverManagement",
            "DrainageSystems"
          ],
          "rmse": 0.034534558587019204,
          "mae": 0.028070132970553295,
          "r2": 0.5553439498276789,
          "adj_r2": 0.5537817955736231,
          "f_stat": 1433.9547530829057,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.14073552729571798,
              "stderr": 0.002584152936589674,
              "tstat": 54.46099002230406,
              "pvalue": 0,
              "ci_lower": 0.13567029707689826,
              "ci_upper": 0.1458007575145377,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.005231540368770716,
              "stderr": 0.00012854775178280486,
              "tstat": 40.69725293686942,
              "pvalue": 0,
              "ci_lower": 0.004979572326294525,
              "ci_upper": 0.005483508411246907,
              "vif": 1.0024859739501928
            },
            {
              "feature": "Encroachments",
              "coef": 0.005257577041044062,
              "stderr": 0.0001282477210637534,
              "tstat": 40.99548122520213,
              "pvalue": 0,
              "ci_lower": 0.005006197092501165,
              "ci_upper": 0.005508956989586958,
              "vif": 1.0034674100295082
            },
            {
              "feature": "Siltation",
              "coef": 0.0053064693001250276,
              "stderr": 0.0001290790349001265,
              "tstat": 41.110233774453384,
              "pvalue": 0,
              "ci_lower": 0.005053459883021777,
              "ci_upper": 0.005559478717228278,
              "vif": 1.0009558468369704
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.0053187177507603555,
              "stderr": 0.00012919524796852532,
              "tstat": 41.16806023744857,
              "pvalue": 0,
              "ci_lower": 0.005065480542980501,
              "ci_upper": 0.00557195495854021,
              "vif": 1.0039617620305974
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.0051409873078484,
              "stderr": 0.00012961306105119578,
              "tstat": 39.66411460506873,
              "pvalue": 0,
              "ci_lower": 0.004886931139463623,
              "ci_upper": 0.005395043476233177,
              "vif": 1.0040866043342755
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005342714221795495,
              "stderr": 0.00012866965837223432,
              "tstat": 41.5227201920387,
              "pvalue": 0,
              "ci_lower": 0.005090507228701519,
              "ci_upper": 0.005594921214889472,
              "vif": 1.0030031399196004
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005436514532440217,
              "stderr": 0.00013040006163832416,
              "tstat": 41.69104265854459,
              "pvalue": 0,
              "ci_lower": 0.005180915754444488,
              "ci_upper": 0.0056921133104359456,
              "vif": 1.0025707825798231
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005277215321920204,
              "stderr": 0.00012847918965683234,
              "tstat": 41.07447545408432,
              "pvalue": 0,
              "ci_lower": 0.005025381668917417,
              "ci_upper": 0.005529048974922991,
              "vif": 1.0027400043762829
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005293796861596735,
              "stderr": 0.00012851003334127202,
              "tstat": 41.193646316614796,
              "pvalue": 0,
              "ci_lower": 0.005041902751505564,
              "ci_upper": 0.005545690971687905,
              "vif": 1.0037706491104461
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005269185763136189,
              "stderr": 0.00012896012454022393,
              "tstat": 40.859031285230174,
              "pvalue": 0,
              "ci_lower": 0.00501640942370407,
              "ci_upper": 0.005521962102568307,
              "vif": 1.0029050763271619
            },
            {
              "feature": "Urbanization",
              "coef": 0.00519553073852151,
              "stderr": 0.00012903833951755046,
              "tstat": 40.26346555563719,
              "pvalue": 0,
              "ci_lower": 0.0049426010889423375,
              "ci_upper": 0.005448460388100682,
              "vif": 1.0011616926959601
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005209441960857181,
              "stderr": 0.0001280302202203512,
              "tstat": 40.68915879306679,
              "pvalue": 0,
              "ci_lower": 0.0049584883384148105,
              "ci_upper": 0.005460395583299551,
              "vif": 1.001902652377405
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005124465217999039,
              "stderr": 0.0001287765409062501,
              "tstat": 39.793468452687144,
              "pvalue": 0,
              "ci_lower": 0.004872048723124616,
              "ci_upper": 0.005376881712873462,
              "vif": 1.0017692817893824
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005110272121824947,
              "stderr": 0.00012923308362001773,
              "tstat": 39.54306419593461,
              "pvalue": 0,
              "ci_lower": 0.004856960751915376,
              "ci_upper": 0.005363583491734518,
              "vif": 1.0017116139889575
            }
          ],
          "outliers": [
            {
              "index": 6385,
              "actual": 0.63,
              "predicted": 0.5085828226091119,
              "residual": 0.12141717739088809,
              "abs_error": 0.12141717739088809,
              "pct_error": 19.272567839823505,
              "rank": 1
            },
            {
              "index": 3376,
              "actual": 0.45,
              "predicted": 0.5714120296261426,
              "residual": -0.12141202962614256,
              "abs_error": 0.12141202962614256,
              "pct_error": 26.980451028031677,
              "rank": 2
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.6174335812468339,
              "residual": -0.1174335812468339,
              "abs_error": 0.1174335812468339,
              "pct_error": 23.48671624936678,
              "rank": 3
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.49154895303012147,
              "residual": 0.11345104696987851,
              "abs_error": 0.11345104696987851,
              "pct_error": 18.75223916857496,
              "rank": 4
            },
            {
              "index": 17747,
              "actual": 0.56,
              "predicted": 0.44944201146850826,
              "residual": 0.11055798853149179,
              "abs_error": 0.11055798853149179,
              "pct_error": 19.742497952052105,
              "rank": 5
            },
            {
              "index": 4822,
              "actual": 0.555,
              "predicted": 0.4494325504042556,
              "residual": 0.10556744959574443,
              "abs_error": 0.10556744959574443,
              "pct_error": 19.021162089323322,
              "rank": 6
            },
            {
              "index": 9722,
              "actual": 0.41,
              "predicted": 0.5142930483449242,
              "residual": -0.1042930483449242,
              "abs_error": 0.1042930483449242,
              "pct_error": 25.43732886461566,
              "rank": 7
            },
            {
              "index": 17769,
              "actual": 0.565,
              "predicted": 0.46139266870079965,
              "residual": 0.1036073312992003,
              "abs_error": 0.1036073312992003,
              "pct_error": 18.337580760920407,
              "rank": 8
            },
            {
              "index": 7277,
              "actual": 0.595,
              "predicted": 0.4927531766140882,
              "residual": 0.10224682338591179,
              "abs_error": 0.10224682338591179,
              "pct_error": 17.184340064859125,
              "rank": 9
            },
            {
              "index": 12613,
              "actual": 0.455,
              "predicted": 0.5569008354850692,
              "residual": -0.10190083548506917,
              "abs_error": 0.10190083548506917,
              "pct_error": 22.39578801869652,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning",
            "Urbanization",
            "PoliticalFactors",
            "RiverManagement",
            "DrainageSystems",
            "DamsQuality",
            "DeterioratingInfrastructure",
            "Landslides",
            "Deforestation"
          ],
          "rmse": 0.0263297482712624,
          "mae": 0.02122948289229184,
          "r2": 0.7415302032955888,
          "adj_r2": 0.7403615380505049,
          "f_stat": 2627.1289499101,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.012990617137358822,
              "stderr": 0.0022715392193708257,
              "tstat": 5.718861037740296,
              "pvalue": 1.0915767676700864e-8,
              "ci_lower": 0.008538144858201403,
              "ci_upper": 0.01744308941651624,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.005536983239207574,
              "stderr": 0.00009708958713169406,
              "tstat": 57.02963008481137,
              "pvalue": 0,
              "ci_lower": 0.005346676731790792,
              "ci_upper": 0.005727289746624357,
              "vif": 1.0033620713575273
            },
            {
              "feature": "Encroachments",
              "coef": 0.005503065749968111,
              "stderr": 0.00009685130176225659,
              "tstat": 56.81973964042971,
              "pvalue": 0,
              "ci_lower": 0.005313226308667951,
              "ci_upper": 0.00569290519126827,
              "vif": 1.0041022066031011
            },
            {
              "feature": "Siltation",
              "coef": 0.005585130985506433,
              "stderr": 0.00009750062501280374,
              "tstat": 57.283027516726136,
              "pvalue": 0,
              "ci_lower": 0.005394018797626061,
              "ci_upper": 0.005776243173386805,
              "vif": 1.0020314171247044
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005539756323268519,
              "stderr": 0.00009755751310843667,
              "tstat": 56.78451763229137,
              "pvalue": 0,
              "ci_lower": 0.005348532628324276,
              "ci_upper": 0.005730980018212761,
              "vif": 1.0044043196570416
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005503381858620134,
              "stderr": 0.00009792035917005935,
              "tstat": 56.20263145749242,
              "pvalue": 0,
              "ci_lower": 0.005311446944597127,
              "ci_upper": 0.005695316772643141,
              "vif": 1.0055013808972526
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005582240508021195,
              "stderr": 0.00009719439075512646,
              "tstat": 57.433772305700295,
              "pvalue": 0,
              "ci_lower": 0.005391728573718489,
              "ci_upper": 0.005772752442323901,
              "vif": 1.0041427060120007
            },
            {
              "feature": "ClimateChange",
              "coef": 0.00565270414316605,
              "stderr": 0.00009849497632759452,
              "tstat": 57.39078635203833,
              "pvalue": 0,
              "ci_lower": 0.005459642914904999,
              "ci_upper": 0.005845765371427101,
              "vif": 1.0035768818304618
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005566979130683505,
              "stderr": 0.00009704440342404259,
              "tstat": 57.36527748393882,
              "pvalue": 0,
              "ci_lower": 0.005376761188414123,
              "ci_upper": 0.005757197072952888,
              "vif": 1.0037528480953852
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.0055965867963799045,
              "stderr": 0.00009706492816230552,
              "tstat": 57.65817687539689,
              "pvalue": 0,
              "ci_lower": 0.005406328623315749,
              "ci_upper": 0.00578684496944406,
              "vif": 1.004727136821476
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005508725768847664,
              "stderr": 0.00009741041254629852,
              "tstat": 56.55171377320062,
              "pvalue": 0,
              "ci_lower": 0.005317790407545026,
              "ci_upper": 0.005699661130150303,
              "vif": 1.0039746439961013
            },
            {
              "feature": "Urbanization",
              "coef": 0.005450084300983161,
              "stderr": 0.00009745826769450407,
              "tstat": 55.92223656249644,
              "pvalue": 0,
              "ci_lower": 0.005259055138209263,
              "ci_upper": 0.005641113463757059,
              "vif": 1.0019985772110385
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005558462628022867,
              "stderr": 0.00009671985078496897,
              "tstat": 57.469718810677655,
              "pvalue": 0,
              "ci_lower": 0.005368880845418385,
              "ci_upper": 0.00574804441062735,
              "vif": 1.0032168419845833
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005401024975551143,
              "stderr": 0.00009726197029662351,
              "tstat": 55.530696726371396,
              "pvalue": 0,
              "ci_lower": 0.005210380577748539,
              "ci_upper": 0.005591669373353748,
              "vif": 1.002636160458538
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005428792509259622,
              "stderr": 0.00009763159443512553,
              "tstat": 55.604874023305634,
              "pvalue": 0,
              "ci_lower": 0.005237423606585452,
              "ci_upper": 0.005620161411933793,
              "vif": 1.003088141236145
            },
            {
              "feature": "DamsQuality",
              "coef": 0.005571630289027647,
              "stderr": 0.00009802481146076702,
              "tstat": 56.838979907220825,
              "pvalue": 0,
              "ci_lower": 0.00537949063677036,
              "ci_upper": 0.005763769941284933,
              "vif": 1.0050726516637114
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005486887955680857,
              "stderr": 0.00009754285206221708,
              "tstat": 56.25105109886556,
              "pvalue": 0,
              "ci_lower": 0.005295692998035674,
              "ci_upper": 0.005678082913326039,
              "vif": 1.002532870411583
            },
            {
              "feature": "Landslides",
              "coef": 0.005361513783188561,
              "stderr": 0.00009867992380630982,
              "tstat": 54.33236646708612,
              "pvalue": 0,
              "ci_lower": 0.005168090037073952,
              "ci_upper": 0.00555493752930317,
              "vif": 1.002969792639925
            },
            {
              "feature": "Deforestation",
              "coef": 0.005588439931424427,
              "stderr": 0.00009987765174889925,
              "tstat": 55.95285665580355,
              "pvalue": 0,
              "ci_lower": 0.005392668503871225,
              "ci_upper": 0.005784211358977629,
              "vif": 1.0038893028380798
            }
          ],
          "outliers": [
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.48853831309213613,
              "residual": 0.11646168690786385,
              "abs_error": 0.11646168690786385,
              "pct_error": 19.249865604605596,
              "rank": 1
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.6101419039480875,
              "residual": -0.11014190394808754,
              "abs_error": 0.11014190394808754,
              "pct_error": 22.028380789617508,
              "rank": 2
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5912387249275954,
              "residual": -0.09123872492759544,
              "abs_error": 0.09123872492759544,
              "pct_error": 18.247744985519088,
              "rank": 3
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5151454742984756,
              "residual": 0.08985452570152441,
              "abs_error": 0.08985452570152441,
              "pct_error": 14.851987719260235,
              "rank": 4
            },
            {
              "index": 4462,
              "actual": 0.54,
              "predicted": 0.4547077292967325,
              "residual": 0.08529227070326756,
              "abs_error": 0.08529227070326756,
              "pct_error": 15.794864945049547,
              "rank": 5
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5207236925435899,
              "residual": 0.08427630745641013,
              "abs_error": 0.08427630745641013,
              "pct_error": 13.929968174613244,
              "rank": 6
            },
            {
              "index": 1433,
              "actual": 0.595,
              "predicted": 0.5163998430351571,
              "residual": 0.0786001569648429,
              "abs_error": 0.0786001569648429,
              "pct_error": 13.210110414259313,
              "rank": 7
            },
            {
              "index": 1355,
              "actual": 0.405,
              "predicted": 0.48272881671879525,
              "residual": -0.07772881671879522,
              "abs_error": 0.07772881671879522,
              "pct_error": 19.19230042439388,
              "rank": 8
            },
            {
              "index": 12384,
              "actual": 0.56,
              "predicted": 0.48275738198577306,
              "residual": 0.077242618014227,
              "abs_error": 0.077242618014227,
              "pct_error": 13.793324645397675,
              "rank": 9
            },
            {
              "index": 6225,
              "actual": 0.555,
              "predicted": 0.48074160881455524,
              "residual": 0.0742583911854448,
              "abs_error": 0.0742583911854448,
              "pct_error": 13.379890303683748,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 20,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning",
            "Urbanization",
            "PoliticalFactors",
            "RiverManagement",
            "DrainageSystems",
            "DamsQuality",
            "DeterioratingInfrastructure",
            "Landslides",
            "Deforestation",
            "PopulationScore",
            "MonsoonIntensity"
          ],
          "rmse": 0.02002533188015215,
          "mae": 0.015787960181014617,
          "r2": 0.8504880753985816,
          "adj_r2": 0.8497365703741965,
          "f_stat": 4423.665406273702,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": -0.051927906748763894,
              "stderr": 0.0018791703493223658,
              "tstat": -27.63342172118097,
              "pvalue": 3.1279302666417516e-164,
              "ci_lower": -0.05561129196005316,
              "ci_upper": -0.048244521537474626,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.005693915204940409,
              "stderr": 0.00007558288413389214,
              "tstat": 75.33339419614975,
              "pvalue": 0,
              "ci_lower": 0.005545764252183114,
              "ci_upper": 0.005842066157697705,
              "vif": 1.0038854463945068
            },
            {
              "feature": "Encroachments",
              "coef": 0.00567653761170501,
              "stderr": 0.00007539859189619476,
              "tstat": 75.28705071203717,
              "pvalue": 0,
              "ci_lower": 0.0055287478924586275,
              "ci_upper": 0.005824327330951393,
              "vif": 1.0046582020175903
            },
            {
              "feature": "Siltation",
              "coef": 0.0057087800733435475,
              "stderr": 0.00007589277047438275,
              "tstat": 75.22165863309101,
              "pvalue": 0,
              "ci_lower": 0.0055600217085098776,
              "ci_upper": 0.005857538438177217,
              "vif": 1.0022872828756209
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005685541355289818,
              "stderr": 0.00007594361081557305,
              "tstat": 74.86530195538104,
              "pvalue": 0,
              "ci_lower": 0.005536683337670042,
              "ci_upper": 0.005834399372909594,
              "vif": 1.0048343694758026
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005698044481458983,
              "stderr": 0.00007624102175651925,
              "tstat": 74.73725233714818,
              "pvalue": 0,
              "ci_lower": 0.00554860350494889,
              "ci_upper": 0.005847485457969076,
              "vif": 1.0063266140640637
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005631762463089711,
              "stderr": 0.00007564887547301821,
              "tstat": 74.44608301016186,
              "pvalue": 0,
              "ci_lower": 0.005483482159886513,
              "ci_upper": 0.0057800427662929085,
              "vif": 1.004252344561736
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005708459009601706,
              "stderr": 0.00007665916401446661,
              "tstat": 74.46544823427037,
              "pvalue": 0,
              "ci_lower": 0.005558198427242844,
              "ci_upper": 0.0058587195919605674,
              "vif": 1.0036343403610755
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.0056171375238237556,
              "stderr": 0.00007553915197608475,
              "tstat": 74.3606113767614,
              "pvalue": 0,
              "ci_lower": 0.005469072291013767,
              "ci_upper": 0.005765202756633744,
              "vif": 1.0040489314708243
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005611057243925939,
              "stderr": 0.00007555587919348255,
              "tstat": 74.26367483008455,
              "pvalue": 0,
              "ci_lower": 0.005462959223888752,
              "ci_upper": 0.005759155263963127,
              "vif": 1.0050434819135614
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005631911968338401,
              "stderr": 0.00007582382533371002,
              "tstat": 74.27628378747261,
              "pvalue": 0,
              "ci_lower": 0.00548328874373384,
              "ci_upper": 0.005780535192942961,
              "vif": 1.0042647705516192
            },
            {
              "feature": "Urbanization",
              "coef": 0.005635832013449631,
              "stderr": 0.0000758719741625784,
              "tstat": 74.2808141695796,
              "pvalue": 0,
              "ci_lower": 0.005487114411725796,
              "ci_upper": 0.005784549615173465,
              "vif": 1.002576141289435
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005587266250389787,
              "stderr": 0.0000752887291331079,
              "tstat": 74.2111909009872,
              "pvalue": 0,
              "ci_lower": 0.005439691874513935,
              "ci_upper": 0.005734840626265638,
              "vif": 1.0035716360335287
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005606284741545773,
              "stderr": 0.00007572849176622647,
              "tstat": 74.03137987816197,
              "pvalue": 0,
              "ci_lower": 0.005457848381454446,
              "ci_upper": 0.005754721101637101,
              "vif": 1.0034615102747422
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005587407568688331,
              "stderr": 0.0000760154454448585,
              "tstat": 73.5035825415432,
              "pvalue": 0,
              "ci_lower": 0.005438408747116819,
              "ci_upper": 0.005736406390259842,
              "vif": 1.003891758138672
            },
            {
              "feature": "DamsQuality",
              "coef": 0.005601684069591028,
              "stderr": 0.00007629257199899204,
              "tstat": 73.42371508546123,
              "pvalue": 0,
              "ci_lower": 0.0054521420488084825,
              "ci_upper": 0.005751226090373574,
              "vif": 1.0051128002482623
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005566803315488519,
              "stderr": 0.00007591999472200094,
              "tstat": 73.32460092855234,
              "pvalue": 0,
              "ci_lower": 0.005417991588067949,
              "ci_upper": 0.00571561504290909,
              "vif": 1.0026397689618232
            },
            {
              "feature": "Landslides",
              "coef": 0.005610621473391819,
              "stderr": 0.0000768415306809563,
              "tstat": 73.01548295136062,
              "pvalue": 0,
              "ci_lower": 0.005460003431858156,
              "ci_upper": 0.005761239514925483,
              "vif": 1.0040310041047815
            },
            {
              "feature": "Deforestation",
              "coef": 0.005668858446624716,
              "stderr": 0.00007774034196280443,
              "tstat": 72.92042076862786,
              "pvalue": 0,
              "ci_lower": 0.005516478633900647,
              "ci_upper": 0.005821238259348785,
              "vif": 1.0040768191568483
            },
            {
              "feature": "PopulationScore",
              "coef": 0.0055488665753002315,
              "stderr": 0.00007638138014543316,
              "tstat": 72.64684880968333,
              "pvalue": 0,
              "ci_lower": 0.0053991504805635275,
              "ci_upper": 0.0056985826700369354,
              "vif": 1.0047164986171886
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.00554559631434638,
              "stderr": 0.00007701206337138502,
              "tstat": 72.00944983908754,
              "pvalue": 0,
              "ci_lower": 0.005394644009561813,
              "ci_upper": 0.005696548619130948,
              "vif": 1.0021588015011882
            }
          ],
          "outliers": [
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5107520821387426,
              "residual": 0.09424791786125741,
              "abs_error": 0.09424791786125741,
              "pct_error": 15.578168241530152,
              "rank": 1
            },
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.510983448110064,
              "residual": 0.09401655188993596,
              "abs_error": 0.09401655188993596,
              "pct_error": 15.539925932220822,
              "rank": 2
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.512158194126974,
              "residual": 0.09284180587302593,
              "abs_error": 0.09284180587302593,
              "pct_error": 15.34575303686379,
              "rank": 3
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.5912392139209282,
              "residual": -0.09123921392092815,
              "abs_error": 0.09123921392092815,
              "pct_error": 18.24784278418563,
              "rank": 4
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5170171294916163,
              "residual": 0.08798287050838371,
              "abs_error": 0.08798287050838371,
              "pct_error": 14.542623224526235,
              "rank": 5
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5796676713323314,
              "residual": -0.07966767133233144,
              "abs_error": 0.07966767133233144,
              "pct_error": 15.933534266466287,
              "rank": 6
            },
            {
              "index": 5836,
              "actual": 0.5,
              "predicted": 0.5732169105575471,
              "residual": -0.07321691055754709,
              "abs_error": 0.07321691055754709,
              "pct_error": 14.643382111509418,
              "rank": 7
            },
            {
              "index": 11227,
              "actual": 0.415,
              "predicted": 0.3530456083264763,
              "residual": 0.06195439167352368,
              "abs_error": 0.06195439167352368,
              "pct_error": 14.928769077957513,
              "rank": 8
            },
            {
              "index": 10947,
              "actual": 0.415,
              "predicted": 0.35309935483310095,
              "residual": 0.061900645166899027,
              "abs_error": 0.061900645166899027,
              "pct_error": 14.915818112505791,
              "rank": 9
            },
            {
              "index": 42,
              "actual": 0.415,
              "predicted": 0.3531685086912219,
              "residual": 0.061831491308778075,
              "abs_error": 0.061831491308778075,
              "pct_error": 14.89915453223568,
              "rank": 10
            }
          ]
        }
      ],
      "Forward SFS": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "MonsoonIntensity",
            "Urbanization",
            "Siltation",
            "DeterioratingInfrastructure",
            "PoliticalFactors"
          ],
          "rmse": 0.046632066450891525,
          "mae": 0.03757185102864031,
          "r2": 0.1892523293110815,
          "adj_r2": 0.1882373722871845,
          "f_stat": 780.7185246006644,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.38272269702125494,
              "stderr": 0.0019845946783298,
              "tstat": 192.84678186447,
              "pvalue": 0,
              "ci_lower": 0.37883266854573133,
              "ci_upper": 0.38661272549677855,
              "vif": null
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005131440971870574,
              "stderr": 0.00017631291755802487,
              "tstat": 29.104169126926326,
              "pvalue": 1.6549008556760152e-181,
              "ci_lower": 0.0047858478503166185,
              "ci_upper": 0.005477034093424529,
              "vif": 1.0006213932588899
            },
            {
              "feature": "Urbanization",
              "coef": 0.004832775735231511,
              "stderr": 0.00017364422088923532,
              "tstat": 27.83148042867638,
              "pvalue": 1.6323777625500577e-166,
              "ci_lower": 0.0044924135588914485,
              "ci_upper": 0.005173137911571574,
              "vif": 1.0003633178861708
            },
            {
              "feature": "Siltation",
              "coef": 0.004977538209361973,
              "stderr": 0.00017369720360042027,
              "tstat": 28.656409580504782,
              "pvalue": 3.654535188191007e-176,
              "ci_lower": 0.004637072180957068,
              "ci_upper": 0.0053180042377668785,
              "vif": 1.0001371352667527
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.004904503594532768,
              "stderr": 0.00017380174138043197,
              "tstat": 28.21895543495951,
              "pvalue": 5.150336931926817e-171,
              "ci_lower": 0.00456383266033755,
              "ci_upper": 0.005245174528727986,
              "vif": 1.0009752260528535
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.004867647467605579,
              "stderr": 0.00017228282732332975,
              "tstat": 28.253816954549276,
              "pvalue": 2.0142883897032682e-171,
              "ci_lower": 0.004529953775563894,
              "ci_upper": 0.005205341159647265,
              "vif": 1.0010480410695348
            }
          ],
          "outliers": [
            {
              "index": 19161,
              "actual": 0.655,
              "predicted": 0.4764120082314205,
              "residual": 0.17858799176857953,
              "abs_error": 0.17858799176857953,
              "pct_error": 27.26534225474497,
              "rank": 1
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5211511292884987,
              "residual": 0.16384887071150134,
              "abs_error": 0.16384887071150134,
              "pct_error": 23.91954316956224,
              "rank": 2
            },
            {
              "index": 16488,
              "actual": 0.66,
              "predicted": 0.5015449172323239,
              "residual": 0.15845508276767617,
              "abs_error": 0.15845508276767617,
              "pct_error": 24.008345873890327,
              "rank": 3
            },
            {
              "index": 17323,
              "actual": 0.66,
              "predicted": 0.5017652723094991,
              "residual": 0.15823472769050095,
              "abs_error": 0.15823472769050095,
              "pct_error": 23.97495874098499,
              "rank": 4
            },
            {
              "index": 1554,
              "actual": 0.675,
              "predicted": 0.5169010772654797,
              "residual": 0.1580989227345203,
              "abs_error": 0.1580989227345203,
              "pct_error": 23.42206262733634,
              "rank": 5
            },
            {
              "index": 2893,
              "actual": 0.665,
              "predicted": 0.5211207999388934,
              "residual": 0.14387920006110666,
              "abs_error": 0.14387920006110666,
              "pct_error": 21.635969934001,
              "rank": 6
            },
            {
              "index": 17785,
              "actual": 0.65,
              "predicted": 0.5110046648638362,
              "residual": 0.1389953351361638,
              "abs_error": 0.1389953351361638,
              "pct_error": 21.38389771325597,
              "rank": 7
            },
            {
              "index": 6672,
              "actual": 0.365,
              "predicted": 0.4965148003074944,
              "residual": -0.1315148003074944,
              "abs_error": 0.1315148003074944,
              "pct_error": 36.031452139039565,
              "rank": 8
            },
            {
              "index": 13835,
              "actual": 0.435,
              "predicted": 0.5660888427678623,
              "residual": -0.1310888427678623,
              "abs_error": 0.1310888427678623,
              "pct_error": 30.135366153531567,
              "rank": 9
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.47640417469857055,
              "residual": 0.12859582530142943,
              "abs_error": 0.12859582530142943,
              "pct_error": 21.255508314285855,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "MonsoonIntensity",
            "RiverManagement",
            "Deforestation",
            "Urbanization",
            "ClimateChange",
            "Siltation",
            "CoastalVulnerability",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PoliticalFactors"
          ],
          "rmse": 0.04084513619018542,
          "mae": 0.033011403590186957,
          "r2": 0.3779904048758751,
          "adj_r2": 0.3764310927798006,
          "f_stat": 1042.3163892692362,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.25320889738489444,
              "stderr": 0.0024836645733284143,
              "tstat": 101.94971579659146,
              "pvalue": 0,
              "ci_lower": 0.24834063574535142,
              "ci_upper": 0.25807715902443745,
              "vif": null
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005356687712762762,
              "stderr": 0.0001530892210970282,
              "tstat": 34.99062621376645,
              "pvalue": 1.5788577648830544e-258,
              "ci_lower": 0.00505661563761317,
              "ci_upper": 0.005656759787912353,
              "vif": 1.0013691211440916
            },
            {
              "feature": "RiverManagement",
              "coef": 0.004881165572796637,
              "stderr": 0.00015041766735742404,
              "tstat": 32.45074636876239,
              "pvalue": 8.954633003535884e-224,
              "ci_lower": 0.004586330043164569,
              "ci_upper": 0.005176001102428706,
              "vif": 1.0010729936889966
            },
            {
              "feature": "Deforestation",
              "coef": 0.005189211689446283,
              "stderr": 0.00015448701755705455,
              "tstat": 33.58995319804024,
              "pvalue": 4.4095790988356515e-239,
              "ci_lower": 0.004886399776172288,
              "ci_upper": 0.005492023602720278,
              "vif": 1.0026375552533922
            },
            {
              "feature": "Urbanization",
              "coef": 0.0050217080881796074,
              "stderr": 0.00015074769855009368,
              "tstat": 33.31200500225804,
              "pvalue": 2.6397822064185528e-235,
              "ci_lower": 0.004726225660326104,
              "ci_upper": 0.005317190516033111,
              "vif": 1.0007876095821258
            },
            {
              "feature": "ClimateChange",
              "coef": 0.004978323782196557,
              "stderr": 0.00015222056663858523,
              "tstat": 32.70467251653654,
              "pvalue": 3.8008420092328085e-227,
              "ci_lower": 0.00467995436739147,
              "ci_upper": 0.005276693197001645,
              "vif": 1.0006448529133682
            },
            {
              "feature": "Siltation",
              "coef": 0.005250690659639111,
              "stderr": 0.0001508419416081438,
              "tstat": 34.80922218091916,
              "pvalue": 5.692763942500065e-256,
              "ci_lower": 0.004955023504802252,
              "ci_upper": 0.00554635781447597,
              "vif": 1.0012016945364046
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005074726881260577,
              "stderr": 0.00015024066355297038,
              "tstat": 33.77731941040969,
              "pvalue": 1.2101727903824029e-241,
              "ci_lower": 0.004780238298974188,
              "ci_upper": 0.0053692154635469665,
              "vif": 1.0016104097265914
            },
            {
              "feature": "Watersheds",
              "coef": 0.004993136836071684,
              "stderr": 0.0001501272076429317,
              "tstat": 33.259373263955936,
              "pvalue": 1.3606235517549417e-234,
              "ci_lower": 0.004698870640117391,
              "ci_upper": 0.005287403032025976,
              "vif": 1.0014793394791361
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005134506669660631,
              "stderr": 0.0001508960071611335,
              "tstat": 34.0267894840834,
              "pvalue": 4.499194152737922e-245,
              "ci_lower": 0.004838733540264861,
              "ci_upper": 0.0054302797990564014,
              "vif": 1.001553208720327
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005013382056067099,
              "stderr": 0.00014955479960233003,
              "tstat": 33.522040545658236,
              "pvalue": 3.713702786432251e-238,
              "ci_lower": 0.00472023784419075,
              "ci_upper": 0.0053065262679434485,
              "vif": 1.001325090128101
            }
          ],
          "outliers": [
            {
              "index": 19161,
              "actual": 0.655,
              "predicted": 0.5173152916990651,
              "residual": 0.13768470830093493,
              "abs_error": 0.13768470830093493,
              "pct_error": 21.020566152814492,
              "rank": 1
            },
            {
              "index": 14431,
              "actual": 0.375,
              "predicted": 0.5080876255125393,
              "residual": -0.13308762551253928,
              "abs_error": 0.13308762551253928,
              "pct_error": 35.490033470010474,
              "rank": 2
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.48049233172014383,
              "residual": 0.12450766827985615,
              "abs_error": 0.12450766827985615,
              "pct_error": 20.579779880967962,
              "rank": 3
            },
            {
              "index": 3230,
              "actual": 0.615,
              "predicted": 0.4917248172294888,
              "residual": 0.1232751827705112,
              "abs_error": 0.1232751827705112,
              "pct_error": 20.04474516593678,
              "rank": 4
            },
            {
              "index": 18684,
              "actual": 0.59,
              "predicted": 0.467226606848161,
              "residual": 0.122773393151839,
              "abs_error": 0.122773393151839,
              "pct_error": 20.809049686752374,
              "rank": 5
            },
            {
              "index": 16675,
              "actual": 0.445,
              "predicted": 0.562778926896286,
              "residual": -0.11777892689628594,
              "abs_error": 0.11777892689628594,
              "pct_error": 26.467174583435042,
              "rank": 6
            },
            {
              "index": 15350,
              "actual": 0.655,
              "predicted": 0.5381278614376833,
              "residual": 0.11687213856231671,
              "abs_error": 0.11687213856231671,
              "pct_error": 17.84307458966667,
              "rank": 7
            },
            {
              "index": 14316,
              "actual": 0.475,
              "predicted": 0.5911919933938294,
              "residual": -0.11619199339382946,
              "abs_error": 0.11619199339382946,
              "pct_error": 24.461472293437783,
              "rank": 8
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5688316168905518,
              "residual": 0.11616838310944821,
              "abs_error": 0.11616838310944821,
              "pct_error": 16.958888045174923,
              "rank": 9
            },
            {
              "index": 3522,
              "actual": 0.58,
              "predicted": 0.4663313044676973,
              "residual": 0.11366869553230263,
              "abs_error": 0.11366869553230263,
              "pct_error": 19.598050953845284,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 14,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "Urbanization",
            "ClimateChange",
            "Siltation",
            "AgriculturalPractices",
            "Encroachments",
            "CoastalVulnerability",
            "Watersheds",
            "DeterioratingInfrastructure",
            "InadequatePlanning",
            "PoliticalFactors"
          ],
          "rmse": 0.03492024422033137,
          "mae": 0.028236348420743212,
          "r2": 0.5453565570084149,
          "adj_r2": 0.5437593153015436,
          "f_stat": 1477.6856531778212,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.14063267559238032,
              "stderr": 0.0025459768914777537,
              "tstat": 55.23721604195446,
              "pvalue": 0,
              "ci_lower": 0.13564227471303117,
              "ci_upper": 0.14562307647172948,
              "vif": null
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005349157765568037,
              "stderr": 0.00012994282046714677,
              "tstat": 41.165473754823225,
              "pvalue": 0,
              "ci_lower": 0.005094455231662487,
              "ci_upper": 0.005603860299473587,
              "vif": 1.0017220977626045
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005079034535084528,
              "stderr": 0.00012736843726521846,
              "tstat": 39.87671234835431,
              "pvalue": 0,
              "ci_lower": 0.004829378081619727,
              "ci_upper": 0.00532869098854933,
              "vif": 1.0022082167821913
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005191759512234805,
              "stderr": 0.0001277150541176801,
              "tstat": 40.65111625330384,
              "pvalue": 0,
              "ci_lower": 0.004941423650778866,
              "ci_upper": 0.005442095373690743,
              "vif": 1.002051258604484
            },
            {
              "feature": "Deforestation",
              "coef": 0.005370212402574724,
              "stderr": 0.0001311550265311597,
              "tstat": 40.94553250918579,
              "pvalue": 0,
              "ci_lower": 0.005113133808529723,
              "ci_upper": 0.005627290996619724,
              "vif": 1.0033849365681173
            },
            {
              "feature": "Urbanization",
              "coef": 0.005167275701726565,
              "stderr": 0.0001279537175383955,
              "tstat": 40.38394351595141,
              "pvalue": 0,
              "ci_lower": 0.004916472033139857,
              "ci_upper": 0.005418079370313272,
              "vif": 1.001115218266368
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005370768208022831,
              "stderr": 0.00012927982263112936,
              "tstat": 41.54374672486286,
              "pvalue": 0,
              "ci_lower": 0.005117365224397939,
              "ci_upper": 0.005624171191647724,
              "vif": 1.002149468159087
            },
            {
              "feature": "Siltation",
              "coef": 0.005355362894651643,
              "stderr": 0.0001280328207420525,
              "tstat": 41.82804739919839,
              "pvalue": 0,
              "ci_lower": 0.005104404174894436,
              "ci_upper": 0.005606321614408851,
              "vif": 1.0015155192982326
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.0051383714411771045,
              "stderr": 0.00012741592263159387,
              "tstat": 40.32754568700192,
              "pvalue": 0,
              "ci_lower": 0.0048886219110567735,
              "ci_upper": 0.005388120971297435,
              "vif": 1.003504631240527
            },
            {
              "feature": "Encroachments",
              "coef": 0.005256360513683403,
              "stderr": 0.00012716542493359002,
              "tstat": 41.33482443383056,
              "pvalue": 0,
              "ci_lower": 0.005007101987207519,
              "ci_upper": 0.005505619040159287,
              "vif": 1.0033526623914095
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005249297649313134,
              "stderr": 0.00012755012885730637,
              "tstat": 41.15478123260588,
              "pvalue": 0,
              "ci_lower": 0.004999285059905402,
              "ci_upper": 0.005499310238720865,
              "vif": 1.002359139679238
            },
            {
              "feature": "Watersheds",
              "coef": 0.005244712214142319,
              "stderr": 0.00012746399651032808,
              "tstat": 41.146616752420385,
              "pvalue": 0,
              "ci_lower": 0.004994868453816084,
              "ci_upper": 0.0054945559744685535,
              "vif": 1.002388212425832
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005263002611435822,
              "stderr": 0.0001280770813525535,
              "tstat": 41.09246210060433,
              "pvalue": 0,
              "ci_lower": 0.005011957135907066,
              "ci_upper": 0.0055140480869645785,
              "vif": 1.001841649792603
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005197687916829224,
              "stderr": 0.0001278826599005345,
              "tstat": 40.6441961785274,
              "pvalue": 0,
              "ci_lower": 0.0049470235291997205,
              "ci_upper": 0.005448352304458727,
              "vif": 1.0029604735954674
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005416197240004779,
              "stderr": 0.0001270242438893749,
              "tstat": 42.63908269921868,
              "pvalue": 0,
              "ci_lower": 0.0051672154442445415,
              "ci_upper": 0.005665179035765017,
              "vif": 1.0029639718450034
            }
          ],
          "outliers": [
            {
              "index": 3230,
              "actual": 0.615,
              "predicted": 0.488321127989811,
              "residual": 0.12667887201018901,
              "abs_error": 0.12667887201018901,
              "pct_error": 20.59819057076244,
              "rank": 1
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.4816103370127762,
              "residual": 0.12338966298722376,
              "abs_error": 0.12338966298722376,
              "pct_error": 20.394985617722934,
              "rank": 2
            },
            {
              "index": 8474,
              "actual": 0.54,
              "predicted": 0.4197873357357086,
              "residual": 0.12021266426429145,
              "abs_error": 0.12021266426429145,
              "pct_error": 22.261604493387306,
              "rank": 3
            },
            {
              "index": 17785,
              "actual": 0.65,
              "predicted": 0.5406229299893016,
              "residual": 0.10937707001069841,
              "abs_error": 0.10937707001069841,
              "pct_error": 16.827241540107448,
              "rank": 4
            },
            {
              "index": 10319,
              "actual": 0.635,
              "predicted": 0.5303388881872086,
              "residual": 0.10466111181279136,
              "abs_error": 0.10466111181279136,
              "pct_error": 16.482064852408087,
              "rank": 5
            },
            {
              "index": 19239,
              "actual": 0.65,
              "predicted": 0.5455072455286307,
              "residual": 0.1044927544713693,
              "abs_error": 0.1044927544713693,
              "pct_error": 16.07580838021066,
              "rank": 6
            },
            {
              "index": 3481,
              "actual": 0.595,
              "predicted": 0.4929431423120969,
              "residual": 0.10205685768790307,
              "abs_error": 0.10205685768790307,
              "pct_error": 17.152413056790433,
              "rank": 7
            },
            {
              "index": 17121,
              "actual": 0.6,
              "predicted": 0.49815481793970756,
              "residual": 0.10184518206029242,
              "abs_error": 0.10184518206029242,
              "pct_error": 16.974197010048737,
              "rank": 8
            },
            {
              "index": 12032,
              "actual": 0.445,
              "predicted": 0.5457121771368326,
              "residual": -0.10071217713683261,
              "abs_error": 0.10071217713683261,
              "pct_error": 22.631949918389353,
              "rank": 9
            },
            {
              "index": 4186,
              "actual": 0.54,
              "predicted": 0.43998828168280235,
              "residual": 0.10001171831719768,
              "abs_error": 0.10001171831719768,
              "pct_error": 18.520688577258827,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "Urbanization",
            "ClimateChange",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "Encroachments",
            "IneffectiveDisasterPreparedness",
            "CoastalVulnerability",
            "Landslides",
            "Watersheds",
            "DeterioratingInfrastructure",
            "WetlandLoss",
            "InadequatePlanning",
            "PoliticalFactors"
          ],
          "rmse": 0.026320208989556153,
          "mae": 0.021144041828985057,
          "r2": 0.7417174568561542,
          "adj_r2": 0.7405496382737404,
          "f_stat": 2629.4955011884217,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.014200233107803826,
              "stderr": 0.002265170086435888,
              "tstat": 6.268947834353163,
              "pvalue": 3.728232589545747e-10,
              "ci_lower": 0.00976024504533668,
              "ci_upper": 0.018640221170270973,
              "vif": null
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005511641438573287,
              "stderr": 0.00009891635398013166,
              "tstat": 55.72022437948284,
              "pvalue": 0,
              "ci_lower": 0.005317754262734057,
              "ci_upper": 0.005705528614412518,
              "vif": 1.0021267668745961
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.0054385353061424955,
              "stderr": 0.00009699988887464034,
              "tstat": 56.0674385222347,
              "pvalue": 0,
              "ci_lower": 0.005248404617395105,
              "ci_upper": 0.005628665994889886,
              "vif": 1.0035073967558013
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005464787521704686,
              "stderr": 0.00009723506870887302,
              "tstat": 56.20181683695366,
              "pvalue": 0,
              "ci_lower": 0.005274195854038856,
              "ci_upper": 0.005655379189370516,
              "vif": 1.0027562817444626
            },
            {
              "feature": "Deforestation",
              "coef": 0.005588664871832435,
              "stderr": 0.00009984406881583689,
              "tstat": 55.97392952946227,
              "pvalue": 0,
              "ci_lower": 0.005392959270604061,
              "ci_upper": 0.00578437047306081,
              "vif": 1.0038897628366827
            },
            {
              "feature": "Urbanization",
              "coef": 0.0055101593601660824,
              "stderr": 0.0000974375796567004,
              "tstat": 56.5506591971999,
              "pvalue": 0,
              "ci_lower": 0.005319170748272419,
              "ci_upper": 0.005701147972059746,
              "vif": 1.0022475606370542
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005701179377368382,
              "stderr": 0.00009846077509641383,
              "tstat": 57.903051969535355,
              "pvalue": 0,
              "ci_lower": 0.005508185187365991,
              "ci_upper": 0.005894173567370773,
              "vif": 1.003555260467021
            },
            {
              "feature": "DamsQuality",
              "coef": 0.005386017883954287,
              "stderr": 0.00009793789487454595,
              "tstat": 54.99421741557274,
              "pvalue": 0,
              "ci_lower": 0.005194048597978793,
              "ci_upper": 0.005577987169929782,
              "vif": 1.0039665824157402
            },
            {
              "feature": "Siltation",
              "coef": 0.005569507959860479,
              "stderr": 0.00009746431757096762,
              "tstat": 57.144071786119056,
              "pvalue": 0,
              "ci_lower": 0.005378466938648472,
              "ci_upper": 0.005760548981072486,
              "vif": 1.001959424519375
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005468608724528784,
              "stderr": 0.00009703090764061251,
              "tstat": 56.35945141092223,
              "pvalue": 0,
              "ci_lower": 0.005278417235512374,
              "ci_upper": 0.005658800213545194,
              "vif": 1.0046989496109584
            },
            {
              "feature": "Encroachments",
              "coef": 0.005550737890506135,
              "stderr": 0.00009682440957136294,
              "tstat": 57.3278774957574,
              "pvalue": 0,
              "ci_lower": 0.005360951160923853,
              "ci_upper": 0.005740524620088417,
              "vif": 1.0042203423119405
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005431916703601795,
              "stderr": 0.00009749164879010059,
              "tstat": 55.716738520821465,
              "pvalue": 0,
              "ci_lower": 0.005240822110127197,
              "ci_upper": 0.005623011297076393,
              "vif": 1.0037238958325092
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.0055134977437374996,
              "stderr": 0.00009715552654490338,
              "tstat": 56.74919317316724,
              "pvalue": 0,
              "ci_lower": 0.0053230619876566765,
              "ci_upper": 0.005703933499818323,
              "vif": 1.004015360215571
            },
            {
              "feature": "Landslides",
              "coef": 0.005440657875776739,
              "stderr": 0.00009866126908997388,
              "tstat": 55.14481950171496,
              "pvalue": 0,
              "ci_lower": 0.005247270695003662,
              "ci_upper": 0.005634045056549816,
              "vif": 1.0032656437986625
            },
            {
              "feature": "Watersheds",
              "coef": 0.005616448895013533,
              "stderr": 0.00009707731974320185,
              "tstat": 57.85541782437646,
              "pvalue": 0,
              "ci_lower": 0.005426166433057526,
              "ci_upper": 0.005806731356969541,
              "vif": 1.003783907510841
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005471944089257073,
              "stderr": 0.00009750763721801547,
              "tstat": 56.11810772342332,
              "pvalue": 0,
              "ci_lower": 0.005280818156666042,
              "ci_upper": 0.005663070021848105,
              "vif": 1.0024836311433767
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.0054545200801189835,
              "stderr": 0.00009787671872749069,
              "tstat": 55.728473032545274,
              "pvalue": 0,
              "ci_lower": 0.005262670706270291,
              "ci_upper": 0.005646369453967676,
              "vif": 1.005281711298166
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.00550298386397327,
              "stderr": 0.00009737685508610194,
              "tstat": 56.5122364971374,
              "pvalue": 0,
              "ci_lower": 0.005312114279065778,
              "ci_upper": 0.005693853448880762,
              "vif": 1.0039585230948949
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.00560026410854197,
              "stderr": 0.00009669620483261192,
              "tstat": 57.916069386967465,
              "pvalue": 0,
              "ci_lower": 0.00541072867466283,
              "ci_upper": 0.005789799542421111,
              "vif": 1.0034014863521796
            }
          ],
          "outliers": [
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.4942994608711109,
              "residual": 0.11070053912888911,
              "abs_error": 0.11070053912888911,
              "pct_error": 18.2976097733701,
              "rank": 1
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5053047418907162,
              "residual": 0.09969525810928381,
              "abs_error": 0.09969525810928381,
              "pct_error": 16.478555059385755,
              "rank": 2
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.5942210521926916,
              "residual": -0.09422105219269161,
              "abs_error": 0.09422105219269161,
              "pct_error": 18.844210438538322,
              "rank": 3
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5146554440577653,
              "residual": 0.09034455594223467,
              "abs_error": 0.09034455594223467,
              "pct_error": 14.93298445326193,
              "rank": 4
            },
            {
              "index": 19970,
              "actual": 0.595,
              "predicted": 0.5054865933352866,
              "residual": 0.08951340666471341,
              "abs_error": 0.08951340666471341,
              "pct_error": 15.044270027682927,
              "rank": 5
            },
            {
              "index": 7501,
              "actual": 0.6,
              "predicted": 0.5107072618588374,
              "residual": 0.08929273814116256,
              "abs_error": 0.08929273814116256,
              "pct_error": 14.882123023527093,
              "rank": 6
            },
            {
              "index": 16526,
              "actual": 0.485,
              "predicted": 0.40008395058885243,
              "residual": 0.08491604941114755,
              "abs_error": 0.08491604941114755,
              "pct_error": 17.508463796112895,
              "rank": 7
            },
            {
              "index": 5714,
              "actual": 0.595,
              "predicted": 0.5107508525970093,
              "residual": 0.08424914740299072,
              "abs_error": 0.08424914740299072,
              "pct_error": 14.159520571931214,
              "rank": 8
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.5218333490419507,
              "residual": 0.08316665095804932,
              "abs_error": 0.08316665095804932,
              "pct_error": 13.746553877363525,
              "rank": 9
            },
            {
              "index": 5836,
              "actual": 0.5,
              "predicted": 0.5824743993209092,
              "residual": -0.08247439932090916,
              "abs_error": 0.08247439932090916,
              "pct_error": 16.494879864181833,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 20,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "Urbanization",
            "ClimateChange",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "Encroachments",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Landslides",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PopulationScore",
            "WetlandLoss",
            "InadequatePlanning",
            "PoliticalFactors"
          ],
          "rmse": 0.020025331880152146,
          "mae": 0.015787960181014592,
          "r2": 0.8504880753985816,
          "adj_r2": 0.8497365703741965,
          "f_stat": 4423.6654062737025,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": -0.05192790674876566,
              "stderr": 0.0018791703493223726,
              "tstat": -27.63342172118181,
              "pvalue": 3.1279302665721265e-164,
              "ci_lower": -0.055611291960054945,
              "ci_upper": -0.04824452153747638,
              "vif": null
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005545596314346644,
              "stderr": 0.00007701206337138845,
              "tstat": 72.00944983908776,
              "pvalue": 0,
              "ci_lower": 0.00539464400956207,
              "ci_upper": 0.005696548619131218,
              "vif": 1.0021588015011882
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005617137523823786,
              "stderr": 0.00007553915197608472,
              "tstat": 74.36061137676182,
              "pvalue": 0,
              "ci_lower": 0.005469072291013797,
              "ci_upper": 0.005765202756633774,
              "vif": 1.0040489314708243
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005606284741545792,
              "stderr": 0.00007572849176622654,
              "tstat": 74.03137987816216,
              "pvalue": 0,
              "ci_lower": 0.005457848381454465,
              "ci_upper": 0.00575472110163712,
              "vif": 1.0034615102747422
            },
            {
              "feature": "Deforestation",
              "coef": 0.005668858446624729,
              "stderr": 0.00007774034196280471,
              "tstat": 72.92042076862776,
              "pvalue": 0,
              "ci_lower": 0.00551647863390066,
              "ci_upper": 0.005821238259348798,
              "vif": 1.0040768191568483
            },
            {
              "feature": "Urbanization",
              "coef": 0.0056358320134496515,
              "stderr": 0.00007587197416257873,
              "tstat": 74.28081416957954,
              "pvalue": 0,
              "ci_lower": 0.005487114411725816,
              "ci_upper": 0.005784549615173487,
              "vif": 1.002576141289435
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005708459009601704,
              "stderr": 0.00007665916401446642,
              "tstat": 74.46544823427054,
              "pvalue": 0,
              "ci_lower": 0.005558198427242842,
              "ci_upper": 0.005858719591960566,
              "vif": 1.0036343403610755
            },
            {
              "feature": "DamsQuality",
              "coef": 0.00560168406959106,
              "stderr": 0.00007629257199899206,
              "tstat": 73.42371508546162,
              "pvalue": 0,
              "ci_lower": 0.005452142048808515,
              "ci_upper": 0.005751226090373606,
              "vif": 1.0051128002482623
            },
            {
              "feature": "Siltation",
              "coef": 0.005708780073343547,
              "stderr": 0.00007589277047438268,
              "tstat": 75.22165863309107,
              "pvalue": 0,
              "ci_lower": 0.005560021708509877,
              "ci_upper": 0.0058575384381772165,
              "vif": 1.002287282875621
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005611057243925938,
              "stderr": 0.00007555587919348241,
              "tstat": 74.26367483008467,
              "pvalue": 0,
              "ci_lower": 0.00546295922388875,
              "ci_upper": 0.005759155263963125,
              "vif": 1.0050434819135614
            },
            {
              "feature": "Encroachments",
              "coef": 0.005676537611705036,
              "stderr": 0.00007539859189619484,
              "tstat": 75.28705071203744,
              "pvalue": 0,
              "ci_lower": 0.0055287478924586535,
              "ci_upper": 0.005824327330951419,
              "vif": 1.00465820201759
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005685541355289808,
              "stderr": 0.00007594361081557294,
              "tstat": 74.86530195538101,
              "pvalue": 0,
              "ci_lower": 0.005536683337670031,
              "ci_upper": 0.005834399372909584,
              "vif": 1.0048343694758028
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005587407568688356,
              "stderr": 0.00007601544544485853,
              "tstat": 73.50358254154351,
              "pvalue": 0,
              "ci_lower": 0.0054384087471168446,
              "ci_upper": 0.005736406390259867,
              "vif": 1.003891758138672
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005631762463089725,
              "stderr": 0.00007564887547301828,
              "tstat": 74.44608301016197,
              "pvalue": 0,
              "ci_lower": 0.005483482159886527,
              "ci_upper": 0.005780042766292922,
              "vif": 1.004252344561736
            },
            {
              "feature": "Landslides",
              "coef": 0.005610621473391832,
              "stderr": 0.00007684153068095636,
              "tstat": 73.01548295136074,
              "pvalue": 0,
              "ci_lower": 0.005460003431858169,
              "ci_upper": 0.005761239514925496,
              "vif": 1.0040310041047815
            },
            {
              "feature": "Watersheds",
              "coef": 0.005693915204940376,
              "stderr": 0.00007558288413389199,
              "tstat": 75.33339419614947,
              "pvalue": 0,
              "ci_lower": 0.005545764252183081,
              "ci_upper": 0.005842066157697672,
              "vif": 1.0038854463945068
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005566803315488513,
              "stderr": 0.00007591999472200083,
              "tstat": 73.32460092855237,
              "pvalue": 0,
              "ci_lower": 0.005417991588067943,
              "ci_upper": 0.005715615042909084,
              "vif": 1.0026397689618232
            },
            {
              "feature": "PopulationScore",
              "coef": 0.00554886657530027,
              "stderr": 0.0000763813801454332,
              "tstat": 72.6468488096838,
              "pvalue": 0,
              "ci_lower": 0.005399150480563566,
              "ci_upper": 0.005698582670036974,
              "vif": 1.0047164986171886
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005698044481458992,
              "stderr": 0.00007624102175651927,
              "tstat": 74.73725233714828,
              "pvalue": 0,
              "ci_lower": 0.005548603504948899,
              "ci_upper": 0.005847485457969085,
              "vif": 1.0063266140640637
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005631911968338423,
              "stderr": 0.00007582382533371014,
              "tstat": 74.27628378747279,
              "pvalue": 0,
              "ci_lower": 0.005483288743733863,
              "ci_upper": 0.0057805351929429835,
              "vif": 1.0042647705516192
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005587266250389787,
              "stderr": 0.00007528872913310781,
              "tstat": 74.21119090098728,
              "pvalue": 0,
              "ci_lower": 0.005439691874513936,
              "ci_upper": 0.005734840626265637,
              "vif": 1.0035716360335287
            }
          ],
          "outliers": [
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5107520821387427,
              "residual": 0.0942479178612573,
              "abs_error": 0.0942479178612573,
              "pct_error": 15.578168241530133,
              "rank": 1
            },
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.5109834481100635,
              "residual": 0.09401655188993652,
              "abs_error": 0.09401655188993652,
              "pct_error": 15.539925932220914,
              "rank": 2
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.5121581941269745,
              "residual": 0.09284180587302548,
              "abs_error": 0.09284180587302548,
              "pct_error": 15.345753036863716,
              "rank": 3
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.5912392139209285,
              "residual": -0.09123921392092849,
              "abs_error": 0.09123921392092849,
              "pct_error": 18.247842784185696,
              "rank": 4
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5170171294916168,
              "residual": 0.08798287050838316,
              "abs_error": 0.08798287050838316,
              "pct_error": 14.542623224526144,
              "rank": 5
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5796676713323322,
              "residual": -0.07966767133233221,
              "abs_error": 0.07966767133233221,
              "pct_error": 15.933534266466442,
              "rank": 6
            },
            {
              "index": 5836,
              "actual": 0.5,
              "predicted": 0.573216910557547,
              "residual": -0.07321691055754698,
              "abs_error": 0.07321691055754698,
              "pct_error": 14.643382111509396,
              "rank": 7
            },
            {
              "index": 11227,
              "actual": 0.415,
              "predicted": 0.3530456083264759,
              "residual": 0.06195439167352407,
              "abs_error": 0.06195439167352407,
              "pct_error": 14.928769077957607,
              "rank": 8
            },
            {
              "index": 10947,
              "actual": 0.415,
              "predicted": 0.35309935483309995,
              "residual": 0.061900645166900026,
              "abs_error": 0.061900645166900026,
              "pct_error": 14.91581811250603,
              "rank": 9
            },
            {
              "index": 42,
              "actual": 0.415,
              "predicted": 0.3531685086912209,
              "residual": 0.061831491308779074,
              "abs_error": 0.061831491308779074,
              "pct_error": 14.899154532235922,
              "rank": 10
            }
          ]
        }
      ],
      "RFE": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Urbanization",
            "ClimateChange",
            "Siltation",
            "DeterioratingInfrastructure",
            "PoliticalFactors"
          ],
          "rmse": 0.0466998405615226,
          "mae": 0.037817953508124995,
          "r2": 0.18689396793202362,
          "adj_r2": 0.1858760585278324,
          "f_stat": 758.2080838310876,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.38473418670838827,
              "stderr": 0.001981083536328646,
              "tstat": 194.20391904390848,
              "pvalue": 0,
              "ci_lower": 0.3808510404655519,
              "ci_upper": 0.38861733295122464,
              "vif": null
            },
            {
              "feature": "Urbanization",
              "coef": 0.004798443084759284,
              "stderr": 0.00017412360754601782,
              "tstat": 27.557682455500125,
              "pvalue": 2.2873983386825984e-163,
              "ci_lower": 0.004457141256728106,
              "ci_upper": 0.005139744912790462,
              "vif": 1.0002045134540527
            },
            {
              "feature": "ClimateChange",
              "coef": 0.004821230143115637,
              "stderr": 0.000175836726725439,
              "tstat": 27.41878919666064,
              "pvalue": 8.80515995098831e-162,
              "ci_lower": 0.004476570409078421,
              "ci_upper": 0.005165889877152852,
              "vif": 1.0001967447990434
            },
            {
              "feature": "Siltation",
              "coef": 0.004972901258728026,
              "stderr": 0.00017418990966721034,
              "tstat": 28.548733208649967,
              "pvalue": 6.86823469854138e-175,
              "ci_lower": 0.0046314694710923796,
              "ci_upper": 0.0053143330463636725,
              "vif": 1.0001296309321885
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.004877837026331476,
              "stderr": 0.0001742915429741262,
              "tstat": 27.98665352945781,
              "pvalue": 2.612479921738023e-168,
              "ci_lower": 0.00453620602599901,
              "ci_upper": 0.005219468026663942,
              "vif": 1.0009309493051937
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.004804444586661534,
              "stderr": 0.00017275311776694267,
              "tstat": 27.811044158074772,
              "pvalue": 2.8096335961530823e-166,
              "ci_lower": 0.004465829072528216,
              "ci_upper": 0.005143060100794852,
              "vif": 1.00082727948173
            }
          ],
          "outliers": [
            {
              "index": 1554,
              "actual": 0.675,
              "predicted": 0.5010729575625222,
              "residual": 0.1739270424374778,
              "abs_error": 0.1739270424374778,
              "pct_error": 25.766969249996713,
              "rank": 1
            },
            {
              "index": 17323,
              "actual": 0.66,
              "predicted": 0.500939290952616,
              "residual": 0.159060709047384,
              "abs_error": 0.159060709047384,
              "pct_error": 24.10010743142182,
              "rank": 2
            },
            {
              "index": 19161,
              "actual": 0.655,
              "predicted": 0.5011125301773325,
              "residual": 0.15388746982266754,
              "abs_error": 0.15388746982266754,
              "pct_error": 23.494270201933976,
              "rank": 3
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5353440765325591,
              "residual": 0.14965592346744094,
              "abs_error": 0.14965592346744094,
              "pct_error": 21.84758006823955,
              "rank": 4
            },
            {
              "index": 12863,
              "actual": 0.61,
              "predicted": 0.46273993426473226,
              "residual": 0.14726006573526773,
              "abs_error": 0.14726006573526773,
              "pct_error": 24.140994382830776,
              "rank": 5
            },
            {
              "index": 17833,
              "actual": 0.35,
              "predicted": 0.49602299657710386,
              "residual": -0.14602299657710388,
              "abs_error": 0.14602299657710388,
              "pct_error": 41.720856164886825,
              "rank": 6
            },
            {
              "index": 2893,
              "actual": 0.665,
              "predicted": 0.5204495237923124,
              "residual": 0.14455047620768768,
              "abs_error": 0.14455047620768768,
              "pct_error": 21.736913715441755,
              "rank": 7
            },
            {
              "index": 13152,
              "actual": 0.63,
              "predicted": 0.4862649883095593,
              "residual": 0.14373501169044073,
              "abs_error": 0.14373501169044073,
              "pct_error": 22.815081220704876,
              "rank": 8
            },
            {
              "index": 2662,
              "actual": 0.365,
              "predicted": 0.5058088959457864,
              "residual": -0.14080889594578638,
              "abs_error": 0.14080889594578638,
              "pct_error": 38.57777971117435,
              "rank": 9
            },
            {
              "index": 11327,
              "actual": 0.39,
              "predicted": 0.530017476373244,
              "residual": -0.14001747637324402,
              "abs_error": 0.14001747637324402,
              "pct_error": 35.901917018780516,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Urbanization",
            "ClimateChange",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "Encroachments",
            "Watersheds",
            "DeterioratingInfrastructure",
            "InadequatePlanning",
            "PoliticalFactors"
          ],
          "rmse": 0.0409479884052787,
          "mae": 0.033218112680893586,
          "r2": 0.37485389372627276,
          "adj_r2": 0.37328671872934693,
          "f_stat": 1017.4238515490207,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.2525517456833564,
              "stderr": 0.0025208461469847557,
              "tstat": 100.1853072173562,
              "pvalue": 0,
              "ci_lower": 0.24761060398155668,
              "ci_upper": 0.2574928873851562,
              "vif": null
            },
            {
              "feature": "Urbanization",
              "coef": 0.005050080615454047,
              "stderr": 0.00015147200346229885,
              "tstat": 33.340026539696524,
              "pvalue": 1.1015507705120267e-235,
              "ci_lower": 0.0047531784685864355,
              "ci_upper": 0.005346982762321659,
              "vif": 1.0009048533940477
            },
            {
              "feature": "ClimateChange",
              "coef": 0.0053370696037939105,
              "stderr": 0.00015308736013449888,
              "tstat": 34.86290180394312,
              "pvalue": 9.996975422767896e-257,
              "ci_lower": 0.005037001176339983,
              "ci_upper": 0.005637138031247838,
              "vif": 1.0025348590347165
            },
            {
              "feature": "DamsQuality",
              "coef": 0.004934063973532809,
              "stderr": 0.00015224130414937513,
              "tstat": 32.40949623429156,
              "pvalue": 3.1454635142282502e-223,
              "ci_lower": 0.0046356539108764125,
              "ci_upper": 0.005232474036189205,
              "vif": 1.0025100656987986
            },
            {
              "feature": "Siltation",
              "coef": 0.005132094033143677,
              "stderr": 0.0001515076153554946,
              "tstat": 33.87350544130622,
              "pvalue": 5.795170174023148e-243,
              "ci_lower": 0.004835122082963888,
              "ci_upper": 0.005429065983323466,
              "vif": 1.0005384674034004
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005137167655890727,
              "stderr": 0.0001508373452540855,
              "tstat": 34.05766421596169,
              "pvalue": 1.6871494766425733e-245,
              "ci_lower": 0.004841509510424289,
              "ci_upper": 0.005432825801357165,
              "vif": 1.0033201719354377
            },
            {
              "feature": "Encroachments",
              "coef": 0.004984197430578093,
              "stderr": 0.0001504835438363155,
              "tstat": 33.121212482871364,
              "pvalue": 9.966906117889668e-233,
              "ci_lower": 0.004689232775645217,
              "ci_upper": 0.005279162085510969,
              "vif": 1.0024052743609126
            },
            {
              "feature": "Watersheds",
              "coef": 0.005030142522472267,
              "stderr": 0.0001508615416246781,
              "tstat": 33.342775556321314,
              "pvalue": 1.0110042930881709e-235,
              "ci_lower": 0.004734436949400654,
              "ci_upper": 0.00532584809554388,
              "vif": 1.001769443047303
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005129478313147796,
              "stderr": 0.0001516119042668873,
              "tstat": 33.83295222067926,
              "pvalue": 2.088805170537039e-242,
              "ci_lower": 0.0048323019449833015,
              "ci_upper": 0.00542665468131229,
              "vif": 1.0015500397611747
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005079658927185707,
              "stderr": 0.00015136827914780183,
              "tstat": 33.558278892935895,
              "pvalue": 1.1918132642345954e-238,
              "ci_lower": 0.004782960091629444,
              "ci_upper": 0.005376357762741969,
              "vif": 1.0024900079526025
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.0051946843580117285,
              "stderr": 0.00015033549692218445,
              "tstat": 34.55394410742902,
              "pvalue": 2.1591288858244872e-252,
              "ci_lower": 0.004900009891665772,
              "ci_upper": 0.005489358824357685,
              "vif": 1.0022705736371575
            }
          ],
          "outliers": [
            {
              "index": 17323,
              "actual": 0.66,
              "predicted": 0.5133704931612751,
              "residual": 0.1466295068387249,
              "abs_error": 0.1466295068387249,
              "pct_error": 22.216591945261346,
              "rank": 1
            },
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.4626461553457579,
              "residual": 0.14235384465424206,
              "abs_error": 0.14235384465424206,
              "pct_error": 23.529561099874723,
              "rank": 2
            },
            {
              "index": 13152,
              "actual": 0.63,
              "predicted": 0.5023061510716111,
              "residual": 0.12769384892838886,
              "abs_error": 0.12769384892838886,
              "pct_error": 20.26886490926807,
              "rank": 3
            },
            {
              "index": 1163,
              "actual": 0.42,
              "predicted": 0.5467835918826761,
              "residual": -0.12678359188267613,
              "abs_error": 0.12678359188267613,
              "pct_error": 30.186569495875272,
              "rank": 4
            },
            {
              "index": 18707,
              "actual": 0.595,
              "predicted": 0.47180077124688347,
              "residual": 0.12319922875311651,
              "abs_error": 0.12319922875311651,
              "pct_error": 20.70575273161622,
              "rank": 5
            },
            {
              "index": 2394,
              "actual": 0.4,
              "predicted": 0.5225600362696634,
              "residual": -0.12256003626966339,
              "abs_error": 0.12256003626966339,
              "pct_error": 30.640009067415846,
              "rank": 6
            },
            {
              "index": 2662,
              "actual": 0.365,
              "predicted": 0.48749155038699227,
              "residual": -0.12249155038699228,
              "abs_error": 0.12249155038699228,
              "pct_error": 33.55932887314857,
              "rank": 7
            },
            {
              "index": 19673,
              "actual": 0.605,
              "predicted": 0.48281866996273065,
              "residual": 0.12218133003726933,
              "abs_error": 0.12218133003726933,
              "pct_error": 20.195261163185013,
              "rank": 8
            },
            {
              "index": 14539,
              "actual": 0.61,
              "predicted": 0.488096396918297,
              "residual": 0.121903603081703,
              "abs_error": 0.121903603081703,
              "pct_error": 19.98419722650869,
              "rank": 9
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5641572768234402,
              "residual": 0.12084272317655986,
              "abs_error": 0.12084272317655986,
              "pct_error": 17.641273456432096,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 14,
          "features": [
            "TopographyDrainage",
            "Urbanization",
            "ClimateChange",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "Encroachments",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Watersheds",
            "DeterioratingInfrastructure",
            "InadequatePlanning",
            "PoliticalFactors"
          ],
          "rmse": 0.034664959530327555,
          "mae": 0.02809088472734798,
          "r2": 0.5519796074157253,
          "adj_r2": 0.5504056336400214,
          "f_stat": 1458.8269436132894,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.13965043486959988,
              "stderr": 0.0025695151056251584,
              "tstat": 54.348944889982725,
              "pvalue": 0,
              "ci_lower": 0.13461389644478725,
              "ci_upper": 0.14468697329441252,
              "vif": null
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005237890824969601,
              "stderr": 0.00012786169037275723,
              "tstat": 40.96528686348111,
              "pvalue": 0,
              "ci_lower": 0.004987267539971551,
              "ci_upper": 0.00548851410996765,
              "vif": 1.0027143219757955
            },
            {
              "feature": "Urbanization",
              "coef": 0.0052454038360993886,
              "stderr": 0.0001284351065243826,
              "tstat": 40.84088827460568,
              "pvalue": 0,
              "ci_lower": 0.00499365659099122,
              "ci_upper": 0.005497151081207557,
              "vif": 1.0014004069425404
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005532651960958903,
              "stderr": 0.00012982168025872282,
              "tstat": 42.61731900197895,
              "pvalue": 0,
              "ci_lower": 0.005278186875478226,
              "ci_upper": 0.00578711704643958,
              "vif": 1.0032922861417206
            },
            {
              "feature": "DamsQuality",
              "coef": 0.005234316863761118,
              "stderr": 0.0001291504627231244,
              "tstat": 40.52882779818266,
              "pvalue": 0,
              "ci_lower": 0.004981167440096185,
              "ci_upper": 0.005487466287426052,
              "vif": 1.003986541122027
            },
            {
              "feature": "Siltation",
              "coef": 0.0052700349751105815,
              "stderr": 0.00012845030425777518,
              "tstat": 41.02781231669666,
              "pvalue": 0,
              "ci_lower": 0.005018257940736713,
              "ci_upper": 0.00552181200948445,
              "vif": 1.0008001159124282
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005335180370119506,
              "stderr": 0.00012791162961553855,
              "tstat": 41.70989288585684,
              "pvalue": 0,
              "ci_lower": 0.005084459198592351,
              "ci_upper": 0.0055859015416466614,
              "vif": 1.0040470274130078
            },
            {
              "feature": "Encroachments",
              "coef": 0.005202899687818255,
              "stderr": 0.00012761868856114164,
              "tstat": 40.769104795537565,
              "pvalue": 0,
              "ci_lower": 0.004952752713684781,
              "ci_upper": 0.005453046661951729,
              "vif": 1.0032428769190687
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.00518391771758084,
              "stderr": 0.00012851287760907586,
              "tstat": 40.33772968145521,
              "pvalue": 0,
              "ci_lower": 0.004932018032405073,
              "ci_upper": 0.005435817402756607,
              "vif": 1.002976967166784
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005257869890188043,
              "stderr": 0.00012867171755562266,
              "tstat": 40.86266966876504,
              "pvalue": 0,
              "ci_lower": 0.0050056588608631694,
              "ci_upper": 0.005510080919512917,
              "vif": 1.0026169950173742
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005154930771708492,
              "stderr": 0.00012796460963660863,
              "tstat": 40.28403467448822,
              "pvalue": 0,
              "ci_lower": 0.0049041057533849965,
              "ci_upper": 0.005405755790031987,
              "vif": 1.0016207662321903
            },
            {
              "feature": "Watersheds",
              "coef": 0.005213680813233231,
              "stderr": 0.00012791103244624296,
              "tstat": 40.76021210621045,
              "pvalue": 0,
              "ci_lower": 0.004962960812225018,
              "ci_upper": 0.005464400814241444,
              "vif": 1.002164267142371
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005283036965750295,
              "stderr": 0.00012854488070106752,
              "tstat": 41.098773727411626,
              "pvalue": 0,
              "ci_lower": 0.005031074550917024,
              "ci_upper": 0.005534999380583567,
              "vif": 1.001907957072933
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005326511449592364,
              "stderr": 0.00012836156070456024,
              "tstat": 41.49615679612979,
              "pvalue": 0,
              "ci_lower": 0.005074908362557721,
              "ci_upper": 0.005578114536627007,
              "vif": 1.003211473496047
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.00536495281226859,
              "stderr": 0.00012747097599353325,
              "tstat": 42.087642072661,
              "pvalue": 0,
              "ci_lower": 0.005115095371370768,
              "ci_upper": 0.005614810253166412,
              "vif": 1.0027593825220193
            }
          ],
          "outliers": [
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.47242357994972334,
              "residual": 0.13257642005027664,
              "abs_error": 0.13257642005027664,
              "pct_error": 21.913457859549858,
              "rank": 1
            },
            {
              "index": 4822,
              "actual": 0.555,
              "predicted": 0.42389038268516055,
              "residual": 0.1311096173148395,
              "abs_error": 0.1311096173148395,
              "pct_error": 23.62335447114225,
              "rank": 2
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.48804874081403404,
              "residual": 0.11695125918596594,
              "abs_error": 0.11695125918596594,
              "pct_error": 19.33078664230842,
              "rank": 3
            },
            {
              "index": 19506,
              "actual": 0.555,
              "predicted": 0.44525364005119206,
              "residual": 0.10974635994880799,
              "abs_error": 0.10974635994880799,
              "pct_error": 19.774118909695133,
              "rank": 4
            },
            {
              "index": 14515,
              "actual": 0.515,
              "predicted": 0.41332260887469463,
              "residual": 0.10167739112530538,
              "abs_error": 0.10167739112530538,
              "pct_error": 19.743182742777744,
              "rank": 5
            },
            {
              "index": 14539,
              "actual": 0.61,
              "predicted": 0.5091149768289616,
              "residual": 0.10088502317103842,
              "abs_error": 0.10088502317103842,
              "pct_error": 16.53852838869482,
              "rank": 6
            },
            {
              "index": 6490,
              "actual": 0.63,
              "predicted": 0.5292798970574537,
              "residual": 0.1007201029425463,
              "abs_error": 0.1007201029425463,
              "pct_error": 15.9873179273883,
              "rank": 7
            },
            {
              "index": 2616,
              "actual": 0.57,
              "predicted": 0.4704161054799743,
              "residual": 0.09958389452002564,
              "abs_error": 0.09958389452002564,
              "pct_error": 17.470858687723798,
              "rank": 8
            },
            {
              "index": 6225,
              "actual": 0.555,
              "predicted": 0.4562788902803343,
              "residual": 0.09872110971966574,
              "abs_error": 0.09872110971966574,
              "pct_error": 17.787587336876708,
              "rank": 9
            },
            {
              "index": 1355,
              "actual": 0.405,
              "predicted": 0.502722144398009,
              "residual": -0.09772214439800897,
              "abs_error": 0.09772214439800897,
              "pct_error": 24.128924542718263,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "Urbanization",
            "ClimateChange",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "Encroachments",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PopulationScore",
            "WetlandLoss",
            "InadequatePlanning",
            "PoliticalFactors"
          ],
          "rmse": 0.026081355070175973,
          "mae": 0.02098776411724362,
          "r2": 0.7463839755412223,
          "adj_r2": 0.745237256515787,
          "f_stat": 2636.403733107706,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.012593885995729082,
              "stderr": 0.0022693547302813665,
              "tstat": 5.549544911459314,
              "pvalue": 2.909663972957712e-8,
              "ci_lower": 0.008145695560808379,
              "ci_upper": 0.017042076430649783,
              "vif": null
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005546760280123885,
              "stderr": 0.00009691002225710182,
              "tstat": 57.23618827997333,
              "pvalue": 0,
              "ci_lower": 0.005356805740051367,
              "ci_upper": 0.005736714820196404,
              "vif": 1.003616131818216
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005468192509688805,
              "stderr": 0.0000971579946903347,
              "tstat": 56.281446803397046,
              "pvalue": 0,
              "ci_lower": 0.005277751915765422,
              "ci_upper": 0.005658633103612189,
              "vif": 1.003133577841015
            },
            {
              "feature": "Deforestation",
              "coef": 0.005533815493587023,
              "stderr": 0.00009974065312915425,
              "tstat": 55.482045885756136,
              "pvalue": 0,
              "ci_lower": 0.005338312598732484,
              "ci_upper": 0.005729318388441562,
              "vif": 1.003778851793563
            },
            {
              "feature": "Urbanization",
              "coef": 0.005434052811141454,
              "stderr": 0.00009732439659346393,
              "tstat": 55.8344361880831,
              "pvalue": 0,
              "ci_lower": 0.005243286050777904,
              "ci_upper": 0.005624819571505004,
              "vif": 1.0018844004484833
            },
            {
              "feature": "ClimateChange",
              "coef": 0.0056736666750261825,
              "stderr": 0.00009836712058646787,
              "tstat": 57.678486888704306,
              "pvalue": 0,
              "ci_lower": 0.005480856058393688,
              "ci_upper": 0.0058664772916586765,
              "vif": 1.0036143242117632
            },
            {
              "feature": "DamsQuality",
              "coef": 0.00550363322198835,
              "stderr": 0.00009788049019645745,
              "tstat": 56.228092145246954,
              "pvalue": 0,
              "ci_lower": 0.005311776455636423,
              "ci_upper": 0.0056954899883402774,
              "vif": 1.004759546554665
            },
            {
              "feature": "Siltation",
              "coef": 0.005591514693679998,
              "stderr": 0.00009737341996820098,
              "tstat": 57.42341899366384,
              "pvalue": 0,
              "ci_lower": 0.005400651841989832,
              "ci_upper": 0.005782377545370163,
              "vif": 1.002055628172707
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005629399741606686,
              "stderr": 0.00009694336384957032,
              "tstat": 58.06895405797947,
              "pvalue": 0,
              "ci_lower": 0.005439379848264039,
              "ci_upper": 0.005819419634949333,
              "vif": 1.0048565629906647
            },
            {
              "feature": "Encroachments",
              "coef": 0.00554475231238404,
              "stderr": 0.00009673615538841588,
              "tstat": 57.318303483539324,
              "pvalue": 0,
              "ci_lower": 0.00535513857092353,
              "ci_upper": 0.005734366053844549,
              "vif": 1.0043592606237677
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005592820344174306,
              "stderr": 0.00009744271778702461,
              "tstat": 57.39598064575988,
              "pvalue": 0,
              "ci_lower": 0.0054018216609674815,
              "ci_upper": 0.005783819027381131,
              "vif": 1.0046860036651006
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005563285011610461,
              "stderr": 0.00009754136003197759,
              "tstat": 57.03513883532703,
              "pvalue": 0,
              "ci_lower": 0.00537209297851231,
              "ci_upper": 0.005754477044708612,
              "vif": 1.003876738720656
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005638562992200353,
              "stderr": 0.00009707162826564874,
              "tstat": 58.086622146377465,
              "pvalue": 0,
              "ci_lower": 0.005448291686180292,
              "ci_upper": 0.005828834298220413,
              "vif": 1.0042506202129855
            },
            {
              "feature": "Watersheds",
              "coef": 0.005471623594585808,
              "stderr": 0.00009694629633221907,
              "tstat": 56.43973830455008,
              "pvalue": 0,
              "ci_lower": 0.005281597953247444,
              "ci_upper": 0.005661649235924171,
              "vif": 1.0030423299250788
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.0055241080228327615,
              "stderr": 0.00009741684193188244,
              "tstat": 56.70588281537014,
              "pvalue": 0,
              "ci_lower": 0.005333160059211466,
              "ci_upper": 0.0057150559864540575,
              "vif": 1.0025828227337448
            },
            {
              "feature": "PopulationScore",
              "coef": 0.005367982597330472,
              "stderr": 0.00009797344420739822,
              "tstat": 54.790179530354024,
              "pvalue": 0,
              "ci_lower": 0.005175943630665462,
              "ci_upper": 0.0055600215639954815,
              "vif": 1.0039333027827182
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005525968301182551,
              "stderr": 0.00009780129535081335,
              "tstat": 56.501995002836075,
              "pvalue": 0,
              "ci_lower": 0.005334266765632662,
              "ci_upper": 0.00571766983673244,
              "vif": 1.0057043648577415
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005474492996357865,
              "stderr": 0.00009727053185061246,
              "tstat": 56.28110479302777,
              "pvalue": 0,
              "ci_lower": 0.005283831816946792,
              "ci_upper": 0.005665154175768939,
              "vif": 1.0037348554637464
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005425895422442762,
              "stderr": 0.0000965880452322796,
              "tstat": 56.175641710051245,
              "pvalue": 0,
              "ci_lower": 0.005236571993541612,
              "ci_upper": 0.005615218851343913,
              "vif": 1.003124361800486
            }
          ],
          "outliers": [
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.5049766214152129,
              "residual": 0.10002337858478705,
              "abs_error": 0.10002337858478705,
              "pct_error": 16.532789848725134,
              "rank": 1
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.5936815250864541,
              "residual": -0.09368152508645411,
              "abs_error": 0.09368152508645411,
              "pct_error": 18.73630501729082,
              "rank": 2
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5925259626536182,
              "residual": -0.09252596265361823,
              "abs_error": 0.09252596265361823,
              "pct_error": 18.505192530723647,
              "rank": 3
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.514193494134842,
              "residual": 0.09080650586515793,
              "abs_error": 0.09080650586515793,
              "pct_error": 15.009339812422798,
              "rank": 4
            },
            {
              "index": 12154,
              "actual": 0.515,
              "predicted": 0.427265821151371,
              "residual": 0.087734178848629,
              "abs_error": 0.087734178848629,
              "pct_error": 17.03576288322893,
              "rank": 5
            },
            {
              "index": 11043,
              "actual": 0.515,
              "predicted": 0.42743287869254587,
              "residual": 0.08756712130745414,
              "abs_error": 0.08756712130745414,
              "pct_error": 17.00332452571925,
              "rank": 6
            },
            {
              "index": 5836,
              "actual": 0.5,
              "predicted": 0.5871182480978423,
              "residual": -0.0871182480978423,
              "abs_error": 0.0871182480978423,
              "pct_error": 17.423649619568458,
              "rank": 7
            },
            {
              "index": 9639,
              "actual": 0.53,
              "predicted": 0.44397260703876296,
              "residual": 0.08602739296123707,
              "abs_error": 0.08602739296123707,
              "pct_error": 16.2315835775919,
              "rank": 8
            },
            {
              "index": 6225,
              "actual": 0.555,
              "predicted": 0.47035730229577033,
              "residual": 0.08464269770422972,
              "abs_error": 0.08464269770422972,
              "pct_error": 15.250936523284633,
              "rank": 9
            },
            {
              "index": 13933,
              "actual": 0.595,
              "predicted": 0.5108073176374307,
              "residual": 0.08419268236256927,
              "abs_error": 0.08419268236256927,
              "pct_error": 14.150030649171308,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 20,
          "features": [
            "MonsoonIntensity",
            "TopographyDrainage",
            "RiverManagement",
            "Deforestation",
            "Urbanization",
            "ClimateChange",
            "DamsQuality",
            "Siltation",
            "AgriculturalPractices",
            "Encroachments",
            "IneffectiveDisasterPreparedness",
            "DrainageSystems",
            "CoastalVulnerability",
            "Landslides",
            "Watersheds",
            "DeterioratingInfrastructure",
            "PopulationScore",
            "WetlandLoss",
            "InadequatePlanning",
            "PoliticalFactors"
          ],
          "rmse": 0.020025331880152146,
          "mae": 0.015787960181014592,
          "r2": 0.8504880753985816,
          "adj_r2": 0.8497365703741965,
          "f_stat": 4423.6654062737025,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": -0.05192790674876566,
              "stderr": 0.0018791703493223726,
              "tstat": -27.63342172118181,
              "pvalue": 3.1279302665721265e-164,
              "ci_lower": -0.055611291960054945,
              "ci_upper": -0.04824452153747638,
              "vif": null
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005545596314346644,
              "stderr": 0.00007701206337138845,
              "tstat": 72.00944983908776,
              "pvalue": 0,
              "ci_lower": 0.00539464400956207,
              "ci_upper": 0.005696548619131218,
              "vif": 1.0021588015011882
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005617137523823786,
              "stderr": 0.00007553915197608472,
              "tstat": 74.36061137676182,
              "pvalue": 0,
              "ci_lower": 0.005469072291013797,
              "ci_upper": 0.005765202756633774,
              "vif": 1.0040489314708243
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005606284741545792,
              "stderr": 0.00007572849176622654,
              "tstat": 74.03137987816216,
              "pvalue": 0,
              "ci_lower": 0.005457848381454465,
              "ci_upper": 0.00575472110163712,
              "vif": 1.0034615102747422
            },
            {
              "feature": "Deforestation",
              "coef": 0.005668858446624729,
              "stderr": 0.00007774034196280471,
              "tstat": 72.92042076862776,
              "pvalue": 0,
              "ci_lower": 0.00551647863390066,
              "ci_upper": 0.005821238259348798,
              "vif": 1.0040768191568483
            },
            {
              "feature": "Urbanization",
              "coef": 0.0056358320134496515,
              "stderr": 0.00007587197416257873,
              "tstat": 74.28081416957954,
              "pvalue": 0,
              "ci_lower": 0.005487114411725816,
              "ci_upper": 0.005784549615173487,
              "vif": 1.002576141289435
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005708459009601704,
              "stderr": 0.00007665916401446642,
              "tstat": 74.46544823427054,
              "pvalue": 0,
              "ci_lower": 0.005558198427242842,
              "ci_upper": 0.005858719591960566,
              "vif": 1.0036343403610755
            },
            {
              "feature": "DamsQuality",
              "coef": 0.00560168406959106,
              "stderr": 0.00007629257199899206,
              "tstat": 73.42371508546162,
              "pvalue": 0,
              "ci_lower": 0.005452142048808515,
              "ci_upper": 0.005751226090373606,
              "vif": 1.0051128002482623
            },
            {
              "feature": "Siltation",
              "coef": 0.005708780073343547,
              "stderr": 0.00007589277047438268,
              "tstat": 75.22165863309107,
              "pvalue": 0,
              "ci_lower": 0.005560021708509877,
              "ci_upper": 0.0058575384381772165,
              "vif": 1.002287282875621
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005611057243925938,
              "stderr": 0.00007555587919348241,
              "tstat": 74.26367483008467,
              "pvalue": 0,
              "ci_lower": 0.00546295922388875,
              "ci_upper": 0.005759155263963125,
              "vif": 1.0050434819135614
            },
            {
              "feature": "Encroachments",
              "coef": 0.005676537611705036,
              "stderr": 0.00007539859189619484,
              "tstat": 75.28705071203744,
              "pvalue": 0,
              "ci_lower": 0.0055287478924586535,
              "ci_upper": 0.005824327330951419,
              "vif": 1.00465820201759
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005685541355289808,
              "stderr": 0.00007594361081557294,
              "tstat": 74.86530195538101,
              "pvalue": 0,
              "ci_lower": 0.005536683337670031,
              "ci_upper": 0.005834399372909584,
              "vif": 1.0048343694758028
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005587407568688356,
              "stderr": 0.00007601544544485853,
              "tstat": 73.50358254154351,
              "pvalue": 0,
              "ci_lower": 0.0054384087471168446,
              "ci_upper": 0.005736406390259867,
              "vif": 1.003891758138672
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005631762463089725,
              "stderr": 0.00007564887547301828,
              "tstat": 74.44608301016197,
              "pvalue": 0,
              "ci_lower": 0.005483482159886527,
              "ci_upper": 0.005780042766292922,
              "vif": 1.004252344561736
            },
            {
              "feature": "Landslides",
              "coef": 0.005610621473391832,
              "stderr": 0.00007684153068095636,
              "tstat": 73.01548295136074,
              "pvalue": 0,
              "ci_lower": 0.005460003431858169,
              "ci_upper": 0.005761239514925496,
              "vif": 1.0040310041047815
            },
            {
              "feature": "Watersheds",
              "coef": 0.005693915204940376,
              "stderr": 0.00007558288413389199,
              "tstat": 75.33339419614947,
              "pvalue": 0,
              "ci_lower": 0.005545764252183081,
              "ci_upper": 0.005842066157697672,
              "vif": 1.0038854463945068
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005566803315488513,
              "stderr": 0.00007591999472200083,
              "tstat": 73.32460092855237,
              "pvalue": 0,
              "ci_lower": 0.005417991588067943,
              "ci_upper": 0.005715615042909084,
              "vif": 1.0026397689618232
            },
            {
              "feature": "PopulationScore",
              "coef": 0.00554886657530027,
              "stderr": 0.0000763813801454332,
              "tstat": 72.6468488096838,
              "pvalue": 0,
              "ci_lower": 0.005399150480563566,
              "ci_upper": 0.005698582670036974,
              "vif": 1.0047164986171886
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005698044481458992,
              "stderr": 0.00007624102175651927,
              "tstat": 74.73725233714828,
              "pvalue": 0,
              "ci_lower": 0.005548603504948899,
              "ci_upper": 0.005847485457969085,
              "vif": 1.0063266140640637
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005631911968338423,
              "stderr": 0.00007582382533371014,
              "tstat": 74.27628378747279,
              "pvalue": 0,
              "ci_lower": 0.005483288743733863,
              "ci_upper": 0.0057805351929429835,
              "vif": 1.0042647705516192
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005587266250389787,
              "stderr": 0.00007528872913310781,
              "tstat": 74.21119090098728,
              "pvalue": 0,
              "ci_lower": 0.005439691874513936,
              "ci_upper": 0.005734840626265637,
              "vif": 1.0035716360335287
            }
          ],
          "outliers": [
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5107520821387427,
              "residual": 0.0942479178612573,
              "abs_error": 0.0942479178612573,
              "pct_error": 15.578168241530133,
              "rank": 1
            },
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.5109834481100635,
              "residual": 0.09401655188993652,
              "abs_error": 0.09401655188993652,
              "pct_error": 15.539925932220914,
              "rank": 2
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.5121581941269745,
              "residual": 0.09284180587302548,
              "abs_error": 0.09284180587302548,
              "pct_error": 15.345753036863716,
              "rank": 3
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.5912392139209285,
              "residual": -0.09123921392092849,
              "abs_error": 0.09123921392092849,
              "pct_error": 18.247842784185696,
              "rank": 4
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5170171294916168,
              "residual": 0.08798287050838316,
              "abs_error": 0.08798287050838316,
              "pct_error": 14.542623224526144,
              "rank": 5
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5796676713323322,
              "residual": -0.07966767133233221,
              "abs_error": 0.07966767133233221,
              "pct_error": 15.933534266466442,
              "rank": 6
            },
            {
              "index": 5836,
              "actual": 0.5,
              "predicted": 0.573216910557547,
              "residual": -0.07321691055754698,
              "abs_error": 0.07321691055754698,
              "pct_error": 14.643382111509396,
              "rank": 7
            },
            {
              "index": 11227,
              "actual": 0.415,
              "predicted": 0.3530456083264759,
              "residual": 0.06195439167352407,
              "abs_error": 0.06195439167352407,
              "pct_error": 14.928769077957607,
              "rank": 8
            },
            {
              "index": 10947,
              "actual": 0.415,
              "predicted": 0.35309935483309995,
              "residual": 0.061900645166900026,
              "abs_error": 0.061900645166900026,
              "pct_error": 14.91581811250603,
              "rank": 9
            },
            {
              "index": 42,
              "actual": 0.415,
              "predicted": 0.3531685086912209,
              "residual": 0.061831491308779074,
              "abs_error": 0.061831491308779074,
              "pct_error": 14.899154532235922,
              "rank": 10
            }
          ]
        }
      ],
      "ElasticNet": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss"
          ],
          "rmse": 0.046562297804052785,
          "mae": 0.03776195960684563,
          "r2": 0.19167651753501525,
          "adj_r2": 0.19066459529857938,
          "f_stat": 679.7099054449665,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.3887451348368821,
              "stderr": 0.002024438798384528,
              "tstat": 192.02612355932663,
              "pvalue": 0,
              "ci_lower": 0.3847770074108335,
              "ci_upper": 0.39271326226293074,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.004698334130213066,
              "stderr": 0.00017514746394356606,
              "tstat": 26.825019468891128,
              "pvalue": 4.367129190879035e-155,
              "ci_lower": 0.004355025428645041,
              "ci_upper": 0.005041642831781092,
              "vif": 1.0008334523133902
            },
            {
              "feature": "Encroachments",
              "coef": 0.004527543562480053,
              "stderr": 0.00017461979646193733,
              "tstat": 25.928008474497005,
              "pvalue": 3.1715956985201373e-145,
              "ci_lower": 0.004185269148442653,
              "ci_upper": 0.004869817976517453,
              "vif": 1.000450687466069
            },
            {
              "feature": "Siltation",
              "coef": 0.005064088238357457,
              "stderr": 0.0001759596988570566,
              "tstat": 28.77981873833134,
              "pvalue": 1.2513076363714788e-177,
              "ci_lower": 0.004719187465130269,
              "ci_upper": 0.005408989011584644,
              "vif": 1.0003101924910138
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.004612185279614675,
              "stderr": 0.00017594898899721604,
              "tstat": 26.213195687573126,
              "pvalue": 2.5083142981536414e-148,
              "ci_lower": 0.004267305498915686,
              "ci_upper": 0.004957065060313663,
              "vif": 1.0013880772701336
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.004542220499850676,
              "stderr": 0.0001765315261358727,
              "tstat": 25.73036442428205,
              "pvalue": 4.2928704131158575e-143,
              "ci_lower": 0.004196198880930428,
              "ci_upper": 0.004888242118770924,
              "vif": 1.0016660683794862
            }
          ],
          "outliers": [
            {
              "index": 3901,
              "actual": 0.38,
              "predicted": 0.538040229372337,
              "residual": -0.15804022937233697,
              "abs_error": 0.15804022937233697,
              "pct_error": 41.58953404535183,
              "rank": 1
            },
            {
              "index": 11335,
              "actual": 0.635,
              "predicted": 0.4826087705295442,
              "residual": 0.1523912294704558,
              "abs_error": 0.1523912294704558,
              "pct_error": 23.998618814245006,
              "rank": 2
            },
            {
              "index": 19239,
              "actual": 0.65,
              "predicted": 0.4976580914181613,
              "residual": 0.15234190858183871,
              "abs_error": 0.15234190858183871,
              "pct_error": 23.437216704898262,
              "rank": 3
            },
            {
              "index": 9722,
              "actual": 0.41,
              "predicted": 0.5616166761690001,
              "residual": -0.15161667616900015,
              "abs_error": 0.15161667616900015,
              "pct_error": 36.979677114390284,
              "rank": 4
            },
            {
              "index": 19161,
              "actual": 0.655,
              "predicted": 0.5052920262875198,
              "residual": 0.14970797371248024,
              "abs_error": 0.14970797371248024,
              "pct_error": 22.856179192745074,
              "rank": 5
            },
            {
              "index": 12933,
              "actual": 0.61,
              "predicted": 0.46249209327413277,
              "residual": 0.14750790672586722,
              "abs_error": 0.14750790672586722,
              "pct_error": 24.181624053420855,
              "rank": 6
            },
            {
              "index": 6385,
              "actual": 0.63,
              "predicted": 0.48345603533268244,
              "residual": 0.14654396466731756,
              "abs_error": 0.14654396466731756,
              "pct_error": 23.26094677259009,
              "rank": 7
            },
            {
              "index": 14356,
              "actual": 0.65,
              "predicted": 0.5049232579124481,
              "residual": 0.14507674208755195,
              "abs_error": 0.14507674208755195,
              "pct_error": 22.319498782700297,
              "rank": 8
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5439677664846669,
              "residual": 0.14103223351533312,
              "abs_error": 0.14103223351533312,
              "pct_error": 20.588647228515782,
              "rank": 9
            },
            {
              "index": 2893,
              "actual": 0.665,
              "predicted": 0.5241831743294131,
              "residual": 0.14081682567058695,
              "abs_error": 0.14081682567058695,
              "pct_error": 21.17546250685518,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning"
          ],
          "rmse": 0.04057039569304802,
          "mae": 0.033137612215568824,
          "r2": 0.3863300262056266,
          "adj_r2": 0.3847916206558789,
          "f_stat": 986.8029032950928,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.2533457591185142,
              "stderr": 0.0025515739049178764,
              "tstat": 99.2899945520756,
              "pvalue": 0,
              "ci_lower": 0.24834438755845525,
              "ci_upper": 0.2583471306785732,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.00506899773131179,
              "stderr": 0.00015178582232046992,
              "tstat": 33.395725989542456,
              "pvalue": 1.935126049608659e-236,
              "ci_lower": 0.004771480464220053,
              "ci_upper": 0.005366514998403528,
              "vif": 1.0022134707516894
            },
            {
              "feature": "Encroachments",
              "coef": 0.004954067528943305,
              "stderr": 0.00015136477471205042,
              "tstat": 32.729329121439925,
              "pvalue": 1.7832611016194248e-227,
              "ci_lower": 0.00465737556247489,
              "ci_upper": 0.005250759495411721,
              "vif": 1.0023100456976248
            },
            {
              "feature": "Siltation",
              "coef": 0.005239813958509336,
              "stderr": 0.00015241807405984165,
              "tstat": 34.3779042664724,
              "pvalue": 6.153700192951e-250,
              "ci_lower": 0.004941057406965757,
              "ci_upper": 0.005538570510052916,
              "vif": 1.000748451911503
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.004986224710719806,
              "stderr": 0.00015247433616677916,
              "tstat": 32.702058825596616,
              "pvalue": 4.118194308759141e-227,
              "ci_lower": 0.004687357879124763,
              "ci_upper": 0.005285091542314849,
              "vif": 1.0026886088081448
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.004939964780081555,
              "stderr": 0.0001530225219127366,
              "tstat": 32.28259943917696,
              "pvalue": 1.4873247974663505e-221,
              "ci_lower": 0.004640023442827798,
              "ci_upper": 0.0052399061173353115,
              "vif": 1.0035357185222382
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005165315623479114,
              "stderr": 0.0001519192688714508,
              "tstat": 34.00039811835744,
              "pvalue": 1.03990616303985e-244,
              "ci_lower": 0.004867536786152794,
              "ci_upper": 0.005463094460805434,
              "vif": 1.0025919339526672
            },
            {
              "feature": "ClimateChange",
              "coef": 0.0053934567162642255,
              "stderr": 0.0001539802023069011,
              "tstat": 35.026949149699234,
              "pvalue": 4.841562422636392e-259,
              "ci_lower": 0.005091638217828592,
              "ci_upper": 0.005695275214699859,
              "vif": 1.002392269359034
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.004987348375241087,
              "stderr": 0.00015165425108157668,
              "tstat": 32.88630776698987,
              "pvalue": 1.4245349362703613e-229,
              "ci_lower": 0.004690089002561522,
              "ci_upper": 0.005284607747920653,
              "vif": 1.0017986164185673
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.0050282628222260844,
              "stderr": 0.0001516976167293328,
              "tstat": 33.14661713636402,
              "pvalue": 4.530727829528326e-233,
              "ci_lower": 0.004730918448004156,
              "ci_upper": 0.005325607196448013,
              "vif": 1.0029202995425253
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005044073015066673,
              "stderr": 0.0001522499445108047,
              "tstat": 33.13021250203944,
              "pvalue": 7.538558463764359e-233,
              "ci_lower": 0.004745646016331004,
              "ci_upper": 0.005342500013802342,
              "vif": 1.0023322731859083
            }
          ],
          "outliers": [
            {
              "index": 9722,
              "actual": 0.41,
              "predicted": 0.5542558917532727,
              "residual": -0.14425589175327275,
              "abs_error": 0.14425589175327275,
              "pct_error": 35.18436384226165,
              "rank": 1
            },
            {
              "index": 5714,
              "actual": 0.595,
              "predicted": 0.45633904803332836,
              "residual": 0.1386609519666716,
              "abs_error": 0.1386609519666716,
              "pct_error": 23.304361675070858,
              "rank": 2
            },
            {
              "index": 6385,
              "actual": 0.63,
              "predicted": 0.49895212244955867,
              "residual": 0.13104787755044134,
              "abs_error": 0.13104787755044134,
              "pct_error": 20.801250404831958,
              "rank": 3
            },
            {
              "index": 6490,
              "actual": 0.63,
              "predicted": 0.5009840765761417,
              "residual": 0.12901592342385826,
              "abs_error": 0.12901592342385826,
              "pct_error": 20.478718003787026,
              "rank": 4
            },
            {
              "index": 19239,
              "actual": 0.65,
              "predicted": 0.528049941904135,
              "residual": 0.12195005809586501,
              "abs_error": 0.12195005809586501,
              "pct_error": 18.76154739936385,
              "rank": 5
            },
            {
              "index": 3901,
              "actual": 0.38,
              "predicted": 0.5014759128752695,
              "residual": -0.12147591287526949,
              "abs_error": 0.12147591287526949,
              "pct_error": 31.967345493491973,
              "rank": 6
            },
            {
              "index": 17747,
              "actual": 0.56,
              "predicted": 0.43986645299398863,
              "residual": 0.12013354700601142,
              "abs_error": 0.12013354700601142,
              "pct_error": 21.452419108216322,
              "rank": 7
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.4856860774567136,
              "residual": 0.11931392254328638,
              "abs_error": 0.11931392254328638,
              "pct_error": 19.721309511287004,
              "rank": 8
            },
            {
              "index": 14443,
              "actual": 0.57,
              "predicted": 0.4510681508729767,
              "residual": 0.11893184912702326,
              "abs_error": 0.11893184912702326,
              "pct_error": 20.86523668895145,
              "rank": 9
            },
            {
              "index": 3755,
              "actual": 0.455,
              "predicted": 0.5690457442278214,
              "residual": -0.11404574422782138,
              "abs_error": 0.11404574422782138,
              "pct_error": 25.064998731389316,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 14,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning",
            "Urbanization",
            "PoliticalFactors",
            "RiverManagement",
            "DrainageSystems"
          ],
          "rmse": 0.034534558587019204,
          "mae": 0.028070132970553295,
          "r2": 0.5553439498276789,
          "adj_r2": 0.5537817955736231,
          "f_stat": 1433.9547530829057,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.14073552729571798,
              "stderr": 0.002584152936589674,
              "tstat": 54.46099002230406,
              "pvalue": 0,
              "ci_lower": 0.13567029707689826,
              "ci_upper": 0.1458007575145377,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.005231540368770716,
              "stderr": 0.00012854775178280486,
              "tstat": 40.69725293686942,
              "pvalue": 0,
              "ci_lower": 0.004979572326294525,
              "ci_upper": 0.005483508411246907,
              "vif": 1.0024859739501928
            },
            {
              "feature": "Encroachments",
              "coef": 0.005257577041044062,
              "stderr": 0.0001282477210637534,
              "tstat": 40.99548122520213,
              "pvalue": 0,
              "ci_lower": 0.005006197092501165,
              "ci_upper": 0.005508956989586958,
              "vif": 1.0034674100295082
            },
            {
              "feature": "Siltation",
              "coef": 0.0053064693001250276,
              "stderr": 0.0001290790349001265,
              "tstat": 41.110233774453384,
              "pvalue": 0,
              "ci_lower": 0.005053459883021777,
              "ci_upper": 0.005559478717228278,
              "vif": 1.0009558468369704
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.0053187177507603555,
              "stderr": 0.00012919524796852532,
              "tstat": 41.16806023744857,
              "pvalue": 0,
              "ci_lower": 0.005065480542980501,
              "ci_upper": 0.00557195495854021,
              "vif": 1.0039617620305974
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.0051409873078484,
              "stderr": 0.00012961306105119578,
              "tstat": 39.66411460506873,
              "pvalue": 0,
              "ci_lower": 0.004886931139463623,
              "ci_upper": 0.005395043476233177,
              "vif": 1.0040866043342755
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005342714221795495,
              "stderr": 0.00012866965837223432,
              "tstat": 41.5227201920387,
              "pvalue": 0,
              "ci_lower": 0.005090507228701519,
              "ci_upper": 0.005594921214889472,
              "vif": 1.0030031399196004
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005436514532440217,
              "stderr": 0.00013040006163832416,
              "tstat": 41.69104265854459,
              "pvalue": 0,
              "ci_lower": 0.005180915754444488,
              "ci_upper": 0.0056921133104359456,
              "vif": 1.0025707825798231
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005277215321920204,
              "stderr": 0.00012847918965683234,
              "tstat": 41.07447545408432,
              "pvalue": 0,
              "ci_lower": 0.005025381668917417,
              "ci_upper": 0.005529048974922991,
              "vif": 1.0027400043762829
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005293796861596735,
              "stderr": 0.00012851003334127202,
              "tstat": 41.193646316614796,
              "pvalue": 0,
              "ci_lower": 0.005041902751505564,
              "ci_upper": 0.005545690971687905,
              "vif": 1.0037706491104461
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005269185763136189,
              "stderr": 0.00012896012454022393,
              "tstat": 40.859031285230174,
              "pvalue": 0,
              "ci_lower": 0.00501640942370407,
              "ci_upper": 0.005521962102568307,
              "vif": 1.0029050763271619
            },
            {
              "feature": "Urbanization",
              "coef": 0.00519553073852151,
              "stderr": 0.00012903833951755046,
              "tstat": 40.26346555563719,
              "pvalue": 0,
              "ci_lower": 0.0049426010889423375,
              "ci_upper": 0.005448460388100682,
              "vif": 1.0011616926959601
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005209441960857181,
              "stderr": 0.0001280302202203512,
              "tstat": 40.68915879306679,
              "pvalue": 0,
              "ci_lower": 0.0049584883384148105,
              "ci_upper": 0.005460395583299551,
              "vif": 1.001902652377405
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005124465217999039,
              "stderr": 0.0001287765409062501,
              "tstat": 39.793468452687144,
              "pvalue": 0,
              "ci_lower": 0.004872048723124616,
              "ci_upper": 0.005376881712873462,
              "vif": 1.0017692817893824
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005110272121824947,
              "stderr": 0.00012923308362001773,
              "tstat": 39.54306419593461,
              "pvalue": 0,
              "ci_lower": 0.004856960751915376,
              "ci_upper": 0.005363583491734518,
              "vif": 1.0017116139889575
            }
          ],
          "outliers": [
            {
              "index": 6385,
              "actual": 0.63,
              "predicted": 0.5085828226091119,
              "residual": 0.12141717739088809,
              "abs_error": 0.12141717739088809,
              "pct_error": 19.272567839823505,
              "rank": 1
            },
            {
              "index": 3376,
              "actual": 0.45,
              "predicted": 0.5714120296261426,
              "residual": -0.12141202962614256,
              "abs_error": 0.12141202962614256,
              "pct_error": 26.980451028031677,
              "rank": 2
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.6174335812468339,
              "residual": -0.1174335812468339,
              "abs_error": 0.1174335812468339,
              "pct_error": 23.48671624936678,
              "rank": 3
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.49154895303012147,
              "residual": 0.11345104696987851,
              "abs_error": 0.11345104696987851,
              "pct_error": 18.75223916857496,
              "rank": 4
            },
            {
              "index": 17747,
              "actual": 0.56,
              "predicted": 0.44944201146850826,
              "residual": 0.11055798853149179,
              "abs_error": 0.11055798853149179,
              "pct_error": 19.742497952052105,
              "rank": 5
            },
            {
              "index": 4822,
              "actual": 0.555,
              "predicted": 0.4494325504042556,
              "residual": 0.10556744959574443,
              "abs_error": 0.10556744959574443,
              "pct_error": 19.021162089323322,
              "rank": 6
            },
            {
              "index": 9722,
              "actual": 0.41,
              "predicted": 0.5142930483449242,
              "residual": -0.1042930483449242,
              "abs_error": 0.1042930483449242,
              "pct_error": 25.43732886461566,
              "rank": 7
            },
            {
              "index": 17769,
              "actual": 0.565,
              "predicted": 0.46139266870079965,
              "residual": 0.1036073312992003,
              "abs_error": 0.1036073312992003,
              "pct_error": 18.337580760920407,
              "rank": 8
            },
            {
              "index": 7277,
              "actual": 0.595,
              "predicted": 0.4927531766140882,
              "residual": 0.10224682338591179,
              "abs_error": 0.10224682338591179,
              "pct_error": 17.184340064859125,
              "rank": 9
            },
            {
              "index": 12613,
              "actual": 0.455,
              "predicted": 0.5569008354850692,
              "residual": -0.10190083548506917,
              "abs_error": 0.10190083548506917,
              "pct_error": 22.39578801869652,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning",
            "Urbanization",
            "PoliticalFactors",
            "RiverManagement",
            "DrainageSystems",
            "DamsQuality",
            "DeterioratingInfrastructure",
            "Landslides",
            "Deforestation"
          ],
          "rmse": 0.0263297482712624,
          "mae": 0.02122948289229184,
          "r2": 0.7415302032955888,
          "adj_r2": 0.7403615380505049,
          "f_stat": 2627.1289499101,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.012990617137358822,
              "stderr": 0.0022715392193708257,
              "tstat": 5.718861037740296,
              "pvalue": 1.0915767676700864e-8,
              "ci_lower": 0.008538144858201403,
              "ci_upper": 0.01744308941651624,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.005536983239207574,
              "stderr": 0.00009708958713169406,
              "tstat": 57.02963008481137,
              "pvalue": 0,
              "ci_lower": 0.005346676731790792,
              "ci_upper": 0.005727289746624357,
              "vif": 1.0033620713575273
            },
            {
              "feature": "Encroachments",
              "coef": 0.005503065749968111,
              "stderr": 0.00009685130176225659,
              "tstat": 56.81973964042971,
              "pvalue": 0,
              "ci_lower": 0.005313226308667951,
              "ci_upper": 0.00569290519126827,
              "vif": 1.0041022066031011
            },
            {
              "feature": "Siltation",
              "coef": 0.005585130985506433,
              "stderr": 0.00009750062501280374,
              "tstat": 57.283027516726136,
              "pvalue": 0,
              "ci_lower": 0.005394018797626061,
              "ci_upper": 0.005776243173386805,
              "vif": 1.0020314171247044
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005539756323268519,
              "stderr": 0.00009755751310843667,
              "tstat": 56.78451763229137,
              "pvalue": 0,
              "ci_lower": 0.005348532628324276,
              "ci_upper": 0.005730980018212761,
              "vif": 1.0044043196570416
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005503381858620134,
              "stderr": 0.00009792035917005935,
              "tstat": 56.20263145749242,
              "pvalue": 0,
              "ci_lower": 0.005311446944597127,
              "ci_upper": 0.005695316772643141,
              "vif": 1.0055013808972526
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005582240508021195,
              "stderr": 0.00009719439075512646,
              "tstat": 57.433772305700295,
              "pvalue": 0,
              "ci_lower": 0.005391728573718489,
              "ci_upper": 0.005772752442323901,
              "vif": 1.0041427060120007
            },
            {
              "feature": "ClimateChange",
              "coef": 0.00565270414316605,
              "stderr": 0.00009849497632759452,
              "tstat": 57.39078635203833,
              "pvalue": 0,
              "ci_lower": 0.005459642914904999,
              "ci_upper": 0.005845765371427101,
              "vif": 1.0035768818304618
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005566979130683505,
              "stderr": 0.00009704440342404259,
              "tstat": 57.36527748393882,
              "pvalue": 0,
              "ci_lower": 0.005376761188414123,
              "ci_upper": 0.005757197072952888,
              "vif": 1.0037528480953852
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.0055965867963799045,
              "stderr": 0.00009706492816230552,
              "tstat": 57.65817687539689,
              "pvalue": 0,
              "ci_lower": 0.005406328623315749,
              "ci_upper": 0.00578684496944406,
              "vif": 1.004727136821476
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005508725768847664,
              "stderr": 0.00009741041254629852,
              "tstat": 56.55171377320062,
              "pvalue": 0,
              "ci_lower": 0.005317790407545026,
              "ci_upper": 0.005699661130150303,
              "vif": 1.0039746439961013
            },
            {
              "feature": "Urbanization",
              "coef": 0.005450084300983161,
              "stderr": 0.00009745826769450407,
              "tstat": 55.92223656249644,
              "pvalue": 0,
              "ci_lower": 0.005259055138209263,
              "ci_upper": 0.005641113463757059,
              "vif": 1.0019985772110385
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005558462628022867,
              "stderr": 0.00009671985078496897,
              "tstat": 57.469718810677655,
              "pvalue": 0,
              "ci_lower": 0.005368880845418385,
              "ci_upper": 0.00574804441062735,
              "vif": 1.0032168419845833
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005401024975551143,
              "stderr": 0.00009726197029662351,
              "tstat": 55.530696726371396,
              "pvalue": 0,
              "ci_lower": 0.005210380577748539,
              "ci_upper": 0.005591669373353748,
              "vif": 1.002636160458538
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005428792509259622,
              "stderr": 0.00009763159443512553,
              "tstat": 55.604874023305634,
              "pvalue": 0,
              "ci_lower": 0.005237423606585452,
              "ci_upper": 0.005620161411933793,
              "vif": 1.003088141236145
            },
            {
              "feature": "DamsQuality",
              "coef": 0.005571630289027647,
              "stderr": 0.00009802481146076702,
              "tstat": 56.838979907220825,
              "pvalue": 0,
              "ci_lower": 0.00537949063677036,
              "ci_upper": 0.005763769941284933,
              "vif": 1.0050726516637114
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005486887955680857,
              "stderr": 0.00009754285206221708,
              "tstat": 56.25105109886556,
              "pvalue": 0,
              "ci_lower": 0.005295692998035674,
              "ci_upper": 0.005678082913326039,
              "vif": 1.002532870411583
            },
            {
              "feature": "Landslides",
              "coef": 0.005361513783188561,
              "stderr": 0.00009867992380630982,
              "tstat": 54.33236646708612,
              "pvalue": 0,
              "ci_lower": 0.005168090037073952,
              "ci_upper": 0.00555493752930317,
              "vif": 1.002969792639925
            },
            {
              "feature": "Deforestation",
              "coef": 0.005588439931424427,
              "stderr": 0.00009987765174889925,
              "tstat": 55.95285665580355,
              "pvalue": 0,
              "ci_lower": 0.005392668503871225,
              "ci_upper": 0.005784211358977629,
              "vif": 1.0038893028380798
            }
          ],
          "outliers": [
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.48853831309213613,
              "residual": 0.11646168690786385,
              "abs_error": 0.11646168690786385,
              "pct_error": 19.249865604605596,
              "rank": 1
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.6101419039480875,
              "residual": -0.11014190394808754,
              "abs_error": 0.11014190394808754,
              "pct_error": 22.028380789617508,
              "rank": 2
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5912387249275954,
              "residual": -0.09123872492759544,
              "abs_error": 0.09123872492759544,
              "pct_error": 18.247744985519088,
              "rank": 3
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5151454742984756,
              "residual": 0.08985452570152441,
              "abs_error": 0.08985452570152441,
              "pct_error": 14.851987719260235,
              "rank": 4
            },
            {
              "index": 4462,
              "actual": 0.54,
              "predicted": 0.4547077292967325,
              "residual": 0.08529227070326756,
              "abs_error": 0.08529227070326756,
              "pct_error": 15.794864945049547,
              "rank": 5
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5207236925435899,
              "residual": 0.08427630745641013,
              "abs_error": 0.08427630745641013,
              "pct_error": 13.929968174613244,
              "rank": 6
            },
            {
              "index": 1433,
              "actual": 0.595,
              "predicted": 0.5163998430351571,
              "residual": 0.0786001569648429,
              "abs_error": 0.0786001569648429,
              "pct_error": 13.210110414259313,
              "rank": 7
            },
            {
              "index": 1355,
              "actual": 0.405,
              "predicted": 0.48272881671879525,
              "residual": -0.07772881671879522,
              "abs_error": 0.07772881671879522,
              "pct_error": 19.19230042439388,
              "rank": 8
            },
            {
              "index": 12384,
              "actual": 0.56,
              "predicted": 0.48275738198577306,
              "residual": 0.077242618014227,
              "abs_error": 0.077242618014227,
              "pct_error": 13.793324645397675,
              "rank": 9
            },
            {
              "index": 6225,
              "actual": 0.555,
              "predicted": 0.48074160881455524,
              "residual": 0.0742583911854448,
              "abs_error": 0.0742583911854448,
              "pct_error": 13.379890303683748,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 20,
          "features": [
            "Watersheds",
            "Encroachments",
            "Siltation",
            "IneffectiveDisasterPreparedness",
            "WetlandLoss",
            "CoastalVulnerability",
            "ClimateChange",
            "TopographyDrainage",
            "AgriculturalPractices",
            "InadequatePlanning",
            "Urbanization",
            "PoliticalFactors",
            "RiverManagement",
            "DrainageSystems",
            "DamsQuality",
            "DeterioratingInfrastructure",
            "Landslides",
            "Deforestation",
            "PopulationScore",
            "MonsoonIntensity"
          ],
          "rmse": 0.02002533188015215,
          "mae": 0.015787960181014617,
          "r2": 0.8504880753985816,
          "adj_r2": 0.8497365703741965,
          "f_stat": 4423.665406273702,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": -0.051927906748763894,
              "stderr": 0.0018791703493223658,
              "tstat": -27.63342172118097,
              "pvalue": 3.1279302666417516e-164,
              "ci_lower": -0.05561129196005316,
              "ci_upper": -0.048244521537474626,
              "vif": null
            },
            {
              "feature": "Watersheds",
              "coef": 0.005693915204940409,
              "stderr": 0.00007558288413389214,
              "tstat": 75.33339419614975,
              "pvalue": 0,
              "ci_lower": 0.005545764252183114,
              "ci_upper": 0.005842066157697705,
              "vif": 1.0038854463945068
            },
            {
              "feature": "Encroachments",
              "coef": 0.00567653761170501,
              "stderr": 0.00007539859189619476,
              "tstat": 75.28705071203717,
              "pvalue": 0,
              "ci_lower": 0.0055287478924586275,
              "ci_upper": 0.005824327330951393,
              "vif": 1.0046582020175903
            },
            {
              "feature": "Siltation",
              "coef": 0.0057087800733435475,
              "stderr": 0.00007589277047438275,
              "tstat": 75.22165863309101,
              "pvalue": 0,
              "ci_lower": 0.0055600217085098776,
              "ci_upper": 0.005857538438177217,
              "vif": 1.0022872828756209
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005685541355289818,
              "stderr": 0.00007594361081557305,
              "tstat": 74.86530195538104,
              "pvalue": 0,
              "ci_lower": 0.005536683337670042,
              "ci_upper": 0.005834399372909594,
              "vif": 1.0048343694758026
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005698044481458983,
              "stderr": 0.00007624102175651925,
              "tstat": 74.73725233714818,
              "pvalue": 0,
              "ci_lower": 0.00554860350494889,
              "ci_upper": 0.005847485457969076,
              "vif": 1.0063266140640637
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005631762463089711,
              "stderr": 0.00007564887547301821,
              "tstat": 74.44608301016186,
              "pvalue": 0,
              "ci_lower": 0.005483482159886513,
              "ci_upper": 0.0057800427662929085,
              "vif": 1.004252344561736
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005708459009601706,
              "stderr": 0.00007665916401446661,
              "tstat": 74.46544823427037,
              "pvalue": 0,
              "ci_lower": 0.005558198427242844,
              "ci_upper": 0.0058587195919605674,
              "vif": 1.0036343403610755
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.0056171375238237556,
              "stderr": 0.00007553915197608475,
              "tstat": 74.3606113767614,
              "pvalue": 0,
              "ci_lower": 0.005469072291013767,
              "ci_upper": 0.005765202756633744,
              "vif": 1.0040489314708243
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005611057243925939,
              "stderr": 0.00007555587919348255,
              "tstat": 74.26367483008455,
              "pvalue": 0,
              "ci_lower": 0.005462959223888752,
              "ci_upper": 0.005759155263963127,
              "vif": 1.0050434819135614
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005631911968338401,
              "stderr": 0.00007582382533371002,
              "tstat": 74.27628378747261,
              "pvalue": 0,
              "ci_lower": 0.00548328874373384,
              "ci_upper": 0.005780535192942961,
              "vif": 1.0042647705516192
            },
            {
              "feature": "Urbanization",
              "coef": 0.005635832013449631,
              "stderr": 0.0000758719741625784,
              "tstat": 74.2808141695796,
              "pvalue": 0,
              "ci_lower": 0.005487114411725796,
              "ci_upper": 0.005784549615173465,
              "vif": 1.002576141289435
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005587266250389787,
              "stderr": 0.0000752887291331079,
              "tstat": 74.2111909009872,
              "pvalue": 0,
              "ci_lower": 0.005439691874513935,
              "ci_upper": 0.005734840626265638,
              "vif": 1.0035716360335287
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005606284741545773,
              "stderr": 0.00007572849176622647,
              "tstat": 74.03137987816197,
              "pvalue": 0,
              "ci_lower": 0.005457848381454446,
              "ci_upper": 0.005754721101637101,
              "vif": 1.0034615102747422
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005587407568688331,
              "stderr": 0.0000760154454448585,
              "tstat": 73.5035825415432,
              "pvalue": 0,
              "ci_lower": 0.005438408747116819,
              "ci_upper": 0.005736406390259842,
              "vif": 1.003891758138672
            },
            {
              "feature": "DamsQuality",
              "coef": 0.005601684069591028,
              "stderr": 0.00007629257199899204,
              "tstat": 73.42371508546123,
              "pvalue": 0,
              "ci_lower": 0.0054521420488084825,
              "ci_upper": 0.005751226090373574,
              "vif": 1.0051128002482623
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005566803315488519,
              "stderr": 0.00007591999472200094,
              "tstat": 73.32460092855234,
              "pvalue": 0,
              "ci_lower": 0.005417991588067949,
              "ci_upper": 0.00571561504290909,
              "vif": 1.0026397689618232
            },
            {
              "feature": "Landslides",
              "coef": 0.005610621473391819,
              "stderr": 0.0000768415306809563,
              "tstat": 73.01548295136062,
              "pvalue": 0,
              "ci_lower": 0.005460003431858156,
              "ci_upper": 0.005761239514925483,
              "vif": 1.0040310041047815
            },
            {
              "feature": "Deforestation",
              "coef": 0.005668858446624716,
              "stderr": 0.00007774034196280443,
              "tstat": 72.92042076862786,
              "pvalue": 0,
              "ci_lower": 0.005516478633900647,
              "ci_upper": 0.005821238259348785,
              "vif": 1.0040768191568483
            },
            {
              "feature": "PopulationScore",
              "coef": 0.0055488665753002315,
              "stderr": 0.00007638138014543316,
              "tstat": 72.64684880968333,
              "pvalue": 0,
              "ci_lower": 0.0053991504805635275,
              "ci_upper": 0.0056985826700369354,
              "vif": 1.0047164986171886
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.00554559631434638,
              "stderr": 0.00007701206337138502,
              "tstat": 72.00944983908754,
              "pvalue": 0,
              "ci_lower": 0.005394644009561813,
              "ci_upper": 0.005696548619130948,
              "vif": 1.0021588015011882
            }
          ],
          "outliers": [
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5107520821387426,
              "residual": 0.09424791786125741,
              "abs_error": 0.09424791786125741,
              "pct_error": 15.578168241530152,
              "rank": 1
            },
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.510983448110064,
              "residual": 0.09401655188993596,
              "abs_error": 0.09401655188993596,
              "pct_error": 15.539925932220822,
              "rank": 2
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.512158194126974,
              "residual": 0.09284180587302593,
              "abs_error": 0.09284180587302593,
              "pct_error": 15.34575303686379,
              "rank": 3
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.5912392139209282,
              "residual": -0.09123921392092815,
              "abs_error": 0.09123921392092815,
              "pct_error": 18.24784278418563,
              "rank": 4
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5170171294916163,
              "residual": 0.08798287050838371,
              "abs_error": 0.08798287050838371,
              "pct_error": 14.542623224526235,
              "rank": 5
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5796676713323314,
              "residual": -0.07966767133233144,
              "abs_error": 0.07966767133233144,
              "pct_error": 15.933534266466287,
              "rank": 6
            },
            {
              "index": 5836,
              "actual": 0.5,
              "predicted": 0.5732169105575471,
              "residual": -0.07321691055754709,
              "abs_error": 0.07321691055754709,
              "pct_error": 14.643382111509418,
              "rank": 7
            },
            {
              "index": 11227,
              "actual": 0.415,
              "predicted": 0.3530456083264763,
              "residual": 0.06195439167352368,
              "abs_error": 0.06195439167352368,
              "pct_error": 14.928769077957513,
              "rank": 8
            },
            {
              "index": 10947,
              "actual": 0.415,
              "predicted": 0.35309935483310095,
              "residual": 0.061900645166899027,
              "abs_error": 0.061900645166899027,
              "pct_error": 14.915818112505791,
              "rank": 9
            },
            {
              "index": 42,
              "actual": 0.415,
              "predicted": 0.3531685086912219,
              "residual": 0.061831491308778075,
              "abs_error": 0.061831491308778075,
              "pct_error": 14.89915453223568,
              "rank": 10
            }
          ]
        }
      ],
      "Exhaustive": [
        {
          "k": 1,
          "actual_k": 5,
          "features": [
            "Siltation",
            "MonsoonIntensity",
            "PoliticalFactors",
            "Urbanization",
            "DeterioratingInfrastructure"
          ],
          "rmse": 0.046632066450891525,
          "mae": 0.0375718510286403,
          "r2": 0.1892523293110815,
          "adj_r2": 0.1882373722871845,
          "f_stat": 780.7185246006644,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.38272269702125605,
              "stderr": 0.001984594678329787,
              "tstat": 192.8467818644718,
              "pvalue": 0,
              "ci_lower": 0.37883266854573244,
              "ci_upper": 0.38661272549677966,
              "vif": null
            },
            {
              "feature": "Siltation",
              "coef": 0.004977538209361953,
              "stderr": 0.00017369720360042027,
              "tstat": 28.65640958050467,
              "pvalue": 3.654535188202453e-176,
              "ci_lower": 0.004637072180957048,
              "ci_upper": 0.005318004237766859,
              "vif": 1.0001371352667527
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005131440971870368,
              "stderr": 0.00017631291755801828,
              "tstat": 29.104169126926248,
              "pvalue": 1.6549008556796026e-181,
              "ci_lower": 0.004785847850316425,
              "ci_upper": 0.005477034093424311,
              "vif": 1.00062139325889
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.004867647467605584,
              "stderr": 0.00017228282732332975,
              "tstat": 28.2538169545493,
              "pvalue": 2.014288389701854e-171,
              "ci_lower": 0.0045299537755638985,
              "ci_upper": 0.005205341159647269,
              "vif": 1.0010480410695348
            },
            {
              "feature": "Urbanization",
              "coef": 0.004832775735231519,
              "stderr": 0.0001736442208892359,
              "tstat": 27.831480428676333,
              "pvalue": 1.6323777625518648e-166,
              "ci_lower": 0.004492413558891455,
              "ci_upper": 0.005173137911571583,
              "vif": 1.0003633178861708
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.004904503594532769,
              "stderr": 0.00017380174138043256,
              "tstat": 28.21895543495942,
              "pvalue": 5.150336931939819e-171,
              "ci_lower": 0.00456383266033755,
              "ci_upper": 0.005245174528727988,
              "vif": 1.0009752260528535
            }
          ],
          "outliers": [
            {
              "index": 19161,
              "actual": 0.655,
              "predicted": 0.47641200823142055,
              "residual": 0.17858799176857948,
              "abs_error": 0.17858799176857948,
              "pct_error": 27.265342254744958,
              "rank": 1
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5211511292884988,
              "residual": 0.16384887071150123,
              "abs_error": 0.16384887071150123,
              "pct_error": 23.91954316956222,
              "rank": 2
            },
            {
              "index": 16488,
              "actual": 0.66,
              "predicted": 0.5015449172323238,
              "residual": 0.15845508276767628,
              "abs_error": 0.15845508276767628,
              "pct_error": 24.008345873890345,
              "rank": 3
            },
            {
              "index": 17323,
              "actual": 0.66,
              "predicted": 0.501765272309499,
              "residual": 0.15823472769050106,
              "abs_error": 0.15823472769050106,
              "pct_error": 23.97495874098501,
              "rank": 4
            },
            {
              "index": 1554,
              "actual": 0.675,
              "predicted": 0.5169010772654795,
              "residual": 0.15809892273452053,
              "abs_error": 0.15809892273452053,
              "pct_error": 23.422062627336373,
              "rank": 5
            },
            {
              "index": 2893,
              "actual": 0.665,
              "predicted": 0.5211207999388934,
              "residual": 0.14387920006110666,
              "abs_error": 0.14387920006110666,
              "pct_error": 21.635969934001,
              "rank": 6
            },
            {
              "index": 17785,
              "actual": 0.65,
              "predicted": 0.5110046648638364,
              "residual": 0.13899533513616358,
              "abs_error": 0.13899533513616358,
              "pct_error": 21.383897713255934,
              "rank": 7
            },
            {
              "index": 6672,
              "actual": 0.365,
              "predicted": 0.49651480030749445,
              "residual": -0.13151480030749446,
              "abs_error": 0.13151480030749446,
              "pct_error": 36.03145213903958,
              "rank": 8
            },
            {
              "index": 13835,
              "actual": 0.435,
              "predicted": 0.5660888427678623,
              "residual": -0.1310888427678623,
              "abs_error": 0.1310888427678623,
              "pct_error": 30.135366153531567,
              "rank": 9
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.4764041746985708,
              "residual": 0.12859582530142916,
              "abs_error": 0.12859582530142916,
              "pct_error": 21.255508314285812,
              "rank": 10
            }
          ]
        },
        {
          "k": 2,
          "actual_k": 10,
          "features": [
            "Siltation",
            "MonsoonIntensity",
            "PoliticalFactors",
            "Urbanization",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "CoastalVulnerability",
            "DrainageSystems",
            "RiverManagement",
            "Watersheds"
          ],
          "rmse": 0.04053750802530506,
          "mae": 0.03273848597705283,
          "r2": 0.38732454418838536,
          "adj_r2": 0.3857886317897601,
          "f_stat": 1021.6251232036631,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.25739598318147466,
              "stderr": 0.0024669595318596547,
              "tstat": 104.3373350301548,
              "pvalue": 0,
              "ci_lower": 0.25256046530026466,
              "ci_upper": 0.26223150106268467,
              "vif": null
            },
            {
              "feature": "Siltation",
              "coef": 0.005161084611325848,
              "stderr": 0.0001513823597211595,
              "tstat": 34.09303845462819,
              "pvalue": 5.478763042432622e-246,
              "ci_lower": 0.004864358176263647,
              "ci_upper": 0.0054578110463880496,
              "vif": 1.000488805434808
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005287946116946289,
              "stderr": 0.00015367838322831497,
              "tstat": 34.40917327383748,
              "pvalue": 2.2588165335481616e-250,
              "ci_lower": 0.004986719217818446,
              "ci_upper": 0.005589173016074133,
              "vif": 1.001186253978634
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005005106116340471,
              "stderr": 0.0001501426927476385,
              "tstat": 33.33566239386094,
              "pvalue": 1.2622254663382403e-235,
              "ci_lower": 0.004710809567840976,
              "ci_upper": 0.005299402664839965,
              "vif": 1.0013067252418715
            },
            {
              "feature": "Urbanization",
              "coef": 0.005051566729342409,
              "stderr": 0.00015134283695073872,
              "tstat": 33.378300758209434,
              "pvalue": 3.3351576986111977e-236,
              "ci_lower": 0.00475491776335119,
              "ci_upper": 0.005348215695333627,
              "vif": 1.000803059320002
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005123811389439362,
              "stderr": 0.00015148819654845302,
              "tstat": 33.82317240670646,
              "pvalue": 2.8450975054495487e-242,
              "ci_lower": 0.00482687750230336,
              "ci_upper": 0.0054207452765753636,
              "vif": 1.0015219347147342
            },
            {
              "feature": "ClimateChange",
              "coef": 0.0049313585974564205,
              "stderr": 0.00015282492619901134,
              "tstat": 32.26802538111301,
              "pvalue": 2.314082121765098e-221,
              "ci_lower": 0.004631804570004316,
              "ci_upper": 0.005230912624908525,
              "vif": 1.0007049106024022
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.004972665958441697,
              "stderr": 0.0001507747346265163,
              "tstat": 32.980764123110376,
              "pvalue": 7.715018420403187e-231,
              "ci_lower": 0.004677130536840509,
              "ci_upper": 0.0052682013800428844,
              "vif": 1.0008415645678348
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.004777086728255586,
              "stderr": 0.00015150564095104215,
              "tstat": 31.530751583033556,
              "pvalue": 9.474867111544247e-212,
              "ci_lower": 0.004480118648130377,
              "ci_upper": 0.005074054808380795,
              "vif": 1.0004861748761456
            },
            {
              "feature": "RiverManagement",
              "coef": 0.004751663863464942,
              "stderr": 0.0001509701046587383,
              "tstat": 31.474203943925733,
              "pvalue": 5.078566383451065e-211,
              "ci_lower": 0.004455745494647935,
              "ci_upper": 0.005047582232281948,
              "vif": 1.0005396479844324
            },
            {
              "feature": "Watersheds",
              "coef": 0.004971027803862679,
              "stderr": 0.00015071426586667094,
              "tstat": 32.983127212790116,
              "pvalue": 7.17159031611925e-231,
              "ci_lower": 0.0046756109078253325,
              "ci_upper": 0.005266444699900025,
              "vif": 1.0014199743981005
            }
          ],
          "outliers": [
            {
              "index": 19161,
              "actual": 0.655,
              "predicted": 0.5112045173946757,
              "residual": 0.14379548260532438,
              "abs_error": 0.14379548260532438,
              "pct_error": 21.95350879470601,
              "rank": 1
            },
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.4763551681618039,
              "residual": 0.12864483183819608,
              "abs_error": 0.12864483183819608,
              "pct_error": 21.263608568296874,
              "rank": 2
            },
            {
              "index": 11082,
              "actual": 0.565,
              "predicted": 0.4364363737641123,
              "residual": 0.12856362623588763,
              "abs_error": 0.12856362623588763,
              "pct_error": 22.754624112546484,
              "rank": 3
            },
            {
              "index": 1554,
              "actual": 0.675,
              "predicted": 0.5480430555122462,
              "residual": 0.12695694448775385,
              "abs_error": 0.12695694448775385,
              "pct_error": 18.808436220407977,
              "rank": 4
            },
            {
              "index": 18684,
              "actual": 0.59,
              "predicted": 0.4666751385006387,
              "residual": 0.12332486149936128,
              "abs_error": 0.12332486149936128,
              "pct_error": 20.902518898196828,
              "rank": 5
            },
            {
              "index": 10946,
              "actual": 0.685,
              "predicted": 0.5620730250132592,
              "residual": 0.12292697498674088,
              "abs_error": 0.12292697498674088,
              "pct_error": 17.9455437936848,
              "rank": 6
            },
            {
              "index": 3230,
              "actual": 0.615,
              "predicted": 0.4972168226665845,
              "residual": 0.11778317733341548,
              "abs_error": 0.11778317733341548,
              "pct_error": 19.151736151774877,
              "rank": 7
            },
            {
              "index": 4978,
              "actual": 0.595,
              "predicted": 0.47772238053743177,
              "residual": 0.1172776194625682,
              "abs_error": 0.1172776194625682,
              "pct_error": 19.71052427942323,
              "rank": 8
            },
            {
              "index": 15350,
              "actual": 0.655,
              "predicted": 0.5377322631164707,
              "residual": 0.11726773688352932,
              "abs_error": 0.11726773688352932,
              "pct_error": 17.90347127992814,
              "rank": 9
            },
            {
              "index": 17323,
              "actual": 0.66,
              "predicted": 0.5462643467307755,
              "residual": 0.11373565326922452,
              "abs_error": 0.11373565326922452,
              "pct_error": 17.232674737761293,
              "rank": 10
            }
          ]
        },
        {
          "k": 3,
          "actual_k": 14,
          "features": [
            "Siltation",
            "MonsoonIntensity",
            "PoliticalFactors",
            "Urbanization",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "CoastalVulnerability",
            "DrainageSystems",
            "RiverManagement",
            "Watersheds",
            "TopographyDrainage",
            "Deforestation",
            "InadequatePlanning",
            "Encroachments"
          ],
          "rmse": 0.034668808527922694,
          "mae": 0.02795291670493978,
          "r2": 0.5518801106805578,
          "adj_r2": 0.5503057873554706,
          "f_stat": 1456.528926718887,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.1441134534154358,
              "stderr": 0.002539871730056001,
              "tstat": 56.740445476062796,
              "pvalue": 0,
              "ci_lower": 0.13913501933870362,
              "ci_upper": 0.14909188749216798,
              "vif": null
            },
            {
              "feature": "Siltation",
              "coef": 0.0053285241096730565,
              "stderr": 0.00012854386493414314,
              "tstat": 41.452963254240245,
              "pvalue": 0,
              "ci_lower": 0.005076563685857131,
              "ci_upper": 0.005580484533488982,
              "vif": 1.0013729329261263
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005411172962661046,
              "stderr": 0.00013046202543998258,
              "tstat": 41.476996424146336,
              "pvalue": 0,
              "ci_lower": 0.005155452728649233,
              "ci_upper": 0.0056668931966728595,
              "vif": 1.0015877273005613
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005348858540365814,
              "stderr": 0.0001275181215722923,
              "tstat": 41.94586992354221,
              "pvalue": 0,
              "ci_lower": 0.005098908688834383,
              "ci_upper": 0.005598808391897246,
              "vif": 1.0026145293944455
            },
            {
              "feature": "Urbanization",
              "coef": 0.0051757165511314785,
              "stderr": 0.0001284744098914903,
              "tstat": 40.285972556736375,
              "pvalue": 0,
              "ci_lower": 0.004923892267006015,
              "ci_upper": 0.0054275408352569415,
              "vif": 1.001127968903251
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005242818096721802,
              "stderr": 0.0001285924723532908,
              "tstat": 40.77080097128744,
              "pvalue": 0,
              "ci_lower": 0.004990762396900792,
              "ci_upper": 0.0054948737965428126,
              "vif": 1.0017639886049141
            },
            {
              "feature": "ClimateChange",
              "coef": 0.0052455871027588434,
              "stderr": 0.0001297902078205843,
              "tstat": 40.41589262273229,
              "pvalue": 0,
              "ci_lower": 0.0049911837067944725,
              "ci_upper": 0.005499990498723214,
              "vif": 1.0019197685487213
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005322212846133767,
              "stderr": 0.00012807423681071602,
              "tstat": 41.55568659760661,
              "pvalue": 0,
              "ci_lower": 0.005071172946226743,
              "ci_upper": 0.005573252746040791,
              "vif": 1.0024510829502702
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.004954902367296362,
              "stderr": 0.00012861984997343287,
              "tstat": 38.523621107627044,
              "pvalue": 1.47006973501877e-310,
              "ci_lower": 0.004702793004262584,
              "ci_upper": 0.005207011730330141,
              "vif": 1.0009236051005863
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005090514064798747,
              "stderr": 0.00012821388339542602,
              "tstat": 39.703298347956824,
              "pvalue": 0,
              "ci_lower": 0.004839200441889183,
              "ci_upper": 0.005341827687708311,
              "vif": 1.0017375375092592
            },
            {
              "feature": "Watersheds",
              "coef": 0.005137584932997054,
              "stderr": 0.0001279402324996471,
              "tstat": 40.15613253642653,
              "pvalue": 0,
              "ci_lower": 0.004886807696602035,
              "ci_upper": 0.005388362169392074,
              "vif": 1.0017359144429172
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.005099250970765353,
              "stderr": 0.00012789366378895367,
              "tstat": 39.871021125643765,
              "pvalue": 0,
              "ci_lower": 0.004848565014277693,
              "ci_upper": 0.0053499369272530135,
              "vif": 1.0023293810973708
            },
            {
              "feature": "Deforestation",
              "coef": 0.005375250762285436,
              "stderr": 0.00013169020018010487,
              "tstat": 40.8173938146804,
              "pvalue": 0,
              "ci_lower": 0.005117123167734092,
              "ci_upper": 0.00563337835683678,
              "vif": 1.0034198729020734
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005109346000187153,
              "stderr": 0.00012836949033212473,
              "tstat": 39.80187182303184,
              "pvalue": 0,
              "ci_lower": 0.00485772737019118,
              "ci_upper": 0.005360964630183126,
              "vif": 1.0024488337805226
            },
            {
              "feature": "Encroachments",
              "coef": 0.005131022010959934,
              "stderr": 0.00012764156723203273,
              "tstat": 40.1986760443996,
              "pvalue": 0,
              "ci_lower": 0.004880830192059913,
              "ci_upper": 0.005381213829859955,
              "vif": 1.002715791364668
            }
          ],
          "outliers": [
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.47648959975636446,
              "residual": 0.12851040024363553,
              "abs_error": 0.12851040024363553,
              "pct_error": 21.2413884700224,
              "rank": 1
            },
            {
              "index": 3230,
              "actual": 0.615,
              "predicted": 0.49289612400648386,
              "residual": 0.12210387599351613,
              "abs_error": 0.12210387599351613,
              "pct_error": 19.854288779433517,
              "rank": 2
            },
            {
              "index": 10319,
              "actual": 0.635,
              "predicted": 0.5156809156767435,
              "residual": 0.11931908432325655,
              "abs_error": 0.11931908432325655,
              "pct_error": 18.7904069800404,
              "rank": 3
            },
            {
              "index": 12032,
              "actual": 0.445,
              "predicted": 0.5614194982737424,
              "residual": -0.11641949827374237,
              "abs_error": 0.11641949827374237,
              "pct_error": 26.161685005335368,
              "rank": 4
            },
            {
              "index": 17785,
              "actual": 0.65,
              "predicted": 0.5346436882831698,
              "residual": 0.11535631171683025,
              "abs_error": 0.11535631171683025,
              "pct_error": 17.747124879512345,
              "rank": 5
            },
            {
              "index": 1355,
              "actual": 0.405,
              "predicted": 0.513578654830481,
              "residual": -0.10857865483048101,
              "abs_error": 0.10857865483048101,
              "pct_error": 26.809544402587903,
              "rank": 6
            },
            {
              "index": 3472,
              "actual": 0.64,
              "predicted": 0.5314754467933162,
              "residual": 0.10852455320668386,
              "abs_error": 0.10852455320668386,
              "pct_error": 16.95696143854435,
              "rank": 7
            },
            {
              "index": 4186,
              "actual": 0.54,
              "predicted": 0.4315235731180154,
              "residual": 0.10847642688198461,
              "abs_error": 0.10847642688198461,
              "pct_error": 20.08822720036752,
              "rank": 8
            },
            {
              "index": 11082,
              "actual": 0.565,
              "predicted": 0.45687349272177347,
              "residual": 0.10812650727822648,
              "abs_error": 0.10812650727822648,
              "pct_error": 19.137434916500265,
              "rank": 9
            },
            {
              "index": 2616,
              "actual": 0.57,
              "predicted": 0.46248419579173805,
              "residual": 0.1075158042082619,
              "abs_error": 0.1075158042082619,
              "pct_error": 18.862421790923143,
              "rank": 10
            }
          ]
        },
        {
          "k": 4,
          "actual_k": 18,
          "features": [
            "Siltation",
            "MonsoonIntensity",
            "PoliticalFactors",
            "Urbanization",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "CoastalVulnerability",
            "DrainageSystems",
            "RiverManagement",
            "Watersheds",
            "TopographyDrainage",
            "Deforestation",
            "InadequatePlanning",
            "Encroachments",
            "AgriculturalPractices",
            "Landslides",
            "PopulationScore",
            "IneffectiveDisasterPreparedness"
          ],
          "rmse": 0.026114941526612628,
          "mae": 0.021047272139682754,
          "r2": 0.7457303631707282,
          "adj_r2": 0.7445806888519824,
          "f_stat": 2581.4735139478666,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": 0.019625415947564666,
              "stderr": 0.002260534426693496,
              "tstat": 8.681759373278354,
              "pvalue": 4.2679005927989946e-18,
              "ci_lower": 0.015194514299420722,
              "ci_upper": 0.024056317595708608,
              "vif": null
            },
            {
              "feature": "Siltation",
              "coef": 0.005581081385752588,
              "stderr": 0.00009813843303925979,
              "tstat": 56.86947725688573,
              "pvalue": 0,
              "ci_lower": 0.00538871902242598,
              "ci_upper": 0.005773443749079196,
              "vif": 1.0019979241404453
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005506015140005999,
              "stderr": 0.0000995970973628053,
              "tstat": 55.28288761216679,
              "pvalue": 0,
              "ci_lower": 0.005310793630594746,
              "ci_upper": 0.005701236649417253,
              "vif": 1.00209654870365
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005507116262698829,
              "stderr": 0.00009736208172321775,
              "tstat": 56.56325507043424,
              "pvalue": 0,
              "ci_lower": 0.00531627563524369,
              "ci_upper": 0.0056979568901539684,
              "vif": 1.0033797338994956
            },
            {
              "feature": "Urbanization",
              "coef": 0.0054770460523980765,
              "stderr": 0.00009810422647100472,
              "tstat": 55.82884906611898,
              "pvalue": 0,
              "ci_lower": 0.005284750737791394,
              "ci_upper": 0.005669341367004759,
              "vif": 1.0021372590170794
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.0053792421971288985,
              "stderr": 0.00009815753684829873,
              "tstat": 54.80213104208647,
              "pvalue": 0,
              "ci_lower": 0.005186842388188564,
              "ci_upper": 0.005571642006069233,
              "vif": 1.002021566072288
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005442179151999883,
              "stderr": 0.00009908228403767933,
              "tstat": 54.92585485746689,
              "pvalue": 0,
              "ci_lower": 0.00524796673459088,
              "ci_upper": 0.0056363915694088865,
              "vif": 1.0023895971272878
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005418544686865964,
              "stderr": 0.0000977640232447684,
              "tstat": 55.424730969793885,
              "pvalue": 0,
              "ci_lower": 0.005226916208834755,
              "ci_upper": 0.005610173164897174,
              "vif": 1.0027512442987796
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005308209088562314,
              "stderr": 0.00009824282277688614,
              "tstat": 54.03152045638484,
              "pvalue": 0,
              "ci_lower": 0.005115642109612499,
              "ci_upper": 0.005500776067512129,
              "vif": 1.0024945981783817
            },
            {
              "feature": "RiverManagement",
              "coef": 0.0054644732376965075,
              "stderr": 0.00009792299516775421,
              "tstat": 55.80377957532027,
              "pvalue": 0,
              "ci_lower": 0.005272533156821631,
              "ci_upper": 0.0056564133185713844,
              "vif": 1.003110228630699
            },
            {
              "feature": "Watersheds",
              "coef": 0.005473481621052258,
              "stderr": 0.00009770810801047752,
              "tstat": 56.01870440951861,
              "pvalue": 0,
              "ci_lower": 0.005281962743167301,
              "ci_upper": 0.005665000498937214,
              "vif": 1.0029877368684108
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.0054580906627618745,
              "stderr": 0.0000976730445659453,
              "tstat": 55.881238135018606,
              "pvalue": 0,
              "ci_lower": 0.005266640513170694,
              "ci_upper": 0.005649540812353055,
              "vif": 1.003592243472179
            },
            {
              "feature": "Deforestation",
              "coef": 0.005560295663527153,
              "stderr": 0.0001005285544762552,
              "tstat": 55.31060993063908,
              "pvalue": 0,
              "ci_lower": 0.005363248393441599,
              "ci_upper": 0.0057573429336127075,
              "vif": 1.00380672323949
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.005462373820987062,
              "stderr": 0.00009803786055295586,
              "tstat": 55.716983114258404,
              "pvalue": 0,
              "ci_lower": 0.005270208591041861,
              "ci_upper": 0.005654539050932263,
              "vif": 1.0037410220070644
            },
            {
              "feature": "Encroachments",
              "coef": 0.005542076946550555,
              "stderr": 0.00009749885981009287,
              "tstat": 56.842479566892855,
              "pvalue": 0,
              "ci_lower": 0.005350968218665974,
              "ci_upper": 0.005733185674435136,
              "vif": 1.0043570087840055
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.0054086267589694694,
              "stderr": 0.00009768059700930241,
              "tstat": 55.370533397276326,
              "pvalue": 0,
              "ci_lower": 0.005217161805740121,
              "ci_upper": 0.005600091712198818,
              "vif": 1.0042968766023836
            },
            {
              "feature": "Landslides",
              "coef": 0.005373672502926445,
              "stderr": 0.00009933513552249883,
              "tstat": 54.09639272812326,
              "pvalue": 0,
              "ci_lower": 0.005178964468176873,
              "ci_upper": 0.005568380537676017,
              "vif": 1.0031319510314867
            },
            {
              "feature": "PopulationScore",
              "coef": 0.005360146180201924,
              "stderr": 0.00009874531777495986,
              "tstat": 54.282535121489744,
              "pvalue": 0,
              "ci_lower": 0.00516659425455594,
              "ci_upper": 0.005553698105847909,
              "vif": 1.003919134255072
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.005438581420156014,
              "stderr": 0.0000981605902734829,
              "tstat": 55.404938020479605,
              "pvalue": 0,
              "ci_lower": 0.005246175626158995,
              "ci_upper": 0.005630987214153033,
              "vif": 1.0036527907391088
            }
          ],
          "outliers": [
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.48269442297986737,
              "residual": 0.12230557702013262,
              "abs_error": 0.12230557702013262,
              "pct_error": 20.215797854567374,
              "rank": 1
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.4890277902308595,
              "residual": 0.11597220976914047,
              "abs_error": 0.11597220976914047,
              "pct_error": 19.16896029241991,
              "rank": 2
            },
            {
              "index": 3230,
              "actual": 0.615,
              "predicted": 0.5213813102383092,
              "residual": 0.09361868976169074,
              "abs_error": 0.09361868976169074,
              "pct_error": 15.222551180762721,
              "rank": 3
            },
            {
              "index": 11558,
              "actual": 0.595,
              "predicted": 0.5052327045075133,
              "residual": 0.08976729549248663,
              "abs_error": 0.08976729549248663,
              "pct_error": 15.086940418905318,
              "rank": 4
            },
            {
              "index": 10319,
              "actual": 0.635,
              "predicted": 0.547359760211039,
              "residual": 0.08764023978896096,
              "abs_error": 0.08764023978896096,
              "pct_error": 13.801612565190702,
              "rank": 5
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5873387766477608,
              "residual": -0.0873387766477608,
              "abs_error": 0.0873387766477608,
              "pct_error": 17.46775532955216,
              "rank": 6
            },
            {
              "index": 15230,
              "actual": 0.515,
              "predicted": 0.4285479265662152,
              "residual": 0.0864520734337848,
              "abs_error": 0.0864520734337848,
              "pct_error": 16.786810375492195,
              "rank": 7
            },
            {
              "index": 19407,
              "actual": 0.595,
              "predicted": 0.5100993733365125,
              "residual": 0.08490062666348752,
              "abs_error": 0.08490062666348752,
              "pct_error": 14.269012884619753,
              "rank": 8
            },
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.5220285083050917,
              "residual": 0.08297149169490825,
              "abs_error": 0.08297149169490825,
              "pct_error": 13.71429614791872,
              "rank": 9
            },
            {
              "index": 487,
              "actual": 0.515,
              "predicted": 0.43329779386144335,
              "residual": 0.08170220613855667,
              "abs_error": 0.08170220613855667,
              "pct_error": 15.864506046321683,
              "rank": 10
            }
          ]
        },
        {
          "k": 5,
          "actual_k": 20,
          "features": [
            "Siltation",
            "MonsoonIntensity",
            "PoliticalFactors",
            "Urbanization",
            "DeterioratingInfrastructure",
            "ClimateChange",
            "CoastalVulnerability",
            "DrainageSystems",
            "RiverManagement",
            "Watersheds",
            "TopographyDrainage",
            "Deforestation",
            "InadequatePlanning",
            "Encroachments",
            "AgriculturalPractices",
            "Landslides",
            "PopulationScore",
            "IneffectiveDisasterPreparedness",
            "DamsQuality",
            "WetlandLoss"
          ],
          "rmse": 0.02002533188015215,
          "mae": 0.0157879601810146,
          "r2": 0.8504880753985816,
          "adj_r2": 0.8497365703741965,
          "f_stat": 4423.665406273702,
          "f_pvalue": 0,
          "coefficients": [
            {
              "feature": "Intercept (β₀)",
              "coef": -0.051927906748764234,
              "stderr": 0.0018791703493223678,
              "tstat": -27.633421721181122,
              "pvalue": 3.1279302666292883e-164,
              "ci_lower": -0.05561129196005351,
              "ci_upper": -0.04824452153747496,
              "vif": null
            },
            {
              "feature": "Siltation",
              "coef": 0.005708780073343489,
              "stderr": 0.00007589277047438236,
              "tstat": 75.22165863309063,
              "pvalue": 0,
              "ci_lower": 0.0055600217085098195,
              "ci_upper": 0.005857538438177159,
              "vif": 1.0022872828756209
            },
            {
              "feature": "MonsoonIntensity",
              "coef": 0.005545596314346405,
              "stderr": 0.0000770120633713856,
              "tstat": 72.00944983908731,
              "pvalue": 0,
              "ci_lower": 0.005394644009561836,
              "ci_upper": 0.005696548619130973,
              "vif": 1.0021588015011882
            },
            {
              "feature": "PoliticalFactors",
              "coef": 0.005587266250389773,
              "stderr": 0.00007528872913310773,
              "tstat": 74.21119090098718,
              "pvalue": 0,
              "ci_lower": 0.005439691874513922,
              "ci_upper": 0.005734840626265623,
              "vif": 1.0035716360335287
            },
            {
              "feature": "Urbanization",
              "coef": 0.0056358320134496254,
              "stderr": 0.00007587197416257855,
              "tstat": 74.28081416957939,
              "pvalue": 0,
              "ci_lower": 0.00548711441172579,
              "ci_upper": 0.005784549615173461,
              "vif": 1.002576141289435
            },
            {
              "feature": "DeterioratingInfrastructure",
              "coef": 0.005566803315488498,
              "stderr": 0.00007591999472200094,
              "tstat": 73.32460092855206,
              "pvalue": 0,
              "ci_lower": 0.005417991588067927,
              "ci_upper": 0.005715615042909068,
              "vif": 1.0026397689618234
            },
            {
              "feature": "ClimateChange",
              "coef": 0.005708459009601718,
              "stderr": 0.00007665916401446653,
              "tstat": 74.46544823427061,
              "pvalue": 0,
              "ci_lower": 0.005558198427242856,
              "ci_upper": 0.00585871959196058,
              "vif": 1.0036343403610755
            },
            {
              "feature": "CoastalVulnerability",
              "coef": 0.005631762463089718,
              "stderr": 0.00007564887547301824,
              "tstat": 74.44608301016193,
              "pvalue": 0,
              "ci_lower": 0.00548348215988652,
              "ci_upper": 0.005780042766292915,
              "vif": 1.004252344561736
            },
            {
              "feature": "DrainageSystems",
              "coef": 0.005587407568688352,
              "stderr": 0.00007601544544485868,
              "tstat": 73.50358254154331,
              "pvalue": 0,
              "ci_lower": 0.005438408747116839,
              "ci_upper": 0.005736406390259864,
              "vif": 1.003891758138672
            },
            {
              "feature": "RiverManagement",
              "coef": 0.005606284741545788,
              "stderr": 0.00007572849176622665,
              "tstat": 74.031379878162,
              "pvalue": 0,
              "ci_lower": 0.00545784838145446,
              "ci_upper": 0.005754721101637115,
              "vif": 1.0034615102747422
            },
            {
              "feature": "Watersheds",
              "coef": 0.005693915204940375,
              "stderr": 0.00007558288413389204,
              "tstat": 75.3333941961494,
              "pvalue": 0,
              "ci_lower": 0.00554576425218308,
              "ci_upper": 0.005842066157697671,
              "vif": 1.0038854463945068
            },
            {
              "feature": "TopographyDrainage",
              "coef": 0.00561713752382378,
              "stderr": 0.00007553915197608468,
              "tstat": 74.36061137676178,
              "pvalue": 0,
              "ci_lower": 0.005469072291013791,
              "ci_upper": 0.005765202756633768,
              "vif": 1.0040489314708243
            },
            {
              "feature": "Deforestation",
              "coef": 0.005668858446624727,
              "stderr": 0.00007774034196280448,
              "tstat": 72.92042076862796,
              "pvalue": 0,
              "ci_lower": 0.0055164786339006585,
              "ci_upper": 0.005821238259348796,
              "vif": 1.0040768191568483
            },
            {
              "feature": "InadequatePlanning",
              "coef": 0.0056319119683384405,
              "stderr": 0.00007582382533371017,
              "tstat": 74.27628378747299,
              "pvalue": 0,
              "ci_lower": 0.00548328874373388,
              "ci_upper": 0.005780535192943001,
              "vif": 1.0042647705516192
            },
            {
              "feature": "Encroachments",
              "coef": 0.0056765376117050605,
              "stderr": 0.000075398591896195,
              "tstat": 75.2870507120376,
              "pvalue": 0,
              "ci_lower": 0.005528747892458678,
              "ci_upper": 0.005824327330951443,
              "vif": 1.00465820201759
            },
            {
              "feature": "AgriculturalPractices",
              "coef": 0.005611057243925946,
              "stderr": 0.00007555587919348247,
              "tstat": 74.26367483008472,
              "pvalue": 0,
              "ci_lower": 0.005462959223888759,
              "ci_upper": 0.005759155263963134,
              "vif": 1.0050434819135614
            },
            {
              "feature": "Landslides",
              "coef": 0.005610621473391828,
              "stderr": 0.0000768415306809563,
              "tstat": 73.01548295136074,
              "pvalue": 0,
              "ci_lower": 0.005460003431858164,
              "ci_upper": 0.005761239514925492,
              "vif": 1.0040310041047815
            },
            {
              "feature": "PopulationScore",
              "coef": 0.0055488665753002766,
              "stderr": 0.00007638138014543312,
              "tstat": 72.64684880968397,
              "pvalue": 0,
              "ci_lower": 0.005399150480563573,
              "ci_upper": 0.0056985826700369805,
              "vif": 1.0047164986171886
            },
            {
              "feature": "IneffectiveDisasterPreparedness",
              "coef": 0.0056855413552898346,
              "stderr": 0.00007594361081557316,
              "tstat": 74.86530195538116,
              "pvalue": 0,
              "ci_lower": 0.005536683337670058,
              "ci_upper": 0.005834399372909611,
              "vif": 1.0048343694758028
            },
            {
              "feature": "DamsQuality",
              "coef": 0.005601684069591067,
              "stderr": 0.000076292571998992,
              "tstat": 73.42371508546177,
              "pvalue": 0,
              "ci_lower": 0.0054521420488085216,
              "ci_upper": 0.005751226090373613,
              "vif": 1.0051128002482623
            },
            {
              "feature": "WetlandLoss",
              "coef": 0.005698044481459011,
              "stderr": 0.00007624102175651916,
              "tstat": 74.73725233714863,
              "pvalue": 0,
              "ci_lower": 0.005548603504948919,
              "ci_upper": 0.005847485457969103,
              "vif": 1.0063266140640634
            }
          ],
          "outliers": [
            {
              "index": 2119,
              "actual": 0.605,
              "predicted": 0.5107520821387427,
              "residual": 0.0942479178612573,
              "abs_error": 0.0942479178612573,
              "pct_error": 15.578168241530133,
              "rank": 1
            },
            {
              "index": 8612,
              "actual": 0.605,
              "predicted": 0.5109834481100635,
              "residual": 0.09401655188993652,
              "abs_error": 0.09401655188993652,
              "pct_error": 15.539925932220914,
              "rank": 2
            },
            {
              "index": 1063,
              "actual": 0.605,
              "predicted": 0.5121581941269749,
              "residual": 0.09284180587302504,
              "abs_error": 0.09284180587302504,
              "pct_error": 15.345753036863643,
              "rank": 3
            },
            {
              "index": 19070,
              "actual": 0.5,
              "predicted": 0.5912392139209288,
              "residual": -0.09123921392092882,
              "abs_error": 0.09123921392092882,
              "pct_error": 18.247842784185764,
              "rank": 4
            },
            {
              "index": 7017,
              "actual": 0.605,
              "predicted": 0.5170171294916168,
              "residual": 0.08798287050838316,
              "abs_error": 0.08798287050838316,
              "pct_error": 14.542623224526144,
              "rank": 5
            },
            {
              "index": 8157,
              "actual": 0.5,
              "predicted": 0.5796676713323323,
              "residual": -0.07966767133233232,
              "abs_error": 0.07966767133233232,
              "pct_error": 15.933534266466465,
              "rank": 6
            },
            {
              "index": 5836,
              "actual": 0.5,
              "predicted": 0.5732169105575469,
              "residual": -0.07321691055754687,
              "abs_error": 0.07321691055754687,
              "pct_error": 14.643382111509373,
              "rank": 7
            },
            {
              "index": 11227,
              "actual": 0.415,
              "predicted": 0.35304560832647575,
              "residual": 0.061954391673524234,
              "abs_error": 0.061954391673524234,
              "pct_error": 14.928769077957648,
              "rank": 8
            },
            {
              "index": 10947,
              "actual": 0.415,
              "predicted": 0.3530993548331001,
              "residual": 0.06190064516689986,
              "abs_error": 0.06190064516689986,
              "pct_error": 14.91581811250599,
              "rank": 9
            },
            {
              "index": 42,
              "actual": 0.415,
              "predicted": 0.35316850869122096,
              "residual": 0.06183149130877902,
              "abs_error": 0.06183149130877902,
              "pct_error": 14.899154532235908,
              "rank": 10
            }
          ]
        }
      ]
    }
  }
};
