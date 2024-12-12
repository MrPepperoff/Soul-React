import React from "react";
import style from './Home.module.sass';
import Header from "../../UI/Header/Header.tsx";


export default function Home(){
    return(
        <div className={style.home}>
            <Header />
        </div>
    );
}