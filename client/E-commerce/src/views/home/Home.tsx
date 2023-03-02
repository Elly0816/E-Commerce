import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import { Description } from "../../components/card/cardInterfaces";
import Display from "../../components/display/Display";
import { displayProps } from "../../components/display/displayInterfaces";
// import "./Home.css"

const firstDisplay: displayProps = {
    classN: "display1",
    source: "./images/shopping.jpg",
    alt: "shopping",
    h1: "Everything You Need In One Place.",
    h4: "Your favourite Online Store, anything you need can be found right here. Shopping can be a bit tedious and we are here to make it simple for you!"
}

/*When the homepage renders, map 
this array of pages to the categories
*/
const featured: Description[] = [
                                {title: "Cat", image: "cat"},
                                {title: "Dog", image: "dog"},
                                {title: "Mouse", image: "mouse"}
                            ]

export default function Home(){



    return <div className="home">
        <Header/>
        <Display classN={firstDisplay.classN}
        source={firstDisplay.source}
        alt={firstDisplay.alt}
        h1={firstDisplay.h1}
        h4={firstDisplay.h4}/>
        <Categories features={featured}/>
    </div>
}