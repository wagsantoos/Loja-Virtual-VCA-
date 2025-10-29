class Product {
  constructor(title, color = "Preta", size = "Padrão", image, price) {
    this.title = title;
    this.color = color;
    this.size = size;
    this.image = image;
    this.price = price;
  }
}

const cart = []

function addCart(product) {
    cart.push(product)
}

function createProduct(title, color, size, image, price) {
const product = new Product(title, color, size, image, price)
}