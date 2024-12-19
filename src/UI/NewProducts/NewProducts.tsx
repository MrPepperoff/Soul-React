import React from "react";
import style from './NewProducts.module.sass';
export default function NewProducts(){
    return(
        <main className={style.products}>
            <div className="content">
                <h2>Наши Новинки</h2>
                <div className={style.card__list}>
                <div className={style.card}>
                        <div className={style.card__img__wrap}>
                            <img className={style.card__img} src="https://via.placeholder.com/260x200" alt="logo" />    
                        </div>
                        
                        <div className={style.card__textTop}>
                            <h3 className={style.card__title}>Название</h3>
                            <span className={style.card__price}> 0 </span>
                        </div>
                        
                        <div className={style.card__text}>
                            <div className={style.card__text__left}>
                                Состав:<br/>...
                            </div>
                            <div className={style.card__text__right}>
                                <p>Вес: 0г</p>
                                <button className={style.card__btn}>+</button>
                            </div>
                        </div>
                    </div> 
                    <div className={style.card}>
                        <div className={style.card__img__wrap}>
                            <img className={style.card__img} src="images/bavaria_2.jpg" alt="logo" />    
                        </div>
                        
                        <div className={style.card__textTop}>
                            <h3 className={style.card__title}>Бавария</h3>
                            <span className={style.card__price}>480 </span>
                        </div>
                        
                        <div className={style.card__text}>
                            <div className={style.card__text__left}>
                                Состав:<br/> Булочка, Сырная котлета, 2 котлеты из говядины, бекон, сыр чеддер, маринованный огурец, томат, салат, сырный соус
                            </div>
                            <div className={style.card__text__right}>
                                <p>Вес: 310г</p>
                                <button className={style.card__btn}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.card__img__wrap}>
                            <img className={style.card__img} src="images/double.jpg" alt="logo" />    
                        </div>
                        
                        <div className={style.card__textTop}>
                            <h3 className={style.card__title}>Дабл-Чиз</h3>
                            <span className={style.card__price}>480 </span>
                        </div>
                        
                        <div className={style.card__text}>
                            <div className={style.card__text__left}>
                                Состав:<br/> Булочка, Сырная котлета, 2 котлеты из говядины, бекон, сыр чеддер, маринованный огурец, томат, салат, сырный соус
                            </div>
                            <div className={style.card__text__right}>
                                <p>Вес: 310г</p>
                                <button className={style.card__btn}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.card + " " + style.card_disable}>
                        <div className={style.card__img__wrap}>
                            <img className={style.card__img} src="images/grusha.jpg" alt="logo" />    
                        </div>
                        
                        <div className={style.card__textTop}>
                            <h3 className={style.card__title}>Груша</h3>
                            <span className={style.card__price}>480 </span>
                        </div>
                        
                        <div className={style.card__text}>
                            <div className={style.card__text__left}>
                                Состав:<br/> Булочка, Сырная котлета, 2 котлеты из говядины, бекон, сыр чеддер, маринованный огурец, томат, салат, сырный соус
                            </div>
                            <div className={style.card__text__right}>
                                <p>Вес: 310г</p>
                                <button className={style.card__btn}>+</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </main>
    );
}