import ProductList from "./ProductList"

const ProductDetail = ({product, photo})=>{
    let {name, description, default_price, id, slogan} = product;
    return (
        <div className="product-detail">
            <h1>{name}</h1>

            <h2>{slogan}</h2>

            <p>{description}</p>
            <p>${default_price}</p>
            <img src={photo}/>
        </div>
    )
}
export default ProductDetail