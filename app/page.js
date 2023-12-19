
import Link from "next/link";
import { LinkUpd } from "./componets/perehod"

async function fetchData(){
  const res = await fetch('https://fakestoreapi.com/products');
  const result = await res.json();
  return result;
}
export default async function Home() {
  const products = await fetchData();

  return (
    <div className = "container">
      {products.map(el =>(
      <div key={el.id}className="body">

          <div className = "container_cards">
            <div className = "product">
              <div className = "card_top">
                <div className = "img">
                  <img src = {el.image} alt = " -_-"></img>     

                </div>
              </div>
              <div class = "info">

              <Link href={`/oneproduct/` + el.id} className = "more_link" ><h1 class="title">{el.title}</h1></Link>
              
              <LinkUpd link={"/updateitem/"+el.id} text="updateProduct" />
              </div>
              <div className = "footer_info">
                <span className = "price"> {el.price}$ </span>
                <button className = "add_to_cart_button"> <ion-icon name="cart-outline">buy</ion-icon> </button>
              </div>
            </div>

          </div>

        </div>
      ))}
    </div>
  )
}
