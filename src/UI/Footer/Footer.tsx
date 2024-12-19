import React from "react";
import style from './Footer.module.sass';
import Social from "../Social/Social";

export default function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.footer__wrap+" content"}>
                <div className={style.footer__img}>
                    <img src="images/logo.svg" alt="logo" />
                    <div className={style.footer__contacts}>
                        +7(999)999-99-99
                    </div>
                </div>
                
                <div className={style.footer__offer}>
                    <a href="#">Договор оферты</a>
                </div>
                <div className={style.footer__social}>
                    <Social />
                </div>
                <div className={style.footer__copyright}>

                    &#169; Soul Kitchen, 2015-2025
                </div>
            </div>

        </footer>
    );

}