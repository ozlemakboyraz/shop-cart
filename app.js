const userName = prompt("Adınız nedir?");
console.log("Adınız nedir? " + userName);

const age = prompt("Yaşınız kaç?");
console.log("Yaşınız kaç? " + age);

const job = prompt("Mesleğiniz nedir?");
console.log("Mesleğiniz nedir? " + job);

const user = {
    name: userName,
    age: Number(age),
    job: job
};

console.log(`Kullanıcı Bilgileri: { name: '${user.name}', age: ${user.age}, job: '${user.job}' }`);

const cart = [];

function addProduct() {
    const productName = prompt("\nSepete eklemek istediğiniz ürünü yazın: (çıkmak için 'q', silmek için 'sil')");
    console.log(`Sepete eklemek istediğiniz ürünü yazın: ${productName}`);

    if (productName.toLowerCase() === "q") return false;

    if (productName.toLowerCase() === "sil") {
        removeProduct();
        return true;
    }

    const productPrice = Number(prompt("Ürünün fiyatı:"));
    console.log(`Ürünün fiyatı: ${productPrice}`);

    const product = {
        product: productName,
        price: productPrice
    };

    cart.push(product);
    console.log(`${product.product} ürünü sepete eklendi. Fiyat: ${product.price} TL`);
    return true;
}

function removeProduct() {
    const nameToRemove = prompt("Sepetten çıkarmak istediğiniz ürünün adını yazın:");
    const index = cart.findIndex(item => item.product.toLowerCase() === nameToRemove.toLowerCase());

    if (index !== -1) {
        const removed = cart.splice(index, 1)[0];
        console.log(`${removed.product} ürünü sepetten çıkarıldı.`);
    } else {
        console.log(`Ürün bulunamadı: ${nameToRemove}`);
    }
}

function showCart() {
    const formattedCart = cart.map(item => `{ product: '${item.product}', price: ${item.price} }`);
    console.log(`\nSepetiniz: [ ${formattedCart.join(", ")} ]`);

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Toplam Fiyat: ${total} TL`);
}


while (true) {
    const keepGoing = addProduct();
    if (!keepGoing) break;
}


showCart();
