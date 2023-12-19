
'use client'

import { useState } from "react"
import { Redirect } from "../../componets/perehod"

const UpdateProduct = ({params:{id}})=>{
    const data = {
    "title": "",
    "price": 0,
    "description": "",
    "image": "",
    "category": ""
    }

    const getProduct = async () =>{
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        const result = await res.json();
        setProduct(result);
    }

    const UpdateItems = async ()=>{
        const res = await fetch("https://fakestoreapi.com/products/" + id,{
            method:"PUT",
            body: JSON.stringify(
                data
            ),
            headers:{'Content-Type': 'application/json'}
        })
        const result = await res.json()
        console.log("Product updated")
        console.log(result)
    }

    const HReq = (e) => {
        switch(e.target.name){
            case "title":
                data.title = e.target.value;
            break;
            case "price":
                data.price = e.target.value;
            break;
            case "description":
                data.description = e.target.value;
            break;
            case "image":
                data.image = e.target.value;
            break;
            case "category":
                data.category = e.target.value;
            break;
        }
        console.log(data)
    }

    const[product, setProduct] = useState(getProduct)
    data.title = product.title
    data.price = product.price
    data.description = product.description
    data.image = product.image
    data.category = product.category

    return(

        <form className="create_form" action="">
            <Redirect/>
            <h2 className="h2_creation">Product update</h2>
            <label class = "label">Title</label>
            <div className="create_item">
                
                <input placeholder="title" className="create_input" type="text" name="title" onBlur={HReq} defaultValue={product.title}/>
            </div>

            <label class = "label">Price</label>
            <div className="create_item">
                <input placeholder="price" className="create_input" name="price" onBlur={HReq} defaultValue={product.price}/>
            </div>

            <label class = "label">Description</label>
            <div className="create_item">
                <input placeholder="description" className="create_input" name ="description" onBlur={HReq} defaultValue={product.description}/>
            </div>

            <label class = "label">Image-url</label>
            <div className="create_item" >
                <input type="url" placeholder="image url" className="create_input" name="image" onBlur={HReq} defaultValue={product.image}/>
            </div>

            <label class = "label">Category</label>
            <div className="create_item">
                <input placeholder="category" className="create_input" name = "category" onBlur={HReq} defaultValue={product.category}/>
            </div>

            <button className="create_button" type="button" onClick={UpdateItems}>Submit</button>
        </form>
        
    )
}

export default UpdateProduct