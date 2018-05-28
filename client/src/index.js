import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import AppHeader from "./components/AppHeader";
import Customers from "./containers/Customers";
import CustomerView from "./components/CustomerView";
import Customer from "./containers/Customer";
import Products from "./containers/Products";
import ProductView from "./components/ProductView";
import Product from "./containers/Product";
import Orders from "./containers/Orders";
import OrderView from "./components/OrderView";
import Order from "./containers/Order";
import Home from "./components/Home";
import Login from "./containers/Login";
import Auth from "./auth/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
            Auth.isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AppHeader />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Home} />
                        <PrivateRoute exact path="/customers" component={Customers} />
                        <PrivateRoute exact path="/customers/new" component={Customer}/>
                        <PrivateRoute exact path="/products" component={Products} />
                        <PrivateRoute exact path="/products/new" component={Product} />
                        <PrivateRoute exact path="/orders" component={Orders} />
                        <PrivateRoute exact path="/orders/new" component={Order} />
                        <PrivateRoute path="/customers/:id/edit" component={Customer} />
                        <PrivateRoute path="/customers/:id" component={CustomerView} />
                        <PrivateRoute path="/products/:id/edit" component={Product} />
                        <PrivateRoute path="/products/:id" component={ProductView} />
                        <PrivateRoute path="/orders/:id/edit" component={Order} />
                        <PrivateRoute path="/orders/:id" component={OrderView} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
