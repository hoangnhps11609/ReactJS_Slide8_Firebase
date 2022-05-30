
import './App.css';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import Login from './components/Login';
import { rrfProps, store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Login></Login>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App;
