---
id: strategy-indicators-reference
title: 전략 지표 참고서
sidebar_position: 1
---

# 📊 전략 지표 참고서

이 문서는 Apolo Dex에서 다양한 시간 프레임에 따라 각 전략에서 사용하는 기술적 지표에 대한 포괄적인 참조 자료입니다. 지표는 시장 행동의 주요 측면을 측정하는 데 사용됩니다:

- **추세 (Trend)**: 가격이 상승, 하락 또는 횡보 중인지 감지합니다.
- **모멘텀 (Momentum)**: 가격 움직임의 강도나 속도를 측정합니다.
- **변동성 (Volatility)**: 일정 기간 동안 가격이 얼마나 흔들리는지를 추정합니다.
- **거래량 가중 가격 (VWAP)**: 거래가 가장 활발히 이루어진 평균 가격을 이해합니다.

이러한 지표는 다양한 시장 상황에 맞게 전략에 결합됩니다.

---

## 🧠 전략 유형 및 측정 대상

| 전략 유형                   | 측정 내용                                                                 |
|----------------------------|--------------------------------------------------------------------------|
| **추세 추종 (Trend-Following)**     | 강한 시장 추세(상승/하락)의 방향을 측정하고 추적합니다.                  |
| **변동성 돌파 (Volatility Breakout)** | 낮은 변동성 구간 이후의 가격 돌파를 식별합니다.                        |
| **모멘텀 반전 (Momentum Reversal)**   | 과매수 또는 과매도 영역을 식별하여 반전 가능성을 감지합니다.           |
| **모멘텀 + 변동성**               | 모멘텀 소진과 변동성 급증을 함께 사용해 반전을 확인합니다.             |
| **하이브리드 (Hybrid)**           | 추세, 모멘텀, 변동성 지표를 혼합하여 다양한 상황에 적응합니다.         |
| **고급 (Advanced)**               | 일목균형표와 SAR을 활용해 동적 지지/저항 및 추적 손절매 신호를 사용합니다. |

---

## ⚙️ 기본 지표 (모든 전략에 포함됨)

| 지표     | 설명                                  |
|----------|---------------------------------------|
| **close**  | 캔들/인터벌의 종가                     |
| **high**   | 인터벌 동안 도달한 최고가               |
| **low**    | 인터벌 동안 도달한 최저가               |
| **volume** | 해당 인터벌 동안 거래된 총 거래량        |

---

## ⏱ 전략 및 시간 프레임별 지표

다음 표는 각 전략과 시간 프레임에 사용되는 지표를 보여줍니다.

### ⏱ 5분

| 전략 유형             | 사용 지표 |
|----------------------|-----------|
| Trend-Following      | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Volatility Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid               | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15분

| 전략 유형             | 사용 지표 |
|----------------------|-----------|
| Trend-Following      | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Volatility Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal    | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatility| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybrid               | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30분

| 전략 유형             | 사용 지표 |
|----------------------|-----------|
| Trend-Following      | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Volatility Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal    | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatility| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybrid               | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1시간

| 전략 유형             | 사용 지표 |
|----------------------|-----------|
| Trend-Following      | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Volatility Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid               | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4시간

| 전략 유형             | 사용 지표 |
|----------------------|-----------|
| Trend-Following      | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid               | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1일

| 전략 유형             | 사용 지표 |
|----------------------|-----------|
| Trend-Following      | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid               | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced             | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
