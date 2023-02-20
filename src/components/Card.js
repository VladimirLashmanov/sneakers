import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card">
                <div className='favorite'>
                    <img src="/img/unliked.svg" alt="unliked"/>
                </div>
                <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Цена:</span>
                        <b>12999 руб.</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;




