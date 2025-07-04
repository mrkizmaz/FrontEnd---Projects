// baglanti kontrolü
// console.log(`selam JS`)

// ! Düzenleme modu degiskenleri
let editMode = false;
let editItem;
let editItemId;

// ! HTML'den elemanlari getirme
const form = document.querySelector(".form-wrapper");
const input = document.querySelector("#input");
const itemList = document.querySelector(".item-list");
const alert = document.querySelector(".alert");
const addButton = document.querySelector(".submit-btn");
const clearButton = document.querySelector(".clear-btn");
// console.log(form, input)

// !! Fonksiyonlar
// * form gönderildiginde calisacak olan fonksiyon
const addItem = (e) => {
    e.preventDefault(); // sayfanin yenilenmesini iptal eder
    const value = input.value;
    if (value !== "" && !editMode) {
        // console.log(value);
        const id = new Date().getTime().toString(); // milisaniyede benzersiz deger alir

        createElement(id, value);
        setToDefault();
    }

    // console.log(`Form gönderildi...` + ` ${value}`);

    else if (value !== "" && editMode) {
        editItem.innerHTML = value;
        updateLocalStorage(editItemId, value);
        showAlert("Item was updated", "success");
        setToDefault();
    }
}

// * sayfa yüklendiginde elemanlari render eden fonksiyon
const renderItems = () => {
    // console.log(`calisti`);
    let items = getFromLocalstorage();
    // console.log(items);
    if (items.length > 0) {
        items.forEach((item) => {
            createElement(item.id, item.value)
        });
    };
};

// * yeni eleman olusturan fonksiyon
const createElement = (id, value) => {
    const newDiv = document.createElement("div"); // yeni bir div olusturur
    newDiv.classList.add("items-list-item"); // dive class ekler
    // divin HTML icerigini düzenleme
    newDiv.innerHTML = `
        <p class="item-name">${value}</p>
        <div class="btn-container">
            <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>   
    `;
    newDiv.setAttribute("data-id", id); // yeni attribute ekler

    // delete butonuna erisme
    const deleteBtn = newDiv.querySelector(".delete-btn");
    // console.log(deleteBtn);
    deleteBtn.addEventListener("click", deleteItem);

    // edit butonuna erisme
    const editBtn = newDiv.querySelector(".edit-btn");
    // console.log(editBtn);
    editBtn.addEventListener("click", editItems);

    itemList.appendChild(newDiv); // html class grubuna yeni eleman ekler
    showAlert("Eleman basariyla eklendi", "success");
    addToLocalstorage(id, value);
};

// * uyari verecek fonksiyon
const showAlert = (text, action) => {
    alert.textContent = `${text}`; // text icerigini günceller
    alert.classList.add(`alert-${action}`); // class ekler
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 2000);
    // 2 sn sonrasinda uyariyi kaldirir
};

// * delete fonksiyonu
const deleteItem = (e) => {
    // silmek istenen elemana erismek
    const element = e.target.parentElement.parentElement.parentElement;
    const id = element.dataset.id;
    itemList.removeChild(element); // elemani kaldirir
    removeFromLocalstorage(id);
    showAlert("Item was deleted", "danger");

    // eger hic eleman yoksa sifirlama butonunu kaldir
    if (!itemList.children.length) {
        clearButton.style.display = "none";
    }
}

// * edit fonksiyonu
const editItems = (e) => {
    const element = e.target.parentElement.parentElement;
    editItem = e.target.parentElement.parentElement.previousElementSibling;
    input.value = editItem.innerText;
    editMode = true;
    editItemId = element.dataset.id;
    addButton.textContent = "Edit";
};

// * sifirlama yapan fonksiyon
const clearItems = () => {
    const items = document.querySelectorAll(".items-list-item");
    if (items.length > 0) {
        items.forEach((item) => {
            itemList.removeChild(item);
        });
        clearButton.style.display = "none";
        showAlert("Empty List", "danger");
        // localstoragei temizler
        localStorage.removeItem("items");
    };
};

// * edit fonsksiyonundan sonra varsayilan özelliklere döndüren fonksiyon
const setToDefault = () => {
    input.value = "";
    editMode = false;
    editItemId = "";
    addButton.textContent = "Add";
};

// * LocalStorage a kayit yapan fonksiyon
const addToLocalstorage = (id, value) => {
    const item = { id, value };
    let items = getFromLocalstorage();
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
};

// * LocalStoragedan veri alan fonksiyon
const getFromLocalstorage = () => {
    return localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
};

// * localstorage dan verileri kaldiran fonksiyon
const removeFromLocalstorage = (id) => {
    let items = getFromLocalstorage();
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("items", JSON.stringify(items));
};

// * Localstoragei güncelleyen fonksiyon
const updateLocalStorage = (id, newValue) => {
    let items = getFromLocalstorage();
    items = items.map((item) => {
        if (item.id === id) {
            // Spread Operator: Bir elemani güncellerken veri kaybini önlemek icin kullanilir. Burada biz obje icerisinde yer alan valueya güncelledik. Ama bunu yaparken id degerini kaybetmemek icin Spread Operator kullandik
            return { ...item, value: newValue };
        };
        return item;
    });
    localStorage.setItem("items", JSON.stringify(items));
};



// ? Olay izlenceleri
// formun gönderildigi ani yakala
form.addEventListener("submit", addItem);
// sayfanin yüklendigi ani yakala
window.addEventListener("DOMContentLoaded", renderItems);
// clear butona tiklaninca elemanlari sifirlama
clearButton.addEventListener("click", clearItems);