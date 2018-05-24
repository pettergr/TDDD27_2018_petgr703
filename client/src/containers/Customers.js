import React, { Component } from "react";
import { connect } from 'react-redux';
import * as customerActions from '../actions/customerActions';
import List from "../components/List";
import ListRow from "../components/ListRow";

class Customers extends Component {
    componentDidMount() {
        this.props.getCustomers();
    }

    render() {
        const customerState = this.props.mappedCustomerState;
        const customers = customerState.customers;
        const headerList = ['Name', 'ID', 'Phone', 'Email', 'Notes'];
        const createNewLink = '/customers/new';
        const createNewLinkText = 'Add new customer'
        return (
            <List
                headerList={headerList}
                createNewLink={createNewLink}
                createNewLinkText={createNewLinkText}
                bodyItemList={customers.map(customer => (
                    <ListRow
                        cellList={[
                            customer.name,
                            customer._id,
                            customer.phone,
                            customer.email,
                            customer.notes
                        ]}
                        link={`/customers/${customer._id}`}
                        id={customer._id}
                        key={customer._id}
                        onDelete={this.props.deleteCustomer}
                    />
                ))}
            />
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        mappedCustomerState: state.customerState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        getCustomers: () => dispatch(customerActions.getCustomers()),
        addCustomer: (customerName) => dispatch(customerActions.addCustomer(customerName)),
        deleteCustomer: (customerId) => dispatch(customerActions.deleteCustomer(customerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
