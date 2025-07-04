---
id: strategy-indicators-reference
title: 戦略指標リファレンス
sidebar_position: 1
---

# 📊 戦略指標リファレンス

このドキュメントでは、Apolo Dexで使用される各戦略のタイムフレームごとのテクニカル指標を包括的に解説します。これらの指標は、市場の挙動を測定するために使用されます：

- **トレンド**：価格が上昇・下降・横ばいのどれかを検出
- **モメンタム**：価格変動の強さや速度を測定
- **ボラティリティ**：一定期間の価格変動の大きさを推定
- **出来高加重価格**：取引の集中している価格帯を把握

これらの指標は、市場の状況に応じた様々な戦略に組み込まれています。

---

## 🧠 戦略タイプと測定内容

| 戦略タイプ                | 測定内容                                                                 |
|---------------------------|--------------------------------------------------------------------------|
| **トレンドフォロー**      | 優勢なトレンド（上昇／下降）の方向を測定して追随                       |
| **ボラティリティブレイクアウト** | 低ボラティリティ期間後の価格の急騰・急落を検出                         |
| **モメンタムリバーサル**  | 買われすぎ・売られすぎゾーンを検出して反転の可能性を探る               |
| **モメンタム＋ボラティリティ** | モメンタムの枯渇とボラティリティの急増を組み合わせて反転を確認         |
| **ハイブリッド**          | トレンド・モメンタム・ボラティリティを組み合わせて柔軟に対応           |
| **アドバンスト**          | 一目均衡表とSARを活用し、動的なサポート／レジスタンスやトレーリングストップを提供 |

---

## ⚙️ ベース指標（すべての戦略で使用）

| 指標       | 説明                                 |
|------------|--------------------------------------|
| **close**  | 各ローソク足の終値                   |
| **high**   | その期間における最高値               |
| **low**    | その期間における最安値               |
| **volume** | その期間の取引量の合計               |

---

## ⏱ 戦略とタイムフレーム別の指標

以下は、各戦略と時間足ごとに使用される指標の一覧です。

### ⏱ 5分足

| 戦略                     | 使用指標 |
|--------------------------|----------|
| トレンドフォロー         | ema_12, ema_26, macd, macd_signal, adx, vwap |
| ボラティリティブレイクアウト | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| モメンタムリバーサル     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| モメンタム＋ボラティリティ | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| ハイブリッド             | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| アドバンスト             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15分足

| 戦略                     | 使用指標 |
|--------------------------|----------|
| トレンドフォロー         | ema_20, ema_40, macd, macd_signal, adx, vwap |
| ボラティリティブレイクアウト | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| モメンタムリバーサル     | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| モメンタム＋ボラティリティ | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| ハイブリッド             | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| アドバンスト             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30分足

| 戦略                     | 使用指標 |
|--------------------------|----------|
| トレンドフォロー         | ema_30, ema_60, macd, macd_signal, adx, vwap |
| ボラティリティブレイクアウト | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| モメンタムリバーサル     | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| モメンタム＋ボラティリティ | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| ハイブリッド             | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| アドバンスト             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1時間足

| 戦略                     | 使用指標 |
|--------------------------|----------|
| トレンドフォロー         | ema_20, ema_50, macd, macd_signal, adx, vwap |
| ボラティリティブレイクアウト | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| モメンタムリバーサル     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| モメンタム＋ボラティリティ | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| ハイブリッド             | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| アドバンスト             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4時間足

| 戦略                     | 使用指標 |
|--------------------------|----------|
| トレンドフォロー         | ema_50, ema_200, macd, macd_signal, adx, vwap |
| ボラティリティブレイクアウト | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| モメンタムリバーサル     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| モメンタム＋ボラティリティ | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| ハイブリッド             | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| アドバンスト             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 日足

| 戦略                     | 使用指標 |
|--------------------------|----------|
| トレンドフォロー         | ema_50, ema_200, macd, macd_signal, adx, vwap |
| ボラティリティブレイクアウト | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| モメンタムリバーサル     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| モメンタム＋ボラティリティ | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| ハイブリッド             | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| アドバンスト             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
