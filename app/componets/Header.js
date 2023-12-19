"use client";
import { LinkUpd } from "./perehod"
import Link from "next/link"

const Header =()=>{

    return(
        <header>
            <strong className='logo'>
            <Link href = '/' className='slystore'>SlyStore</Link>
            </strong>
            <nav className="nav">
                
                <LinkUpd link="/create" text="CreateItem"/>
                
                <div class = "reg_info">

                    <Link href = "/signin">SignIn/Out</Link>
                
                </div>

            </nav>
        </header>

    )
}

export default Header