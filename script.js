/**
 * JB LEPTOP - LAPTOP SECOND & SERVICE CENTER
 * File Logika Interaktif Terpusat (Mendukung Multi-Halaman: index.html, katalog.html, layanan.html)
 */

const STORE_CONFIG = {
  storeName: "JB Leptop",
  whatsappNumber: "6283867159578",
  address: "Jl.A.Yani Km 15.200",
  hours: "09.00 - 20.00 WITA"
};

// --- 1. DATA KATALOG LAPTOP BEKAS READY STOK (ZONA 2) ---
const LAPTOPS_DATA = [
  {
    id: 1, name: "Lenovo ThinkPad T480", category: "business", badgeCategory: "Seri Bisnis / Kantoran",
    price: 4250000, originalPrice: 4800000, processor: "Intel Core i5-8350U (Quad-Core)",
    ram: "16 GB DDR4 Dual-Channel", storage: "SSD 512 GB NVMe Super Cepat", display: "14.0 inch Full HD IPS Anti-Glare",
    gpu: "Intel UHD Graphics 620", battery: "Dual Battery Normal (4 - 6 Jam)",
    conditionNotes: "Fisik mulus 97%, keyboard empuk khas ThinkPad, port lengkap, sudah repaste pasta Arctic MX-4.",
    bonus: "Charger Lenovo Original, Tas Ransel Laptop, Mouse Wireless Silent, Mousepad.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2, name: "ASUS TUF Gaming FX505DT", category: "gaming", badgeCategory: "Gaming & Desain Grafis",
    price: 6850000, originalPrice: 7500000, processor: "AMD Ryzen 5 3550H (8 Threads)",
    ram: "16 GB DDR4 2666MHz", storage: "SSD 512 GB NVMe + Slot HDD", display: "15.6 inch FHD 120Hz IPS Gaming",
    gpu: "NVIDIA GeForce GTX 1650 4GB VRAM", battery: "Tahan 2 - 3 Jam (Normal Gaming)",
    conditionNotes: "Layar 120Hz mulus, keyboard RGB normal, sudah deep clean & repaste thermal pasta suhu adem.",
    bonus: "Adaptor Original 150W, Tas Ransel Gaming, Cooling Pad Fan, Mouse Gaming.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3, name: "Dell Latitude 7490", category: "business", badgeCategory: "Seri Bisnis / Ringan",
    price: 3950000, originalPrice: 4400000, processor: "Intel Core i5-8250U (8 Threads)",
    ram: "8 GB DDR4 (Upgradable)", storage: "SSD 256 GB M.2 NVMe", display: "14.0 inch Full HD IPS Matte",
    gpu: "Intel UHD Graphics 620", battery: "Excellent Health (4 - 5 Jam)",
    conditionNotes: "Body serat karbon kokoh & ringan 1.4kg, cocok untuk mobilitas tinggi, port Type-C support display.",
    bonus: "Charger Dell Original, Tas Laptop Softcase, Mouse Optik.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4, name: "HP EliteBook 840 G6", category: "office", badgeCategory: "Kuliah & Eksekutif",
    price: 4900000, originalPrice: 5500000, processor: "Intel Core i5-8365U vPro",
    ram: "16 GB DDR4", storage: "SSD 256 GB NVMe M.2", display: "14.0 inch FHD IPS Bang & Olufsen",
    gpu: "Intel UHD Graphics 620", battery: "Awet 3.5 - 5 Jam",
    conditionNotes: "Bodi full aluminium silver mewah, speaker jernih Bang & Olufsen, keyboard backlit putih.",
    bonus: "Charger HP Original, Tas Jinjing Elegan, Mouse Wireless.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5, name: "Acer Aspire 3 A314", category: "budget", badgeCategory: "Budget Terjangkau Pelajar",
    price: 2750000, originalPrice: 3200000, processor: "Intel Celeron N4020 Gemini Lake",
    ram: "8 GB DDR4", storage: "SSD 256 GB SATA (Booting Cepat)", display: "14.0 inch HD LED ComfyView",
    gpu: "Intel UHD Graphics 600", battery: "Normal Awet 3 - 4 Jam",
    conditionNotes: "Cocok untuk belajar online, ketik Word/Excel, Zoom meeting, siap pakai Windows 11 & Office.",
    bonus: "Charger Acer Original, Mouse USB, Tas Laptop.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6, name: "Lenovo IdeaPad Gaming 3", category: "gaming", badgeCategory: "Gaming & Content Creator",
    price: 7950000, originalPrice: 8800000, processor: "AMD Ryzen 5 4600H (12 Threads)",
    ram: "16 GB DDR4 3200MHz", storage: "SSD 512 GB NVMe M.2", display: "15.6 inch FHD 120Hz IPS",
    gpu: "NVIDIA GeForce GTX 1650 Ti 4GB", battery: "Normal Awet 2.5 Jam",
    conditionNotes: "Performa kencang untuk game berat & video editing Premiere/After Effects. Baru servis cleaning repaste.",
    bonus: "Charger 135W Original, Tas Gaming, Mouse Gaming RGB, Mousepad.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7, name: "Asus VivoBook 14 A416", category: "office", badgeCategory: "Kuliah & Kantor Modern",
    price: 4350000, originalPrice: 4900000, processor: "Intel Core i3-1005G1 (Gen 10)",
    ram: "8 GB DDR4", storage: "SSD 256 GB NVMe", display: "14.0 inch FHD NanoEdge Bezel Tipis",
    gpu: "Intel UHD Graphics", battery: "Awet 3.5 - 4.5 Jam",
    conditionNotes: "Desain ramping kekinian dengan bezel tipis NanoEdge. Layar jernih dan performa responsif.",
    bonus: "Charger Asus Original, Tas Asus, Mouse Optik.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8, name: "Dell Inspiron 3480 Budget", category: "budget", badgeCategory: "Budget Murah & Bandel",
    price: 2500000, originalPrice: 2950000, processor: "Intel Core i3-8145U Gen 8",
    ram: "8 GB DDR4", storage: "SSD 256 GB SATA", display: "14.0 inch HD Anti-Glare",
    gpu: "Intel UHD Graphics 620", battery: "Normal Awet 2.5 - 3 Jam",
    conditionNotes: "Laptop tangguh harga bersahabat di bawah 3 juta. Sudah upgrade SSD sehingga proses booting cepat.",
    bonus: "Charger Dell Original, Tas Jinjing, Mouse USB.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80"
  }
];

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}

