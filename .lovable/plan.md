

# Tích hợp nhận thông tin đăng ký qua Telegram Bot + Email SMTP

## Tổng quan
Khi user điền form đăng ký và nhấn gửi, hệ thống sẽ tự động gửi thông tin đến bạn qua **Telegram Bot** và **Email SMTP** cùng lúc.

## Thông tin cần chuẩn bị

### Telegram
- **Bot Token**: Tạo bot qua [@BotFather](https://t.me/BotFather) trên Telegram, gửi lệnh `/newbot` để nhận token
- **Chat ID**: Gửi tin nhắn cho bot, sau đó truy cập `https://api.telegram.org/bot<TOKEN>/getUpdates` để lấy chat ID (hoặc dùng [@userinfobot](https://t.me/userinfobot))

### Email SMTP
- **SMTP Host**: ví dụ `smtp.gmail.com`, `smtp.zoho.com`
- **SMTP Port**: thường là `587` (TLS) hoặc `465` (SSL)
- **SMTP Username**: email đăng nhập
- **SMTP Password**: mật khẩu ứng dụng (App Password)
- **Email nhận thông báo**: email bạn muốn nhận form

> Nếu dùng Gmail: vào Google Account > Security > App Passwords để tạo mật khẩu ứng dụng.

## Các bước triển khai

### Buoc 1: Luu secrets
Luu 7 secrets vao Lovable Cloud:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USERNAME`
- `SMTP_PASSWORD`
- `SMTP_TO_EMAIL`

### Buoc 2: Tao Edge Function `send-contact`
Tao file `supabase/functions/send-contact/index.ts`:
- Nhan du lieu form (name, email, exchange, telegram) qua POST request
- Gui tin nhan Telegram qua Bot API (`https://api.telegram.org/bot<token>/sendMessage`)
- Gui email qua SMTP (su dung thu vien `denomailer` cho Deno)
- Tra ve ket qua thanh cong/that bai

### Buoc 3: Cap nhat ContactForm.tsx
- Thay the `setTimeout` gia lap bang goi thuc den Edge Function `send-contact`
- Xu ly trang thai loading va hien thi thong bao thanh cong/that bai

## Chi tiet ky thuat

### Edge Function (send-contact/index.ts)

```text
POST /send-contact
Body: { name, email, exchange, telegram }

1. Validate du lieu dau vao
2. Song song gui:
   a. Telegram: POST https://api.telegram.org/bot{token}/sendMessage
      - chat_id, text (format thong tin dep), parse_mode: "HTML"
   b. Email SMTP: Dung denomailer
      - From: SMTP_USERNAME
      - To: SMTP_TO_EMAIL
      - Subject: "Dang ky moi tu [name]"
      - Body: HTML table voi thong tin form
3. Tra ve { success: true }
```

### ContactForm.tsx thay doi

```text
// Thay setTimeout bang:
const response = await fetch(
  `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    },
    body: JSON.stringify(data),
  }
);
```

### Noi dung tin nhan Telegram (mau)

```text
--- DANG KY MOI ---
Ho ten: Nguyen Van A
Email: a@email.com
San: Binance
Telegram: @username
Thoi gian: 2026-02-15 10:30
```

### Noi dung email (mau)
Email HTML voi bang thong tin tuong tu, trinh bay dep hon.

