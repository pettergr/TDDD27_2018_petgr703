import React, { Component } from "react";
import { connect } from 'react-redux';
import * as orderActions from '../actions/orderActions';
import List from "../components/List";
import ListRow from "../components/ListRow";

class Orders extends Component {
    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        const orderState = this.props.mappedOrderState;
        const orders = orderState.orders;
        const headerList = ['Customer name', 'ID', 'Order date', 'Email', 'Notes'];
        const createNewLink = '/orders/new';
        const createNewLinkText = 'Add new order'
        return (
            <List
                headerList={headerList}
                createNewLink={createNewLink}
                createNewLinkText={createNewLinkText}
                bodyItemList={orders.map(order => (
                    <ListRow
                        cellList={[
                            order.customerName,
                            order._id,
                            order.date,
                            order.email,
                            order.notes
                        ]}
                        link={`/orders/${order._id}`}
                        id={order._id}
                        key={order._id}
                        onDelete={this.props.deleteOrder}
                    />
                ))}
            />
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        mappedOrderState: state.orderState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        getOrders: () => dispatch(orderActions.getOrders()),
        addOrder: (order) => dispatch(orderActions.addOrder(order)),
        deleteOrder: (orderId) => dispatch(orderActions.deleteOrder(orderId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
