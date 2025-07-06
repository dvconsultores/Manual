---
id: strategy-indicators-reference
title: Referencja Wskaźników Strategii
sidebar_position: 1
---

# 📊 Referencja Wskaźników Strategii

Ten dokument zawiera kompleksowe zestawienie wskaźników technicznych używanych w każdej strategii w różnych ramach czasowych na platformie Apolo Dex. Wskaźniki pomagają nam mierzyć kluczowe aspekty zachowania rynku:

- **Trend**: Wykrywanie, czy cena rośnie, spada, czy porusza się bokiem.
- **Momentum**: Pomiar siły lub szybkości ruchów cenowych.
- **Zmienność (Volatility)**: Oszacowanie, jak bardzo cena się waha w danym okresie.
- **Cena ważona wolumenem**: Zrozumienie, gdzie odbywa się większość aktywności handlowej.

Wskaźniki te są łączone w różnych strategiach, aby dopasować się do zmieniających się warunków rynkowych.

---

## 🧠 Typy Strategii i Co Mierzą

| Typ Strategii               | Co Mierzy                                                                 |
|----------------------------|---------------------------------------------------------------------------|
| **Podążająca za trendem**  | Mierzy i podąża za kierunkiem dominującego trendu (wzrostowego/spadkowego). |
| **Wybicie zmienności**     | Identyfikuje wybicia cen po okresach niskiej zmienności.                  |
| **Odwrócenie momentum**    | Wykrywa strefy wykupienia/przeciążenia w celu przewidywania odwróceń.     |
| **Momentum + Zmienność**   | Potwierdza odwrócenia przez połączenie wyczerpania momentum i szczytów zmienności. |
| **Hybrydowa**              | Łączy wskaźniki trendu, momentum i zmienności.                            |
| **Zaawansowana**           | Wykorzystuje Ichimoku i SAR do dynamicznych wsparć/oporów i trailing stopów. |

---

## ⚙️ Wskaźniki Bazowe (używane we wszystkich strategiach)

Te wskaźniki są zawsze obecne:

| Wskaźnik   | Opis |
|------------|------|
| **close**  | Cena zamknięcia świecy/okresu. |
| **high**   | Najwyższa cena w danym okresie. |
| **low**    | Najniższa cena w danym okresie. |
| **volume** | Całkowity wolumen handlowy w okresie. |

---

## ⏱ Wskaźniki według Strategii i Ram Czasowych

Poniższa tabela pokazuje używane wskaźniki według strategii i interwału czasowego.

### ⏱ 5m

| Strategia              | Wskaźniki |
|------------------------|-----------|
| Podążająca za trendem  | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Wybicie zmienności     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Odwrócenie momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Zmienność   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrydowa              | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Zaawansowana           | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Strategia              | Wskaźniki |
|------------------------|-----------|
| Podążająca za trendem  | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Wybicie zmienności     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Odwrócenie momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Zmienność   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybrydowa              | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Zaawansowana           | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Strategia              | Wskaźniki |
|------------------------|-----------|
| Podążająca za trendem  | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Wybicie zmienności     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Odwrócenie momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Zmienność   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybrydowa              | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Zaawansowana           | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Strategia              | Wskaźniki |
|------------------------|-----------|
| Podążająca za trendem  | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Wybicie zmienności     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Odwrócenie momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Zmienność   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrydowa              | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Zaawansowana           | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Strategia              | Wskaźniki |
|------------------------|-----------|
| Podążająca za trendem  | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Wybicie zmienności     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Odwrócenie momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Zmienność   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrydowa              | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Zaawansowana           | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Strategia              | Wskaźniki |
|------------------------|-----------|
| Podążająca za trendem  | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Wybicie zmienności     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Odwrócenie momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Zmienność   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrydowa              | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Zaawansowana           | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
