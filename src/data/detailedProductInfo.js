// Detailed product information including ingredients, nutrition, storage, and manufacturer details
// Indexed by product ID for efficient lookup

export const detailedProductInfo = {
  2: { // Ananas sharbati / Pineapple Juice — same as Juice Drink Ananas (id 31)
    variants: [{ volume: '1 L', packaging: { dimensions: [184, 130], unit: 'mm' } }],
    description: { uz: 'Premium sifatli meva sharbati', ru: 'Премиум фруктовый напиток', en: 'Premium quality juice drink', kz: 'Премиум жемістік сусын', tj: 'Нӯшокии преимум аз мева', kg: 'Премиум сапаттагы жемиш ичимдиги' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentratlangan ananas sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрированный ананасовый сок, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, concentrated pineapple juice, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, концентрацияланған ананас шырыны, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, шарботи ананаси ғилзатшуда, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, концентрацияланган ананас ширеси, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 47, kj: 201 } },
    storage: { temperature: { min: 0, max: 25, unit: '°C' }, humidity: { max: 75, unit: '%' }, conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.', ru: 'Беречь от солнца. Перед употреблением взболтать.', en: 'Keep from sunlight. Shake before use.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.' } },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'PREMIUM QUALITY'], ru: ['Продукт пастеризован', 'PREMIUM QUALITY'], en: ['Product is pasteurized', 'PREMIUM QUALITY'], kz: ['Өнім пастерленген', 'PREMIUM QUALITY'], tj: ['Маҳсулот пастеризатсия шудааст', 'PREMIUM QUALITY'], kg: ['Продукт пастеризацияланган', 'PREMIUM QUALITY'] },
    barcode: null, productCode: null
  },

  7: { // Nok sharbati / Pear Juice
    variants: [
      {
        volume: '1 L',
        packaging: {
          dimensions: [263, 271, 225],
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
      uz: 'Ichimlik suvi, shakar, konsentlangan olma sharbati, nok aromati, limon kislota, kaliy sorbat',
      ru: 'Питьевая вода, сахар, концентрированный яблочный сок, аромат груши, лимонная кислота, сорбат калия',
      en: 'Drinking water, sugar, concentrated apple juice, pear flavor, citric acid, potassium sorbate',
      kz: 'Ішімдік суы, қант, концентрацияланған алма шырыны, алмұрт хош иісі, лимон қышқылы, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, шарботи себи ғилзатшуда, арома нок, кислотаи лимӯ, сорбати калий',
      kg: 'Ичүүчү суу, кант, концентрацияланган алма ширеси, алмурут жыты, лимон кислотасы, калий сорбаты'
    },
    nutritionPer100ml: {
      carbohydrates: {
        amount: '11.7 g',
        variance: '± 0.5 g'
      },
      energy: {
        kcal: 47,
        kj: 196
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
      name: '«BRIGHTLY MEGA WATER» MCHJ',
      fullAddress: {
        uz: 'Toshkent shahri, Uchtepa tumani, 31-daha, Qovunchi ko\'chasi 47 D',
        ru: 'г. Ташкент, Учтепинский район, 31-дача, ул. Ковунчи 47 Д',
        en: 'Tashkent city, Uchtepa district, 31-dacha, Qovunchi street 47 D',
        kz: 'Ташкент қаласы, Учтепа ауданы, 31-дача, Қовунчи көшесі 47 Д',
        tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-дача, кӯчаи Қовунчи 47 Д',
        kg: 'Ташкент шаары, Учтепа району, 31-дача, Ковунчи көчөсү 47 Д'
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
  },

  // ─── Products from mahsulotlar.docx ───────────────────────────────────────

  1: { // Olma sharbati / Apple Juice | 1L
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: 'Meva sharbati 50% dan kam emas', ru: 'Продукт содержит не менее 50% фруктового сока', en: 'Contains no less than 50% fruit juice', kz: 'Жеміс шырыны 50%-дан кем емес', tj: 'Шарботи мева на камтар аз 50%', kg: 'Мева ширеси 50%-дан кем эмес' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, konsentratlangan olma sharbati, olma aromati, aspartam, limon kislota, citrat natriy, natriy benzoat, sorbat kaliy. Mahsulot tarkibida meva sharbati 50% kam emas',
      ru: 'Питьевая вода, концентрированный яблочный сок, яблочный аромат, аспартам, лимонная кислота, цитрат натрия, натрий бензоат, сорбат калия. Продукт содержит не менее 50% фруктового сока',
      en: 'Drinking water, concentrated apple juice, apple flavor, aspartame, citric acid, sodium citrate, sodium benzoate, potassium sorbate. Product contains no less than 50% fruit juice',
      kz: 'Ішімдік суы, концентрацияланған алма шырыны, алма хош иісі, аспартам, лимон қышқылы, натрий цитраты, натрий бензоаты, калий сорбаты',
      tj: 'Оби нӯшокӣ, шарботи себи ғилзатшуда, аромаи себ, аспартам, кислотаи лимӯ, цитрати натрий, бензоати натрий, сорбати калий',
      kg: 'Ичүүчү суу, концентрацияланган алма ширеси, алма жыты, аспартам, лимон кислотасы, натрий цитраты, натрий бензоаты, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '5.8 g', variance: '± 0.5 g' }, energy: { kcal: 24, kj: 100 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Store in fridge and consume within 24 hours after opening.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан дар муддати 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'Meva sharbati 50% dan kam emas'], ru: ['Продукт пастеризован', 'Содержит не менее 50% фруктового сока'], en: ['Product is pasteurized', 'Contains no less than 50% fruit juice'], kz: ['Өнім пастерленген', 'Жеміс шырыны 50%-дан кем емес'], tj: ['Маҳсулот пастеризатсия шудааст', 'Шарботи мева на камтар аз 50%'], kg: ['Продукт пастеризацияланган', 'Мева ширеси 50%-дан кем эмес'] },
    barcode: null, productCode: null
  },

  3: { // Mango sharbati / Mango Juice | 1L
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, mango konsentrati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрат манго, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, mango concentrate, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, манго концентраты, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, концентрати манго, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, манго концентраты, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  4: { // Anor sharbati / Pomegranate Juice | 0.5L
    variants: [{ volume: '1 L', packaging: { dimensions: [162, 158], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentrlangan anor sharbati, konsentratlangan olma sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi',
      ru: 'Питьевая вода, сахар, концентрированный сок граната, концентрированный яблочный сок, пищевая добавка ксантановая камедь',
      en: 'Drinking water, sugar, concentrated pomegranate juice, concentrated apple juice, food additive xanthan gum',
      kz: 'Ішімдік суы, қант, концентрацияланған анар шырыны, концентрацияланған алма шырыны, тамақтық қоспа ксантан камеді',
      tj: 'Оби нӯшокӣ, қанд, шарботи анори ғилзатшуда, шарботи себи ғилзатшуда, иловаи хӯрокворӣ ксантан камедь',
      kg: 'Ичүүчү суу, кант, концентрацияланган анар ширеси, концентрацияланган алма ширеси, тамак-аш кошумчасы ксантан камедь'
    },
    nutritionPer100ml: { carbohydrates: { amount: '13 g', variance: '± 0.5 g' }, energy: { kcal: 52, kj: 217 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Ochilgandan keyin qopqoq yopiq holda muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике закрытым и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Keep sealed in fridge and consume within 24 hours after opening.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін жабылған күйде 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан пӯшида дар сардхона нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин жабык абалда 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'lal_anaar2019@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  5: { // Shaftoli sharbati / Peach Juice | 0.5L & 1L
    variants: [
      { volume: '1 L', packaging: { dimensions: [158], unit: 'mm' } },
      { volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }
    ],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, shaftoli sharbati konsentrati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрат сока персика, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, peach juice concentrate, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, шабдалы шырыны концентраты, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, концентрати шарботи шафтолу, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, шабдалы ширеси концентраты, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12.5 g', variance: '± 0.5 g' }, energy: { kcal: 50, kj: 209 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  29: { // O'rik sharbati / Apricot Juice | 0.5L
    variants: [{ volume: '500 mL', packaging: { dimensions: [158], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, o\'rik sharbati konsentrati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрат абрикосового сока, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, apricot juice concentrate, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, өрік шырыны концентраты, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, концентрати шарботи зардолу, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, өрүк ширеси концентраты, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '11.7 g', variance: '± 0.5 g' }, energy: { kcal: 47, kj: 196 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  30: { // Juice Drink Olma / Apple Juice Drink | 250ml
    variants: [{ volume: '250 mL', packaging: { dimensions: [184, 130], unit: 'mm' } }],
    description: { uz: 'Premium sifatli meva sharbati', ru: 'Премиум фруктовый напиток', en: 'Premium quality juice drink', kz: 'Премиум жемістік сусын', tj: 'Нӯшокии преимум аз мева', kg: 'Премиум сапаттагы жемиш ичимдиги' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentratlangan olma sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрированный яблочный сок, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, concentrated apple juice, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, концентрацияланған алма шырыны, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, шарботи себи ғилзатшуда, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, концентрацияланган алма ширеси, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 47, kj: 201 } },
    storage: { temperature: { min: 0, max: 25, unit: '°C' }, humidity: { max: 75, unit: '%' }, conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.', ru: 'Беречь от солнца. Перед употреблением взболтать.', en: 'Keep from sunlight. Shake before use.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.' } },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'PREMIUM QUALITY'], ru: ['Продукт пастеризован', 'PREMIUM QUALITY'], en: ['Product is pasteurized', 'PREMIUM QUALITY'], kz: ['Өнім пастерленген', 'PREMIUM QUALITY'], tj: ['Маҳсулот пастеризатсия шудааст', 'PREMIUM QUALITY'], kg: ['Продукт пастеризацияланган', 'PREMIUM QUALITY'] },
    barcode: null, productCode: null
  },


  32: { // Juice Drink Mango | 250ml
    variants: [{ volume: '250 mL', packaging: { dimensions: [184, 130], unit: 'mm' } }],
    description: { uz: 'Premium sifatli meva sharbati', ru: 'Премиум фруктовый напиток', en: 'Premium quality juice drink', kz: 'Премиум жемістік сусын', tj: 'Нӯшокии преимум аз мева', kg: 'Премиум сапаттагы жемиш ичимдиги' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentratlangan mango sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрированный сок манго, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, concentrated mango juice, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, концентрацияланған манго шырыны, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, шарботи манго ғилзатшуда, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, концентрацияланган манго ширеси, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 47, kj: 201 } },
    storage: { temperature: { min: 0, max: 25, unit: '°C' }, humidity: { max: 75, unit: '%' }, conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.', ru: 'Беречь от солнца. Перед употреблением взболтать.', en: 'Keep from sunlight. Shake before use.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.' } },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'PREMIUM QUALITY'], ru: ['Продукт пастеризован', 'PREMIUM QUALITY'], en: ['Product is pasteurized', 'PREMIUM QUALITY'], kz: ['Өнім пастерленген', 'PREMIUM QUALITY'], tj: ['Маҳсулот пастеризатсия шудааст', 'PREMIUM QUALITY'], kg: ['Продукт пастеризацияланган', 'PREMIUM QUALITY'] },
    barcode: null, productCode: null
  },

  33: { // Juice Drink Zardolu / Apricot Juice Drink | 250ml
    variants: [{ volume: '250 mL', packaging: { dimensions: [184, 130], unit: 'mm' } }],
    description: { uz: 'Premium sifatli meva sharbati', ru: 'Премиум фруктовый напиток', en: 'Premium quality juice drink', kz: 'Премиум жемістік сусын', tj: 'Нӯшокии преимум аз мева', kg: 'Премиум сапаттагы жемиш ичимдиги' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentratlangan o\'rik sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрированный абрикосовый сок, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, concentrated apricot juice, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, концентрацияланған өрік шырыны, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, шарботи зардолуи ғилзатшуда, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, концентрацияланган өрүк ширеси, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 47, kj: 201 } },
    storage: { temperature: { min: 0, max: 25, unit: '°C' }, humidity: { max: 75, unit: '%' }, conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.', ru: 'Беречь от солнца. Перед употреблением взболтать.', en: 'Keep from sunlight. Shake before use.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.' } },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'PREMIUM QUALITY'], ru: ['Продукт пастеризован', 'PREMIUM QUALITY'], en: ['Product is pasteurized', 'PREMIUM QUALITY'], kz: ['Өнім пастерленген', 'PREMIUM QUALITY'], tj: ['Маҳсулот пастеризатсия шудааст', 'PREMIUM QUALITY'], kg: ['Продукт пастеризацияланган', 'PREMIUM QUALITY'] },
    barcode: null, productCode: null
  },

  34: { // Juice Drink Malta / Orange Juice Drink | 250ml
    variants: [{ volume: '250 mL', packaging: { dimensions: [184, 130], unit: 'mm' } }],
    description: { uz: 'Premium sifatli meva sharbati', ru: 'Премиум фруктовый напиток', en: 'Premium quality juice drink', kz: 'Премиум жемістік сусын', tj: 'Нӯшокии преимум аз мева', kg: 'Премиум сапаттагы жемиш ичимдиги' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentratlangan apelsin sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрированный апельсиновый сок, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, concentrated orange juice, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, концентрацияланған апельсин шырыны, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, шарботи апелсини ғилзатшуда, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, концентрацияланган апельсин ширеси, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 47, kj: 201 } },
    storage: { temperature: { min: 0, max: 25, unit: '°C' }, humidity: { max: 75, unit: '%' }, conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.', ru: 'Беречь от солнца. Перед употреблением взболтать.', en: 'Keep from sunlight. Shake before use.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.' } },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'PREMIUM QUALITY'], ru: ['Продукт пастеризован', 'PREMIUM QUALITY'], en: ['Product is pasteurized', 'PREMIUM QUALITY'], kz: ['Өнім пастерленген', 'PREMIUM QUALITY'], tj: ['Маҳсулот пастеризатсия шудааст', 'PREMIUM QUALITY'], kg: ['Продукт пастеризацияланган', 'PREMIUM QUALITY'] },
    barcode: null, productCode: null
  },

  25: { // Shaftoli Premium / Peach Juice | 250ml
    variants: [{ volume: '250 mL', packaging: { dimensions: [184, 130], unit: 'mm' } }],
    description: { uz: 'Premium sifatli meva sharbati', ru: 'Премиум фруктовый напиток', en: 'Premium quality juice drink', kz: 'Премиум жемістік сусын', tj: 'Нӯшокии преимум аз мева', kg: 'Премиум сапаттагы жемиш ичимдиги' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentratlangan shaftoli sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрированный персиковый сок, пищевая добавка ксантановая камедь, сорбат калия',
      en: 'Drinking water, sugar, concentrated peach juice, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, концентрацияланған шабдалы шырыны, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, шарботи шафтолуи ғилзатшуда, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, концентрацияланган шабдалы ширеси, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 47, kj: 201 } },
    storage: { temperature: { min: 0, max: 25, unit: '°C' }, humidity: { max: 75, unit: '%' }, conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling.', ru: 'Беречь от солнца. Перед употреблением взболтать.', en: 'Keep from sunlight. Shake before use.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле.' } },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'PREMIUM QUALITY'], ru: ['Продукт пастеризован', 'PREMIUM QUALITY'], en: ['Product is pasteurized', 'PREMIUM QUALITY'], kz: ['Өнім пастерленген', 'PREMIUM QUALITY'], tj: ['Маҳсулот пастеризатсия шудааст', 'PREMIUM QUALITY'], kg: ['Продукт пастеризацияланган', 'PREMIUM QUALITY'] },
    barcode: null, productCode: null
  },

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

  8: { // Copied from Mango Juice
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, gilos sharbati konsentrati (35%), qamish shakari, tabiiy gilos ta\'m va aromatizatorlari, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, концентрат вишнёвого сока (35%), тростниковый сахар, натуральный вишнёвый вкус и ароматизаторы, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, cherry juice concentrate (35%), cane sugar, natural cherry flavor and aromatics, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, алша шырынының концентраты (35%), қамыс қанты, табиғи алша дәмі мен хош иісі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати шарботи олуболу (35%), шакари ней, бӯи табиии олуболу ва атриёт, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, алча ширесинин концентраты (35%), камыш канты, табигый алча даамы жана жыттары, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  9: { // Copied from Mango Juice
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, qizil olma sharbati konsentrati (40%), tabiiy olma ta\'m va aromatizatorlari, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, концентрат сока красного яблока (40%), натуральный яблочный вкус и ароматизаторы, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, red apple juice concentrate (40%), natural apple flavor and aromatics, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, қызыл алма шырынының концентраты (40%), табиғи алма дәмі мен хош иісі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати шарботи себи сурх (40%), бӯи табиии себ ва атриёт, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, кызыл алма ширесинин концентраты (40%), табигый алма даамы жана жыттары, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  10: { // Copied from Mango Juice
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, olma sharbati (20%), ananas sharbati (15%), mango pyuresi (10%), shaftoli pyuresi (10%), qamish shakari, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, яблочный сок (20%), ананасовый сок (15%), пюре манго (10%), пюре персика (10%), тростниковый сахар, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, apple juice (20%), pineapple juice (15%), mango puree (10%), peach puree (10%), cane sugar, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, алма шырыны (20%), ананас шырыны (15%), манго пюресі (10%), шабдалы пюресі (10%), қамыс қанты, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, шарбати себ (20%), шарбати ананас (15%), пюреи манго (10%), пюреи шафтолу (10%), шакари ней, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, алма ширеси (20%), ананас ширеси (15%), манго пюреси (10%), шабдалы пюреси (10%), камыш канты, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  11: { // Copied from Mango Juice
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, olma sharbati konsentrati (25%), uzum sharbati konsentrati (25%), tabiiy ta\'mlar, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, концентрат яблочного сока (25%), концентрат виноградного сока (25%), натуральные ароматизаторы, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, apple juice concentrate (25%), grape juice concentrate (25%), natural flavors, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, алма шырынының концентраты (25%), жүзім шырынының концентраты (25%), табиғи хош иістер, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати шарботи себ (25%), концентрати шарботи ангур (25%), бӯҳои табиӣ, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, алма ширесинин концентраты (25%), жүзүм ширесинин концентраты (25%), табигый жыттар, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  12: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, olma sharbati konsentrati (30%), rayhon urug\'i, tabiiy olma ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, концентрат яблочного сока (30%), семена базилика, натуральный яблочный вкус, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, apple juice concentrate (30%), basil seeds, natural apple flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, алма шырынының концентраты (30%), райхан тұқымы, табиғи алма дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати шарботи себ (30%), тухми райҳон, бӯи табиии себ, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, алма ширесинин концентраты (30%), райхан уругу, табигый алма даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  13: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, ananas sharbati konsentrati (35%), rayhon urug\'i, tabiiy ananas ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, концентрат ананасового сока (35%), семена базилика, натуральный ананасовый вкус, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, pineapple juice concentrate (35%), basil seeds, natural pineapple flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, ананас шырынының концентраты (35%), райхан тұқымы, табиғи ананас дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати шарботи ананас (35%), тухми райҳон, бӯи табиии ананас, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, ананас ширесинин концентраты (35%), райхан уругу, табигый ананас даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  14: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, anor sharbati (40%), rayhon urug\'i, tabiiy anor ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, сок граната (40%), семена базилика, натуральный гранатовый вкус, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, pomegranate juice (40%), basil seeds, natural pomegranate flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, анар шырыны (40%), райхан тұқымы, табиғи анар дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, шарбати анор (40%), тухми райҳон, бӯи табиии анор, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, анар ширеси (40%), райхан уругу, табигый анар даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  15: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, shaftoli pyuresi (35%), rayhon urug\'i, qamish shakari, tabiiy shaftoli ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, пюре персика (35%), семена базилика, тростниковый сахар, натуральный персиковый вкус, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, peach puree (35%), basil seeds, cane sugar, natural peach flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, шабдалы пюресі (35%), райхан тұқымы, қамыс қанты, табиғи шабдалы дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, пюреи шафтолу (35%), тухми райҳон, шакари ней, бӯи табиии шафтолу, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, шабдалы пюреси (35%), райхан уругу, камыш канты, табигый шабдалы даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  16: { // Copied from Mango Juice
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Lal anor sharbati (100%), vitamin C (askorbin kislota), tabiiy anor ta\'mi',
      ru: 'Сок красного граната (100%), витамин C (аскорбиновая кислота), натуральный гранатовый вкус',
      en: 'Red pomegranate juice (100%), vitamin C (ascorbic acid), natural pomegranate flavor',
      kz: 'Қызыл анар шырыны (100%), витамин C (аскорбин қышқылы), табиғи анар дәмі',
      tj: 'Шарбати анори сурх (100%), витамин C (кислотаи аскорбин), бӯи табиии анор',
      kg: 'Кызыл анар ширеси (100%), витамин C (аскорбин кислотасы), табигый анар даамы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  17: { // Copied from Mango Juice
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Lal anor sharbati (100%), vitamin C (askorbin kislota), tabiiy anor ekstrakti',
      ru: 'Сок красного граната (100%), витамин C (аскорбиновая кислота), натуральный экстракт граната',
      en: 'Red pomegranate juice (100%), vitamin C (ascorbic acid), natural pomegranate extract',
      kz: 'Қызыл анар шырыны (100%), витамин C (аскорбин қышқылы), табиғи анар экстракты',
      tj: 'Шарбати анори сурх (100%), витамин C (кислотаи аскорбин), экстракти табиии анор',
      kg: 'Кызыл анар ширеси (100%), витамин C (аскорбин кислотасы), табигый анар экстракты'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  18: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Tanlangan lal anor sharbati (100%), vitamin C (askorbin kislota), tabiiy antioksidantlar',
      ru: 'Отборный сок красного граната (100%), витамин C (аскорбиновая кислота), натуральные антиоксиданты',
      en: 'Selected red pomegranate juice (100%), vitamin C (ascorbic acid), natural antioxidants',
      kz: 'Таңдалған қызыл анар шырыны (100%), витамин C (аскорбин қышқылы), табиғи антиоксиданттар',
      tj: 'Шарбати анори сурхи интихобшуда (100%), витамин C (кислотаи аскорбин), антиоксидантҳои табиӣ',
      kg: 'Тандалган кызыл анар ширеси (100%), витамин C (аскорбин кислотасы), табигый антиоксиданттар'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  19: { // Copied from Mango Juice
    variants: [{ volume: '500 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, qizil shaftoli pyuresi (45%), qamish shakari, tabiiy shaftoli ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, пюре красного персика (45%), тростниковый сахар, натуральный персиковый вкус, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, red peach puree (45%), cane sugar, natural peach flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, қызыл шабдалы пюресі (45%), қамыс қанты, табиғи шабдалы дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, пюреи шафтолуи сурх (45%), шакари ней, бӯи табиии шафтолу, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, кызыл шабдалы пюреси (45%), камыш канты, табигый шабдалы даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  21: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, barbekana pyuresi (40%), qamish shakari, tabiiy ta\'mlar, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, пюре барбеканы (40%), тростниковый сахар, натуральные ароматизаторы, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, barbecana puree (40%), cane sugar, natural flavors, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, барбекана пюресі (40%), қамыс қанты, табиғи хош иістер, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, пюреи барбекана (40%), шакари ней, бӯҳои табиӣ, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, барбекана пюреси (40%), камыш канты, табигый жыттар, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  22: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, mandarin sharbati konsentrati (35%), qamish shakari, tabiiy ta\'mlar, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, концентрат мандаринового сока (35%), тростниковый сахар, натуральные ароматизаторы, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, mandarin juice concentrate (35%), cane sugar, natural flavors, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, мандарин шырынының концентраты (35%), қамыс қанты, табиғи хош иістер, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати шарботи мандарин (35%), шакари ней, бӯҳои табиӣ, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, мандарин ширесинин концентраты (35%), камыш канты, табигый жыттар, витамин C (аскорбин кислотасы), лимон кислотасы'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  23: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Premium anor sharbati (100%), vitamin C (askorbin kislota), tabiiy antioksidantlar',
      ru: 'Премиум сок граната (100%), витамин C (аскорбиновая кислота), натуральные антиоксиданты',
      en: 'Premium pomegranate juice (100%), vitamin C (ascorbic acid), natural antioxidants',
      kz: 'Премиум анар шырыны (100%), витамин C (аскорбин қышқылы), табиғи антиоксиданттар',
      tj: 'Шарбати анори преимум (100%), витамин C (кислотаи аскорбин), антиоксидантҳои табиӣ',
      kg: 'Премиум анар ширеси (100%), витамин C (аскорбин кислотасы), табигый антиоксиданттар'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  24: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, premium olma sharbati konsentrati (40%), tabiiy olma ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, премиум концентрат яблочного сока (40%), натуральный яблочный вкус, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, premium apple juice concentrate (40%), natural apple flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, премиум алма шырынының концентраты (40%), табиғи алма дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати преимум шарботи себ (40%), бӯи табиии себ, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, премиум алма ширесинин концентраты (40%), табигый алма даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  26: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, premium mango pyuresi (48%), qamish shakari, tabiiy mango ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, премиум пюре манго (48%), тростниковый сахар, натуральный вкус манго, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, premium mango puree (48%), cane sugar, natural mango flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, премиум манго пюресі (48%), қамыс қанты, табиғи манго дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, пюреи преимум манго (48%), шакари ней, бӯи табиии манго, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, премиум манго пюреси (48%), камыш канты, табигый манго даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  27: { // Copied from Mango Juice
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Filtrlangan suv, premium ananas sharbati konsentrati (42%), tabiiy ananas ta\'mi, vitamin C (askorbin kislota), limon kislota',
      ru: 'Фильтрованная вода, премиум концентрат ананасового сока (42%), натуральный ананасовый вкус, витамин C (аскорбиновая кислота), лимонная кислота',
      en: 'Filtered water, premium pineapple juice concentrate (42%), natural pineapple flavor, vitamin C (ascorbic acid), citric acid',
      kz: 'Сүзілген су, премиум ананас шырынының концентраты (42%), табиғи ананас дәмі, витамин C (аскорбин қышқылы), лимон қышқылы',
      tj: 'Оби тоза, концентрати преимум шарботи ананас (42%), бӯи табиии ананас, витамин C (кислотаи аскорбин), кислотаи лимӯ',
      kg: 'Тазаланган суу, премиум ананас ширесинин концентраты (42%), табигый ананас даамы, витамин C (аскорбин кислотасы), лимон кислотасы'
},
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  28: { // Copied from Mango Juice
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Premium qovun sharbati (92%), filtrlangan suv, limon sharbati, tabiiy qovun ta\'mi, limon kislota',
      ru: 'Премиум сок дыни (92%), фильтрованная вода, лимонный сок, натуральный вкус дыни, лимонная кислота',
      en: 'Premium melon juice (92%), filtered water, lemon juice, natural melon flavor, citric acid',
      kz: 'Премиум қауын шырыны (92%), сүзілген су, лимон шырыны, табиғи қауын дәмі, лимон қышқылы',
      tj: 'Шарбати преимум харбуза (92%), оби тоза, шарбати лимӯ, бӯи табиии харбуза, кислотаи лимӯ',
      kg: 'Премиум коон ширеси (92%), тазаланган суу, лимон ширеси, табигый коон даамы, лимон кислотасы'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Qadoq ochilgandan keyin muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Беречь от солнца. Перед употреблением взболтать. Хранить в холодильнике и употребить в течение 24 часов после вскрытия.', en: 'Keep from sunlight. Shake before use. Refrigerate after opening and consume within 24 hours.', kz: 'Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Аз нури офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан 24 соат истифода баред.', kg: 'Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  }
}

// Helper function to get detailed info for a product
export const getDetailedProductInfo = (productId) => {
  return detailedProductInfo[productId] || null
}

// Helper function to check if detailed info exists
export const hasDetailedInfo = (productId) => {
  return productId in detailedProductInfo
}
