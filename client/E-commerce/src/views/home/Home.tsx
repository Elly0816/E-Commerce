import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import { Description } from "../../components/categories/card/cardInterfaces";
import Display from "../../components/display/Display";
import { displayProps } from "../../components/display/displayInterfaces";
import { dealDescription } from "../../components/deals/card/cardInterfaces";
import Deals from "../../components/deals/Deals";
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
                                {title: "Cat", image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"},
                                {title: "Dog", image: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"},
                                {title: "Mouse", image: "mouse"}
                            ]


const deals: dealDescription[] = [{title: "HomePod mini",
image: "",
price: "239.00",
subtitle: "Table with air purifier, stained veneer/black"}]; 


export default function Home(){



    return <div className="home">
        <Header/>
        <Display classN={firstDisplay.classN}
        source={firstDisplay.source}
        alt={firstDisplay.alt}
        h1={firstDisplay.h1}
        h4={firstDisplay.h4}/>
        <Categories features={featured}/>
        <Deals features={deals}/>
    </div>
}