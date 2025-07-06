---
id: strategy-indicators-reference
title: Strategie Indicatoren Referentie
sidebar_position: 1
---

# 📊 Strategie Indicatoren Referentie

Dit document biedt een uitgebreid overzicht van de technische indicatoren die door elke strategie in verschillende tijdsbestekken binnen Apolo Dex worden gebruikt. Indicatoren helpen ons om belangrijke aspecten van markgedrag te meten:

- **Trend**: Detecteren of de prijs stijgt, daalt of zijwaarts beweegt.
- **Momentum**: Meten van de kracht of snelheid van prijsbewegingen.
- **Volatiliteit**: Inschatten hoeveel de prijs fluctueert in een bepaalde periode.
- **Volume-gewogen prijs**: Begrijpen waar het meeste handelsvolume plaatsvindt.

Deze indicatoren worden gecombineerd in verschillende strategieën om zich aan te passen aan diverse marktomstandigheden.

---

## 🧠 Soorten Strategieën en Wat Ze Meten

| Strategie Type               | Wat het Meet                                                                  |
|-----------------------------|-------------------------------------------------------------------------------|
| **Trendvolgend**            | Meet en volgt de richting van een dominante markttrend (stijgend/dalend).     |
| **Volatiliteit Breakout**   | Identificeert prijsuitbraken na periodes van lage volatiliteit.               |
| **Momentum Omkering**       | Detecteert overbought/oversold zones om omkeringen te voorspellen.            |
| **Momentum + Volatiliteit** | Bevestigt omkeringen door momentumuitputting en volatiliteitspieken te combineren. |
| **Hybride**                 | Gebruikt een mix van trend-, momentum- en volatiliteitsindicatoren.           |
| **Geavanceerd**             | Gebruikt Ichimoku en SAR voor dynamische ondersteuning/weerstand en trailing stops. |

---

## ⚙️ Basisindicatoren (Gebruikt in Alle Strategieën)

Deze indicatoren zijn altijd aanwezig:

| Indicator | Beschrijving |
|-----------|--------------|
| **close** | Slotprijs van de candle/tijdsinterval. |
| **high**  | Hoogste prijs in het interval. |
| **low**   | Laagste prijs in het interval. |
| **volume**| Totale handelsvolume in het interval. |

---

## ⏱ Indicatoren per Strategie en Tijdsbestek

De volgende matrix toont de indicatoren die worden gebruikt per strategie en tijdframe.

### ⏱ 5m

| Strategie               | Indicatoren |
|------------------------|-------------|
| Trendvolgend           | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Volatiliteit Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Omkering      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatiliteit| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Geavanceerd            | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Strategie               | Indicatoren |
|------------------------|-------------|
| Trendvolgend           | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Volatiliteit Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Omkering      | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatiliteit| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybride                | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Geavanceerd            | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Strategie               | Indicatoren |
|------------------------|-------------|
| Trendvolgend           | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Volatiliteit Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Omkering      | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatiliteit| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybride                | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Geavanceerd            | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Strategie               | Indicatoren |
|------------------------|-------------|
| Trendvolgend           | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Volatiliteit Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Omkering      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatiliteit| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Geavanceerd            | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Strategie               | Indicatoren |
|------------------------|-------------|
| Trendvolgend           | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatiliteit Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Omkering      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatiliteit| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Geavanceerd            | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Strategie               | Indicatoren |
|------------------------|-------------|
| Trendvolgend           | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatiliteit Breakout  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Omkering      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatiliteit| rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Geavanceerd            | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
