import './index.scss';
import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";
import AppContext from './context'

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
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')

    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)


    React.useEffect(() => {


        axios.get('https://63f87c756978b1f9105a6bf7.mockapi.io/items').then(res => {
            setItems(res.data)
        })
        axios.get('https://63f87c756978b1f9105a6bf7.mockapi.io/cart').then(res => {
            setCartItems(res.data)
        })
        axios.get('https://63f87c756978b1f9105a6bf7.mockapi.io/items').then(res => {
            setFavorites(res.data)
        })
    }, [])

    const onAddToCard = (obj) => {
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://63f87c756978b1f9105a6bf7.mockapi.io/cart/${Number(obj.id)}`)
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        } else {
            axios.post('https://63f87c756978b1f9105a6bf7.mockapi.io/cart', obj)
            setCartItems(prev => [...prev, obj])
        }
    }
    const onRemoveItem = (id) => {
        axios.delete(`https://63f87c756978b1f9105a6bf7.mockapi.io/cart/${id}`)
        setCartItems(prev => [...prev, prev.filter(item => item.id !== id)])
    }

    const onAddFavorite = async (obj) => {
        if (favorites.find(obj =>Number(obj.id)  === Number(obj.id))) {
            const {data} = await axios.delete(`https://63f87c756978b1f9105a6bf7.mockapi.io/cart/${obj.id}`)
            setFavorites(prev => [...prev, prev.filter(item => item.id !== item.id)])
        } else {
            axios.post('https://63f87c756978b1f9105a6bf7.mockapi.io/items', obj)
            setFavorites(prev => [...prev, obj])
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const isItemAdded = (id) => {
      return   cartItems.some((obj) => Number(obj.id) === Number(id))
    }

    return (
        < AppContext.Provider value={{cartItems, favorites, items,isItemAdded,onAddFavorite,setCartOpened,setCartItems}}>
            <div className="wrapper clear">


                {cartOpened && <Drawer items={cartItems} onRemove={onRemoveItem} onClose={() => setCartOpened(false)}/>}
                <Header onClickCart={() => setCartOpened(true)}/>


                <Routes>
                    <Route path={"/"} element={<Home
                        cartItems={cartItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        items={items}
                        onAddToCard={onAddToCard}
                        onAddFavorite={onAddFavorite}
                        isLoading={isLoading}
                    />}>

                    </Route>

                    <Route path={"/favorites"} element={<Favorites
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToCard={onAddToCard}
                      />}>
                    </Route>

                </Routes>


            </div>
        < /AppContext.Provider>
    );
}

export default App;
