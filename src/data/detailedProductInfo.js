// Detailed product information including ingredients, nutrition, storage, and manufacturer details
// Indexed by product ID for efficient lookup

export const detailedProductInfo = {
  6: { // Qovun sharbati / Melon Juice
    // Available in multiple sizes
    variants: [
      {
        volume: '1 L',
        packaging: {
          dimensions: [220, 225, 263, 271], // mm
          unit: 'mm'
        }
      },
      {
        volume: '500 mL',
        packaging: {
          dimensions: [158, 162, 222, 230], // mm
          unit: 'mm'
        }
      }
    ],
    description: {
      uz: '100% Tabiiy meva',
      ru: '100% Натуральные фрукты',
      en: '100% Natural fruits',
      kz: '100% Табиғи жемістер',
      tj: '100% Мевaҳои табиӣ',
      kg: '100% Табигый жемиштер'
    },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentlangan olma sharbati, qovun aromati, limon kislota, kaliy sorbat, olma kislotasu',
      ru: 'Питьевая вода, сахар, концентрированный яблочный сок, аромат дыни, лимонная кислота, яблочное кислота, сорбат калия',
      en: 'Drinking water, sugar, concentrated apple juice, melon flavor, citric acid, potassium sorbate, apple acid',
      kz: 'Ішімдік суы, қант, концентрацияланған алма шырыны, қауын хош иісі, лимон қышқылы, калий сорбаты, алма қышқылы',
      tj: 'Оби нӯшокӣ, қанд, шарботи себи ғилзатшуда, арома дыни, кислотаи лимӯ, сорбати калий, кислотаи себ',
      kg: 'Ичүүчү суу, кант, концентрацияланган алма ширеси, коон жыты, лимон кислотасы, калий сорбаты, алма кислотасы'
    },
    nutritionPer100ml: {
      carbohydrates: {
        amount: '11.5 g',
        variance: '± 0.5 g'
      },
      energy: {
        kcal: 46,
        kj: 192
      }
    },
    storage: {
      temperature: {
        min: 0,
        max: 25,
        unit: '°C'
      },
      humidity: {
        max: 75,
        unit: '%'
      },
      conditions: {
        uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.',
        ru: 'Беречь от прямых солнечных лучей. Перед употреблением взболтать.',
        en: 'Keep away from direct sunlight. Shake before drinking.',
        kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.',
        tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.',
        kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.'
      }
    },
    shelfLife: {
      months: 12,
      note: {
        uz: 'Ishlab chiqarilgan sanadan boshlab',
        ru: 'С даты производства',
        en: 'From production date',
        kz: 'Өндірілген күннен бастап',
        tj: 'Аз санаи истеҳсол',
        kg: 'Өндүрүлгөн күндөн баштап'
      }
    },
    manufacturer: {
      name: 'BRIGHTLY MEGA WATER MCHJ',
      fullAddress: {
        uz: 'Toshkent shahri, Uchtepa tumani, 31-daha, Qovunchi ko\'chasi 47 D',
        ru: 'г. Ташкент, Учтепинский район, 31-дача, ул. Ковунчи 47 Д',
        en: 'Tashkent city, Uchtepa district, 31-dacha, Qovunchi street 47 D'
      },
      contacts: {
        phone: '+998 88 120 00 75',
        website: 'www.lalanaar.uz',
        email: 'lal_anaar2019@mail.ru'
      }
    },
    certifications: {
      uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'],
      ru: ['Продукт пастеризован', '100% Натуральные фрукты'],
      en: ['Product is pasteurized', '100% Natural fruits'],
      kz: ['Өнім пастерленген', '100% Табиғи жемістер'],
      tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'],
      kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер']
    },
    barcode: null,
    productCode: null
  },

  20: { // Aloe Vera (updated with provided product information)
    variants: [
      {
        volume: '500 mL (0.5 litr)',
        packaging: {
          dimensions: [158, 162, 222, 230], // mm
          unit: 'mm'
        }
      }
    ],
    description: {
      uz: '100% Tabiiy meva',
      ru: '100% Натуральные фрукты',
      en: '100% Natural fruits',
      kz: '100% Табиғи жемістер',
      tj: '100% Мевaҳои табиӣ',
      kg: '100% Табигый жемиштер'
    },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentlangan olma sharbati, qovun aromati, limon kislota, kaliy sorbat, olma kislotasu',
      ru: 'Питьевая вода, сахар, концентрированный яблочный сок, аромат дыни, лимонная кислота, яблочное кислота, сорбат калия',
      en: 'Drinking water, sugar, concentrated apple juice, melon flavor, citric acid, potassium sorbate, malic acid',
      kz: 'Ішімдік суы, қант, концентрацияланған алма шырыны, қауын хош иісі, лимон қышқылы, калий сорбаты, алма қышқылы',
      tj: 'Оби нӯшокӣ, қанд, шарботи себи ғилзатшуда, арома дыни, кислотаи лимӯ, сорбати калий, кислотаи себ',
      kg: 'Ичүүчү суу, кант, концентрацияланган алма ширеси, коон жыты, лимон кислотасы, калий сорбаты, алма кислотасы'
    },
    nutritionPer100ml: {
      carbohydrates: {
        amount: '11.5 g',
        variance: '± 0.5 g'
      },
      energy: {
        kcal: 46,
        kj: 192
      }
    },
    storage: {
      temperature: {
        min: 0,
        max: 25,
        unit: '°C'
      },
      humidity: {
        max: 75,
        unit: '%'
      },
      conditions: {
        uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.',
        ru: 'Беречь от прямых солнечных лучей. Перед употреблением взболтать.',
        en: 'Keep away from direct sunlight. Shake before drinking.',
        kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.',
        tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.',
        kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.'
      }
    },
    shelfLife: {
      months: 12,
      note: {
        uz: 'Ishlab chiqarilgan sanadan boshlab',
        ru: 'С даты производства',
        en: 'From production date',
        kz: 'Өндірілген күннен бастап',
        tj: 'Аз санаи истеҳсол',
        kg: 'Өндүрүлгөн күндөн баштап'
      }
    },
    manufacturer: {
      name: '"BRIGHTLY MEGA WATER" MCHJ',
      fullAddress: {
        uz: 'Toshkent shahri, Uchtepa tumani, 31-daha, Qovunchi ko\'chasi 47 D',
        ru: 'г. Ташкент, Учтепинский район, 31-дача, ул. Ковунчи 47 Д',
        en: 'Tashkent city, Uchtepa district, 31-dacha, Qovunchi street 47 D'
      },
      contacts: {
        phone: '+998 88 120 00 75',
        website: 'www.lalanaar.uz',
        email: 'lal_anaar2019@mail.ru'
      }
    },
    certifications: {
      uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'],
      ru: ['Продукт пастеризован', '100% Натуральные фрукты'],
      en: ['Product is pasteurized', '100% Natural fruits'],
      kz: ['Өнім пастерленген', '100% Табиғи жемістер'],
      tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'],
      kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер']
    },
    barcode: null,
    productCode: null
  }

  // Template for adding more products:
  // productId: {
  //   volume: 'size with unit',
  //   description: { uz, ru, en, kz, tj, kg },
  //   detailedIngredients: { uz, ru, en, kz, tj, kg },
  //   nutritionPer100ml: {
  //     carbohydrates: { amount, variance },
  //     energy: { kcal, kj },
  //     // Add protein, fat, sugar, etc. as needed
  //   },
  //   storage: {
  //     temperature: { min, max, unit },
  //     humidity: { max, unit },
  //     conditions: { uz, ru, en, kz, tj, kg }
  //   },
  //   shelfLife: {
  //     months: number,
  //     note: { uz, ru, en, kz, tj, kg }
  //   },
  //   manufacturer: {
  //     name: 'string',
  //     fullAddress: { uz, ru, en },
  //     contacts: { phone, website, email }
  //   },
  //   packaging: {
  //     dimensions: [numbers],
  //     unit: 'mm'
  //   },
  //   certifications: { uz, ru, en, kz, tj, kg },
  //   barcode: 'string or null',
  //   productCode: 'string or null'
  // }
}

// Helper function to get detailed info for a product
export const getDetailedProductInfo = (productId) => {
  return detailedProductInfo[productId] || null
}

// Helper function to check if detailed info exists
export const hasDetailedInfo = (productId) => {
  return productId in detailedProductInfo
}
