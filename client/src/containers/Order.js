import React, {Component} from "react";
import { connect } from "react-redux";
import OrderForm from "../components/OrderForm";
import * as orderActions from '../actions/orderActions';

class Order extends Component {
    /*
    When the container mounts we look at the parameters sent from
    the router. If an id is supplied we want to use the form to edit
    an order, if not, we want to create a new order.
    */
    componentWillMount() {
        if (this.props.match.params.id !== undefined) {
            var orderId = this.props.match.params.id;
            this.props.getOrder(orderId);
            this.setState({
                id: this.props.match.params.id,
                submitFunction: this.props.editOrder
            });
        }
        else {
            // Reset active order so that the form will be empty
            this.props.resetActiveOrder();
            this.setState({
                id: 0,
                submitFunction: this.props.addOrder
            });
        }
    }

    render() {
        return <OrderForm onSubmit={this.state.submitFunction} id={this.state.id} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        //you can now say this.props.mappedAppActions
        editOrder: (order) => dispatch(orderActions.editOrder(order)),
        addOrder: (order) => dispatch(orderActions.addOrder(order)),
        getOrder: (orderId) => dispatch(orderActions.getOrder(orderId)),
        resetActiveOrder: () => dispatch(orderActions.resetActiveOrder())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
