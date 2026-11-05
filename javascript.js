let products = [
  {
    price: 2500,
    name: "Classic Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150",
  },
  {
    price: 3500,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150",
  },
  {
    price: 8000,
    name: "Digital Camera",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150",
  },
  {
    price: 4000,
    name: "Sport Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150",
  },
  {
    price: 3200,
    name: "Smart Backpack",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150",
  },
  {
    price: 2800,
    name: "Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150",
  },
  {
    price: 1800,
    name: "Polarized Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=150",
  },
  {
    price: 5500,
    name: "Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150",
  },
  {
    price: 1500,
    name: "Ergonomic Mouse",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150",
  },
  {
    price: 1200,
    name: "Insulated Water Bottle",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=150",
  },
  {
    price: 1600,
    name: "Leather Wallet",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=150",
  },
  {
    price: 4500,
    name: "Smart Fitness Watch",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150",
  },
  {
    price: 950,
    name: "Aromatherapy Candle",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=150",
  },
  {
    price: 3800,
    name: "Classic Denim Jacket",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=150",
  },
  {
    price: 800,
    name: "Ceramic Coffee Mug",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=150",
  },
  {
    price: 2100,
    name: "LED Desk Lamp",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=150",
  },
  {
    price: 4200,
    name: "RGB Gaming Headset",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=150",
  },
  {
    price: 1900,
    name: "Non-Slip Yoga Mat",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=150",
  },
  {
    price: 2300,
    name: "Essential Oil Diffuser",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=150",
  },
  {
    price: 2600,
    name: "Aluminum Laptop Stand",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150",
  },
  {
    price: 1100,
    name: "Canvas Tote Bag",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=150",
  },
  {
    price: 2900,
    name: "TWS Earbuds",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=150",
  },
  {
    price: 850,
    name: "Hardcover Notebook",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150",
  },
  {
    price: 2200,
    name: "French Press Coffee Maker",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150",
  },
  {
    price: 2800,
    name: "Cotton Pullover Hoodie",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=150",
  },
  {
    price: 1400,
    name: "Genuine Leather Belt",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=150",
  },
  {
    price: 1000,
    name: "Indoor Plant Pot",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=150",
  },
  {
    price: 3600,
    name: "1080p HD Webcam",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=150",
  },
];
let cart = [];
let container = document.querySelector(".product-container");
let cartitems = document.getElementById("cartitems");
let dropdown = document.getElementById("dropdown");
let removeDropdown = document.getElementById("removedropdown");

let cartIcon = document.getElementById("cart-icon");

let cartList = document.getElementById("cart-list");
let productButtons = new Map();

cartIcon.addEventListener("click", function () {
  dropdown.classList.toggle("show");
});
removeDropdown.addEventListener("click",function(){
  dropdown.classList.toggle("dropdown")
})
function displayCart() {
  cartList.innerHTML = "";
  cart.forEach(function (cartItem) {
    let item = document.createElement("p");
    item.textContent =
      cartItem.product.name +
      "     ksh " +
      cartItem.product.price +
      " quantity" +
      cartItem.quantity;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";
    removeBtn.addEventListener("click", function () {
      cartItem.quantity -= 1;
      if (cartItem.quantity === 0) {
        cart = cart.filter(function (item) {
          return item !== cartItem;
        });
      }
      let button = productButtons.get(cartItem.product);
      let remainingItem = cart.find(function (item) {
        return item.product === cartItem.product;
      });
      button.textContent = remainingItem
        ? "Added ✔ (" + remainingItem.quantity + ")"
        : "add to cart";
      cartitems.textContent = cart.reduce(function (total, item) {
        return total + item.quantity;
      }, 0);
      displayCart();
    });
    cartList.appendChild(item);
    item.appendChild(removeBtn);
  });
}
products.forEach(function (product) {
  let image = document.createElement("img");
  image.src = product.image;
  let name = document.createElement("h3");
  name.textContent = product.name;
  let price = document.createElement("p");
  price.textContent = "price:ksh " + product.price;

  let button = document.createElement("button");

  button.textContent = "add to cart";
  button.classList.add("cart-btn");
  productButtons.set(product, button);
  let productCard = document.createElement("div");

  productCard.appendChild(image);
  productCard.appendChild(name);
  productCard.appendChild(price);
  productCard.appendChild(button);

  button.addEventListener("click", function () {
    let cartItem = cart.find(function (item) {
      return item.product === product;
    });
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cartItem = { product: product, quantity: 1 };
      cart.push(cartItem);
    }
    cartitems.textContent = cart.reduce(function (total, item) {
      return total + item.quantity;
    }, 0);
    button.textContent = "Added ✔ (" + cartItem.quantity + ")";
    button.style.color = "green";
    button.style.backgroundColor = "yellow";
    button.style.borderRadius = "50px";
    displayCart();
  });
  container.appendChild(productCard);
});
