// localstorage a veri kaydeden fonksiyon
export function saveToLocalStorage(cart) {
    // localstrogea cart verisini kaydet
    localStorage.setItem("cart", JSON.stringify(cart));
};

// localstorage den verileri alan fonksiyon
export const getFromLocalStorage = () => {
    // localstorage den verileri al ve jsona cevir, eger veri yoksa bos disi gönder
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
};

// sepetteki ürün miktarini hesapla
export const updateCartIcon = (cart) => {
    // sepet ikonu kapsayicisi ve quantity degerine eris
    const cartIcon = document.querySelector(".cart-icon");
    const i = document.querySelector(".bx-shopping-bag");
    // sepette bulunan toplam ürün sayisini hesapla
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    // quantity attributenun degerini güncelle
    i.setAttribute("data-quantity", totalQuantity);
};

export function calculateCartTotal(cart) {
    // reduce: deger degistirme icin kullanilir
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}