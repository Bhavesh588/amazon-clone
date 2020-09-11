import React from 'react'
import './CheckoutProduct.css'
import FlipMove from 'react-flip-move';
import { useStateValue } from '../../Redux/StateProvider';

function CheckoutProduct({ basket, hideButton }) {
    const [, dispatch] = useStateValue()

    const removeFromBasket = (id) => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div>
            <FlipMove
                staggerDurationBy="30"
                duration={500}
                enterAnimation='accordionHorizontal'
                leaveAnimation='accordionVertical'
                typeName="ul"
            >
                {
                    basket === undefined
                    ? null
                    : basket.map(item => 
                        <div className="checkoutProduct" key={item.id}>
                            <img className="checkoutProduct__image" src={item.image} alt="" />
                            <div className="checkoutProduct__info">
                                <p className="checkoutProduct__title">{item.title}</p>
                                <p className="checkoutProduct__price">
                                    <small>$</small>
                                    <strong>{item.price}</strong>
                                </p>
                                <div className="checkoutProduct__rating">
                                    {Array(item.rating).fill().map((_, i) => (
                                        <span role="img" key={i} aria-label="jsx-a11y/aria-proptypes">⭐️</span>
                                    ))}
                                </div>
                                {!hideButton && (
                                    <button onClick={() => removeFromBasket(item.id)}>Remove from Basket</button>
                                )}
                            </div>
                        </div>
                    )
                }
            </FlipMove>
        </div>
    )
}

export default CheckoutProduct
