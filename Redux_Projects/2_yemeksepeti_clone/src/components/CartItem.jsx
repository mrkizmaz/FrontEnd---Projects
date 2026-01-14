import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'



const CartItem = ({ item }) => {

    return (
        <div className='flex gap-4 rounded-lg mb-10 p-4 border'>
            <img src={item.photo} className='w-28.75 rounded-lg' />
            <div className='flex flex-col justify-between w-full'>
                <h3 className='text-xl font-semibold text-red-500'>{item.title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold text-lg'>$ {item.price}</p>
                    <div className='border text-l rounded-lg'>
                        <button className='btn'>{item.amount > 1 ? <FaMinus /> : <FaTrash />}</button>
                        <span className='p-3'>{item.amount}</span>
                        <button className='btn'><FaPlus /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem