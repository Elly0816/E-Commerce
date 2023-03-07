import { dealProps} from "./dealsInterfaces";
import MyCard from "./card/Card";
import "./Deals.css";




export default function Deals({features}: dealProps){

    return <section className="deals">
        <h2>Today's Best Deals For You!</h2>
    <section className='dealCards'>  
      {features.map(({title, image, price, subtitle}, index) => {
        return <MyCard features={{title, image, price, subtitle}} type="product" key={index}/>
      })}
        
    </section>
    </section>
}