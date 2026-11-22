import ProductCard from '../Product/ProductCard';

const ToolsContest = ({ productPromise }) => {
    const products = use(productPromise).data

    return (
        <>
            <div className='text-center space-y-4 mb-10'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br /> to boost your productivity and creativity.</p>
                <div className='flex  justify-center'>
                    <div className='bg-white shadow rounded-full w-fit'>
                        <button
                            className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>
                            Products
                        </button>
                        <button
                            className='btn rounded-full bg-white border-none'>
                            Cart (0)
                        </button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}></ProductCard>)
                }
            </div>

        </>
    );
};

export default ToolsContest;