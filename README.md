# Thiết Kế Hành Trình Di Sản

Landing page 5 ngày tại Ba Vì, Hà Nội (16–20.12.2026) | WI.FINANCE

Địa chỉ: https://wifinance.com.vn/hanh-trinh-di-san

- `public/index.html` — trang landing (một file, ảnh nhúng sẵn), deploy lên Cloudflare Pages project `hanh-trinh-di-san`.
- `worker/` — Worker gắn đường dẫn `wifinance.com.vn/hanh-trinh-di-san*` vào Pages project trên.

## Deploy

```bash
npx wrangler pages deploy public --project-name hanh-trinh-di-san --branch main
cd worker && npx wrangler deploy
```
