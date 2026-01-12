import { useDispatch, useSelector } from "react-redux"
import Form from "./components/Form"
import List from "./components/List"
import { actionTypes } from "./redux/actionTypes"
import Themes from "./components/Themes"
import store from "./redux/store"
import { toast } from "react-toastify"


const App = () => {

  const todoState = useSelector((store) => store.todoReducers);
  const dispatch = useDispatch();
  // console.log(todoState);

  const changeTheme = () => {
    dispatch({
      type: actionTypes.TOGGLE,
    })
  };

  return (
    <div className={`container p-4 ${!todoState.isDarkTheme && "bg-white text-dark"}`}>
      <h2 className="text-center my-4">APP</h2>

      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-center m-3"><span className={`${!todoState.isDarkTheme ? "text-danger" : "text-warning"}`}>Redux</span> CRUD</h4>
          <button onClick={changeTheme}>Tema Degis</button>
        </div>

        <div>
          <Form />
          <List />
        </div>
      </div>

    </div>
  )
}

export default App