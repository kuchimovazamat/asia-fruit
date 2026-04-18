# Mahsulot rasmlari papkasi

Mahsulot rasmlaringizni ushbu papkaga quyidagi nom konventsiyasi bilan joylashtiring:

## Kerakli rasmlar:

- `apple-juice.jpg`
- `pineapple-juice.jpg`
- `mango-juice.jpg`
- `orange-juice.jpg`
- `berry-juice.jpg`
- `watermelon-juice.jpg`

## Rasm parametrlari:

- **Format**: JPG, PNG, yoki WebP
- **Tavsiya etilgan o'lcham**: 500px × 600px (vertikal yo'nalish)
- **Maksimal fayl hajmi**: Har bir rasm uchun 2MB
- **Aspect Ratio**: 5:6 eng yaxshi ishlaydi

## Placeholder rasmlar:

Agar maxsus rasmlar qo'shmasangiz, ilova mahsulot nomi bilan avtomatik placeholder rasmlarni ko'rsatadi.

## Rasmlaringizni qanday qo'shish kerak:

1. Mahsulot foto rasmlaringizni ushbu papkaga saqlang (`public/images/`)
2. Yuqoridagi ro'yxatga muvofiq nom qo'ying
3. Ilova avtomatik ravishda katalogda ularni ko'rsatadi

## Misol:

```
public/
└── images/
    ├── apple-juice.jpg
    ├── pineapple-juice.jpg
    ├── mango-juice.jpg
    └── ...
```

Shunchaki shu! Vite avtomatik ravishda bu rasmlarni `/images/` yo'lidan taqdim etadi.
