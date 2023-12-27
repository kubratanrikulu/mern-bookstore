import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'

import Router from './routes/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
