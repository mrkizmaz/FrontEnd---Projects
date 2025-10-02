import API from "./api.js";
import UI from "./ui.js";

// classin örnegini al (metotlari kullanabilmek icin)

const api = new API();
const ui = new UI();

// console.log(api);

// sayfa yüklendigi anda api dan populer müzikleri al ve renderla
document.addEventListener("DOMContentLoaded", () => {

    api.getPopular();
    // 1) then - catch
    api.getPopular() // eger islem basariliysa
        .then((data) => ui.renderCards(data))
        .catch((err) => {
            console.log(err);
            alert("üzgünüz bir sorun olustu!");
        });


    /*

        - 2) async - await
    try {
        const data = await api.getPopular();
        console.log(data);
    } catch (err) {
        console.log(err);
        alert("üzgünüz bir sorun olustu!");
    }


    */
});

