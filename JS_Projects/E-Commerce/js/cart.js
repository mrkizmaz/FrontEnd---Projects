import { getFromLocalStorage, saveToLocalStorage } from "./utills.js";

let cart = getFromLocalStorage();
console.log(cart); // veri var mi yok mu kontrol etmek icin

export function addToCart(event, products) {
    console.log(products);

    // tiklanilan ürünün idsine erisildi ve numbera dönüstürüldü. typeof ile de veri tipine bakilabilir
    // console.log(typeof parseInt(event.target.dataset.id));

    const productId = parseInt(event.target.dataset.id);
    // bu idye sahip baska bir ürün var mi
    const product = products.find((product) => product.id === productId);
    // console.log(product);

    // eger ürün varsa bunu kontrol eder. 
    // eklenecek veri öncesinde sepette var ise bunu yeni bir eleman olarak ekler
    if (product) {
        // eger ürün varsa bunu bul
        const exitingItem = cart.find((product) => product.id === productId);

        // eger ürün sepette var ise bunu ekleme
        if (exitingItem) {
            exitingItem.quantity++;
        }
        else {
            // eklenecek veriyi objeye cevir
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            };

            saveToLocalStorage(cart);
            cart.push(cartItem);
            // ekleme yapilan kartin icerigini güncelle
            event.target.textContent = "Added";
        }
    }

};