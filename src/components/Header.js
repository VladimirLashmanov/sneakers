import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <header className='d-flex justify-between align-center p-40'>
                <Link to='/'>
                    <div className='d-flex align-center'>


                        <img width={40} height={40} src='/img/logo.png'/>
                        <div>
                            <h3 className='text-uppercase'>React Sneakers</h3>
                            <p className='opacity-5'>Магазин лучших кроссовок</p>
                        </div>

                    </div>
                </Link>
                <div>
                    <ul className='headerRight d-flex'>

                        <li onClick={props.onClickCart} className='mr-30 cu-p'>
                            <img width={18} height={18} src='/img/cart.svg'/>
                            <span>1205 руб.</span>
                        </li>

                        <li>
                            <Link to='/favorites'>
                                <img className='mr-30 cu-p' width={18} height={18} src='/img/heart.svg'/>
                            </Link>
                        </li>

                        <li>
                            <img width={18} height={18} src='/img/user.svg'/>
                        </li>

                    </ul>
                </div>

            </header>
        </div>
    );
};

export default Header;