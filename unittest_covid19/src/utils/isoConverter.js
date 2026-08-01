import axios from 'axios';

async function getIsoCodeByCountryName(countryName) {
    try {
        const response = await axios.get('https://flagcdn.com/en/codes.json');
        const codeToName = response.data; // { "af": "Afghanistan", "tr": "Turkey", ... }

        const normalizedInput = countryName.trim().toLowerCase();

        const foundEntry = Object.entries(codeToName).find(
            ([code, name]) => name.toLowerCase() === normalizedInput
        );

        if (!foundEntry) {
            console.warn(`"${countryName}" için eşleşen ISO kodu bulunamadı.`);
            return null;
        }

        const [isoCode] = foundEntry;
        return isoCode;
    } catch (error) {
        console.error('ISO kodu alınırken hata oluştu:', error.message);
        return null;
    }
}

export default getIsoCodeByCountryName;