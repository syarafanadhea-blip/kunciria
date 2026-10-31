/* ===== Kunciria – script.js ===== */
const WA_NUMBER = "6281200000000"; // ganti dengan nomor WhatsApp toko

/* ---------- Ilustrasi produk (SVG ringan, tanpa file gambar) ---------- */
function art(type, a, b, label) {
  const ring = `<circle cx="100" cy="26" r="14" fill="none" stroke="#9aa3b2" stroke-width="5"/><circle cx="100" cy="26" r="14" fill="none" stroke="#fff" stroke-width="1.5" opacity=".5"/><path d="M100 40v22" stroke="#9aa3b2" stroke-width="4" stroke-linecap="round"/>`;
  let body = "";
  switch (type) {
    case "acrylic":
      body = `<rect x="42" y="60" width="116" height="116" rx="28" fill="${a}"/>
        <rect x="52" y="70" width="96" height="96" rx="21" fill="${b}" opacity=".55"/>
        <circle cx="100" cy="72" r="6" fill="#fff" opacity=".9"/>
        <text x="100" y="128" text-anchor="middle" font-family="Fredoka,sans-serif" font-size="28" font-weight="700" fill="#fff">NAMA</text>
        <path d="M62 84q18-12 38-12" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none" opacity=".6"/>`;
      break;
    case "bear":
      body = `<circle cx="64" cy="82" r="22" fill="${a}"/><circle cx="136" cy="82" r="22" fill="${a}"/>
        <circle cx="64" cy="82" r="11" fill="${b}"/><circle cx="136" cy="82" r="11" fill="${b}"/>
        <circle cx="100" cy="124" r="54" fill="${a}"/>
        <ellipse cx="100" cy="142" rx="24" ry="18" fill="${b}"/>
        <circle cx="80" cy="116" r="6" fill="#2b2f4a"/><circle cx="120" cy="116" r="6" fill="#2b2f4a"/>
        <ellipse cx="100" cy="134" rx="8" ry="5.5" fill="#2b2f4a"/>
        <path d="M92 146q8 7 16 0" stroke="#2b2f4a" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="70" cy="136" r="7" fill="#ff9aa2" opacity=".6"/><circle cx="130" cy="136" r="7" fill="#ff9aa2" opacity=".6"/>`;
      break;
    case "flower": {
      let p = "";
      for (let i = 0; i < 8; i++) {
        const ang = (i * 45 * Math.PI) / 180;
        p += `<circle cx="${100 + Math.cos(ang) * 34}" cy="${120 + Math.sin(ang) * 34}" r="22" fill="${a}" opacity=".88"/>`;
      }
      body = `<circle cx="100" cy="120" r="64" fill="#fff" opacity=".35"/>${p}<circle cx="100" cy="120" r="20" fill="${b}"/><circle cx="94" cy="114" r="6" fill="#fff" opacity=".7"/>
        <circle cx="62" cy="70" r="4" fill="#fff" opacity=".8"/><circle cx="142" cy="172" r="3" fill="#fff" opacity=".8"/>`;
      break;
    }
    case "leather":
      body = `<path d="M62 62h76a12 12 0 0 1 12 12v94a12 12 0 0 1-12 12H62a12 12 0 0 1-12-12V74a12 12 0 0 1 12-12z" fill="${a}"/>
        <rect x="60" y="72" width="80" height="94" rx="8" fill="none" stroke="${b}" stroke-width="3" stroke-dasharray="6 5"/>
        <circle cx="100" cy="82" r="5" fill="#fff" opacity=".85"/>
        <text x="100" y="132" text-anchor="middle" font-family="Fredoka,sans-serif" font-size="24" font-weight="700" fill="${b}">NAMA</text>
        <path d="M80 148h40" stroke="${b}" stroke-width="3" stroke-linecap="round"/>`;
      break;
    case "star":
      body = `<polygon points="100,62 119,106 166,110 130,140 142,186 100,161 58,186 70,140 34,110 81,106" fill="${a}" stroke="${b}" stroke-width="7" stroke-linejoin="round"/>
        <polygon points="100,80 112,108 142,111 119,130 126,160 100,145 74,160 81,130 58,111 88,108" fill="#fff" opacity=".22"/>
        <circle cx="90" cy="124" r="4.5" fill="#fff"/><circle cx="110" cy="124" r="4.5" fill="#fff"/>
        <path d="M93 134q7 6 14 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      break;
    case "cat":
      body = `<polygon points="52,102 58,58 92,84" fill="${a}"/><polygon points="148,102 142,58 108,84" fill="${a}"/>
        <polygon points="61,92 63,72 80,85" fill="${b}"/><polygon points="139,92 137,72 120,85" fill="${b}"/>
        <ellipse cx="100" cy="128" rx="58" ry="50" fill="${a}"/>
        <ellipse cx="78" cy="122" rx="7" ry="9" fill="#2b2f4a"/><ellipse cx="122" cy="122" rx="7" ry="9" fill="#2b2f4a"/>
        <circle cx="80" cy="119" r="2.5" fill="#fff"/><circle cx="124" cy="119" r="2.5" fill="#fff"/>
        <path d="M94 138l6 6 6-6z" fill="#ff8fa3"/>
        <path d="M100 144v6M90 154q10 8 20 0" stroke="#2b2f4a" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M44 134h22M44 146l20-4M156 134h-22M156 146l-20-4" stroke="${b}" stroke-width="2.5" stroke-linecap="round"/>`;
      break;
  }
  return `<svg viewBox="0 0 200 200" role="img" aria-label="${label || "Gantungan kunci"}">${ring}${body}</svg>`;
}

