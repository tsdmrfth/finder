import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers';
/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk)
    )
);

export {store};