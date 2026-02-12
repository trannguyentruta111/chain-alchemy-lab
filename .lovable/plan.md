

# Tao Exchange Section - Cap nhat ty le hoan phi

## Tong quan
Tao section "San Giao Dich Doi Tac" moi voi moi card hien thi **"Ty le hoan phi 100%"** thay vi tach rieng Spot/Futures.

## Thay doi

### 1. Tao `src/components/Exchanges.tsx`
- Section rieng voi tieu de gradient "San Giao Dich Doi Tac"
- Grid responsive: 1 cot mobile, 2 cot tablet, 3 cot desktop
- Moi san la card bao gom:
  - Icon/logo san
  - Ten san giao dich
  - **"Ty le hoan phi 100%"** - hien thi noi bat voi gradient text
  - Ma gioi thieu voi nut copy (toast khi copy thanh cong)
  - Nut "Dang Ky Ngay" voi link
  - Badge "Hot" cho san noi bat
- Hieu ung: gradient glow border, 3D tilt hover, stagger scroll animation

### 2. Cap nhat `src/components/HeroSection.tsx`
- Xoa phan danh sach exchange logos o cuoi Hero Section

### 3. Cap nhat `src/pages/Index.tsx`
- Chen `Exchanges` component vao sau Hero Section
- Them gradient divider tuong ung

## Mau card

```text
+-----------------------------+
|  [Icon]  BINANCE     [Hot]  |
|                             |
|  Ty le hoan phi 100%        |
|                             |
|  Ma: CRYPTO24H  [Copy]     |
|  [   Dang Ky Ngay   ->  ]  |
+-----------------------------+
```

## Ky thuat
- framer-motion cho animation
- useScrollAnimation hook
- lucide-react icons (Copy, ExternalLink, Flame)
- sonner toast khi copy ma
- Du lieu mau: Binance, OKX, Bybit, MEXC, Bitget

