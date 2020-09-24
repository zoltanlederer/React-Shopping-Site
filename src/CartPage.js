import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
    if (items.length > 0) {
        return (
            <ul className='CartPage-items'>
                {items.map(item =>
                
                    <li key={item.id} className='CartPage-item'>
                        <Item item={item}>
                            <div className='CartItem-controls'>
                                <button
                                    className='CartItem-removeOne'
                                    onClick={() => onRemoveOne(item)}
                                >
                                &ndash;
                                </button>
                                <span className='CartItem-count'>{item.count}</span>
                                <button
                                    className='CartItem-addOne'
                                    onClick={() => onAddOne(item)}
                                >
                                +
                                </button>
                            </div>
                        </Item>
                    </li>
                
                )}
                <div className='CartItem-total'>
                Total: £{items.map(item => item.price*item.count)
                        .reduce((price, total) => (price + total), 0)}
                </div>
                
            </ul>
        );
    } else {
        return (
            <div className='CartPage-empty'>
                <p>Your cart is empty.</p>
                <p>Why not add some expensive products to it?</p>
            </div>
        );
    }
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

// const Total = () => {
//     return (
//         <div>nnn</div>
//     );
// };

export default CartPage;