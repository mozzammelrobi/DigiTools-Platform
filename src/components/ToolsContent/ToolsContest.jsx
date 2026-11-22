import { use, useState } from 'react';
import ProductCard from '../Product/ProductCard';
import CartProducts from '../CartProducts/CartProducts';

const ToolsContest = ({ productPromise }) => {
    const products = use(productPromise).data

    const [toggleBtn, setToggleBtn] = useState('allProduct')
    console.log(toggleBtn)

    return (
        <>
            <div className='text-center space-y-4 mb-10'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br /> to boost your productivity and creativity.</p>
                <div className='flex  justify-center'>
                    <div className='bg-white shadow rounded-full w-fit'>
                        <button
                            onClick={() => setToggleBtn('allProduct')}
                            className={`rounded-full ${toggleBtn === 'allProduct' ? 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'btn  bg-white border-none'} `}>
                            Products
                        </button>
                        <button
                            onClick={() => setToggleBtn('cartProduct')}
                            className={`rounded-full ${toggleBtn === 'cartProduct' ? 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'btn  bg-white border-none'} `}>
                            Cart (0)
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {
                    toggleBtn === 'allProduct'
                        ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                products.map(product => <ProductCard
                                    key={product.id}
                                    product={product}></ProductCard>)
                            }
                        </div>

                        : <div>
                            <CartProducts></CartProducts>
                        </div>
                }
            </div>

        </>
    );
};

export default ToolsContest;