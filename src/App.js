import './index.scss';
import Cart from './components/Card/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

const arr = [

    // {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 12999, "imgUrl": "/img/sneakers/1.jpg"},
    // {"name": "Мужские Кроссовки Nike Air Max 270", "price": 15600, "imgUrl": "/img/sneakers/2.jpg"},
    // {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imgUrl": "/img/sneakers/3.jpg"},
    // {"name": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imgUrl": "/img/sneakers/4.jpg"},
    // {"name": "Мужские Кроссовки Under Armour Curry 8", "price": 15199, "imgUrl": "/img/sneakers/5.jpg"},
    // {"name": "Мужские Кроссовки Nike Kyrie 7", "price": 11299, "imgUrl": "/img/sneakers/6.jpg"},
    // {"name": "Мужские Кроссовки Jordan Air Jordan 11", "price": 10799, "imgUrl": "/img/sneakers/7.jpg"}
]


function App() {

const [cartOpened,setCartOpened]=React.useState(false)

    return (

        <div className="wrapper clear">


            {cartOpened && <Drawer onClose={()=>setCartOpened(false)}  />}
            <Header onClickCart={()=>setCartOpened(true)}  />

            <div className="content p-40">
                <div className='mb-40 d-flex align-center justify-between'>
                    <h1>Все кроссовки</h1>

                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder='search...'/>
                    </div>
                </div>

                <div className="d-flex">
                    {arr.map((obj) => (
                        <Cart title={obj.name}
                              price={obj.price}
                              imgUrl={obj.imgUrl}
                              onPlus={() => console.log(obj)}
                              onFavor={() => console.log(obj)}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
}

export default App;
