# LAL ANAAR Mahsulot Kataloqi

Premium tabiiy meva sharbatlari katalogi uchun zamonaviy React ilova. To'liq tarkib ma'lumotlari bilan.

## Imkoniyatlar

- **Mahsulot katalogi** - Barcha mahsulotlarning grid ko'rinishi va filtrlash
- **Kategoriya filtri** - Mahsulotlarni kategoriya bo'yicha filtrlang (Meva sharbatlari)
- **Mahsulot batafsil sahifalar** - Tarkibi bilan to'liq mahsulot ma'lumoti
- **Tarkib ro'yxatlari** - Har bir mahsulot uchun batafsil tarkib
- **Ozuqaviy qiymati** - Har bir porsiya uchun ozuqaviy ma'lumot
- **Professional qorong'u rejim** - Zamonaviy industrial estetika
- **Moslashuvchan dizayn** - Desktop va mobil qurilmalarda ishlaydi
- **Mahsulot rasmlari** - Maxsus mahsulot fotografiyalari uchun qo'llab-quvvatlash
- **O'zbek tilida** - To'liq lokal interfeys
xnologiyalar

- React 18
- React Router v6 (navigatsiya uchun)
- Vite (build vositasi)
- Zamonaviy ES6+ JavaScript
- CSS3 custom properties bilan
- CSS3 with custom properties

## Boshlash

### O'rnatish

```bash
npm install
```

### Ishlab chiqish

```bash
npm run dev
```

Brauzeringizda [http://localhost:5173](http://localhost:5173) ochiladi.

### Build

```bash
npm run build
```

### Production ni ko'rish

```bash
npm run preview
```

## Project Structure

```
asiapublic/
│   └── images/          # Product images go here
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   ├── ProductCatalog.jsx   # Product grid with filters
│   │   └── ProductDetail.jsx    # Detailed product page
│   ├── data/
│   │   └── products.js          # Product data with ingredients
│   ├── styles/
│   │   ├── global.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── ProductCatalog.css
│   │   └── ProductDetail.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Component Overview

- **Header** - Navigation with logo, menu links, and action buttons
- **ProductCatalog** - Product grid with category filtering
- **ProductDetail** - Full product page with ingredients, nutrition facts, and product info

## Adding Products

Edit [src/data/products.js](src/data/products.js) to add or modify products. Each product includes:

```javascript
{
  id: 1,
  name: 'Product Name',
  category: 'Category',
  price: '$4.99',
  image: '/images/product.jpg',
  shortDescription: 'Brief description',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  nutrition: { servingSize, calories, sugar, protein, fat, carbs },
  allergens: 'None',
  storage: 'Storage instructions',
  origin: 'Made in...',
  inStock: true
}
```

## Adding Product Images

1. Place images in `public/images/` folder
2. Name them as referenced in `products.js` (e.g., `apple-juice.jpg`)
3. Recommended size: 500×600px (portrait)
4. See [public/images/README.md](public/images/README.md) for details
- **Sidebar** - Specifications, color palette, and production notes

## Mahsulotlar

Katalogda 6 ta mahsulot:
- Olma sharbati
- Ananas sharbati  
- Mango sharbati
- Apelsin sharbati
- Aralash rezavorlar sharbati
- Tarvuz sharbati

## Litsenziya

MIT
# lal-anaar
