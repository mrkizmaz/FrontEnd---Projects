/*
    - URL'deki arama parametrelerine(search-param) eris
    - JS'de tarayici ile alakali olan verilere erismek istiyorsak windows nesnesi kullaniriz


*/

/*

console.log(window.location.search.split("=")[1]);
console.log(window.location.search.slice(4));

- Bu yöntemler de kullanilabilir fakat profesyonel projelerde kullanilmasi uygun degil. Cünkü urlde 1'den fazla parametre olabilir.

- JS'de URLdeki arama parametrelerini yönetmeye yarayan yerlesik bir class vardir: URLSearchParams

*/

// URLSearchParams("?id=122name=10daskdasdkksdfs")
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// 1- sayfanin yüklenme olayini izle

document.addEventListener("DOMContentLoaded", async () => {
    // let data;
    // 2- api'dan verileri al
    // api ile yapilan islemler hep zaman alacagindan dolayi async-await metodu kullanilmali!
    try {
        const resp = await fetch("../db.json");
        const data = await resp.json();

        // 3- veriler arasindan url'deki idye denk gelen ürünü bul
        // tek bir elemani secmek icin find, 1den fazla ise filter metodu kullanilir
        // ==: number, ===: string icin kullanilir
        const product = data.menu.find((item) => item.id == id);

        // 4- ürün bulunamazsa 404 sayfasini renderla
        if (!product) {
            renderNotFound();
        }
        else {
            // 5- ürün bulunursa, sayfa icerigini api'dan aldigimiz ürüne göre degistir
            renderPage(product);
        }

    } catch (error) {
        // api isteginde hata olursa
        renderPage();
        return alert("üzgünüz bir sorun olustu!");
    }

    // console.log(data);
});

// icerisine sayfa icerigi yazacagimiz divi cagir
const outlet = document.getElementById("outlet");

// sayfa icerigini aldigi parametreye göre dinamik olarak ekrana basan fonksiyon
function renderPage(product) {
    outlet.innerHTML = `
    
        <div id="outlet" style="max-width: 900px;" class="container my-5 d-flex flex-column gap-5 px-5">

        <div class="d-flex justify-content-between fs-6">
            <a href="/">
                <img width="35px" src="/images/home.png" alt="">
            </a>

            <p>anasayfa / ${product.category} / ${product.title.toLowerCase()}</p >
        </div >

        <h1 class="text-center my-4">${product.title}</h1>
        <img src="${product.img}" class="rounded object-fit-cover shadow" style="max-height: 400px;">

        <h4 class="mt-4">
            <span>Ürün Kategorisi: </span>
            <span class="text-success">${product.category}</span>
        </h4>

        <h4 class="mt-4">
            <span>Ürünün Fiyati: </span>
            <span class="text-success">${(product.price * 30).toFixed(2)} €</span>
        </h4>

        <p class="lead">${product.desc}</p>

    </div>
    `
}

// 404 sayfa icerigini ekrana basan fonksiyon
function renderNotFound() {
    outlet.innerHTML = `
    
    <div style="height:90vh" class="d-flex justify-content-center align-items-center">

    <div class="d-flex flex-column align-items-center gap-3">
    <h1 class="text-center">Aradiginiz ürün bulunamadi</h1>

    <a href="/">Anasayfaya dönün</a>

    </div>
    
    </div>
    `
}

