import React from 'react';
import styles from './Card.module.scss'

const Card = ({id,onFavor, title, imgUrl, price, onPlus,favorited,added=false}) => {
    const [isAdd, setIsAdd] = React.useState(added)
    const [isFavor, setIsFavor] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({id,title, imgUrl, price})
        setIsAdd(!isAdd)
    }
    const onClickFavorit = () => {
        setIsFavor(isFavor)
        onFavor({title, imgUrl,price})

    }

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.favorite} onClick={onClickFavorit}>
                    <img src={isFavor ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked"/>
                </div>
                <img width={133} height={112} src={imgUrl} alt=""/>
                {/*<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>*/}
                <h5>{title}</h5>

                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Цена:</span>
                        <b>{price}</b>
                    </div>


                    <img className={styles.plus} onClick={onClickPlus}
                         src={isAdd ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"/>

                </div>
            </div>
        </div>
    );
};

export default Card;




