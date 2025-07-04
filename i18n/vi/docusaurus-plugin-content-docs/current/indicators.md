---
id: strategy-indicators-reference
title: Tham chiếu Chỉ báo Chiến lược
sidebar_position: 1
---

# 📊 Tham chiếu Chỉ báo Chiến lược

Tài liệu này cung cấp bảng tham chiếu đầy đủ các chỉ báo kỹ thuật được sử dụng trong từng chiến lược theo các khung thời gian khác nhau trên Apolo Dex. Các chỉ báo giúp đo lường những khía cạnh quan trọng của hành vi thị trường:

- **Xu hướng (Trend)**: Xác định giá đang tăng, giảm hay đi ngang.
- **Động lượng (Momentum)**: Đo cường độ hoặc tốc độ biến động giá.
- **Biến động (Volatility)**: Ước tính mức dao động giá trong một khoảng thời gian.
- **Giá trung bình theo khối lượng (VWAP)**: Hiểu được mức giá có khối lượng giao dịch lớn nhất.

Những chỉ báo này được kết hợp trong các chiến lược khác nhau để phù hợp với điều kiện thị trường.

---

## 🧠 Các loại chiến lược và mục tiêu đo lường

| Loại chiến lược              | Mục tiêu đo lường                                                             |
|-----------------------------|------------------------------------------------------------------------------|
| **Theo xu hướng (Trend-Following)**     | Đo lường và đi theo hướng chính của thị trường (tăng/giảm).             |
| **Bứt phá biến động (Volatility Breakout)** | Xác định bứt phá giá sau các giai đoạn biến động thấp.                 |
| **Đảo chiều động lượng (Momentum Reversal)** | Phát hiện vùng quá mua/quá bán để dự đoán đảo chiều xu hướng.         |
| **Kết hợp Động lượng + Biến động**     | Xác nhận đảo chiều bằng sự cạn kiệt động lượng và tăng biến động.     |
| **Lai (Hybrid)**                        | Kết hợp xu hướng, động lượng và biến động để thích ứng với thị trường.|
| **Nâng cao (Advanced)**                | Sử dụng Ichimoku và SAR cho hỗ trợ/kháng cự động và tín hiệu dừng lỗ. |

---

## ⚙️ Chỉ báo cơ bản (Luôn được sử dụng)

| Chỉ báo     | Mô tả                                           |
|------------|--------------------------------------------------|
| **close**  | Giá đóng cửa của nến/khung thời gian.           |
| **high**   | Giá cao nhất trong khung thời gian.             |
| **low**    | Giá thấp nhất trong khung thời gian.            |
| **volume** | Tổng khối lượng giao dịch trong khung thời gian.|

---

## ⏱ Chỉ báo theo Chiến lược và Khung thời gian

### ⏱ 5 phút

| Chiến lược             | Chỉ báo sử dụng |
|------------------------|-----------------|
| Trend-Following        | ema_12, ema_26, macd, macd_signal, adx, vwap |
| Volatility Breakout    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                 | ema_12, ema_26, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 15 phút

| Chiến lược             | Chỉ báo sử dụng |
|------------------------|-----------------|
| Trend-Following        | ema_20, ema_40, macd, macd_signal, adx, vwap |
| Volatility Breakout    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal      | rsi_14, stoch_k_14, stoch_d_14, roc_14, momentum_14, vwap |
| Momentum + Volatility  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_14, momentum_14, vwap |
| Hybrid                 | ema_20, ema_40, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 30 phút

| Chiến lược             | Chỉ báo sử dụng |
|------------------------|-----------------|
| Trend-Following        | ema_30, ema_60, macd, macd_signal, adx, vwap |
| Volatility Breakout    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal      | rsi_14, stoch_k_14, stoch_d_14, roc_20, momentum_20, vwap |
| Momentum + Volatility  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_20, momentum_20, vwap |
| Hybrid                 | ema_30, ema_60, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1 giờ

| Chiến lược             | Chỉ báo sử dụng |
|------------------------|-----------------|
| Trend-Following        | ema_20, ema_50, macd, macd_signal, adx, vwap |
| Volatility Breakout    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                 | ema_20, ema_50, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 4 giờ

| Chiến lược             | Chỉ báo sử dụng |
|------------------------|-----------------|
| Trend-Following        | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                 | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |

### ⏱ 1 ngày

| Chiến lược             | Chỉ báo sử dụng |
|------------------------|-----------------|
| Trend-Following        | ema_50, ema_200, macd, macd_signal, adx, vwap |
| Volatility Breakout    | atr_14, bollinger_hband, bollinger_lband, std_20, vwap |
| Momentum Reversal      | rsi_14, stoch_k_14, stoch_d_14, roc_10, momentum_10, vwap |
| Momentum + Volatility  | rsi_14, atr_14, bollinger_hband, bollinger_lband, roc_10, momentum_10, vwap |
| Hybrid                 | ema_50, ema_200, atr_14, bollinger_hband, rsi_14, macd, vwap |
| Advanced               | tenkan_sen_9, kijun_sen_26, senkou_span_a, senkou_span_b, sar, vwap |
