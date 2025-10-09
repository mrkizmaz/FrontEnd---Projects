import { gotoIcon, homeIcon, jobIcon, parkIcon, personIcon } from "./constants.js";


// status degerine bagli olarak dogru iconu render eden fonksiyon
function getIcon(status) {
    switch (status) {
        case "goto":
            return gotoIcon;
        case "home":
            return homeIcon;
        case "job":
            return jobIcon;
        case "person":
            return personIcon;
        case "park":
            return parkIcon;

        default:
            return undefined;
    }
};

export default getIcon;

// status degerinin türkce karsiligini return eden fonksiyon
export function getStatus(status) {
    switch (status) {
        case "goto":
            return "Ziyaret";
        case "home":
            return "Ev";
        case "job":
            return "Is";
        case "park":
            return "Park";

        default:
            return "önemsiz";
    }
};