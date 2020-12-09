const ProductCard = ({product, setActiveProduct})=>{
    let {name, description, default_price, id, slogan} = product;
    return (
        <div className='product-card' onClick={(e)=>setActiveProduct(product)}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${default_price}</p>
        </div>
    )
}

export default ProductCard;