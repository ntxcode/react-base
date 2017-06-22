import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './modules/index';

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
  const store = createStoreWithMiddleware(rootReducer);

  return store;
}
