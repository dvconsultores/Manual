---
id: strategy-indicators-reference
title: Strategy Indicators Reference
sidebar_position: 1
---

# 📊 Strategy Indicators Reference

This document provides a comprehensive reference of the technical indicators used by each strategy across different timeframes in Apolo Dex. Indicators help us measure key aspects of market behavior:

- **Trend**: Detecting whether price is moving up, down, or sideways.
- **Momentum**: Measuring the strength or speed of price movements.
- **Volatility**: Estimating how much the price fluctuates in a given period.
- **Volume-weighted price**: Understanding where the majority of trading activity is happening.

These indicators are combined in different strategies to suit different market conditions.

---

## 🧠 Strategy Types and What They Measure

| Strategy Type            | What It Measures                                                                 |
|--------------------------|----------------------------------------------------------------------------------|
| **Trend-Following**      | Measures and follows the direction of a dominant market trend (up/down).        |
| **Volatility Breakout**  | Identifies price breakouts after periods of low volatility.                     |
| **Momentum Reversal**    | Spots overbought/oversold zones to detect potential trend reversals.            |
| **Momentum + Volatility**| Confirms reversals by combining momentum exhaustion with spikes in volatility.  |
| **Hybrid**               | Uses a mix of trend, momentum, and volatility to adapt to various conditions.   |
| **Advanced**             | Uses Ichimoku and SAR for dynamic support/resistance and trailing stop signals. |

---

## ⚙️ Base Indicators (Used in All Strategies)

These indicators are always included:

| Indicator | Description |
|-----------|-------------|
| **close** | Closing price of the candle/interval. |
| **high**  | Highest price reached in the interval. |
| **low**   | Lowest price reached in the interval. |
| **volume**| Total volume traded during the interval. |

---

## ⏱ Indicators by Strategy and Timeframe

The following matrix shows the indicators used for each strategy and timeframe.

### ⏱ 5m

| Strategy                | Indicators |
|-------------------------|------------|
| Trend-Following         | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Volatility Breakout     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal       | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Strategy                | Indicators |
|-------------------------|------------|
| Trend-Following         | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Volatility Breakout     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal       | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatility   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybrid                  | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Strategy                | Indicators |
|-------------------------|------------|
| Trend-Following         | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Volatility Breakout     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal       | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatility   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybrid                  | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Strategy                | Indicators |
|-------------------------|------------|
| Trend-Following         | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Volatility Breakout     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal       | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Strategy                | Indicators |
|-------------------------|------------|
| Trend-Following         | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal       | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Strategy                | Indicators |
|-------------------------|------------|
| Trend-Following         | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal       | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

