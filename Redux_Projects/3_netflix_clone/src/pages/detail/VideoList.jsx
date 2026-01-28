import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/react-splide/css';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

const VideoList = ({ videos }) => {

    // console.log(videos)

    return (
        videos.length > 0 &&
        (<div className='my-10'>
            <h2 className='font-semibold text-lg md:text-xl my-5'>Trailers</h2>
            <Splide
                extensions={{ Video }}
                options={{
                    video: {
                        loop: true,
                        mute: false
                    }
                }}>
                {videos.slice(0, 3).map((video) =>
                    <SplideSlide
                        key={video.id}
                        data-splide-youtube={video?.key}>
                        <div className='w-full h-[30vh] md:h-[50vh]'>
                            <img
                                className='size-full w-200 m-auto object-cover rounded'
                                src={`https://img.youtube.com/vi/${video?.key}/hqdefault.jpg`} alt="" />

                        </div>
                    </SplideSlide>)}
            </Splide>
        </div>)
    )
}

export default VideoList