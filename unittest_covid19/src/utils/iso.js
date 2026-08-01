import axios from 'axios';

async function getIsoCodes() {
    try {
        const response = await axios.get('https://covid-api.com/api/regions');
        const isoCodes = response.data.data.map((region) => region.iso);
        return isoCodes;
    } catch (error) {
        console.error('ISO kodları alınırken hata oluştu:', error.message);
        return [];
    }
}

export default getIsoCodes;