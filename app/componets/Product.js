import Link from "next/link"

const Product = ({product}) =>{
    return(
        <div class = "product_more">
            <Link href = "/">Back</Link><br/>
            <div class = "main_img"> <img src = {product.image} alt = " -_-"></img> </div>
            <div class = "main_info">
                <h2 className="product_title">{product.title}</h2>
                <p className="oneproduct_category">Category: {product.category}</p>
                <span className="product_price">Price: {product.price}$</span>
                
                <p className="oneproduct_description">Description: {product.description}</p>
                
            </div>
            
        </div>
    )
}

export default Product