// --- 2. RENDER KARTU LAPTOP KE ETALASE #laptopGrid (ZONA 2) ---
function renderLaptops(laptopList) {
  const grid = document.getElementById('laptopGrid');
  if (!grid) return;

  if (laptopList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: 16px; border: 1px dashed var(--border-color);">
        <h3 style="margin-bottom: 8px;">Tidak Ada Unit yang Cocok</h3>
        <p style="color: var(--text-muted); margin-bottom: 16px;">Silakan gunakan kata kunci lain atau hubungi admin untuk cek stok gudang.</p>
        <a href="https://wa.me/${STORE_CONFIG.whatsappNumber}" target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> Tanya Stok ke Admin</a>
      </div>`;
    return;
  }

  grid.innerHTML = laptopList.map(laptop => `
    <div class="laptop-card" data-id="${laptop.id}">
      <div class="laptop-thumb-wrap">
        <img src="${laptop.image}" alt="${laptop.name}" class="laptop-thumb" loading="lazy" />
      </div>
      <div class="laptop-body">
        <div class="laptop-category">${laptop.badgeCategory}</div>
        <h3 class="laptop-name">${laptop.name}</h3>
        <div class="specs-pills">
          <div class="spec-pill"><i class="fa-solid fa-microchip"></i><span>${laptop.processor.split('(')[0]}</span></div>
          <div class="spec-pill"><i class="fa-solid fa-memory"></i><span>${laptop.ram.split('(')[0]}</span></div>
          <div class="spec-pill"><i class="fa-solid fa-hard-drive"></i><span>${laptop.storage.split('(')[0]}</span></div>
          <div class="spec-pill"><i class="fa-solid fa-display"></i><span>${laptop.display.split(' ').slice(0, 2).join(' ')}</span></div>
        </div>
        <div class="laptop-pricing-box">
          <div class="price-container">
            <span class="price-orig">${formatRupiah(laptop.originalPrice)}</span>
            <span class="price-current">${formatRupiah(laptop.price)}</span>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-secondary btn-sm" onclick="openProductModal(${laptop.id})"><i class="fa-solid fa-circle-info"></i> Detail</button>
          <button class="btn btn-whatsapp btn-sm" onclick="orderLaptopViaWA(${laptop.id})"><i class="fa-brands fa-whatsapp"></i> Beli Unit</button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- 3. PENCARIAN REAL-TIME & FILTER KATEGORI (ZONA 2) ---
let activeCategory = 'all';
let searchKeyword = '';

function applyFilterAndSearch() {
  let results = LAPTOPS_DATA;
  if (activeCategory !== 'all') {
    results = activeCategory === 'budget'
      ? results.filter(item => item.price < 3000000 || item.category === 'budget')
      : results.filter(item => item.category === activeCategory);
  }
  if (searchKeyword.trim() !== '') {
    const kw = searchKeyword.toLowerCase();
    results = results.filter(item =>
      item.name.toLowerCase().includes(kw) ||
      item.processor.toLowerCase().includes(kw) ||
      item.ram.toLowerCase().includes(kw) ||
      item.storage.toLowerCase().includes(kw) ||
      item.gpu.toLowerCase().includes(kw)
    );
  }
  renderLaptops(results);
}

function initCategoryFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const urlCategory = new URLSearchParams(window.location.search).get('category');
  if (urlCategory) activeCategory = urlCategory;

  buttons.forEach(btn => {
    if (btn.getAttribute('data-category') === activeCategory) {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      applyFilterAndSearch();
    });
  });

  const searchInput = document.getElementById('laptopSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value;
      applyFilterAndSearch();
    });
  }
  applyFilterAndSearch();
}

