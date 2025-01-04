import React from "react";
import style from './Home.module.sass';
import Header from "../../UI/Header/Header";
import NewProducts from "../../UI/NewProducts/NewProducts";
import Products from "../../UI/Products/Products";
import Footer from "../../UI/Footer/Footer";
import CartModal from "../../widgets/Cart/CartModal/CartModal";



export default function Home(){
    return(
        <div className={style.home}>
            <Header />
            
            <CartModal/>
            <NewProducts />
            <Products/>

            <Footer/>
        </div>
    );
}