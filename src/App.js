import './index.scss';
import Cart from './components/Card/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


// {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 12999, "imgUrl": "/img/sneakers/1.jpg"},
// {"name": "Мужские Кроссовки Nike Air Max 270", "price": 15600, "imgUrl": "/img/sneakers/2.jpg"},
// {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imgUrl": "/img/sneakers/3.jpg"},
// {"name": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imgUrl": "/img/sneakers/4.jpg"},
// {"name": "Мужские Кроссовки Under Armour Curry 8", "price": 15199, "imgUrl": "/img/sneakers/5.jpg"},
// {"name": "Мужские Кроссовки Nike Kyrie 7", "price": 11299, "imgUrl": "/img/sneakers/6.jpg"},
// {"name": "Мужские Кроссовки Jordan Air Jordan 11", "price": 10799, "imgUrl": "/img/sneakers/7.jpg"}


function App() {

    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    const [cartOpened, setCartOpened] = React.useState(false)


    React.useEffect(() => {
        fetch('https://63f87c756978b1f9105a6bf7.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then((json) => {
                setItems(json)
            })
    },[])

    const onAddToCard=(obj)=>{
setCartItems(prev=>[...prev,obj])
    }

    return (

        <div className="wrapper clear">


            {cartOpened && <Drawer  items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content  p-40">
                <div className='mb-40 d-flex align-center justify-between'>
                    <h1>Все кроссовки</h1>

                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder='search...'/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.map((item) => (
                        <Cart title={item.name}
                              price={item.price}
                              imgUrl={item.imgUrl}
                              onPlus={ (obj) => onAddToCard(obj)}
                              onFavor={() => console.log(item)}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
}

export default App;
