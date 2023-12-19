'use client';

import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../reduxStore/Slice/storeSlice";


const SignInForm = () => {

    const t = useSelector((state)=>state.tok.val)

    const dispatch = useDispatch(null)

    const data = {
        "username": "",
        "password": ""
    }

    const handler = async (status) =>{
        switch(status){
            case 401:
                console.log("Убедитесь в том что вы правильно ввели логин и пароль")
            break;
            case 400:
                console.log("Значения в полях обязательны")
            break;
            case 200:
                console.log("Добро пожаловать")
                
            break;
        }
    }

    const SignIn = async ()=>{
        const res = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify(
                data
            ),
            headers:{'Content-Type':'application/json'}
        })
            await handler(res.status)
            const result = await res.json()
            dispatch(addToken(result.token))
    }    
    function HReq(e) {
        switch (e.target.name) {
            case "username":
                data.username = e.target.value;
                break;
            case "password":
                data.password = e.target.value;
                break;
        }
        console.log(data);
    }

    if(t != ''){
        return(
            <div >
                <div >
                    <h2 className="SignOut_title">SignOut</h2>
                    <button onClick={() => dispatch(addToken(""))} className="form_button">SignOut</button>
                </div>
            </div>
        )}
    else{
        return(
            <div>
                <h1 className="form_title">SignIn</h1>
                <div className="form_group">
                    
                    <input onBlur={HReq} className = "form_input" type = "username" name = "username" placeholder=" "required/>
                    <label className="form_label">UserName</label>
                </div>
                <div className="form_group">
                    
                    <input onBlur={HReq} className = "form_input" type = "password" name = "password" placeholder=" " required/>
                    <label className="form_label">Password</label>
                </div>

                <button className="form_button" type="submit" onClick={SignIn}> Sign In </button>
            </div>
        )
    }
};

export {SignInForm};