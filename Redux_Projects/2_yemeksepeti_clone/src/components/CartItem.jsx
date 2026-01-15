import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteItem, updateItem } from "../redux/acions/basketActions";


const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(updateItem(item.id, item.amount + 1));
    };

    const handleDelete = () => {
        item.amount > 1
            // miktar 1 den büyük ise elemanin adedini 1 azalt
            ? dispatch(updateItem(item.id, item.amount - 1))
            // miktar 1 den kücük ise elemani sepetten sil
            : dispatch(deleteItem(item.id));
    };



    return (
        <div className='flex gap-4 rounded-lg mb-10 p-4 border'>
            <img src={item.photo} className='w-28.75 rounded-lg' />
            <div className='flex flex-col justify-between w-full'>
                <h3 className='text-xl font-semibold text-red-500'>{item.title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-lg'>$ {item.price}</p>
                    <div className='border text-l rounded-lg'>
                        <button onClick={handleDelete} className='btn'>{item.amount > 1 ? <FaMinus /> : <FaTrash />}</button>
                        <span className='p-3'>{item.amount}</span>
                        <button onClick={handleAdd} className='btn'><FaPlus /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem