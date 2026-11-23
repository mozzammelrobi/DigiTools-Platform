
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';


const ProductCard = ({ product, cartProducts, setCartProducts, totalPrice, setTotalPrice }) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const handleBuyButton = () => {

        setCartProducts([...cartProducts, product])
        const priceTotal = product.price + totalPrice;
        setTotalPrice(priceTotal)
        setIsDisabled(true)
        toast.success('successfully add to cart')

    }


    return (
        <div className="card bg-base-100 shadow-[0px_0px_10px_rgba(0,0,0,0.15)]">
            <div className="card-body">
                <div className='flex justify-between'>
                    <span className='text-3xl p-3 rounded-full border border-gray-400'>{product.icon}</span>
                    <span
                        className={`badge badge-xs 
                            ${product.tagType === 'best-seller'
                                ? ' bg-[#FEF3C6] text-[#BB4D00]'
                                : product.tagType === 'popular'
                                    ? 'bg-[#4F39F61A]'
                                    : 'bg-[#0A883E1A]'
                            }`}>
                        {product.tag}</span>
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="text-xl"><span className='text-2xl font-bold'>${product.price}</span>/{product.period}</p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        product.features.map((feature, index) => {
                            return (
                                <div key={index} className='flex space-x-2'>
                                    <FaCheck />
                                    <span >{feature}</span>
                                </div>
                            )
                        })
                    }


                </ul>
                <div className=" mt-auto mt-6">
                    <button
                        disabled={isDisabled}
                        onClick={() => handleBuyButton(product)}
                        className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;