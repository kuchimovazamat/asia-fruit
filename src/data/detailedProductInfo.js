// Detailed product information including ingredients, nutrition, storage, and manufacturer details
// Indexed by product ID for efficient lookup

export const detailedProductInfo = {
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

  2: { // Mango sharbati / Mango Juice | 1L
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, mango sharbati konsentrati, oziq-ovqat qo\'shimchasi ksantan kamedi',
      ru: 'Питьевая вода, сахар, концентрат сока манго, пищевая добавка ксантановая камедь',
      en: 'Drinking water, sugar, mango juice concentrate, food additive xanthan gum',
      kz: 'Ішімдік суы, қант, манго шырыны концентраты, тамақтық қоспа ксантан камеді',
      tj: 'Оби нӯшокӣ, қанд, концентрати шарботи манго, иловаи хӯрокворӣ ксантан камедь',
      kg: 'Ичүүчү суу, кант, манго ширеси концентраты, тамак-аш кошумчасы ксантан камедь'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 201 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda, hona harorati 0°C dan 25°C gacha, havoni nisbiy namligi 75% oshmagan sharoitda saqlansin. To\'g\'ri dan to\'g\'ri tushadigan quyosh nuridan asrang. Iste\'mol qilishdan oldin silkitib aralashtiring. Yaroqlilik muddatida iste\'mol qiling. Qadoqni qopqog\'i ochilgandan keyin muzlatgichda saqlang va 24 soat davomida iste\'mol qiling.', ru: 'Хранить в сухом прохладном месте при температуре от 0°C до 25°C, относительная влажность воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в течение срока годности. После вскрытия хранить в холодильнике и употребить в течение 24 часов.', en: 'Store in a dry and cool place at 0°C to 25°C, relative humidity not exceeding 75%. Keep away from direct sunlight. Shake before use. Consume within the expiry date. After opening, refrigerate and consume within 24 hours.', kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын құрғақ және салқын жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хушк ва хунук, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган кургак жана салкын жерде сактагыла. Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilgan.', ru: 'С даты производства 12 месяцев. Дата производства указана на верхней части упаковки.', en: 'From production date, 12 months. Production date is indicated on the top of the container.', kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыстың жоғарғы бөлігінде көрсетілген.', tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар қисми болоии зарф нишон дода шудааст.', kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиштин жогорку бөлүгүндө көрсөтүлгөн.' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahar, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  3: { // Anor sharbati / Pomegranate Juice | 1L
    variants: [{ volume: '1 L', packaging: { dimensions: [162, 158], unit: 'mm' } }],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentratlangan anor sharbati, konsentratlangan olma sharbati, oziq-ovqat qo\'shimchasi ksantan kamedi',
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
      conditions: { uz: '0°C dan 25°C gacha bo\'lgan haroratda, havoni nisbiy namligi 75% dan ko\'p bo\'lmagan joyda saqlang. To\'g\'ridan-to\'g\'ri quyosh nurlaridan saqlang. Iste\'mol qilishdan oldin yaxshilab silkiting. Yaroqlilik muddati davomida iste\'mol qiling. Qadoq ochilganidan keyin, qopqog\'i yopiq holda muzlatgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Хранить в прохладном и сухом помещении при температуре от 0°C до 25°C, при относительной влажности воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в срок годности. После вскрытия крышки хранить в холодильнике в закрытом виде и употребить в течение 24 часов.', en: 'Store in a cool and dry place at 0°C to 25°C, relative humidity not more than 75%. Keep away from direct sunlight. Shake well before use. Consume within the expiry date. After opening, keep sealed in the refrigerator and consume within 24 hours.', kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын салқын және құрғақ жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында жақсылап шайқаңыз. Ашқаннан кейін жабылған күйде 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хунук ва хушк, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол хуб ҳалзона кунед. Пас аз кушодан пӯшида дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган салкын жана кургак жерде сактагыла. Күн нурунан сактагыла. Ичер алдында жакшылап силкигиле. Ачкандан кийин жабык абалда 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilgan.', ru: 'С даты производства 12 месяцев. Дата производства указана на верхней части упаковки.', en: 'From production date, 12 months. Production date is indicated on the top of the container.', kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыстың жоғарғы бөлігінде көрсетілген.', tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар қисми болоии зарф нишон дода шудааст.', kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиштин жогорку бөлүгүндө көрсөтүлгөн.' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahar, Uchtepa tumani, Qovunchi ko\'chasi 47-uy', ru: 'г. Ташкент, Учтепинский район, ул. Ковунчи 47', en: 'Tashkent city, Uchtepa district, Qovunchi street 47', kz: 'Ташкент қаласы, Учтепа ауданы, Қовунчи көшесі 47', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, кӯчаи Қовунчи 47', kg: 'Ташкент шаары, Учтепа району, Ковунчи көчөсү 47' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterilizatsiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  4: { // Shaftoli sharbati / Peach Juice | 1L & 0.5L
    variants: [
      { volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } },
      { volume: '0.5 L', packaging: { dimensions: [158], unit: 'mm' } }
    ],
    description: { uz: '100% Tabiiy meva', ru: '100% Натуральные фрукты', en: '100% Natural fruits', kz: '100% Табиғи жемістер', tj: '100% Мевaҳои табиӣ', kg: '100% Табигый жемиштер' },
    // 1L label includes sorbat kaliy; 0.5L label (RUS) does not list it
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, shaftoli sharbati konsentrati, oziq-ovqat qo\'shimchasi ksantan kamedi, sorbat kaliy',
      ru: 'Питьевая вода, сахар, концентрат сока персика, пищевая добавка ксантановая камедь',
      en: 'Drinking water, sugar, peach juice concentrate, food additive xanthan gum, potassium sorbate',
      kz: 'Ішімдік суы, қант, шабдалы шырыны концентраты, тамақтық қоспа ксантан камеді, калий сорбаты',
      tj: 'Оби нӯшокӣ, қанд, концентрати шарботи шафтолу, иловаи хӯрокворӣ ксантан камедь, сорбати калий',
      kg: 'Ичүүчү суу, кант, шабдалы ширеси концентраты, тамак-аш кошумчасы ксантан камедь, калий сорбаты'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12.5 g', variance: '± 0.5 g' }, energy: { kcal: 50, kj: 209 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda, hona harorati 0°C dan 25°C gacha, havoni nisbiy namligi 75% oshmagan sharoitda saqlansin. To\'g\'ri dan to\'g\'ri tushadigan quyosh nuridan asrang. Iste\'mol qilishdan oldin silkitib aralashtiring. Yaroqlilik muddatida iste\'mol qiling. Yaroqlilik muddati ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilingan. Qadoqni qopqog\'i ochilgandan keyin muzlatgichda saqlang va 24 soat davomida iste\'mol qiling.', ru: 'Хранить в прохладном и сухом помещении при температуре от 0°C до 25°C, при относительной влажности воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в срок годности. Срок годности продукта 12 месяцев со дня изготовления. Срок изготовления указан в верхней части бутылки. После вскрытия крышки хранить в холодильнике и употреблять в течение 24 часов.', en: 'Store in a cool and dry place at 0°C to 25°C, relative humidity not exceeding 75%. Keep away from direct sunlight. Shake before use. Consume within the expiry date. Shelf life 12 months from production date indicated on the top of the bottle. After opening, refrigerate and consume within 24 hours.', kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын салқын және құрғақ жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хунук ва хушк, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган салкын жана кургак жерде сактагыла. Күн нурунан сактагыла. Ичер алдында силкигиле. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilingan.', ru: 'С даты производства 12 месяцев. Дата изготовления указана на верхней части бутылки.', en: 'From production date, 12 months. Production date is indicated on the top of the bottle.', kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыстың жоғарғы бөлігінде көрсетілген.', tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар қисми болоии зарф нишон дода шудааст.', kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиштин жогорку бөлүгүндө көрсөтүлгөн.' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahar, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-квартал, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', '100% Tabiiy meva'], ru: ['Продукт пастеризован', '100% Натуральные фрукты'], en: ['Product is pasteurized', '100% Natural fruits'], kz: ['Өнім пастерленген', '100% Табиғи жемістер'], tj: ['Маҳсулот пастеризатсия шудааст', '100% Мевaҳои табиӣ'], kg: ['Продукт пастеризацияланган', '100% Табигый жемиштер'] },
    barcode: null, productCode: null
  },

  5: { // Qovun sharbati / Melon Juice
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
        uz: 'Quruq va salqin joyda, xona harorati 0°C dan 25°C, xonani nisbiy namligi 75% dan oshmagan sharoitda saqlansin. To\'g\'ridan-to\'g\'ri tushadigan quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Yaroqlilik muddatida istimol qiling.',
        ru: 'Хранить в прохладном и сухом месте при температуре от 0°C до 25°C, относительная влажность воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в течение срока годности.',
        en: 'Store in a cool and dry place at 0°C to 25°C, relative humidity not exceeding 75%. Keep away from direct sunlight. Shake before drinking. Consume within the expiry date.',
        kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын салқын және құрғақ жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Жарамдылық мерзімінде тұтыныңыз.',
        tj: 'Дар ҷои хунук ва хушк, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Дар мӯҳлати истифода истеъмол намоед.',
        kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган салкын жана кургак жерде сактагыла. Күн нурунан сактагыла. Ичер алдында силкигиле. Жарамдуулук мөөнөтүндө колдонуңуз.'
      }
    },
    shelfLife: {
      months: 12,
      note: {
        uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishda ko\'rsatilgan.',
        ru: 'С даты производства 12 месяцев. Дата производства указана на упаковке.',
        en: 'From production date, 12 months. Production date is indicated on the container.',
        kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыста көрсетілген.',
        tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар зарф нишон дода шудааст.',
        kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиште көрсөтүлгөн.'
      }
    },
    manufacturer: {
      name: '«BRIGHTLY MEGA WATER» MCHJ',
      fullAddress: {
        uz: 'Toshkent shahar, Uchtepa tumani, 31-daha, Qovunchi ko\'chasi 47 D',
        ru: 'г. Ташкент, Учтепинский район, 31-даха, ул. Ковунчи 47 Д',
        en: 'Tashkent city, Uchtepa district, 31-daha, Qovunchi street 47 D',
        kz: 'Ташкент қаласы, Учтепа ауданы, 31-даха, Қовунчи көшесі 47 Д',
        tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-даха, кӯчаи Қовунчи 47 Д',
        kg: 'Ташкент шаары, Учтепа району, 31-даха, Ковунчи көчөсү 47 Д'
      },
      contacts: {
        phone: '+998 88 120 00 75',
        website: 'www.lalanaar.uz',
        email: 'asiafruite@mail.ru'
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

  6: { // Nok sharbati / Pear Juice
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
        uz: 'Quruq va salqin joyda, xona harorati 0°C dan 25°C, xonani nisbiy namligi 75% dan oshmagan sharoitda saqlansin. To\'g\'ridan-to\'g\'ri tushadigan quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Yaroqlilik muddatida istimol qiling.',
        ru: 'Хранить в прохладном и сухом месте при температуре от 0°C до 25°C, относительная влажность воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в течение срока годности.',
        en: 'Store in a cool and dry place at 0°C to 25°C, relative humidity not exceeding 75%. Keep away from direct sunlight. Shake before drinking. Consume within the expiry date.',
        kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын салқын және құрғақ жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Жарамдылық мерзімінде тұтыныңыз.',
        tj: 'Дар ҷои хунук ва хушк, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Дар мӯҳлати истифода истеъмол намоед.',
        kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган салкын жана кургак жерде сактагыла. Күн нурунан сактагыла. Ичер алдында силкигиле. Жарамдуулук мөөнөтүндө колдонуңуз.'
      }
    },
    shelfLife: {
      months: 12,
      note: {
        uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishda ko\'rsatilgan.',
        ru: 'С даты производства 12 месяцев. Дата производства указана на упаковке.',
        en: 'From production date, 12 months. Production date is indicated on the container.',
        kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыста көрсетілген.',
        tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар зарф нишон дода шудааст.',
        kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиште көрсөтүлгөн.'
      }
    },
    manufacturer: {
      name: '«BRIGHTLY MEGA WATER» MCHJ',
      fullAddress: {
        uz: 'Toshkent shahar, Uchtepa tumani, 31-daha, Qovunchi ko\'chasi 47 D',
        ru: 'г. Ташкент, Учтепинский район, 31-даха, ул. Ковунчи 47 Д',
        en: 'Tashkent city, Uchtepa district, 31-daha, Qovunchi street 47 D',
        kz: 'Ташкент қаласы, Учтепа ауданы, 31-даха, Қовунчи көшесі 47 Д',
        tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-даха, кӯчаи Қовунчи 47 Д',
        kg: 'Ташкент шаары, Учтепа району, 31-даха, Ковунчи көчөсү 47 Д'
      },
      contacts: {
        phone: '+998 88 120 00 75',
        website: 'www.lalanaar.uz',
        email: 'asiafruite@mail.ru'
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

  7: { // Qizil olma sharbati / Red Apple Juice | 1L
    variants: [{ volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: 'Meva sharbati 50% dan kam emas', ru: 'Продукт содержит не менее 50% фруктового сока', en: 'Contains no less than 50% fruit juice', kz: 'Жеміс шырыны 50%-дан кем емес', tj: 'Шарботи мева на камтар аз 50%', kg: 'Мева ширеси 50%-дан кем эмес' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, konsentratlangan olma sharbati, olma aromati, aspartam, limon kislota, sitrat natriy, natriy benzoat, sorbat kaliy. Mahsulot tarkibida meva sharbati 50% kam emas.',
      ru: 'Питьевая вода, концентрированный яблочный сок, яблочный ароматизатор, аспартам, лимонная кислота, цитрат натрия, бензоат натрия, сорбат калия. Продукт содержит не менее 50% фруктового сока.',
      en: 'Drinking water, concentrated apple juice, apple flavoring, aspartame, citric acid, sodium citrate, sodium benzoate, potassium sorbate. Product contains no less than 50% fruit juice.',
      kz: 'Ішімдік суы, концентрацияланған алма шырыны, алма хош иісі, аспартам, лимон қышқылы, натрий цитраты, натрий бензоаты, калий сорбаты. Өнімде жеміс шырыны 50%-дан кем емес.',
      tj: 'Оби нӯшокӣ, шарботи себи ғилзатшуда, аромаи себ, аспартам, кислотаи лимӯ, цитрати натрий, бензоати натрий, сорбати калий. Маҳсулот на камтар аз 50% шарботи мева дорад.',
      kg: 'Ичүүчү суу, концентрацияланган алма ширеси, алма жыты, аспартам, лимон кислотасы, натрий цитраты, натрий бензоаты, калий сорбаты. Продуктто мева ширеси 50%-дан кем эмес.'
    },
    nutritionPer100ml: { carbohydrates: { amount: '5.8 g', variance: '± 0.5 g' }, energy: { kcal: 24, kj: 100 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda, hona harorati 0°C dan 25°C gacha, havoni nisbiy namligi 75% oshmagan sharoitda saqlansin. To\'g\'ri dan to\'g\'ri tushadigan quyosh nuridan asrang. Iste\'mol qilishdan oldin silkitib aralashtiring. Yaroqlilik muddatida iste\'mol qiling. Yaroqlilik muddati ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilgan. Qadoqni qopqog\'i ochilgandan keyin muzlatgichda saqlang va 24 soat davomida iste\'mol qiling.', ru: 'Хранить в сухом прохладном месте при температуре от 0°C до 25°C, относительная влажность воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в течение срока годности. Срок годности 12 месяцев с даты производства. Дата производства указана на верхней части упаковки. После вскрытия хранить в холодильнике и употребить в течение 24 часов.', en: 'Store in a dry and cool place at 0°C to 25°C, relative humidity not exceeding 75%. Keep away from direct sunlight. Shake before use. Consume within the expiry date. Shelf life 12 months from production date indicated on the top of the container. After opening, refrigerate and consume within 24 hours.', kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын құрғақ және салқын жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Жарамдылық мерзімінде тұтыныңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хушк ва хунук, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Дар мӯҳлати истифода истеъмол намоед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган кургак жана салкын жерде сактагыла. Күн нурунан сактагыла. Ичер алдында силкигиле. Жарамдуулук мөөнөтүндө колдонуңуз. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilgan.', ru: 'С даты производства 12 месяцев. Дата производства указана на верхней части упаковки.', en: 'From production date, 12 months. Production date is indicated on the top of the container.', kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыстың жоғарғы бөлігінде көрсетілген.', tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар қисми болоии зарф нишон дода шудааст.', kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиштин жогорку бөлүгүндө көрсөтүлгөн.' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahar, Uchtepa tumani, 31-mavze, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-массив, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-zone, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-массив, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-массив, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-кварталы, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'Meva sharbati 50% dan kam emas'], ru: ['Продукт пастеризован', 'Содержит не менее 50% фруктового сока'], en: ['Product is pasteurized', 'Contains no less than 50% fruit juice'], kz: ['Өнім пастерленген', 'Жеміс шырыны 50%-дан кем емес'], tj: ['Маҳсулот пастеризатсия шудааст', 'Шарботи мева на камтар аз 50%'], kg: ['Продукт пастеризацияланган', 'Мева ширеси 50%-дан кем эмес'] },
    barcode: null, productCode: null
  },

  8: { // Rayhonli olma sharbati / Apple Basil Seed Juice Drink | 300mL
    variants: [{ volume: '300 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: 'Olma sharbatli ichimlik (Basil Seed)', ru: 'Сокосодержащий напиток «Яблоко» (Basil Seed)', en: 'Apple Juice Drink (Basil Seed)', kz: 'Алма шырынды сусын (Basil Seed)', tj: 'Нӯшокии шарботи себ (Basil Seed)', kg: 'Алма ширелүү суусундук (Basil Seed)' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentrlangan olma sharbati, olma aromati, karamel rangi, gellan kamedi, konjakovaya kamedi, kaltsiy karbonat, limon kislota, konservant: kaliy sorbat. Mahsulot pasterizasiya qilingan.',
      ru: 'Питьевая вода, сахар, концентрированный яблочный сок, ароматизатор «Яблоко», карамельный колер, геллановая камедь, конжаковая камедь, карбонат кальция, лимонная кислота, консервант: сорбат калия. Продукт пастеризован.',
      en: 'Drinking water, sugar, concentrated apple juice, apple flavoring, caramel color, gellan gum, konjac gum, calcium carbonate, citric acid, preservative: potassium sorbate. Product is pasteurized.',
      kz: 'Ішімдік суы, қант, концентрацияланған алма шырыны, алма хош иісі, карамель бояғышы, желлан камедь, конжак камедь, кальций карбонаты, лимон қышқылы, консервант: калий сорбаты. Өнім пастерленген.',
      tj: 'Оби нӯшокӣ, қанд, шарботи себи ғилзатшуда, аромати себ, рангкунандаи карамел, камеди геллан, камеди конжак, карбонати калсий, кислотаи лимӯ, нигоҳдорнда: сорбати калий. Маҳсулот пастеризатсия шудааст.',
      kg: 'Ичүүчү суу, кант, концентрацияланган алма ширеси, алма жыты, карамель боёгучу, желлан каучуку, конжак каучуку, кальций карбонаты, лимон кислотасы, консервант: калий сорбаты. Продукт пастеризацияланган.'
    },
    nutritionPer100ml: { carbohydrates: { amount: '11.5 g', variance: '± 0.5 g' }, energy: { kcal: 46, kj: 192 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda saqlang. Quyosh to\'g\'ridan-to\'g\'ri ta\'siridan saqlang. Ichishdan oldin silkitib oling. Qadoq ochilgandan keyin sovutgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Хранить в сухом и прохладном месте. Беречь от воздействия прямых солнечных лучей. Перед употреблением взболтать. После вскрытия хранить в холодильнике и употребить в течение 24 часов.', en: 'Store in a dry, cool place. Keep away from direct sunlight. Shake before use. After opening, refrigerate and consume within 24 hours.', kz: 'Құрғақ және салқын жерде сақтаңыз. Тікелей күн сәулесінен қорғаңыз. Ішер алдында шайқаңыз. Ашылғаннан кейін суықта сақтаңыз және 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хушк ва хунук нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Кургак жана салкын жерде сактагыла. Күн нурунан коргогула. Ичер алдында силкигиле. Ачкандан кийин муздаткычта сактагыла жана 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' }, dateLocation: { uz: 'Ishlab chiqarilgan sana qadoqning yuqori qismida ko\'rsatilgan', ru: 'Дата изготовления указана в верхней части упаковки', en: 'Production date is indicated on the top of the package', kz: 'Өндіру күні қаптаманың жоғарғы бөлігінде көрсетілген', tj: 'Санаи истеҳсол дар қисми болоии бастабандӣ нишон дода шудааст', kg: 'Өндүрүлгөн күн таранын үстүнкү бөлүгүндө көрсөтүлгөн' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-kvartal, Qovunchi ko\'chasi 47D', ru: 'г. Ташкент, Учтепинский район, 31 квартал, ул. Ковунчи, 47Д', en: 'Tashkent city, Uchtepa district, 31 block, Qovunchi street 47D', kz: 'Ташкент қаласы, Учтепа ауданы, 31 квартал, Қовунчи көшесі 47Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31 квартал, кӯчаи Қовунчи 47Д', kg: 'Ташкент шаары, Учтепа району, 31 квартал, Ковунчи көчөсү 47Д' }, contacts: { phone: '+998 88 120 00 75', website: 'lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan'], ru: ['Продукт пастеризован'], en: ['Product is pasteurized'], kz: ['Өнім пастерленген'], tj: ['Маҳсулот пастеризатсия шудааст'], kg: ['Продукт пастеризацияланган'] }
  },

  9: { // Rayhonli ananas sharbati / Pineapple Basil Seed Juice Drink | 300mL
    variants: [{ volume: '300 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: 'Ananas sharbatli ichimlik (Basil Seed)', ru: 'Сокосодержащий напиток «Ананас» (Basil Seed)', en: 'Pineapple Juice Drink (Basil Seed)', kz: 'Ананас шырынды сусын (Basil Seed)', tj: 'Нӯшокии шарботи ананас (Basil Seed)', kg: 'Ананас ширелүү суусундук (Basil Seed)' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, ananas pyuresi, ananas aromati, beta-karotin, gellan kamedi, konjakovaya kamedi, kaltsiy karbonat, limon kislota, natriy sitrat, konservant: kaliy sorbat, konservant: natriy benzoat. Mahsulot pasterizasiya qilingan.',
      ru: 'Питьевая вода, сахар, ананасовое пюре, ароматизатор «Ананас», бета-каротин, геллановая камедь, конжаковая камедь, карбонат кальция, лимонная кислота, цитрат натрия, консервант: сорбат калия, консервант: бензоат натрия. Продукт пастеризован.',
      en: 'Drinking water, sugar, pineapple puree, pineapple flavoring, beta-carotene, gellan gum, konjac gum, calcium carbonate, citric acid, sodium citrate, preservative: potassium sorbate, preservative: sodium benzoate. Product is pasteurized.',
      kz: 'Ішімдік суы, қант, ананас пюресі, ананас хош иісі, бета-каротин, желлан камедь, конжак камедь, кальций карбонаты, лимон қышқылы, натрий цитраты, консервант: калий сорбаты, консервант: натрий бензоаты. Өнім пастерленген.',
      tj: 'Оби нӯшокӣ, қанд, пюреи ананас, аромати ананас, бета-каротин, камеди геллан, камеди конжак, карбонати калсий, кислотаи лимӯ, ситрати натрий, нигоҳдорнда: сорбати калий, нигоҳдорнда: бензоати натрий. Маҳсулот пастеризатсия шудааст.',
      kg: 'Ичүүчү суу, кант, ананас пюреси, ананас жыты, бета-каротин, желлан каучуку, конжак каучуку, кальций карбонаты, лимон кислотасы, натрий цитраты, консервант: калий сорбаты, консервант: натрий бензоаты. Продукт пастеризацияланган.'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12 g', variance: '± 0.5 g' }, energy: { kcal: 48, kj: 200 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda saqlang. Quyosh to\'g\'ridan-to\'g\'ri ta\'siridan saqlang. Ichishdan oldin silkitib oling. Qadoq ochilgandan keyin sovutgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Хранить в сухом и прохладном месте. Беречь от воздействия прямых солнечных лучей. Перед употреблением взболтать. После вскрытия хранить в холодильнике и употребить в течение 24 часов.', en: 'Store in a dry, cool place. Keep away from direct sunlight. Shake before use. After opening, refrigerate and consume within 24 hours.', kz: 'Құрғақ және салқын жерде сақтаңыз. Тікелей күн сәулесінен қорғаңыз. Ішер алдында шайқаңыз. Ашылғаннан кейін суықта сақтаңыз және 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хушк ва хунук нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Кургак жана салкын жерде сактагыла. Күн нурунан коргогула. Ичер алдында силкигиле. Ачкандан кийин муздаткычта сактагыла жана 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' }, dateLocation: { uz: 'Ishlab chiqarilgan sana qadoqning yuqori qismida ko\'rsatilgan', ru: 'Дата изготовления указана в верхней части упаковки', en: 'Production date is indicated on the top of the package', kz: 'Өндіру күні қаптаманың жоғарғы бөлігінде көрсетілген', tj: 'Санаи истеҳсол дар қисми болоии бастабандӣ нишон дода шудааст', kg: 'Өндүрүлгөн күн таранын үстүнкү бөлүгүндө көрсөтүлгөн' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-kvartal, Qovunchi ko\'chasi 47D', ru: 'г. Ташкент, Учтепинский район, 31 квартал, ул. Ковунчи, 47Д', en: 'Tashkent city, Uchtepa district, 31 block, Qovunchi street 47D', kz: 'Ташкент қаласы, Учтепа ауданы, 31 квартал, Қовунчи көшесі 47Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31 квартал, кӯчаи Қовунчи 47Д', kg: 'Ташкент шаары, Учтепа району, 31 квартал, Ковунчи көчөсү 47Д' }, contacts: { phone: '+998 88 120 00 75', website: 'lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan'], ru: ['Продукт пастеризован'], en: ['Product is pasteurized'], kz: ['Өнім пастерленген'], tj: ['Маҳсулот пастеризатсия шудааст'], kg: ['Продукт пастеризацияланган'] }
  },

  10: { // Rayhonli anor sharbati / Pomegranate Basil Seed Juice Drink | 300mL
    variants: [{ volume: '300 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: 'Anor sharbatli ichimlik (Basil Seed)', ru: 'Сокосодержащий напиток «Гранат» (Basil Seed)', en: 'Pomegranate Juice Drink (Basil Seed)', kz: 'Анар шырынды сусын (Basil Seed)', tj: 'Нӯшокии шарботи анор (Basil Seed)', kg: 'Анар ширелүү суусундук (Basil Seed)' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, konsentrlangan anor sharbati, rayhon urug\'i, anor aromati, gellan kamedi, konjakovaya kamedi, kaltsiy karbonat, limon kislota, natriy sitrat, kaliy sorbat. Mahsulot pasterizasiya qilingan.',
      ru: 'Питьевая вода, концентрированный гранатовый сок, семена базилика, ароматизатор «Гранат», геллановая камедь, конжаковая камедь, карбонат кальция, лимонная кислота, цитрат натрия, сорбат калия. Продукт пастеризован.',
      en: 'Drinking water, concentrated pomegranate juice, basil seeds, pomegranate flavoring, gellan gum, konjac gum, calcium carbonate, citric acid, sodium citrate, potassium sorbate. Product is pasteurized.',
      kz: 'Ішімдік суы, концентрацияланған анар шырыны, базилик тұқымдары, анар хош иісі, желлан камедь, конжак камедь, кальций карбонаты, лимон қышқылы, натрий цитраты, калий сорбаты. Өнім пастерленген.',
      tj: 'Оби нӯшокӣ, шарботи анори ғилзатшуда, тухми базилик, аромати анор, камеди геллан, камеди конжак, карбонати калсий, кислотаи лимӯ, ситрати натрий, сорбати калий. Маҳсулот пастеризатсия шудааст.',
      kg: 'Ичүүчү суу, концентрацияланган анар ширеси, базилик уруктары, анар жыты, желлан каучуку, конжак каучуку, кальций карбонаты, лимон кислотасы, натрий цитраты, калий сорбаты. Продукт пастеризацияланган.'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12.5 g', variance: '± 0.5 g' }, energy: { kcal: 52, kj: 217 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda saqlang. Quyosh to\'g\'ridan-to\'g\'ri ta\'siridan saqlang. Ichishdan oldin silkitib oling. Qadoq ochilgandan keyin sovutgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Хранить в сухом и прохладном месте. Беречь от воздействия прямых солнечных лучей. Перед употреблением взболтать. После вскрытия хранить в холодильнике и употребить в течение 24 часов.', en: 'Store in a dry, cool place. Keep away from direct sunlight. Shake before use. After opening, refrigerate and consume within 24 hours.', kz: 'Құрғақ және салқын жерде сақтаңыз. Тікелей күн сәулесінен қорғаңыз. Ішер алдында шайқаңыз. Ашылғаннан кейін суықта сақтаңыз және 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хушк ва хунук нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Кургак жана салкын жерде сактагыла. Күн нурунан коргогула. Ичер алдында силкигиле. Ачкандан кийин муздаткычта сактагыла жана 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' }, dateLocation: { uz: 'Ishlab chiqarilgan sana qadoqning yuqori qismida ko\'rsatilgan', ru: 'Дата изготовления указана в верхней части упаковки', en: 'Production date is indicated on the top of the package', kz: 'Өндіру күні қаптаманың жоғарғы бөлігінде көрсетілген', tj: 'Санаи истеҳсол дар қисми болоии бастабандӣ нишон дода шудааст', kg: 'Өндүрүлгөн күн таранын үстүнкү бөлүгүндө көрсөтүлгөн' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-kvartal, Qovunchi ko\'chasi 47D', ru: 'г. Ташкент, Учтепинский район, 31 квартал, ул. Ковунчи, 47Д', en: 'Tashkent city, Uchtepa district, 31 block, Qovunchi street 47D', kz: 'Ташкент қаласы, Учтепа ауданы, 31 квартал, Қовунчи көшесі 47Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31 квартал, кӯчаи Қовунчи 47Д', kg: 'Ташкент шаары, Учтепа району, 31 квартал, Ковунчи көчөсү 47Д' }, contacts: { phone: '+998 88 120 00 75', website: 'lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan'], ru: ['Продукт пастеризован'], en: ['Product is pasteurized'], kz: ['Өнім пастерленген'], tj: ['Маҳсулот пастеризатсия шудааст'], kg: ['Продукт пастеризацияланган'] }
  },

  11: { // Rayhonli shaftoli sharbati / Peach Basil Seed Juice Drink | 300mL
    variants: [{ volume: '300 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: 'Shaftoli sharbatli ichimlik (Basil Seed)', ru: 'Сокосодержащий напиток «Персик» (Basil Seed)', en: 'Peach Juice Drink (Basil Seed)', kz: 'Шабдалы шырынды сусын (Basil Seed)', tj: 'Нӯшокии шарботи шафтолу (Basil Seed)', kg: 'Шабдалы ширелүү суусундук (Basil Seed)' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentrlangan shaftoli sharbati, shaftoli aromati, gellan kamedi, konjakovaya kamedi, kaltsiy karbonat, limon kislota, konservant: kaliy sorbat, konservant: natriy benzoat. Mahsulot pasterizasiya qilingan.',
      ru: 'Питьевая вода, сахар, концентрат сока персика, ароматизатор «Персик», геллановая камедь, конжаковая камедь, карбонат кальция, лимонная кислота, консервант: сорбат калия, консервант: бензоат натрия. Продукт пастеризован.',
      en: 'Drinking water, sugar, concentrated peach juice, peach flavoring, gellan gum, konjac gum, calcium carbonate, citric acid, preservative: potassium sorbate, preservative: sodium benzoate. Product is pasteurized.',
      kz: 'Ішімдік суы, қант, концентрацияланған шабдалы шырыны, шабдалы хош иісі, желлан камедь, конжак камедь, кальций карбонаты, лимон қышқылы, консервант: калий сорбаты, консервант: натрий бензоаты. Өнім пастерленген.',
      tj: 'Оби нӯшокӣ, қанд, консентрати шарботи шафтолу, аромати шафтолу, камеди геллан, камеди конжак, карбонати калсий, кислотаи лимӯ, нигоҳдорнда: сорбати калий, нигоҳдорнда: бензоати натрий. Маҳсулот пастеризатсия шудааст.',
      kg: 'Ичүүчү суу, кант, концентрацияланган шабдалы ширеси, шабдалы жыты, желлан каучуку, конжак каучуку, кальций карбонаты, лимон кислотасы, консервант: калий сорбаты, консервант: натрий бензоаты. Продукт пастеризацияланган.'
    },
    nutritionPer100ml: { carbohydrates: { amount: '12.5 g', variance: '± 0.5 g' }, energy: { kcal: 52, kj: 217 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda saqlang. Quyosh to\'g\'ridan-to\'g\'ri ta\'siridan saqlang. Ichishdan oldin silkitib oling. Qadoq ochilgandan keyin sovutgichda saqlang va 24 soat ichida iste\'mol qiling.', ru: 'Хранить в сухом и прохладном месте. Беречь от воздействия прямых солнечных лучей. Перед употреблением взболтать. После вскрытия хранить в холодильнике и употребить в течение 24 часов.', en: 'Store in a dry, cool place. Keep away from direct sunlight. Shake before use. After opening, refrigerate and consume within 24 hours.', kz: 'Құрғақ және салқын жерде сақтаңыз. Тікелей күн сәулесінен қорғаңыз. Ішер алдында шайқаңыз. Ашылғаннан кейін суықта сақтаңыз және 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хушк ва хунук нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Кургак жана салкын жерде сактагыла. Күн нурунан коргогула. Ичер алдында силкигиле. Ачкандан кийин муздаткычта сактагыла жана 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab', ru: 'С даты производства', en: 'From production date', kz: 'Өндірілген күннен бастап', tj: 'Аз санаи истеҳсол', kg: 'Өндүрүлгөн күндөн баштап' }, dateLocation: { uz: 'Ishlab chiqarilgan sana qadoqning yuqori qismida ko\'rsatilgan', ru: 'Дата изготовления указана в верхней части упаковки', en: 'Production date is indicated on the top of the package', kz: 'Өндіру күні қаптаманың жоғарғы бөлігінде көрсетілген', tj: 'Санаи истеҳсол дар қисми болоии бастабандӣ нишон дода шудааст', kg: 'Өндүрүлгөн күн таранын үс��үнкү бөлүгүндө көрсөтүлгөн' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahri, Uchtepa tumani, 31-kvartal, Qovunchi ko\'chasi 47D', ru: 'г. Ташкент, Учтепинский район, 31 квартал, ул. Ковунчи, 47Д', en: 'Tashkent city, Uchtepa district, 31 block, Qovunchi street 47D', kz: 'Ташкент қаласы, Учтепа ауданы, 31 квартал, Қовунчи көшесі 47Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31 квартал, кӯчаи Қовунчи 47Д', kg: 'Ташкент шаары, Учтепа району, 31 квартал, Ковунчи көчөсү 47Д' }, contacts: { phone: '+998 88 120 00 75', website: 'lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan'], ru: ['Продукт пастеризован'], en: ['Product is pasteurized'], kz: ['Өнім пастерленген'], tj: ['Маҳсулот пастеризатсия шудааст'], kg: ['Продукт пастеризациялан��ан'] }
  },

  12: { // Aloe Vera orginal sharbatli Ichimlik | 0.5L
    variants: [{ volume: '500 mL', packaging: { dimensions: [158, 162, 222, 230], unit: 'mm' } }],
    description: { uz: 'Aloe vera sharbatli original ichimlik', ru: 'Оригинальный напиток с соком алоэ вера', en: 'Original aloe vera juice drink', kz: 'Алоэ вера шырынды түпнұсқа ішімдік', tj: 'Нӯшокии аслии бо шарботи алоэ вера', kg: 'Алоэ вера ширеси менен оригинал ичимдик' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, aloe vera sharbati, aloe vera qelli, aloe vera aromati, limon kislota, sitrat natriy, olma kislotasi, sorbat kaliy, qellan kamedi, konjak kamedi, kalsiy karbonat. Mahsulot pasterizasiya qilingan.',
      ru: 'Питьевая вода, сахар, сок алоэ вера, гель алоэ вера, ароматизатор алоэ вера, лимонная кислота, цитрат натрия, яблочная кислота, сорбат калия, геллановая камедь, конжаковая камедь, карбонат кальция. Продукт пастеризован.',
      en: 'Drinking water, sugar, aloe vera juice, aloe vera gel, aloe vera flavoring, citric acid, sodium citrate, malic acid, potassium sorbate, gellan gum, konjac gum, calcium carbonate. Product is pasteurized.',
      kz: 'Ічімдік суы, қант, алоэ вера шырыны, алоэ вера гелі, алоэ вера хош иісі, лимон қышқылы, натрий цитраты, алма қышқылы, калий сорбаты, геллан камеді, конжак камеді, кальций карбонаты. Өнім пастерленген.',
      tj: 'Оби нӯшокӣ, қанд, шарботи алоэ вера, гели алоэ вера, аромаи алоэ вера, кислотаи лимӯ, цитрати натрий, кислотаи себ, сорбати калий, камеди геллан, камеди конжак, карбонати калсий. Маҳсулот пастеризатсия шудааст.',
      kg: 'Ичүүчү суу, кант, алоэ вера ширеси, алоэ вера гели, алоэ вера жыты, лимон кислотасы, натрий цитраты, алма кислотасы, калий сорбаты, геллан камеди, конжак камеди, кальций карбонаты. Продукт пастеризацияланган.'
    },
    nutritionPer100ml: { carbohydrates: { amount: '9 g', variance: '± 0.5 g' }, energy: { kcal: 36, kj: 150 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: {
        uz: 'Quruq va salqin joyda, xona harorati 0°C dan 25°C, xonani nisbiy namligi 75% dan oshmagan sharoitda saqlansin. To\'g\'ridan-to\'g\'ri tushadigan quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Yaroqlilik muddatida istimol qiling.',
        ru: 'Хранить в прохладном и сухом месте при температуре от 0°C до 25°C, относительная влажность воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в течение срока годности.',
        en: 'Store in a cool and dry place at 0°C to 25°C, relative humidity not exceeding 75%. Keep away from direct sunlight. Shake before drinking. Consume within the expiry date.',
        kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын салқын және құрғақ жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Жарамдылық мерзімінде тұтыныңыз.',
        tj: 'Дар ҷои хунук ва хушк, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Дар мӯҳлати истифода истеъмол намоед.',
        kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган салкын жана кургак жерде сактагыла. Күн нурунан сактагыла. Ичер алдында силкигиле. Жарамдуулук мөөнөтүндө колдонуңуз.'
      }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishda ko\'rsatilgan.', ru: 'С даты производства 12 месяцев. Дата производства указана на упаковке.', en: 'From production date, 12 months. Production date is indicated on the container.', kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыста көрсетілген.', tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар зарф нишон дода шудааст.', kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиште көрсөтүлгөн.' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahar, Uchtepa tumani, 31-daha, Qovunchi ko\'chasi 47 D', ru: 'г. Ташкент, Учтепинский район, 31-даха, ул. Ковунчи 47 Д', en: 'Tashkent city, Uchtepa district, 31-daha, Qovunchi street 47 D', kz: 'Ташкент қаласы, Учтепа ауданы, 31-даха, Қовунчи көшесі 47 Д', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-даха, кӯчаи Қовунчи 47 Д', kg: 'Ташкент шаары, Учтепа району, 31-даха, Ковунчи көчөсү 47 Д' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'Aloe vera sharbatli ichimlik'], ru: ['Продукт пастеризован', 'Напиток с соком алоэ вера'], en: ['Product is pasteurized', 'Aloe vera juice drink'], kz: ['Өнім пастерленген', 'Алоэ вера шырынды ічімдік'], tj: ['Маҳсулот пастеризатсия шудааст', 'Нӯшокӣ бо шарботи алоэ вера'], kg: ['Продукт пастеризацияланган', 'Алоэ вера ширеси менен ичимдик'] },
    barcode: null, productCode: null
  },

  // ─── Products from mahsulotlar.docx ───────────────────────────────────────,

  13: { // Copied from Mango Juice
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

  14: { // Copied from Mango Juice
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

  15: { // Copied from Mango Juice
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

  16: { // Copied from Mango Juice
    variants: [
      { volume: '1 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } },
      { volume: '0.5 L', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }
    ],
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

  18: { // Qovun Sharbati / Melon Juice | 250mL
    variants: [{ volume: '250 mL', packaging: { dimensions: [225, 220, 271], unit: 'mm' } }],
    description: { uz: 'Qovun Sharbati', ru: 'Дынный сок', en: 'Melon Juice', kz: 'Қауын шырыны', tj: 'Шарботи дыня', kg: 'Коон ширеси' },
    detailedIngredients: {
      uz: 'Ichimlik suvi, shakar, konsentlangan qovun sharbati, konsentlangan olma sharbati, qovun aromati, limon kislota, kaliy sorbat, sitrat natriya. Mahsulot pasterizasiya qilingan.',
      ru: 'Питьевая вода, сахар, концентрированный сок дыни, концентрированный яблочный сок, ароматизатор дыни, лимонная кислота, сорбат калия, цитрат натрия. Продукт пастеризован.',
      en: 'Drinking water, sugar, concentrated melon juice, concentrated apple juice, melon flavoring, citric acid, potassium sorbate, sodium citrate. Product is pasteurized.',
      kz: 'Ічімдік суы, қант, концентрацияланған қауын шырыны, концентрацияланған алма шырыны, қауын хош иісі, лимон қышқылы, калий сорбаты, натрий цитраты. Өнім пастерленген.',
      tj: 'Оби нӯшокӣ, қанд, шарботи дыняи ғилзатшуда, шарботи себи ғилзатшуда, аромаи дыня, кислотаи лимӯ, сорбати калий, цитрати натрий. Маҳсулот пастеризатсия шудааст.',
      kg: 'Ичүүчү суу, кант, концентрацияланган коон ширеси, концентрацияланган алма ширеси, коон жыты, лимон кислотасы, калий сорбаты, натрий цитраты. Продукт пастеризацияланган.'
    },
    nutritionPer100ml: { carbohydrates: { amount: '11.5 g', variance: '± 0.5 g' }, energy: { kcal: 46, kj: 192 } },
    storage: {
      temperature: { min: 0, max: 25, unit: '°C' },
      humidity: { max: 75, unit: '%' },
      conditions: { uz: 'Quruq va salqin joyda, hona harorati 0°C dan 25°C, honani nisbiy namligi 75% dan oshmagan sharoitda saqlansin. Tug\'ridan-tug\'ri tushadigan quyosh nuridan asrang. Ichishdan oldin aralashtirib oling. Yaroqlilik muddatida istimol qiling. Mahsulotni yaroqlilik muddati ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilingan. Qadoq qopqog\'i ochilgandan keyin muzlatgichda saqlang va 24 soat davomida istimol qiling.', ru: 'Хранить в сухом прохладном месте при температуре от 0°C до 25°C, относительная влажность воздуха не более 75%. Беречь от прямых солнечных лучей. Перед употреблением взболтать. Употреблять в течение срока годности. Срок годности 12 месяцев с даты производства. Дата производства указана на верхней части упаковки. После вскрытия хранить в холодильнике и употребить в течение 24 часов.', en: 'Store in a dry and cool place at 0°C to 25°C, relative humidity not exceeding 75%. Keep away from direct sunlight. Shake before drinking. Consume within the expiry date. Shelf life 12 months from production date indicated on the top of the container. After opening, refrigerate and consume within 24 hours.', kz: 'Бөлме температурасы 0°C-тан 25°C-қа дейін, ауаның салыстырмалы ылғалдылығы 75%-дан аспайтын құрғақ және салқын жерде сақтаңыз. Күн сәулесінен сақтаңыз. Ішер алдында шайқаңыз. Жарамдылық мерзімінде тұтыныңыз. Ашқаннан кейін 24 сағат ішінде тұтыныңыз.', tj: 'Дар ҷои хушк ва хунук, дар ҳарорати 0°C то 25°C, намии нисбии ҳаво на зиёда аз 75% нигоҳ доред. Аз нури мустақими офтоб дур нигоҳ доред. Пеш аз истеъмол ҳалзона кунед. Дар мӯҳлати истифода истеъмол намоед. Пас аз кушодан дар яхдон нигоҳ доред ва дар муддати 24 соат истифода баред.', kg: 'Бөлмө температурасы 0°C дан 25°C га чейин, абанын салыштырма нымдуулугу 75% дан ашпаган кургак жана салкын жерде сактагыла. Күн нурунан сактагыла. Ичер алдында силкигиле. Жарамдуулук мөөнөтүндө колдонуңуз. Ачкандан кийин 24 саат ичинде ичиңиз.' }
    },
    shelfLife: { months: 12, note: { uz: 'Ishlab chiqarilgan sanadan boshlab 12 oy. Ishlab chiqarilgan sana idishni yuqori qismida ko\'rsatilingan.', ru: 'С даты производства 12 месяцев. Дата производства указана на верхней части упаковки.', en: 'From production date, 12 months. Production date is indicated on the top of the container.', kz: 'Өндірілген күннен бастап 12 ай. Өндірілген күн ыдыстың жоғарғы бөлігінде көрсетілген.', tj: 'Аз санаи истеҳсол 12 моҳ. Санаи истеҳсол дар қисми болоии зарф нишон дода шудааст.', kg: 'Өндүрүлгөн күндөн баштап 12 ай. Өндүрүлгөн күн идиштин жогорку бөлүгүндө көрсөтүлгөн.' } },
    manufacturer: { name: '«BRIGHTLY MEGA WATER» MCHJ', fullAddress: { uz: 'Toshkent shahar, Uchtepa tumani, 31-daha, Qovunchi ko\'chasi 47 uy', ru: 'г. Ташкент, Учтепинский район, 31-даха, ул. Ковунчи 47', en: 'Tashkent city, Uchtepa district, 31-daha, Qovunchi street 47', kz: 'Ташкент қаласы, Учтепа ауданы, 31-даха, Қовунчи көшесі 47', tj: 'Шаҳри Тошканд, ноҳияи Учтепа, 31-даха, кӯчаи Қовунчи 47', kg: 'Ташкент шаары, Учтепа району, 31-даха, Ковунчи көчөсү 47' }, contacts: { phone: '+998 88 120 00 75', website: 'www.lalanaar.uz', email: 'asiafruite@mail.ru' } },
    certifications: { uz: ['Mahsulot pasterizasiya qilingan', 'Qovun Sharbati'], ru: ['Продукт пастеризован', 'Дынный сок'], en: ['Product is pasteurized', 'Melon Juice'], kz: ['Өнім пастерленген', 'Қауын шырыны'], tj: ['Маҳсулот пастеризатсия шудааст', 'Шарботи дыня'], kg: ['Продукт пастеризацияланган', 'Коон ширеси'] },
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