// Remote Filter dari Footer (Mendukung Multi-Page & Single-Page)
window.filterByTag = function(category) {
  const grid = document.getElementById('laptopGrid');
  if (!grid) return true; // Jika di halaman selain katalog.html, lanjutkan buka link katalog.html?category=...
  activeCategory = category;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === category);
  });
  applyFilterAndSearch();
  document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
  return false;
};

// --- 4. POP-UP MODAL DETAIL & WHATSAPP ORDER (ZONA 2) ---
window.openProductModal = function(id) {
  const laptop = LAPTOPS_DATA.find(item => item.id === id);
  const modalBody = document.getElementById('modalBody');
  const modalOverlay = document.getElementById('productModal');
  if (!laptop || !modalBody || !modalOverlay) return;

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div>
        <img src="${laptop.image}" alt="${laptop.name}" class="modal-img" />
        <div style="margin-top: 12px; background: var(--primary-light); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.8rem;">
          <strong><i class="fa-solid fa-gift text-primary"></i> Kelengkapan & Bonus:</strong><br>${laptop.bonus}
        </div>
      </div>
      <div>
        <span class="badge-tag">${laptop.badgeCategory}</span>
        <h2 class="modal-title">${laptop.name}</h2>
        <div class="modal-price">${formatRupiah(laptop.price)} <span style="font-size: 0.9rem; color: var(--text-muted); text-decoration: line-through; font-weight: normal;">${formatRupiah(laptop.originalPrice)}</span></div>
        <table class="modal-specs-table">
          <tr><td>Processor</td><td>: ${laptop.processor}</td></tr>
          <tr><td>RAM</td><td>: ${laptop.ram}</td></tr>
          <tr><td>Storage</td><td>: ${laptop.storage}</td></tr>
          <tr><td>Layar</td><td>: ${laptop.display}</td></tr>
          <tr><td>GPU</td><td>: ${laptop.gpu}</td></tr>
          <tr><td>Baterai</td><td>: ${laptop.battery}</td></tr>
        </table>
        <p style="font-size: 0.82rem; color: var(--text-muted); background: var(--input-bg); border: 1px solid var(--border-color); padding: 10px; border-radius: 6px; margin-bottom: 16px;">
          <strong>Catatan Kondisi:</strong> ${laptop.conditionNotes}
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <button class="btn btn-whatsapp btn-block" onclick="orderLaptopViaWA(${laptop.id})"><i class="fa-brands fa-whatsapp"></i> Pesan Unit Ini</button>
          <button class="btn btn-secondary btn-block" onclick="closeProductModal()">Tutup</button>
        </div>
      </div>
    </div>`;
  modalOverlay.classList.add('active');
};

function closeProductModal() {
  document.getElementById('productModal')?.classList.remove('active');
}

function initModalClose() {
  document.getElementById('modalClose')?.addEventListener('click', closeProductModal);
  document.getElementById('productModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'productModal') closeProductModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProductModal(); });
}

window.orderLaptopViaWA = function(id) {
  const laptop = LAPTOPS_DATA.find(item => item.id === id);
  if (!laptop) return;
  const msg = `Halo ${STORE_CONFIG.storeName}, saya tertarik membeli laptop ini:\n*Unit:* ${laptop.name}\n*Spek:* ${laptop.processor} | ${laptop.ram} | ${laptop.storage}\n*Harga:* ${formatRupiah(laptop.price)}\nApakah unit ini masih ready stock?`;
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
};

// --- 5. FORM SERVIS, JUAL BELI & AUTO-SELECT (ZONA 3) ---
window.selectServiceOption = function(serviceName) {
  const selectElem = document.getElementById('bookServiceType');
  if (!selectElem) return;
  for (let i = 0; i < selectElem.options.length; i++) {
    if (selectElem.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
      selectElem.selectedIndex = i;
      break;
    }
  }
};

function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = `Halo ${STORE_CONFIG.storeName}, saya ingin *Booking Servis Laptop*:\n` +
      `*Nama:* ${document.getElementById('bookName').value}\n` +
      `*No. WA:* ${document.getElementById('bookPhone').value}\n` +
      `*Layanan:* ${document.getElementById('bookServiceType').value}\n` +
      `*Tipe Laptop:* ${document.getElementById('bookLaptopModel').value}\n` +
      `*Metode:* ${document.getElementById('bookMethod').value}\n` +
      `*Keluhan:* ${document.getElementById('bookSymptoms').value}`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

function initSellForm() {
  const form = document.getElementById('sellLaptopForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = `Halo ${STORE_CONFIG.storeName}, saya ingin *${document.getElementById('sellType').value}*:\n` +
      `*Merk & Tipe:* ${document.getElementById('sellBrand').value} ${document.getElementById('sellModel').value}\n` +
      `*Spesifikasi:* ${document.getElementById('sellSpecs').value}\n` +
      `*Kondisi:* ${document.getElementById('sellCondition').value}\n` +
      `*Ekspektasi Harga:* ${document.getElementById('sellTargetPrice').value || 'Sesuai Taksiran Toko'}\n` +
      `*Lokasi:* ${document.getElementById('sellCity').value}`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// --- 6. FAQ ACCORDION DINAMIS SCROLLHEIGHT (ZONA 3) ---
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(other => {
        other.classList.remove('active');
        other.querySelector('.accordion-body').style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

// --- 7. MENU MOBILE DRAWER & DARK/LIGHT MODE (ZONA 1) ---
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (icon) icon.className = navMenu.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggle i');
  if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;
  updateThemeIcon(document.documentElement.getAttribute('data-theme') || 'light');

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

// --- 8. ORKESTRASI UTAMA SAAT DOM SIAP (ZONA 3) ---
document.addEventListener('DOMContentLoaded', () => {
  initCategoryFilter();
  initSellForm();
  initBookingForm();
  initAccordion();
  initMobileMenu();
  initModalClose();
  initThemeToggle();
});
