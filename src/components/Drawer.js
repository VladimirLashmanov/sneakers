import React from 'react';
import Info from "./Info";
import AppContext from "../context";
import axios from "axios";

const Drawer = ({onClose, onRemove, items = []}) => {
    const {cartItems,setCartItems} = React.useContext(AppContext)
    const [isOrderComplited, setIsOrderComplited] = React.useState(false)
    const [orderId, setOrderId] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)

    const onClickOrder = async () => {
        try {

            const {data}= await axios.post('/orders', {items:cartItems})
            setOrderId(data.id)
            setIsOrderComplited(true)
            setCartItems([])
             axios.put('/cart', [])
        } catch (error){alert('Not order complete')}


    }


    return (
        <div>

            <div className="overlay">


                <div className="drawer ">

                    <h2 className='d-flex justify-between mb-30 '>Корзина <img onClick={onClose} className="cu-p"
                                                                               src="img/btn-remove.svg" alt="Close"/>
                    </h2>
                    {items.length > 0 ? (
                        <div>
                            <div className="items">

                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">

                                        <div
                                            style={{backgroundImage: `url(${obj.imgUrl})`}}
                                            className="cartItemImg">
                                        </div>

                                        <div className='mr-20 flex'>
                                            <p className='mb-5 '>
                                                {obj.title}
                                            </p>
                                            <b>{obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className='removeBtn '
                                             src="/img/btn-remove.svg"
                                             alt="remove"/>
                                    </div>
                                ))}
                            </div>

                            <div className='cartTotalBlock'>
                                <ul>
                                    <li>
                                        <span>Итого: </span>
                                        <div></div>
                                        <b>21 498 руб.</b>
                                    </li>

                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1074 руб.</b>
                                    </li>
                                </ul>
                                <button  disabled={isLoading}  onClick={onClickOrder} className='greenButton'>Оформить заказ <img
                                    src="/img/arrow.svg" alt="arrow"/>
                                </button>
                            </div>
                        </div>

                    ) : (
                        <Info titel={isOrderComplited?'Order Complete':'Card non'} description={isOrderComplited?{orderId}:'pleas add to one card '} image={isOrderComplited?'/img/complete-order.jpg':'/img/empty-cart.jpg'}/>



                        //     <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        //     <img className="mb-20" width="120px" src='/img/empty-cart.jpg' alt="Empty"/>
                        //     <h2>Card non</h2>
                        //     <p className="opacity-6">pleas add to one card </p>
                        //     <button onClick={onClose} className="greenButton">
                        //         <img src="/img/arrow.svg" alt="Arrow"/>
                        //         Вернуться назад
                        //     </button>
                        // </div>)
                    )}

                </div>

            </div>
        </div>
    );
};

export default Drawer;