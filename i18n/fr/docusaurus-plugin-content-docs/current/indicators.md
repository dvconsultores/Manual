---
id: strategy-indicators-reference
title: Référence des Indicateurs par Stratégie
sidebar_position: 1
---

# 📊 Référence des Indicateurs par Stratégie

Ce document fournit une référence complète des indicateurs techniques utilisés par chaque stratégie sur différents horizons temporels dans Apolo Dex. Les indicateurs nous aident à mesurer des aspects clés du comportement du marché :

- **Tendance** : Détecter si le prix évolue à la hausse, à la baisse ou latéralement.
- **Momentum** : Mesurer la force ou la rapidité des mouvements de prix.
- **Volatilité** : Estimer l’ampleur des fluctuations de prix pendant une période donnée.
- **Prix pondéré par le volume** : Comprendre où se concentre la majorité de l’activité de trading.

Ces indicateurs sont combinés dans différentes stratégies pour s’adapter à divers contextes de marché.

---

## 🧠 Types de Stratégies et Ce Qu’ils Mesurent

| Type de Stratégie           | Ce Qu’elle Mesure                                                                      |
|-----------------------------|----------------------------------------------------------------------------------------|
| **Suivi de Tendance**       | Mesure et suit la direction dominante du marché (hausse/baisse).                     |
| **Éclatement de Volatilité**| Identifie les cassures de prix après des périodes de faible volatilité.              |
| **Renversement de Momentum**| Détecte les zones de surachat/survente pour anticiper des retournements de tendance. |
| **Momentum + Volatilité**   | Confirme les retournements avec l’épuisement du momentum et des pics de volatilité.  |
| **Hybride**                 | Combine tendance, momentum et volatilité pour s’adapter à divers scénarios.          |
| **Avancée**                 | Utilise Ichimoku et SAR pour un support/résistance dynamique et des stops suiveurs.   |

---

## ⚙️ Indicateurs de Base (Utilisés dans Toutes les Stratégies)

Ces indicateurs sont toujours inclus :

| Indicateur | Description |
|------------|-------------|
| **close**  | Prix de clôture de la bougie/période. |
| **high**   | Prix le plus haut atteint durant la période. |
| **low**    | Prix le plus bas atteint durant la période. |
| **volume** | Volume total échangé pendant la période. |

---

## ⏱ Indicateurs par Stratégie et Horizon Temporel

### ⏱ 5m

| Stratégie               | Indicateurs |
|--------------------------|-------------|
| Suivi de Tendance        | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Éclatement de Volatilité | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Renversement de Momentum | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilité    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                  | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avancée                  | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Stratégie               | Indicateurs |
|--------------------------|-------------|
| Suivi de Tendance        | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Éclatement de Volatilité | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Renversement de Momentum | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatilité    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybride                  | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avancée                  | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Stratégie               | Indicateurs |
|--------------------------|-------------|
| Suivi de Tendance        | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Éclatement de Volatilité | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Renversement de Momentum | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatilité    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybride                  | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avancée                  | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Stratégie               | Indicateurs |
|--------------------------|-------------|
| Suivi de Tendance        | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Éclatement de Volatilité | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Renversement de Momentum | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilité    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                  | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avancée                  | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Stratégie               | Indicateurs |
|--------------------------|-------------|
| Suivi de Tendance        | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Éclatement de Volatilité | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Renversement de Momentum | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilité    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avancée                  | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Stratégie               | Indicateurs |
|--------------------------|-------------|
| Suivi de Tendance        | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Éclatement de Volatilité | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Renversement de Momentum | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilité    | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybride                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avancée                  | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
