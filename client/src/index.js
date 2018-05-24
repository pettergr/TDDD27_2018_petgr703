import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from "./store/store";
import { Provider } from 'react-redux';
import AppHeader from './components/AppHeader'
import Customers from './containers/Customers'
import CustomerView from './components/CustomerView'
import Customer from './containers/Customer'
import Home from './components/Home'


const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AppHeader />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/customers' component={Customers}/>
                        <Route exact path='/customers/new' component={Customer}/>
                        <Route path='/customers/:id/edit' component={Customer}/>
                        <Route path='/customers/:id' component={CustomerView}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
