import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../Redux/StateProvider';
import { getBasketTotal } from '../../Redux/reducer';
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory();

    const [{ basket }] = useStateValue()

    // let totalPrice = 0
    // basket.map(b => totalPrice = Number(totalPrice) + Number(b.price))
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{` ${value} `}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
