import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import { Description } from "../../components/card/cardInterfaces";


export default function Home(){

    /*When the homepage renders, map 
    this array of pages to the categories
    */
   const featured: Description[] = [
                                    {title: "Cat", image: "cat"},
                                    {title: "Dog", image: "dog"},
                                    {title: "Mouse", image: "mouse"}
                                ]


    return <div>
        <Header/>
        <Categories features={featured}/>
    </div>
}