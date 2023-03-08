import "./Footer.css";
import { ReactElement } from "react";




export default function Footer(): ReactElement{


    return <div>   
        <hr/>
        <footer className='footer'>
        <div className='div1 footer-brand'>
            <h1>E-Commerce</h1>
            <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h5>
        </div>
        <div className='div2 departments'>
                <h4>Department</h4>
                <a href="">Fashion</a>
                <a href="">Fashion</a>
                <a href="">Fashion</a>
                <a href="">Fashion</a>
                <a href="">Fashion</a>
                <a href="">Fashion</a>
                <a href="">Fashion</a>
        </div>
        <div className='div3'>
                <h4>About Us</h4>
        </div>
        <div className='div4'>
                <h4>Services</h4>
        </div>
        <div className='div5'>
                <h4>Help</h4>
        </div>
    </footer>
        </div>
}