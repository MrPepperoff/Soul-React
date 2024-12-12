import React from "react";
import style from './Header.module.sass';
// иконки
import logo from '../../images/logo-2.svg';
export default function Header(){
    return(
        <header className={style.H}>
            <div className="content">
                <div className={style.H__top}>
                    <div className={style.social}>
                        <ul className={style.social__list}>
                            <li>
                                <a href="https:/vk.com/skburger" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256" fill="#FFFFFF">
                                        <g transform="translate(38.4,38.4) scale(0.7,0.7)">
                                            <g  className={style.svg__background} fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" >
                                                <path d="M128,310.85714c-100.98921,0 -182.85714,-81.86793 -182.85714,-182.85714v0c0,-100.98921 81.86793,-182.85714 182.85714,-182.85714v0c100.98921,0 182.85714,81.86793 182.85714,182.85714v0c0,100.98921 -81.86793,182.85714 -182.85714,182.85714z" id="shape"></path>
                                            </g>
                                            <g  className={style.svg__icon} fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" >
                                                <g transform="translate(0.00055,-2.64267) scale(5.33333,5.33333)">
                                                    <path d="M45.763,35.202c-1.797,-3.234 -6.426,-7.12 -8.337,-8.811c-0.523,-0.463 -0.579,-1.264 -0.103,-1.776c3.647,-3.919 6.564,-8.422 7.568,-11.143c0.443,-1.202 -0.474,-2.472 -1.766,-2.472h-3.753c-1.237,0 -1.961,0.444 -2.306,1.151c-3.031,6.211 -5.631,8.899 -7.451,10.47c-1.019,0.88 -2.608,0.151 -2.608,-1.188c0,-2.58 0,-5.915 0,-8.28c0,-1.147 -0.938,-2.075 -2.095,-2.075l-6.856,-0.078c-0.863,0 -1.356,0.977 -0.838,1.662l1.132,1.625c0.426,0.563 0.656,1.248 0.656,1.951l-0.006,7.318c0,1.273 -1.543,1.895 -2.459,1.003c-3.099,-3.018 -5.788,-9.181 -6.756,-12.128c-0.28,-0.853 -1.079,-1.429 -1.985,-1.431l-3.697,-0.009c-1.387,0 -2.401,1.315 -2.024,2.639c3.378,11.857 10.309,23.137 22.661,24.36c1.217,0.12 2.267,-0.86 2.267,-2.073v-3.846c0,-1.103 0.865,-2.051 1.977,-2.079c0.039,-0.001 0.078,-0.001 0.117,-0.001c3.267,0 6.926,4.755 8.206,6.979c0.368,0.64 1.056,1.03 1.8,1.03h4.973c1.451,0 2.382,-1.539 1.683,-2.798z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/notificationsSK_bot" target="_blank">
                                    <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256">
                                        <g transform="translate(38.4,38.4) scale(0.7,0.7)">
                                            <g className={style.svg__background} fill-rule="nonzero" stroke-width="100" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                                <path d="M128,310.85714c-100.98921,0 -182.85714,-81.86793 -182.85714,-182.85714v0c0,-100.98921 81.86793,-182.85714 182.85714,-182.85714v0c100.98921,0 182.85714,81.86793 182.85714,182.85714v0c0,100.98921 -81.86793,182.85714 -182.85714,182.85714z" id="shape" />
                                            </g>
                                            <g  className={style.svg__icon} fill-rule="nonzero" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                                <g transform="translate(-10.15416,-6.15454) scale(5.12,5.12)">
                                                    <path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/79081582242" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 256 256" fill="#FFFFFF">
                                        <g transform="translate(33.28,33.28) scale(0.74,0.74)">
                                            <g fill-opacity="0" fill="#dddddd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                                <path d="M-44.97297,300.97297v-345.94595h345.94595v345.94595z" id="bgRectangle"></path>
                                            </g>
                                            <g className={style.svg__background} fill-rule="nonzero" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                                <path d="M128,300.97297c-95.53034,0 -172.97297,-77.44264 -172.97297,-172.97297v0c0,-95.53034 77.44264,-172.97297 172.97297,-172.97297v0c95.53034,0 172.97297,77.44264 172.97297,172.97297v0c0,95.53034 -77.44264,172.97297 -172.97297,172.97297z" id="shape"></path>
                                            </g>
                                            <g className={style.svg__icon} fill-rule="nonzero" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" >
                                                <g transform="scale(8.53333,8.53333)">
                                                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,2.25121 0.63234,4.35007 1.71094,6.15039l-1.60352,5.84961l5.97461,-1.56836c1.74732,0.99342 3.76446,1.56836 5.91797,1.56836c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.89258,9.40234c0.195,0 0.39536,-0.00119 0.56836,0.00781c0.214,0.005 0.44692,0.02067 0.66992,0.51367c0.265,0.586 0.84202,2.05608 0.91602,2.20508c0.074,0.149 0.12644,0.32453 0.02344,0.51953c-0.098,0.2 -0.14897,0.32105 -0.29297,0.49805c-0.149,0.172 -0.31227,0.38563 -0.44727,0.51563c-0.149,0.149 -0.30286,0.31238 -0.13086,0.60938c0.172,0.297 0.76934,1.27064 1.65234,2.05664c1.135,1.014 2.09263,1.32561 2.39063,1.47461c0.298,0.149 0.47058,0.12578 0.64258,-0.07422c0.177,-0.195 0.74336,-0.86411 0.94336,-1.16211c0.195,-0.298 0.39406,-0.24644 0.66406,-0.14844c0.274,0.098 1.7352,0.8178 2.0332,0.9668c0.298,0.149 0.49336,0.22275 0.56836,0.34375c0.077,0.125 0.07708,0.72006 -0.16992,1.41406c-0.247,0.693 -1.45991,1.36316 -2.00391,1.41016c-0.549,0.051 -1.06136,0.24677 -3.56836,-0.74023c-3.024,-1.191 -4.93108,-4.28828 -5.08008,-4.48828c-0.149,-0.195 -1.21094,-1.61031 -1.21094,-3.07031c0,-1.465 0.76811,-2.18247 1.03711,-2.48047c0.274,-0.298 0.59492,-0.37109 0.79492,-0.37109z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>    
                                </a>
                            </li>
                            <li>
                                <a href="https://skburgera.ru/app" target="_blank">
                                    <svg width="30" height="30" viewBox="0 0 200 200">
                                        {/* круг */}
                                        <g className={style.svg__background}>
                                            <rect x="5" y="5" height="190" width="190" rx="100" ry="100"/>
                                        </g>
                                        <g className={style.svg__icon}>
                                            {/* треугольник у стрелки */} 
                                            <polygon points="65 90, 135 90, 100 125"/>
                                            {/* полоска у стрелки */}
                                            <rect height="40" width="20" x="90" y="50"/>
                                            {/* полоска под стрелкой */}
                                            <rect height="20" width="80" x="60" y="130"/>
                                        </g>
                                    </svg>    
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img src={logo} className={style.H__logo} alt="logo" />
                    <div className={style.contacts}>
                        <h3>Прием заказов</h3>
                        <ul className={style.contacts__list}>
                            <li>
                                <p>Вс-Чт</p>
                                <span>11<sup>00</sup>-21<sup>00</sup></span>
                            </li>
                            <li>
                                <p>Пт-Сб</p>
                                <span>11<sup>00</sup>-22<sup>00</sup></span>
                            </li>
                        </ul>
                        <a className={style.contacts__btn} href="tel:+78312884345">Тел: +7(831)288-43-45</a>
                    </div>    
                </div>
                <div className={style.H__bottom}>
                    <nav className={style.nav}>
                        <ul className={style.nav__list}>
                            <li><a href="#">Бургеры</a></li>
                            <li><a href="#">Гарниры</a></li>
                            <li><a href="#">Сеты</a></li>
                            <li><a href="#">Соуса</a></li>
                            <li><a href="#">Десерты</a></li>
                            <li><a href="#">Напитки</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Доставка</a></li>
                            <li><a href="#">Уведомление</a></li>                  
                        </ul>
                    </nav>
                </div>
            </div>
            
        </header>
    );
}