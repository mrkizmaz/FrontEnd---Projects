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