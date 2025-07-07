---
id: strategy-indicators-reference
title: Referencia de Indicadores por Estrategia
sidebar_position: 1
---

# 📊 Referencia de Indicadores por Estrategia

Este documento proporciona una referencia completa de los indicadores técnicos utilizados por cada estrategia en diferentes marcos de tiempo en Apolo Dex. Los indicadores nos ayudan a medir aspectos clave del comportamiento del mercado:

- **Tendencia**: Detectar si el precio se mueve hacia arriba, hacia abajo o lateralmente.
- **Momentum**: Medir la fuerza o velocidad de los movimientos del precio.
- **Volatilidad**: Estimar cuánto fluctúa el precio en un periodo determinado.
- **Precio ponderado por volumen**: Entender dónde se concentra la mayor parte de la actividad comercial.

Estos indicadores se combinan en diferentes estrategias para adaptarse a diversas condiciones del mercado.

---

## 🧠 Tipos de Estrategia y Qué Miden

| Tipo de Estrategia         | Qué Mide                                                                       |
|----------------------------|---------------------------------------------------------------------------------|
| **Seguidora de Tendencia** | Mide y sigue la dirección de una tendencia dominante (alcista o bajista).     |
| **Ruptura por Volatilidad**| Identifica rupturas de precio tras periodos de baja volatilidad.              |
| **Reversión por Momentum** | Detecta zonas de sobrecompra o sobreventa para prever posibles reversiones.   |
| **Momentum + Volatilidad** | Confirma reversiones combinando agotamiento del momentum y picos de volatilidad.|
| **Híbrida**                | Usa una mezcla de tendencia, momentum y volatilidad para adaptarse.           |
| **Avanzada**               | Usa Ichimoku y SAR para soportes/resistencias dinámicas y stops móviles.      |

---

## ⚙️ Indicadores Base (Usados en Todas las Estrategias)

Estos indicadores siempre están presentes:

| Indicador | Descripción |
|-----------|-------------|
| **close** | Precio de cierre de la vela o intervalo. |
| **high**  | Precio más alto alcanzado en el intervalo. |
| **low**   | Precio más bajo alcanzado en el intervalo. |
| **volume**| Volumen total negociado durante el intervalo. |

---

## ⏱ Indicadores por Estrategia y Marco de Tiempo

La siguiente tabla muestra los indicadores usados para cada estrategia y marco temporal.

### ⏱ 5m

| Estrategia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendencia   | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidad  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversión por Momentum   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidad   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Estrategia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendencia   | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidad  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversión por Momentum   | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatilidad   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Híbrida                  | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Estrategia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendencia   | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidad  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversión por Momentum   | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatilidad   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Híbrida                  | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Estrategia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendencia   | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidad  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversión por Momentum   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidad   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Estrategia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendencia   | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidad  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversión por Momentum   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidad   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Estrategia               | Indicadores |
|--------------------------|-------------|
| Seguidora de Tendencia   | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Ruptura por Volatilidad  | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Reversión por Momentum   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilidad   | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Híbrida                  | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Avanzada                 | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
