

# Audit SEO cho từ khóa "Backcom Crypto"

## Kết quả Audit - Các vấn đề phát hiện

### 1. Keyword "backcom crypto" gần như vắng mặt
- **Title tag**: Không chứa "backcom" -- chỉ có "Hoàn Phí Giao Dịch Crypto"
- **Meta description**: Không chứa "backcom"
- **H1 (HeroSection)**: Không chứa "backcom"
- **Nội dung chính**: Chỉ xuất hiện 1 lần duy nhất trong FAQ ("Backcom (hoàn phí) là gì?")
- **OG title/description**: Không chứa "backcom"

### 2. Lỗi kỹ thuật trong index.html
- Title tag bị xuống dòng (line break giữa tag) -- ảnh hưởng hiển thị trên Google
- Còn 2 dòng TODO comment chưa xóa
- OG image vẫn dùng placeholder lovable.dev
- Thiếu `og:url`
- Thiếu `twitter:title` và `twitter:description`

### 3. Thiếu keyword density trong nội dung
- HeroSection: 0 lần "backcom"
- Exchanges: 0 lần
- HowItWorks: 0 lần
- Benefits: 0 lần
- FeeTable: 0 lần
- Footer: 0 lần

### 4. Vấn đề khác
- Footer ghi "2024" thay vì "2025"
- Organization schema không đề cập "backcom"

---

## Kế hoạch sửa chữa

### A. Tối ưu index.html (meta tags)

- **Title**: Sửa thành 1 dòng, chèn keyword: `Backcom Crypto | Crypto24h - Hoàn Phí Giao Dịch Lên Đến 50%`
- **Meta description**: `Backcom crypto uy tín #1 Việt Nam. Hoàn phí giao dịch lên đến 50% trên Binance, OKX, Bybit, MEXC, Bitget. Đăng ký nhận hoàn phí tự động mỗi ngày.`
- **OG title/description**: Cập nhật tương tự, thêm `og:url`
- **Twitter title/description**: Thêm mới
- Xóa TODO comments
- Cập nhật Organization schema: thêm "backcom" vào description và offers

### B. Tối ưu HeroSection.tsx

- Badge text: "Tiết kiệm tối đa phí giao dịch" -> "Backcom Crypto - Tiết kiệm phí giao dịch"
- H1: Thêm "Backcom Crypto" -- ví dụ: `Backcom Crypto - Hoàn Phí Giao Dịch Lên Đến 50%`
- Mô tả phụ: Chèn "backcom" tự nhiên vào đoạn text

### C. Tối ưu nội dung các section

- **Exchanges.tsx**: Thêm "backcom" vào subtitle -- "Đăng ký qua mã giới thiệu để nhận backcom tối đa"
- **HowItWorks.tsx**: Subtitle chèn "backcom" -- "Chỉ 3 bước đơn giản để bắt đầu nhận backcom crypto"
- **Benefits.tsx**: Subtitle -- "Tối ưu chi phí giao dịch với backcom crypto vượt trội"
- **FeeTable.tsx**: Subtitle -- "So sánh tỷ lệ backcom trên các sàn giao dịch hàng đầu"

### D. Tối ưu Footer.tsx

- Thay "Hoàn phí giao dịch crypto uy tín #1" -> "Backcom crypto uy tín #1 Việt Nam"
- Sửa "2024" -> "2025"

### E. Tối ưu Navbar.tsx

- Thêm link "Backcom" vào menu, trỏ đến #exchanges (nơi hiển thị tỷ lệ backcom)

---

## Chi tiết kỹ thuật

### Files cần sửa:
1. `index.html` -- meta tags, schema, xóa TODO
2. `src/components/HeroSection.tsx` -- H1, badge, mô tả
3. `src/components/Exchanges.tsx` -- subtitle
4. `src/components/HowItWorks.tsx` -- subtitle
5. `src/components/Benefits.tsx` -- subtitle
6. `src/components/FeeTable.tsx` -- subtitle
7. `src/components/Footer.tsx` -- tagline, copyright year
8. `src/components/Navbar.tsx` -- thêm menu item (tùy chọn)

### Nguyên tắc chèn keyword:
- Giữ tự nhiên, không spam keyword
- Keyword chính "backcom crypto" xuất hiện trong title, H1, description
- Keyword phụ "backcom" xuất hiện 1-2 lần mỗi section trong subtitle
- Tổng keyword density dự kiến: 1-2% (mức tối ưu)

