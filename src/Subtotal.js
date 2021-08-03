//import { SportsBasketball } from '@material-ui/icons';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './Stateprovider';
import './subtotal.css';
import { getBasketTotal } from './Reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispach] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className='text'>Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>

                        <small className='text1'>
                            <input type='checkbox' /> This order contains gift
                        </small>
                    </>
                )}
                decimalState={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button class='btn' onClick={e => history.push('./payment')}>present to channel</button>
        </div>
    )
}

export default Subtotal;
