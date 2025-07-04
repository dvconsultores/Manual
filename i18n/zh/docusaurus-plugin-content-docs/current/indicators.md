---
id: strategy-indicators-reference
title: 策略指标参考
sidebar_position: 1
---

# 📊 策略指标参考

本文档详细介绍了 Apolo Dex 在不同时间框架内每种策略所使用的技术指标。这些指标帮助我们衡量市场行为的关键方面：

- **趋势（Trend）**：检测价格是上涨、下跌还是横盘。
- **动量（Momentum）**：衡量价格变动的强度或速度。
- **波动性（Volatility）**：估计价格在一定时间内的波动幅度。
- **成交量加权平均价（VWAP）**：了解大部分交易活动集中在哪些价格区域。

这些指标被组合成不同的策略，以适应各种市场状况。

---

## 🧠 策略类型及其测量目标

| 策略类型                     | 测量内容                                                             |
|------------------------------|----------------------------------------------------------------------|
| **趋势跟随（Trend-Following）**         | 衡量并跟随市场主要趋势的方向（上涨或下跌）。                         |
| **波动性突破（Volatility Breakout）**    | 识别在低波动期后的价格突破。                                       |
| **动量反转（Momentum Reversal）**        | 发现超买或超卖区域，以捕捉潜在的趋势反转。                         |
| **动量 + 波动性（Momentum + Volatility）** | 通过结合动量耗尽和波动性上升来确认反转信号。                       |
| **混合策略（Hybrid）**                  | 综合趋势、动量和波动性，以适应多种市场情况。                       |
| **高级策略（Advanced）**                | 使用一目均衡表和抛物线SAR生成动态支撑/阻力位和追踪止损信号。      |

---

## ⚙️ 基础指标（所有策略通用）

| 指标        | 描述                       |
|-------------|----------------------------|
| **close**   | K线或时间区间的收盘价。    |
| **high**    | 时间区间内的最高价。       |
| **low**     | 时间区间内的最低价。       |
| **volume**  | 时间区间内的交易总量。     |

---

## ⏱ 不同策略与时间周期的指标表

### ⏱ 5分钟

| 策略              | 使用的指标 |
|-------------------|------------|
| Trend-Following   | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Volatility Breakout | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid            | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced          | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15分钟

| 策略              | 使用的指标 |
|-------------------|------------|
| Trend-Following   | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Volatility Breakout | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatility | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybrid            | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced          | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30分钟

| 策略              | 使用的指标 |
|-------------------|------------|
| Trend-Following   | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Volatility Breakout | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatility | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybrid            | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced          | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1小时

| 策略              | 使用的指标 |
|-------------------|------------|
| Trend-Following   | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Volatility Breakout | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid            | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced          | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4小时

| 策略              | 使用的指标 |
|-------------------|------------|
| Trend-Following   | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid            | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced          | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1天

| 策略              | 使用的指标 |
|-------------------|------------|
| Trend-Following   | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid            | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced          | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
