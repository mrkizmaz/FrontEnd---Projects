// veriyi api den alan fonksiyon
export const fetchProducts = async () => {
    // disarda kullanmak icin export
    try {
        //  apiya istek atma
        const response = await fetch("db.json");
        // console.log(response);

        // hata durumunu kontrol eder
        if (!response.ok) {

            // hata varsa hata firlatir
            throw new Error("URL yanlis");
        }

        // hata yoksa veriyi return et
        return await response.json();
    }

    catch (error) {

        // hata varsa bunu console a yazdir
        console.error(error);
        return [];
    }
};

// ürünleri render (ekrana basar) eden fonsiyon
export const renderProducts = (products, addToCartCallBack) => {
    // htmlde ürünlerin listenecegi kisimlari sec
    const productList = document.querySelector("#productList");
    // ürünleri ekrana bas
    // console.log(products)

    // htmldeki productlistin icerigini dön
    productList.innerHTML = products.map(
        (product) => `
        <div class="product">
                <img width="200" src="${product.image}" alt="product-img" class="product-img">
                <div class="product-info">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>`
    )
        .join("");

    // add to cart butonlarina erismek icin
    const addToCartButtons = document.getElementsByClassName("add-to-cart");
    // console.log(addToCartButtons);

    // her 'add to cart' butonuna tiklandiginda
    for (let i = 0; i < addToCartButtons.length; i++) {
        // console.log("Button");

        const addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener("click", addToCartCallBack);
    };
};