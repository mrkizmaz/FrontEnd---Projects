export default class UI {
    // htmlde var olan elementleri cagirir
    constructor() {
        this.list = document.querySelector(".list");
    }


    renderCards(songs) {
        songs.forEach((name) => {

            const url = name.attributes.artwork.url
            const w = name.attributes.artwork.width;
            const h = name.attributes.artwork.height;

            const url2 = url.replace("{w}", w);
            const url3 = url2.replace("{h}", h);

            const urlOrg = url3;

            // console.log(urlOrg);

            // console.log(name);


            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `

                    <figure>
                        <img src="${urlOrg}" width="200px" alt="">

                        <div class="play">
                            <i class="bi bi-play-fill"></i>
                        </div>
                    </figure>
                    <h4>${name.attributes.name}</h4>
                    <h4>${name.attributes.artistName}</h4>
            
            `;
            this.list.appendChild(div);
        });

    }
}