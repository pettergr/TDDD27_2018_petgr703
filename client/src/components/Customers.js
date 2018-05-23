import React, { Component } from "react";
import { Button, Container, Table, Form } from "semantic-ui-react";
import CustomerListRow from "./CustomerListRow";
import { connect } from 'react-redux';
import * as customerActions from '../actions/customerActions';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.submitName.bind(this);
    }

    componentDidMount() {
        this.props.getCustomers();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    submitName(event) {
        this.props.addCustomer(this.state.value);
        this.setState({value: ""});
    }

    render() {
        const customerState = this.props.mappedCustomerState;
        const customers = customerState.customers;
        return (
            <div className="">
                <Container className="topPadd">
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

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Name</label>
                            <input
                                placeholder="Name"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </Form.Field>

                        <Button type="submit">Submit</Button>
                    </Form>
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
