import React, { Component } from "react";
import { Button, Container, Table, Form } from "semantic-ui-react";
import CustomerListRow from "./CustomerListRow";
import { connect } from 'react-redux';
import * as customerActions from '../actions/customerActions';

class Customers extends Component {
    componentDidMount() {
        this.props.getCustomers();
    }

    render() {
        const customerState = this.props.mappedCustomerState;
        const customers = customerState.customers;
        return (
            <div className="">
                <Container className="topBotPadd">
                    <Table sortable celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>Phone</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>Website</Table.HeaderCell>
                                <Table.HeaderCell />
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {customers.map(customer => {
                              const name = customer.name;
                              return name ? (
                                  <CustomerListRow
                                      customer={customer}
                                      key={customer._id}
                                      onDelete={this.props.deleteCustomer}
                                  />
                              ) : null;
                            })}
                        </Table.Body>
                    </Table>
                </Container>
            </div>
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
