import React from 'react';
import Cart from "../components/Card/Card";
import AppContext from "../context";



const Home = ({isLoading, searchValue, setSearchValue, onChangeSearchInput, items, onAddToCard, onAddFavorite}) => {
    const {isItemAdded}=React.useContext(AppContext)

        const renderItems = () => {
            return items
                .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => (
                        <Cart
                            key={index}
                            title={item.name}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            onPlus={(obj) => onAddToCard(obj)}
                            onFavor={(obj) => onAddFavorite(obj)}

                            loading={false}
                        />
                    ))

        }


        return (
            <div className="content  p-40">
                <div className='mb-40 d-flex align-center justify-between'>
                    <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>

                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search"/>
                        {searchValue && <img
                            onClick={() => setSearchValue('')}
                            className='removeBtn cu-p clear'
                            src="/img/btn-remove.svg" alt="remove"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder='search...'/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {renderItems()}


                </div>

            </div>

        );
    }
;

export default Home;