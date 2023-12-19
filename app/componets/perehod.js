"use client"
import Link from 'next/link'
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation'

export const LinkUpd = ({link, text}) =>{

    const token = useSelector((state)=>state.tok.val)
    if(token!=''){

        return(
            <Link href ={link}>{text}</Link>
        )
    }
}

// export const LinlAndButtUpd = ({link, text})=>{
//     const token = useSelector((state)=>state.tok.val)
//     if(token!=''){

//         return(
//             <Link href={"/"}><button className="del_button" onClick={DeleteProduct}><ion-icon name="trash-outline">Del</ion-icon></button></Link>
//             )
//         }
// }
export const Redirect = () =>{
    const rout = useRouter()
    const token = useSelector((state)=>state.tok.val)
    if(token==''){
        rout.push('/signin')
    }
}
