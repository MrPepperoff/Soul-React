import React, { useEffect, useState } from "react";
import style from './CardBtn.module.sass';

const useLocalStorageObserver = (key : any) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    });

    useEffect(() => {
        const handleStorageChange = (event : any) => {
            if (event.key === key) {
                const newValue = event.newValue ? JSON.parse(event.newValue) : null;
                setValue(newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Очистка при размонтировании компонента
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);

    return [value, setValue];
};





export default function CartBtn(){

    let [products, setProducts] = useLocalStorageObserver('product');
    let count = 0;


    // (products)?
    //     products.forEach((element: any) => {
    //         count += element.count
    //     })
    //     :
    //     ''


    // включение модального окна
    function onModal(){
        const modal = document.querySelector('#modal');
        modal?.classList.add('active')

        console.log(products);
    }
    
    return(
        <div className={style.cart__wrap+" content"}>
            <button type='button' className={style.cart} onClick={onModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716 116" className={style.icon}>  
                    <g className={style.icon__wrap}>
                        <path d="
                            M255,82.7l-3.9-28.4c0-0.2-0.1-0.3-0.1-0.4c-0.3-1.6-1.1-3-2.4-4c-1.4-1.1-3.2-1.7-5-1.5 c-6.3,0-14.9,0-15.6,0c-1.4-0.2-2.7,0.3-3.8,1.3c-1.3,1.3-2,3.2-1.8,5.1c0.1,1.3,0.8,2.5,1.8,3.4c0.9,0.7,2,1.2,3.2,1.2 c0.1,0,0.3,0,0.4,0h2.1l-5.5,7.6c-1.7,2.2-2.7,4.9-2.6,7.7l0,8.4c0,0.1,0,0.3,0,0.4c0,1,0.8,1.8,1.8,1.8l15.9,0.1c0,0,0,0,0,0 c0.2,0,0.3-0.1,0.5-0.1l6-1.7l6.9,1.6c1,0.2,1.9-0.4,2.1-1.3c0-0.1,0-0.3,0-0.4C255,83.2,255.1,82.9,255,82.7z M227.8,55.3 c-0.1,0-0.1,0.2-0.2,0.2c-0.4,0-0.8,0-1.1-0.2c-0.3-0.3-0.5-0.6-0.5-1c-0.1-0.8,0.2-1.7,0.8-2.2c0.4-0.4,0.8-0.4,0.9-0.3 c0.3,0,4.1,0.1,11.2,0c-0.4,0.9-0.5,1.7-0.4,2.7c0,0.3,0.1,0.8,0.2,0.8H227.8z M227.3,69l7-9.7h8.1c0.1,0,0.1-0.1,0.2-0.1 c0.1,0,0.1,0,0.2,0c1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.8-1.7-1.9c-0.6,0-0.9-0.5-1-1.3c-0.1-0.6,0.1-1.2,0.5-1.7 c0.4-0.5,0.9-0.8,1.5-0.8c0.3,0,0.5,0,0.8,0c0.6,0.1,1.2,0.3,1.7,0.7c0.7,0.6,1.1,1.4,1.2,2.2c0.1,1.1-0.2,2.1-1.1,3.5l-6.2,8.6 c-1.7,2.2-2.7,5-2.6,7.8l0,7.1l-12.4,0l0-7C225.3,72.6,226,70.6,227.3,69z M245.4,79.9l-4.2,1.2l0-6.5c0-2,0.7-4,1.9-5.6l5.4-7.5 l2.7,19.6l-4.9-1.2C246,79.8,245.7,79.8,245.4,79.9z
                        "/>    
                    </g>
                </svg>
                <span>{(count < 100 )? count : '99+'}</span>
            </button>    
        </div>
        
    );
}