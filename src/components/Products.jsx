import productData from "../productData";
import ProductItem from "./ProductItem";

const Products = (props) => {
    
    return (
        <div className="grid grid-cols-3 gap-10 mb-8">
            {productData.map((product) => 
                <ProductItem product={product} key={product.id} cart={props.cart} setCart={props.setCart}/>
            )}

        </div>
    )
}

export default Products;