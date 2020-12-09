import ProductCard from './ProductCard';

const ProductList = ({list, setActiveProduct})=>{

    return(
        <div className='product-list'>
            {list.map(product => <ProductCard product={product} setActiveProduct={setActiveProduct}/> )}
        </div>
    )
}


export default ProductList