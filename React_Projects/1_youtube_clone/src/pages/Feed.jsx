import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Feed = () => {

    const [videos, setVideos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchParams] = useSearchParams();
    const selectedCat = searchParams.get("category");
    // console.log(selectedCat);

    useEffect(() => {

        // selectedCat null ise: /home
        // selectedCat trending ise: /trending
        // selectedCat trending degil ise: /search?query=DEGER

        const url = !selectedCat
            ? "/home"
            : selectedCat === "trending" ? "/trending"
                : `/search?query=${selectedCat}`;

        console.log(url)

        // yükleniyor stateini güncelle
        setIsLoading(true);

        api.get(url)
            .then((res) => setVideos(res.data.data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [selectedCat]);

    // console.log(isLoading, error, videos);

    // console.log(videos)

    return (
        <div className="flex">
            <Sidebar selectedCat={selectedCat} />

            <div className="videos">
                {isLoading ? (<Loader />) : error ? (<Error />) : (videos.map((i) => {
                    return i.type === 'video' && (<Card key={i.videoId} video={i} />);
                }))}
            </div>
        </div>
    )
}

export default Feed;