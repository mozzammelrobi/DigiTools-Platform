

const CartCard = ({ product, cartProducts, setCartProducts, totalPrice, setTotalPrice }) => {
    const removeCart = () => {

        const filterProduct = cartProducts.filter(cartProduct => cartProduct.name !== product.name)
        setCartProducts(filterProduct)
        const newPrice = totalPrice - product.price;
        setTotalPrice(newPrice)
        // console.log(filterProduct)

    }
    return (
        <div className='bg-[#6273821A] rounded-lg flex justify-between p-3 items-center'>
            <div className='flex gap-3 items-center'>
                <span className="text-5xlxl">{product.icon}</span>
                <div>
                    <h5 className="font-bold">{product.name}</h5>
                    <p>${product.price}</p>
                </div>
            </div>
            <button
                onClick={() => removeCart()}
                className='text-red-500 font-bold cursor-pointer'>Remove</button>
        </div>
    );
};

export default CartCard;