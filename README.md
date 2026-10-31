# Kunciria – Toko Gantungan Kunci

Website toko online (rancangan) berbasis HTML, CSS, dan JavaScript murni. Tanpa framework dan tanpa file gambar berat, sehingga cepat dibuka di HP.

## Struktur
```
index.html   → struktur halaman
style.css    → tampilan (responsif)
script.js    → produk, keranjang, slider ulasan, tab kebijakan, form
README.md
```

## Cara publish ke GitHub Pages (gratis, otomatis HTTPS)
1. Buka https://github.com/new, buat repo publik, mis. `kunciria`.
2. Klik **uploading an existing file**, unggah `index.html`, `style.css`, `script.js`, `README.md`, lalu **Commit changes**.
3. Buka **Settings → Pages**.
4. Di **Build and deployment**, pilih **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**, lalu **Save**.
5. Tunggu 1–2 menit. Link web Anda:
   `https://USERNAME-GITHUB.github.io/kunciria/`

## Yang perlu diganti
- Nomor WhatsApp: variabel `WA_NUMBER` di `script.js` (format 62xxxxxxxxxx).
- Alamat, email, NIB, dan link sosmed di `index.html` (saat ini dummy).

## Pemetaan ke ketentuan tugas
| Ketentuan | Lokasi |
|---|---|
| Nama, logo, Tentang Kami, Kontak | Header, `#tentang`, `#kontak` |
| Min. 3 produk (foto, harga, deskripsi) | `#produk` (6 produk) |
| Kebijakan pengiriman, retur & refund, privasi, cara pembayaran | `#kebijakan` |
| Metode pembayaran & kurir | bagian "Pembayaran & Kurir" |
| HTTPS & domain jelas | GitHub Pages |
| Kontak aktif | WhatsApp, email, form |
| Ulasan pembeli | `#ulasan` |
| Pembayaran aman | bagian pembayaran + catatan |
| Legalitas usaha | `#legalitas` |
| Media sosial terhubung | bagian kontak & footer |
| Tampil rapi di HP | desain responsif |
