import { calculateCartTotal, getFromLocalStorage, saveToLocalStorage, updateCartIcon } from "./utills.js";

let cart = getFromLocalStorage();

// sepete ekleme yapacak fonksiyon
//  console.log(cart); // veri var mi yok mu kontrol etmek icin

export function addToCart(event, products) {
    // console.log(products);

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

            // local storage a kayit yapan fonksiyon
            saveToLocalStorage(cart);
            cart.push(cartItem);
            // ekleme yapilan kartin icerigini güncelle
            event.target.textContent = "Added";
            // sepet iconunu güncelleyen fonksiyon
            updateCartIcon(cart);
            // renderCartItems();

            // toplam mitktari hesapla
            displayCartTotal();

        }
    }

};

// sepetten ürünleri silecek fonksiyon
const removeFromCart = (event) => {
    // tiklandiktan sonra kapsayici ile ilgili özelliklere erismek icin `event` parametresi kullanilir

    // silinecek elemanin idsine eristik
    const productID = parseInt(event.target.dataset.id);

    // tiklanilan elemani sepetten kaldir
    cart = cart.filter((item) => item.id !== productID);

    // localstoragei güncelle
    saveToLocalStorage(cart);

    // sayfayi güncelle
    renderCartItems();

    // toplam mitktari hesapla
    displayCartTotal();

    // sepet iconunu güncelle
    updateCartIcon(cart);
};

// sepetteki elemanlari render (ekrana basar) edecek fonksiyon
export const renderCartItems = () => {
    // htmlde elemanlarin render edilecegi kapsayiciya eris
    const cartItemsELement = document.querySelector("#cartItems");
    // sepetteki her bir eleman icin cart item render et
    cartItemsELement.innerHTML = cart.map((item) =>
        `
        <div class="cart-item">
            <img src="${item.image}"
                alt="">
            <!-- info kismi -->
            <div class="cart-item-info">
                <h2>${item.title}</h2>
                <input type="number" min="1" value="${item.quantity}" class="cart-item-quantity"
                data-id="${item.id}">
            </div>
            <h2>$${item.price}</h2>
    <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        </div >

    ` ).join("");

    // remove butonlarina eris
    const removeButtons = document.querySelectorAll(".remove-from-cart");
    for (let i = 0; i < removeButtons.length; i++) {
        const removeButton = removeButtons[i];
        removeButton.addEventListener("click", removeFromCart);
    };

    // quantity inputlarina eris
    const quantityInputs = document.getElementsByClassName("cart-item-quantity");
    // console.log(quantityInputs);

    // inputlardaki sayilar degistigi zaman gerekli islemler
    for (let i = 0; i < quantityInputs.length; i++) {
        const quantityInput = quantityInputs[i];
        // console.log(quantityInput);
        quantityInput.addEventListener("change", onQuantityChange);
    }

    // inputlar degistiginde calisacak olan fonksiyon
    const onQuantityChange = (event) => {

        const newQuantity = +event.target.value; // str to num -> +...
        const productId = +event.target.dataset.id; // Number("3") = +"3"

        /*
        console.log("miktar degisti, yeni: ", event.target.value);
        // console.dir(event.target) // js kodlarina erismek icin
        console.log("miktari edgisen ürün id: ", event.target.dataset.id)
        */

        // yeni miktar 0dan büyükse, kullanici degeri degistirebilir!
        if (newQuantity > 0) {
            const cardItem = cart.find((item) => item.id === productId);

            // eger eleman sepette bulunamadiysa fonksiyonu durdur
            if (!cardItem) return;

            // ürün miktarini güncelle
            //console.log(cardItem);
            cardItem.quantity = newQuantity;

            // localstoragei güncelle
            saveToLocalStorage(cart);

            // sepet ikonundaki degeri güncelle
            updateCartIcon(cart);

            // toplam fiyati güncelle
            displayCartTotal(cart);

        };





    };

};

export const displayCartTotal = () => {
    const cartTotalElement = document.querySelector("#cartTotal");
    const total = calculateCartTotal(cart);
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
};