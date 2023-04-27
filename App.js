import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import MainRoute from './src/navigation/MainRoute'

const App = () => {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}

export default App;