/* ---------- Data produk (dummy) ---------- */
const PRODUCTS = [
  { id: 1, name: "Akrilik Custom Nama", cat: "custom", price: 15000, art: "acrylic", a: "#ff6b6b", b: "#ffd166", tag: "Terlaris",
    desc: "Akrilik tebal 3 mm, cetak UV tahan gores. Tulis nama atau inisial, pilih warna favoritmu.", meta: ["Custom nama", "Akrilik 3 mm", "6×6 cm"] },
  { id: 2, name: "Rajut Beruang Mungil", cat: "handmade", price: 25000, art: "bear", a: "#c98b5e", b: "#f6dcc0", tag: "Handmade",
    desc: "Dirajut tangan dari benang katun lembut dan diisi dakron. Lucu untuk tas atau kunci motor.", meta: ["Rajut tangan", "Katun", "7 cm"] },
  { id: 3, name: "Resin Bunga Kering", cat: "premium", price: 35000, art: "flower", a: "#b18cf0", b: "#ffd166", tag: "Premium",
    desc: "Bunga kering asli diawetkan dalam resin bening berkilau. Setiap pcs punya motif unik.", meta: ["Resin bening", "Bunga asli", "5 cm"] },
  { id: 4, name: "Kulit Emboss Nama", cat: "custom", price: 30000, art: "leather", a: "#8a5a3c", b: "#f2d9b8", tag: "Custom",
    desc: "Kulit sintetis premium dengan emboss nama dan jahitan rapi. Tampil elegan dan awet.", meta: ["Emboss nama", "Kulit sintetis", "5×7 cm"] },
  { id: 5, name: "Enamel Bintang Senyum", cat: "premium", price: 28000, art: "star", a: "#4ecdc4", b: "#1a535c", tag: "Baru",
    desc: "Enamel bercat halus dengan lapisan pelindung. Ceria dan cocok sebagai hadiah kecil.", meta: ["Logam enamel", "Anti karat", "5 cm"] },
  { id: 6, name: "Rajut Kucing Manis", cat: "handmade", price: 27000, art: "cat", a: "#f4a259", b: "#ffe3c2", tag: "Handmade",
    desc: "Kucing rajut berekspresi imut dengan kumis bordir. Pilihan warna tersedia sesuai stok.", meta: ["Rajut tangan", "Bordir", "7 cm"] },
];

