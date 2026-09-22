// Dữ liệu sản phẩm chính hãng trích xuất trực tiếp từ https://bplusfurniture.com.vn/api/products
// Nguồn: B+ Furniture Official CMS API (Payload CMS)
// Tự động thu thập: 2026-09-13T02:20:11.918Z

export interface BplusProductItem {
  id: string;
  bplusId: number;
  sku: string;
  name: string;
  slug: string;
  brand: string;
  category: "seating" | "lighting" | "table" | "storage" | "decor";
  categoryLabel: string;
  dimensions: string;
  shortDescription: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
  highlights: Array<{
    title: string;
    description: string;
    imageUrl?: string | null;
  }>;
  materials: string[];
  techniques: string[];
  year: number;
  originCity: string;
  websiteUrl: string;
}

export const BPLUS_OFFICIAL_PRODUCTS: BplusProductItem[] = [
  {
    "id": "bplus-441",
    "bplusId": 441,
    "sku": "SAMY-B-VWV0",
    "name": "SAMY B",
    "slug": "samy-b",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W760 x D830 x H770 mm",
    "shortDescription": "The Samy  Chair stands out with its striking geometry and sharp-edged design language. Every line and angle is purposefully crafted to express strength and i...",
    "description": "The Samy  Chair stands out with its striking geometry and sharp-edged design language. Every line and angle is purposefully crafted to express strength and individuality, creating a sculptural presence that commands attention. The firm, structured upholstery contrasts beautifully with the bold wooden frame, giving the chair a modern architectural appeal.\nDynamic yet refined, Samy A is a celebration of form — perfect for spaces that embrace creativity, confidence, and contemporary style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMY B thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMY B thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Generously cushioned upholstery with a soft surface and balanced support offers lasting comfort while enhancing the clean and minimalist aesthetic.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMYB 2.jpg"
      },
      {
        "title": "Armrest",
        "description": "Softly upholstered armrests provide enhanced comfort and a refined finishing touch.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMYB 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/samy-b"
  },
  {
    "id": "bplus-440",
    "bplusId": 440,
    "sku": "SHELF-06-X6P7",
    "name": "SHELF 06",
    "slug": "shelf-06",
    "brand": "B+ Furniture",
    "category": "storage",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SHELF 06 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SHELF 06 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF06.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF06.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/shelf-06"
  },
  {
    "id": "bplus-439",
    "bplusId": 439,
    "sku": "NU100-UY4X",
    "name": "NU100",
    "slug": "nu100",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "NU100 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "NU100 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NU100.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NU100.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nu100"
  },
  {
    "id": "bplus-438",
    "bplusId": 438,
    "sku": "TIO-3-SEATER-UEGV",
    "name": "TIO 3-SEATER",
    "slug": "tio-3-seater",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "TIO 3-SEATER là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "TIO 3-SEATER là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TIO 3SEATS.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TIO 3SEATS.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/tio-3-seater"
  },
  {
    "id": "bplus-437",
    "bplusId": 437,
    "sku": "CH008",
    "name": "CLADIO",
    "slug": "cladio",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W550 x D567 x H780 mm",
    "shortDescription": "CLADIO is a contemporary dining chair that pairs soft upholstery with the clean elegance of a slender metal frame. Designed for everyday comfort, its refined...",
    "description": "CLADIO is a contemporary dining chair that pairs soft upholstery with the clean elegance of a slender metal frame. Designed for everyday comfort, its refined silhouette brings warmth, durability, and effortless sophistication to both residential and hospitality interiors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLADIO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLADIO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "The seamless transition between the metal legs and the upholstered backrest creates a refined silhouette, balancing visual lightness with structural strength.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLADIO 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cladio"
  },
  {
    "id": "bplus-436",
    "bplusId": 436,
    "sku": "CH033",
    "name": "BASILEUS",
    "slug": "basileus",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W550 x D570 x H860 mm",
    "shortDescription": "BASILEUS nổi bật với phom dáng thanh lịch, nơi phần đệm bọc mềm mại hòa quyện cùng kết cấu chân kim loại gọn gàng. Đường nét uyển chuyển và tỷ lệ cân đối tạo...",
    "description": "BASILEUS nổi bật với phom dáng thanh lịch, nơi phần đệm bọc mềm mại hòa quyện cùng kết cấu chân kim loại gọn gàng. Đường nét uyển chuyển và tỷ lệ cân đối tạo nên một chiếc ghế ăn vừa gần gũi, vừa tinh tế, phù hợp với nhiều không gian nội thất hiện đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BASILEUS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BASILEUS thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BASILEUS 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/basileus"
  },
  {
    "id": "bplus-433",
    "bplusId": 433,
    "sku": "BOCA-CA7R",
    "name": "BOCA",
    "slug": "boca",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Modular Sofa",
    "dimensions": "W6375 x D3000 x H720 mm",
    "shortDescription": "A modular sofa system defined by generous proportions, soft upholstery, and adaptable configurations. Designed to foster connection and comfort, BOCA effortl...",
    "description": "A modular sofa system defined by generous proportions, soft upholstery, and adaptable configurations. Designed to foster connection and comfort, BOCA effortlessly transforms to suit both intimate lounges and collaborative environments.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BOCA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BOCA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with a soft upholstered finish provide exceptional comfort while elevating the chair’s refined and luxurious appearance. Precisely tailored stitching emphasizes the chair’s structured geometry while adding a sophisticated sense of depth and visual balance.",
        "imageUrl": null
      },
      {
        "title": "The Side Table",
        "description": "The mini table is not merely a functional element, but also adds a dynamic and distinctive accent to the chair. Its presence enhances usability while introducing a touch of character that elevates the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BOCA 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/boca"
  },
  {
    "id": "bplus-432",
    "bplusId": 432,
    "sku": "SORA-BED-G33C",
    "name": "SORA BED",
    "slug": "sora-bed",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SORA BED là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SORA BED là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SORA",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SORA"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sora-bed"
  },
  {
    "id": "bplus-431",
    "bplusId": 431,
    "sku": "CLADIO-DINING-CHAIR-JHBC",
    "name": "CLADIO DINING CHAIR",
    "slug": "cladio-dining-chair",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "CLADIO DINING CHAIR là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "CLADIO DINING CHAIR là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLADIO",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLADIO"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cladio-dining-chair"
  },
  {
    "id": "bplus-430",
    "bplusId": 430,
    "sku": "LAX-CH-N-G-PNDH",
    "name": "LAX CHÂN GỖ",
    "slug": "lax-chn-g",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "LAX CHÂN GỖ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "LAX CHÂN GỖ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LAX CHÂN GỖ.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LAX CHÂN GỖ.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lax-chn-g"
  },
  {
    "id": "bplus-429",
    "bplusId": 429,
    "sku": "GOGO-3V9T",
    "name": "GOGO",
    "slug": "gogo",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "GOGO là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "GOGO là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GOGO.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GOGO.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/gogo"
  },
  {
    "id": "bplus-428",
    "bplusId": 428,
    "sku": "BANTRON-1-6PI1",
    "name": "BANTRON 1",
    "slug": "bantron-1",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "BANTRON 1 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "BANTRON 1 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BANTRON1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BANTRON1.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bantron-1"
  },
  {
    "id": "bplus-427",
    "bplusId": 427,
    "sku": "BANHOP2-8ZMO",
    "name": "BANHOP2",
    "slug": "banhop2",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "BANHOP2 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "BANHOP2 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BANHOP2.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BANHOP2.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/banhop2"
  },
  {
    "id": "bplus-426",
    "bplusId": 426,
    "sku": "BANHOP-N6M5",
    "name": "BANHOP",
    "slug": "banhop",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "BANHOP là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "BANHOP là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BANHOP1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BANHOP1.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/banhop"
  },
  {
    "id": "bplus-425",
    "bplusId": 425,
    "sku": "SHELF-02-O5QE",
    "name": "SHELF 02",
    "slug": "shelf-02",
    "brand": "B+ Furniture",
    "category": "storage",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SHELF 02 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SHELF 02 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF02.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF02.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/shelf-02"
  },
  {
    "id": "bplus-424",
    "bplusId": 424,
    "sku": "SHELF-01-MC9C",
    "name": "SHELF 01",
    "slug": "shelf-01",
    "brand": "B+ Furniture",
    "category": "storage",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SHELF 01 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SHELF 01 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF01.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF01.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/shelf-01"
  },
  {
    "id": "bplus-423",
    "bplusId": 423,
    "sku": "SHELF-05-KNRF",
    "name": "SHELF 05",
    "slug": "shelf-05",
    "brand": "B+ Furniture",
    "category": "storage",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SHELF 05 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SHELF 05 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF05.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF05.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/shelf-05"
  },
  {
    "id": "bplus-422",
    "bplusId": 422,
    "sku": "SHELF-03-P2YA",
    "name": "SHELF 03",
    "slug": "shelf-03",
    "brand": "B+ Furniture",
    "category": "storage",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SHELF 03 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SHELF 03 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF03.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF03.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/shelf-03"
  },
  {
    "id": "bplus-421",
    "bplusId": 421,
    "sku": "SHELF-04-LA91",
    "name": "SHELF 04",
    "slug": "shelf-04",
    "brand": "B+ Furniture",
    "category": "storage",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SHELF 04 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SHELF 04 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF04.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHELF04.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/shelf-04"
  },
  {
    "id": "bplus-420",
    "bplusId": 420,
    "sku": "KENDALL-LOUNGE-CHAIRKEN-OUER",
    "name": "KENDALL LOUNGE CHAIRKEN",
    "slug": "kendall-lounge-chairken",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "KENDALL LOUNGE CHAIRKEN là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "KENDALL LOUNGE CHAIRKEN là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KENDALL.webp",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KENDALL.webp"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/kendall-lounge-chairken"
  },
  {
    "id": "bplus-419",
    "bplusId": 419,
    "sku": "THOMAS-2-XXRQ",
    "name": "THOMAS 2",
    "slug": "thomas-2-",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "THOMAS 2  là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "THOMAS 2  là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/THOMAS2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/THOMAS2"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/thomas-2-"
  },
  {
    "id": "bplus-418",
    "bplusId": 418,
    "sku": "MOTI-1-7UR0",
    "name": "MOTI 1",
    "slug": "moti-1",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MOTI 1 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "MOTI 1 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOTI 1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOTI 1"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/moti-1"
  },
  {
    "id": "bplus-417",
    "bplusId": 417,
    "sku": "LINEAR-05-A4PV",
    "name": "LINEAR 05",
    "slug": "linear-05",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "LINEAR 05 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "LINEAR 05 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LINEAR05",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LINEAR05"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/linear-05"
  },
  {
    "id": "bplus-416",
    "bplusId": 416,
    "sku": "ECLIPSE-COFFEE-TABLE-XBMY",
    "name": "ECLIPSE COFFEE TABLE",
    "slug": "eclipse-coffee-table",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "ECLIPSE COFFEE TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "ECLIPSE COFFEE TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ECLIPSE",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ECLIPSE"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/eclipse-coffee-table"
  },
  {
    "id": "bplus-415",
    "bplusId": 415,
    "sku": "R-COFFEE-TABLE-UQRT",
    "name": "R COFFEE TABLE",
    "slug": "r-coffee-table",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "R COFFEE TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "R COFFEE TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/R",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/R"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/r-coffee-table"
  },
  {
    "id": "bplus-414",
    "bplusId": 414,
    "sku": "LOU-DINING-TABLE-IYXL",
    "name": "LOU DINING TABLE",
    "slug": "lou-dining-table",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "LOU DINING TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "LOU DINING TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LOU DINING TABLE",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LOU DINING TABLE"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lou-dining-table"
  },
  {
    "id": "bplus-413",
    "bplusId": 413,
    "sku": "MOTI-COFFEE-TABLE-KABL",
    "name": "MOTI COFFEE TABLE",
    "slug": "moti-coffee-table",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MOTI COFFEE TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "MOTI COFFEE TABLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOTI COFFEE TABLE",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOTI COFFEE TABLE"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/moti-coffee-table"
  },
  {
    "id": "bplus-412",
    "bplusId": 412,
    "sku": "SINGLE-BED-OIT9",
    "name": "SINGLE BED",
    "slug": "single-bed",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SINGLE BED là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SINGLE BED là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SINGLEBED-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SINGLEBED-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/single-bed"
  },
  {
    "id": "bplus-411",
    "bplusId": 411,
    "sku": "NALA-QBNV",
    "name": "NALA",
    "slug": "nala",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "NALA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "NALA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NALA-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NALA-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nala"
  },
  {
    "id": "bplus-410",
    "bplusId": 410,
    "sku": "NHAT-LE-ML0D",
    "name": "NHAT LE",
    "slug": "nhat-le",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "NHAT LE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "NHAT LE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NHẬT LỆ-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NHẬT LỆ-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nhat-le"
  },
  {
    "id": "bplus-409",
    "bplusId": 409,
    "sku": "CAPOLE-LLCX",
    "name": "CAPOLE",
    "slug": "capole",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "CAPOLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "CAPOLE là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CAPOLE-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CAPOLE-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/capole"
  },
  {
    "id": "bplus-408",
    "bplusId": 408,
    "sku": "M-KH-CHAIR-16ME",
    "name": "MỸ KHÊ",
    "slug": "my-khe-chair",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MỸ KHÊ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "MỸ KHÊ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MỸ KHÊ-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MỸ KHÊ-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/my-khe-chair"
  },
  {
    "id": "bplus-407",
    "bplusId": 407,
    "sku": "M-KH-TABLE-ZU5J",
    "name": "MỸ KHÊ",
    "slug": "my-khe-table",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MỸ KHÊ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "MỸ KHÊ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MỸ KHÊ TABLE-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MỸ KHÊ TABLE-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/my-khe-table"
  },
  {
    "id": "bplus-406",
    "bplusId": 406,
    "sku": "LAWRENCE-2-9ZUL",
    "name": "Lawrence 2",
    "slug": "lawrence-2",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Lawrence 2 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "Lawrence 2 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Lawrence 2-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Lawrence 2-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lawrence-2"
  },
  {
    "id": "bplus-405",
    "bplusId": 405,
    "sku": "BENZ-U6EK",
    "name": "BENZ",
    "slug": "benz",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "BENZ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "BENZ là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BENZ-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BENZ-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/benz"
  },
  {
    "id": "bplus-404",
    "bplusId": 404,
    "sku": "MINO-T-1AQD",
    "name": "MINO",
    "slug": "mino-table",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MINO là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "MINO là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MINO-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MINO-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mino-table"
  },
  {
    "id": "bplus-402",
    "bplusId": 402,
    "sku": "PO075-X2SB",
    "name": "PO075",
    "slug": "po075",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "PO075 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "PO075 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PO075-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PO075-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/po075"
  },
  {
    "id": "bplus-401",
    "bplusId": 401,
    "sku": "PO081-WDAA",
    "name": "PO081",
    "slug": "po081",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "PO081 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "PO081 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PO081-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PO081-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/po081"
  },
  {
    "id": "bplus-400",
    "bplusId": 400,
    "sku": "PO080-T7RE",
    "name": "PO080",
    "slug": "po080",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "PO080 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "PO080 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PO080-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PO080-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/po080"
  },
  {
    "id": "bplus-399",
    "bplusId": 399,
    "sku": "SF114-AQWU",
    "name": "SF114",
    "slug": "sf114",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SF114 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "SF114 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SF114-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SF114-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sf114"
  },
  {
    "id": "bplus-398",
    "bplusId": 398,
    "sku": "NO-1-B-MEN9",
    "name": "NO 1-B",
    "slug": "no-1-b",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "NO 1-B là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "NO 1-B là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NO 1-B-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NO 1-B-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/no-1-b"
  },
  {
    "id": "bplus-397",
    "bplusId": 397,
    "sku": "NH-B-NH-8W33",
    "name": "NHỊ BÌNH",
    "slug": "nh-bnh",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "NHỊ BÌNH là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "NHỊ BÌNH là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NHỊ BÌNH-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NHỊ BÌNH-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nh-bnh"
  },
  {
    "id": "bplus-396",
    "bplusId": 396,
    "sku": "DISPLAY-V57W",
    "name": "DISPLAY",
    "slug": "display",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "DISPLAY là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "DISPLAY là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DISPLAY-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DISPLAY-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/display"
  },
  {
    "id": "bplus-395",
    "bplusId": 395,
    "sku": "PILLA-E9EP",
    "name": "PILLA",
    "slug": "pilla",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "PILLA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "PILLA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PILLA-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PILLA-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pilla"
  },
  {
    "id": "bplus-394",
    "bplusId": 394,
    "sku": "MARINA-A3NF",
    "name": "MARINA",
    "slug": "marina",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MARINA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "MARINA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARINA-thumbnail.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARINA-thumbnail.png"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/marina"
  },
  {
    "id": "bplus-393",
    "bplusId": 393,
    "sku": "BN020-UHAR",
    "name": "BN020",
    "slug": "bn020",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "BN020 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "BN020 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BN020-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BN020-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bn020"
  },
  {
    "id": "bplus-392",
    "bplusId": 392,
    "sku": "DANNY-AX4D",
    "name": "DANNY",
    "slug": "danny",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "DANNY là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "DANNY là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DANNY-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DANNY-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/danny"
  },
  {
    "id": "bplus-391",
    "bplusId": 391,
    "sku": "MUSHROOM-A8ZH",
    "name": "MUSHROOM",
    "slug": "mushroom",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MUSHROOM là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "MUSHROOM là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MUSHROOM-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MUSHROOM-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mushroom"
  },
  {
    "id": "bplus-390",
    "bplusId": 390,
    "sku": "RUGGG-H5GP",
    "name": "RUGGG",
    "slug": "ruggg",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Product draft ",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "RUGGG là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "RUGGG là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr_ruggg_thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr_ruggg_thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ruggg"
  },
  {
    "id": "bplus-389",
    "bplusId": 389,
    "sku": "EOLA-ZTX4",
    "name": "EOLA",
    "slug": "eola",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Product draft ",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "EOLA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "EOLA là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr_eola_thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr_eola_thumb1"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/eola"
  },
  {
    "id": "bplus-388",
    "bplusId": 388,
    "sku": "CABINET-2-ZE2Z",
    "name": "CABINET 2",
    "slug": "cabinet-2",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "CABINET 2 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "CABINET 2 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CABINET 1 THUMP.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CABINET 1 THUMP.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cabinet-2"
  },
  {
    "id": "bplus-387",
    "bplusId": 387,
    "sku": "CABINET-1-Y6KB",
    "name": "CABINET 1",
    "slug": "cabinet-1",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "CABINET 1 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "CABINET 1 là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CABINET 1 THUMP.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CABINET 1 THUMP.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cabinet-1"
  },
  {
    "id": "bplus-386",
    "bplusId": 386,
    "sku": "KITCHENCABINET-7YPR",
    "name": "Kitchencabinet",
    "slug": "kitchencabinet",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Nội thất",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Kitchencabinet là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "Kitchencabinet là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Color_E01.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Color_E01.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/kitchencabinet"
  },
  {
    "id": "bplus-385",
    "bplusId": 385,
    "sku": "SF104",
    "name": "SOLACE 3 SEATS SOFA",
    "slug": "solace-3-seater",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2340 x D880 x H750 mm",
    "shortDescription": "SOLACE Sofa delivers a sense of calm true to its name. The design balances clean form with soft comfort, featuring smooth, continuous lines that create a lig...",
    "description": "SOLACE Sofa delivers a sense of calm true to its name. The design balances clean form with soft comfort, featuring smooth, continuous lines that create a light yet grounded presence. Seat and back cushions are optimized for long-lasting comfort, while the material surface preserves natural texture and depth. SOLACE adapts effortlessly to various interiors, from modern to minimalist settings.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE 3SEATS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE 3SEATS thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Body",
        "description": "The seat cushions are carefully calibrated in thickness and resilience, offering a supportive yet comfortable feel for both daily use and extended lounging. The backrest angle is thoughtfully designed to support a natural sitting posture, helping reduce fatigue over time.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE - 3S-2.jpg"
      },
      {
        "title": "Surface",
        "description": "The material surface is refined to preserve its natural texture, adding visual depth and a more authentic tactile experience. Finishing details emphasize continuity across surfaces, reducing visual fragmentation and reinforcing a clean, cohesive look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE - 3S-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/solace-3-seater"
  },
  {
    "id": "bplus-384",
    "bplusId": 384,
    "sku": "TIO-YEIS",
    "name": "TIO",
    "slug": "tio",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2630 x D1550 x H855 mm",
    "shortDescription": "TIO Corner Sofa is designed to optimize space with a flexible corner configuration, creating a seamless and spacious living area. Its balanced form and soft ...",
    "description": "TIO Corner Sofa is designed to optimize space with a flexible corner configuration, creating a seamless and spacious living area. Its balanced form and soft lines offer a light visual presence while maintaining a sense of stability.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TIO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TIO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Soft upholstery, refined stitching, and slender metal legs create a minimalist corner with an elegant and comfortable presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TIO 4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/tio"
  },
  {
    "id": "bplus-383",
    "bplusId": 383,
    "sku": "SF103",
    "name": "SOLACE 2 SEATS",
    "slug": "solace-2-seater",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W1970 x D980 x H730 mm",
    "shortDescription": "SOLACE Sofa delivers a sense of calm true to its name. The design balances clean form with soft comfort, featuring smooth, continuous lines that create a lig...",
    "description": "SOLACE Sofa delivers a sense of calm true to its name. The design balances clean form with soft comfort, featuring smooth, continuous lines that create a light yet grounded presence. Seat and back cushions are optimized for long-lasting comfort, while the material surface preserves natural texture and depth. SOLACE adapts effortlessly to various interiors, from modern to minimalist settings.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE 2SEATS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE 2SEATS thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Body",
        "description": "The seat cushions are carefully calibrated in thickness and resilience, offering a supportive yet comfortable feel for both daily use and extended lounging. The backrest angle is thoughtfully designed to support a natural sitting posture, helping reduce fatigue over time.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE - 2S-2.jpg"
      },
      {
        "title": "Surface",
        "description": "The material surface is refined to preserve its natural texture, adding visual depth and a more authentic tactile experience. Finishing details emphasize continuity across surfaces, reducing visual fragmentation and reinforcing a clean, cohesive look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE - 2S-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/solace-2-seater"
  },
  {
    "id": "bplus-382",
    "bplusId": 382,
    "sku": "ANPHU-YB02",
    "name": "ANPHU",
    "slug": "anphu",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "ANPHU là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "ANPHU là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANPHU.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANPHU.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/anphu"
  },
  {
    "id": "bplus-381",
    "bplusId": 381,
    "sku": "LC021",
    "name": "THOMAS V1",
    "slug": "thomas",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W820 x D1000 x H970 mm",
    "shortDescription": "Designed with refined proportions and elegant lines, Thomas embodies modern sophistication without excess. The carefully crafted wooden frame pairs seamlessl...",
    "description": "Designed with refined proportions and elegant lines, Thomas embodies modern sophistication without excess. The carefully crafted wooden frame pairs seamlessly with generously cushioned seating, offering both visual lightness and exceptional comfort.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/THOMAS-thumb.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/THOMAS-thumb.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/thomas"
  },
  {
    "id": "bplus-380",
    "bplusId": 380,
    "sku": "LINEAR-981N",
    "name": "LINEAR",
    "slug": "linear",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LINEAR.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LINEAR.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/linear"
  },
  {
    "id": "bplus-379",
    "bplusId": 379,
    "sku": "CT143",
    "name": "KARINA COFFEE TABLE",
    "slug": "karina-coffeetable",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W1255 x D765 x H355 mm",
    "shortDescription": "KARINA Coffee Table completes the space with a refined touch, extending the collection’s signature soft geometry. Its clean surface and balanced structure cr...",
    "description": "KARINA Coffee Table completes the space with a refined touch, extending the collection’s signature soft geometry. Its clean surface and balanced structure create a sense of lightness with stability. Thoughtfully minimal, it brings both elegance and warmth to everyday use. More than a surface, KARINA Coffee Table becomes a subtle centerpiece where moments naturally come together.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA COFFEETABLE ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA COFFEETABLE ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-coffeetable"
  },
  {
    "id": "bplus-378",
    "bplusId": 378,
    "sku": "SF110",
    "name": "KARINA 2 SEATS B SOFA",
    "slug": "karina-2-seater-table-side",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W1880 x D800 x H800 mm",
    "shortDescription": "KARINA embodies comfort and connection, featuring a two-seater design with a central table that invites intimate conversations. Its rounded cushions and supp...",
    "description": "KARINA embodies comfort and connection, featuring a two-seater design with a central table that invites intimate conversations. Its rounded cushions and supportive headrests create a fully relaxing experience. Balancing soft forms with a clean structure, KARINA stands out while blending effortlessly into any space. More than a seat, it’s a place where moments are shared.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 2SEAT TABLE BÊN ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 2SEAT TABLE BÊN ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-2-seater-table-side"
  },
  {
    "id": "bplus-376",
    "bplusId": 376,
    "sku": "SF111",
    "name": "KARINA 3 SEATS B SOFA",
    "slug": "karina-3-seater-table",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2530 x D800 x H800 mm",
    "shortDescription": "KARINA embodies comfort and connection, featuring a three-seater design with a central table that invites intimate conversations. Its rounded cushions and su...",
    "description": "KARINA embodies comfort and connection, featuring a three-seater design with a central table that invites intimate conversations. Its rounded cushions and supportive headrests create a fully relaxing experience. Balancing soft forms with a clean structure, KARINA stands out while blending effortlessly into any space. More than a seat, it’s a place where moments are shared.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 3SEAT TABLE ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 3SEAT TABLE ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-3-seater-table"
  },
  {
    "id": "bplus-375",
    "bplusId": 375,
    "sku": "HS204",
    "name": "KARINA 2 SEATS HIGHBACK SOFA",
    "slug": "karina-2-seater-highback",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1650 x D800 x H1200 mm • 20 kg",
    "shortDescription": "KARINA Highback 2-seater elevates comfort with its extended backrest that fully supports the body, offering a sense of privacy and complete relaxation. Desig...",
    "description": "KARINA Highback 2-seater elevates comfort with its extended backrest that fully supports the body, offering a sense of privacy and complete relaxation. Designed to cradle the neck and head, it allows you to unwind effortlessly. Plush cushioning and soft curves create both comfort and visual balance. With its refined, elegant silhouette, KARINA Highback is more than a chair, it’s a sophisticated retreat for rest and ease.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA HIGHBACK 2SEAT ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA HIGHBACK 2SEAT ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-2-seater-highback"
  },
  {
    "id": "bplus-374",
    "bplusId": 374,
    "sku": "HL002",
    "name": "KARINA 1 SEAT HIGHBACK LOUNGE CHAIR",
    "slug": "karina-1-seater-highback",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W880 x D800 x H1200 mm",
    "shortDescription": "KARINA Highback Lounge Chair elevates comfort with its extended backrest that fully supports the body, offering a sense of privacy and complete relaxation. D...",
    "description": "KARINA Highback Lounge Chair elevates comfort with its extended backrest that fully supports the body, offering a sense of privacy and complete relaxation. Designed to cradle the neck and head, it allows you to unwind effortlessly. Plush cushioning and soft curves create both comfort and visual balance. With its refined, elegant silhouette, KARINA Highback is more than a chair, it’s a sophisticated retreat for rest and ease.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA HIGHBACK 1SEAT ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA HIGHBACK 1SEAT ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-1-seater-highback"
  },
  {
    "id": "bplus-373",
    "bplusId": 373,
    "sku": "SF108",
    "name": "KARINA 3 SEATS A SOFA",
    "slug": "karina-3-seater",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2090 x D800 x H800 mm",
    "shortDescription": "KARINA offers a warm and relaxing experience with its balanced three-seater design, where every curve is shaped for comfort. Plush cushions, a supportive bac...",
    "description": "KARINA offers a warm and relaxing experience with its balanced three-seater design, where every curve is shaped for comfort. Plush cushions, a supportive backrest, and soft headrests create a complete sense of ease. With its neutral tone and clean silhouette, KARINA blends effortlessly into various interiors. More than a sofa, it’s a place to unwind and feel at home every day.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 3SEAT ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 3SEAT ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-3-seater"
  },
  {
    "id": "bplus-372",
    "bplusId": 372,
    "sku": "LC154",
    "name": "KARINA LOUNGE CHAIR",
    "slug": "karina-loungchair",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W770 x D800 x H810 mm",
    "shortDescription": "KARINA Lounge Chair embodies complete relaxation, with every curve shaped to naturally support the body. Plush cushioning, a soft backrest, and a gentle head...",
    "description": "KARINA Lounge Chair embodies complete relaxation, with every curve shaped to naturally support the body. Plush cushioning, a soft backrest, and a gentle headrest create an embracing comfort that invites you to unwind. Its clean silhouette and rounded details balance comfort with refined aesthetics. More than a chair, KARINA is a personal retreat, a place to slow down and recharge.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA LOUNGECHAIR ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA LOUNGECHAIR ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-loungchair"
  },
  {
    "id": "bplus-371",
    "bplusId": 371,
    "sku": "SF107",
    "name": "KARINA 2 SEATS A SOFA",
    "slug": "karina-2-seater",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W1440 x D800 x H800 mm",
    "shortDescription": "KARINA offers a warm and relaxing experience with its balanced two-seater design, where every curve is shaped for comfort. Plush cushions, a supportive backr...",
    "description": "KARINA offers a warm and relaxing experience with its balanced two-seater design, where every curve is shaped for comfort. Plush cushions, a supportive backrest, and soft headrests create a complete sense of ease. With its neutral tone and clean silhouette, KARINA blends effortlessly into various interiors. More than a sofa, it’s a place to unwind and feel at home every day.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 2SEAT ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 2SEAT ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-2-seater"
  },
  {
    "id": "bplus-370",
    "bplusId": 370,
    "sku": "SF109",
    "name": "KARINA 2 SEATS C SOFA",
    "slug": "karina-2-seater-table",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W1930 x D800 x H800 mm",
    "shortDescription": "KARINA embodies comfort and connection, featuring a two-seater design with a central table that invites intimate conversations. Its rounded cushions and supp...",
    "description": "KARINA embodies comfort and connection, featuring a two-seater design with a central table that invites intimate conversations. Its rounded cushions and supportive headrests create a fully relaxing experience. Balancing soft forms with a clean structure, KARINA stands out while blending effortlessly into any space. More than a seat, it’s a place where moments are shared.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 2SEAT TABLE ICON.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARINA 2SEAT TABLE ICON.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karina-2-seater-table"
  },
  {
    "id": "bplus-369",
    "bplusId": 369,
    "sku": "MIRA-GLW6",
    "name": "MIRA",
    "slug": "mira",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee table",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "MIRA blends minimalism with refined elegance, where every detail is carefully distilled into a balanced whole. Its clean tabletop and sturdy structure offer ...",
    "description": "MIRA blends minimalism with refined elegance, where every detail is carefully distilled into a balanced whole. Its clean tabletop and sturdy structure offer both stability and lightness. Uncomplicated yet distinctive, it enhances the surrounding space with quiet sophistication. More than a table, MIRA becomes a foundation for work, connection, and everyday living.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MIRA-5.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MIRA-5.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mira"
  },
  {
    "id": "bplus-368",
    "bplusId": 368,
    "sku": "HENA-R423",
    "name": "HENA",
    "slug": "hena",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W580 x D560 x H875 mm",
    "shortDescription": "HENA brings together soft upholstered comfort and the refined simplicity of a metal frame. Designed to support everyday dining and social moments, its clean ...",
    "description": "HENA brings together soft upholstered comfort and the refined simplicity of a metal frame. Designed to support everyday dining and social moments, its clean silhouette blends effortlessly into contemporary interiors, offering a balance of durability, comfort, and understated elegance.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HENA-1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HENA-1.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with balanced proportions provide exceptional comfort while reflecting the refined and luxurious essence of Indochine design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HENA-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hena"
  },
  {
    "id": "bplus-366",
    "bplusId": 366,
    "sku": "SF050",
    "name": "STREAMLINE",
    "slug": "streamline",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2065 x D820 x H710 mm",
    "shortDescription": "STREAMLINE is shaped by continuous curves, where every element flows as one seamless motion. Its rounded form, soft armrests, and warm brown leather create a...",
    "description": "STREAMLINE is shaped by continuous curves, where every element flows as one seamless motion. Its rounded form, soft armrests, and warm brown leather create a sense of strength and refinement. Free of excess edges, it embodies pure fluidity and comfort. STREAMLINE doesn’t demand attention, it earns it through balance, cohesion, and timeless design.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STREAMLINE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STREAMLINE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Refined Leather Finish",
        "description": "The armrest features a softly rounded form, upholstered in brown leather with a natural grain texture, delivering a warm and premium feel. Clean stitching enhances the structured and seamless look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLACE-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/streamline"
  },
  {
    "id": "bplus-365",
    "bplusId": 365,
    "sku": "LC113",
    "name": "XOYA",
    "slug": "xoya",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W780 x D750 x H700 mm",
    "shortDescription": "XOYA is shaped by clean lines and a quiet sense of balance. Its compact yet soft form offers natural comfort, like a gentle pause in a fast-paced rhythm. Uph...",
    "description": "XOYA is shaped by clean lines and a quiet sense of balance. Its compact yet soft form offers natural comfort, like a gentle pause in a fast-paced rhythm. Upholstered in a tactile fabric with a sturdy structure, it blends emotion with function. XOYA doesn’t seek the spotlight, but fits effortlessly, refined, adaptable, and thoughtfully designed.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/XOYA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/XOYA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Seamlessly curved armrest and backrest with soft velvet upholstery, offering a comfortable and refined look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/XOYA 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/xoya"
  },
  {
    "id": "bplus-364",
    "bplusId": 364,
    "sku": "LC059",
    "name": "LOFT",
    "slug": "loft",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W600 x D650 x H820 mm",
    "shortDescription": "LOFT embraces a contemporary spirit through its bold, rounded volume and soft curves, offering both stability and warmth. A high backrest, plush seat, and lo...",
    "description": "LOFT embraces a contemporary spirit through its bold, rounded volume and soft curves, offering both stability and warmth. A high backrest, plush seat, and loose cushion provide layered comfort, like a private retreat within an open space. Its deep grey tone and sculpted form create a quiet yet refined presence. More than a chair, LOFT is a place to pause and settle into a slower rhythm.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LOFT thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LOFT thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Back Cushion Detail",
        "description": "Gently curved upholstered backrest with a thick, cushioned profile, designed to provide enhanced support and comfort.\nThe refined fabric finish and clean edges contribute to a soft yet structured, modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LOFT-9.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/loft"
  },
  {
    "id": "bplus-363",
    "bplusId": 363,
    "sku": "CH043",
    "name": "ELEANOR",
    "slug": "eleanor",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W550 x D580 x H850 mm",
    "shortDescription": "ELEANOR embodies timeless elegance, with every detail carefully refined to express subtle sophistication. Its balanced form, soft backrest, and gentle uphols...",
    "description": "ELEANOR embodies timeless elegance, with every detail carefully refined to express subtle sophistication. Its balanced form, soft backrest, and gentle upholstery offer a calm and comfortable seating experience. Understated yet distinctive, ELEANOR enhances any space with grace and harmony. More than a chair, it reflects a lifestyle of simplicity and refined taste.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ELEANOR thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ELEANOR thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest Detail",
        "description": "Curved upholstered backrest designed to provide gentle support and a comfortable seating experience.\nThe clean, seamless form enhances a modern and refined aesthe",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ELEANOR 4.jpg"
      },
      {
        "title": "Legs",
        "description": "Powder-coated metal legs feature a slender profile and sturdy construction, bringing a sense of modern elegance and durability to the piece.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ELEANOR 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/eleanor"
  },
  {
    "id": "bplus-362",
    "bplusId": 362,
    "sku": "CH047",
    "name": "CURVE",
    "slug": "curve",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W550 x D553 x H762 mm",
    "shortDescription": "CURVE is defined by fluid, sculpted lines where design flows as a continuous gesture. Its gently embracing backrest and plush seat create effortless comfort ...",
    "description": "CURVE is defined by fluid, sculpted lines where design flows as a continuous gesture. Its gently embracing backrest and plush seat create effortless comfort and ease. Free from rigid edges, it celebrates softness and balance in every detail. CURVE brings a subtle yet refined presence, elevating interiors with both comfort and visual harmony.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CURVE-9.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CURVE-9.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with a soft upholstered finish provide exceptional comfort while elevating the chair’s refined and luxurious appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CURVE-7.jpg"
      },
      {
        "title": "Backrest Detail",
        "description": "Curved backrest with integrated armrest, fully upholstered in textured fabric to provide a soft and supportive seating experience.\nThe seamless form enhances ergonomics while maintaining a clean, modern aesthetic.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CURVE-6.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/curve"
  },
  {
    "id": "bplus-361",
    "bplusId": 361,
    "sku": "SF054",
    "name": "VELORA",
    "slug": "velora",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W1870 x D750 x H730 mm",
    "shortDescription": "VELORA radiates warmth like the last light of day, with its soft terracotta tone and gently rounded form. Embracing armrests, plush seating, and loose cushio...",
    "description": "VELORA radiates warmth like the last light of day, with its soft terracotta tone and gently rounded form. Embracing armrests, plush seating, and loose cushions create an inviting, cozy retreat. Balancing comfort and aesthetics, VELORA adapts effortlessly to various interiors. More than a sofa, it holds moments of rest and quiet living.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VELORA 2SEATS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VELORA 2SEATS thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Clean and balanced stitching enhances the pouf’s refined silhouette while reinforcing its minimalist and elegant visual character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VELORA 2SEATS 2.jpg"
      },
      {
        "title": "Backrest Detail",
        "description": "The backrest is finely crafted, bringing warmth and natural elegance to the design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VELORA 2SEATS 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/velora"
  },
  {
    "id": "bplus-360",
    "bplusId": 360,
    "sku": "CH068",
    "name": "LAX",
    "slug": "lax",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W470 x D550 x H850 mm",
    "shortDescription": "LAX embodies modern minimalism, where every detail is refined to achieve balance. Its clean silhouette and gently curved backrest provide natural support and...",
    "description": "LAX embodies modern minimalism, where every detail is refined to achieve balance. Its clean silhouette and gently curved backrest provide natural support and comfort. Neutral grey upholstery paired with slim metal legs creates a light, versatile presence. LAX doesn’t seek attention, it quietly elevates everyday seating experiences.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LAX thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LAX thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LAX 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lax"
  },
  {
    "id": "bplus-359",
    "bplusId": 359,
    "sku": "LC108",
    "name": "MALIBU",
    "slug": "malibu",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W680 x D700 x H800 mm",
    "shortDescription": "MALIBU captures the calm spirit of coastal living, featuring a soft, sculpted form that gently embraces the body. Its plush cushioning and deep blue upholste...",
    "description": "MALIBU captures the calm spirit of coastal living, featuring a soft, sculpted form that gently embraces the body. Its plush cushioning and deep blue upholstery create a sense of comfort and quiet sophistication. Subtle button details add a refined visual accent. More than just a chair, MALIBU is a designed pause — a place to slow down and unwind.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MALIBU (2).jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MALIBU (2).jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MALIBU-4.jpg"
      },
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with balanced proportions provide exceptional comfort while reflecting the refined and luxurious essence of Indochine design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MALIBU-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/malibu"
  },
  {
    "id": "bplus-358",
    "bplusId": 358,
    "sku": "PEVESTEEL-K-Q17C",
    "name": "PEVESTEEL-K",
    "slug": "pevesteel-k",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "PEVESTEEL-K là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "PEVESTEEL-K là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pevesteel-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pevesteel-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pevesteel-k"
  },
  {
    "id": "bplus-356",
    "bplusId": 356,
    "sku": "CT121",
    "name": "ROHAN 800",
    "slug": "rohan-800",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W800 x D800 x H510 mm",
    "shortDescription": "Add a modern, minimalist touch to your favorite corner with this sleek coffee table. Designed with a clean, circular top and a sturdy conical base, it’s the ...",
    "description": "Add a modern, minimalist touch to your favorite corner with this sleek coffee table. Designed with a clean, circular top and a sturdy conical base, it’s the perfect spot for your morning coffee.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rohan800-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rohan800-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/rohan-800"
  },
  {
    "id": "bplus-355",
    "bplusId": 355,
    "sku": "CT141",
    "name": "ROHAN 600",
    "slug": "rohan-600",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H510 mm",
    "shortDescription": "Add a modern, minimalist touch to your favorite corner with this sleek coffee table. Designed with a clean, circular top and a sturdy conical base, it’s the ...",
    "description": "Add a modern, minimalist touch to your favorite corner with this sleek coffee table. Designed with a clean, circular top and a sturdy conical base, it’s the perfect spot for your morning coffee",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rohan600-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rohan600-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/rohan-600"
  },
  {
    "id": "bplus-354",
    "bplusId": 354,
    "sku": "HS-856-URG7",
    "name": "HS - 856",
    "slug": "hs-856",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Experience a perfect blend of contemporary style and ergonomic comfort with this two-tone mid-back executive office chair.",
    "description": "Experience a perfect blend of contemporary style and ergonomic comfort with this two-tone mid-back executive office chair.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs856-thumb2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs856-thumb2"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hs-856"
  },
  {
    "id": "bplus-353",
    "bplusId": 353,
    "sku": "HS-876-OKNB",
    "name": "HS - 876",
    "slug": "hs-876",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Upholstered in premium leather, it features a sleek, ergonomic, sculpted silhouette designed for superior full-back support.",
    "description": "Upholstered in premium leather, it features a sleek, ergonomic, sculpted silhouette designed for superior full-back support.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs867-thumb4",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs867-thumb4"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hs-876"
  },
  {
    "id": "bplus-352",
    "bplusId": 352,
    "sku": "HS-827-K3IX",
    "name": "HS - 827",
    "slug": "hs-827",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Elevate your workspace with the sophisticated simplicity of the Executive Chair. Upholstered in a premium cream faux leather finish, this chair brings a clea...",
    "description": "Elevate your workspace with the sophisticated simplicity of the Executive Chair. Upholstered in a premium cream faux leather finish, this chair brings a clean, modern aesthetic to any environment.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs827-thumb4",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs827-thumb4"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hs-827"
  },
  {
    "id": "bplus-351",
    "bplusId": 351,
    "sku": "HS-823-8L6R",
    "name": "HS - 823",
    "slug": "hs---823",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "The Office Chair combines sleek modern design with everyday comfort. Upholstered in a sophisticated finish, it features a supportive high back, elegantly pad...",
    "description": "The Office Chair combines sleek modern design with everyday comfort. Upholstered in a sophisticated finish, it features a supportive high back, elegantly padded armrests, and a plush seat designed to reduce fatigue during long working hours.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs823-thumb3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs823-thumb3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hs---823"
  },
  {
    "id": "bplus-350",
    "bplusId": 350,
    "sku": "ALLEN-03-DBMC",
    "name": "ALLEN 03",
    "slug": "allen03",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This ergonomic office chair features a breathable black mesh seat and backrest, designed to provide maximum comfort and airflow during long working hours.",
    "description": "This ergonomic office chair features a breathable black mesh seat and backrest, designed to provide maximum comfort and airflow during long working hours.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen03-thumb3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen03-thumb3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/allen03"
  },
  {
    "id": "bplus-349",
    "bplusId": 349,
    "sku": "ALLEN-02-JEOK",
    "name": "ALLEN 02",
    "slug": "allen-02",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "A clean and contemporary office chair that emphasizes lightness and simplicity. The slim, streamlined seat and backrest offer comfortable support while maint...",
    "description": "A clean and contemporary office chair that emphasizes lightness and simplicity. The slim, streamlined seat and backrest offer comfortable support while maintaining an airy, minimalist look.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen02-thumb3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen02-thumb3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/allen-02"
  },
  {
    "id": "bplus-348",
    "bplusId": 348,
    "sku": "ALLEN-01-UUTN",
    "name": "ALLEN 01",
    "slug": "allen-01",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "An elegant high-back office chair designed for superior comfort and executive presence. The layered cushioning provides full-body support.",
    "description": "An elegant high-back office chair designed for superior comfort and executive presence. The layered cushioning provides full-body support.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen01-thumb3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen01-thumb3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/allen-01"
  },
  {
    "id": "bplus-347",
    "bplusId": 347,
    "sku": "ALLEN-REKZ",
    "name": "ALLEN",
    "slug": "allen",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "A bold and contemporary office chair that blends comfort with a distinctive design. The generously padded seat and segmented backrest provide enhanced support.",
    "description": "A bold and contemporary office chair that blends comfort with a distinctive design. The generously padded seat and segmented backrest provide enhanced support.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen-thumb4",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-allen-thumb4"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/allen"
  },
  {
    "id": "bplus-346",
    "bplusId": 346,
    "sku": "HS-611-KO4L",
    "name": "HS - 611",
    "slug": "hs-611",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "A sleek and modern office chair designed for both comfort and style. Featuring a smooth, contoured seat and backrest, it provides ergonomic support for every...",
    "description": "A sleek and modern office chair designed for both comfort and style. Featuring a smooth, contoured seat and backrest, it provides ergonomic support for everyday use.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs611-thumb3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hs611-thumb3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hs-611"
  },
  {
    "id": "bplus-345",
    "bplusId": 345,
    "sku": "CH109",
    "name": "EASY 4-star fixed base, armrest",
    "slug": "easy-4-star-fixed-base-armrest",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Task Chair",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-0banhxetay.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-0banhxetay.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-4-star-fixed-base-armrest"
  },
  {
    "id": "bplus-344",
    "bplusId": 344,
    "sku": "CH107",
    "name": "EASY 4-star, armrest",
    "slug": "easy-4-star-armrest",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Task Chair",
    "dimensions": "W645 x D520 x H775 mm",
    "shortDescription": "Building on the clean, minimalist design of the original Easy chair, the Easy Office Chair brings mobility and flexibility to your workspace. Featuring a smo...",
    "description": "Building on the clean, minimalist design of the original Easy chair, the Easy Office Chair brings mobility and flexibility to your workspace. Featuring a smooth swivel base and durable rolling wheels, it allows you to move effortlessly without compromising comfort or style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-banhxetay.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-banhxetay.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-4-star-armrest"
  },
  {
    "id": "bplus-343",
    "bplusId": 343,
    "sku": "SL026",
    "name": "EASY bar stool, upholster, armrest",
    "slug": "easy-bar-stool-upholster-armrest",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W640 x D535 x H1070 mm",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-barstool-upharm.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-barstool-upharm.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-bar-stool-upholster-armrest"
  },
  {
    "id": "bplus-342",
    "bplusId": 342,
    "sku": "SL027",
    "name": "EASY bar stool, upholster",
    "slug": "easy-bar-stool-upholster",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W560 x D535 x H1070 mm",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-barstool-uph.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-barstool-uph.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-bar-stool-upholster"
  },
  {
    "id": "bplus-341",
    "bplusId": 341,
    "sku": "SL025",
    "name": "EASY bar stool, plywood",
    "slug": "easy-bar-stool-plywood",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W560 x D535 x H1070 mm",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easybarstoolply.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easybarstoolply.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-bar-stool-plywood"
  },
  {
    "id": "bplus-340",
    "bplusId": 340,
    "sku": "CH078",
    "name": "EASY upholster",
    "slug": "easy-upholster",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W540 x D550 x H750 mm",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-thumbbocnoarm.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-thumbbocnoarm.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-upholster"
  },
  {
    "id": "bplus-339",
    "bplusId": 339,
    "sku": "CH080",
    "name": "EASY plywood",
    "slug": "easy-plywood",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W540 x D555 x H750 mm",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-thumbnoarm.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-thumbnoarm.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-plywood"
  },
  {
    "id": "bplus-338",
    "bplusId": 338,
    "sku": "CH079",
    "name": "EASY upholster, armrest",
    "slug": "easy-upholster-armrest",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W640 x D555 x H973 mm • 20 kg",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easyboc-thumb.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easyboc-thumb.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-upholster-armrest"
  },
  {
    "id": "bplus-337",
    "bplusId": 337,
    "sku": "SU001",
    "name": "LUMINO FIXED SUN LOUNGE",
    "slug": "lumino-fixed-sun-lounger",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sun lounge",
    "dimensions": "W1645 x D665 x H705 mm • 20 kg",
    "shortDescription": "The sun lounge chair features a sturdy metal frame and soft cushioning. Its ergonomic curved design provides full-body support, while the adjustable backrest...",
    "description": "The sun lounge chair features a sturdy metal frame and soft cushioning. Its ergonomic curved design provides full-body support, while the adjustable backrest offers flexible comfort—perfect for relaxing or sunbathing indoors or outdoors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-21.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-21.jpg"
    ],
    "highlights": [
      {
        "title": "Structure ",
        "description": "Powder-coated aluminum frame with fully welded tubular construction, designed for strength, stability, and outdoor durability.\nThe lightweight structure ensures easy handling while maintaining excellent resistance to weather and corrosion.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO SUN LOUNGE-16.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-fixed-sun-lounger"
  },
  {
    "id": "bplus-336",
    "bplusId": 336,
    "sku": "SU002",
    "name": "LUMINO adjustable sun lounge",
    "slug": "lumino-adjustable-sun-lounge",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Sun lounge",
    "dimensions": "W1950 x D765 x H650 mm • 20 kg",
    "shortDescription": "A minimalist sun lounger featuring a sturdy frame and plush cushioning for ultimate comfort. The adjustable backrest lets you relax, read, or soak up the sun...",
    "description": "A minimalist sun lounger featuring a sturdy frame and plush cushioning for ultimate comfort. The adjustable backrest lets you relax, read, or soak up the sun—bringing a luxurious, resort-style experience right to your home.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-20.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-20.jpg"
    ],
    "highlights": [
      {
        "title": "Slatted Aluminum",
        "description": "This sun lounger features a sleek design with a durable metal frame and breathable slatted surface for a cool, comfortable feel. The adjustable backrest offers multiple reclining positions, perfect for relaxing, reading, or sunbathing outdoors. Its modern style fits effortlessly into poolside, garden, or resort settings.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO SUN LOUNGE-6.jpg"
      },
      {
        "title": "Support Frame",
        "description": "The frame is made of high-quality aluminum, lightweight yet sturdy with a modern curved design. The powder-coated finish resists rust, making it ideal for outdoor use while ensuring durability and stability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO SUN LOUNGE-7.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-adjustable-sun-lounge"
  },
  {
    "id": "bplus-335",
    "bplusId": 335,
    "sku": "DOMINION-JK2G",
    "name": "DOMINION",
    "slug": "dominion",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Chess",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "A minimalist design defined by strong geometric forms, offering stability and balance. It integrates effortlessly into various interior styles.",
    "description": "A minimalist design defined by strong geometric forms, offering stability and balance. It integrates effortlessly into various interior styles.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DOMINION-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DOMINION-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/dominion"
  },
  {
    "id": "bplus-334",
    "bplusId": 334,
    "sku": "REGALIA-HT2M",
    "name": "REGALIA",
    "slug": "regalia",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Chess",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Graceful lines and harmonious proportions create an elegant and captivating presence. The piece expresses softness while maintaining a strong character.",
    "description": "Graceful lines and harmonious proportions create an elegant and captivating presence. The piece expresses softness while maintaining a strong character.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/REGALIA-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/REGALIA-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/regalia"
  },
  {
    "id": "bplus-333",
    "bplusId": 333,
    "sku": "DUNE-GF55",
    "name": "DUNE",
    "slug": "dune",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Chess",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "A symbol of authority with a solid and commanding form, creating a striking focal point. Its balanced proportions deliver strength with refined elegance.",
    "description": "A symbol of authority with a solid and commanding form, creating a striking focal point. Its balanced proportions deliver strength with refined elegance.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DUNE-thumnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DUNE-thumnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/dune"
  },
  {
    "id": "bplus-332",
    "bplusId": 332,
    "sku": "BN014",
    "name": "LUMINO bench - 1000",
    "slug": "lumino-bench---1000",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1000 x D500 x H450 mm",
    "shortDescription": "LUMINO Bench – 1000 features a clean, lightweight metal frame with a slatted aluminum seat, designed for durability and everyday comfort.",
    "description": "LUMINO Bench – 1000 features a clean, lightweight metal frame with a slatted aluminum seat, designed for durability and everyday comfort.\nIts minimalist form fits effortlessly in both indoor and outdoor spaces, offering a practical seating solution while maintaining a calm, modern aesthetic.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-18.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-18.jpg"
    ],
    "highlights": [
      {
        "title": "Structure ",
        "description": "Aluminum slatted seat surface designed for durability and outdoor performance.\nThe powder-coated finish provides weather resistance while keeping the bench lightweight, clean, and easy to maintain.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BENCH-8.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-bench---1000"
  },
  {
    "id": "bplus-331",
    "bplusId": 331,
    "sku": "TB050",
    "name": "LUMINO 4S TABLE",
    "slug": "lumino-dining-table--square",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining table",
    "dimensions": "W845 x D845 x H750 mm",
    "shortDescription": "LUMINO Dining Table – Square features a clean, compact square design with a refined minimalist touch. The slatted tabletop and powder-coated metal frame ensu...",
    "description": "LUMINO Dining Table – Square features a clean, compact square design with a refined minimalist touch. The slatted tabletop and powder-coated metal frame ensure durability while keeping a light, modern look. Perfect for intimate spaces, it creates a cozy setting for everyday dining and meaningful connections.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-16.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-16.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Slatted metal tabletop with powder-coated finish for durability and weather resistance.\nThe clean linear design allows easy maintenance while maintaining a light and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 4-4.jpg"
      },
      {
        "title": "Base",
        "description": "Powder-coated steel legs with rounded tubular construction provide strong and stable support.\nThe integrated frame connection ensures durability while maintaining a clean and minimal look suitable for indoor and outdoor use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 3-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-dining-table--square"
  },
  {
    "id": "bplus-330",
    "bplusId": 330,
    "sku": "TB047",
    "name": "LUMINO 1830 TABLE",
    "slug": "lumino-dining-table-1830",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining table",
    "dimensions": "W1830 x D915 x H750 mm",
    "shortDescription": "LUMINO Dining Table – 1830 offers a clean, minimalist aesthetic with refined simplicity. Its slatted tabletop and powder-coated metal frame ensure durability...",
    "description": "LUMINO Dining Table – 1830 offers a clean, minimalist aesthetic with refined simplicity. Its slatted tabletop and powder-coated metal frame ensure durability while maintaining a light, modern look. Perfectly sized for versatile spaces, it fits beautifully in cozy homes or compact dining areas—creating a comfortable setting for everyday meals and meaningful moments.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-15.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-15.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Slatted metal tabletop with powder-coated finish for durability and weather resistance.\nThe clean linear design allows easy maintenance while maintaining a light and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 4-4.jpg"
      },
      {
        "title": "Base",
        "description": "Powder-coated steel legs with rounded tubular construction provide strong and stable support.\nThe integrated frame connection ensures durability while maintaining a clean and minimal look suitable for indoor and outdoor use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 3-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-dining-table-1830"
  },
  {
    "id": "bplus-329",
    "bplusId": 329,
    "sku": "CT142",
    "name": "LUMINO ROUND 800 COFFEE TABLE",
    "slug": "lumino-coffee-table---round-large",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee table",
    "dimensions": "W800 x D750 x H400 mm",
    "shortDescription": "LUMINO Coffee Table – Round Small embodies minimalist elegance with a refined touch. Its clean round form and powder-coated metal frame create a light, moder...",
    "description": "LUMINO Coffee Table – Round Small embodies minimalist elegance with a refined touch. Its clean round form and powder-coated metal frame create a light, modern aesthetic that blends effortlessly into any space. Compact and versatile, it fits perfectly in living rooms, reading corners, or cozy café setups—bringing a subtle yet stylish statement to your everyday living.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-13.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-13.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Aluminum slatted tabletop with a rounded tubular frame, designed for durability and outdoor use.\nThe powder-coated finish provides weather resistance while maintaining a clean, lightweight, and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO coffee table-4.jpg"
      },
      {
        "title": "BASE",
        "description": "Tubular steel legs formed in a continuous curved frame for strong and stable support.\nThe powder-coated finish enhances durability and weather resistance while keeping a clean, modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO coffee table-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-coffee-table---round-large"
  },
  {
    "id": "bplus-328",
    "bplusId": 328,
    "sku": "CT135",
    "name": "LUMINO ROUND 580 COFFEE TABLE",
    "slug": "lumino-coffee-table---round-small",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee table",
    "dimensions": "W580 x D530 x H500 mm",
    "shortDescription": "LUMINO Coffee Table – Round Small embodies minimalist elegance with a refined touch. Its clean round form and powder-coated metal frame create a light, moder...",
    "description": "LUMINO Coffee Table – Round Small embodies minimalist elegance with a refined touch. Its clean round form and powder-coated metal frame create a light, modern aesthetic that blends effortlessly into any space. Compact and versatile, it fits perfectly in living rooms, reading corners, or cozy café setups—bringing a subtle yet stylish statement to your everyday living.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-12.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-12.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Aluminum slatted tabletop with a rounded tubular frame, designed for durability and outdoor use.\nThe powder-coated finish provides weather resistance while maintaining a clean, lightweight, and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO coffee table-4.jpg"
      },
      {
        "title": "BASE",
        "description": "Tubular steel legs formed in a continuous curved frame for strong and stable support.\nThe powder-coated finish enhances durability and weather resistance while keeping a clean, modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO coffee table-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-coffee-table---round-small"
  },
  {
    "id": "bplus-327",
    "bplusId": 327,
    "sku": "ST065",
    "name": "LUMINO SIDETABLE",
    "slug": "lumino-side-table-",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W500 x D480 x H500 mm",
    "shortDescription": "LUMINO Side Table – compact yet refined.",
    "description": "LUMINO Side Table – compact yet refined.\nA minimalist design with soft, modern lines that blends effortlessly into any interior. Its sturdy surface and elegant neutral tones bring a sense of understated luxury.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-11.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-11.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Solid metal tabletop with a smooth powder-coated finish for durability and weather resistance.\nThe clean flat surface creates a minimal look while ensuring easy maintenance and long-term use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO COFFE TBALE 2-1.jpg"
      },
      {
        "title": "Base",
        "description": "Tubular steel legs formed in a continuous frame with rounded corners for a smooth and durable structure.\nThe powder-coated finish provides stability and resistance, making it suitable for both indoor and outdoor use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO COFFE TBALE 3-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-side-table-"
  },
  {
    "id": "bplus-326",
    "bplusId": 326,
    "sku": "ST139-O",
    "name": "MORA-O",
    "slug": "mora-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee table",
    "dimensions": "W495 x D495 x H620 mm • 20 kg",
    "shortDescription": "MORA was conceived from the idea of a continuous flow. Its slender base gently curves upward, lifting the round tabletop as if in one uninterrupted motion. T...",
    "description": "MORA was conceived from the idea of a continuous flow. Its slender base gently curves upward, lifting the round tabletop as if in one uninterrupted motion. The soft, sculptural form gives the piece a sense of lightness and balance while maintaining a stable structure.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop is proportioned for simplicity and practicality. Its clean, flat surface highlights the natural beauty of the material while providing just enough space for drinks, books, or small decorative objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA 9-1.jpg"
      },
      {
        "title": "Body",
        "description": "The column is the defining feature of the design, tapering smoothly from the tabletop down to the base. Its fluid curve creates a sense of lightness and elegance, giving the table a sculptural character that stands out within the space.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA 8.jpg"
      },
      {
        "title": "Base",
        "description": "The base gently flares outward to provide stability for the entire structure. This soft expansion visually balances the slender column above while ensuring the table remains sturdy and grounded.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA 10-2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mora-o"
  },
  {
    "id": "bplus-325",
    "bplusId": 325,
    "sku": "ST057-O",
    "name": "STRATA-O",
    "slug": "strata-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W380 x D380 x H480 mm • 20 kg",
    "shortDescription": "STRATA draws inspiration from natural geological layers formed over time. Its body is composed of rhythmic stacked forms that evoke stratified rock shaped by...",
    "description": "STRATA draws inspiration from natural geological layers formed over time. Its body is composed of rhythmic stacked forms that evoke stratified rock shaped by erosion and pressure. The repeated faceted surfaces create visual depth, giving the piece a bold yet sculptural presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA 4.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA 4.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a subtly beveled edge that gives it a solid and substantial appearance. Its surface offers just enough space for everyday items such as a drink, a book, or small decorative objects while maintaining balance with the sculptural base below.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA 5-1.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are formed as a continuous sculptural volume made from composite material, allowing the stacked geometric layers and sharp beveled surfaces to be expressed clearly. This rhythmic structure evokes natural geological strata, adding depth and character. The form gradually widens toward the bottom, creating a stable foundation and reinforcing the table’s sculptural presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA 6-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/strata-o"
  },
  {
    "id": "bplus-324",
    "bplusId": 324,
    "sku": "ST055-O",
    "name": "KARO-O",
    "slug": "karo-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W385 x D385 x H455 mm • 20 kg",
    "shortDescription": "KARO features a simple yet sculptural form defined by its gently tapered center and widened top and base. The silhouette resembles an hourglass, where symmet...",
    "description": "KARO features a simple yet sculptural form defined by its gently tapered center and widened top and base. The silhouette resembles an hourglass, where symmetrical curves create a balanced and fluid visual rhythm.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO 4.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO 4.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a clean, flat surface that provides a stable and practical area for everyday use. The composite material with stone-like veining adds a refined material expression while offering space for drinks, books, or small decorative objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO 5-1.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are formed as a continuous volume crafted from composite material. The form gently tapers at the center before widening toward the top and bottom, creating a balanced and stable structure. Soft curves combined with natural stone-like patterns give the piece a minimalist yet sculptural presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO 6-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karo-o"
  },
  {
    "id": "bplus-322",
    "bplusId": 322,
    "sku": "CT140-O",
    "name": "OSSA-O",
    "slug": "ossa-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee table",
    "dimensions": "W670 x D670 x H610 mm • 20 kg",
    "shortDescription": "OSSA stands out with its slender silhouette and smooth transition from base to tabletop. The gently tapered center creates a continuous curve, giving the pie...",
    "description": "OSSA stands out with its slender silhouette and smooth transition from base to tabletop. The gently tapered center creates a continuous curve, giving the piece a sense of lightness and balance. Minimal yet sculptural, the design introduces a refined presence within the space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA 5.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA 5.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a slim profile with softly rounded edges, creating a light and balanced appearance above the base. The composite surface with natural stone-like veining adds a refined material expression while providing space for drinks, books, or small decorative objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA 6-1.jpg"
      },
      {
        "title": "Base",
        "description": "The body and base are formed as a continuous volume crafted from composite material. The form gently tapers at the center before widening toward the base, creating a smooth and flowing silhouette. The flared bottom enhances stability while emphasizing the table’s elegant and sculptural character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA 7-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ossa-o"
  },
  {
    "id": "bplus-321",
    "bplusId": 321,
    "sku": "ST023-O",
    "name": "LUNA-O",
    "slug": "luna-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W578 x D502 x H625 mm • 20 kg",
    "shortDescription": "LUNA stands out with its sharp geometric form and balanced proportions. The design is composed of faceted planes that form a multi-sided structure, narrowing...",
    "description": "LUNA stands out with its sharp geometric form and balanced proportions. The design is composed of faceted planes that form a multi-sided structure, narrowing at the center to create a strong visual focal point. This configuration gives the piece both stability and a dynamic presence, as if two geometric volumes meet at a point of equilibrium.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA.jpg"
    ],
    "highlights": [
      {
        "title": "Body",
        "description": "Crafted from composite material, LUNA allows for crisp edges and smooth planar surfaces to be expressed with precision.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA 7-1.jpg"
      },
      {
        "title": "Base",
        "description": "With its compact scale and bold color presence, the table easily becomes a striking accent piece in lounge areas, living rooms, or contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA 9-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/luna-o"
  },
  {
    "id": "bplus-320",
    "bplusId": 320,
    "sku": "ST061-O",
    "name": "CRUX-O",
    "slug": "crux-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W355 x D355 x H580 mm • 20 kg",
    "shortDescription": "CRUX is defined by the contrast between two fundamental volumes. The upper section opens like a rounded bowl, while the base narrows into a solid and grounde...",
    "description": "CRUX is defined by the contrast between two fundamental volumes. The upper section opens like a rounded bowl, while the base narrows into a solid and grounded support, creating a clear point of balance at the center. The transition between these forms gives the piece a sense of stability and structural clarity.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features softly rounded edges that create a solid and balanced appearance. Its flat surface provides a practical area for placing drinks, books, or small decorative objects while maintaining the table’s clean and minimal look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX 6-1.jpg"
      },
      {
        "title": "Base",
        "description": "The body and base are formed as a continuous volume crafted from composite material. The form gently narrows at the junction between the upper bowl-like volume and the base, creating a clear visual transition. The base gradually widens toward the bottom, providing stability and reinforcing the table’s grounded presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX 5-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/crux-o"
  },
  {
    "id": "bplus-319",
    "bplusId": 319,
    "sku": "CT132",
    "name": "LUMINO 1200 COFFEE TABLE",
    "slug": "lumino-coffee-table---long",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee table",
    "dimensions": "W1200 x D800 x H405 mm",
    "shortDescription": "Lumino Coffee Table is a low, understated piece designed to anchor relaxed outdoor settings. Its lightweight powder-coated metal frame and clean proportions ...",
    "description": "Lumino Coffee Table is a low, understated piece designed to anchor relaxed outdoor settings. Its lightweight powder-coated metal frame and clean proportions provide a durable, practical surface while maintaining a calm, modern aesthetic that pairs effortlessly with lounge seating indoors or out.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-9.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-9.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Solid metal tabletop with a smooth powder-coated finish for durability and weather resistance.\nThe clean flat surface creates a minimal look while ensuring easy maintenance and long-term use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO COFFE TBALE 2-1.jpg"
      },
      {
        "title": "Base",
        "description": "Tubular steel legs formed in a continuous frame with rounded corners for a smooth and durable structure.\nThe powder-coated finish provides stability and resistance, making it suitable for both indoor and outdoor use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO COFFE TBALE 3-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-coffee-table---long"
  },
  {
    "id": "bplus-318",
    "bplusId": 318,
    "sku": "ST059-O",
    "name": "ARCHE-O",
    "slug": "arche-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W400 x D400 x H570 mm • 20 kg",
    "shortDescription": "ARCHE is composed of a rhythmic stack of truncated cone forms that expand and contract along the vertical axis. This repetition creates a sculptural silhouet...",
    "description": "ARCHE is composed of a rhythmic stack of truncated cone forms that expand and contract along the vertical axis. This repetition creates a sculptural silhouette, giving the piece the presence of a small architectural object within the space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a subtly tapered edge, opening outward like an inverted funnel. Its clean and flat surface provides a compact area for drinks, books, or small decorative items.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE 6-1.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are formed by a sequence of stacked truncated cones that expand and contract rhythmically, creating a balanced and visually dynamic structure. Cast as a continuous composite form, the table offers smooth surfaces and a solid, stable presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE 7-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/arche-o"
  },
  {
    "id": "bplus-317",
    "bplusId": 317,
    "sku": "ST042-O",
    "name": "FORMA-O",
    "slug": "forma-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W655 x D655 x H390 mm • 20 kg",
    "shortDescription": "FORMA is defined by the most fundamental geometric forms. A wide circular top rests on a solid truncated-cone base, creating a composition that is simple yet...",
    "description": "FORMA is defined by the most fundamental geometric forms. A wide circular top rests on a solid truncated-cone base, creating a composition that is simple yet well balanced. The design focuses on the purity of form, where each curve and proportion is kept intentionally minimal.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FORMA.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FORMA.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "With its clear structure and seamless composite surface, FORMA conveys both stability and lightness. The piece integrates easily into various environments, from living rooms and lounge areas to contemporary workspaces.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FORMA 5-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/forma-o"
  },
  {
    "id": "bplus-316",
    "bplusId": 316,
    "sku": "ST064-O",
    "name": "ZENO-O",
    "slug": "zeno-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W430 x D430 x H470 mm • 20 kg",
    "shortDescription": "ZENO is composed of two contrasting geometric volumes. The upper section expands into a deep bowl-like form, while the base below narrows into a solid and gr...",
    "description": "ZENO is composed of two contrasting geometric volumes. The upper section expands into a deep bowl-like form, while the base below narrows into a solid and grounded support, creating a clear point of balance at the center. The proportion between these two forms gives the piece a stable yet soft and recognizable silhouette.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO-1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO-1.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Crafted from composite material, the table features seamless surfaces and smooth curves. ZENO combines minimalism with a sculptural presence, making it suitable for a variety of contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO 6-1.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are shaped as a slightly tapered cylindrical form that gradually widens toward the bottom to enhance stability. Made from a continuous composite structure, the base appears smooth, solid, and well balanced.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO 5-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/zeno-o"
  },
  {
    "id": "bplus-315",
    "bplusId": 315,
    "sku": "ST063-O",
    "name": "VANTIS-O",
    "slug": "vantis-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W390 x D390 x H430 mm • 20 kg",
    "shortDescription": "VANTIS features a soft, sculpted form reminiscent of a stone naturally shaped over time. The body gently expands at the center before narrowing toward the ta...",
    "description": "VANTIS features a soft, sculpted form reminiscent of a stone naturally shaped over time. The body gently expands at the center before narrowing toward the tabletop, creating a balanced and organic silhouette. The flowing stone-like veins running along the surface add visual depth, offering subtle variations from every angle.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop is compact and round with softly curved edges. The rim slightly flares outward, giving the surface a gentle and welcoming character while providing enough space for everyday objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS 6-1.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base form a continuous volume that gently bulges at the center and tapers toward the bottom. Its rounded geometry creates a stable and sculptural presence, while the stone-like composite finish enhances the table’s natural visual character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS 5-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/vantis-o"
  },
  {
    "id": "bplus-314",
    "bplusId": 314,
    "sku": "ST058-O",
    "name": "SOLIN-O",
    "slug": "solin-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W350 x D350 x H440 mm • 20 kg",
    "shortDescription": "SOLIN is defined by a composition of contrasting geometric volumes. The tabletop gently opens like a shallow dish, connected to the base through a narrow tra...",
    "description": "SOLIN is defined by a composition of contrasting geometric volumes. The tabletop gently opens like a shallow dish, connected to the base through a narrow transition at the center. This rhythmic change of forms creates a balanced yet sculptural silhouette.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop is circular with a softly tapered edge, resembling a shallow dish. Its clean and flat surface provides a practical area for drinks or small decorative items.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN 6-1.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are composed of stacked truncated-cone forms that expand and contract along the vertical axis. Crafted as a continuous composite structure, the table maintains a solid presence while emphasizing its sculptural quality.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN 5-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/solin-o"
  },
  {
    "id": "bplus-312",
    "bplusId": 312,
    "sku": "ST005-O",
    "name": "TERRA-O",
    "slug": "terra-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W460 x D460 x H500 mm • 20 kg",
    "shortDescription": "TERRA is formed through a balanced composition of two fundamental geometric volumes. The tabletop gently opens like an inverted funnel, resting on a solid tr...",
    "description": "TERRA is formed through a balanced composition of two fundamental geometric volumes. The tabletop gently opens like an inverted funnel, resting on a solid truncated-cone base. The clean transition between these two elements creates harmonious proportions and a stable visual presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TERRA.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TERRA.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/terra-o"
  },
  {
    "id": "bplus-311",
    "bplusId": 311,
    "sku": "ST062-O",
    "name": "PYLO-O",
    "slug": "pylo-o",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side table",
    "dimensions": "W483 x D395 x H460 mm • 20 kg",
    "shortDescription": "PYLO is conceived as a softened solid, where rigid edges dissolve into fluid curves. Its tabletop features an irregular outline that feels natural and sponta...",
    "description": "PYLO is conceived as a softened solid, where rigid edges dissolve into fluid curves. Its tabletop features an irregular outline that feels natural and spontaneous, almost as if the form has been gradually shaped by time.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PYLO.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PYLO.jpg"
    ],
    "highlights": [
      {
        "title": "Body",
        "description": "Cast as a single volume from composite material, the design allows for continuous, seamless surfaces that flow smoothly from top to base. The form subtly tapers toward the bottom, creating a grounded yet visually light presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PYLO 6-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pylo-o"
  },
  {
    "id": "bplus-309",
    "bplusId": 309,
    "sku": "TB051",
    "name": "LUMINO HIGH TABLE",
    "slug": "lumino-bar-table",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Bar table",
    "dimensions": "W800 x D800 x H1100 mm",
    "shortDescription": "LUMINO Bar Table features a clean minimalist design with a durable powder-coated metal frame and a light, airy tabletop. Its slim, tall proportions make it p...",
    "description": "LUMINO Bar Table features a clean minimalist design with a durable powder-coated metal frame and a light, airy tabletop. Its slim, tall proportions make it perfect for bar areas, balconies, or outdoor settings, adding a modern and refined touch to any space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-7.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-7.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Slatted metal tabletop with powder-coated finish for durability and weather resistance.\nThe clean linear design allows easy maintenance while maintaining a light and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 4-4.jpg"
      },
      {
        "title": "Base",
        "description": "Powder-coated steel legs with rounded tubular construction provide strong and stable support.\nThe integrated frame connection ensures durability while maintaining a clean and minimal look suitable for indoor and outdoor use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 3-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-bar-table"
  },
  {
    "id": "bplus-308",
    "bplusId": 308,
    "sku": "SL023",
    "name": "LUMINO BAR STOOL",
    "slug": "lumino-bar-stool",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar stool",
    "dimensions": "W545 x D550 x H985 mm",
    "shortDescription": "LUMINO Bar Stool is a refined seating piece designed to bring comfort and elegance to modern bar and counter spaces.",
    "description": "LUMINO Bar Stool is a refined seating piece designed to bring comfort and elegance to modern bar and counter spaces.\nIts slim powder-coated metal frame creates a light, airy silhouette, while the softly padded seat and back cushion provide a relaxed, supportive sitting experience.\nClean lines and neutral tones make the Lumino bar-stool easy to pair with a wide range of interiors, from minimalist homes to contemporary cafés, offering both visual balance and everyday practicality.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-5.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-5.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest frame",
        "description": "Powder-coated metal frame with a rounded handle, adding a soft visual accent and making it easy to move.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR STOOL 5-1.jpg"
      },
      {
        "title": "Seat structure",
        "description": "Tubular steel seat structure with cross support and integrated footrest.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR STOOL 6-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-bar-stool"
  },
  {
    "id": "bplus-307",
    "bplusId": 307,
    "sku": "MOON-F-5KD9",
    "name": "MOON F",
    "slug": "moon-f",
    "brand": "B+ Furniture",
    "category": "lighting",
    "categoryLabel": "Standing Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This floor lamp features a sophisticated dual-light design, sporting two adjustable hemispherical shades on a slender matte black pole.",
    "description": "This floor lamp features a sophisticated dual-light design, sporting two adjustable hemispherical shades on a slender matte black pole.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-moonf-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-moonf-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/moon-f"
  },
  {
    "id": "bplus-306",
    "bplusId": 306,
    "sku": "CH114",
    "name": "LUMINO CHAIR A",
    "slug": "lumino-dining-chair-no-armrest",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining chair",
    "dimensions": "W590 x D575 x H770 mm",
    "shortDescription": "Lumino Dining Chair balances comfort and clarity in a lightweight, modern form.",
    "description": "Lumino Dining Chair balances comfort and clarity in a lightweight, modern form.\nWith a powder-coated metal frame and gently slatted seat and backrest, it offers durable support while maintaining an open, relaxed feel—ideal for contemporary dining spaces both indoors and outdoors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-4.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-4.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest frame",
        "description": "Powder-coated metal frame with a rounded handle, adding a soft visual accent and making it easy to move.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO DINING CHAIR 4-2.jpg"
      },
      {
        "title": "Seat structure",
        "description": "Frame structure with horizontal slats, forming a sturdy surface with a clean visual rhythm.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO DINING CHAIR 5-2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-dining-chair-no-armrest"
  },
  {
    "id": "bplus-305",
    "bplusId": 305,
    "sku": "MOON-T-VR85",
    "name": "MOON T",
    "slug": "moon-t",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Table Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This elegant table lamp features a striking minimalist design, combining a sleek matte black spherical shade with a solid cubic base.",
    "description": "This elegant table lamp features a striking minimalist design, combining a sleek matte black spherical shade with a solid cubic base.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-moont-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-moont-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/moon-t"
  },
  {
    "id": "bplus-304",
    "bplusId": 304,
    "sku": "MACARON-F-J7D6",
    "name": "MACARON F",
    "slug": "macaron-f",
    "brand": "B+ Furniture",
    "category": "lighting",
    "categoryLabel": "Standing Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This table lamp redefines simplicity with its ultra-minimalist L-shaped structure and a delicate, disc-like head.",
    "description": "This table lamp redefines simplicity with its ultra-minimalist L-shaped structure and a delicate, disc-like head.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-macaronf-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-macaronf-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/macaron-f"
  },
  {
    "id": "bplus-303",
    "bplusId": 303,
    "sku": "MACARON-T-FOU6",
    "name": "MACARON T",
    "slug": "macaron-t",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Table Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This table lamp redefines simplicity with its ultra-minimalist L-shaped structure and a delicate, disc-like head.",
    "description": "This table lamp redefines simplicity with its ultra-minimalist L-shaped structure and a delicate, disc-like head.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-macaront-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-macaront-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/macaron-t"
  },
  {
    "id": "bplus-302",
    "bplusId": 302,
    "sku": "HALO-F-4LVH",
    "name": "HALO F",
    "slug": "halo-f",
    "brand": "B+ Furniture",
    "category": "lighting",
    "categoryLabel": "Standing Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This desk lamp features a striking geometric silhouette, characterized by its sharp angular arm and a unique ring-shaped light head.",
    "description": "This desk lamp features a striking geometric silhouette, characterized by its sharp angular arm and a unique ring-shaped light head.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-halof-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-halof-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/halo-f"
  },
  {
    "id": "bplus-301",
    "bplusId": 301,
    "sku": "HALO-T-PUIY",
    "name": "HALO T",
    "slug": "halo-t",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Table Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This desk lamp features a striking geometric silhouette, characterized by its sharp angular arm and a unique ring-shaped light head.",
    "description": "This desk lamp features a striking geometric silhouette, characterized by its sharp angular arm and a unique ring-shaped light head.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-halot-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-halot-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/halo-t"
  },
  {
    "id": "bplus-300",
    "bplusId": 300,
    "sku": "CANDLE-F-RRSE",
    "name": "CANDLE F",
    "slug": "candle-f",
    "brand": "B+ Furniture",
    "category": "lighting",
    "categoryLabel": "Standing Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This table lamp exudes timeless luxury, combining a premium marble base with a sleek black stem and a soft frosted glass shade.",
    "description": "This table lamp exudes timeless luxury, combining a premium marble base with a sleek black stem and a soft frosted glass shade.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-candlef-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-candlef-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/candle-f"
  },
  {
    "id": "bplus-299",
    "bplusId": 299,
    "sku": "CANDLE-T-9PYF",
    "name": "CANDLE T",
    "slug": "candle-t",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Table Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This table lamp exudes timeless luxury, combining a premium marble base with a sleek black stem and a soft frosted glass shade.",
    "description": "This table lamp exudes timeless luxury, combining a premium marble base with a sleek black stem and a soft frosted glass shade.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-candlet-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-candlet-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/candle-t"
  },
  {
    "id": "bplus-298",
    "bplusId": 298,
    "sku": "ALTEA-F-MBO0",
    "name": "ALTEA F",
    "slug": "altea-f",
    "brand": "B+ Furniture",
    "category": "lighting",
    "categoryLabel": "Standing Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This table lamp showcases a sleek, contemporary silhouette featuring a slender stem and a thin, disc-shaped head tilted at an artistic angle.",
    "description": "This table lamp showcases a sleek, contemporary silhouette featuring a slender stem and a thin, disc-shaped head tilted at an artistic angle.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-alteaf-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-alteaf-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/altea-f"
  },
  {
    "id": "bplus-297",
    "bplusId": 297,
    "sku": "ALTEA-T-N2FQ",
    "name": "ALTEA T",
    "slug": "altea-t",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Table Lamp",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "This table lamp showcases a sleek, contemporary silhouette featuring a slender stem and a thin, disc-shaped head tilted at an artistic angle.",
    "description": "This table lamp showcases a sleek, contemporary silhouette featuring a slender stem and a thin, disc-shaped head tilted at an artistic angle.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-alteat-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-alteat-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/altea-t"
  },
  {
    "id": "bplus-296",
    "bplusId": 296,
    "sku": "SF106",
    "name": "LUMINO 3 SEATS SOFA (Padded Seat)",
    "slug": "lumino-3-seater",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2195 x D750 x H795 mm",
    "shortDescription": "This outdoor lounge chair features a lightweight aluminum frame designed for durability and weather resistance. Generously cushioned seat and backrest provid...",
    "description": "This outdoor lounge chair features a lightweight aluminum frame designed for durability and weather resistance. Generously cushioned seat and backrest provide a relaxed lounging experience while maintaining a clean, modern silhouette. As part of a coordinated outdoor set, the chair pairs seamlessly with other pieces to create a cohesive outdoor living space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-2.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-2.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest frame",
        "description": "Powder-coated metal frame with a rounded handle, adding a soft visual accent and making it easy to move.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 6.jpg"
      },
      {
        "title": "Armrest",
        "description": "Rounded armrest, bringing warmth in material and enhanced comfort in use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 4.jpg"
      },
      {
        "title": "Seat structure",
        "description": "Frame structure with horizontal slats, forming a sturdy surface with a clean visual rhythm.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-3-seater"
  },
  {
    "id": "bplus-295",
    "bplusId": 295,
    "sku": "AFTER-SHE-LEFT-HT-002-RB40",
    "name": "After She Left HT-002",
    "slug": "after-she-left",
    "brand": "B+ Furniture",
    "category": "decor",
    "categoryLabel": "Painting",
    "dimensions": "W500 x D25 x H700 mm • 20 kg",
    "shortDescription": "An empty chair and red shoes remain on the floor.",
    "description": "An empty chair and red shoes remain on the floor.\nDeep colors hold the warmth of a moment that has just passed.\nThe room is quiet, yet the feeling lingers.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/After She Left.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/After She Left.png"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/after-she-left"
  },
  {
    "id": "bplus-294",
    "bplusId": 294,
    "sku": "A-MOMENT-BY-THE-SMALL-TABLE-HT-001-OZKT",
    "name": "A Moment by the Small Table HT-001",
    "slug": "a-moment-by-the-small-table",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Painting",
    "dimensions": "W800 x D250 x H600 mm",
    "shortDescription": "A simple table corner appears in warm golden light.",
    "description": "A simple table corner appears in warm golden light.\nFamiliar objects create a sense of quiet intimacy.\nLike a slow morning passing by.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/A Moment by the Small Table.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/A Moment by the Small Table.png"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/a-moment-by-the-small-table"
  },
  {
    "id": "bplus-293",
    "bplusId": 293,
    "sku": "THE-WAITING-CHAIR-HT-005-5B2G",
    "name": "The Waiting Chair HT-005",
    "slug": "the-waiting-chair",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Painting",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "A small chair stands quietly in a calm green space.",
    "description": "A small chair stands quietly in a calm green space.\nThe draped cloth feels like a trace of a moment that has just passed.\nAmid cool tones, the orange chair holds a lingering warmth.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/The Waiting Chair.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/The Waiting Chair.png"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/the-waiting-chair"
  },
  {
    "id": "bplus-292",
    "bplusId": 292,
    "sku": "ECHOES-IN-BLUE-NIGHT-HT-003-382A",
    "name": "Echoes in Blue Night HT-003",
    "slug": "echoes-in-blue-night",
    "brand": "B+ Furniture",
    "category": "decor",
    "categoryLabel": "Painting",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Deep blues and heavy brushstrokes shape a space both familiar and elusive.",
    "description": "Deep blues and heavy brushstrokes shape a space both familiar and elusive.\nWarm amber flickers through the cool tones like traces of light in the night.\nA corner of table and chairs appears, then dissolves into motion and color.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Echoes in Blue Night.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Echoes in Blue Night.png"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/echoes-in-blue-night"
  },
  {
    "id": "bplus-291",
    "bplusId": 291,
    "sku": "LATE-AFTERNOON-TABLE-HT-004-4VZ2",
    "name": "Late Afternoon Table HT-004",
    "slug": "late-afternoon-table",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Painting",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "A small table corner appears in the warm glow of afternoon light.",
    "description": "A small table corner appears in the warm glow of afternoon light.\nFlowers, a chair, and a cup form a quiet moment,\nwhere amber and blue tones blend gently like a memory.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Late Afternoon Table.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Late Afternoon Table.png"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/late-afternoon-table"
  },
  {
    "id": "bplus-288",
    "bplusId": 288,
    "sku": "ST005",
    "name": "TERRA",
    "slug": "terra",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W460 x D460 x H500 mm",
    "shortDescription": "TERRA is formed through a balanced composition of two fundamental geometric volumes. The tabletop gently opens like an inverted funnel, resting on a solid tr...",
    "description": "TERRA is formed through a balanced composition of two fundamental geometric volumes. The tabletop gently opens like an inverted funnel, resting on a solid truncated-cone base. The clean transition between these two elements creates harmonious proportions and a stable visual presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TERRA-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TERRA-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The circular tabletop features a subtly tapered edge that widens outward. Its surface is finished with a stone-effect film, creating a natural stone-like appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TERRA 2.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are shaped as a truncated cone that gradually expands toward the floor, forming a stable foundation. The composite structure with stone-effect film finish ensures durability while maintaining a refined aesthetic.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TERRA 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/terra"
  },
  {
    "id": "bplus-287",
    "bplusId": 287,
    "sku": "ST058",
    "name": "SOLIN",
    "slug": "solin",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W350 x D350 x H440 mm • 10 kg",
    "shortDescription": "SOLIN is defined by a composition of contrasting geometric volumes. The tabletop gently opens like a shallow dish, connected to the base through a narrow tra...",
    "description": "SOLIN is defined by a composition of contrasting geometric volumes. The tabletop gently opens like a shallow dish, connected to the base through a narrow transition at the center. This rhythmic change of forms creates a balanced yet sculptural silhouette.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop is circular with a softly tapered edge, resembling a shallow dish. Its clean and flat surface provides a practical area for drinks or small decorative items.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN 2.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are composed of stacked truncated-cone forms that expand and contract along the vertical axis. Crafted as a continuous composite structure, the table maintains a solid presence while emphasizing its sculptural quality.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SOLIN 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/solin"
  },
  {
    "id": "bplus-286",
    "bplusId": 286,
    "sku": "ST063",
    "name": "VANTIS",
    "slug": "vantis",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W390 x D390 x H430 mm",
    "shortDescription": "VANTIS features a soft, sculpted form reminiscent of a stone naturally shaped over time. The body gently expands at the center before narrowing toward the ta...",
    "description": "VANTIS features a soft, sculpted form reminiscent of a stone naturally shaped over time. The body gently expands at the center before narrowing toward the tabletop, creating a balanced and organic silhouette. The flowing stone-like veins running along the surface add visual depth, offering subtle variations from every angle.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop is compact and round with softly curved edges. The rim slightly flares outward, giving the surface a gentle and welcoming character while providing enough space for everyday objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS 2.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base form a continuous volume that gently bulges at the center and tapers toward the bottom. Its rounded geometry creates a stable and sculptural presence, while the stone-like composite finish enhances the table’s natural visual character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VANTIS 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/vantis"
  },
  {
    "id": "bplus-285",
    "bplusId": 285,
    "sku": "ST064",
    "name": "ZENO",
    "slug": "zeno",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W430 x D430 x H470 mm • 10 kg",
    "shortDescription": "ZENO is composed of two contrasting geometric volumes. The upper section expands into a deep bowl-like form, while the base below narrows into a solid and gr...",
    "description": "ZENO is composed of two contrasting geometric volumes. The upper section expands into a deep bowl-like form, while the base below narrows into a solid and grounded support, creating a clear point of balance at the center. The proportion between these two forms gives the piece a stable yet soft and recognizable silhouette.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO-thumbnail.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO-thumbnail.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Crafted from composite material, the table features seamless surfaces and smooth curves. ZENO combines minimalism with a sculptural presence, making it suitable for a variety of contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO 2.png"
      },
      {
        "title": "Body",
        "description": "The body and base are shaped as a slightly tapered cylindrical form that gradually widens toward the bottom to enhance stability. Made from a continuous composite structure, the base appears smooth, solid, and well balanced.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ZENO 3.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/zeno"
  },
  {
    "id": "bplus-284",
    "bplusId": 284,
    "sku": "ST042",
    "name": "FORMA",
    "slug": "forma",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W655 x D655 x H390 mm",
    "shortDescription": "FORMA is defined by the most fundamental geometric forms. A wide circular top rests on a solid truncated-cone base, creating a composition that is simple yet...",
    "description": "FORMA is defined by the most fundamental geometric forms. A wide circular top rests on a solid truncated-cone base, creating a composition that is simple yet well balanced. The design focuses on the purity of form, where each curve and proportion is kept intentionally minimal.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FORMA-thumbnail.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FORMA-thumbnail.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "With its clear structure and seamless composite surface, FORMA conveys both stability and lightness. The piece integrates easily into various environments, from living rooms and lounge areas to contemporary workspaces.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FORMA 3.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/forma"
  },
  {
    "id": "bplus-283",
    "bplusId": 283,
    "sku": "ST059",
    "name": "ARCHE",
    "slug": "arche",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W400 x D400 x H570 mm • 20 kg",
    "shortDescription": "ARCHE is composed of a rhythmic stack of truncated cone forms that expand and contract along the vertical axis. This repetition creates a sculptural silhouet...",
    "description": "ARCHE is composed of a rhythmic stack of truncated cone forms that expand and contract along the vertical axis. This repetition creates a sculptural silhouette, giving the piece the presence of a small architectural object within the space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE-1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE-1.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a subtly tapered edge, opening outward like an inverted funnel. Its clean and flat surface provides a compact area for drinks, books, or small decorative items.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE 3-2.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are formed by a sequence of stacked truncated cones that expand and contract rhythmically, creating a balanced and visually dynamic structure. Cast as a continuous composite form, the table offers smooth surfaces and a solid, stable presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ARCHE 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/arche"
  },
  {
    "id": "bplus-282",
    "bplusId": 282,
    "sku": "ST061",
    "name": "CRUX",
    "slug": "crux",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W355 x D355 x H580 mm",
    "shortDescription": "CRUX is defined by the contrast between two fundamental volumes. The upper section opens like a rounded bowl, while the base narrows into a solid and grounde...",
    "description": "CRUX is defined by the contrast between two fundamental volumes. The upper section opens like a rounded bowl, while the base narrows into a solid and grounded support, creating a clear point of balance at the center. The transition between these forms gives the piece a sense of stability and structural clarity.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features softly rounded edges that create a solid and balanced appearance. Its flat surface provides a practical area for placing drinks, books, or small decorative objects while maintaining the table’s clean and minimal look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX 2.jpg"
      },
      {
        "title": "Base",
        "description": "The body and base are formed as a continuous volume crafted from composite material. The form gently narrows at the junction between the upper bowl-like volume and the base, creating a clear visual transition. The base gradually widens toward the bottom, providing stability and reinforcing the table’s grounded presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CRUX 3 (1)-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/crux"
  },
  {
    "id": "bplus-281",
    "bplusId": 281,
    "sku": "ST023",
    "name": "LUNA",
    "slug": "lunatable",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W578 x D502 x H625 mm",
    "shortDescription": "LUNA stands out with its sharp geometric form and balanced proportions. The design is composed of faceted planes that form a multi-sided structure, narrowing...",
    "description": "LUNA stands out with its sharp geometric form and balanced proportions. The design is composed of faceted planes that form a multi-sided structure, narrowing at the center to create a strong visual focal point. This configuration gives the piece both stability and a dynamic presence, as if two geometric volumes meet at a point of equilibrium.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA-thumbnail-1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA-thumbnail-1.jpg"
    ],
    "highlights": [
      {
        "title": "Body",
        "description": "Crafted from composite material, LUNA allows for crisp edges and smooth planar surfaces to be expressed with precision.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA 4-1.jpg"
      },
      {
        "title": "Base",
        "description": "With its compact scale and bold color presence, the table easily becomes a striking accent piece in lounge areas, living rooms, or contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA 5-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lunatable"
  },
  {
    "id": "bplus-279",
    "bplusId": 279,
    "sku": "ST062",
    "name": "PYLO",
    "slug": "pylo",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W483 x D395 x H460 mm",
    "shortDescription": "PYLO is conceived as a softened solid, where rigid edges dissolve into fluid curves. Its tabletop features an irregular outline that feels natural and sponta...",
    "description": "PYLO is conceived as a softened solid, where rigid edges dissolve into fluid curves. Its tabletop features an irregular outline that feels natural and spontaneous, almost as if the form has been gradually shaped by time.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PYLO (1).jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PYLO (1).jpg"
    ],
    "highlights": [
      {
        "title": "Body",
        "description": "Cast as a single volume from composite material, the design allows for continuous, seamless surfaces that flow smoothly from top to base. The form subtly tapers toward the bottom, creating a grounded yet visually light presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PYLO 2 (1)-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pylo"
  },
  {
    "id": "bplus-277",
    "bplusId": 277,
    "sku": "CT140",
    "name": "OSSA",
    "slug": "ossa",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W670 x D670 x H610 mm",
    "shortDescription": "OSSA stands out with its slender silhouette and smooth transition from base to tabletop. The gently tapered center creates a continuous curve, giving the pie...",
    "description": "OSSA stands out with its slender silhouette and smooth transition from base to tabletop. The gently tapered center creates a continuous curve, giving the piece a sense of lightness and balance. Minimal yet sculptural, the design introduces a refined presence within the space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA-1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA-1.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a slim profile with softly rounded edges, creating a light and balanced appearance above the base. The composite surface with natural stone-like veining adds a refined material expression while providing space for drinks, books, or small decorative objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA 2.jpg"
      },
      {
        "title": "Base",
        "description": "The body and base are formed as a continuous volume crafted from composite material. The form gently tapers at the center before widening toward the base, creating a smooth and flowing silhouette. The flared bottom enhances stability while emphasizing the table’s elegant and sculptural character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OSSA 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ossa"
  },
  {
    "id": "bplus-275",
    "bplusId": 275,
    "sku": "ST055",
    "name": "KARO",
    "slug": "karo",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W385 x D385 x H455 mm • 20 kg",
    "shortDescription": "KARO features a simple yet sculptural form defined by its gently tapered center and widened top and base. The silhouette resembles an hourglass, where symmet...",
    "description": "KARO features a simple yet sculptural form defined by its gently tapered center and widened top and base. The silhouette resembles an hourglass, where symmetrical curves create a balanced and fluid visual rhythm.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO-thumnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO-thumnail.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a clean, flat surface that provides a stable and practical area for everyday use. The composite material with stone-like veining adds a refined material expression while offering space for drinks, books, or small decorative objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO 2.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are formed as a continuous volume crafted from composite material. The form gently tapers at the center before widening toward the top and bottom, creating a balanced and stable structure. Soft curves combined with natural stone-like patterns give the piece a minimalist yet sculptural presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KARO 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/karo"
  },
  {
    "id": "bplus-274",
    "bplusId": 274,
    "sku": "ST057",
    "name": "STRATA",
    "slug": "strata",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W380 x D380 x H480 mm",
    "shortDescription": "STRATA draws inspiration from natural geological layers formed over time. Its body is composed of rhythmic stacked forms that evoke stratified rock shaped by...",
    "description": "STRATA draws inspiration from natural geological layers formed over time. Its body is composed of rhythmic stacked forms that evoke stratified rock shaped by erosion and pressure. The repeated faceted surfaces create visual depth, giving the piece a bold yet sculptural presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop features a subtly beveled edge that gives it a solid and substantial appearance. Its surface offers just enough space for everyday items such as a drink, a book, or small decorative objects while maintaining balance with the sculptural base below.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA 2.jpg"
      },
      {
        "title": "Body",
        "description": "The body and base are formed as a continuous sculptural volume made from composite material, allowing the stacked geometric layers and sharp beveled surfaces to be expressed clearly. This rhythmic structure evokes natural geological strata, adding depth and character. The form gradually widens toward the bottom, creating a stable foundation and reinforcing the table’s sculptural presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STRATA 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/strata"
  },
  {
    "id": "bplus-273",
    "bplusId": 273,
    "sku": "CT139",
    "name": "MORA",
    "slug": "mora",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W495 x D495 x H620 mm",
    "shortDescription": "MORA was conceived from the idea of a continuous flow. Its slender base gently curves upward, lifting the round tabletop as if in one uninterrupted motion. T...",
    "description": "MORA was conceived from the idea of a continuous flow. Its slender base gently curves upward, lifting the round tabletop as if in one uninterrupted motion. The soft, sculptural form gives the piece a sense of lightness and balance while maintaining a stable structure.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The round tabletop is proportioned for simplicity and practicality. Its clean, flat surface highlights the natural beauty of the material while providing just enough space for drinks, books, or small decorative objects.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA 3.jpg"
      },
      {
        "title": "Body",
        "description": "The column is the defining feature of the design, tapering smoothly from the tabletop down to the base. Its fluid curve creates a sense of lightness and elegance, giving the table a sculptural character that stands out within the space.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA 4.jpg"
      },
      {
        "title": "Base",
        "description": "The base gently flares outward to provide stability for the entire structure. This soft expansion visually balances the slender column above while ensuring the table remains sturdy and grounded.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MORA 5-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mora"
  },
  {
    "id": "bplus-272",
    "bplusId": 272,
    "sku": "T003-4-OB7Q",
    "name": "T003-4",
    "slug": "t003-4",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Chair features a softly sculpted upholstered seat that creates a smooth and continuous silhouette. The curved backrest and subtle seat contour provide ergono...",
    "description": "Chair features a softly sculpted upholstered seat that creates a smooth and continuous silhouette. The curved backrest and subtle seat contour provide ergonomic support while maintaining a minimal visual profile. Its five-star swivel base with casters ensures stability and effortless movement throughout the workspace.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-t003-4-thumb2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-t003-4-thumb2"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/t003-4"
  },
  {
    "id": "bplus-270",
    "bplusId": 270,
    "sku": "TB002",
    "name": "COSMOS C",
    "slug": "cosmos-c",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Bar Table",
    "dimensions": "W600 x D600 x H985 mm",
    "shortDescription": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "description": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS C-1.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS C-1.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop is crafted from natural wood with a smooth finish that highlights the organic grain pattern.\nSoftly rounded edges create a warm, refined look suitable for modern and contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL.png"
      },
      {
        "title": "Base",
        "description": "The table features a solid metal pedestal with a four-leg star base, providing excellent stability and durability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL C.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cosmos-c"
  },
  {
    "id": "bplus-269",
    "bplusId": 269,
    "sku": "CT042",
    "name": "NOAH 600",
    "slug": "noah-600",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H386 mm • 10 kg",
    "shortDescription": "A contemporary round coffee table with a smooth, refined surface and a sculptural black metal base, offering a harmonious balance of softness and structure f...",
    "description": "A contemporary round coffee table with a smooth, refined surface and a sculptural black metal base, offering a harmonious balance of softness and structure for modern living spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-noah600-thumb-1.pr-noah600-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-noah600-thumb-1.pr-noah600-thumb"
    ],
    "highlights": [
      {
        "title": "Sculpted Tabletop Structure",
        "description": "The round tabletop features a smooth, refined surface, gently elevated by an intriguing supporting frame beneath. This thoughtful construction highlights the table’s sculptural quality, allowing the surface to appear light while remaining firmly grounded.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-noah-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/noah-600"
  },
  {
    "id": "bplus-267",
    "bplusId": 267,
    "sku": "BN015",
    "name": "LUMINO 2050 BENCH",
    "slug": "lumino-bench",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W2050 x D500 x H450 mm",
    "shortDescription": "Lumino Bench is a refined supporting piece defined by simplicity and strength. Its powder-coated metal frame and linear slatted seat create a light, durable ...",
    "description": "Lumino Bench is a refined supporting piece defined by simplicity and strength. Its powder-coated metal frame and linear slatted seat create a light, durable form that pairs naturally with the Lumino table, offering flexible seating for both indoor lounges and outdoor gathering spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-17.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-17.jpg"
    ],
    "highlights": [
      {
        "title": "Top Surface",
        "description": "Aluminum slatted seat surface designed for durability and outdoor performance.\nThe powder-coated finish provides weather resistance while keeping the bench lightweight, clean, and easy to maintain.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BENCH-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-bench"
  },
  {
    "id": "bplus-266",
    "bplusId": 266,
    "sku": "SF105",
    "name": "LUMINO 2 SEATS (Padded Seat)",
    "slug": "lumino-2-seater",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W1570 x D750 x H795 mm",
    "shortDescription": "This two-seater outdoor lounge chair features a lightweight aluminum frame designed for durability and weather resistance. Generously cushioned seating and b...",
    "description": "This two-seater outdoor lounge chair features a lightweight aluminum frame designed for durability and weather resistance. Generously cushioned seating and backrests provide a relaxed lounging experience for two, while maintaining a clean, modern silhouette. As part of a coordinated outdoor set, the chair pairs seamlessly with other pieces to create a cohesive and comfortable outdoor living space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-1.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest frame",
        "description": "Powder-coated metal frame with a rounded handle, adding a soft visual accent and making it easy to move.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 6.jpg"
      },
      {
        "title": "Armrest",
        "description": "Rounded armrest, bringing warmth in material and enhanced comfort in use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 4.jpg"
      },
      {
        "title": "Seat structure",
        "description": "Frame structure with horizontal slats, forming a sturdy surface with a clean visual rhythm.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-2-seater"
  },
  {
    "id": "bplus-265",
    "bplusId": 265,
    "sku": "LC149",
    "name": "LUMINO LOUNGE CHAIR (Padded Seat)",
    "slug": "lumino-lounge-chair",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge chair",
    "dimensions": "W755 x D750 x H795 mm",
    "shortDescription": "This outdoor lounge chair features a lightweight aluminum frame designed for durability and weather resistance. Generously cushioned seat and backrest provid...",
    "description": "This outdoor lounge chair features a lightweight aluminum frame designed for durability and weather resistance. Generously cushioned seat and backrest provide a relaxed lounging experience while maintaining a clean, modern silhouette. As part of a coordinated outdoor set, the chair pairs seamlessly with other pieces to create a cohesive outdoor living space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest frame",
        "description": "Powder-coated metal frame with a rounded handle, adding a soft visual accent and making it easy to move.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 6.jpg"
      },
      {
        "title": "Armrest",
        "description": "Rounded armrest, bringing warmth in material and enhanced comfort in use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 4.jpg"
      },
      {
        "title": "Seat structure",
        "description": "Frame structure with horizontal slats, forming a sturdy surface with a clean visual rhythm.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-lounge-chair"
  },
  {
    "id": "bplus-264",
    "bplusId": 264,
    "sku": "CH115",
    "name": "LUMINO CHAIR B",
    "slug": "lumino-dining-chair",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining chair",
    "dimensions": "W650 x D575 x H770 mm",
    "shortDescription": "Lumino Dining Chair balances comfort and clarity in a lightweight, modern form.",
    "description": "Lumino Dining Chair balances comfort and clarity in a lightweight, modern form.\nWith a powder-coated metal frame and gently slatted seat and backrest, it offers durable support while maintaining an open, relaxed feel—ideal for contemporary dining spaces both indoors and outdoors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-3.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-3.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest frame",
        "description": "Powder-coated metal frame with a rounded handle, adding a soft visual accent and making it easy to move.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 6.jpg"
      },
      {
        "title": "Armrest",
        "description": "Rounded armrest, bringing warmth in material and enhanced comfort in use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 4.jpg"
      },
      {
        "title": "Seat structure",
        "description": "Frame structure with horizontal slats, forming a sturdy surface with a clean visual rhythm.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO LOUNGE CHAIR 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-dining-chair"
  },
  {
    "id": "bplus-263",
    "bplusId": 263,
    "sku": "CT133",
    "name": "LUMINO 800 COFFEE TABLE",
    "slug": "lumino-coffee-table-square",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee table",
    "dimensions": "W800 x D800 x H405 mm",
    "shortDescription": "Lumino Coffee Table is a low, understated piece designed to anchor relaxed outdoor settings. Its lightweight powder-coated metal frame and clean proportions ...",
    "description": "Lumino Coffee Table is a low, understated piece designed to anchor relaxed outdoor settings. Its lightweight powder-coated metal frame and clean proportions provide a durable, practical surface while maintaining a calm, modern aesthetic that pairs effortlessly with lounge seating indoors or out.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-8.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-8.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Solid metal tabletop with a smooth powder-coated finish for durability and weather resistance.\nThe clean flat surface creates a minimal look while ensuring easy maintenance and long-term use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO COFFE TBALE 2-1.jpg"
      },
      {
        "title": "Base",
        "description": "Tubular steel legs formed in a continuous frame with rounded corners for a smooth and durable structure.\nThe powder-coated finish provides stability and resistance, making it suitable for both indoor and outdoor use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO COFFE TBALE 3-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-coffee-table-square"
  },
  {
    "id": "bplus-262",
    "bplusId": 262,
    "sku": "TB048",
    "name": "LUMINO 2400 TABLE",
    "slug": "lumino-dining-table-medium",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining table",
    "dimensions": "W2400 x D1050 x H750 mm • 20 kg",
    "shortDescription": "LUMINO Dining Table – 2400 stands out with its sleek elongated form and refined minimalist lines. The slatted tabletop paired with a powder-coated metal fram...",
    "description": "LUMINO Dining Table – 2400 stands out with its sleek elongated form and refined minimalist lines. The slatted tabletop paired with a powder-coated metal frame offers durability, easy maintenance, and a contemporary feel. Generously sized, it’s perfect for gatherings and shared moments—bringing both style and warmth to your dining space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-14.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Thumbnail-14.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Slatted metal tabletop with powder-coated finish for durability and weather resistance.\nThe clean linear design allows easy maintenance while maintaining a light and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 4-4.jpg"
      },
      {
        "title": "Base",
        "description": "Powder-coated steel legs with rounded tubular construction provide strong and stable support.\nThe integrated frame connection ensures durability while maintaining a clean and minimal look suitable for indoor and outdoor use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINO BAR TABLE 3-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lumino-dining-table-medium"
  },
  {
    "id": "bplus-261",
    "bplusId": 261,
    "sku": "BED-10-OWWS",
    "name": "BED 10",
    "slug": "bed-10",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-10"
  },
  {
    "id": "bplus-260",
    "bplusId": 260,
    "sku": "BED-9-OYPR",
    "name": "BED 9",
    "slug": "bed-9",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-9"
  },
  {
    "id": "bplus-259",
    "bplusId": 259,
    "sku": "BED-8-P0JU",
    "name": "BED 8",
    "slug": "bed-8",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-8"
  },
  {
    "id": "bplus-258",
    "bplusId": 258,
    "sku": "BED-7-P2EW",
    "name": "BED 7",
    "slug": "bed-7",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-7"
  },
  {
    "id": "bplus-257",
    "bplusId": 257,
    "sku": "BED-6-P4A4",
    "name": "BED 6",
    "slug": "bed-6",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-6"
  },
  {
    "id": "bplus-256",
    "bplusId": 256,
    "sku": "BED-5-P640",
    "name": "BED 5",
    "slug": "bed-5",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-5"
  },
  {
    "id": "bplus-255",
    "bplusId": 255,
    "sku": "BED-4-P7Y5",
    "name": "BED 4",
    "slug": "bed-4",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-4"
  },
  {
    "id": "bplus-254",
    "bplusId": 254,
    "sku": "BED-3-P9RG",
    "name": "BED 3",
    "slug": "bed-3",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-3"
  },
  {
    "id": "bplus-253",
    "bplusId": 253,
    "sku": "BED-2-PBK1",
    "name": "BED 2",
    "slug": "bed-2",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-2"
  },
  {
    "id": "bplus-252",
    "bplusId": 252,
    "sku": "BED-1-PDCP",
    "name": "BED 1",
    "slug": "bed-1",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed-1"
  },
  {
    "id": "bplus-251",
    "bplusId": 251,
    "sku": "NIGHT-STAND-3-PF5J",
    "name": "NIGHT STAND 3",
    "slug": "night-stand-3",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Nightstand with Drawer",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Nightstand with Drawer"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/night-stand-3"
  },
  {
    "id": "bplus-250",
    "bplusId": 250,
    "sku": "NIGHT-STAND-2-PGYN",
    "name": "NIGHT STAND 2",
    "slug": "night-stand-2",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Description",
    "description": "Description",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Nightstand with Drawer",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/Nightstand with Drawer"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/night-stand-2"
  },
  {
    "id": "bplus-249",
    "bplusId": 249,
    "sku": "OL-210-HB-PIS8",
    "name": "OL 210 HB",
    "slug": "ol210-hb",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Chair features a fully upholstered shell with soft contours that provide ergonomic support and enhanced sitting comfort. The curved backrest and integrated a...",
    "description": "Chair features a fully upholstered shell with soft contours that provide ergonomic support and enhanced sitting comfort. The curved backrest and integrated arm form create a cocooning effect, encouraging a relaxed yet productive posture.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol210hb-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol210hb-thumb"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ol210-hb"
  },
  {
    "id": "bplus-248",
    "bplusId": 248,
    "sku": "OL-206-HR-PKMZ",
    "name": "OL 206 HR",
    "slug": "ol-206-hr",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "The chair is designed with a streamlined upholstered seat and an ergonomic backrest that supports long working sessions. The swivel base with smooth-rolling ...",
    "description": "The chair is designed with a streamlined upholstered seat and an ergonomic backrest that supports long working sessions. The swivel base with smooth-rolling casters allows effortless mobility and flexible movement across the workspace.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol206hr-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol206hr-thump"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ol-206-hr"
  },
  {
    "id": "bplus-247",
    "bplusId": 247,
    "sku": "OL-206-FR-PMHB",
    "name": "OL 206 FR",
    "slug": "ol206-fr",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "The chair is designed with a streamlined upholstered seat and an ergonomic backrest that supports long working sessions. The swivel base with smooth-rolling ...",
    "description": "The chair is designed with a streamlined upholstered seat and an ergonomic backrest that supports long working sessions. The swivel base with smooth-rolling casters allows effortless mobility and flexible movement across the workspace.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol206fr-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol206fr-thump"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ol206-fr"
  },
  {
    "id": "bplus-246",
    "bplusId": 246,
    "sku": "W201-05-POBK",
    "name": "W201-05",
    "slug": "w201-05",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Chair features a softly contoured upholstered shell that offers ergonomic support and a welcoming seating experience. The integrated armrest form and gently ...",
    "description": "Chair features a softly contoured upholstered shell that offers ergonomic support and a welcoming seating experience. The integrated armrest form and gently curved backrest promote natural posture during extended work sessions.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-w201-05-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-w201-05-thump"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/w201-05"
  },
  {
    "id": "bplus-245",
    "bplusId": 245,
    "sku": "OL-205-PQ5T",
    "name": "OL 205",
    "slug": "ol205",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Chair is defined by its slim upholstered seat with horizontal stitching that adds subtle texture and visual structure. The open armrest design keeps the silh...",
    "description": "Chair is defined by its slim upholstered seat with horizontal stitching that adds subtle texture and visual structure. The open armrest design keeps the silhouette light while maintaining ergonomic support for everyday tasks. A swivel base with smooth casters allows fluid movement and flexible positioning within the workspace.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol205-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ol205-thump"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ol205"
  },
  {
    "id": "bplus-243",
    "bplusId": 243,
    "sku": "SLS-670-PS1G",
    "name": "SLS 670",
    "slug": "sls-670",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Work Desk",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SL 670 is designed as a focused workstation with integrated acoustic side panels that enhance privacy and reduce visual distraction. The natural wood tableto...",
    "description": "SL 670 is designed as a focused workstation with integrated acoustic side panels that enhance privacy and reduce visual distraction. The natural wood tabletop brings warmth to the structured metal frame, creating a balanced and professional aesthetic.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-sl670-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-sl670-thumb1"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sls-670"
  },
  {
    "id": "bplus-242",
    "bplusId": 242,
    "sku": "SLS-770-PTWG",
    "name": "SLS 770",
    "slug": "sls-770",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Work Desk",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "SLS 770 is designed with a clean linear structure that emphasizes efficiency and visual clarity. The spacious tabletop provides a comfortable working surface...",
    "description": "SLS 770 is designed with a clean linear structure that emphasizes efficiency and visual clarity. The spacious tabletop provides a comfortable working surface, while the streamlined frame keeps the overall form light and organized.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-sl770-thumb2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-sl770-thumb2"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sls-770"
  },
  {
    "id": "bplus-241",
    "bplusId": 241,
    "sku": "MES003",
    "name": "INFINITIVE",
    "slug": "infinitive",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Collaborative Furniture Set",
    "dimensions": "W1350 x D400 x H1850 mm",
    "shortDescription": "Infinitive is designed as a flexible partition system that supports focused teamwork and adaptive workspace layouts. The soft acoustic panel surface helps re...",
    "description": "Infinitive is designed as a flexible partition system that supports focused teamwork and adaptive workspace layouts. The soft acoustic panel surface helps reduce noise while visually defining collaborative zones without fully enclosing the space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/INFINITIVE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/INFINITIVE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered surface",
        "description": "The upholstered surface helps soften both sound and atmosphere, paired with a solid wood base that adds structural clarity and warmth.",
        "imageUrl": null
      },
      {
        "title": "Rounded form",
        "description": "Its rounded form and balanced proportions create a calm backdrop that supports focus without interrupting the spatial flow.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/infinitive"
  },
  {
    "id": "bplus-240",
    "bplusId": 240,
    "sku": "COMET-PY07",
    "name": "COMET",
    "slug": "comet",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Product draft ",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "The Comet Bench streaks into your interior like a celestial body in motion - sleek, elongated, and undeniably bold. Its pillowy form rests lightly on slender...",
    "description": "The Comet Bench streaks into your interior like a celestial body in motion - sleek, elongated, and undeniably bold. Its pillowy form rests lightly on slender metal legs, while the elevated side tray rises like a satellite in orbit. With a design that is both futuristic and punk-spirited, the Comet Bench is not just a place to pause, but a statement of energy and otherworldly style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-comet-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-comet-thump2"
    ],
    "highlights": [
      {
        "title": "Futuristic Attitude, Sculpted Comfort",
        "description": "A bold fusion of motion and attitude, the Comet Bench captures the spirit of forward-thinking design. Its elongated, cushioned body contrasts with slim metal legs, while the elevated side table introduces a striking, orbital detail.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/comet"
  },
  {
    "id": "bplus-239",
    "bplusId": 239,
    "sku": "DORAYAKI-PZYZ",
    "name": "DORAYAKI",
    "slug": "dorayaki",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W830 x D855 x H750 mm",
    "shortDescription": "Dorayaki is characterized by its layered cushion structure and rounded silhouette, inspired by soft, stacked forms. The generously upholstered seat provides ...",
    "description": "Dorayaki is characterized by its layered cushion structure and rounded silhouette, inspired by soft, stacked forms. The generously upholstered seat provides deep comfort, while the integrated side table adds functional convenience.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DORAYAKI-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DORAYAKI-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Seat",
        "description": "The generously upholstered seat and backrest form a low, embracing profile, supported by solid wooden legs that ground the design. An integrated side surface introduces added functionality without disrupting the relaxed silhouette.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DORAYAKI 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/dorayaki"
  },
  {
    "id": "bplus-238",
    "bplusId": 238,
    "sku": "PO068",
    "name": "CHEESE",
    "slug": "cheese",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W465 x D465 x H435 mm",
    "shortDescription": "Cheese Pouf features a compact cubic form with softly rounded edges that create a playful yet refined silhouette. The fully upholstered surface provides a co...",
    "description": "Cheese Pouf features a compact cubic form with softly rounded edges that create a playful yet refined silhouette. The fully upholstered surface provides a comfortable seating experience while maintaining a clean and minimal profile.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHEESE-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHEESE-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Storage",
        "description": "Soft upholstered cushioning with a practical lift-top design offers everyday comfort while discreetly maximizing hidden storage space.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHEESE 2.jpg"
      },
      {
        "title": "Wooden Base",
        "description": "The smoothly finished wooden base introduces a warm accent, grounding the design with stability while maintaining a light and elegant appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHEESE 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cheese"
  },
  {
    "id": "bplus-237",
    "bplusId": 237,
    "sku": "PUFFIN-Q40F",
    "name": "PUFFIN",
    "slug": "puffin",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "The Puffin Pouf is inspired by a little seabird known for its round form, upright stance, and whimsical character. Just like its namesake, this pouf feels li...",
    "description": "The Puffin Pouf is inspired by a little seabird known for its round form, upright stance, and whimsical character. Just like its namesake, this pouf feels lighthearted yet poised: a perfectly rounded cushion that offers cloud-like softness, balanced on a sleek swivel base with a modern edge.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PUFFIN-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PUFFIN-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Seat",
        "description": "The rounded upholstered seat is paired with a low, curved backrest, creating a relaxed posture without enclosing the user.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/puffin"
  },
  {
    "id": "bplus-236",
    "bplusId": 236,
    "sku": "ORBIT-Q613",
    "name": "ORBIT",
    "slug": "orbit",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "With its balance of minimal elegance and futuristic edge, this design goes beyond seating—it becomes a punky art object that transforms any space into a conv...",
    "description": "With its balance of minimal elegance and futuristic edge, this design goes beyond seating—it becomes a punky art object that transforms any space into a conversation starter.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OBRIT-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OBRIT-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Volume",
        "description": "The circular upholstered volume is elevated by a slim metal structure, creating a balanced and open composition. An attached tabletop hovers lightly above the seat, adding convenience without interrupting the overall form.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/orbit"
  },
  {
    "id": "bplus-235",
    "bplusId": 235,
    "sku": "PO050",
    "name": "DANGO",
    "slug": "dango-",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W600 x D600 x H425 mm",
    "shortDescription": "Lighthearted yet elegant, the Dango Chair is designed to bring a touch of sweetness and serenity into any space—like a small indulgence you can return to eve...",
    "description": "Lighthearted yet elegant, the Dango Chair is designed to bring a touch of sweetness and serenity into any space—like a small indulgence you can return to every day.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DANGO-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DANGO-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Form",
        "description": "The generously upholstered form emphasizes tactile comfort, while the exposed wood structure introduces warmth and structural clarity. Subtle seam detailing defines the surface without breaking the continuity of the silhouette.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/dango-"
  },
  {
    "id": "bplus-233",
    "bplusId": 233,
    "sku": "CHAIR-QA2R",
    "name": "CHAIR",
    "slug": "chair",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "CHAIR là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "CHAIR là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHAIR.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHAIR.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/chair"
  },
  {
    "id": "bplus-232",
    "bplusId": 232,
    "sku": "SL004",
    "name": "ARDEN 2S",
    "slug": "arden2s",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W1230 x D540 x H1057 mm",
    "shortDescription": "Chair features a softly upholstered backrest and seat shell that offers comfort while maintaining a clean, contemporary profile.",
    "description": "Chair features a softly upholstered backrest and seat shell that offers comfort while maintaining a clean, contemporary profile.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ERGO2S thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ERGO2S thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Shell",
        "description": "The continuous upholstered shell provides gentle back support while maintaining a clean, horizontal profile.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/arden2s"
  },
  {
    "id": "bplus-231",
    "bplusId": 231,
    "sku": "CO010",
    "name": "RIN",
    "slug": "rin",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Bar Table",
    "dimensions": "W1300 x D550 x H1040 mm",
    "shortDescription": "Rin features a slim solid wood top supported by a lightweight metal frame, creating a clean and contemporary profile. The integrated lower rail adds structur...",
    "description": "Rin features a slim solid wood top supported by a lightweight metal frame, creating a clean and contemporary profile. The integrated lower rail adds structural stability while introducing a subtle geometric accent.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RIN-3.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RIN-3.jpg"
    ],
    "highlights": [
      {
        "title": "Light Structure",
        "description": "The clean-lined legs extend seamlessly into a continuous footrest ring, adding both stability and functional support. Its elevated, compact proportion makes it well-suited for bar settings, cafés, or collaborative work areas.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RIN-4.jpg"
      },
      {
        "title": "Base",
        "description": "The slim metal frame is designed with clean vertical lines and a curved support bar for added stability.\nPowder-coated finishing ensures durability while maintaining a light and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RIN-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/rin"
  },
  {
    "id": "bplus-230",
    "bplusId": 230,
    "sku": "SL003",
    "name": "ARDEN",
    "slug": "arden",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W460 x D540 x H1057 mm",
    "shortDescription": "Chair is designed with a softly curved upholstered seat that provides comfort while maintaining a refined silhouette.",
    "description": "Chair is designed with a softly curved upholstered seat that provides comfort while maintaining a refined silhouette.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ERGO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ERGO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Shell",
        "description": "The upholstered shell is supported by a slim metal frame that maintains visual lightness while ensuring stability. A circular footrest reinforces the structure and supports a relaxed sitting posture.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/arden"
  },
  {
    "id": "bplus-229",
    "bplusId": 229,
    "sku": "CROSS-QSYU",
    "name": "CROSS",
    "slug": "cross",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Product draft ",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Cross is defined by its slim vertical profile and distinctive cross-shaped base that ensures stability with minimal visual weight.",
    "description": "Cross is defined by its slim vertical profile and distinctive cross-shaped base that ensures stability with minimal visual weight.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cross-thumb1.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cross-thumb1.jpg"
    ],
    "highlights": [
      {
        "title": "Height-adjustable Mechanism",
        "description": "The height-adjustable mechanism allows flexible use beside sofas, lounge chairs, or work areas. Its cross-shaped base provides stability while maintaining a light and balanced visual expression.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cross-h1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cross"
  },
  {
    "id": "bplus-228",
    "bplusId": 228,
    "sku": "TB009",
    "name": "ORION",
    "slug": "orion",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W900 x D900 x H740 mm",
    "shortDescription": "Inspired by the Orion Nebula, one of the most beautiful and easily visible nebulae in the night sky.",
    "description": "Inspired by the Orion Nebula, one of the most beautiful and easily visible nebulae in the night sky.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-orion-thumb.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-orion-thumb.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The stone tabletop features natural veining that adds elegance and visual depth.\nA slim metal pedestal with a round base provides stable support while keeping the design clean and modern.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ORION-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/orion"
  },
  {
    "id": "bplus-226",
    "bplusId": 226,
    "sku": "BED-QXEZ",
    "name": "BED",
    "slug": "bed",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "BED là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "BED là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/bed.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bed"
  },
  {
    "id": "bplus-225",
    "bplusId": 225,
    "sku": "NIGHT-STAND-QZ8V",
    "name": "NIGHT STAND",
    "slug": "night-stand",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "NIGHT STAND là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "NIGHT STAND là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TAB.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TAB.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/night-stand"
  },
  {
    "id": "bplus-224",
    "bplusId": 224,
    "sku": "PUMPKIN-R12A",
    "name": "PUMPKIN",
    "slug": "pumpkin",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Like a fairytale come to life, Pumpkin pouf cradles you with the same gentle magic that carried Cinderella to the ball. Its plump, cloud-like curves and buoy...",
    "description": "Like a fairytale come to life, Pumpkin pouf cradles you with the same gentle magic that carried Cinderella to the ball. Its plump, cloud-like curves and buoyant softness invite you to sink in, feeling both indulged and uplifted. The silhouette, playful yet refined, recalls the charm of a pumpkin — round, full, and irresistibly inviting.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PUMPKIN-thumnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PUMPKIN-thumnail.jpg"
    ],
    "highlights": [
      {
        "title": "Legs",
        "description": "A solid metal structure with strong load-bearing capacity, providing stability and a modern aesthetic to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PUMPKIN-1.jpg"
      },
      {
        "title": "Upholstered Seat",
        "description": "A seating surface covered in fabric or leather, combined with a soft cushioning layer to enhance comfort and user experience. The design balances aesthetics with functionality, providing a comfortable seating feel.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PUMPKIN-2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pumpkin"
  },
  {
    "id": "bplus-223",
    "bplusId": 223,
    "sku": "PO049",
    "name": "MEADOW",
    "slug": "meadow",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W600 x D600 x H420 mm",
    "shortDescription": "The Meadow pouf brings a breath of calm into any interior, echoing the quiet serenity of open fields. Its clean, square silhouette rests gently on slender le...",
    "description": "The Meadow pouf brings a breath of calm into any interior, echoing the quiet serenity of open fields. Its clean, square silhouette rests gently on slender legs, creating a sense of grounded simplicity while offering inviting comfort. Designed to feel light, natural, and timeless, this pouf a soft landscape element that soothes the room like a patch of meadow under the open sky.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MEADOW-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MEADOW-thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/meadow"
  },
  {
    "id": "bplus-222",
    "bplusId": 222,
    "sku": "PO005",
    "name": "SUB HUB",
    "slug": "sub-hub",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W600 x D600 x H420 mm",
    "shortDescription": "The Sub Hub Pouf takes its strength from the quiet resilience of stone. Its squared form and solid stance recall the grounded presence of a rock embedded in ...",
    "description": "The Sub Hub Pouf takes its strength from the quiet resilience of stone. Its squared form and solid stance recall the grounded presence of a rock embedded in the landscape, while the gently cushioned top softens the silhouette with inviting comfort. Supported by slim, sturdy legs, it balances mountain-like solidity with modern lightness, making it a versatile hub for rest, gathering, or simply anchoring the room with a touch of elemental calm.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SUB HUB thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SUB HUB thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sub-hub"
  },
  {
    "id": "bplus-221",
    "bplusId": 221,
    "sku": "CH054",
    "name": "MM01",
    "slug": "mm01",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W512 x D620 x H855 mm",
    "shortDescription": "With its exemplary design, the MM01 Chair sets a clear aesthetic benchmark for the space. Refined proportions and disciplined detailing give the piece a time...",
    "description": "With its exemplary design, the MM01 Chair sets a clear aesthetic benchmark for the space. Refined proportions and disciplined detailing give the piece a timeless, authoritative presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mm01-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mm01-thump"
    ],
    "highlights": [
      {
        "title": "Frame",
        "description": "An elegantly contoured frame introduces an almost intricate quality, carefully balanced by a restrained and refined simplicity. The result feels considered, never excessive.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mm01-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mm01"
  },
  {
    "id": "bplus-220",
    "bplusId": 220,
    "sku": "CT116",
    "name": "OLEN",
    "slug": "olen",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W600 x D600 x H437 mm",
    "shortDescription": "Its compact scale allows the table to function as a flexible accent piece in both residential and lounge settings. Olen brings a subtle architectural express...",
    "description": "Its compact scale allows the table to function as a flexible accent piece in both residential and lounge settings. Olen brings a subtle architectural expression that enriches the space without overpowering surrounding furniture.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-olen-thumb2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-olen-thumb2"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Olen features a circular wood tabletop paired with a layered base structure that adds depth and visual rhythm. The vertical supports create a sense of lightness while maintaining a solid and stable foundation.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/olen"
  },
  {
    "id": "bplus-219",
    "bplusId": 219,
    "sku": "CT105",
    "name": "LIOR",
    "slug": "lior",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W800 x D800 x H353 mm",
    "shortDescription": "The warm wood surface adds natural texture, while the low-profile structure keeps the form grounded and inviting.",
    "description": "The warm wood surface adds natural texture, while the low-profile structure keeps the form grounded and inviting.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-lior-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-lior-thumb"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Liora is characterized by its wide circular tabletop and cross-leg base that create a strong yet balanced visual foundation.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/lior"
  },
  {
    "id": "bplus-218",
    "bplusId": 218,
    "sku": "CT065",
    "name": "NICK",
    "slug": "nick",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H435 mm",
    "shortDescription": "Its compact footprint and stable base make it ideal for modern living spaces, offering both elegance and functional usability. The design emphasizes symmetry...",
    "description": "Its compact footprint and stable base make it ideal for modern living spaces, offering both elegance and functional usability. The design emphasizes symmetry, stability, and contemporary luxury.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NICK.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NICK.png"
    ],
    "highlights": [
      {
        "title": "Table top",
        "description": "Nick Coffee Table presents a refined circular tabletop supported by a structured cross-base that emphasizes balance and stability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NICK 2-1.png"
      },
      {
        "title": "Base",
        "description": "Steel double pedestal with a three-leg base provides strong and stable support.\nMetal end caps add durability while keeping the design clean and modern.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NICK 3-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nick"
  },
  {
    "id": "bplus-217",
    "bplusId": 217,
    "sku": "CT063",
    "name": "JUDY",
    "slug": "judy",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H435 mm",
    "shortDescription": "Subtle metallic accents at the base introduce a touch of sophistication without overpowering the overall form.",
    "description": "Subtle metallic accents at the base introduce a touch of sophistication without overpowering the overall form.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JUDY.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JUDY.png"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Judy combines a refined round tabletop with a cross-base structure that highlights symmetry and visual balance .",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL-1.png"
      },
      {
        "title": "Base",
        "description": "The table base features a double metal pedestal with a four-leg support, providing excellent stability.\nMetal end caps add a refined detail while maintaining a clean and modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JUDY 3-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/judy"
  },
  {
    "id": "bplus-216",
    "bplusId": 216,
    "sku": "CH099",
    "name": "RYO",
    "slug": "ryo",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W630 x D618 x H820 mm",
    "shortDescription": "Ryo features a softly curved upholstered backrest that wraps around the seat, creating a comfortable and welcoming dining experience.",
    "description": "Ryo features a softly curved upholstered backrest that wraps around the seat, creating a comfortable and welcoming dining experience.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RYO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RYO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Lightweight Frame ",
        "description": "Rio Dining Chair is defined by its asymmetrical, softly curved backrest that wraps fluidly around the seat. Vertical channel detailing enhances the upholstery, adding subtle rhythm and depth to the form. The slender metal frame provides a light, supportive structure that contrasts elegantly with the cushioned surfaces.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ryo"
  },
  {
    "id": "bplus-215",
    "bplusId": 215,
    "sku": "HB01-RK2N",
    "name": "HB01",
    "slug": "hb01",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Product draft ",
    "dimensions": "W350 x D350 x H523 mm • 20 kg",
    "shortDescription": "The HB01 Side table is striking in character yet restrained in expression, it brings presence to the interior without visual excess.",
    "description": "The HB01 Side table is striking in character yet restrained in expression, it brings presence to the interior without visual excess.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hb01-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hb01-thump"
    ],
    "highlights": [
      {
        "title": "Base and tabletop",
        "description": "With a solid stone base and a slim stainless steel frame and tabletop, the HB01 table asserts a calm, grounded presence. Visually distinctive yet never excessive, it integrates effortlessly into the space.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hb01-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hb01"
  },
  {
    "id": "bplus-214",
    "bplusId": 214,
    "sku": "MABU-RMAZ",
    "name": "MABU",
    "slug": "mabu",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Product draft ",
    "dimensions": "W500 x D500 x H495 mm • 20 kg",
    "shortDescription": "Mabu introduces a unique personality. The design feels light and pleasing, making its presence a natural delight within the interior.",
    "description": "Mabu introduces a unique personality. The design feels light and pleasing, making its presence a natural delight within the interior.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mabu-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mabu-thump"
    ],
    "highlights": [
      {
        "title": "Frame",
        "description": "A bright, light-toned frame defines Mabu’s individuality. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mabu-hl2"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mabu"
  },
  {
    "id": "bplus-213",
    "bplusId": 213,
    "sku": "HS004",
    "name": "LEKA",
    "slug": "leka",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1670 x D720 x H1130 mm",
    "shortDescription": "Leka brings a fresh, uplifting note to your lounge space through a dynamic design that balances functionality with visual appeal.",
    "description": "Leka brings a fresh, uplifting note to your lounge space through a dynamic design that balances functionality with visual appeal.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LEKA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LEKA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "The backrest breaks away from rigid geometry with fluid lines and subtle punctuated details, further highlighting Leka’s playful and creative character.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/leka"
  },
  {
    "id": "bplus-212",
    "bplusId": 212,
    "sku": "HS021",
    "name": "LEGEN",
    "slug": "legen",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1000 x D670 x H1300 mm",
    "shortDescription": "Designed to anchor the space, the Legen Highback Sofa introduces a composed architectural presence. Its squared silhouette and integrated side panel shape a ...",
    "description": "Designed to anchor the space, the Legen Highback Sofa introduces a composed architectural presence. Its squared silhouette and integrated side panel shape a sense of privacy, where structure and comfort exist in quiet balance.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LEGEN thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LEGEN thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Legs",
        "description": "A squared silhouette and integrated side panel give the Legen highback sofa a grounded, architectural character. The enveloping form enhances comfort and privacy, resulting in a piece that feels both structured and inviting.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LEGEN 4.jpg"
      },
      {
        "title": "Upholstered Seat",
        "description": "Soft upholstered seating with subtle tufted segments pairs elegantly with the cylindrical backrest, delivering a refined sense of comfort and sophistication.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LEGEN 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/legen"
  },
  {
    "id": "bplus-211",
    "bplusId": 211,
    "sku": "NOFOOT-RT0X",
    "name": "NOFOOT",
    "slug": "nofoot",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1000 x D690 x H1300 mm • 20 kg",
    "shortDescription": "Nofoot Highback is designed as a compact lounge module with a high backrest that creates a sense of privacy and acoustic comfort. Nofoot Highback functions a...",
    "description": "Nofoot Highback is designed as a compact lounge module with a high backrest that creates a sense of privacy and acoustic comfort. Nofoot Highback functions as a quiet retreat element for modern offices and collaborative environments.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NOFOOT thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NOFOOT thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Structure",
        "description": "The fully upholstered structure forms a soft enclosure, supporting relaxed seating and focused moments within open spaces. Its floor-standing, leg-free base enhances visual stability and reinforces a grounded architectural presence.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nofoot"
  },
  {
    "id": "bplus-210",
    "bplusId": 210,
    "sku": "HS014",
    "name": "HEIBE",
    "slug": "heibe",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W2000 x D760 x H1300 mm",
    "shortDescription": "Its asymmetrical structure creates an intriguingly eye-catching presence, making Heibe a distinctive accent piece that delivers full functionality without co...",
    "description": "Its asymmetrical structure creates an intriguingly eye-catching presence, making Heibe a distinctive accent piece that delivers full functionality without compromise.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-heibe-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-heibe-thump"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "The open, irregular backrest structure enhances Heibe’s versatility while reducing any sense of enclosure, allowing the seat to feel more breathable and comfortable when in use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-heibe-h1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/heibe"
  },
  {
    "id": "bplus-209",
    "bplusId": 209,
    "sku": "HS020",
    "name": "JOHN",
    "slug": "john",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1625 x D870 x H1320 mm",
    "shortDescription": "Comforting, private, and versatile, the John highback sofa offers everything needed for a refined yet highly functional lounge setting. Its enveloping form s...",
    "description": "Comforting, private, and versatile, the John highback sofa offers everything needed for a refined yet highly functional lounge setting. Its enveloping form supports focused moments as well as relaxed conversation, making it a confident choice for elevated lounge environments.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JOHN thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JOHN thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Table",
        "description": "The integrated wooden tabletop adds warmth while enhancing everyday convenience.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JOHN 1.jpg"
      },
      {
        "title": "Legs",
        "description": "Slender metal legs with a sturdy structure create a balanced foundation, adding a minimalist yet sophisticated character to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JOHN 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/john"
  },
  {
    "id": "bplus-208",
    "bplusId": 208,
    "sku": "COSMOS-D-RZWQ",
    "name": "COSMOS D",
    "slug": "cosmos-d",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W790 x D790 x H730 mm",
    "shortDescription": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "description": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS D.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS D.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop is crafted from natural wood with a smooth finish that highlights the organic grain pattern.\nSoftly rounded edges create a warm, refined look suitable for modern and contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL D.png"
      },
      {
        "title": "Base",
        "description": "The table features a solid metal pedestal with a four-leg star base, providing excellent stability and durability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL D-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cosmos-d"
  },
  {
    "id": "bplus-206",
    "bplusId": 206,
    "sku": "COSMOS-E-S28T",
    "name": "COSMOS E",
    "slug": "cosmos-e",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W600 x D600 x H730 mm",
    "shortDescription": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "description": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS E.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS E.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop is crafted from natural wood with a smooth finish that highlights the organic grain pattern.\nSoftly rounded edges create a warm, refined look suitable for modern and contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL E-1.png"
      },
      {
        "title": "Base",
        "description": "The table features a solid metal pedestal with a four-leg star base, providing excellent stability and durability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL E.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cosmos-e"
  },
  {
    "id": "bplus-205",
    "bplusId": 205,
    "sku": "CT026",
    "name": "COSMOS A",
    "slug": "cosmos-a",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H450 mm",
    "shortDescription": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "description": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS A.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS A.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "Combined with the wooden tabletop, the design offers a balanced look suitable for modern interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS A-2.png"
      },
      {
        "title": "Base",
        "description": "The table features a solid metal pedestal with a four-leg star base, providing excellent stability and durability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS A-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cosmos-a"
  },
  {
    "id": "bplus-204",
    "bplusId": 204,
    "sku": "CT054",
    "name": "HUEDRA",
    "slug": "huedra",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H440 mm",
    "shortDescription": "Its compact circular form makes it suitable for both intimate living spaces and lounge settings. This design delivers a warm yet contemporary centerpiece wit...",
    "description": "Its compact circular form makes it suitable for both intimate living spaces and lounge settings. This design delivers a warm yet contemporary centerpiece with everyday functionality.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEDRA-1.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEDRA-1.png"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Features a warm solid wood tabletop paired with a minimal black metal frame, creating a balanced dialogue between natural texture and structural clarity. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEDRA 2-1.png"
      },
      {
        "title": "Base",
        "description": "The table features round metal legs connected by horizontal supports, providing extra strength and stability.\nIts clean metal structure creates a simple and modern look suitable for contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEDRA 3.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/huedra"
  },
  {
    "id": "bplus-203",
    "bplusId": 203,
    "sku": "CT044",
    "name": "TAQUA",
    "slug": "taqua",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W800 x D800 x H350 mm",
    "shortDescription": "The three-legged round table embraces an intentionally off-balance silhouette that shifts with every viewing angle. Its dynamic form offers constant visual i...",
    "description": "The three-legged round table embraces an intentionally off-balance silhouette that shifts with every viewing angle. Its dynamic form offers constant visual interest, ensuring the piece never feels static or predictable.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-taqua-thump1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-taqua-thump1"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The wooden tabletop showcases a natural grain texture that brings warmth and character to the design.\nSlim metal legs with a support frame provide stability while maintaining a clean, modern structure.\n",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TAQUA (2).jpg"
      },
      {
        "title": "BASE",
        "description": "Supported by a slim metal frame, the structure offers strong stability while keeping a minimal and contemporary appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TAQUA-2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/taqua"
  },
  {
    "id": "bplus-202",
    "bplusId": 202,
    "sku": "LC079",
    "name": "ELLIS",
    "slug": "ellis",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W710 x D730 x H735 mm • 20 kg",
    "shortDescription": "Ellis is defined by a calm, well-considered balance between form and detail. Clean lines are softened by subtle curves, creating a presence that feels compos...",
    "description": "Ellis is defined by a calm, well-considered balance between form and detail. Clean lines are softened by subtle curves, creating a presence that feels composed yet approachable.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ellis-thumb2a",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ellis-thumb2a"
    ],
    "highlights": [
      {
        "title": "Connected by Fabric",
        "description": "Ellis is distinguished by two fabric elements that connect the upper armrests to the seat below. This soft linkage adds visual interest while gently enhancing privacy, becoming a defining character of the design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ellis-h1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ellis"
  },
  {
    "id": "bplus-201",
    "bplusId": 201,
    "sku": "LC096",
    "name": "SQUARE",
    "slug": "square",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W720 x D840 x H790 mm",
    "shortDescription": "Square Chair is defined by its strong geometric frame and clear, confident proportions. The straight lines of the structure create a composed outline, while ...",
    "description": "Square Chair is defined by its strong geometric frame and clear, confident proportions. The straight lines of the structure create a composed outline, while the upholstered seat and backrest soften the overall presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SQUARE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SQUARE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Square Structure ",
        "description": "The chair stands on a squared leg structure that feels solid and deliberate. Straight, continuous lines create a stable base, giving the chair a grounded and confident stance. More than simple support, the legs reinforce the chair’s geometric character, adding a sense of structure and visual order to the design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SQUARE 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/square"
  },
  {
    "id": "bplus-200",
    "bplusId": 200,
    "sku": "LC132",
    "name": "ELEGANT",
    "slug": "elegant",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W710 x D715 x H910 mm",
    "shortDescription": "Basic in form yet graceful in presence, the Elegant Lounge Chair expresses its identity through clean, thoughtful lines. A quiet elegance runs through the de...",
    "description": "Basic in form yet graceful in presence, the Elegant Lounge Chair expresses its identity through clean, thoughtful lines. A quiet elegance runs through the design.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-elegant-thumb2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-elegant-thumb2"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with balanced proportions provide exceptional comfort while reflecting the refined and luxurious essence of Indochine design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ELEGANT 2.jpg"
      },
      {
        "title": "Legs",
        "description": "Slender metal legs with a sturdy structure create a balanced foundation, adding a minimalist yet sophisticated character to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ELEGANT 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/elegant"
  },
  {
    "id": "bplus-199",
    "bplusId": 199,
    "sku": "LC069",
    "name": "HELDU",
    "slug": "heldo",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W710 x D790 x H930 mm",
    "shortDescription": "The Heldu Chair is lifted by a slender metal leg structure that feels light yet deliberately expressive. Angled with precision, the legs create a sense of te...",
    "description": "The Heldu Chair is lifted by a slender metal leg structure that feels light yet deliberately expressive. Angled with precision, the legs create a sense of tension and balance, giving the chair a subtle architectural stance. Their fine profile contrasts softly with the upholstered body, allowing the form to appear almost floating while remaining visually grounded.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-heldo-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-heldo-thumb1"
    ],
    "highlights": [
      {
        "title": "Slim leg ",
        "description": "The leg design of Heldu is intentionally minimal, formed by slim metal rods that intersect with quiet precision. Slightly angled and visually light, the structure introduces a sense of movement and tension beneath the seat.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-heldu-h1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/heldo"
  },
  {
    "id": "bplus-198",
    "bplusId": 198,
    "sku": "LC070",
    "name": "FAT",
    "slug": "fat",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W790 x D800 x H900 mm",
    "shortDescription": "Inspired by the balance between strong lines and effortless comfort, FAT features a refined wooden frame embracing generously cushioned seating. Softly round...",
    "description": "Inspired by the balance between strong lines and effortless comfort, FAT features a refined wooden frame embracing generously cushioned seating. Softly rounded edges bring warmth and sophistication to every detail. Designed for relaxed moments, FAT blends contemporary elegance with lasting comfort and timeless appeal",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FAT thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FAT thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Frame",
        "description": "Fat lounge chair is defined by a clean wooden frame softened through gentle angles and well-balanced proportions. The open armrests create a light, welcoming silhouette, while the generously cushioned seat and backrest add a relaxed, lived-in comfort. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FAT 3.jpg"
      },
      {
        "title": "Exposed wood joinery",
        "description": "The wooden frame features refined joinery details that provide structural strength while adding a subtle expression of craftsmanship to the design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FAT 7.jpg"
      },
      {
        "title": "Backrest",
        "description": "The wooden backrest features a smooth, refined finish that brings natural warmth and timeless elegance to the design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FAT 8.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/fat"
  },
  {
    "id": "bplus-197",
    "bplusId": 197,
    "sku": "LC146",
    "name": "NICO",
    "slug": "nico",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W680 x D780 x H850 mm",
    "shortDescription": "Casual in feel yet considered in form, Nico settles naturally into the space without trying to stand out.",
    "description": "Casual in feel yet considered in form, Nico settles naturally into the space without trying to stand out.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NICO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NICO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Frame",
        "description": "Nico is defined by a relaxed silhouette framed within a slim, angled structure. The gently reclined seat and softly padded surfaces invite comfort, while the slender metal frame keeps the design visually light and composed. Subtle stitching adds rhythm to the upholstery, giving the chair a quiet sense of detail.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-nico-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nico"
  },
  {
    "id": "bplus-196",
    "bplusId": 196,
    "sku": "CT032",
    "name": "MINA",
    "slug": "mina",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W800 x D800 x H360 mm",
    "shortDescription": "Mina is defined by its low-profile silhouette and softly rounded tabletop, creating a calm and grounded visual presence. The angled solid legs introduce a su...",
    "description": "Mina is defined by its low-profile silhouette and softly rounded tabletop, creating a calm and grounded visual presence. The angled solid legs introduce a subtle sense of movement while maintaining structural stability.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-mina-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-mina-thump2"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Features a low-profile circular tabletop paired with angled solid legs that create a dynamic and grounded silhouette. The wide surface offers generous space for everyday use while maintaining a clean and minimal appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MINA-3.jpg"
      },
      {
        "title": "BASE",
        "description": "The slim yet sturdy metal base provides reliable support while maintaining a light, minimal appearance suitable for contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MINA-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mina"
  },
  {
    "id": "bplus-195",
    "bplusId": 195,
    "sku": "EMERSON-B-SS9W",
    "name": "EMERSON B",
    "slug": "emerson-b",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W500 x D500 x H330 mm",
    "shortDescription": "Emerson draws attention with its compact, wave-inspired tabletop, creating a visually engaging surface. Designed as a subtle focal point, it adds depth and i...",
    "description": "Emerson draws attention with its compact, wave-inspired tabletop, creating a visually engaging surface. Designed as a subtle focal point, it adds depth and interest to spaces that value refinement through detail.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-emersonb-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-emersonb-thump2"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The finely crafted tabletop features subtle wave-like ridges that converge toward the center, forming a focal point that naturally draws the eye, much like a quiet bullseye of attention.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-emersonb-h1"
      },
      {
        "title": "Base",
        "description": "The tapered metal base is finished with powder coating for durability and a smooth appearance.\nA stainless steel bottom ring adds stability while providing a clean, refined accent.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMERSON B.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/emerson-b"
  },
  {
    "id": "bplus-194",
    "bplusId": 194,
    "sku": "CT007",
    "name": "EMERSON A",
    "slug": "emerson-a",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W500 x D500 x H500 mm",
    "shortDescription": "Emerson draws attention with its compact, wave-inspired tabletop, creating a visually engaging surface. Designed as a subtle focal point, it adds depth and i...",
    "description": "Emerson draws attention with its compact, wave-inspired tabletop, creating a visually engaging surface. Designed as a subtle focal point, it adds depth and interest to spaces that value refinement through detail.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-emersona-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-emersona-thump3"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The finely crafted tabletop features subtle wave-like ridges that converge toward the center, forming a focal point that naturally draws the eye, much like a quiet bullseye of attention.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMERSON A.jpg"
      },
      {
        "title": "Pedestal Structure",
        "description": "The circular metal tabletop features a concentric textured pattern that adds depth and a refined visual detail.\nSupported by a solid metal column and powder-coated base, the structure ensures stability while maintaining a clean, modern form.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMERSON A 2-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/emerson-a"
  },
  {
    "id": "bplus-192",
    "bplusId": 192,
    "sku": "CT004",
    "name": "ALISA",
    "slug": "alisa",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H370 mm",
    "shortDescription": "Alisa Coffee Table is a harmony of solidity and lightness. Its slender round top seems to float above a sturdy conical base, creating a refined contrast – bo...",
    "description": "Alisa Coffee Table is a harmony of solidity and lightness. Its slender round top seems to float above a sturdy conical base, creating a refined contrast – both delicate and grounded.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-alisa-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-alisa-thump2"
    ],
    "highlights": [
      {
        "title": "Refined Metal Detailing",
        "description": "A polished metallic accent adds a jewel-like touch, bringing quiet luxury without excess. More than just a coffee table, Alisa embodies balance – a place where conversations unfold and everyday moments become memorable.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-alisa-h1-1.jpg"
      },
      {
        "title": "Simple elegance",
        "description": "The base is crafted from powder-coated iron with a smooth matte finish, combined with a stainless steel ring that adds durability and a refined accent.\nA slim metal center support connects the top and base, providing strong stability while maintaining a clean, modern silhouette.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-alisa-h2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/alisa"
  },
  {
    "id": "bplus-191",
    "bplusId": 191,
    "sku": "CT078",
    "name": "AKIRA B",
    "slug": "akira-b",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W800 x D800 x H360 mm",
    "shortDescription": "The Akira B Coffee Table is a modern statement piece defined by bold simplicity. Its wide circular marble top provides a refined surface, while the sculptura...",
    "description": "The Akira B Coffee Table is a modern statement piece defined by bold simplicity. Its wide circular marble top provides a refined surface, while the sculptural base - rounded and grounded with a metallic accent ring - adds stability and character.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-akirab-thump-1.pr-akirab-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-akirab-thump-1.pr-akirab-thump"
    ],
    "highlights": [
      {
        "title": "Balancing Form",
        "description": "Balancing elegance with strength, this design combines luxurious stone with a sleek, architectural foundation, making it an ideal centerpiece for sophisticated living spaces.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AKIRA B 3-1.jpg"
      },
      {
        "title": "BASE",
        "description": "The base is constructed from powder-coated iron, combined with a stainless steel bottom ring that enhances stability, corrosion resistance, and adds a clean modern accent to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AKIRA B 2-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/akira-b"
  },
  {
    "id": "bplus-190",
    "bplusId": 190,
    "sku": "CT020",
    "name": "TRON",
    "slug": "tron",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Residential",
    "dimensions": "W500 x D500 x H416 mm",
    "shortDescription": "Tron is defined by precise proportions and a clear, no-nonsense form. It does not rely on dramatic statements, but instead brings quiet stability to the spac...",
    "description": "Tron is defined by precise proportions and a clear, no-nonsense form. It does not rely on dramatic statements, but instead brings quiet stability to the space, acting as a steady anchor that naturally ties surrounding furniture into a cohesive whole.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-tron-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-tron-thump"
    ],
    "highlights": [
      {
        "title": "Solid Form",
        "description": "With its refined thin tabletop, the design introduces a soft curve at the column that naturally flows into the round base, forming a continuous and fluid silhouette. The gentle transition unites each element into a smooth, cohesive whole that feels both light and grounded.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRON 3-1.jpg"
      },
      {
        "title": "Tabletop",
        "description": "The stone tabletop features a natural veined surface that adds depth and elegance to the design.\nA solid metal pedestal base provides strong support while maintaining a clean and modern silhouette.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRON 2-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/tron"
  },
  {
    "id": "bplus-187",
    "bplusId": 187,
    "sku": "CT025",
    "name": "VUONG",
    "slug": "vuong",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H516 mm",
    "shortDescription": "True to its name, Vuong embodies the essence of a square table through clear proportions and a straightforward presence. Rather than standing out through bol...",
    "description": "True to its name, Vuong embodies the essence of a square table through clear proportions and a straightforward presence. Rather than standing out through bold gestures, it earns its place by grounding the space, offering a familiar form that supports and connects surrounding furniture with ease.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-vuong-thump-1.pr-vuong-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-vuong-thump-1.pr-vuong-thump"
    ],
    "highlights": [
      {
        "title": "Soft Transition",
        "description": "The tabletop is designed with a slim, elegant profile, while the gently curved column transitions smoothly into the square base below. This subtle shift in geometry creates a composition of contrast that feels balanced and coherent, bringing softness and structure together in a calm, considered form.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VUONG 2 (1).jpg"
      },
      {
        "title": "Tabletop",
        "description": "The stone tabletop features a natural veined surface that adds depth and elegance to the design.\nA solid metal pedestal base provides strong support while maintaining a clean and modern silhouette.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VUONG 1-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/vuong"
  },
  {
    "id": "bplus-186",
    "bplusId": 186,
    "sku": "LC084",
    "name": "KYLE",
    "slug": "kyle",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W735 x D747 x H838 mm",
    "shortDescription": "Inspired by the structural logic of a kite, the Kyle chair skillfully balances line and surface, lightness and mass. This refined interplay creates a harmoni...",
    "description": "Inspired by the structural logic of a kite, the Kyle chair skillfully balances line and surface, lightness and mass. This refined interplay creates a harmonious whole, where slender, flowing lines convey softness and fluidity, while solid, well-defined volumes express strength and stability.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-kyle-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-kyle-thumb1"
    ],
    "highlights": [
      {
        "title": "The Leg Structure",
        "description": "The leg structure continues this dialogue, appearing slim and restrained while carrying a clear sense of strength. Their quiet efficiency reinforces the overall harmony between lightness and stability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KYLE-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/kyle"
  },
  {
    "id": "bplus-185",
    "bplusId": 185,
    "sku": "LC016",
    "name": "CARLOS",
    "slug": "carlos",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W750 x D800 x H775 mm",
    "shortDescription": "Carlos comes together through the dialogue between its slender square frame and the square cushion above. The balanced proportions create a design that feels...",
    "description": "Carlos comes together through the dialogue between its slender square frame and the square cushion above. The balanced proportions create a design that feels resolved and thoughtfully complete.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARLOS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARLOS thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Square Frame",
        "description": "The slender square frame pairs naturally with the square seat cushion, creating a clean and balanced composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARLOS 4.jpg"
      },
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with a soft upholstered finish provide exceptional comfort while elevating the chair’s refined and luxurious appearance.\nPrecisely tailored stitching emphasizes the chair’s structured geometry while adding a sophisticated sense of depth and visual balance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARLOS 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/carlos"
  },
  {
    "id": "bplus-184",
    "bplusId": 184,
    "sku": "CT030",
    "name": "REDO",
    "slug": "redo",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W500 x D500 x H460 mm",
    "shortDescription": "Redo is designed around a bold contrast between a refined stone top and a sculptural tapered base. Its balanced proportions allow the piece to function as bo...",
    "description": "Redo is designed around a bold contrast between a refined stone top and a sculptural tapered base. Its balanced proportions allow the piece to function as both a practical surface and a subtle design accent.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-redo-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-redo-thumb1"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "The circular tabletop introduces visual lightness, while the solid pedestal structure creates a grounded and stable presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/REDO-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/redo"
  },
  {
    "id": "bplus-183",
    "bplusId": 183,
    "sku": "ST046",
    "name": "NARCISO",
    "slug": "narsico",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W260 x D260 x H450 mm • 20 kg",
    "shortDescription": "Narciso is a playful furniture piece defined by a spherical twist at its core. Beneath the familiar table form, this unexpected detail introduces a strong se...",
    "description": "Narciso is a playful furniture piece defined by a spherical twist at its core. Beneath the familiar table form, this unexpected detail introduces a strong sense of character.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-narsico-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-narsico-thumb1"
    ],
    "highlights": [
      {
        "title": "Spherical Detail ",
        "description": "Narciso brings a sense of joy through an unexpected spherical detail within the structure. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-narciso-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/narsico"
  },
  {
    "id": "bplus-182",
    "bplusId": 182,
    "sku": "ST019",
    "name": "NOAH 350",
    "slug": "noah-350",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W350 x D350 x H510 mm • 20 kg",
    "shortDescription": "A contemporary round side table with a smooth, refined surface and a sculptural black metal base, offering a harmonious balance of softness and structure for...",
    "description": "A contemporary round side table with a smooth, refined surface and a sculptural black metal base, offering a harmonious balance of softness and structure for modern living spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-noah350-thumba",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-noah350-thumba"
    ],
    "highlights": [
      {
        "title": "Frame",
        "description": "An intriguing supporting frame lifts the round tabletop with a subtle sense of suspension. The refined surface appears light and sculptural, while the construction remains visually grounded.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NOAH 350-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/noah-350"
  },
  {
    "id": "bplus-181",
    "bplusId": 181,
    "sku": "LEON-TJHB",
    "name": "LEON",
    "slug": "leon",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Product draft ",
    "dimensions": "W400 x D400 x H500 mm • 20 kg",
    "shortDescription": "Defined by its distinctive structure, Leon becomes a visual focal point in the space. It is an ideal choice for interiors seeking a more intricate accent.",
    "description": "Defined by its distinctive structure, Leon becomes a visual focal point in the space. It is an ideal choice for interiors seeking a more intricate accent.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-leon-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-leon-thumb1"
    ],
    "highlights": [
      {
        "title": "Frame",
        "description": "Delicate supporting elements lift the frame with a near-floating presence. This refined construction distinguishes Leon from more typical design approaches.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-leon-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/leon"
  },
  {
    "id": "bplus-180",
    "bplusId": 180,
    "sku": "ST027",
    "name": "PISA",
    "slug": "pisa",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W350 x D350 x H500 mm",
    "shortDescription": "Pisa is sharp in its lines, yet unexpectedly soft in the way everything comes together. That contrast gives the table a calm harmony - and a character that’s...",
    "description": "Pisa is sharp in its lines, yet unexpectedly soft in the way everything comes together. That contrast gives the table a calm harmony - and a character that’s hard to mistake for anything else.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-pisa-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-pisa-thumb1"
    ],
    "highlights": [
      {
        "title": "Elegant Form",
        "description": "The Pisa table balances crisp, angular lines with a sense of elevated elegance. It conveys a confidence, revealing refinement through form.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PISA-3.jpg"
      },
      {
        "title": "Tabletop",
        "description": "The stone tabletop features natural veining and a raised edge detail that adds depth and character.\nSupported by a solid metal pedestal, the structure offers strong stability with a refined, elegant look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PISA-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pisa"
  },
  {
    "id": "bplus-179",
    "bplusId": 179,
    "sku": "VIGUTI-TO9I",
    "name": "VIGUTI",
    "slug": "viguti",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W400 x D400 x H450 mm • 20 kg",
    "shortDescription": "Viguti explores the idea of light support and gentle containment. The tabletop feels almost held rather than placed, resting calmly within a slender structur...",
    "description": "Viguti explores the idea of light support and gentle containment. The tabletop feels almost held rather than placed, resting calmly within a slender structural rhythm below.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-viguti-thumb12",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-viguti-thumb12"
    ],
    "highlights": [
      {
        "title": "Frame & tabletop",
        "description": "Viguti Side Table stands out through its softly contoured tabletop, gently held above a slender, continuous frame. The rounded edges bring a sense of calm and tactility, while the open structure keeps the form light and unobtrusive. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VIGUTI (2).jpg"
      },
      {
        "title": "Base",
        "description": "The metal frame is formed with clean, continuous lines that create a strong and stable base.\nPowder-coated finishing enhances durability while keeping the design minimal and modern.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VIGUTI-2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/viguti"
  },
  {
    "id": "bplus-178",
    "bplusId": 178,
    "sku": "TB006",
    "name": "FIONA",
    "slug": "fionatable",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W1200 x D1200 x H750 mm",
    "shortDescription": "Rising from a sculpted central pedestal, Fiona table supports a thin, circular tabletop that feels stable and precise. The round base anchors the table with ...",
    "description": "Rising from a sculpted central pedestal, Fiona table supports a thin, circular tabletop that feels stable and precise. The round base anchors the table with a calm, architectural confidence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-fiona-thumb.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-fiona-thumb.png"
    ],
    "highlights": [
      {
        "title": "Base",
        "description": "The base has a composed, grounded stance. Its smooth, continuous surface keeps the form calm and uninterrupted, allowing the mass to feel refined rather than heavy.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FIONA 2 (1).jpg"
      },
      {
        "title": "Tabletop",
        "description": "The stone tabletop features a lightning vein pattern that creates a natural and striking visual effect.\nIts smooth polished surface enhances durability while adding a refined, modern character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FIONA 3-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/fionatable"
  },
  {
    "id": "bplus-175",
    "bplusId": 175,
    "sku": "PO020",
    "name": "BILU",
    "slug": "bilu",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W430 x D430 x H430 mm",
    "shortDescription": "Bilu Pouf features a compact cylindrical form wrapped in finely tailored vertical channeling, giving the piece a soft yet well-defined appearance. Ideal for ...",
    "description": "Bilu Pouf features a compact cylindrical form wrapped in finely tailored vertical channeling, giving the piece a soft yet well-defined appearance. Ideal for lounge and breakout spaces, Bilu Pouf delivers a warm accent with a playful, contemporary character.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BILU thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BILU thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Soft upholstery with a well-balanced rounded form provides exceptional comfort while reinforcing BILU's clean, welcoming, and minimalist character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BILU 3.jpg"
      },
      {
        "title": "Wooden Base",
        "description": "The wooden base is crafted with balanced proportions and a smooth finish, providing stability while introducing a warm and natural accent.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bilu"
  },
  {
    "id": "bplus-174",
    "bplusId": 174,
    "sku": "PO004",
    "name": "TURTLE",
    "slug": "turtle",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W612 x D612 x H410 mm",
    "shortDescription": "Turtle Pouf features a rounded, low-profile form that creates a soft and grounded visual presence. The fully upholstered surface offers comfortable seating w...",
    "description": "Turtle Pouf features a rounded, low-profile form that creates a soft and grounded visual presence. The fully upholstered surface offers comfortable seating while maintaining a clean, minimal silhouette.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TURTLE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TURTLE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Carefully tailored stitching defines the gentle seat segments while enhancing the bench’s soft contours and elegant visual rhythm.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TURTLE 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/turtle"
  },
  {
    "id": "bplus-173",
    "bplusId": 173,
    "sku": "SF011",
    "name": "MAM",
    "slug": "mam",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2000 x D750 x H670 mm",
    "shortDescription": "Mam is defined by its long, uninterrupted silhouette and softly rounded edges. The low back and generous seat create a relaxed, welcoming posture, while the ...",
    "description": "Mam is defined by its long, uninterrupted silhouette and softly rounded edges. The low back and generous seat create a relaxed, welcoming posture, while the slim legs keep the form visually light. Everything is reduced to essentials, allowing the sofa to feel calm and unobtrusive in the space. Subtle and composed, Mam brings comfort without drawing attention to itself.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAM thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAM thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Armrest",
        "description": "The armrests are softly rounded and seamlessly integrated into the overall form. Gently padded and comfortable to the touch.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAM-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mam"
  },
  {
    "id": "bplus-172",
    "bplusId": 172,
    "sku": "SF007",
    "name": "JENA",
    "slug": "jena",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2040 x D720 x H870 mm",
    "shortDescription": "Jena Sofa brings a warm, welcoming presence suited to hospitality spaces. Its softly upholstered form and gently embracing backrest invite guests to sit, rel...",
    "description": "Jena Sofa brings a warm, welcoming presence suited to hospitality spaces. Its softly upholstered form and gently embracing backrest invite guests to sit, relax, and stay a little longer.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JENA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JENA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "Jena Sofa is defined by its clean, elongated form and gently embracing backrest. Vertical stitching adds subtle rhythm to the upholstery, bringing depth without breaking the calm surface.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JENA-7.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/jena"
  },
  {
    "id": "bplus-171",
    "bplusId": 171,
    "sku": "SF010",
    "name": "STACK",
    "slug": "stack",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2070 x D860 x H830 mm",
    "shortDescription": "Stack presents a clean silhouette defined by rhythmic vertical channeling across the seat and back. The structured upholstery creates a sense of visual order...",
    "description": "Stack presents a clean silhouette defined by rhythmic vertical channeling across the seat and back. The structured upholstery creates a sense of visual order while maintaining a soft, inviting surface for everyday comfort.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STACK thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STACK thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Slim leg ",
        "description": "Slim metal legs subtly lift the form, giving the sofa a light, composed presence rather than a bulky profile.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/STACK-24.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/stack"
  },
  {
    "id": "bplus-169",
    "bplusId": 169,
    "sku": "PENDANT-LIGHT-U4ZN",
    "name": "PENDANT LIGHT",
    "slug": "pendant-light",
    "brand": "B+ Furniture",
    "category": "lighting",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "PENDANT LIGHT là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "PENDANT LIGHT là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PENDANTLIGHT",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PENDANTLIGHT"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pendant-light"
  },
  {
    "id": "bplus-167",
    "bplusId": 167,
    "sku": "LC153",
    "name": "VUTA",
    "slug": "vuta",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W780 x D740 x H765 mm",
    "shortDescription": "Vuta is a chair defined by sharp, confident lines and a strong sense of independence, yet it never loses its welcoming warmth. The balance between clarity an...",
    "description": "Vuta is a chair defined by sharp, confident lines and a strong sense of independence, yet it never loses its welcoming warmth. The balance between clarity and comfort gives the design a distinctive presence. Versatile in character, Vuta transitions effortlessly from living spaces to work environments and public settings.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VUTA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VUTA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "The backrest is composed of carefully calculated segments, assembled to form a precise, embracing profile. This articulated construction creates a silhouette that feels sharp and contemporary, yet remains warm and supportive. The result is a backrest that balances structural clarity with a sense of comfort and intimacy.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VUTA-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/vuta"
  },
  {
    "id": "bplus-165",
    "bplusId": 165,
    "sku": "BOX-COLUMN-U95N",
    "name": "BOX & COLUMN",
    "slug": "box",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "BOX & COLUMN là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "BOX & COLUMN là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BOX",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BOX"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/box"
  },
  {
    "id": "bplus-164",
    "bplusId": 164,
    "sku": "RUG-UAZ6",
    "name": "RUG",
    "slug": "rug",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Miscellaneous",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "RUG là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "description": "RUG là sản phẩm nội thất nguyên bản do B+ Furniture Studio nghiên cứu và sản xuất, tối ưu công năng và giá trị thẩm mỹ đương đại.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/rug.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/rug.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/rug"
  },
  {
    "id": "bplus-147",
    "bplusId": 147,
    "sku": "CT029",
    "name": "PEVESTEEL",
    "slug": "pevesteel",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W1018 x D1018 x H346 mm",
    "shortDescription": "Pevesteel is a rectangular coffee table defined by its classic four-leg structure, balanced with a distinctive sliding plane detail integrated into the table...",
    "description": "Pevesteel is a rectangular coffee table defined by its classic four-leg structure, balanced with a distinctive sliding plane detail integrated into the tabletop. This functional feature adds a subtle layer of interaction, enhancing everyday usability while introducing an unexpected visual accent.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-pevesteel-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-pevesteel-thump"
    ],
    "highlights": [
      {
        "title": "Poised & Powerful Structure",
        "description": "Elegant and distinctive yet undeniably solid and strong, Pevesteel is a considered choice for those seeking a space with a subtle sense of experimentation - bold enough to stand out, but balanced enough to feel composed and intentional.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PEVESTEEL-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pevesteel"
  },
  {
    "id": "bplus-146",
    "bplusId": 146,
    "sku": "CT070",
    "name": "LUMINIC",
    "slug": "luminic",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W590 x D590 x H450 mm • 20 kg",
    "shortDescription": "Luminic may not fully live up to its name at first glance, defined by a deliberately simple form. Yet through its restrained presence, it allows the surround...",
    "description": "Luminic may not fully live up to its name at first glance, defined by a deliberately simple form. Yet through its restrained presence, it allows the surrounding furniture to stand out and take focus. Acting as a quiet supporting element, the table enhances the overall composition of the space. Sometimes, its value lies not in shining on its own, but in helping everything around it glow.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINIC.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINIC.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The table combines a round wooden top with a central metal pedestal and four-leg base for a balanced and stable structure.\nThe natural wood surface adds warmth, while the metal base keeps the design clean, durable, and suitable for modern interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUMINIC 3-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/luminic"
  },
  {
    "id": "bplus-145",
    "bplusId": 145,
    "sku": "ST049",
    "name": "WALK",
    "slug": "walk",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W420 x D420 x H500 mm",
    "shortDescription": "A table that looks like it came straight out of a comic book, with a modern-era aesthetic and legs that seem to be walking. Playful in form and full of chara...",
    "description": "A table that looks like it came straight out of a comic book, with a modern-era aesthetic and legs that seem to be walking. Playful in form and full of character, it feels as if the table is stepping right into your space - and straight into your mind.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-walk-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-walk-thump"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Features a round stone tabletop supported by a sculptural wooden base with arched cut-out details. The solid vertical structure creates a strong architectural presence while maintaining visual rhythm through its layered form.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/WALK 3-1.jpg"
      },
      {
        "title": "BASE",
        "description": "The metal legs are crafted with smooth curved lines, creating a strong yet elegant structure.\nPowder-coated finishing enhances durability while maintaining a clean, modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/WALK 2-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/walk"
  },
  {
    "id": "bplus-144",
    "bplusId": 144,
    "sku": "ST002",
    "name": "NIKA",
    "slug": "nika",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W600 x D600 x H460 mm • 20 kg",
    "shortDescription": "The Nika side table presents a distinctive design that feels both contemporary and ancient in spirit. Its sculptural structure echoes the presence of monumen...",
    "description": "The Nika side table presents a distinctive design that feels both contemporary and ancient in spirit. Its sculptural structure echoes the presence of monumental, timeworn architecture, lending a sense of depth and gravity to the form. This dialogue between past and present gives the piece a unique character. As an accent element, Nika adds visual depth and a quietly striking focal point to the space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NIKA.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NIKA.png"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Features a compact stone tabletop with sharp edges, supported by a slim tubular metal frame that creates a clean and architectural silhouette. The open leg structure enhances visual lightness while maintaining structural stability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NIKA 3-1.png"
      },
      {
        "title": "Base",
        "description": "Tubular steel legs with a curved frame design provide stable support while maintaining a light and modern appearance.\nMetal end caps add durability and a refined finishing detail.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NIKA 2-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nika"
  },
  {
    "id": "bplus-143",
    "bplusId": 143,
    "sku": "ST032",
    "name": "KNOT",
    "slug": "knot",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W402 x D402 x H505 mm",
    "shortDescription": "A knot becomes an unmissable focal point, instantly defining the character of the design. More than a visual accent, it invites curiosity and draws the eye t...",
    "description": "A knot becomes an unmissable focal point, instantly defining the character of the design. More than a visual accent, it invites curiosity and draws the eye through its sculptural presence. This distinctive detail gives the Knot table a quiet sense of tension and personality. It is a piece that stays in your mind, encouraging a second look - and a second thought.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-knot-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-knot-thump2"
    ],
    "highlights": [
      {
        "title": "Table Top  ",
        "description": "Features a refined stone table top paired with a sculptural metal tripod base, creating a strong contrast between natural texture and industrial structure. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KNOT 3-1.jpg"
      },
      {
        "title": "Tabletop",
        "description": "The round stone tabletop features natural veining, framed by a metal edge for a clean and refined look.\nMetal legs provide strong support while maintaining a light and modern structure.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KNOT 2-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/knot"
  },
  {
    "id": "bplus-142",
    "bplusId": 142,
    "sku": "COSMOS-F-UOSS",
    "name": "COSMOS F",
    "slug": "cosmo-f",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W390 x D390 x H450 mm",
    "shortDescription": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "description": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS F.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS F.png"
    ],
    "highlights": [
      {
        "title": "Base",
        "description": "The tabletop is crafted from natural wood with a smooth finish that highlights the organic grain pattern.\nSoftly rounded edges create a warm, refined look suitable for modern and contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL F.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cosmo-f"
  },
  {
    "id": "bplus-141",
    "bplusId": 141,
    "sku": "CT067",
    "name": "VIBRIC",
    "slug": "vibric",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H390 mm",
    "shortDescription": "Vibric is derived from the fusion of “vibrant” and “brick,” expressing a design spirit that is solid and enduring yet full of life. The name reflects the pro...",
    "description": "Vibric is derived from the fusion of “vibrant” and “brick,” expressing a design spirit that is solid and enduring yet full of life. The name reflects the product’s balance between strength and vitality, where a robust structure meets an energetic, contemporary presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VIBRIC.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VIBRIC.png"
    ],
    "highlights": [
      {
        "title": "Solid Frame",
        "description": "Vibric embodies a grounded composition defined by its solid round top and clean, four-leg framework. A subtle cross brace reinforces the structure, enhancing stability while adding a restrained architectural detail.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VIBRIC 3.jpg"
      },
      {
        "title": "Base",
        "description": "The metal legs are designed with a clean four-leg structure, reinforced by a central support frame for added stability.\nPowder-coated finishing improves durability while keeping the look simple and modern.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/VIBRIC 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/vibric"
  },
  {
    "id": "bplus-140",
    "bplusId": 140,
    "sku": "CT055",
    "name": "FACETONE",
    "slug": "facetone",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W500 x D500 x H445 mm",
    "shortDescription": "A round tabletop rests on a softly curved frame, creating a balanced and cohesive form. Its gentle geometry allows the table to integrate seamlessly with sur...",
    "description": "A round tabletop rests on a softly curved frame, creating a balanced and cohesive form. Its gentle geometry allows the table to integrate seamlessly with surrounding furniture and interiors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-facetone-thumb1-1.pr-facetone-thumb1",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-facetone-thumb1-1.pr-facetone-thumb1"
    ],
    "highlights": [
      {
        "title": "A Gently Contoured Frame",
        "description": "The curved frame supports the round tabletop, forming a harmonious and well-balanced composition. Its gentle geometry allows the piece to blend naturally into a wide range of interiors. Designed to coexist effortlessly with other furniture pieces, the table complements its surroundings without competing for attention.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-facetone-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/facetone"
  },
  {
    "id": "bplus-139",
    "bplusId": 139,
    "sku": "CORE-UVVV",
    "name": "CORE",
    "slug": "core",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "With its approachable design, the Core table lives up to its name, naturally drawing people together. Its form encourages connection, becoming a central poin...",
    "description": "With its approachable design, the Core table lives up to its name, naturally drawing people together. Its form encourages connection, becoming a central point where moments are shared. Like a completed piece of a puzzle, it brings a sense of cohesion and completeness to the surrounding space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-core-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-core-thump"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/core"
  },
  {
    "id": "bplus-138",
    "bplusId": 138,
    "sku": "CT051",
    "name": "GEOGLOW",
    "slug": "geoglow",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H400 mm",
    "shortDescription": "Geoglow brings together two essential elements: “Geo”, representing geometry and diverse structural forms, and “Glow”, evoking light and a subtle sense of ra...",
    "description": "Geoglow brings together two essential elements: “Geo”, representing geometry and diverse structural forms, and “Glow”, evoking light and a subtle sense of radiance. The name reflects a design language rooted in clear geometry yet enriched with visual warmth. Together, these elements create a living space that feels vibrant, expressive, and full of energy without being overwhelming.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-geoglow-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-geoglow-thumb"
    ],
    "highlights": [
      {
        "title": "Geometric Form",
        "description": "A simple round tabletop with clean, restrained lines, designed to stay quietly in the background at first glance. Its form doesn’t seek attention, yet reveals a quiet charm that feels unexpectedly rewarding when noticed. Subtle in presence, it brings a sense of calm clarity to the overall design. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-geoglow-hl1a"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/geoglow"
  },
  {
    "id": "bplus-137",
    "bplusId": 137,
    "sku": "CT050",
    "name": "GEOMIX",
    "slug": "geomix",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H360 mm",
    "shortDescription": "Geomix is a compact table that delivers a sense of completeness far beyond its size. Thoughtfully proportioned and visually balanced, it acts as a subtle anc...",
    "description": "Geomix is a compact table that delivers a sense of completeness far beyond its size. Thoughtfully proportioned and visually balanced, it acts as a subtle anchor that ties surrounding furniture together with ease. Its modest footprint allows it to slip naturally into modern interiors while still making its presence felt.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GEOMIX.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GEOMIX.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The wooden tabletop features a smooth natural finish with softly rounded edges for a refined look.\nPaired with slim metal legs, the design creates a clean and modern appearance suitable for various interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GEOMIX 3-1.png"
      },
      {
        "title": "Base",
        "description": "The table combines a natural wood tabletop with angled metal legs, creating a clean and balanced modern look.\nIts sturdy structure and warm material contrast make it suitable for contemporary and Scandinavian-style interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GEOMIX 2-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/geomix"
  },
  {
    "id": "bplus-136",
    "bplusId": 136,
    "sku": "CT028",
    "name": "COSMOS B",
    "slug": "cosmo-b",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W790 x D790 x H450 mm",
    "shortDescription": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "description": "The product draws inspiration from stars scattered across the cosmic sky, evoking a sense of wonder and the mysterious beauty of the galaxy.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS B.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COSMOS B.png"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The wide, circular tabletop evokes a sense of vastness, echoing the boundless feel of the universe that inspires its cosmic concept.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL B.png"
      },
      {
        "title": "Base",
        "description": "The table features a solid metal pedestal with a four-leg star base, providing excellent stability and durability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DETAIL B-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cosmo-b"
  },
  {
    "id": "bplus-135",
    "bplusId": 135,
    "sku": "SONAR-STOOL-V4OF",
    "name": "SONAR STOOL",
    "slug": "sonar-stool",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Sonar features a softly upholstered seat and backrest supported by a slim metal frame, creating a balanced combination of comfort and structural clarity. The...",
    "description": "Sonar features a softly upholstered seat and backrest supported by a slim metal frame, creating a balanced combination of comfort and structural clarity. The elevated profile and integrated footrest enhance ergonomic support while maintaining a light visual presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-sonarstool-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-sonarstool-thump"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sonar-stool"
  },
  {
    "id": "bplus-134",
    "bplusId": 134,
    "sku": "TRUNK-V6LV",
    "name": "TRUNK",
    "slug": "trunk",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Trunk features a compact upholstered seat paired with a slim metal frame that emphasizes lightness and structural clarity.",
    "description": "Trunk features a compact upholstered seat paired with a slim metal frame that emphasizes lightness and structural clarity.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-trunk-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-trunk-thump2"
    ],
    "highlights": [
      {
        "title": "Form",
        "description": "The round seat and slim cylindrical backrest introduce gentle support while preserving an open, lightweight silhouette.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/trunk"
  },
  {
    "id": "bplus-133",
    "bplusId": 133,
    "sku": "LC145",
    "name": "PLUSHIO B",
    "slug": "plushio-b",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W705 x D735 x H715 mm",
    "shortDescription": "Plushio features a rounded upholstered form with soft vertical stitching that enhances both comfort and visual depth.",
    "description": "Plushio features a rounded upholstered form with soft vertical stitching that enhances both comfort and visual depth.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PLUSHIO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PLUSHIO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered Surface",
        "description": "The upholstered surfaces emphasize softness and continuity, paired with a central swivel base that adds flexibility in use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PLUSHIO 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/plushio-b"
  },
  {
    "id": "bplus-132",
    "bplusId": 132,
    "sku": "LC087",
    "name": "NIMBUS",
    "slug": "nimbus",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W685 x D845 x H945 mm",
    "shortDescription": "Nimbus features a high-back upholstered structure combined with solid wood armrests, creating a strong balance between comfort and architectural expression.",
    "description": "Nimbus features a high-back upholstered structure combined with solid wood armrests, creating a strong balance between comfort and architectural expression.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NIMBUS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NIMBUS thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Structured Comfort",
        "description": "The generously padded backrest and seat create a composed, upright posture, complemented by solid wooden armrests that add warmth and definition.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nimbus"
  },
  {
    "id": "bplus-126",
    "bplusId": 126,
    "sku": "CT005",
    "name": "BIRDCAGE",
    "slug": "birdcage",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W580 x D580 x H423 mm",
    "shortDescription": "The Bird Case Coffee Table captures the essence of creative lightness and refined elegance. Its sculptural wireframe base evokes the delicate beauty of a bir...",
    "description": "The Bird Case Coffee Table captures the essence of creative lightness and refined elegance. Its sculptural wireframe base evokes the delicate beauty of a birdcage - airy yet structured, expressive yet composed. Paired with a smooth circular top, it stands as a statement of modern artistry, where sophistication meets playful ingenuity.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-birdcase-thumb5-1.pr-birdcase-thumb5",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-birdcase-thumb5-1.pr-birdcase-thumb5"
    ],
    "highlights": [
      {
        "title": "Circular Top with Open Metal Substructure",
        "description": "Bird Case Coffee Table explores the balance between openness and structure through its intricate wireframe base. The geometric metal composition forms a tapered silhouette that feels visually light while maintaining stability. A smooth circular top provides a calm counterpoint, completing the contrast between linear precision and solid surface.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-birdcage-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/birdcage"
  },
  {
    "id": "bplus-124",
    "bplusId": 124,
    "sku": "BN003",
    "name": "AGACIA A",
    "slug": "agacia-a",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1500 x D740 x H760 mm",
    "shortDescription": "The Agacia redefines modular seating with a language of quiet elegance. Its form is composed of smooth, continuous lines - an upholstered seat and backrest t...",
    "description": "The Agacia redefines modular seating with a language of quiet elegance. Its form is composed of smooth, continuous lines - an upholstered seat and backrest that can stand alone or connect seamlessly in multiples. Designed for flexibility, Agacia transitions from an intimate two-seater to a longer, architectural arrangement with ease, making it ideal for both private and public interiors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AGACIA A thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AGACIA A thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "A Welcoming Presence",
        "description": "The softly rounded edges create a welcoming sense of softness, bringing a warm and approachable character to the piece. This gentle detailing softens the overall form, allowing the seating to feel inviting rather than rigid.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AGACIA A 2.jpg"
      },
      {
        "title": "Highlight the Flexibility",
        "description": "The minimalist design is carefully considered to highlight the flexibility of the modular system. Clean lines and restrained details allow each configuration to adapt effortlessly to different layouts and uses.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AGACIA A 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/agacia-a"
  },
  {
    "id": "bplus-123",
    "bplusId": 123,
    "sku": "BN009",
    "name": "ANTONIO",
    "slug": "antonio",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Daybed",
    "dimensions": "W2000 x D870 x H735 mm",
    "shortDescription": "The Antonio Bench embodies the spirit of minimalism while exuding an understated sense of luxury. Its elongated frame, paired with a gracefully curved backre...",
    "description": "The Antonio Bench embodies the spirit of minimalism while exuding an understated sense of luxury. Its elongated frame, paired with a gracefully curved backrest and plush cushions, strikes the perfect balance between architectural elegance and everyday comfort.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-antonio-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-antonio-thump3"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Clean lines and restrained proportions allow the form to remain visually light while meeting everyday seating needs. This thoughtful balance reinforces a quiet sense of simplicity, making the design adaptable to a wide range of contemporary spaces.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANTONIO 1.jpg"
      },
      {
        "title": "Legs",
        "description": "Powder-coated metal legs feature a slender profile and sturdy construction, bringing a sense of modern elegance and durability to the piece.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANTONIO 2.jpg"
      },
      {
        "title": "Upholstery",
        "description": "Generously cushioned upholstery with a soft surface and balanced support offers lasting comfort while enhancing the clean and minimalist aesthetic.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANTONIO 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/antonio"
  },
  {
    "id": "bplus-122",
    "bplusId": 122,
    "sku": "BN006",
    "name": "CATALINA",
    "slug": "catalina",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1600 x D675 x H730 mm",
    "shortDescription": "Catalina is a bold expression of modern elegance, where sculptural form meets playful sophistication. Its structured, segmented upholstery is elevated by a s...",
    "description": "Catalina is a bold expression of modern elegance, where sculptural form meets playful sophistication. Its structured, segmented upholstery is elevated by a slender steel frame, creating a design that is meticulously balanced. A piece of quiet confidence, Catalina is crafted to elevate contemporary interiors with understated luxury and timeless presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATALINA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATALINA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Soft upholstered seating with subtle tufted segments pairs elegantly with the cylindrical backrest, delivering a refined sense of comfort and sophistication.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATALINA 3.jpg"
      },
      {
        "title": "Legs",
        "description": "Slender metal legs with a sturdy structure create a balanced foundation, adding a minimalist yet sophisticated character to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATALINA 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/catalina"
  },
  {
    "id": "bplus-121",
    "bplusId": 121,
    "sku": "RILEY-B-VN60",
    "name": "RILEY B",
    "slug": "riley-b",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1660 x D755 x H400 mm • 20 kg",
    "shortDescription": "Riley is a modular seating system designed with both versatility and style in mind. Its geometric, curved form allows each module to stand alone as a bold st...",
    "description": "Riley is a modular seating system designed with both versatility and style in mind. Its geometric, curved form allows each module to stand alone as a bold statement or connect seamlessly into larger configurations—perfect for dynamic public spaces or modern living areas. Riley combines sculptural presence with everyday comfort; a bench that adapts, evolves, and transforms—Riley turns modularity into an art form.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rileyb-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rileyb-thump2"
    ],
    "highlights": [
      {
        "title": "Versatility and Style",
        "description": "The modular design transitions with exceptional smoothness, creating a seamless flow across the space. Each connection is carefully considered to maintain visual continuity while supporting flexible use. This balance between practical functionality and refined aesthetics allows the system to adapt effortlessly to different spatial needs.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rileyb-hl1"
      },
      {
        "title": "Seamless Transition",
        "description": "The gently curved block form combines a sense of structural strength with soft visual fluidity. Its sculpted geometry balances firmness and warmth, creating a composed yet inviting presence. Together, these contrasting qualities come together to form a cohesive and visually engaging whole.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rileyb-hl2"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/riley-b"
  },
  {
    "id": "bplus-120",
    "bplusId": 120,
    "sku": "BN005",
    "name": "MOLO",
    "slug": "molo",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1220 x D595 x H600 mm",
    "shortDescription": "Molo brings a fresh, modern spirit with its rounded blush cushion, sleek black frame, and integrated side table. Playful yet practical, it’s a multifunctiona...",
    "description": "Molo brings a fresh, modern spirit with its rounded blush cushion, sleek black frame, and integrated side table. Playful yet practical, it’s a multifunctional piece that combines clean lines and everyday convenience - perfect for contemporary lounges or living spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOLO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOLO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Side table",
        "description": "Integrates a compact, functional side table that enhances usability while also serving as an intriguing aesthetic accent.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOLO 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/molo"
  },
  {
    "id": "bplus-119",
    "bplusId": 119,
    "sku": "RILEY-A-VS90",
    "name": "RILEY A",
    "slug": "riley-a",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1910 x D935 x H650 mm • 20 kg",
    "shortDescription": "Riley is a modular seating system designed with both versatility and style in mind. Its geometric, curved form allows each module to stand alone as a bold st...",
    "description": "Riley is a modular seating system designed with both versatility and style in mind. Its geometric, curved form allows each module to stand alone as a bold statement or connect seamlessly into larger configurations - perfect for dynamic public spaces or modern living areas. Riley combines sculptural presence with everyday comfort; a bench that adapts, evolves, and transforms - Riley turns modularity into an art form.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rileya-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rileya-thump2"
    ],
    "highlights": [
      {
        "title": "Versatility and Style",
        "description": "The modular design transitions with exceptional smoothness, creating a seamless flow across the space. Each connection is carefully considered to maintain visual continuity while supporting flexible use. This balance between practical functionality and refined aesthetics allows the system to adapt effortlessly to different spatial needs.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-rileya-hl1"
      },
      {
        "title": " Firmness and Warmth",
        "description": "The gently curved block form combines a sense of structural strength with soft visual fluidity. Its sculpted geometry balances firmness and warmth, creating a composed yet inviting presence. Together, these contrasting qualities come together to form a cohesive and visually engaging whole.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-rileya-hl3"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/riley-a"
  },
  {
    "id": "bplus-118",
    "bplusId": 118,
    "sku": "BN008",
    "name": "ANA",
    "slug": "ana",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1600 x D502 x H420 mm",
    "shortDescription": "The Ana Bench embodies unspoken luxury - sleek, poised, and meticulously detailed. Upholstered with tailored channel stitching, its surface conveys refinemen...",
    "description": "The Ana Bench embodies unspoken luxury - sleek, poised, and meticulously detailed. Upholstered with tailored channel stitching, its surface conveys refinement and durability, while the tones exude timeless sophistication. Resting on a slender black steel frame with subtle brass accents, Ana achieves a balance of strength and elegance.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANA-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANA-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Simple, yet hard to overlook",
        "description": "Clean surfaces and controlled proportions allow each detail to feel intentional rather than decorative. Nothing is excessive, yet every curve and transition is carefully considered, creating a quiet sense of depth.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANA 4.jpg"
      },
      {
        "title": "A Well-balanced Silhouette",
        "description": "The leg design is stripped of any unnecessary elements to achieve a clean, well-balanced silhouette. Its restrained form allows the piece to integrate seamlessly with the overall design language.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANA 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ana"
  },
  {
    "id": "bplus-117",
    "bplusId": 117,
    "sku": "CH106",
    "name": "EASY plywood, armrest",
    "slug": "easy-plywood-armrest",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W635 x D545 x H788 mm",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-thump2"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-plywood-armrest"
  },
  {
    "id": "bplus-116",
    "bplusId": 116,
    "sku": "CH090",
    "name": "MODO",
    "slug": "modo",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W540 x D550 x H770 mm",
    "shortDescription": "The Modo Chair embodies refined modernity with a sculptural frame and graceful proportions. Its fluid steel structure and contoured seat blend craftsmanship ...",
    "description": "The Modo Chair embodies refined modernity with a sculptural frame and graceful proportions. Its fluid steel structure and contoured seat blend craftsmanship with understated elegance, bringing effortless sophistication to any contemporary space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MODO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MODO thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/modo"
  },
  {
    "id": "bplus-115",
    "bplusId": 115,
    "sku": "CH087",
    "name": "LING",
    "slug": "ling",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W533 x D555 x H825 mm",
    "shortDescription": "Ling embodies a soft yet confident character—where fluid lines meet precise detailing. Its gently curved seat and slender legs create a silhouette that feels...",
    "description": "Ling embodies a soft yet confident character—where fluid lines meet precise detailing. Its gently curved seat and slender legs create a silhouette that feels both light and inviting. Designed for modern hospitality and bar settings, Ling blends comfort with effortless sophistication, offering a refined touch to any contemporary interior.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LING thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LING thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ling"
  },
  {
    "id": "bplus-114",
    "bplusId": 114,
    "sku": "PO007",
    "name": "FONG",
    "slug": "fong",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W600 x D600 x H430 mm • 20 kg",
    "shortDescription": "The Fong Pouf embodies a spirit of quiet strength and graceful restraint. Its soft, square cushion rests with a sense of ease, while the sleek dark base prov...",
    "description": "The Fong Pouf embodies a spirit of quiet strength and graceful restraint. Its soft, square cushion rests with a sense of ease, while the sleek dark base provides a subtle lift—almost like a shadow grounding a cloud. Minimal in form yet rich in presence, Fong is a piece that reflects both stability and serenity, bringing balance to contemporary interiors. A timeless design that whispers rather than shouts, it feels at once familiar and elevated.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FONG-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FONG-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Small in Size, Strong in Character",
        "description": "The pouf features a full, generously proportioned design with clean, squared lines that create a sense of visual density. The seat cushion is subtly lifted by four compact legs, accentuating its generous volume without adding visual weight. This gentle elevation allows the form to breathe, reinforcing a sense of lightness while preserving its full, grounded character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-fong-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/fong"
  },
  {
    "id": "bplus-113",
    "bplusId": 113,
    "sku": "PO013",
    "name": "CATY B",
    "slug": "caty-b",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W670 x D670 x H410 mm",
    "shortDescription": "Caty B is a minimalist pouf: a low, round cushion whose soft proportions contrast with slim metal legs, creating a refined “floating” effect. The design lang...",
    "description": "Caty B is a minimalist pouf: a low, round cushion whose soft proportions contrast with slim metal legs, creating a refined “floating” effect. The design language emphasizes proportion, negative space, and the flexibility to combine modules. Materials are carefully selected (resilient foam, contract-grade fabric) with a removable cover for easy maintenance. Suitable for lounges, lobbies, and modern apartments - simple, purposeful, and versatile.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY B-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY B-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered volume",
        "description": "The fully upholstered volume is subtly lifted by a slim metal frame, creating a sense of lightness and visual order. Clean edges and precise proportions give the pouf a composed, architectural character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY B 3.jpg"
      },
      {
        "title": "Legs",
        "description": "Slender metal legs with a sturdy structure create a balanced foundation, adding a minimalist yet sophisticated character to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY B 4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/caty-b"
  },
  {
    "id": "bplus-112",
    "bplusId": 112,
    "sku": "PO010",
    "name": "CATY A",
    "slug": "caty-a",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W670 x D670 x H410 mm",
    "shortDescription": "Caty A is a minimalist pouf: a low, round cushion whose soft proportions contrast with slim metal legs, creating a refined “floating” effect. The design lang...",
    "description": "Caty A is a minimalist pouf: a low, round cushion whose soft proportions contrast with slim metal legs, creating a refined “floating” effect. The design language emphasizes proportion, negative space, and the flexibility to combine modules. Materials are carefully selected (resilient foam, contract-grade fabric) with a removable cover for easy maintenance. Suitable for lounges, lobbies, and modern apartments - simple, purposeful, and versatile.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY A thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY A thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered volume",
        "description": "The fully upholstered volume is subtly lifted by a slim metal frame, creating a sense of lightness and visual order. Clean edges and precise proportions give the pouf a composed, architectural character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY A 1.jpg"
      },
      {
        "title": "Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CATY A 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/caty-a"
  },
  {
    "id": "bplus-109",
    "bplusId": 109,
    "sku": "PO084",
    "name": "MACARON",
    "slug": "macaron",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W600 x D600 x H420 mm",
    "shortDescription": "Too much cuteness, you can almost taste it. Macaron Pouf is a bite of sweetness turned into furniture - round, puffy, and irresistibly charming. Its soft lay...",
    "description": "Too much cuteness, you can almost taste it. Macaron Pouf is a bite of sweetness turned into furniture - round, puffy, and irresistibly charming. Its soft layers and playful silhouette recall the delicate French confection, inviting you to sink in as if indulging in a guilty pleasure.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MACARON-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MACARON-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Soft Layered Seat",
        "description": "Macaron Pouf translates confectionery inspiration into a layered, circular seating form. Two rounded cushion volumes are visually separated by a contrasting horizontal band, emphasizing its stacked composition. The softened edges and generous padding create a plush, inviting profile, while short cylindrical legs provide a stable, grounded base. Playful yet controlled in proportion, Macaron Pouf introduces character without compromising balance.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/macaron"
  },
  {
    "id": "bplus-108",
    "bplusId": 108,
    "sku": "SPROUT-WE4A",
    "name": "SPROUT",
    "slug": "sprout",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Fresh, lively, and full of promise — the Sprout Pouf captures the gentle energy of a new bud breaking through the soil. Its rounded, cushiony body feels as s...",
    "description": "Fresh, lively, and full of promise — the Sprout Pouf captures the gentle energy of a new bud breaking through the soil. Its rounded, cushiony body feels as soft and buoyant as a cloud, while its slim, stem-like legs lift it lightly off the ground, echoing the elegance of a young shoot reaching for the sun.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SPROUT-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SPROUT-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "LEGS",
        "description": "A solid metal structure with strong load-bearing capacity, providing stability and a modern aesthetic to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SPROUT-1.jpeg"
      },
      {
        "title": "Upholstered Seat",
        "description": "A seating surface covered in fabric or leather, combined with a soft cushioning layer to enhance comfort and user experience. The design balances aesthetics with functionality, providing a comfortable seating feel.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SPROUT-2.jpeg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sprout"
  },
  {
    "id": "bplus-106",
    "bplusId": 106,
    "sku": "CH024",
    "name": "AEGIS",
    "slug": "aegis",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W640 x D572 x H985 mm",
    "shortDescription": "Aegis Medical Chair is crafted for comfort and reassurance in healthcare spaces. With soft, rounded forms and a lightweight frame, it offers gentle support a...",
    "description": "Aegis Medical Chair is crafted for comfort and reassurance in healthcare spaces. With soft, rounded forms and a lightweight frame, it offers gentle support and ease of movement. Designed with care, AEGIS brings a sense of calm and warmth to every environment.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AEGIS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AEGIS thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/aegis"
  },
  {
    "id": "bplus-105",
    "bplusId": 105,
    "sku": "SL016",
    "name": "EASY bar stool, plywood, armrest",
    "slug": "easy-bar-stool-plywood-armrest",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W560 x D532 x H1070 mm",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easybarstoolplyarm.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easybarstoolplyarm.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-bar-stool-plywood-armrest"
  },
  {
    "id": "bplus-104",
    "bplusId": 104,
    "sku": "CH108",
    "name": "EASY 4-star",
    "slug": "easy-4-star",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Task Chair",
    "dimensions": "W495 x D520 x H775 mm",
    "shortDescription": "Building on the clean, minimalist design of the original Easy chair, the Easy Office Chair brings mobility and flexibility to your workspace. Featuring a smo...",
    "description": "Building on the clean, minimalist design of the original Easy chair, the Easy Office Chair brings mobility and flexibility to your workspace. Featuring a smooth swivel base and durable rolling wheels, it allows you to move effortlessly without compromising comfort or style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-banhxe.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-banhxe.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-4-star"
  },
  {
    "id": "bplus-103",
    "bplusId": 103,
    "sku": "CH110",
    "name": "EASY 4-star fixed base",
    "slug": "easy-4-star-fixed-base",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Task Chair",
    "dimensions": "W1000 x D800 x H800 mm • 20 kg",
    "shortDescription": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually ligh...",
    "description": "Easy Chair speaks minimalist clarity: a clean silhouette of slender steel tubing paired with softly rounded cushions. Very simple and compact — visually lightweight and easy to place — yet designed for true comfort with an ergonomically contoured seat and back.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-0banhxe.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-easy-0banhxe.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/easy-4-star-fixed-base"
  },
  {
    "id": "bplus-102",
    "bplusId": 102,
    "sku": "SL024",
    "name": "LING BAR STOOL",
    "slug": "ling-bar-stool",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W555 x D508 x H1070 mm",
    "shortDescription": "Ling embodies a soft yet confident character — where fluid lines meet precise detailing. Its gently curved seat and slender legs create a silhouette that fee...",
    "description": "Ling embodies a soft yet confident character — where fluid lines meet precise detailing. Its gently curved seat and slender legs create a silhouette that feels both light and inviting. Designed for modern hospitality and bar settings, Ling blends comfort with effortless sophistication, offering a refined touch to any contemporary interior.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-lingbarstool-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-lingbarstool-thump3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ling-bar-stool"
  },
  {
    "id": "bplus-101",
    "bplusId": 101,
    "sku": "PO058",
    "name": "COLONY",
    "slug": "colony",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W600 x D600 x H420 mm",
    "shortDescription": "Colony Pouf draws inspiration from the image of a resilient and dynamic worker ant — strong, purposeful, yet full of energy. The design translates this spiri...",
    "description": "Colony Pouf draws inspiration from the image of a resilient and dynamic worker ant — strong, purposeful, yet full of energy. The design translates this spirit into a form that feels both youthful and refreshing while still carrying a sense of elegance. The cushion’s surface appears with a soft, plump volume that invites comfort. This balance between structure and coziness gives the piece a playful character without losing its sophistication.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COLONY-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COLONY-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Circular Seat on Splayed Legs",
        "description": "Colony Pouf is shaped through a low, rounded cushion volume that appears gently compressed at the center, creating a subtle radial articulation. The continuous seam around its perimeter reinforces the disc-like geometry while defining a clear structural boundary. Slender metal legs extend outward at an angle, introducing a dynamic stance that echoes the poised posture of a worker ant.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/colony"
  },
  {
    "id": "bplus-98",
    "bplusId": 98,
    "sku": "PO051",
    "name": "AXLE",
    "slug": "axle",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Ottoman / Pouf",
    "dimensions": "W600 x D600 x H450 mm",
    "shortDescription": "The Axle Pouf draws inspiration from the core of movement in industrial design—the axle itself. Its bold, layered silhouette resembles the strength of engine...",
    "description": "The Axle Pouf draws inspiration from the core of movement in industrial design—the axle itself. Its bold, layered silhouette resembles the strength of engineered machinery, yet softened with plush upholstery for modern comfort; striking a balance between industrial edge and contemporary elegance.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AXLE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AXLE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Dual-Tier Upholstered Form",
        "description": "Axle Pouf is defined by its stacked cylindrical composition, articulated through a distinct horizontal band that visually separates the upper and lower volumes. The layered geometry references mechanical assemblies while maintaining a soft, upholstered expression. Slim metal legs elevate the rounded mass, introducing contrast between engineered precision and cushioned form. ",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/axle"
  },
  {
    "id": "bplus-96",
    "bplusId": 96,
    "sku": "CHARLIE-WW92",
    "name": "CHARLIE",
    "slug": "charlie",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Modular Sofa",
    "dimensions": "W1585 x D705 x H850 mm",
    "shortDescription": "Charlie is a modular sofa system with angular, minimalist geometry — designed to assemble into flowing linear runs or a centralized hexagonal formation. Low-...",
    "description": "Charlie is a modular sofa system with angular, minimalist geometry — designed to assemble into flowing linear runs or a centralized hexagonal formation. Low-profile modules with wide seating combine with removable low-back screens to create lightly private zones; slim metal legs give a “floating,” airy look and make cleaning easy. Built for contract/public environments: flexible layouts, removable covers for maintenance, and optional modular power/USB integration.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHARLIE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHARLIE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with a soft upholstered finish provide exceptional comfort while elevating the chair’s refined and luxurious appearance. Precisely tailored stitching emphasizes the chair’s structured geometry while adding a sophisticated sense of depth and visual balance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CHARLIE 4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/charlie"
  },
  {
    "id": "bplus-95",
    "bplusId": 95,
    "sku": "ANGELINA-WY38",
    "name": "ANGELINA",
    "slug": "angelina",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Modular Sofa",
    "dimensions": "W1000 x D800 x H800 mm",
    "shortDescription": "Elegant and effortlessly inviting, the Angelina Module Sofa is defined by its smooth curves and graceful contours. Every line flows seamlessly, creating a se...",
    "description": "Elegant and effortlessly inviting, the Angelina Module Sofa is defined by its smooth curves and graceful contours. Every line flows seamlessly, creating a sense of softness and balance that elevates any interior. Its fluid silhouette and refined proportions offer both comfort and sophistication, making Angelina a statement of understated elegance for modern living spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-angelina-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-angelina-thump3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/angelina"
  },
  {
    "id": "bplus-94",
    "bplusId": 94,
    "sku": "BRICKER-WZXO",
    "name": "BRICKER",
    "slug": "bricker",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Modular Sofa",
    "dimensions": "W1000 x D800 x H800 mm",
    "shortDescription": "Bricker Module Sofa combines clean geometry with effortless flexibility. Each module can be rearranged or combined to fit different layouts—forming linear ro...",
    "description": "Bricker Module Sofa combines clean geometry with effortless flexibility. Each module can be rearranged or combined to fit different layouts—forming linear rows, clustered seating, or open configurations. Minimal in form yet rich in versatility, Bricker offers a smart, adaptable solution for contemporary spaces that value both comfort and style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-bricker-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-bricker-thump3"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/bricker"
  },
  {
    "id": "bplus-92",
    "bplusId": 92,
    "sku": "CH089",
    "name": "MINO",
    "slug": "mino",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W505 x D850 x H600 mm",
    "shortDescription": "A refined blend of modern grace and functional simplicity. Mino features sleek curves, a slender metal frame, and a contoured seat that embodies quiet sophis...",
    "description": "A refined blend of modern grace and functional simplicity. Mino features sleek curves, a slender metal frame, and a contoured seat that embodies quiet sophistication — perfect for contemporary learning and collaborative spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MINO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MINO thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mino"
  },
  {
    "id": "bplus-91",
    "bplusId": 91,
    "sku": "CH081",
    "name": "EDGE",
    "slug": "edge",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Stackable Chair",
    "dimensions": "W545 x D530 x H825 mm",
    "shortDescription": "Defined by clean lines and minimalist form, the Edge Chair captures the essence of modern versatility. Its sculpted wooden shell and refined metal base creat...",
    "description": "Defined by clean lines and minimalist form, the Edge Chair captures the essence of modern versatility. Its sculpted wooden shell and refined metal base create a perfect balance between warmth and precision — an elegant statement for contemporary work, learning, and social spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EDGE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EDGE thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/edge"
  },
  {
    "id": "bplus-90",
    "bplusId": 90,
    "sku": "HS019",
    "name": "JAME",
    "slug": "jame",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1700 x D700 x H1300 mm",
    "shortDescription": "With its enveloping silhouette and soft, padded form, the Jame Highback Sofa offers a sense of warmth and privacy within any space. Its simple, approachable ...",
    "description": "With its enveloping silhouette and soft, padded form, the Jame Highback Sofa offers a sense of warmth and privacy within any space. Its simple, approachable design makes it effortlessly versatile - inviting users to sit back, unwind, or focus in comfort. The clean lines and gentle proportions bring a cozy sophistication that feels both intimate and universally welcoming.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JAME thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JAME thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "High-Back Detail",
        "description": "The high-back sofa features a padded, extended back panel detailed with vertical stitched lines. These tailored seams introduce a rhythmic visual pattern, softening the overall volume and reducing any sense of heaviness. Beyond aesthetics, the upholstered back provides a more comfortable and supportive enclosure. The result is a design that feels structured yet visually engaging, with a lighter, more approachable presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JAME 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/jame"
  },
  {
    "id": "bplus-89",
    "bplusId": 89,
    "sku": "HS023",
    "name": "MAYER 900",
    "slug": "mayer",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W900 x D690 x H1118 mm",
    "shortDescription": "The Mayer Highback Sofa exudes refined sophistication with a modern twist. Its sleek lines and vertically stitched panels bring a fresh sense of texture and ...",
    "description": "The Mayer Highback Sofa exudes refined sophistication with a modern twist. Its sleek lines and vertically stitched panels bring a fresh sense of texture and rhythm, while the soft contrast of tones adds youthful elegance. Designed for dynamic environments, Mayer blends luxury with approachability - a statement piece that elevates contemporary offices, lounges, or creative spaces alike.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAYER 900 thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAYER 900 thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Carefully tailored stitching defines the gentle seat segments while enhancing the bench’s soft contours and elegant visual rhythm.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAYER 900 2.jpg"
      },
      {
        "title": "Upholstery",
        "description": "Soft upholstered seating with subtle tufted segments pairs elegantly with the cylindrical backrest, delivering a refined sense of comfort and sophistication.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAYER 900 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mayer"
  },
  {
    "id": "bplus-88",
    "bplusId": 88,
    "sku": "LC152",
    "name": "EMBRACE",
    "slug": "embrace",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W810 x D775 x H1150 mm",
    "shortDescription": "Designed for privacy and comfort, the Embrace Highback Sofa creates a personal retreat within open spaces. Its enveloping form, soft upholstery, and sculpted...",
    "description": "Designed for privacy and comfort, the Embrace Highback Sofa creates a personal retreat within open spaces. Its enveloping form, soft upholstery, and sculpted silhouette bring a sense of calm and sophistication — perfect for focused work, quiet conversation, or moments of pause.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMBRACE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMBRACE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "High-Panel Cocoon Structure",
        "description": "Embrace is designed with a cocoon-like form that creates a sense of privacy and comfort. The tall, enveloping side panels act as acoustic and visual shields, while the deep cushioned seat and supportive backrest enhance relaxation.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/embrace"
  },
  {
    "id": "bplus-87",
    "bplusId": 87,
    "sku": "HS016",
    "name": "HUGIE",
    "slug": "hugie",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1640 x D760 x H1255 mm",
    "shortDescription": "A modern haven of comfort and focus, the Hugie Highback Sofa combines soft contours with functional design. Its high upholstered shell offers acoustic and vi...",
    "description": "A modern haven of comfort and focus, the Hugie Highback Sofa combines soft contours with functional design. Its high upholstered shell offers acoustic and visual privacy, while the integrated table and power module support seamless work and relaxation — ideal for today’s collaborative yet mindful spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUGIE thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUGIE thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Sculpted U-Form Backrest",
        "description": "Hugie Highback Sofa is defined by its tall, wraparound upholstered shell that forms a cohesive, protective volume. The broad, gently curved back panel extends seamlessly into side wings, creating a continuous enclosure profile. A compact seat base with softened edges contrasts the vertical mass, while the integrated side table projects as a functional horizontal element. Elevated on slim metal legs, Hugie presents a balanced composition of enclosure, extension, and structural clarity.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hugie"
  },
  {
    "id": "bplus-86",
    "bplusId": 86,
    "sku": "HS022",
    "name": "MARIS 1000",
    "slug": "maris",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1000 x D700 x H1320 mm",
    "shortDescription": "Compact yet full of character, the Maris Highback Sofa embraces a sense of softness and volume within a minimal footprint. Its gently curved, plump form crea...",
    "description": "Compact yet full of character, the Maris Highback Sofa embraces a sense of softness and volume within a minimal footprint. Its gently curved, plump form creates an inviting cocoon of comfort while optimizing space efficiency. With its rounded silhouette and enveloping design, Maris adds a cozy, contemporary charm to modern offices, lounges, or compact waiting areas.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARIS1000.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARIS1000.jpg"
    ],
    "highlights": [
      {
        "title": "Designed to Belong",
        "description": "A simple, unembellished design feels instantly familiar and easy to relate to. Free from visual excess, it suits a wide range of aesthetic preferences while remaining approachable. Always composed and ready in presence, the piece naturally fits into everyday life and use.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARIS 1000 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/maris"
  },
  {
    "id": "bplus-85",
    "bplusId": 85,
    "sku": "TABO-XHZ1",
    "name": "TABO",
    "slug": "tabo",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W1000 x D770 x H1300 mm • 20 kg",
    "shortDescription": "With its precise geometry and enveloping form, the Tabo Highback Sofa commands presence through balance and proportion. The squared silhouette and integrated...",
    "description": "With its precise geometry and enveloping form, the Tabo Highback Sofa commands presence through balance and proportion. The squared silhouette and integrated side panel create a sense of grounded solidity, offering both privacy and comfort. Designed to anchor a space, Tabo carries a quiet architectural weight - structured yet inviting, refined yet substantial.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TABO thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TABO thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Side Table",
        "description": "The integrated side table allows the Tabo highback chair to function effortlessly as a personal workstation, supporting focused tasks while maintaining comfort and privacy.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-tabo-h1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/tabo"
  },
  {
    "id": "bplus-82",
    "bplusId": 82,
    "sku": "CT027",
    "name": "NONI",
    "slug": "noni",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W1016 x D780 x H400 mm",
    "shortDescription": "The Noni Coffee Table captivates with its gentle curves and fluid silhouette, offering a sense of calm and effortless balance. Its softly contoured edges and...",
    "description": "The Noni Coffee Table captivates with its gentle curves and fluid silhouette, offering a sense of calm and effortless balance. Its softly contoured edges and natural flow invite the eye to linger, creating a piece that feels both grounded and gracefully organic — a harmonious blend of modern elegance and quiet charm.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-noni-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-noni-thump2"
    ],
    "highlights": [
      {
        "title": "Dynamic Three-Leg Structure",
        "description": "The asymmetrically curved tabletop brings an organic quality to the design, paired with a three-leg structure that gives Noni a lively visual presence. The form feels almost alive, full of movement and character. By breaking away from predictable balance, Noni injects energy into structured spaces and disrupts any sense of visual monotony.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-noni-hl2"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/noni"
  },
  {
    "id": "bplus-81",
    "bplusId": 81,
    "sku": "CT018",
    "name": "NALLO",
    "slug": "nallo",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W800 x D800 x H350 mm",
    "shortDescription": "The Nallo Coffee Table captures a sense of calm harmony and thoughtful balance. Its round silhouette rests on a precisely structured base, creating a centere...",
    "description": "The Nallo Coffee Table captures a sense of calm harmony and thoughtful balance. Its round silhouette rests on a precisely structured base, creating a centered presence that anchors the space. Designed with equilibrium in mind, it brings a grounded elegance to any modern setting.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-nallo-thump",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-nallo-thump"
    ],
    "highlights": [
      {
        "title": "Quiet Structural Accent",
        "description": "The triangular leg structure creates a quietly balanced foundation, acting as a subtle design accent. It doesn’t demand attention at first glance, yet reveals its character upon closer inspection. This understated detail adds an element of surprise while reinforcing the chair’s stability and composure.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-nallo-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nallo"
  },
  {
    "id": "bplus-79",
    "bplusId": 79,
    "sku": "ST020",
    "name": "HANOTA",
    "slug": "hanota",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W530 x D530 x H450 mm",
    "shortDescription": "The Hanota Coffee Table embraces raw simplicity in its purest form. Crafted with natural wood surfaces and a sleek metal frame, it celebrates honest material...",
    "description": "The Hanota Coffee Table embraces raw simplicity in its purest form. Crafted with natural wood surfaces and a sleek metal frame, it celebrates honest materials and straightforward design. Every detail feels grounded and authentic, offering a quiet charm that blends rustic warmth with modern clarity.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hanota-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hanota-thump3"
    ],
    "highlights": [
      {
        "title": "Balanced Layered Form",
        "description": "The two-tier tabletop is supported by a simple frame, creating a composition that feels elegant and easy on the eye. It carries a sense of presence without visual heaviness, allowing the table to stand on its own. Balanced and composed, the design sits comfortably alongside surrounding furniture without creating conflict.\n",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-hanota-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hanota"
  },
  {
    "id": "bplus-78",
    "bplusId": 78,
    "sku": "LC124",
    "name": "MOON",
    "slug": "moon",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W800 x D750 x H690 mm",
    "shortDescription": "Inspired by the serene beauty of a crescent moon, the Moon Chair embodies softness and balance in every curve.",
    "description": "Inspired by the serene beauty of a crescent moon, the Moon Chair embodies softness and balance in every curve.\nIts rounded seat and gently arched backrest create a harmonious silhouette that radiates calm and comfort.\nDelicate contrast piping adds a subtle highlight, accentuating its sculptural form.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOON thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOON thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "The backrest is finely crafted, bringing warmth and natural elegance to the design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MOON 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/moon"
  },
  {
    "id": "bplus-77",
    "bplusId": 77,
    "sku": "LC061",
    "name": "BUT100",
    "slug": "but-100",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W830 x D815 x H865 mm",
    "shortDescription": "Inspired by the fairy Vietnamese story Hundred-Knot Bamboo, 100.BUT chair is not just a piece of furniture but also an artistic one that combines tradition a...",
    "description": "Inspired by the fairy Vietnamese story Hundred-Knot Bamboo, 100.BUT chair is not just a piece of furniture but also an artistic one that combines tradition and creativity. The product enhances the living space's aesthetics and reflects our country's cultural values and traditions.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BUT100-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BUT100-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Technical ",
        "description": "By combining the Mortise and Tenon technique with carving and inlay in the story, we create a captivating and rich imagery of utilizing traditional techniques to achieve a special goal and explore extraordinary things.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BUT100-hl1.png"
      },
      {
        "title": "Material",
        "description": "The Eco-leather used in this product is sourced from tree bark, which is a byproduct of the timber industry. By utilizing this bark, we contribute to environmental protection by reducing waste and utilizing renewable resources.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BUT100-hl2.png"
      },
      {
        "title": "v",
        "description": "v",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/BUT100-hl3.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/but-100"
  },
  {
    "id": "bplus-76",
    "bplusId": 76,
    "sku": "LC060",
    "name": "CLOUDY",
    "slug": "cloudy",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W850 x D840 x H790 mm",
    "shortDescription": "Softly contoured and gently layered, the Cloudy Lounge Chair takes inspiration from the quiet rhythm of drifting clouds.",
    "description": "Softly contoured and gently layered, the Cloudy Lounge Chair takes inspiration from the quiet rhythm of drifting clouds.\nIts horizontal quilting evokes the fluid motion of the sky, bringing a sense of ease and serenity to any setting.\nBalanced on a sleek metal frame, the generous seat invites relaxation without losing its refined silhouette.\nAn airy expression of comfort — light, calm, and effortlessly contemporary.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cloudy-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-cloudy-thump2"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "The seat cushioning is segmented to create a cloud-like, buoyant appearance while enhancing lounging comfort. Each cushioned section responds naturally to the body, offering balanced support and encouraging relaxation. This thoughtful construction delivers both visual softness and functional ease, ideal for extended moments of rest.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 5.jpg"
      },
      {
        "title": "The Armrest",
        "description": "The slim wooden armrests are carefully proportioned to complement the chair’s silhouette. Their refined profile provides natural support, enhancing comfort without adding visual weight.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 2.jpg"
      },
      {
        "title": "Legs",
        "description": "Powder-coated metal legs feature a slender profile and sturdy construction, bringing a sense of modern elegance and durability to the piece.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CLOUDY 4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/cloudy"
  },
  {
    "id": "bplus-75",
    "bplusId": 75,
    "sku": "PING-XZYP",
    "name": "PING",
    "slug": "ping",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W590 x D604 x H780 mm",
    "shortDescription": "Distinctive and unconventional, the Ping Chair challenges traditional forms with a playful yet refined attitude.",
    "description": "Distinctive and unconventional, the Ping Chair challenges traditional forms with a playful yet refined attitude.\nIts bold composition - a compact seat crowned with a sculptural backrest - creates a striking visual balance between structure and softness.\nMinimal in lines but rich in character, it stands as a statement piece that sparks curiosity and conversation.\nDesigned for those who appreciate originality and creative design expression.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PING thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PING thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Ping Chair stands out with its dynamic, full-bodied lines, balanced by a minimal supporting frame. This contrast creates a strong visual presence, allowing the form to feel expressive yet light. As a clear beacon of attraction, the chair naturally draws the eye and becomes a focal point within any space.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PING 3.jpg"
      },
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with balanced proportions provide exceptional comfort while reflecting the refined and luxurious essence of Indochine design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PING 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ping"
  },
  {
    "id": "bplus-74",
    "bplusId": 74,
    "sku": "LC093",
    "name": "FUNNY",
    "slug": "funny",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W770 x D780 x H700 mm",
    "shortDescription": "Playful by name and by nature, the Funny Chair radiates a joyful, lighthearted charm.",
    "description": "Playful by name and by nature, the Funny Chair radiates a joyful, lighthearted charm.\nIts rounded contours and cheerful two-tone design bring a sense of movement and personality to any interior.\nCompact yet full of character, it’s a piece that sparks smiles and invites spontaneous comfort.\nDesigned to energize spaces with a touch of wit and modern vibrancy.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FUNNY thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FUNNY thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with a soft upholstered finish provide exceptional comfort while elevating the chair’s refined and luxurious appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FUNNY 5.jpg"
      },
      {
        "title": "Frame junction",
        "description": "Softly detailed junctions between the backrest and seat frame highlight the balance of craftsmanship and form.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/FUNNY 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/funny"
  },
  {
    "id": "bplus-73",
    "bplusId": 73,
    "sku": "LC100",
    "name": "MAYA",
    "slug": "maya",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W845 x D765 x H765 mm",
    "shortDescription": "The Maya Chair embodies a harmony of elegance and precision. Its clean, defined lines and balanced proportions create a look that is both refined and contemp...",
    "description": "The Maya Chair embodies a harmony of elegance and precision. Its clean, defined lines and balanced proportions create a look that is both refined and contemporary. The gently contoured backrest and armrests offer a sense of understated luxury, while the solid base adds a confident, architectural presence.\nPerfect for modern interiors, the Maya Chair invites comfort without compromising on sophistication - a timeless piece where simplicity meets subtle grandeur.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-maya-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-maya-thump3"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAYA 3.jpg"
      },
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with balanced proportions provide exceptional comfort while reflecting the refined and luxurious essence of Indochine design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MAYA 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/maya"
  },
  {
    "id": "bplus-72",
    "bplusId": 72,
    "sku": "LC041",
    "name": "SILAS",
    "slug": "silas",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W900 x D840 x H845 mm",
    "shortDescription": "The Silas Chair exudes an inviting sense of warmth and sophistication. Its smooth, enveloping form and plush cushioning create a haven of comfort, while the ...",
    "description": "The Silas Chair exudes an inviting sense of warmth and sophistication. Its smooth, enveloping form and plush cushioning create a haven of comfort, while the graceful curves add an understated elegance to any setting. Supported by a sleek swivel base, Silas blends refined craftsmanship with modern versatility — a statement piece that feels right at home in both cozy lounges and contemporary offices alike.\nA chair designed to embrace you in style and serenity.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SILAS thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SILAS thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Soft upholstered cushioning with a practical lift-top design offers everyday comfort while discreetly maximizing hidden storage space.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SILAS 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/silas"
  },
  {
    "id": "bplus-71",
    "bplusId": 71,
    "sku": "SAMY-A-Y9TP",
    "name": "SAMY A",
    "slug": "samy-a",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W760 x D850 x H770 mm • 20 kg",
    "shortDescription": "The Samy A Chair stands out with its striking geometry and sharp-edged design language. Every line and angle is purposefully crafted to express strength and ...",
    "description": "The Samy A Chair stands out with its striking geometry and sharp-edged design language. Every line and angle is purposefully crafted to express strength and individuality, creating a sculptural presence that commands attention. The firm, structured upholstery contrasts beautifully with the bold wooden frame, giving the chair a modern architectural appeal.\nDynamic yet refined, Samy A is a celebration of form — perfect for spaces that embrace creativity, confidence, and contemporary style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMY thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMY thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Generously cushioned upholstery with a soft surface and balanced support offers lasting comfort while enhancing the clean and minimalist aesthetic.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMY 1.jpg"
      },
      {
        "title": "Armrest",
        "description": "Softly upholstered armrests provide enhanced comfort and a refined finishing touch.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SAMY 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/samy-a"
  },
  {
    "id": "bplus-70",
    "bplusId": 70,
    "sku": "LC001",
    "name": "AIRPOTU",
    "slug": "airpotu",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W770 x D760 x H870 mm",
    "shortDescription": "Flowing armrests and a softly contoured backrest create a harmonious silhouette that feels both inviting and refined.",
    "description": "Flowing armrests and a softly contoured backrest create a harmonious silhouette that feels both inviting and refined.\nThe curves move in a continuous rhythm, guiding the eye from the seat upward, enhancing the chair’s sense of balance and comfort.\nElegant yet understated, it offers a sculpted form that rests lightly on slender metal legs - a perfect blend of softness and structure.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AIRPOTU-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AIRPOTU-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Curved Armrest Structure",
        "description": "The arched armrests form a gentle, architectural curve, creating a clear visual highlight within the design. This vaulted profile frames the seat naturally, offering supportive comfort while reinforcing the chair’s flowing geometry.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-airpotu-hl1"
      },
      {
        "title": "Lightweight Structural Support",
        "description": "The slender, elongated legs are reduced to a minimalist expression, allowing the form to remain visually light. Their simplicity works in harmony with the overall silhouette, subtly lifting and emphasizing the seat cushioning.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-airpotu-hl2"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/airpotu"
  },
  {
    "id": "bplus-69",
    "bplusId": 69,
    "sku": "SF025",
    "name": "OLGA",
    "slug": "olga",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "Kích thước tiêu chuẩn kiến trúc B+",
    "shortDescription": "Olga sofa combines a striking, curved silhouette with elegant vertical channel tufting. Supported by slim metal legs, Olga sofa offers a sophisticated and co...",
    "description": "Olga sofa combines a striking, curved silhouette with elegant vertical channel tufting. Supported by slim metal legs, Olga sofa offers a sophisticated and comfortable seating solution perfect for modern lobbies, reception areas, and collaborative spaces. Its timeless design invites relaxation and conversation, making it a centerpiece for any contemporary interior.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OLGA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/OLGA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Corner Detail",
        "description": "Upholstered corner detail with vertically tufted cushioning, creating a soft and sculpted appearance.\nThe textured fabric enhances depth and comfort while giving the sofa a refined, modern character.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/olga"
  },
  {
    "id": "bplus-68",
    "bplusId": 68,
    "sku": "SF048",
    "name": "EMMA",
    "slug": "emma",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2000 x D770 x H650 mm",
    "shortDescription": "Emma sofa presents a seamless silhouette with its backrest flowing naturally into both armrests, creating an elegant, unified form. The arms curve with a ref...",
    "description": "Emma sofa presents a seamless silhouette with its backrest flowing naturally into both armrests, creating an elegant, unified form. The arms curve with a refined softness, adding a touch of sophistication without overwhelming the design. A smooth, continuous seat cushion enhances the sense of simplicity and visual calm, giving the sofa a clean yet luxurious presence",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMMA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMMA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Structured Form with Visible Seams",
        "description": "The squared lines are softened rather than sharp, while visible stitching adds a welcoming rhythm across the surface. Each seam is intentionally expressed, bringing warmth and approachability to the form without losing its structured character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMMA-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/emma"
  },
  {
    "id": "bplus-67",
    "bplusId": 67,
    "sku": "SF037",
    "name": "EMILY",
    "slug": "emily",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2000 x D780 x H780 mm",
    "shortDescription": "A two-seater sofa with an armless silhouette, its backrest gently wraps forward to create a subtle, embracing curve that feels both inviting and familiar. Th...",
    "description": "A two-seater sofa with an armless silhouette, its backrest gently wraps forward to create a subtle, embracing curve that feels both inviting and familiar. The seat is crafted as a single continuous cushion, divided by a clean central groove that adds character without interrupting comfort. Its overall form is distinctive and contemporary, yet softened by proportions and contours that keep it warm, approachable, and instantly easy to live with.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMILY thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMILY thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Compact Armless Structure",
        "description": "Emily’s armless structure is clean and compact, yet it remains quietly inviting in presence. The design avoids broad appeal, favoring a more considered and discerning eye. For those who look closely, Emily reveals itself as a meaningful piece that adds depth and character to the space.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMILY 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/emily"
  },
  {
    "id": "bplus-66",
    "bplusId": 66,
    "sku": "CS047",
    "name": "SKYLAR",
    "slug": "skylar",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2650 x D670 x H1380 mm",
    "shortDescription": "Skylar Sofa features a graceful, gently curved silhouette that feels effortlessly airy and refined. Its soft, flowing form creates a sense of lightness, whil...",
    "description": "Skylar Sofa features a graceful, gently curved silhouette that feels effortlessly airy and refined. Its soft, flowing form creates a sense of lightness, while the generous seat and plush cushions invite relaxation. With its sculptural presence and elegant arc, Skylar brings a touch of sophistication and poetic ease to any contemporary space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SKYLAR thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SKYLAR thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "The backrest and seat cushions",
        "description": "Generously padded seating and a gently contoured backrest create a relaxed and comfortable sitting experience.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SKYLAR 5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/skylar"
  },
  {
    "id": "bplus-65",
    "bplusId": 65,
    "sku": "CH018",
    "name": "PAMELA",
    "slug": "pamela",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W470 x D550 x H800 mm",
    "shortDescription": "Pamela Dining Chair has a sweetness that instantly catches the eye-soft curves, plush padding, and a pastel glow that feels almost edible. Pamela adds a play...",
    "description": "Pamela Dining Chair has a sweetness that instantly catches the eye-soft curves, plush padding, and a pastel glow that feels almost edible. Pamela adds a playful spark to the room without losing its sense of sophistication.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PAMELA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PAMELA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Rounded seat",
        "description": "Pamela's rounded seat and pillowy back create a charming, candy-drop silhouette, while the slim black legs keep the whole piece feeling light and contemporary.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-pamela-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/pamela"
  },
  {
    "id": "bplus-64",
    "bplusId": 64,
    "sku": "CH056",
    "name": "SONAR",
    "slug": "sonar",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W480 x D515 x H745 mm",
    "shortDescription": "A contemporary dining chair showcasing a minimalist design with a focus on comfort. It features a plush, circular seat and a supportive rectangular backrest,...",
    "description": "A contemporary dining chair showcasing a minimalist design with a focus on comfort. It features a plush, circular seat and a supportive rectangular backrest, both upholstered in a soft, neutral-toned fabric. The chair stands on a sleek, durable black metal frame, offering a perfect blend of modern elegance and everyday functionality.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SONAR thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SONAR thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Fabric and Upholstery",
        "description": "The seat and backrest are generously padded and upholstered in a durable premium woven fabric for softness and comfort. The neutral beige or off-white tone gives a refined, versatile look that suits various interiors. A horizontal channel-tufted backrest enhances both aesthetics and ergonomic support.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SONAR 4.jpg"
      },
      {
        "title": "Frame Construction",
        "description": "The chair is built on a lightweight yet durable powder-coated metal frame with a timeless matte black finish, ensuring long-lasting stability. Slim, splayed legs create a modern and refined silhouette while making the chair easy to move. The minimalist metal structure contrasts elegantly with the soft upholstery, emphasizing its contemporary character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SONAR 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sonar"
  },
  {
    "id": "bplus-63",
    "bplusId": 63,
    "sku": "CH015",
    "name": "SIMON",
    "slug": "simon",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W500 x D510 x H715 mm",
    "shortDescription": "With a circular base, a slender, gently curved backrest, and straight, delicate legs, Simon embodies refined elegance that blends classic charm with modern f...",
    "description": "With a circular base, a slender, gently curved backrest, and straight, delicate legs, Simon embodies refined elegance that blends classic charm with modern freshness. This chair makes a bold statement in any setting, from home to office.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SIMON thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SIMON thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Frame",
        "description": "Classic at first glance, the Simon chair unfolds with an unexpected twist. The expressive frame and refined form create a lasting visual intrigue, remaining engaging even in stillness.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SIMON 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/simon"
  },
  {
    "id": "bplus-62",
    "bplusId": 62,
    "sku": "CH037",
    "name": "ISHA",
    "slug": "isha",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Dining Chair",
    "dimensions": "W480 x D515 x H815 mm • 20 kg",
    "shortDescription": "Isha Chair stands out with its slender, refined legs. The crisp, square seat cushion creates a striking contrast with the softly curved backrest, which gentl...",
    "description": "Isha Chair stands out with its slender, refined legs. The crisp, square seat cushion creates a striking contrast with the softly curved backrest, which gently wraps around the body for added comfort. This interplay of sharp geometry and subtle contours gives Isha a distinctive, contemporary character that feels inviting.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ISHA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ISHA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "Plush seat and back cushions with balanced proportions provide exceptional comfort while reflecting the refined and luxurious essence of Indochine design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ISHA 3.jpg"
      },
      {
        "title": "Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ISHA 4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/isha"
  },
  {
    "id": "bplus-61",
    "bplusId": 61,
    "sku": "SF013",
    "name": "JAY",
    "slug": "jay",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2400 x D890 x H760 mm",
    "shortDescription": "Jay Sofa takes its inspiration from the distinctive Jay bird, expressed through a backrest that flows seamlessly into raised armrests, echoing the bird’s poi...",
    "description": "Jay Sofa takes its inspiration from the distinctive Jay bird, expressed through a backrest that flows seamlessly into raised armrests, echoing the bird’s poised, elegant silhouette. The inner upholstery in light tones contrasts strikingly with the deep black exterior, mirroring the bird’s bold feather markings. Its softly inflated, full-bodied form adds a sense of plush comfort, balancing visual contrast with gentle, inviting softness.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JAY thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JAY thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Integrated Back-Arm Structure",
        "description": "The sofa features an integrated backrest and armrest structure, forming a continuous supporting frame.\nA controlled color transition between the inner and outer upholstery defines the form, while calibrated cushioning maintains a full, well-supported profile. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JAY-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/jay"
  },
  {
    "id": "bplus-60",
    "bplusId": 60,
    "sku": "BN002",
    "name": "AGACIA B",
    "slug": "agacia-b",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W1500 x D540 x H420 mm",
    "shortDescription": "The Agacia redefines modular seating with a language of quiet elegance. Its form is composed of smooth, continuous lines—an upholstered seat and backrest tha...",
    "description": "The Agacia redefines modular seating with a language of quiet elegance. Its form is composed of smooth, continuous lines—an upholstered seat and backrest that can stand alone or connect seamlessly in multiples. Designed for flexibility, Agacia transitions from an intimate two-seater to a longer, architectural arrangement with ease, making it ideal for both private and public interiors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-agaciab-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-agaciab-thump3"
    ],
    "highlights": [
      {
        "title": "A Part of Everyday Life",
        "description": "The simple design is intended to become a natural part of everyday life. Free from unnecessary complexity, it focuses on lasting quality rather than fleeting statements. Thoughtfully made to endure over time, the piece offers quiet reliability and long-term value.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-agaciab-hl1"
      },
      {
        "title": "Approachable Style",
        "description": "The straight leg profile creates a familiar, grounded presence that feels instantly approachable. Its uncomplicated form allows the piece to blend effortlessly into a wide range of interiors. By avoiding visual excess, the design adapts naturally to different spaces and settings.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-agaciab-hl3"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/agacia-b"
  },
  {
    "id": "bplus-59",
    "bplusId": 59,
    "sku": "SL006",
    "name": "MARIO",
    "slug": "mario",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W450 x D520 x H950 mm",
    "shortDescription": "The Mario Stool charms with its whimsical minimalism - a petite backrest and soft rounded seat balanced on sleek, slender legs. Its simple yet delightful for...",
    "description": "The Mario Stool charms with its whimsical minimalism - a petite backrest and soft rounded seat balanced on sleek, slender legs. Its simple yet delightful form radiates a sense of lightness and joy, making it a perfect accent for modern, creative spaces that embrace both comfort and character.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mario-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-mario-thump3"
    ],
    "highlights": [
      {
        "title": "Rounded cushion",
        "description": "The soft, rounded cushions contrast with the slender metal legs, creating a light and expressive silhouette. A minimal steel frame and integrated footrest provide stability while preserving visual openness.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/mario"
  },
  {
    "id": "bplus-58",
    "bplusId": 58,
    "sku": "SL005",
    "name": "HOOB",
    "slug": "hoob",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W480 x D480 x H645 mm",
    "shortDescription": "Playful and full of energy, the Hoop Stool brings a lively spirit to any space. Its rounded seat and ring-like frame subtly echo the feel of a ball game, giv...",
    "description": "Playful and full of energy, the Hoop Stool brings a lively spirit to any space. Its rounded seat and ring-like frame subtly echo the feel of a ball game, giving it a dynamic, sporty character. Light, compact, and inviting, it adds a touch of movement and youthful charm to offices, cafés, and creative environments.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HOOB thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HOOB thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery and Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HOOB 5.jpg"
      },
      {
        "title": "Legs",
        "description": "The smoothly finished wooden legs introduces a warm accent, grounding the design with stability while maintaining a light and elegant appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HOOB 6.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hoob"
  },
  {
    "id": "bplus-57",
    "bplusId": 57,
    "sku": "CT036",
    "name": "TOA",
    "slug": "toa",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W1250 x D382 x H350 mm",
    "shortDescription": "A minimalist elongated bench with a tray-like top and slender metal supports, expressing refined simplicity and contemporary sophistication through clean lin...",
    "description": "A minimalist elongated bench with a tray-like top and slender metal supports, expressing refined simplicity and contemporary sophistication through clean lines and balanced proportions.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-toa-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-toa-thump3"
    ],
    "highlights": [
      {
        "title": "Tabletop Edge",
        "description": "The simple structure is subtly shaped with a gently folded tabletop edge, creating a quiet point of distinction. This thoughtful detail allows the surface to stand out, serving as a functional element while enhancing the table’s overall aesthetic presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-toa-hl1a"
      },
      {
        "title": "Where Display Meets Daily Use",
        "description": "The function is equally suited for display and everyday use. Thoughtfully balanced between practicality and presentation, it adapts naturally to daily routines while remaining visually composed.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-toa-hl2a"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/toa"
  },
  {
    "id": "bplus-56",
    "bplusId": 56,
    "sku": "RICARDO-ZAQ3",
    "name": "RICARDO",
    "slug": "ricardo",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W450 x D450 x H750 mm • 20 kg",
    "shortDescription": "A modern, minimalist counter stool featuring a comfortable, generously padded circular seat upholstered in a neutral-toned fabric, set atop a sleek, durable ...",
    "description": "A modern, minimalist counter stool featuring a comfortable, generously padded circular seat upholstered in a neutral-toned fabric, set atop a sleek, durable black metal frame. This stool effortlessly combines style and stability, making it a versatile addition to any contemporary space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ricardo-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ricardo-thump2"
    ],
    "highlights": [
      {
        "title": "Round upholstered",
        "description": "The round upholstered top introduces a gentle contrast to the angular frame, creating a calm and approachable silhouette. Slender steel legs and integrated foot support ensure stability while keeping the overall form visually light.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ricardo"
  },
  {
    "id": "bplus-55",
    "bplusId": 55,
    "sku": "ST025",
    "name": "SHARON",
    "slug": "sharon",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W300 x D300 x H460 mm • 20 kg",
    "shortDescription": "Sharon is a sculptural side table defined by its hourglass-inspired silhouette, with a lower half that tapers gracefully into a slender, refined form. Finish...",
    "description": "Sharon is a sculptural side table defined by its hourglass-inspired silhouette, with a lower half that tapers gracefully into a slender, refined form. Finished in deep black, the piece is subtly lifted by a delicate white ring at the base, adding a sense of lightness and poise. The white tabletop introduces a gentle visual contrast, creating an intriguing focal point while maintaining an overall elegant, balanced presence.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-sharon-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-sharon-thump2"
    ],
    "highlights": [
      {
        "title": "Form",
        "description": "Features a sculptural stacked-cylinder form that creates a bold and balanced architectural statement. The contrast between the matte black body and the refined stone top adds depth and material sophistication.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHARON.jpg"
      },
      {
        "title": "Tabletop",
        "description": "The stone tabletop features a natural veined surface that adds elegance and depth to the design.\nThe solid metal base provides strong support while maintaining a clean, modern silhouette.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SHARON-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sharon"
  },
  {
    "id": "bplus-54",
    "bplusId": 54,
    "sku": "CO002",
    "name": "JADE B",
    "slug": "jade-b",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Console Table",
    "dimensions": "W1442 x D402 x H372 mm",
    "shortDescription": "A refined, elongated console table featuring dual-tier stone surfaces and a slim black metal frame, designed to combine functional storage with a light, cont...",
    "description": "A refined, elongated console table featuring dual-tier stone surfaces and a slim black metal frame, designed to combine functional storage with a light, contemporary elegance.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-jadeb-thump1a",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-jadeb-thump1a"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The stone top features a smooth finish with softly rounded edges, creating a refined and modern look.\nSupported by a slim metal frame, the design offers both durability and a clean contemporary style.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JADE B 2.jpg"
      },
      {
        "title": "Base",
        "description": "Stone tops with metal frame and two-tier design for a durable and modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JADE B (1).jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/jade-b"
  },
  {
    "id": "bplus-53",
    "bplusId": 53,
    "sku": "ST004",
    "name": "KEY",
    "slug": "key",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W350 x D350 x H510 mm • 20 kg",
    "shortDescription": "This sleek side table features a polished round top with a signature ring handle, supported by a slender central column and a stable circular base. Its refin...",
    "description": "This sleek side table features a polished round top with a signature ring handle, supported by a slender central column and a stable circular base. Its refined silhouette and metallic finish make it a versatile accent piece for modern interiors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-key-thumb",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-key-thumb"
    ],
    "highlights": [
      {
        "title": "Surface",
        "description": "Features a polished metal surface with a raised rim and integrated handle detail, combining functionality with a refined visual identity. The slim central column and round base create a balanced, vertical composition that feels light yet stable.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/KEY-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/key"
  },
  {
    "id": "bplus-52",
    "bplusId": 52,
    "sku": "LC004",
    "name": "AN BANG",
    "slug": "an-bang",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W750 x D850 x H820 mm",
    "shortDescription": "Inspired by the humble charm of a classic chair, this design breathes new life into a beloved silhouette.",
    "description": "Inspired by the humble charm of a classic chair, this design breathes new life into a beloved silhouette.\nThe vintage-inspired profile is elevated with modern tailoring - clean upholstery, sculpted wooden arms, and a more polished posture.\nIt blends nostalgic warmth with contemporary sophistication, creating a piece that feels both timeless and quietly luxurious.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANBANG thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANBANG thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Plush seat and back cushions with balanced proportions provide exceptional comfort while reflecting the refined and luxurious essence of Indochine design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANBANG 4.jpg"
      },
      {
        "title": "Wooden Frame",
        "description": "The wooden arm and leg frame, accented with decorative stainless-steel details, balances classic elegance with a subtle contemporary touch.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANBANG 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/an-bang"
  },
  {
    "id": "bplus-51",
    "bplusId": 51,
    "sku": "LC091",
    "name": "TRUNG LUONG",
    "slug": "trung-luong",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W665 x D680 x H755 mm",
    "shortDescription": "Experience the perfect blend of heritage and modernity with the Trung Luong Lounge Chair. This piece reinterprets classic design with a refined, contemporary...",
    "description": "Experience the perfect blend of heritage and modernity with the Trung Luong Lounge Chair. This piece reinterprets classic design with a refined, contemporary sensibility. Featuring a robust wooden frame and a luxuriously thick, substantial cushion, the Trung Luong chair exudes an understated elegance and promises unwavering comfort, making it a distinguished addition to any sophisticated interior.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG LUONG thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG LUONG thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Wooden Arm & Leg Frame",
        "description": "The wooden arm and leg frame features graceful proportions, bringing warmth while balancing classic elegance with a contemporary character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG LUONG 1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/trung-luong"
  },
  {
    "id": "bplus-50",
    "bplusId": 50,
    "sku": "LC033",
    "name": "SWING",
    "slug": "swing",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W675 x D800 x H840 mm",
    "shortDescription": "Swing brings a youthful, energetic spirit to a lounge setting, expressed through its rounded, half-arc backrest that curves like a smooth, continuous motion....",
    "description": "Swing brings a youthful, energetic spirit to a lounge setting, expressed through its rounded, half-arc backrest that curves like a smooth, continuous motion. The seat feels open and inviting, while the integrated circular side table adds a playful, functional touch—always within effortless reach. Together, the flowing silhouette and compact proportions create a lively, contemporary piece designed for relaxed lounging with a modern rhythm.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SWING thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SWING thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Stitching",
        "description": "Refined and precise stitching enhances the chair’s soft silhouette while adding depth and sophistication to the overall composition.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SWING 1.jpg"
      },
      {
        "title": "Legs",
        "description": "Powder-coated metal legs feature a slender profile and sturdy construction, bringing a sense of modern elegance and durability to the piece.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SWING 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/swing"
  },
  {
    "id": "bplus-49",
    "bplusId": 49,
    "sku": "LC031",
    "name": "GURU",
    "slug": "guru",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W770 x D790 x H700 mm",
    "shortDescription": "Guru embodies the idea of guidance and calm, and the chair brings that meaning to life through its rounded, embracing silhouette that recalls a meditative po...",
    "description": "Guru embodies the idea of guidance and calm, and the chair brings that meaning to life through its rounded, embracing silhouette that recalls a meditative posture. Its gently curved backrest wraps around like a reassuring gesture, while the full, grounded base conveys stability and centeredness. Paired with a soft loose cushion that adds a touch of effortless comfort, the Guru chair becomes a quiet refuge-an inviting place to slow down, recharge, and reconnect with your inner balance.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GURU thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GURU thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstery",
        "description": "Thick, soft upholstery is designed to maximize comfort, creating a deeply cushioned seating experience. It invites you to slow down, offering a quiet pause from the pace of everyday life.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GURU 3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/guru"
  },
  {
    "id": "bplus-48",
    "bplusId": 48,
    "sku": "SL001",
    "name": "SPIKE",
    "slug": "spike",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bar Chair / Bar Stool",
    "dimensions": "W500 x D550 x H980 mm • 20 kg",
    "shortDescription": "The Spike Stool captivates with its playful yet refined stance - slender legs ending in distinctive rounded feet, paired with a smooth, modern curved seat. A...",
    "description": "The Spike Stool captivates with its playful yet refined stance - slender legs ending in distinctive rounded feet, paired with a smooth, modern curved seat. A bold fusion of balance and personality, it brings a contemporary edge to any space while remaining effortlessly approachable.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-spike-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-spike-thump2"
    ],
    "highlights": [
      {
        "title": "Compact upholstered shell",
        "description": "The compact upholstered shell provides subtle comfort while maintaining a restrained, architectural profile. Elevated on thin steel legs with precise cross-bracing, the stool achieves visual lightness without compromising stability.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/spike"
  },
  {
    "id": "bplus-47",
    "bplusId": 47,
    "sku": "ST029",
    "name": "RIVIERA",
    "slug": "riviera",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W350 x D350 x H490 mm",
    "shortDescription": "This elegant side table combines a refined stone top, a slender metal column, and a sculpted marble base, creating a balanced composition that brings both so...",
    "description": "This elegant side table combines a refined stone top, a slender metal column, and a sculpted marble base, creating a balanced composition that brings both sophistication and visual weight to any modern interior.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-riviera-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-riviera-thump2"
    ],
    "highlights": [
      {
        "title": "A Composed Presence",
        "description": "The Riviera side table is all you need to complete a space with a sense of composure and luxury. Its squared tabletop with softly rounded corners, paired with a solid square base, gives the piece a grounded and self-contained presence. The balanced geometry reinforces a feeling of stability and independence, allowing Riviera to stand confidently on its own within the interior.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RIVIERA.jpg"
      },
      {
        "title": "Base",
        "description": "The natural stone base adds weight and stability while showcasing unique veining details.\nA slim metal stem rises from the solid block, creating a refined contrast between strength and elegance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/RIVIERA-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/riviera"
  },
  {
    "id": "bplus-46",
    "bplusId": 46,
    "sku": "CT039",
    "name": "AKIRA A",
    "slug": "akira-a",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W400 x D400 x H530 mm • 20 kg",
    "shortDescription": "Akira A is a sleek side table defined by clean lines and balanced proportions. It features a round stone top with subtle natural veining, supported by a slim...",
    "description": "Akira A is a sleek side table defined by clean lines and balanced proportions. It features a round stone top with subtle natural veining, supported by a slim central stem rising from a glossy black cylindrical base. The contrast between the refined tabletop and the bold sculptural base gives Akira A a modern, elegant presence perfect as an accent piece in contemporary interiors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-akiraa-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-akiraa-thump2"
    ],
    "highlights": [
      {
        "title": "Simple elegance",
        "description": "The design expresses a sense of luxury through carefully controlled lines and a well-proportioned silhouette. Calm and assured in character, it is a choice that consistently elevates any space seeking a poised and elegant atmosphere.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-akiraa-hl1"
      },
      {
        "title": "Base",
        "description": "The base is constructed from powder-coated iron, combined with a stainless steel bottom ring that enhances stability, corrosion resistance, and adds a clean modern accent to the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/AKIRA A.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/akira-a"
  },
  {
    "id": "bplus-45",
    "bplusId": 45,
    "sku": "ST013",
    "name": "TRUNG A",
    "slug": "trung-a",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W300 x D300 x H500 mm",
    "shortDescription": "A sleek, modern side table featuring a round top, slender stem, and distinctive three-prong support, all finished in a refined black powder coating for durab...",
    "description": "A sleek, modern side table featuring a round top, slender stem, and distinctive three-prong support, all finished in a refined black powder coating for durability and style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG A-7.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG A-7.jpg"
    ],
    "highlights": [
      {
        "title": "Familiar, Not Forgettable",
        "description": "Trung A presents a familiar, well-balanced form, elevated by a subtle twist that keeps the design from feeling ordinary. This small but thoughtful detail adds character without overwhelming the overall silhouette. Easy to place yet never dull, the side table adapts effortlessly to a wide range of spaces while maintaining visual interest.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG A (2).jpg"
      },
      {
        "title": "Base",
        "description": "The metal base features a central column supported by curved structural elements, creating a strong and stable foundation.\nA round bottom plate enhances balance while the powder-coated finish ensures durability and a clean, modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG A-2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/trung-a"
  },
  {
    "id": "bplus-44",
    "bplusId": 44,
    "sku": "ST016",
    "name": "TRUNG B",
    "slug": "trung-b",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W400 x D400 x H350 mm",
    "shortDescription": "Trung B is a refined side table featuring a light stone round top with a subtly textured surface and gently tapered edge. The tabletop is supported by a slen...",
    "description": "Trung B is a refined side table featuring a light stone round top with a subtly textured surface and gently tapered edge. The tabletop is supported by a slender central stem that connects to a sculptural black metal base with curved structural details, resting on a solid circular foot. The contrast between the natural stone and the bold architectural base gives Trung A a modern, elegant character, ideal for contemporary living and hospitality spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-trungb-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-trungb-thump2"
    ],
    "highlights": [
      {
        "title": "Familiar, Not Forgettable ",
        "description": "Trung B carries the same familiar form and subtle twist as its taller counterpart, now reinterpreted with a lower profile. The shortened legs bring the table closer to the ground, making it a natural companion for sofas and lounge seating. Its relaxed height also allows it to function comfortably as a coffee table. Versatile yet quietly distinctive, Trung B fits seamlessly into casual living settings without ever feeling predictable.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG B-2.jpg"
      },
      {
        "title": "Base",
        "description": "The metal base features a central column supported by curved structural elements, creating a strong and stable foundation.\nA round bottom plate enhances balance while the powder-coated finish ensures durability and a clean, modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/TRUNG B-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/trung-b"
  },
  {
    "id": "bplus-43",
    "bplusId": 43,
    "sku": "CT041",
    "name": "SPEAK",
    "slug": "speak",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D350 x H455 mm • 20 kg",
    "shortDescription": "Speak is a minimalist side table with a slim rectangular wood top and slender black metal legs in an intersecting, asymmetrical form. Its light structure and...",
    "description": "Speak is a minimalist side table with a slim rectangular wood top and slender black metal legs in an intersecting, asymmetrical form. Its light structure and clean lines give it a modern, graphic character suitable for contemporary spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-speak-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-speak-thump2"
    ],
    "highlights": [
      {
        "title": "A Crossed-base Structure",
        "description": "The Speak side table features a clean rectangular tabletop supported by slender, refined legs, while its base-formed by two crossed steel bars-adds a bold, unexpected twist. This unconventional detail creates a striking contrast to its name, giving the piece a playful sense of contradiction and a distinctive, modern character.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SPEAK (1)-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/speak"
  },
  {
    "id": "bplus-42",
    "bplusId": 42,
    "sku": "ST010",
    "name": "GUFA",
    "slug": "gufa",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W400 x D400 x H450 mm • 20 kg",
    "shortDescription": "Gufa is an innovative three-legged table featuring flat, elegant legs connected at the center by a striking metal ring. Its design balances stability with su...",
    "description": "Gufa is an innovative three-legged table featuring flat, elegant legs connected at the center by a striking metal ring. Its design balances stability with subtle asymmetry, creating a captivating focal point for any contemporary interior.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-gufa-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-gufa-thump2"
    ],
    "highlights": [
      {
        "title": "Structure ",
        "description": "The wooden tabletop is paired with a powder-coated iron frame, creating a strong and balanced structure.\nThe metal support ring reinforces stability while adding a clean, modern industrial detail.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GUFA 2-2.jpg"
      },
      {
        "title": "Tabletop",
        "description": "Wooden tabletop combined with a powder-coated iron leg for a strong and stable structure.\nThe metal support detail ensures durability while giving a clean, modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/GUFA 3-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/gufa"
  },
  {
    "id": "bplus-41",
    "bplusId": 41,
    "sku": "CT010",
    "name": "SKETCHY",
    "slug": "sketchy",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H368 mm",
    "shortDescription": "Sketchy is a round coffee table featuring a light wood top with a softly raised edge. Slender black metal legs and a circular support ring create a light, sk...",
    "description": "Sketchy is a round coffee table featuring a light wood top with a softly raised edge. Slender black metal legs and a circular support ring create a light, sketch-like structure, giving the table a casual, modern feel that fits naturally into contemporary living spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SKETCHY.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SKETCHY.png"
    ],
    "highlights": [
      {
        "title": "Creative Structural Composition ",
        "description": "The circular tabletop paired with a steel ring beneath creates a layered effect, giving Sketchy a light, almost floating appearance. This sense of elevation is enhanced by the table’s distinctive leg design, which adds an unexpected structural twist. Together, these elements form a composition that feels inventive and visually engaging, making Sketchy an immediate point of attraction.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SKETCHY-1.png"
      },
      {
        "title": "Tabletop",
        "description": "The wooden tabletop features a smooth rounded edge with natural grain that adds warmth to the design.\nThe sculpted metal legs with a circular support ring provide strong stability while keeping a modern and refined look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/SKETCHY-2.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/sketchy"
  },
  {
    "id": "bplus-40",
    "bplusId": 40,
    "sku": "CT031",
    "name": "NOLAN",
    "slug": "nolan",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W750 x D750 x H355 mm",
    "shortDescription": "A sleek, modern coffee table featuring a minimalist tray-style top and a refined black metal frame, designed to elevate contemporary interiors with understat...",
    "description": "A sleek, modern coffee table featuring a minimalist tray-style top and a refined black metal frame, designed to elevate contemporary interiors with understated elegance and functional style.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-nolan-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-nolan-thump2"
    ],
    "highlights": [
      {
        "title": "Visual Anchor ",
        "description": "Nolan brings a grounded presence through its strong visual weight, instantly anchoring the space. Its composed form helps balance surrounding elements, creating a sense of cohesion among different furniture pieces. Acting as a visual connector, the table ties the interior together into a unified and well-structured whole.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-nolan-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nolan"
  },
  {
    "id": "bplus-39",
    "bplusId": 39,
    "sku": "CT043",
    "name": "NOAH 800",
    "slug": "noah-800",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W800 x D800 x H350 mm",
    "shortDescription": "A contemporary round coffee table with a smooth, refined surface and a sculptural black metal base, offering a harmonious balance of softness and structure f...",
    "description": "A contemporary round coffee table with a smooth, refined surface and a sculptural black metal base, offering a harmonious balance of softness and structure for modern living spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-noah800-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-noah800-thump3"
    ],
    "highlights": [
      {
        "title": "Sculpted Tabletop Structure",
        "description": "The round tabletop features a smooth, refined surface, gently elevated by an intriguing supporting frame beneath. This thoughtful construction highlights the table’s sculptural quality, allowing the surface to appear light while remaining firmly grounded.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NOLAN (4) (1).jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/noah-800"
  },
  {
    "id": "bplus-38",
    "bplusId": 38,
    "sku": "DEER-0MYY",
    "name": "DEER",
    "slug": "deer",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Bench",
    "dimensions": "W595 x D595 x H590 mm",
    "shortDescription": "The Deer Bench turns seating into a playful experience, with its friendly rounded forms, multiple sizes, and colorful finishes. Perched on slim metal legs wi...",
    "description": "The Deer Bench turns seating into a playful experience, with its friendly rounded forms, multiple sizes, and colorful finishes. Perched on slim metal legs with charming wooden “antlers” that double as side tables, each piece feels both functional and fun. Whether arranged as a single accent or grouped like a lively herd, Deer brings personality and flexibility to lounges, waiting areas, and creative spaces. A bench that doesn’t just seat—it sparks joy and interaction.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DEER-thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DEER-thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Modular Bench",
        "description": "Deer Bench is defined by its compact upholstered volume elevated on slim metal legs, creating a light yet grounded presence. The integrated side table extends upward like a subtle perch, adding both function and a distinctive silhouette.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/deer"
  },
  {
    "id": "bplus-37",
    "bplusId": 37,
    "sku": "CT053",
    "name": "HUEKA",
    "slug": "hueka",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Coffee Table",
    "dimensions": "W600 x D600 x H400 mm",
    "shortDescription": "Hueka is a compact side table featuring a round top with a clean, raised edge. A central column extends into a four-leg base, creating a stable and well-bala...",
    "description": "Hueka is a compact side table featuring a round top with a clean, raised edge. A central column extends into a four-leg base, creating a stable and well-balanced structure. With its simple geometry and refined proportions, Hueka fits effortlessly into modern and minimalist interiors.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEKA.png",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEKA.png"
    ],
    "highlights": [
      {
        "title": "Subtle and Refined Tone",
        "description": "Hueka reveals its character through careful detailing, combining softened contours with pared-back edges. The result is a composed, understated form with a clear sense of structure.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEKA 3-1.png"
      },
      {
        "title": "Base",
        "description": "The table features a round wooden top supported by a metal pedestal with a four-leg base for excellent stability.\nThe combination of natural wood and clean metal structure creates a modern and balanced design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/HUEKA 2-1.png"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/hueka"
  },
  {
    "id": "bplus-36",
    "bplusId": 36,
    "sku": "BO001",
    "name": "UBBE",
    "slug": "ubbe",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Collaborative Furniture Set",
    "dimensions": "W1800 x D600 x H1935 mm",
    "shortDescription": "Ubbe Board combines a mobile writing surface with colorful poufs to create a flexible, all-in-one solution for dynamic work environments. Easy to move and ef...",
    "description": "Ubbe Board combines a mobile writing surface with colorful poufs to create a flexible, all-in-one solution for dynamic work environments. Easy to move and effortlessly adaptable, it supports spontaneous meetings, brainstorming sessions, and collaborative teamwork. With its compact footprint and playful seating options, Ubbe Board is perfectly suited for modern offices, co-working spaces, and creative studios.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ubbe-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-ubbe-thump2"
    ],
    "highlights": [
      {
        "title": "Flexible Seating Modules",
        "description": "The accompanying poufs introduce flexibility and color to the system, encouraging creative thinking through their playful presence. Easily repositioned, they adapt to different spatial layouts and working styles with ease.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/UBBE 4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ubbe"
  },
  {
    "id": "bplus-35",
    "bplusId": 35,
    "sku": "ANDY-FIXED-DUPLICATE-0U9X",
    "name": "ANDY",
    "slug": "andy",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Modular Sofa",
    "dimensions": "W700 x D700 x H868 mm",
    "shortDescription": "Inspired by the small yet powerful square pixel, this modular sofa is shaped by the belief that even the simplest elements can come together to create harmon...",
    "description": "Inspired by the small yet powerful square pixel, this modular sofa is shaped by the belief that even the simplest elements can come together to create harmony and emotion. Each soft-edged square, dressed in gentle gradients, fits into place like pieces of a digital painting—fluid, balanced, and carrying its own quiet presence within the space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANDY thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ANDY thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/andy"
  },
  {
    "id": "bplus-34",
    "bplusId": 34,
    "sku": "TB011",
    "name": "LEONEL",
    "slug": "leonel",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W800 x D800 x H750 mm",
    "shortDescription": "Leonel stands out with its round compact tabletop, offering a clean, neat, and highly durable surface. The compact material is moisture-resistant, scratch-re...",
    "description": "Leonel stands out with its round compact tabletop, offering a clean, neat, and highly durable surface. The compact material is moisture-resistant, scratch-resistant, and easy to maintain—ideal for high-frequency use in modern spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-leonel-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-leonel-thump2"
    ],
    "highlights": [
      {
        "title": "Harmonious Proportions",
        "description": "Leonel is a round table defined by its slender, elongated central column and circular base. The proportions flow seamlessly from top to bottom, creating a smooth and harmonious silhouette. ",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-leonel-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/leonel"
  },
  {
    "id": "bplus-33",
    "bplusId": 33,
    "sku": "TB003",
    "name": "DANTE 800",
    "slug": "dante-800",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W800 x D800 x H750 mm",
    "shortDescription": "Dante embodies refined, luxurious lines and a sense of substantial presence, making it an eye-catching centerpiece in any interior. Its elegant silhouette ef...",
    "description": "Dante embodies refined, luxurious lines and a sense of substantial presence, making it an eye-catching centerpiece in any interior. Its elegant silhouette effortlessly commands attention while harmonizing with surrounding furniture, serving as a perfect connector that unites different pieces into a cohesive and balanced ensemble.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-dante-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-dante-thump2"
    ],
    "highlights": [
      {
        "title": "Tabletop ",
        "description": "Dante is defined by the dialogue between its broad, circular tabletop and a sculpted central column beneath. The thin tabletop appears almost weightless, gently resting on the tapered pedestal that brings visual focus and stability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DANTE 2-1.jpg"
      },
      {
        "title": "Pedestal Base",
        "description": "Powder-coated iron body with a solid metal support and smooth finish.\nStainless steel top and base ring enhance durability with a clean modern accent.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/DANTE 3-2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/dante-800"
  },
  {
    "id": "bplus-32",
    "bplusId": 32,
    "sku": "TB014",
    "name": "CARMEN",
    "slug": "carmen",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Dining Table",
    "dimensions": "W800 x D800 x H750 mm",
    "shortDescription": "The Carmen table features a minimalist, contemporary design. It has a square tabletop with rounded corners set on a single, sturdy pedestal base. The overall...",
    "description": "The Carmen table features a minimalist, contemporary design. It has a square tabletop with rounded corners set on a single, sturdy pedestal base. The overall silhouette is sleek and elegant, offering both stability and a clean aesthetic for any modern space.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARMEN.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARMEN.jpg"
    ],
    "highlights": [
      {
        "title": "Tabletop",
        "description": "The tabletop features a slim profile with softly rounded corners, creating a clean and modern look.\nIts smooth surface and minimal form make it suitable for contemporary interiors.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARMEN-6.jpg"
      },
      {
        "title": "Base",
        "description": "A solid metal base with rounded square shape provides stability and a clean modern appearance.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/CARMEN-5.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/carmen"
  },
  {
    "id": "bplus-31",
    "bplusId": 31,
    "sku": "CH035",
    "name": "FIONA",
    "slug": "fiona",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Task Chair",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Fiona is defined by a soft, graceful silhouette, highlighted by its gentle, refined curves.  Blending soft curvature with functional versatility, Fiona fits ...",
    "description": "Fiona is defined by a soft, graceful silhouette, highlighted by its gentle, refined curves.  Blending soft curvature with functional versatility, Fiona fits beautifully into dining areas, home offices, and multipurpose environments.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-fiona-thump23",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-fiona-thump23"
    ],
    "highlights": [
      {
        "title": "Backrest",
        "description": "The subtly contoured backrest wraps comfortably around the body, offering a sense of support while maintaining an airy, elegant look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-fiona-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/fiona"
  },
  {
    "id": "bplus-30",
    "bplusId": 30,
    "sku": "SF091",
    "name": "LUNA",
    "slug": "luna",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2270 x D825 x H770 mm",
    "shortDescription": "Inspired by the calm glow of moonlight, Luna sofa brings serenity and warmth into any space. It does not rely on ornamentation or bold gestures; instead, its...",
    "description": "Inspired by the calm glow of moonlight, Luna sofa brings serenity and warmth into any space. It does not rely on ornamentation or bold gestures; instead, its beauty emerges naturally through precise proportions, silky surfaces, and meticulously considered construction. LUNA becomes an elegant focal point, radiating both modern clarity and cozy softness.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Upholstered",
        "description": "Softly curved corner detail upholstered in fabric, designed to enhance comfort while giving the sofa a refined and elegant appearance.\nThe textured fabric finish adds warmth and softness, creating a cozy yet modern look.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/LUNA 1-1.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/luna"
  },
  {
    "id": "bplus-29",
    "bplusId": 29,
    "sku": "SF040",
    "name": "PEONY",
    "slug": "peony",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W1000 x D1000 x H1000 mm • 20 kg",
    "shortDescription": "Inspired by the layered elegance of a blooming petal, the Peony Sofa features a dual-tone backrest with subtle vertical lines on the inner surface, echoing i...",
    "description": "Inspired by the layered elegance of a blooming petal, the Peony Sofa features a dual-tone backrest with subtle vertical lines on the inner surface, echoing its floral namesake. The seamless seat cushions create a smooth, unified form, while the medium-height metal legs lift the piece lightly off the floor for an airy, graceful presence. Designed to bring softness and modern refinement to contemporary living and lounge spaces.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PEONY thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/PEONY thumbnail.jpg"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/peony"
  },
  {
    "id": "bplus-28",
    "bplusId": 28,
    "sku": "ST045",
    "name": "MINHO",
    "slug": "minho",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Side Table",
    "dimensions": "W350 x D500 x H500 mm",
    "shortDescription": "Minho is a minimalist yet highly functional side table, designed to adapt seamlessly to both workspaces and lounge areas. The tabletop is made from durable c...",
    "description": "Minho is a minimalist yet highly functional side table, designed to adapt seamlessly to both workspaces and lounge areas. The tabletop is made from durable compact laminate, offering excellent moisture resistance, strength, and a stable, easy-to-clean surface.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-minho-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-minho-thump2"
    ],
    "highlights": [
      {
        "title": "Table Top",
        "description": "Features a slim round tabletop supported by a single vertical column and a distinctive U-shaped base. The open base design allows the table to slide easily under sofas or lounge chairs, enhancing everyday usability.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/pr-minho-hl1-1.pr-minho-hl1"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/minho"
  },
  {
    "id": "bplus-27",
    "bplusId": 27,
    "sku": "LC109",
    "name": "NOOK",
    "slug": "nook",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Acoustic Lounge ",
    "dimensions": "W915 x D826 x H1270 mm",
    "shortDescription": "Nook is a high-back lounge chair designed to create a personal retreat within open spaces. Its tall backrest forms a protective shell that gently wraps aroun...",
    "description": "Nook is a high-back lounge chair designed to create a personal retreat within open spaces. Its tall backrest forms a protective shell that gently wraps around the user, offering a sense of privacy without isolating them from the environment. The angled side panels enhance the enclosed feel and provide subtle acoustic comfort, making NOOK ideal for offices, lounges, and waiting areas.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NOOK thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/NOOK thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Enclosed Form",
        "description": "Nook Lounge Chair is articulated through a faceted high-back shell that forms a semi-enclosed seating volume. The angled side panels intersect with the backrest to create a defined, geometric wraparound profile. A separate cushioned seat sits within the structured outer frame, emphasizing the contrast between soft interior and architectural exterior. Slender metal legs lift the composition, giving the enclosed form a light, elevated stance suitable for open-plan environments.",
        "imageUrl": null
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/nook"
  },
  {
    "id": "bplus-26",
    "bplusId": 26,
    "sku": "LC119",
    "name": "RIBB",
    "slug": "ribb",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W1000 x D800 x H800 mm • 20 kg",
    "shortDescription": "The Ribb chair is defined by its striking wooden armrests, shaped as clean, elongated “ribbons” that give the design its name. Their bold horizontal lines co...",
    "description": "The Ribb chair is defined by its striking wooden armrests, shaped as clean, elongated “ribbons” that give the design its name. Their bold horizontal lines contrast beautifully with the soft, textured upholstery, creating a balance between structure and comfort.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-ribb-thump2",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-ribb-thump2"
    ],
    "highlights": [],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ribb"
  },
  {
    "id": "bplus-25",
    "bplusId": 25,
    "sku": "LC097",
    "name": "EMBER",
    "slug": "ember",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W700 x D705 x H730 mm",
    "shortDescription": "The Ember Lounge Chair draws inspiration from the quiet glow of a burning ember — warm, intense, and quietly luxurious. Its sculpted silhouette wraps smoothl...",
    "description": "The Ember Lounge Chair draws inspiration from the quiet glow of a burning ember — warm, intense, and quietly luxurious. Its sculpted silhouette wraps smoothly around the body, with a fluid back-and-arm form that evokes the soft curve of rising heat. The generous leather upholstery, paired with a solid, grounded base, creates a refined contrast between softness and strength. Ember brings a sense of modern opulence to any interior, radiating understated confidence and allure.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMBER thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMBER thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Form",
        "description": "The gently curved backrest and integrated arm support create a sense of containment, encouraging a relaxed and grounded sitting posture. Fully upholstered surfaces enhance tactile warmth while maintaining a clean, continuous silhouette.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/EMBER 4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/ember"
  },
  {
    "id": "bplus-24",
    "bplusId": 24,
    "sku": "CO001",
    "name": "JADE A",
    "slug": "jade-a",
    "brand": "B+ Furniture",
    "category": "table",
    "categoryLabel": "Console Table",
    "dimensions": "W1442 x D402 x H780 mm",
    "shortDescription": "The Jade console table introduces a quiet sense of elegance through its refined proportions and subtle detailing.",
    "description": "The Jade console table introduces a quiet sense of elegance through its refined proportions and subtle detailing.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-jadea-thump3",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/ pr-jadea-thump3"
    ],
    "highlights": [
      {
        "title": "The Weightless Presence",
        "description": "A sense of delicate elegance emerges from the rounded edges and carefully balanced thickness. Paired with a slender supporting frame that runs along the length, the structure offers both stability and visual lightness. This thoughtful combination creates a subtle floating effect, giving the table a refined and almost weightless presence.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JADE A-2.jpg"
      },
      {
        "title": "Support Frame",
        "description": "The natural stone top features unique veining that creates a refined and elegant look.\nSlim metal legs provide strong support while keeping the design light and modern.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/JADE A-3.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/jade-a"
  },
  {
    "id": "bplus-23",
    "bplusId": 23,
    "sku": "SF041",
    "name": "MARIN",
    "slug": "marin",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Sofa",
    "dimensions": "W2100 x D720 x H920 mm",
    "shortDescription": "Inspired by durability and grounded aesthetics, Marin sofa enters any space as a powerful presence, reflecting the personality of its owner. The soft upholst...",
    "description": "Inspired by durability and grounded aesthetics, Marin sofa enters any space as a powerful presence, reflecting the personality of its owner. The soft upholstery contrasts beautifully with its solid silhouette, offering a refined balance between comfort and architectural character.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARIN thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARIN thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "Seat & Frame Detail",
        "description": "Upholstered seat corner with textured fabric, designed for comfort and durability.\nThe soft cushioning sits on a slim metal frame, creating a balanced look between warmth and modern structure.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/MARIN-4.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/marin"
  },
  {
    "id": "bplus-22",
    "bplusId": 22,
    "sku": "LC099",
    "name": "COMFORT HUG",
    "slug": "comfort-hug",
    "brand": "B+ Furniture",
    "category": "seating",
    "categoryLabel": "Lounge Chair",
    "dimensions": "W750 x D800 x H860 mm",
    "shortDescription": "The Comfort Hug Lounge Chair is crafted to deliver a warm, cocoon-like embrace, with its backrest flowing seamlessly into soft arm supports. Its dual-layer s...",
    "description": "The Comfort Hug Lounge Chair is crafted to deliver a warm, cocoon-like embrace, with its backrest flowing seamlessly into soft arm supports. Its dual-layer seat cushion - a slimmer top resting on a thicker base - enhances both comfort and visual depth. Wrapped in plush upholstery and paired with a convenient round side table, it’s designed for effortless ease and long, relaxed sitting.",
    "thumbnailUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COMFORT HUG thumbnail.jpg",
    "images": [
      "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COMFORT HUG thumbnail.jpg"
    ],
    "highlights": [
      {
        "title": "The Side Table",
        "description": "The mini table is not merely a functional element, but also adds a dynamic and distinctive accent to the chair. Its presence enhances usability while introducing a touch of character that elevates the overall design.",
        "imageUrl": "https://pub-0ec402f767364e6c8cb7b8b4a7160995.r2.dev/COMFORT HUG 2.jpg"
      }
    ],
    "materials": [
      "Khung kim loại phủ sơn tĩnh điện AkzoNobel",
      "Gỗ Tần Bì (Ash) / Sồi tự nhiên xử lý tiêu chuẩn FSC",
      "Mút D40 đúc định hình công thái học",
      "Vải bọc cao cấp chuẩn chống cháy & cọ xát"
    ],
    "techniques": [
      "Gia công cơ khí chính xác CNC",
      "Ghép mộng kết cấu giấu vít",
      "May bọc thủ công tỉ mỉ từng chi tiết",
      "Xử lý hoàn thiện bề mặt mờ nhung cao cấp"
    ],
    "year": 2024,
    "originCity": "TP. Hồ Chí Minh & Đồng Nai, Việt Nam",
    "websiteUrl": "https://bplusfurniture.com.vn/products/comfort-hug"
  }
];
