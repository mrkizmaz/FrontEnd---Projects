import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { actionTypes } from "../redux/actionTypes";

const Themes = () => {

    const themesState = useSelector((store) => store.themeReducers)
    console.log(themesState);

    // const todoState = useSelector((store) => store.todoReducers);
    // console.log(todoState)



    return (
        <div>
            <button>Teme degis</button>
        </div>
    )
}

export default Themes