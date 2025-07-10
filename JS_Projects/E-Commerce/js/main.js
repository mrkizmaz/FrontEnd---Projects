// baglanti kontrolü
// console.log(`selam js`);

// HTML den eleman cekme isleme
const menuIcon = document.querySelector("#menu-icon");
// console.log(menuIcon); 

const menu = document.querySelector(".navbar");
// console.log(menu); 

// menu iconuna tiklayinca menu kismina class ekleyip cikarmak
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open-menu");
});

