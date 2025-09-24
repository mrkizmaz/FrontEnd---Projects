// arayüzü etki edecek tüm fonksiyonlar

// menu list divini cagir
const menuList = document.getElementById("menu-list");
// const menuList = document.querySelector("#menu-list");

// console.log(menuList);


// menu elemanlarini parametre olarak alip dizideki her bir eleman icin ekrana kart bas
export const renderCards = (data) => {
    // map: yeni bir dizi olusturur
    // data icerisindeki her bir eleman icin bir tane kart htmli olusturur
    // join metodu ile diziyi stringe cevirdik
    const cardsHTML = data.map(

        (item) => `
    
    <a href="/detail.html?id=${item.id}" id="card" class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none">
            <img class="rounded shadow img-fluid" src="${item.img}" alt="">

            <div>
                <div class="d-flex justify-content-between">
                    <h5>${item.title}</h5>
                    <p class="text-success fw-bold">${item.price} €</p>
                </div>
                <p class="lead">${item.desc}</p>
            </div>
        </a>
    
    `).join("");

    // olusturulan kartlari #menulist divinin icerisine aktar
    menuList.innerHTML = cardsHTML;
};