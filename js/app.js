// ================= 1. DATA =================
const restaurants = [
  { id: 1, name: "Pizza Palace", cuisine: "Italian",   rating: 4.7, time: "25-35 min", open: true,  emoji: "🍕" },
  { id: 2, name: "Burger Barn",  cuisine: "American",  rating: 4.5, time: "20-30 min", open: true,  emoji: "🍔" },
  { id: 3, name: "Green Bowl",   cuisine: "Healthy",   rating: 4.6, time: "15-25 min", open: true,  emoji: "🥗" },
  { id: 4, name: "Sweet Tooth",  cuisine: "Desserts",  rating: 4.8, time: "30-40 min", open: false, emoji: "🍰" },
  { id: 5, name: "Quick Bites",  cuisine: "Fast Food", rating: 4.2, time: "10-20 min", open: true,  emoji: "🌭" },
  { id: 6, name: "Sip & Chill",  cuisine: "Beverages", rating: 4.4, time: "10-15 min", open: true,  emoji: "🥤" }
];

// rid = the id of the restaurant that sells it
const foods = [
  { id: 1,  rid: 1, name: "Margherita Pizza",      category: "Pizza",         price: 9.5,  desc: "Classic tomato, mozzarella and basil.",       rating: 4.7, popularity: 95,  emoji: "🍕" },
  { id: 2,  rid: 1, name: "Pepperoni Pizza",       category: "Pizza",         price: 11.5, desc: "Loaded with spicy pepperoni.",                rating: 4.8, popularity: 120, emoji: "🍕" },
  { id: 3,  rid: 1, name: "BBQ Chicken Pizza",     category: "Pizza",         price: 12.5, desc: "Smoky BBQ sauce and grilled chicken.",        rating: 4.5, popularity: 70,  emoji: "🍕" },
  { id: 4,  rid: 2, name: "Classic Cheeseburger",  category: "Burgers",       price: 7.99, desc: "Beef patty, cheddar, lettuce, pickles.",      rating: 4.6, popularity: 110, emoji: "🍔" },
  { id: 5,  rid: 2, name: "Double Smash Burger",   category: "Burgers",       price: 10.5, desc: "Two smashed patties with special sauce.",     rating: 4.7, popularity: 90,  emoji: "🍔" },
  { id: 6,  rid: 2, name: "Crispy Chicken Burger", category: "Burgers",       price: 8.5,  desc: "Golden fried chicken with mayo.",             rating: 4.4, popularity: 65,  emoji: "🍔" },
  { id: 7,  rid: 5, name: "Loaded Fries",          category: "Fast Food",     price: 5.5,  desc: "Crispy fries with cheese and bacon.",         rating: 4.3, popularity: 85,  emoji: "🍟" },
  { id: 8,  rid: 5, name: "Hot Dog Combo",         category: "Fast Food",     price: 6.5,  desc: "Beef sausage in a soft bun.",                 rating: 4.1, popularity: 50,  emoji: "🌭" },
  { id: 9,  rid: 5, name: "Chicken Nuggets",       category: "Fast Food",     price: 6,    desc: "10 pieces with dipping sauce.",               rating: 4.2, popularity: 75,  emoji: "🍗" },
  { id: 10, rid: 4, name: "Chocolate Lava Cake",   category: "Desserts",      price: 6.5,  desc: "Warm cake with a molten centre.",             rating: 4.9, popularity: 100, emoji: "🍰" },
  { id: 11, rid: 4, name: "Strawberry Cheesecake", category: "Desserts",      price: 7,    desc: "Creamy and topped with berries.",             rating: 4.7, popularity: 60,  emoji: "🍓" },
  { id: 12, rid: 4, name: "Vanilla Ice Cream",     category: "Desserts",      price: 4,    desc: "Three scoops, your choice of topping.",       rating: 4.5, popularity: 55,  emoji: "🍨" },
  { id: 13, rid: 6, name: "Fresh Mango Juice",     category: "Beverages",     price: 3.5,  desc: "Cold-pressed, no added sugar.",               rating: 4.6, popularity: 80,  emoji: "🥭" },
  { id: 14, rid: 6, name: "Iced Coffee",           category: "Beverages",     price: 4,    desc: "Smooth cold brew over ice.",                  rating: 4.4, popularity: 70,  emoji: "☕" },
  { id: 15, rid: 6, name: "Lemon Mint Cooler",     category: "Beverages",     price: 3,    desc: "Zesty, minty and refreshing.",                rating: 4.3, popularity: 45,  emoji: "🍹" },
  { id: 16, rid: 3, name: "Grilled Chicken Salad", category: "Healthy Meals", price: 9,    desc: "Greens, grilled chicken, light vinaigrette.", rating: 4.6, popularity: 60,  emoji: "🥗" },
  { id: 17, rid: 3, name: "Quinoa Veggie Bowl",    category: "Healthy Meals", price: 10,   desc: "Quinoa, roasted veg and hummus.",             rating: 4.7, popularity: 55,  emoji: "🥙" },
  { id: 18, rid: 3, name: "Avocado Toast",         category: "Healthy Meals", price: 7.5,  desc: "Sourdough, avocado and poached egg.",         rating: 4.5, popularity: 48,  emoji: "🥑" }
];

