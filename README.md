# LiveScore Website

Website live score olahraga dengan desain modern dan responsive.

## Struktur Folder

```
NN8LIVESCORE/
├── index.html          # File HTML utama (gunakan ini)
├── code.html           # File lama (bisa dihapus)
├── css/
│   └── styles.css      # Semua styling custom
├── js/
│   ├── tailwind-config.js  # Konfigurasi Tailwind CSS
│   └── app.js          # JavaScript utama untuk interaktivitas
├── assets/
│   ├── logonnsportdark.png
│   ├── logonnsportlight.png
│   └── football-logos/
└── README.md
```

## Fitur

### ✅ Navigasi
- Top navigation dengan kategori olahraga
- Dropdown "More" untuk olahraga tambahan (Esports, Cricket, Rugby, dll)
- Sidebar dengan kategori liga
- Active state untuk item yang dipilih

### ✅ Dropdown Menu "More"
- Berisi 16 kategori olahraga tambahan
- Scrollable jika konten terlalu panjang (max-height: 400px)
- Auto-close saat klik di luar
- Smooth animation

### ✅ Dark/Light Mode
- Toggle antara dark dan light theme
- Menyimpan preferensi di localStorage
- Logo berubah sesuai theme

### ✅ Responsive Design
- Mobile-friendly
- Tablet-friendly
- Desktop-optimized

## Cara Menggunakan

1. **Buka file `index.html`** di browser (double-click atau drag ke browser)
2. **Klik tombol "More"** di navigation bar untuk melihat dropdown
3. **Klik icon moon/sun** untuk toggle dark/light mode

## Teknologi

- **HTML5** - Struktur semantic
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Tanpa dependency
- **Google Fonts** - Inter font family
- **Material Symbols** - Icon set

## Dropdown Menu

Menu dropdown "More" berisi:
1. Esports
2. Cricket
3. Rugby
4. Badminton
5. Snooker
6. Cycling
7. Minifootball
8. Bandy
9. Motorsport
10. MMA
11. Futsal
12. Water polo
13. Aussie rule
14. Beach volleyball
15. Floorball
16. Padel

## Debugging

Buka Console (F12) untuk melihat log:
- "DOM loaded, initializing app..."
- "Initializing dropdown..."
- "Button clicked, dropdown visible: true/false"
- "Showing dropdown" / "Hiding dropdown"

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- File `code.html` adalah file lama yang bisa dihapus
- Gunakan `index.html` sebagai file utama
- Semua styling ada di `css/styles.css`
- Semua JavaScript ada di `js/app.js`
- Tailwind config ada di `js/tailwind-config.js`
