import React from "react"
import style from './CartModal.module.sass'
import CartBtn from "../CartBtn/CartBtn"
import { burgers, dessert, dishes, drink, sauce, sets } from '../../../products';


export default function CartModal(){
    type products = any[];
    
    function offModal(){
        const modal = document.querySelector('#modal');
        modal?.classList.remove('active');
    }

    let productCard = burgers.map(product=>
        <div className={style.card} key={product.id}>
            <h5>{product.title}</h5>
        </div>
    )

    return(
        <>
            <CartBtn />
            <div className={style.modal__wrap} id="modal">
                <div className="content">
                    <div className={style.modal}>
                        <button type="button" onClick={offModal} className={style.modal__close}>X</button>
                        <div className={style.modal__content}>
                            <div className={style.modal__cart}>
                                {productCard}
                            </div>
                            <div className={style.modal__address}>
                                <form action="#" method="POST">
                                    <label htmlFor="street">
                                        улица:
                                        <input type="text" id='street' />
                                    </label>
                                    <label htmlFor="house">
                                        дом:
                                        <input type="text" id='house' />
                                    </label>
                                    <label htmlFor="aportoment">
                                        квартира:
                                        <input type="text" id='aportoment' />
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}