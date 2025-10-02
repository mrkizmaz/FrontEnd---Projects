// api url
const url = 'https://shazam.p.rapidapi.com/v2/search?term=adele&locale=en-US&offset=0&limit=10';

// gönderilmesi gereken headerlar
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b810de1a72mshbb44498f9ade78cp17adc3jsn5403ff1183c1',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
};


/*
    Bu yöntemle de yapilabilir

export const getPopular = async () => { };

export const searchMusic = async (aratilanKelime) => { };

*/

// fonksiyonlarin bir arada tutulmasi icin class yapisi tercih edildi (zorunlu degil, farkli seyler görelim)

export default class API {
    // populer müzikleri getirecek
    async getPopular() {


        const resp = await fetch(url, options);
        const data = await resp.json();

        // console.log(data.results.songs.data);

        // api dan gelen cevabi daha iyi bir formata cevirdik   
        const formatted = data.results.songs.data.map((item) => (item));

        // console.log(formatted)

        // fonksiyonun cagrildigi yere veriyi döndürelim
        return formatted;

        // data.results.songs.data.map((item) => { console.log(item.attributes.name)});


        // console.log(data.results.songs.data[0].attributes.name);
        // console.log(data.tracks.hits);



        // apidan gelen cevabi daha iyi bir formata cevirdik
        // const formatted = data.tracks.hits.map((item) => item.track);


        // fonksiyonun cagrildigi yere veriyi döndürelim
        // return formatted;


        /*
        // track nesnesini kaldirmak icin kod düzeni
        const formatted = data.tracks.hits.map((item) => ({ ...item.track }));

        // yukaridaki ile ayni op! fonksiyonu
        const formatted1 = data.tracks.hits.map((item) => {
            return { ...item.track }});
            */
    }

    // aratilan müzikleri getirecek
    async searchMusic(aratilanKelime) { }
}
