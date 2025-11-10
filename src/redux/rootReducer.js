import {combineReducers} from 'redux';
import { BurgerReducer } from './reducers/BurgerReducer';


//store tổng ứng dụng 
const rootReducer = combineReducers({
    // Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    BurgerReducer
})

export default rootReducer;