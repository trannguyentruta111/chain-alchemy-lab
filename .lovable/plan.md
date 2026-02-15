

# Tích hợp nhận thông tin đăng ký qua Telegram Bot

## Tổng quan
Khi user điền form và nhấn gửi, hệ thống sẽ gửi thông tin đến bạn qua **Telegram Bot**. Không cần email SMTP.

## Bạn cần chuẩn bị
1. Tạo bot qua [@BotFather](https://t.me/BotFather) trên Telegram (gửi lệnh `/newbot`)
2. Lấy **Bot Token** từ BotFather
3. Gửi tin nhắn bất kỳ cho bot, rồi truy cập `https://api.telegram.org/bot<TOKEN>/getUpdates` để lấy **Chat ID**

## Các bước triển khai

### Bước 1: Lưu 2 secrets
- `TELEGRAM_BOT_TOKEN` - Token của bot
- `TELEGRAM_CHAT_ID` - Chat ID nhận thông báo

### Bước 2: Tạo Edge Function `send-contact`
File `supabase/functions/send-contact/index.ts`:
- Nhận dữ liệu form (name, email, exchange, telegram) qua POST
- Gửi tin nhắn đến Telegram qua Bot API
- Trả về kết quả thành công/thất bại

### Bước 3: Cập nhật ContactForm.tsx
- Thay `setTimeout` giả lập bằng gọi thực đến Edge Function
- Xử lý loading và thông báo thành công/thất bại

## Chi tiết kỹ thuật

### Edge Function
- CORS headers cho phép gọi từ web
- Validate dữ liệu đầu vào
- POST đến `https://api.telegram.org/bot{token}/sendMessage` với `parse_mode: "HTML"`
- Trả về `{ success: true/false }`

### Mẫu tin nhắn Telegram

```text
📋 ĐĂNG KÝ MỚI
━━━━━━━━━━━━━━
👤 Họ tên: Nguyen Van A
📧 Email: a@email.com
📊 Sàn: Binance
💬 Telegram: @username
🕐 Thời gian: 2026-02-15 10:30
```

### ContactForm.tsx
- Thay `setTimeout` bằng `fetch` đến Edge Function với `supabase.functions.invoke('send-contact', { body: data })`

