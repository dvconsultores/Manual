---
id: strategy-indicators-reference
title: Довідник індикаторів за стратегіями
sidebar_position: 1
---

# 📊 Довідник індикаторів за стратегіями

Цей документ містить повний довідник технічних індикаторів, які використовуються в кожній стратегії на різних таймфреймах в Apolo Dex. Індикатори допомагають оцінити ключові аспекти поведінки ринку:

- **Тренд**: Визначає, чи рухається ціна вгору, вниз або вбік.
- **Імпульс (моментум)**: Вимірює силу або швидкість руху ціни.
- **Волатильність**: Оцінює ступінь коливань ціни за певний період.
- **Ціна з урахуванням об'єму**: Допомагає зрозуміти, де зосереджена основна торгова активність.

Ці індикатори комбінуються в різних стратегіях залежно від ринкових умов.

---

## 🧠 Типи стратегій та що вони вимірюють

| Тип стратегії              | Що вимірює                                                                  |
|----------------------------|-----------------------------------------------------------------------------|
| **Слідування за трендом**  | Вимірює та слідує за домінуючим ринковим трендом (висхідним/нисхідним).     |
| **Пробій волатильності**   | Визначає пробій ціни після періодів низької волатильності.                  |
| **Розворот за імпульсом**  | Виявляє зони перекупленості/перепроданості для прогнозування розвороту.     |
| **Імпульс + Волатильність**| Підтверджує розвороти за допомогою виснаження моментуму та піків волатильності. |
| **Гібридна**               | Поєднує тренд, імпульс і волатильність.                                     |
| **Розширена**              | Використовує Ichimoku та SAR для динамічної підтримки/опору та трейлінг-стопів. |

---

## ⚙️ Базові індикатори (використовуються у всіх стратегіях)

Ці індикатори присутні завжди:

| Індикатор | Опис |
|-----------|------|
| **close** | Ціна закриття свічки/інтервалу. |
| **high**  | Найвища ціна за інтервал. |
| **low**   | Найнижча ціна за інтервал. |
| **volume**| Загальний об’єм торгів за інтервал. |

---

## ⏱ Індикатори за стратегією та таймфреймом

Нижче наведена таблиця індикаторів для кожної стратегії та таймфрейму.

### ⏱ 5m

| Стратегія                | Індикатори |
|--------------------------|------------|
| Слідування за трендом    | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Пробій волатильності     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Розворот за імпульсом    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Імпульс + Волатильність  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Гібридна                 | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Розширена                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Стратегія                | Індикатори |
|--------------------------|------------|
| Слідування за трендом    | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Пробій волатильності     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Розворот за імпульсом    | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Імпульс + Волатильність  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Гібридна                 | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Розширена                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Стратегія                | Індикатори |
|--------------------------|------------|
| Слідування за трендом    | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Пробій волатильності     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Розворот за імпульсом    | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Імпульс + Волатильність  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Гібридна                 | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Розширена                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Стратегія                | Індикатори |
|--------------------------|------------|
| Слідування за трендом    | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Пробій волатильності     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Розворот за імпульсом    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Імпульс + Волатильність  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Гібридна                 | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Розширена                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Стратегія                | Індикатори |
|--------------------------|------------|
| Слідування за трендом    | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Пробій волатильності     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Розворот за імпульсом    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Імпульс + Волатильність  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Гібридна                 | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Розширена                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Стратегія                | Індикатори |
|--------------------------|------------|
| Слідування за трендом    | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Пробій волатильності     | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Розворот за імпульсом    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Імпульс + Волатильність  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Гібридна                 | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Розширена                | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
