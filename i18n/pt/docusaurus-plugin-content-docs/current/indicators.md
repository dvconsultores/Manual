---
id: strategy-indicators-reference
title: Referência de Indicadores por Estratégia
sidebar_position: 1
---

# 📊 Referência de Indicadores por Estratégia

Este documento fornece uma referência completa dos indicadores técnicos usados por cada estratégia em diferentes intervalos de tempo no Apolo Dex. Os indicadores nos ajudam a medir aspectos importantes do comportamento do mercado:

- **Tendência**: Detectar se o preço está subindo, descendo ou se movendo lateralmente.
- **Momentum**: Medir a força ou velocidade dos movimentos de preço.
- **Volatilidade**: Estimar quanto o preço oscila em um determinado período.
- **Preço ponderado por volume**: Compreender onde ocorre a maior parte da atividade de negociação.

Esses indicadores são combinados em diferentes estratégias para se adaptar a várias condições de mercado.

---

## 🧠 Tipos de Estratégia e o que Medem

| Tipo de Estratégia          | O que Mede                                                                   |
|-----------------------------|------------------------------------------------------------------------------|
| **Seguidora de Tendência**  | Mede e segue a direção de uma tendência dominante (de alta/baixa).           |
| **Ruptura por Volatilidade**| Identifica rompimentos de preço após períodos de baixa volatilidade.         |
| **Reversão por Momentum**   | Detecta zonas de sobrecompra/sobrevenda para prever reversões.               |
| **Momentum + Volatilidade** | Confirma reversões combinando exaustão do momentum e picos de volatilidade.  |
| **Híbrida**                 | Usa uma mistura de tendência, momentum e volatilidade para se adaptar.       |
| **Avançada**                | Usa Ichimoku e SAR para suportes/resistências dinâmicos e trailing stops.    |

---

## ⚙️ Indicadores Base (Usados em Todas as Estratégias)

Estes indicadores estão sempre presentes:

| Indicador | Descrição |
|-----------|-----------|
| **close** | Preço de fechamento do candle/intervalo. |
| **high**  | Maior preço alcançado no intervalo. |
| **low**   | Menor preço alcançado no intervalo. |
| **volume**| Volume total negociado durante o intervalo. |

---

## ⏱ Indicadores por Estratégia e Intervalo de Tempo

A matriz abaixo mostra os indicadores utilizados para cada estratégia e timeframe.

### ⏱ 5m

| Estratégia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendência   | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidade | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversão por Momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidade  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avançada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Estratégia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendência   | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidade | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversão por Momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatilidade  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Híbrida                  | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avançada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Estratégia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendência   | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidade | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversão por Momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatilidade  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Híbrida                  | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avançada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Estratégia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendência   | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidade | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversão por Momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidade  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avançada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Estratégia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendência   | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidade | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversão por Momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidade  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avançada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Estratégia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendência   | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidade | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversão por Momentum    | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidade  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avançada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
