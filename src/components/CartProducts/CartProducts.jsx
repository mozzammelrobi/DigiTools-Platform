import { toast } from 'react-toastify';
import CartCard from '../CartCard/CartCard';

const CartProducts = ({ cartProducts, setCartProducts, totalPrice, setTotalPrice }) => {
    // console.log(cartProducts)
    const handleCheckOut = () => {
        setCartProducts([])
        setTotalPrice(0)
        console.log(cartProducts)
        
       toast.success("successfully checkout")
    }
    return (
        <>
            {
                totalPrice !== 0 ?
                    <div className='mb-14 p-8 shadow'>
                        <p className='text-xl font-bold'>Your Cart</p>

                        <div className=' p-3 mb-14 space-y-3 flex flex-col gap-5'>
                            {
                                cartProducts.map(product => <CartCard
                                    key={product.id}
                                    product={product}
                                    cartProducts={cartProducts}
                                    setCartProducts={setCartProducts}
                                    totalPrice={totalPrice}
                                    setTotalPrice={setTotalPrice} />)
                            }

                        </div>
                        <div className='flex justify-between'>
                            <span className='text-2xl'>Total: </span>
                            <span className='font-extrabold text-2xl'>${totalPrice} </span>

                        </div>
                        <button
                            onClick={() => handleCheckOut()}
                            className='btn rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full mt-4'>Proceed To checkOut</button>
                    </div>
                    : <div className='text-center'>
                        <span className='text-5xl text-center'>No data Availaible</span>
                    </div>
            }


        </>
    );
};

export default CartProducts;