const categories = [
  { name: "All",           emoji: "✨" },
  { name: "Pizza",         emoji: "🍕" },
  { name: "Burgers",       emoji: "🍔" },
  { name: "Fast Food",     emoji: "🍟" },
  { name: "Desserts",      emoji: "🍰" },
  { name: "Beverages",     emoji: "🥤" },
  { name: "Healthy Meals", emoji: "🥗" }
];

// ================= 2. STATE =================
let selectedCategory = "All";
let selectedRestaurant = 0;   // 0 means "all restaurants"

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("bitezy_cart")) || [];
} catch (e) {
  cart = [];
}

// ================= 3. ELEMENTS =================
const restaurantGrid = document.getElementById("restaurantGrid");
const restaurantSearch = document.getElementById("restaurantSearch");
const categoryChips = document.getElementById("categoryChips");
const menuGrid = document.getElementById("menuGrid");
const foodSearch = document.getElementById("foodSearch");
const priceFilter = document.getElementById("priceFilter");
const sortBy = document.getElementById("sortBy");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartFooter = document.getElementById("cartFooter");
const closeCart = document.getElementById("closeCart");
const toast = document.getElementById("toast");

// ================= 4. HELPERS =================
function getRestaurantName(id) {
  return restaurants.find(function (r) { return r.id === id; }).name;
}

function findFood(id) {
  return foods.find(function (f) { return f.id === id; });
}

function saveCart() {
  try {
    localStorage.setItem("bitezy_cart", JSON.stringify(cart));
  } catch (e) {}
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function () { toast.classList.remove("show"); }, 1500);
}

// Makes user-typed text safe to place inside innerHTML
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ================= 5. RESTAURANTS =================
function renderRestaurants(list) {
  if (list.length === 0) {
    restaurantGrid.innerHTML = '<p class="empty">No restaurants found.</p>';
    return;
  }

  restaurantGrid.innerHTML = list.map(function (r) {
    return `
      <div class="card">
        <div class="card-emoji">${r.emoji}</div>
        <h3>${r.name}</h3>
        <div class="meta">
          <span>${r.cuisine}</span>
          <span>⭐ ${r.rating}</span>
        </div>
        <div class="meta">
          <span>🕒 ${r.time}</span>
          <span class="badge ${r.open ? "open" : "closed"}">
            ${r.open ? "Open" : "Closed"}
          </span>
        </div>
        <button class="small full" data-restaurant="${r.id}" ${r.open ? "" : "disabled"}>
          ${r.open ? "View menu" : "Closed now"}
        </button>
      </div>
    `;
  }).join("");
}

restaurantSearch.addEventListener("input", function () {
  const text = restaurantSearch.value.trim().toLowerCase();
  const filtered = restaurants.filter(function (r) {
    return r.name.toLowerCase().includes(text);
  });
  renderRestaurants(filtered);
});

// ================= 6. CATEGORIES =================
function renderCategories() {
  categoryChips.innerHTML = categories.map(function (c) {
    const active = c.name === selectedCategory ? "active" : "";
    return `<button class="chip ${active}" data-category="${c.name}">${c.emoji} ${c.name}</button>`;
  }).join("");
}

categoryChips.addEventListener("click", function (e) {
  const name = e.target.getAttribute("data-category");
  if (!name) return;               // the click wasn't on a chip
  selectedCategory = name;
  renderCategories();
  renderMenu();
  document.getElementById("menu").scrollIntoView();  // scroll down to the menu
});

// ================= 7. MENU (search, filter, sort) =================
// One food card (used by the menu AND the featured section)
function foodCardHTML(f) {
  return `
    <div class="card">
      <div class="card-emoji">${f.emoji}</div>
      <h3>${f.name}</h3>
      <div class="meta">
        <span>${f.category}</span>
        <span>⭐ ${f.rating}</span>
      </div>
      <div class="meta">${getRestaurantName(f.rid)}</div>
      <p class="desc">${f.desc}</p>
      <div class="card-footer">
        <span class="price">$${f.price.toFixed(2)}</span>
        <button class="small" data-add="${f.id}">Add to Cart</button>
      </div>
    </div>
  `;
}

function renderMenu() {
  const text = foodSearch.value.trim().toLowerCase();
  const price = priceFilter.value;
  const sort = sortBy.value;

  // 1. Filter
  const list = foods.filter(function (f) {
    if (selectedRestaurant && f.rid !== selectedRestaurant) return false;
    if (selectedCategory !== "All" && f.category !== selectedCategory) return false;
    if (text && !f.name.toLowerCase().includes(text)) return false;
    if (price === "low" && f.price >= 8) return false;
    if (price === "mid" && (f.price < 8 || f.price > 12)) return false;
    if (price === "high" && f.price <= 12) return false;
    return true;
  });

  // 2. Sort
  list.sort(function (a, b) {
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "priceLow") return a.price - b.price;
    if (sort === "priceHigh") return b.price - a.price;
    return b.popularity - a.popularity;
  });

  // 3. "Showing food from ..." tag
  const tag = document.getElementById("restaurantTag");
  tag.innerHTML = selectedRestaurant
    ? `Showing food from <strong>${getRestaurantName(selectedRestaurant)}</strong>
       <button class="ghost small" id="clearRestaurant">Show all</button>`
    : "";

  // 4. Render
  if (list.length === 0) {
    menuGrid.innerHTML = '<p class="empty">No food items match your filters.</p>';
    return;
  }
  menuGrid.innerHTML = list.map(foodCardHTML).join("");
}
foodSearch.addEventListener("input", renderMenu);
priceFilter.addEventListener("change", renderMenu);
sortBy.addEventListener("change", renderMenu);

// ================= 8. CART =================
function addToCart(id) {
  const item = cart.find(function (c) { return c.id === id; });
  if (item) {
    item.qty++;                    // already in cart: increase quantity
  } else {
    cart.push({ id: id, qty: 1 }); // new item
  }
  saveCart();
  renderCart();
  showToast("Added to cart");
}

function changeQty(id, change) {
  const item = cart.find(function (c) { return c.id === id; });
  if (!item) return;
  item.qty += change;
  if (item.qty < 1) {
    cart = cart.filter(function (c) { return c.id !== id; });  // qty hit 0: remove
  }
  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(function (c) { return c.id !== id; });
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function getTotals() {
  let subtotal = 0;
  cart.forEach(function (c) {
    subtotal += findFood(c.id).price * c.qty;
  });
  const delivery = subtotal > 0 && subtotal < 30 ? 2.99 : 0;  // free over $30
  return { subtotal: subtotal, delivery: delivery, total: subtotal + delivery };
}

function renderCart() {
  // navbar badge: total number of items
  let count = 0;
  cart.forEach(function (c) { count += c.qty; });
  cartCount.textContent = count;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty">Your cart is empty 🛒</p>';
    cartFooter.innerHTML = "";
    return;
  }

  cartItems.innerHTML = cart.map(function (c) {
    const f = findFood(c.id);
    return `
      <div class="cart-line">
        <div class="cart-top">
          <strong>${f.emoji} ${f.name}</strong>
          <span>$${(f.price * c.qty).toFixed(2)}</span>
        </div>
        <div class="cart-top">
          <div class="qty">
            <button class="ghost small" data-action="dec" data-id="${f.id}">−</button>
            <strong>${c.qty}</strong>
            <button class="ghost small" data-action="inc" data-id="${f.id}">+</button>
          </div>
          <button class="ghost small" data-action="remove" data-id="${f.id}">Remove</button>
        </div>
      </div>
    `;
  }).join("");

  const t = getTotals();
  cartFooter.innerHTML = `
    <div class="cart-top meta"><span>Subtotal</span><span>$${t.subtotal.toFixed(2)}</span></div>
    <div class="cart-top meta"><span>Delivery</span><span>${t.delivery ? "$" + t.delivery.toFixed(2) : "Free"}</span></div>
    <div class="cart-top total"><span>Total</span><span>$${t.total.toFixed(2)}</span></div>
    <button id="checkoutBtn" class="full">Checkout</button>
    <button id="clearBtn" class="ghost full">Clear Cart</button>
  `;
}

// Open and close the drawer
cartBtn.addEventListener("click", function () {
  cartOverlay.classList.add("show");
});

closeCart.addEventListener("click", function () {
  cartOverlay.classList.remove("show");
});

cartOverlay.addEventListener("click", function (e) {
  if (e.target === cartOverlay) cartOverlay.classList.remove("show");  // click on dark area
});

// Add to Cart buttons (event delegation on the whole page)
document.addEventListener("click", function (e) {
  const id = e.target.getAttribute("data-add");
  if (id) addToCart(Number(id));
});

// Buttons inside the cart
cartItems.addEventListener("click", function (e) {
  const action = e.target.getAttribute("data-action");
  const id = Number(e.target.getAttribute("data-id"));
  if (action === "inc") changeQty(id, 1);
  if (action === "dec") changeQty(id, -1);
  if (action === "remove") removeItem(id);
});

cartFooter.addEventListener("click", function (e) {
  if (e.target.id === "clearBtn") clearCart();
  if (e.target.id === "checkoutBtn") openCheckout();
});
// ================= 10. CHECKOUT =================
const checkoutOverlay = document.getElementById("checkoutOverlay");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutSummary = document.getElementById("checkoutSummary");
const checkoutForm = document.getElementById("checkoutForm");

const custName = document.getElementById("custName");
const custPhone = document.getElementById("custPhone");
const custAddress = document.getElementById("custAddress");
const errName = document.getElementById("errName");
const errPhone = document.getElementById("errPhone");
const errAddress = document.getElementById("errAddress");

// ---------- Open the checkout modal ----------
function openCheckout() {
  if (cart.length === 0) return;
  renderCheckoutSummary();
  cartOverlay.classList.remove("show");
  checkoutOverlay.classList.add("show");
}

function closeCheckoutModal() {
  checkoutOverlay.classList.remove("show");
}

// ---------- Order summary inside the modal ----------
function renderCheckoutSummary() {
  const t = getTotals();
  const lines = cart.map(function (c) {
    const f = findFood(c.id);
    return `
      <div class="cart-top meta">
        <span>${c.qty} × ${f.name}</span>
        <span>$${(f.price * c.qty).toFixed(2)}</span>
      </div>`;
  }).join("");

  checkoutSummary.innerHTML = `
    <h3>Order summary</h3>
    ${lines}
    <div class="cart-top meta"><span>Delivery</span><span>${t.delivery ? "$" + t.delivery.toFixed(2) : "Free"}</span></div>
    <div class="cart-top total"><span>Total</span><span>$${t.total.toFixed(2)}</span></div>
  `;
}

// ---------- Validation ----------
function validateCheckout() {
  const name = custName.value.trim();
  const phone = custPhone.value.trim();
  const address = custAddress.value.trim();
  let valid = true;

  errName.textContent = "";
  errPhone.textContent = "";
  errAddress.textContent = "";

  if (name.length < 2) {
    errName.textContent = "Please enter your full name.";
    valid = false;
  }

  // optional +, then 9 to 15 digits, spaces or dashes
  if (!/^\+?[0-9\s-]{9,15}$/.test(phone)) {
    errPhone.textContent = "Enter a valid phone number (9-15 digits).";
    valid = false;
  }

  if (address.length < 8) {
    errAddress.textContent = "Please enter a complete delivery address.";
    valid = false;
  }

  return { valid: valid, name: name, phone: phone, address: address };
}

// ---------- Place the order ----------
function placeOrder(customer) {
  const t = getTotals();
  const order = {
    id: "BZ" + Date.now().toString().slice(-6),
    items: cart.map(function (c) {
      const f = findFood(c.id);
      return { name: f.name, emoji: f.emoji, price: f.price, qty: c.qty };
    }),
    totals: t,
    customer: customer
  };

  clearCart();
  checkoutForm.reset();
  closeCheckoutModal();
  showConfirmation(order);
}
// ---------- Events ----------
checkoutForm.addEventListener("submit", function (e) {
  e.preventDefault();                      // stop the page from reloading
  const result = validateCheckout();
  if (!result.valid || cart.length === 0) return;
  placeOrder({ name: result.name, phone: result.phone, address: result.address });
});

