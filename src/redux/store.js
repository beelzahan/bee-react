import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

let middleWhile = applyMiddleware(thunk)

if(process.env.NODE_ENV === 'development'){//判断是否是开发环境
    middleWhile = composeWithDevTools(middleWhile)
}
export default createStore(reducers,middleWhile)