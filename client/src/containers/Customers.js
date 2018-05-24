import React, { Component } from "react";
import { Button, Container, Table, Form, Icon } from "semantic-ui-react";
import { connect } from 'react-redux';
import * as customerActions from '../actions/customerActions';
import { Link } from "react-router-dom";
import List from "../components/List";
import ListRow from "../components/ListRow";

class Customers extends Component {
    componentDidMount() {
        this.props.getCustomers();
    }

    render() {
        const customerState = this.props.mappedCustomerState;
        const customers = customerState.customers;
        const headerList = ['Name', 'ID', 'Phone', 'Email', 'Website'];
        const createNewLink = '/customers/new';
        const createNewLinkText = 'Add new customer'
        console.log(headerList);
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
                            customer.website
                        ]}
                        link={`/customers/${customer._id}`}
                        id={customer._id}
                        key={customer._id}
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
