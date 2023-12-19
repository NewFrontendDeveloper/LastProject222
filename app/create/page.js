'use client'
import { Redirect } from "../componets/perehod"

function AddProduct(){
    const data = {
        title: "",
        price: 0,
        description: "",
        image: "",
        category:""
    }

    const SubmitProduct = async (e) =>{
        e.preventDefault()
        const response = await fetch('https://fakestoreapi.com/products',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const res = await response.json()
        console.log("the product has been successfully added")
        console.log(res)
    } 

    const handleRequest = (e)=>{
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
    return(

        <form className="create_form" action="">
            <Redirect/>
            <h2 className="h2_creation">Product creation</h2>

            <div className="create_item">
                <input placeholder="title" className="create_input" type="text" name="title" onBlur={handleRequest}/>
            </div>
            <div className="create_item">
                <input placeholder="price" className="create_input" name="price" onBlur={handleRequest}/>
            </div>
            <div className="create_item">
                <input placeholder="description" className="create_input" name ="description" onBlur={handleRequest}/>
            </div>
            <div className="create_item" >
                <input type="url" placeholder="image url" className="create_input" name="image" onBlur={handleRequest}/>
            </div>
            <div className="create_item">
                <input placeholder="category" className="create_input" name = "category" onBlur={handleRequest}/>
            </div>

            <button className="create_button" onClick={SubmitProduct}>Submit</button>
        </form>
        
    )
}
export default AddProduct