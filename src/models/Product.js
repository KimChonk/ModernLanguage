// Constructor function cho Product
export function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Khởi tạo mảng products với ít nhất 6 sản phẩm từ 2+ danh mục khác nhau
export const products = [
  // Danh mục: Electronics
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Electronics", true),
  new Product(2, "Samsung Galaxy S24", 32000000, 3, "Electronics", true),
  new Product(3, "MacBook Pro 16", 55000000, 2, "Electronics", true),
  new Product(4, "iPad Air", 18000000, 0, "Electronics", false),

  // Danh mục: Accessories
  new Product(5, "Apple Watch Series 9", 12000000, 8, "Accessories", true),
  new Product(6, "AirPods Pro 2", 8500000, 12, "Accessories", true),
  new Product(7, "USB-C Cable", 500000, 0, "Accessories", true),
  new Product(8, "Phone Case", 750000, 25, "Accessories", true),

  // Danh mục: Fashion
  new Product(9, "Designer Jacket", 5000000, 4, "Fashion", true),
  new Product(10, "Premium Sneakers", 3000000, 6, "Fashion", true),
];

// Câu 1: Constructor function đã khai báo ở trên (Product)

// Câu 2: Mảng products đã khởi tạo ở trên

// Câu 3: Tạo mảng mới chỉ chứa name, price
export const productNamePrice = products.map((product) => ({
  name: product.name,
  price: product.price,
}));

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
export const productsInStock = products.filter((product) => product.quantity > 0);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
export const hasExpensiveProduct = products.some((product) => product.price > 30000000);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có dạng được bán (isAvailable = true)
export const allAccessoriesAvailable = products
  .filter((product) => product.category === "Accessories")
  .every((product) => product.isAvailable === true);
