---
id: strategy-indicators-reference
title: Strategie-Indikatorreferenz
sidebar_position: 1
---

# 📊 Strategie-Indikatorreferenz

Dieses Dokument bietet eine umfassende Übersicht über die technischen Indikatoren, die von jeder Strategie in verschiedenen Zeitrahmen bei Apolo Dex verwendet werden. Indikatoren helfen uns, wichtige Aspekte des Marktverhaltens zu messen:

- **Trend**: Erkennen, ob sich der Preis aufwärts, abwärts oder seitwärts bewegt.
- **Momentum**: Die Stärke oder Geschwindigkeit der Preisbewegungen messen.
- **Volatilität**: Abschätzen, wie stark der Preis in einem bestimmten Zeitraum schwankt.
- **Volumen­gewichteter Preis**: Verstehen, wo die meiste Handelsaktivität stattfindet.

Diese Indikatoren werden in verschiedenen Strategien kombiniert, um sich an unterschiedliche Marktbedingungen anzupassen.

---

## 🧠 Strategietypen und was sie messen

| Strategietyp               | Was gemessen wird                                                            |
|----------------------------|------------------------------------------------------------------------------|
| **Trendfolger**            | Misst und folgt der Richtung eines dominanten Markttrends (aufwärts/abwärts). |
| **Volatilitätsausbruch**   | Erkennt Kursausbrüche nach Phasen geringer Volatilität.                      |
| **Momentum-Umkehr**        | Erkennt überkaufte/überverkaufte Bereiche zur Vorhersage von Umkehrungen.    |
| **Momentum + Volatilität** | Bestätigt Umkehrungen durch Kombination von Momentum-Schwäche und Volatilitätsspitzen. |
| **Hybrid**                 | Nutzt eine Mischung aus Trend-, Momentum- und Volatilitätsindikatoren.       |
| **Fortgeschritten**        | Nutzt Ichimoku und SAR für dynamische Unterstützungen/Widerstände und Trailing-Stops. |

---

## ⚙️ Basisindikatoren (in allen Strategien verwendet)

Diese Indikatoren sind immer vorhanden:

| Indikator | Beschreibung |
|-----------|--------------|
| **close** | Schlusskurs der Kerze / des Intervalls. |
| **high**  | Höchstpreis im Intervall. |
| **low**   | Tiefstpreis im Intervall. |
| **volume**| Gesamtvolumen während des Intervalls. |

---

## ⏱ Indikatoren pro Strategie und Zeitrahmen

Die folgende Matrix zeigt die verwendeten Indikatoren je Strategie und Zeitrahmen.

### ⏱ 5m

| Strategie               | Indikatoren |
|-------------------------|-------------|
| Trendfolger             | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Volatilitätsausbruch    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum-Umkehr         | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilität  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Fortgeschritten         | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Strategie               | Indikatoren |
|-------------------------|-------------|
| Trendfolger             | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Volatilitätsausbruch    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum-Umkehr         | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatilität  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybrid                  | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Fortgeschritten         | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Strategie               | Indikatoren |
|-------------------------|-------------|
| Trendfolger             | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Volatilitätsausbruch    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum-Umkehr         | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatilität  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybrid                  | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Fortgeschritten         | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Strategie               | Indikatoren |
|-------------------------|-------------|
| Trendfolger             | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Volatilitätsausbruch    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum-Umkehr         | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilität  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Fortgeschritten         | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Strategie               | Indikatoren |
|-------------------------|-------------|
| Trendfolger             | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatilitätsausbruch    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum-Umkehr         | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilität  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Fortgeschritten         | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Strategie               | Indikatoren |
|-------------------------|-------------|
| Trendfolger             | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatilitätsausbruch    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum-Umkehr         | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilität  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Fortgeschritten         | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
