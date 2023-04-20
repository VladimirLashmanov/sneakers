import React from 'react';
import Card from "../components/Card/Card";
import AppContext from "../context";

const Favorites = () => {
        const {favorites,onAddFavorite} = React.useContext(AppContext)
        return (
            <div className="content  p-40">
                <div className='mb-40 d-flex align-center justify-between'>
                    <h1>Мои Закладки</h1>
                </div>

                <div className="d-flex flex-wrap">
                    {favorites
                        .map((item, index) => (
                            <Card
                                favorited={true}
                                key={index}
                                title={item.name}
                                price={item.price}
                                imgUrl={item.imgUrl}


                                // onPlus={(obj) => onAddToCard(obj)}
                                // onFavor={(obj) => onAddFavorite(obj)}
                            />
                        ))}
                </div>

            </div>

        );
    }
;

export default Favorites;