const REVIEWS = [
  { n: "Alya R.", c: "Semarang", t: "Gantungan nama akrilik-nya rapi banget, warnanya sama persis seperti preview. Packing aman, dapat bonus stiker!", col: "#ff6b6b" },
  { n: "Dimas P.", c: "Yogyakarta", t: "Pesan 20 pcs buat suvenir ulang tahun, semua selesai tepat waktu. Admin ramah dan fast respon.", col: "#4ecdc4" },
  { n: "Sinta M.", c: "Salatiga", t: "Rajut beruangnya gemes parah. Jahitannya kuat dan isiannya padat. Pasti beli lagi!", col: "#b18cf0" },
  { n: "Rizky A.", c: "Jakarta", t: "Resin bunganya cantik, tiap bunga beda-beda. Pengiriman 3 hari sampai dengan aman.", col: "#f4a259" },
];

/* ---------- Utilitas ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- Ilustrasi hero & tentang ---------- */
$$("[data-art]").forEach((el) => (el.innerHTML = art(el.dataset.art, el.dataset.a, el.dataset.b)));
$("#aboutArt").innerHTML = art("acrylic", "#ff6b6b", "#ffd166", "Gantungan kunci Kunciria");

/* ---------- Render produk + filter ---------- */
function renderProducts(filter = "all") {
  const list = PRODUCTS.filter((p) => filter === "all" || p.cat === filter);
  $("#products").innerHTML = list.map((p, i) => `
    <article class="card" style="animation-delay:${i * 70}ms">
      <div class="card-img" style="background:linear-gradient(160deg,${p.b}55,${p.a}33)">
        <span class="tag">${esc(p.tag)}</span>
        ${art(p.art, p.a, p.b, p.name)}
      </div>
      <div class="card-body">
        <h3>${esc(p.name)}</h3>
        <div class="meta">${p.meta.map((m) => `<span>${esc(m)}</span>`).join("")}</div>
        <p>${esc(p.desc)}</p>
        <div class="card-foot">
          <span class="price">${rupiah(p.price)}</span>
          <button class="add" data-id="${p.id}">+ Keranjang</button>
        </div>
      </div>
    </article>`).join("");
}
renderProducts();

$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  $$(".chip").forEach((c) => c.classList.remove("active"));
  b.classList.add("active");
  renderProducts(b.dataset.filter);
});

/* ---------- Keranjang ---------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("kunciria_cart") || "[]"); } catch (e) { cart = []; }
const saveCart = () => { try { localStorage.setItem("kunciria_cart", JSON.stringify(cart)); } catch (e) {} };

function renderCart() {
  const box = $("#cartItems");
  if (!cart.length) {
    box.innerHTML = `<div class="empty"><span>🛒</span>Keranjang masih kosong.<br>Yuk pilih gantungan kunci!</div>`;
  } else {
    box.innerHTML = cart.map((it) => {
      const p = PRODUCTS.find((x) => x.id === it.id);
      if (!p) return "";
      return `<div class="item">
        <div class="item-img">${art(p.art, p.a, p.b, p.name)}</div>
        <div><h5>${esc(p.name)}</h5><small>${rupiah(p.price)}</small>
          <div class="qty"><button data-act="dec" data-id="${p.id}" aria-label="Kurangi">−</button><span>${it.qty}</span><button data-act="inc" data-id="${p.id}" aria-label="Tambah">+</button></div></div>
        <button class="rm" data-act="rm" data-id="${p.id}" aria-label="Hapus ${esc(p.name)}">🗑</button>
      </div>`;
    }).join("");
  }
  const total = cart.reduce((s, it) => s + (PRODUCTS.find((x) => x.id === it.id)?.price || 0) * it.qty, 0);
  const count = cart.reduce((s, it) => s + it.qty, 0);
  $("#cartTotal").textContent = rupiah(total);
  const badge = $("#cartCount");
  badge.textContent = count;
  badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
  saveCart();
}

function addToCart(id) {
  const f = cart.find((i) => i.id === id);
  f ? f.qty++ : cart.push({ id, qty: 1 });
  renderCart();
  toast("Ditambahkan ke keranjang 🛒");
}

$("#products").addEventListener("click", (e) => {
  const b = e.target.closest(".add");
  if (b) addToCart(+b.dataset.id);
});

$("#cartItems").addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const id = +b.dataset.id, it = cart.find((i) => i.id === id);
  if (!it) return;
  if (b.dataset.act === "inc") it.qty++;
  if (b.dataset.act === "dec") it.qty--;
  if (b.dataset.act === "rm" || it.qty <= 0) cart = cart.filter((i) => i.id !== id);
  renderCart();
});

const drawer = $("#drawer"), overlay = $("#overlay");
function toggleCart(open) {
  drawer.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  drawer.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
}
$("#openCart").addEventListener("click", () => toggleCart(true));
$("#closeCart").addEventListener("click", () => toggleCart(false));
overlay.addEventListener("click", () => toggleCart(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleCart(false); });

$("#clearCart").addEventListener("click", () => { cart = []; renderCart(); });
$("#checkout").addEventListener("click", () => {
  if (!cart.length) return toast("Keranjang masih kosong");
  let total = 0;
  const lines = cart.map((it, i) => {
    const p = PRODUCTS.find((x) => x.id === it.id);
    total += p.price * it.qty;
    return `${i + 1}. ${p.name} x${it.qty} = ${rupiah(p.price * it.qty)}`;
  });
  const msg = `Halo Kunciria, saya mau pesan:\n${lines.join("\n")}\n\nTotal: ${rupiah(total)}\n\nNama custom (jika ada):\nAlamat pengiriman:`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});
renderCart();

/* ---------- Slider ulasan ---------- */
let rev = 0, revTimer;
$("#reviewTrack").innerHTML = REVIEWS.map((r) => `
  <div class="review"><div class="review-card">
    <div class="stars" aria-label="Rating 5 dari 5">★★★★★</div>
    <p>“${esc(r.t)}”</p>
    <div class="who"><div class="avatar" style="background:${r.col}">${esc(r.n[0])}</div><div><b>${esc(r.n)}</b><small>${esc(r.c)}</small></div></div>
  </div></div>`).join("");
