import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { actionTypes } from "../redux/actionTypes";
import { toast } from "react-toastify";

const Form = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!e.target[0].value.trim()) return alert("input degeri bos birakilamaz!");

        // -todo dizisini yeni dizi ile güncelle
        const newTodo = {
            id: v4(),
            text: e.target[0].value,
            isDone: false,
            createdAt: new Date().getTime(),
        };

        // store haber ver
        dispatch({
            type: actionTypes.ADD,
            payload: newTodo,
        });

        // bilgi ver    
        toast.success("Todo basariyla eklendi.");

        e.target.reset();


    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="d-flex align-items-center gap-3 my-4">
                    <input type="text" className="form-control" />
                    <button className="btn btn-warning">Add</button>
                </div>
            </form>


        </div>
    )
}

export default Form