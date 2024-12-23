import React from "react";
import style from './Home.module.sass';
import Header from "../../UI/Header/Header";
import NewProducts from "../../UI/NewProducts/NewProducts";
import Products from "../../UI/Products/Products";
import Footer from "../../UI/Footer/Footer";
import CartBtn from "../../UI/CartBtn/CartBtn";


export default function Home(){
    return(
        <div className={style.home}>
            <CartBtn/>
            <Header />
            <NewProducts />
            <Products/>

            <Footer/>
        </div>
    );
}