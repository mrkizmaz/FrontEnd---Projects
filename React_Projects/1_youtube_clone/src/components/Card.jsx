import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ video }) => {

    // mause üzerinde mi?
    const [isHover, setIsHover] = useState(false);

    // console.log(isHover);
    // console.log(video);

    /*
    - richThumbnail: gif
    - channelThumbnail: kanal fotografi
    - thumbnail: kapak fotografi
    */

    // kapak fotografi
    const coverPic = isHover && video.richThumbnail[0].url ? video.richThumbnail[0].url : video.thumbnail[video.thumbnail.length - 1].url;
    // console.log(coverPic);

    // kanal fotografi
    const channelPic = video.channelThumbnail[0].url;

    return (
        <Link to={`/watch?v=${video.videoId}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {/* resim alani */}
            <div>
                <img className="rounded-lg w-full h-full" src={coverPic} />
            </div>

            {/* alt detay alani */}
            <div className="flex gap-4 mt-5">
                <img className="size-14 rounded-full" src={channelPic} alt="" />

                <div>
                    <h4 className="font-bold line-clamp-2">{video.title}</h4>
                    <p>{video.channelTitle}</p>

                    <div className="flex gap-3 items-center mt-1">
                        <p>
                            <span>{video.viewCount}</span>
                            <span className="text-sm ms-1">Görüntülenme</span>
                        </p> *
                        {video.isLive ? <p className="bg-red-400 py-1 px-2 rounded-lg">Canli</p> : <p>{video.publishedTimeText}</p>}
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Card;