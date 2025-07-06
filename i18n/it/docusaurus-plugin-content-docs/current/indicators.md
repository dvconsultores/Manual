---
id: strategy-indicators-reference
title: Riferimento Indicatori per Strategia
sidebar_position: 1
---

# 📊 Riferimento Indicatori per Strategia

Questo documento fornisce un riferimento completo agli indicatori tecnici utilizzati da ciascuna strategia in diversi timeframe su Apolo Dex. Gli indicatori ci aiutano a misurare aspetti chiave del comportamento del mercato:

- **Tendenza**: Individuare se il prezzo si sta muovendo verso l’alto, verso il basso o lateralmente.
- **Momentum**: Misurare la forza o la velocità dei movimenti di prezzo.
- **Volatilità**: Stimare quanto il prezzo fluttua in un determinato periodo.
- **Prezzo ponderato per volume**: Capire dove si concentra la maggior parte dell’attività di trading.

Questi indicatori sono combinati in strategie diverse per adattarsi a differenti condizioni di mercato.

---

## 🧠 Tipi di Strategia e Cosa Misurano

| Tipo di Strategia          | Cosa Misura                                                                   |
|----------------------------|-------------------------------------------------------------------------------|
| **Trend Following**        | Misura e segue la direzione di un trend dominante (rialzista/ribassista).     |
| **Breakout di Volatilità** | Identifica breakout di prezzo dopo periodi di bassa volatilità.               |
| **Reversal di Momentum**   | Rileva aree di ipercomprato/ipervenduto per prevedere inversioni.             |
| **Momentum + Volatilità**  | Conferma inversioni combinando esaurimento del momentum e picchi di volatilità. |
| **Ibrida**                 | Usa una combinazione di trend, momentum e volatilità.                         |
| **Avanzata**               | Usa Ichimoku e SAR per supporti/resistenze dinamici e trailing stop.          |

---

## ⚙️ Indicatori Base (Usati in Tutte le Strategie)

Questi indicatori sono sempre presenti:

| Indicatore | Descrizione |
|------------|-------------|
| **close**  | Prezzo di chiusura della candela/intervallo. |
| **high**   | Prezzo massimo raggiunto nell’intervallo. |
| **low**    | Prezzo minimo raggiunto nell’intervallo. |
| **volume** | Volume totale negoziato nell’intervallo. |

---

## ⏱ Indicatori per Strategia e Timeframe

La seguente matrice mostra gli indicatori utilizzati per ciascuna strategia e timeframe.

### ⏱ 5m

| Strategia               | Indicatori |
|--------------------------|------------|
| Trend Following          | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Breakout di Volatilità   | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversal di Momentum     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilità    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Ibrida                   | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzata                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Strategia               | Indicatori |
|--------------------------|------------|
| Trend Following          | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Breakout di Volatilità   | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversal di Momentum     | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatilità    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Ibrida                   | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzata                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Strategia               | Indicatori |
|--------------------------|------------|
| Trend Following          | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Breakout di Volatilità   | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversal di Momentum     | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatilità    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Ibrida                   | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzata                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Strategia               | Indicatori |
|--------------------------|------------|
| Trend Following          | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Breakout di Volatilità   | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversal di Momentum     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilità    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Ibrida                   | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzata                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Strategia               | Indicatori |
|--------------------------|------------|
| Trend Following          | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Breakout di Volatilità   | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversal di Momentum     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilità    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Ibrida                   | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzata                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Strategia               | Indicatori |
|--------------------------|------------|
| Trend Following          | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Breakout di Volatilità   | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversal di Momentum     | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilità    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Ibrida                   | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzata                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
