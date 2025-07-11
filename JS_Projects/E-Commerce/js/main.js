// baglanti kontrolü
// console.log(`selam js`);

import { addToCart } from "./cart.js";
import { fetchProducts, renderProducts } from "./products.js";

// HTML den eleman cekme isleme
const menuIcon = document.querySelector("#menu-icon");
// console.log(menuIcon); 

const menu = document.querySelector(".navbar");
// console.log(menu); 

// menu iconuna tiklayinca menu kismina class ekleyip cikarmak
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open-menu");
});

// sayfa yüklendiginde calisacak fonksiyon
document.addEventListener("DOMContentLoaded", async () => {
    // console.log(window);

    if (window.location.pathname.includes("card.html")) {
        // console.log(`Cart sayfasindasin`);
    }
    else {
        // console.log(`Ana sayfadasin`);

        const product = await fetchProducts();
        // console.log(product);

        // buradaki arrow function addToCartCallBack fonksiyonu oluyor
        renderProducts(product, (event) => { addToCart(event, product) });
    }
});
