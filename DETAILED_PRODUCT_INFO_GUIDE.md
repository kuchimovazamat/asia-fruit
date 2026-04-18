# Detailed Product Information Guide

## Overview
This system allows you to add comprehensive product details beyond the basic catalog information.

## Data Structure

The detailed product information is stored in `/src/data/detailedProductInfo.js` and is indexed by product ID.

### Complete Data Model

```javascript
{
  productId: {
    // Basic Info
    volume: 'size with unit (e.g., "1 L", "500 ml")',
    
    // Multi-language Description
    description: {
      uz: 'Uzbek description',
      ru: 'Russian description',
      en: 'English description',
      kz: 'Kazakh description',
      tj: 'Tajik description',
      kg: 'Kyrgyz description'
    },
    
    // Detailed Ingredients (Full text in each language)
    detailedIngredients: {
      uz: 'Complete ingredients list in Uzbek',
      ru: 'Complete ingredients list in Russian',
      en: 'Complete ingredients list in English',
      kz: 'Complete ingredients list in Kazakh',
      tj: 'Complete ingredients list in Tajik',
      kg: 'Complete ingredients list in Kyrgyz'
    },
    
    // Nutrition per 100ml
    nutritionPer100ml: {
      carbohydrates: {
        amount: 'value with unit (e.g., "11.5 g")',
        variance: 'optional variance (e.g., "± 0.5 g")'
      },
      energy: {
        kcal: number,  // e.g., 46
        kj: number     // e.g., 192
      }
      // Can add more: protein, fat, sugar, etc.
    },
    
    // Storage Conditions
    storage: {
      temperature: {
        min: number,    // e.g., 0
        max: number,    // e.g., 25
        unit: '°C'
      },
      humidity: {
        max: number,    // e.g., 75
        unit: '%'
      },
      conditions: {
        uz: 'Storage instructions in Uzbek',
        ru: 'Storage instructions in Russian',
        en: 'Storage instructions in English',
        kz: 'Storage instructions in Kazakh',
        tj: 'Storage instructions in Tajik',
        kg: 'Storage instructions in Kyrgyz'
      }
    },
    
    // Shelf Life
    shelfLife: {
      months: number,  // e.g., 12
      note: {
        uz: 'Note in Uzbek',
        ru: 'Note in Russian',
        en: 'Note in English',
        kz: 'Note in Kazakh',
        tj: 'Note in Tajik',
        kg: 'Note in Kyrgyz'
      }
    },
    
    // Manufacturer Information
    manufacturer: {
      name: 'Company Name',
      fullAddress: {
        uz: 'Full address in Uzbek',
        ru: 'Full address in Russian',
        en: 'Full address in English'
      },
      contacts: {
        phone: '+998 XX XXX XX XX',
        website: 'www.example.com',
        email: 'info@example.com'
      }
    },
    
    // Packaging
    packaging: {
      dimensions: [220, 225, 263, 271],  // array of numbers in mm
      unit: 'mm'
    },
    
    // Certifications
    certifications: {
      uz: ['Certificate 1 in Uzbek', 'Certificate 2 in Uzbek'],
      ru: ['Certificate 1 in Russian', 'Certificate 2 in Russian'],
      en: ['Certificate 1 in English', 'Certificate 2 in English'],
      kz: ['Certificate 1 in Kazakh', 'Certificate 2 in Kazakh'],
      tj: ['Certificate 1 in Tajik', 'Certificate 2 in Tajik'],
      kg: ['Certificate 1 in Kyrgyz', 'Certificate 2 in Kyrgyz']
    },
    
    // Optional Fields
    barcode: 'barcode string or null',
    productCode: 'product code or null'
  }
}
```

## How to Add New Product Details

### Step 1: Find the Product ID
First, check `/src/data/products.js` to find the product ID you want to add details for.

### Step 2: Add to detailedProductInfo.js
Open `/src/data/detailedProductInfo.js` and add a new entry:

```javascript
export const detailedProductInfo = {
  6: { // Existing product
    // ... existing data
  },
  
  // Add your new product here
  7: {
    volume: '1.5 L',
    description: {
      uz: 'Tabiiy meva sharbati',
      ru: 'Натуральный фруктовый сок',
      en: 'Natural fruit juice'
      // ... add other languages
    },
    // ... add other fields following the structure above
  }
}
```

### Step 3: Translate Content
Make sure to provide translations for all 6 supported languages:
- `uz` - Uzbek
- `ru` - Russian
- `en` - English
- `kz` - Kazakh
- `tj` - Tajik
- `kg` - Kyrgyz

### Step 4: Test
Visit the product detail page to see your changes. The detailed information will automatically appear if it exists for that product.

## Current Example: Product ID 6 (Qovun Sharbati / Melon Juice)

See the complete implementation in `detailedProductInfo.js` for a reference.

## Display Logic

The detailed information is only shown if it exists for a product. If no detailed information is available, only the basic product information from `products.js` will be displayed.

## Helper Functions

```javascript
// Get detailed info for a product
const info = getDetailedProductInfo(productId)

// Check if detailed info exists
const exists = hasDetailedInfo(productId)
```

## UI Translation Keys

All UI labels are translated in `/src/locales/[language].js`:
- `volume` - Volume/Size
- `detailedIngredients` - Detailed Ingredients
- `nutritionPer100ml` - Nutrition per 100ml
- `carbohydrates` - Carbohydrates
- `energyValue` - Energy Value
- `storageConditions` - Storage Conditions
- `temperature` - Temperature
- `humidity` - Humidity
- `shelfLife` - Shelf Life
- `manufacturer` - Manufacturer
- `address` - Address
- `phone` - Phone
- `website` - Website
- `email` - Email
- `packaging` - Packaging
- `dimensions` - Dimensions
- `certifications` - Certifications

## Notes

- All fields are optional - you can add as much or as little detail as you have available
- The system is designed to gracefully handle missing data
- Always maintain consistency in translations across all languages
- Keep ingredient lists comprehensive but concise
- Ensure contact information is accurate and up-to-date
