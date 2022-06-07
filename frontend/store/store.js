import { configureStore } from 'redux';
import rootReducer from "../reducers/root_reducer";

const configStore = (preloadedState = {}) => {
    return configureStore(rootReducer, preloadedState)
}
export default configStore;