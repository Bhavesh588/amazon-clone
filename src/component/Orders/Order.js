import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
    console.log(order)
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('Do MMMM YYYY, h:mma')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            <CheckoutProduct basket={order.data.basket} hideButton />
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order
