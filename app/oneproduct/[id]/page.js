'use client'
import Product from "../../componets/Product";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LinkUpd } from "../../componets/perehod"



const Oneproduct =({params: {id}}) => {
    const token = useSelector((state)=>state.tok.val)

    const getItem = async () =>{
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        const result = await res.json();
        setProducts(result);
    }

    const [products,setProducts] = useState(getItem)

    const DeleteProduct = async () => {
        console.log("the product has been deleted")
        await fetch('https://fakestoreapi.com/products/'+id,{
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json'
        }
    })
        
        .then(res=>res.json())
        .then(json=>console.log(json))
    }
    const ButtDel = () =>{
        if(token != ''){
            return(<Link href={"/"}><button className="del_button" onClick={DeleteProduct}><ion-icon name="trash-outline">Del</ion-icon></button></Link>)
        }
    }
        
    return(
        <div class = "OneProduct">
            <Product product = {products}/>
            <div className="upd_del_button">
                <ButtDel/>
            </div>
        </div>
    
    )
    
}


export default Oneproduct