closeCheckout.addEventListener("click", closeCheckoutModal);

checkoutOverlay.addEventListener("click", function (e) {
  if (e.target === checkoutOverlay) closeCheckoutModal();
});

// clear a field's error as soon as the user starts fixing it
custName.addEventListener("input", function () { errName.textContent = ""; });
custPhone.addEventListener("input", function () { errPhone.textContent = ""; });
custAddress.addEventListener("input", function () { errAddress.textContent = ""; });

// ================= 11. ORDER CONFIRMATION =================
const confirmOverlay = document.getElementById("confirmOverlay");
const confirmBox = document.getElementById("confirmBox");

function showConfirmation(order) {
  const rows = order.items.map(function (i) {
    return `
      <div class="cart-top meta">
        <span>${i.emoji} ${i.qty} × ${i.name}</span>
        <span>$${(i.price * i.qty).toFixed(2)}</span>
      </div>`;
  }).join("");

  confirmBox.innerHTML = `
    <div class="success-icon">✅</div>
    <h2 class="center-text">Order confirmed!</h2>
    <p class="center-text muted">
      Thank you, ${escapeHTML(order.customer.name)}.
      Your order <strong>#${order.id}</strong> is being prepared
      and should arrive in about 30 minutes.
    </p>

    <h3>Items ordered</h3>
    ${rows}
    <div class="cart-top meta">
      <span>Subtotal</span><span>$${order.totals.subtotal.toFixed(2)}</span>
    </div>
    <div class="cart-top meta">
      <span>Delivery</span>
      <span>${order.totals.delivery ? "$" + order.totals.delivery.toFixed(2) : "Free"}</span>
    </div>
    <div class="cart-top total">
      <span>Total</span><span>$${order.totals.total.toFixed(2)}</span>
    </div>

    <h3>Customer details</h3>
    <p class="details">
      <strong>Name:</strong> ${escapeHTML(order.customer.name)}<br>
      <strong>Phone:</strong> ${escapeHTML(order.customer.phone)}<br>
      <strong>Address:</strong> ${escapeHTML(order.customer.address)}
    </p>

    <button class="full" id="doneBtn">Back to menu</button>
  `;

  confirmOverlay.classList.add("show");
}

function closeConfirmation() {
  confirmOverlay.classList.remove("show");
}

confirmOverlay.addEventListener("click", function (e) {
  if (e.target === confirmOverlay || e.target.id === "doneBtn") closeConfirmation();
});

// ================= 12. POLISH =================
const featuredGrid = document.getElementById("featuredGrid");
const restaurantTag = document.getElementById("restaurantTag");
const themeBtn = document.getElementById("themeBtn");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// ---------- Featured food: the 4 most popular items ----------
function renderFeatured() {
  const top = foods.slice().sort(function (a, b) {
    return b.popularity - a.popularity;
  }).slice(0, 4);
  featuredGrid.innerHTML = top.map(foodCardHTML).join("");
}

// ---------- "View menu" on a restaurant card ----------
restaurantGrid.addEventListener("click", function (e) {
  const id = e.target.getAttribute("data-restaurant");
  if (!id) return;
  selectedRestaurant = Number(id);
  renderMenu();
  document.getElementById("menu").scrollIntoView();
});

// ---------- "Show all" button ----------
restaurantTag.addEventListener("click", function (e) {
  if (e.target.id === "clearRestaurant") {
    selectedRestaurant = 0;
    renderMenu();
  }
});

// ---------- Mobile menu ----------
menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});

mainNav.addEventListener("click", function (e) {
  if (e.target.tagName === "A") mainNav.classList.remove("open");  // close after choosing a link
});

// ---------- Dark mode ----------
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("bitezy_theme", theme);
  } catch (e) {}
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("bitezy_theme");
} catch (e) {}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ================= 9. RUN ON PAGE LOAD =================
renderRestaurants(restaurants);
renderCategories();
renderMenu();
renderFeatured();
renderCart();
