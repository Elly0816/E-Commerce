import { dealProps} from "./dealsInterfaces";
import DealCard from "../cards/dealCard";
import "./Deals.css";
import { ReactElement } from "react";




export default function Deals({features}: dealProps): ReactElement<dealProps>{

    return <section className="deals">
        <h2>Today's Best Deals For You!</h2>
    <section className='dealCards'>  
      {features.map(({title, image, price, subtitle}, index) => {
        return <DealCard features={{title, image, price, subtitle}} type="product" key={index}/>
      })}
        
    </section>
    </section>
}