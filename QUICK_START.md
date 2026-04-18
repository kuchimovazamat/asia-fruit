# Quick Start Guide - ASIA FRUITE Kataloq

## 🚀 Mahsulot katalogingiz tayyor!

Ilova manzili: **http://localhost:5173/**

## 📦 Nima mavjud:

### ✅ Mahsulot kataloq imkoniyatlari:
- **6 ta mahsulot** to'liq ma'lumotlar bilan (Olma, Ananas, Mango, Apelsin, Aralash rezavorlar, Tarvuz)
- **Tarkibi ro'yxati** - Har bir mahsulot uchun batafsil
- **Ozuqaviy qiymati** - Har bir porsiya uchun ma'lumot
- **Mahsulot sahifalari** - Har qanday mahsulotni bosing va to'liq ma'lumot ko'ring
- **Kategoriya filtri** - Mahsulotlarni kategoriya bo'yicha filtrlang
- **Buyurtma tugmalari** - Mijozlar bilan bog'lanish uchun

## 📸 Mahsulot rasmlarini qo'shish:

### 1-qadam: Rasmlarni tayyorlang
- Shisha idish yoki qadoqlangan mahsulotlaringizni suratga oling
- Tavsiya etilgan o'lcham: **500×600px** (vertikal)
- Format: JPG, PNG, yoki WebP
- Fayl hajmi: 2MB dan kam

### 2-qadam: Rasimlarni loyihaga qo'shing
Rasmlarni joylashtiring: `public/images/`

Kerakli fayl nomlari:
```
apple-juice.jpg
pineapple-juice.jpg  
mango-juice.jpg
orange-juice.jpg
berry-juice.jpg
watermelon-juice.jpg
```

### 3-qadam: Avtomatik ko'rinadi! 
Fayllar qo'shilgandan keyin, brauzerda yangilang va rasmlar avtomatik ko'rinadi.

**Eslatma**: Hozir placeholder rasmlar ko'rsatilmoqda. Haqiqiy rasmlar bilan almashtiring!

## ✏️ Mahsulotlarni sozlash:

Tahrirlash: `src/data/products.js`

### Yangi mahsulot qo'shish:
```javascript
{
  id: 7,
  name: 'Uzum sharbati',
  category: 'Meva sharbatlari',
  image: '/images/grape-juice.jpg',
  shortDescription: 'Shirin binafsha uzum sharbati',
  ingredients: [
    'Filtrlangan suv',
    'Uzum sharbati konsentrati (40%)',
    'Tabiiy uzum ta\\'mi',
    'Limon kislota'
  ],
  nutrition: {
    servingSize: '250ml',
    calories: 135,
    sugar: '31g',
    protein: '1g',
    fat: '0g',
    carbs: '34g'
  },
  allergens: 'Yo\\'q',
  storage: 'Sovuqda saqlang',
  origin: 'Osiyo ishlab chiqarilgan',
  inStock: true
}
```

## 🎨 Customizing Design:
Dizaynni sozlash:

### Ranglarni o'zgartirish:
CSS fayllarini tahrirlang: `src/styles/`

### Sarlavhani o'zgartirish:
Tahrirlash: `src/components/Header.jsx`
- Kompaniya nomini o'zgartiring
- Navigatsiya havolalarini yangilang
- Tugmalarni o'zgartiring

### Mahsulot ma'lumotlarini yangilash:
Tahrirlash: `src/data/products.js`

## 🛠️ Buyruqlar:

```bash
npm run dev     # Ishlab chiqish serverini ishga tushirish (ishlamoqda)
npm run build   # Ishlab chiqarish uchun yig'ish
npm run preview # Ishlab chiqarish versiyasini ko'rish
```

## 📱 Keyingi qadamlar:

1. **Mahsulot rasmlarini qo'shing** - `public/images/` papkasiga
2. **Mahsulot ma'lumotlarini yangilang** - `src/data/products.js` da
3. **Brendingni sozlang** - Header komponentida
4. **Mobil qurilmada sinab ko'ring** - dizayn to'liq moslashuvchan
5. **Yana mahsulotlar qo'shing** - katalog o'sishi bilan

## 🎯 Keyinchalik qo'shish mumkin:

- Savat funksiyasi
- Foydalanuvchi autentifikatsiyasi
- Qidiruv funksiyasi
- Mahsulot sharhlari
- O'xshash mahsulotlar
- Chegirma kodlari
- Ko'p tillilik

---

**Yordam kerakmi?** To'liq hujjatlar uchun `README.md` ni ko'ring