---
id: strategy-indicators-reference
title: Stratejiye Göre Göstergeler Referansı
sidebar_position: 1
---

# 📊 Stratejiye Göre Göstergeler Referansı

Bu belge, Apolo Dex’teki her strateji için farklı zaman dilimlerinde kullanılan teknik göstergelerin kapsamlı bir referansını sunar. Göstergeler, piyasa davranışının kilit yönlerini ölçmemize yardımcı olur:

- **Trend**: Fiyatın yukarı, aşağı ya da yatay hareket edip etmediğini tespit etmek.
- **Momentum**: Fiyat hareketlerinin gücünü veya hızını ölçmek.
- **Volatilite**: Belirli bir zaman aralığında fiyatın ne kadar dalgalandığını tahmin etmek.
- **Hacim ağırlıklı fiyat**: Ticaret faaliyetinin büyük çoğunluğunun nerede gerçekleştiğini anlamak.

Bu göstergeler, farklı piyasa koşullarına uyum sağlamak için farklı stratejilerde birleştirilir.

---

## 🧠 Strateji Türleri ve Ne Ölçtükleri

| Strateji Türü              | Ölçtüğü Şey                                                                  |
|----------------------------|------------------------------------------------------------------------------|
| **Trend Takipçisi**        | Hakim piyasa yönünü (yukarı/aşağı) ölçer ve takip eder.                      |
| **Volatilite Kırılımı**    | Düşük volatilite dönemlerinden sonra fiyat kırılımlarını belirler.           |
| **Momentum Ters Dönüşü**   | Aşırı alım/satım bölgelerini tespit ederek dönüşleri öngörür.                |
| **Momentum + Volatilite**  | Momentum zayıflığı ve volatilite zirvelerini birleştirerek dönüşleri teyit eder. |
| **Hibrit**                 | Trend, momentum ve volatilitenin bir kombinasyonunu kullanır.                |
| **Gelişmiş**               | Ichimoku ve SAR kullanarak dinamik destek/direnç ve hareketli stoplar sağlar. |

---

## ⚙️ Temel Göstergeler (Tüm Stratejilerde Kullanılır)

Bu göstergeler her zaman kullanılır:

| Gösterge  | Açıklama |
|-----------|----------|
| **close** | Mum/kapanış fiyatı. |
| **high**  | Zaman diliminde ulaşılan en yüksek fiyat. |
| **low**   | Zaman diliminde ulaşılan en düşük fiyat. |
| **volume**| Zaman diliminde gerçekleşen toplam işlem hacmi. |

---

## ⏱ Stratejiye ve Zaman Dilimine Göre Göstergeler

Aşağıdaki tablo, her strateji için kullanılan göstergeleri zaman dilimine göre gösterir.

### ⏱ 5m

| Strateji               | Göstergeler |
|------------------------|-------------|
| Trend Takipçisi        | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Volatilite Kırılımı    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Ters Dönüşü   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilite  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hibrit                 | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Gelişmiş               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15m

| Strateji               | Göstergeler |
|------------------------|-------------|
| Trend Takipçisi        | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Volatilite Kırılımı    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Ters Dönüşü   | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatilite  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hibrit                 | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Gelişmiş               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30m

| Strateji               | Göstergeler |
|------------------------|-------------|
| Trend Takipçisi        | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Volatilite Kırılımı    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Ters Dönüşü   | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatilite  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hibrit                 | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Gelişmiş               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1h

| Strateji               | Göstergeler |
|------------------------|-------------|
| Trend Takipçisi        | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Volatilite Kırılımı    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Ters Dönüşü   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilite  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hibrit                 | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Gelişmiş               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4h

| Strateji               | Göstergeler |
|------------------------|-------------|
| Trend Takipçisi        | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatilite Kırılımı    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Ters Dönüşü   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilite  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hibrit                 | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Gelişmiş               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1d

| Strateji               | Göstergeler |
|------------------------|-------------|
| Trend Takipçisi        | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatilite Kırılımı    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Ters Dönüşü   | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatilite  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hibrit                 | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Gelişmiş               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
