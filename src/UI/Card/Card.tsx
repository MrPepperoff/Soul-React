import React from "react";
import style from './Card.module.sass';

type Product={
     
        id: number;
        title: string;
        link: string;
        description: string;
        price_zz: number;
        price_ss: number;
        compound: string;
        weight: number;
        image: string;
        proteins: number;
        fats: number; 
        carbohydrates: number;
        icons: number[];
        status: number; 
        category: number;
        queue: number;
    };

type propsCard = {
    products: Product[],
    category: number,
};

export default function Card(props: propsCard){
    let products = props.products
    let category = props.category
    let productCard = products.map(product=>
        (product.category==category && product.status==1)?
        <div className={style.card} key={product.id}>
            <div className={style.card__wrap}>
                <div className={style.card__img__wrap}>
                    <img className={style.card__img} src={`images/${product.image}`} alt={product.title} />    
                </div>
                <div className={style.card__textTop}>
                    <h3 className={style.card__title}>{product.title}</h3>
                    <span className={style.card__price}> {(product.price_zz)? product.price_zz: 'NaN'} </span>
                </div>
                <div className={style.card__text}>
                    <div className={style.card__text__left}>
                        Состав:<br/>{product.compound}
                    </div>
                    <div className={style.card__text__right}>
                        <p>Вес: {product.weight}г</p>
                        <button className={style.card__btn}>+</button>
                    </div>
                </div>    
            </div>
        </div>
        :
        ''
    )
    return(
    <>
        {productCard}
    </>
    );
}