$("#revDots").innerHTML = REVIEWS.map((_, i) => `<button aria-label="Ulasan ${i + 1}"></button>`).join("");
function goRev(i) {
  rev = (i + REVIEWS.length) % REVIEWS.length;
  $("#reviewTrack").style.transform = `translateX(-${rev * 100}%)`;
  $$("#revDots button").forEach((d, k) => d.classList.toggle("active", k === rev));
}
function autoRev() { clearInterval(revTimer); revTimer = setInterval(() => goRev(rev + 1), 5500); }
$("#prevRev").addEventListener("click", () => { goRev(rev - 1); autoRev(); });
$("#nextRev").addEventListener("click", () => { goRev(rev + 1); autoRev(); });
$$("#revDots button").forEach((d, i) => d.addEventListener("click", () => { goRev(i); autoRev(); }));
goRev(0); autoRev();

/* ---------- Tab kebijakan ---------- */
$$(".tab").forEach((t) => t.addEventListener("click", () => {
  $$(".tab").forEach((x) => { x.classList.remove("active"); x.setAttribute("aria-selected", "false"); });
  $$(".panel").forEach((p) => p.classList.remove("active"));
  t.classList.add("active"); t.setAttribute("aria-selected", "true");
  $("#tab-" + t.dataset.tab).classList.add("active");
}));

/* ---------- Menu mobile ---------- */
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
$$("#menu a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }));

/* ---------- Scroll: header, tombol atas, reveal ---------- */
const header = $("#header"), toTop = $("#toTop");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", scrollY > 20);
  toTop.classList.toggle("show", scrollY > 500);
}, { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
} else { $$(".reveal").forEach((el) => el.classList.add("in")); }

/* ---------- Form kontak ---------- */
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const n = $("#cName").value.trim(), m = $("#cMsg").value.trim(), err = $("#formErr");
  if (n.length < 2 || m.length < 5) { err.textContent = "Mohon isi nama dan pesan dengan lengkap."; return; }
  err.textContent = "";
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Kunciria, saya ${n}.\n${m}`)}`, "_blank", "noopener");
  e.target.reset();
  toast("Membuka WhatsApp…");
});

$("#year").textContent = new Date().getFullYear();
