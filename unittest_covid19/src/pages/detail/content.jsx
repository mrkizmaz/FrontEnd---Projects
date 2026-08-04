import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "../../components/loader/contentLoader";
import Error from "../../components/error";
import Card from "./card";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Content = () => {
    const { isLoading, error, data } = useSelector((store) => store);
    // console.log(data)
    const dispatch = useDispatch();
    const { code } = useParams();

    // data nesnesini diziye çevir
    const arr = Object.entries(data || {}).filter((i) => i[0] !== "flag");
    // console.log(arr)

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {isLoading ? (
                <ContentLoader />
            ) : error ? (
                <Error info={error} refetch={() => dispatch(getDetails(code))} />
            ) : (
                arr.map((item, key) => <Card key={key} item={item} />)
            )}
        </div>
    );
};

export default Content;
