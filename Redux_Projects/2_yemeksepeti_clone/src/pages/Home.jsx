import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { getRestaurants } from '../redux/acions/restActions';
import Error from '../components/Error';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {

    // store'daki restin güncel verilerini almak icin store'a abone olma
    const { isLoading, error, restaurants } = useSelector((store) => store.restaurantReducer);
    // console.log(restState);

    /*
    
        // 1. yöntem (thunk olmadan)
        useEffect(() => {
    
            // sayfa yüklendigi anda action tetikle
            dispatch({
                type: actionTypes.REST_LOAD,
            })
    
            axios
                .get("http://localhost:3000/restaurants")
                // eylemleri reducera aktar
                .then((res) => dispatch(setRestaurants(res.data)))
                .catch((err) => dispatch({
                    type: actionTypes.REST_ERROR,
                    payload: err,
                }))
        }, []);


            // 2. yöntem (thunk ile)
    useEffect(() => {
        dispatch(getRestaurants());
    }, [])
    
    */

    const dispatch = useDispatch();

    // sayfa hata verirse tekrar dene butonuna tikladiginda
    const retry = () => {
        dispatch(getRestaurants());
    }


    return (
        <div className='container'>

            <h1 className='font-semibold text-lg md:text-xl'>Yakininizdaki Restoranlar</h1>

            {isLoading
                ? <Loader />
                : error
                    ? <Error info={error} retry={retry} />
                    : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                        {restaurants.map((item) =>
                            (<RestaurantCard key={item.id} data={item} />)
                        )}
                    </div>
                // buna daha sonra calis!
            }

        </div>
    )
}

export default Home