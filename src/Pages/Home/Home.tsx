import React from "react";
import style from './Home.module.sass';
import Header from "../../UI/Header/Header.tsx";
import Products from "../../UI/Products/Products.tsx";


export default function Home(){
    return(
        <div className={style.home}>
            <Header />
            <Products />
        </div>
    );
}