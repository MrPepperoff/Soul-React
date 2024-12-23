import React, { useState } from "react";
import style from './Card.module.sass';

type Product={
     
        id: number;
        title: string;
        link: string;
        description: string;
        price_zz: number | number[];
        price_ss: number | number[];
        compound: string;
        weight: number | number[];
        image: string | string[];
        proteins?: number;
        fats?: number; 
        carbohydrates?: number;
        icons: number[];
        status: number; 
        category: number;
        sub_category?: number;
        queue: number;
    };

type propsCard = {
    products: Product[],
    category: number,
    sub_category: number,
};

export function Card(props: propsCard){
    let products = props.products;
    let category = props.category;
    let sub_category = props.sub_category;
    
    let productCard = products.map(product=>
        (product.category==category && product.status==1 && product.sub_category==sub_category)?
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
                        {product.description}
                    </div>
                    <div className={style.card__text__right}>
                        <p>{product.weight}г</p>
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

export function CardSet(props: propsCard){
    let products = props.products
    let category = props.category
    let productCard = products.map(product=>
        (product.category==category && product.status==1)?
        <div className={style.card+" "+style.card__sets} key={product.id}>
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
                        {product.description}
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

export function CardDich(props: propsCard){
    let products = props.products;
    let category = props.category;
    let sub_category = props.sub_category;

    let [count, SetCount] = useState(0);
    function Count(){
        if(count==1){
            SetCount(0)
        }
        else{
            SetCount(1)
        }
    }
    let productCard = products.map(product=>
        (product.category==category && product.status==1 && product.sub_category==sub_category)?
        <div className={style.card} key={product.id}>
            <div className={style.card__wrap}>
                <div className={style.card__img__wrap}>
                    <img className={style.card__img} src={(Array.isArray(product.image))?`images/${product.image[count]}`:`images/${product.image}`} alt={product.title} />    
                </div>
                <div className={style.card__textTop}>
                    <h3 className={style.card__title}>{product.title}</h3>
                    <span className={style.card__price}> {(Array.isArray(product.price_zz))? product.price_zz[count]:product.price_zz} </span>
                </div>
                <div className={style.card__text}>
                    <div className={style.card__text__left}>
                        {product.description}
                        {
                            (Array.isArray(product.price_zz))?
                            <>
                                <label htmlFor="btnCount">
                                    <input type="checkbox" name={`count${product.id}`} id="btnCount" onClick={Count}/>
                                    {(Array.isArray(product.weight))? `${product.weight[count]}`:``}
                                </label>
                                
                            </>
                            :
                            ''
                        }
                    </div>
                    <div className={style.card__text__right}>
                        <p>{(Array.isArray(product.weight))? `${product.weight[count]} шт`:` ${product.weight} г`}</p>
                        
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

export function CardDrink(props: propsCard){
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
                        {product.description}
                    </div>
                    <div className={style.card__text__right}>
                        <p>{product.weight}л</p>
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