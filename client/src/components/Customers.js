import React, { Component } from "react";
import { Button, Container, Table, Form } from "semantic-ui-react";
import CustomerListRow from "./CustomerListRow";
import { connect } from "redux-zero/react";
import actions from '../actions/customerActions';
import axios from "axios";

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
        console.log("handleChange")
        this.setState({ value: event.target.value });
    }

    submitName(event) {
        console.log("submitName")
        this.props.addCustomer(this.state.value);
        this.setState({value: ""});
        /*
        axios
            .post("/customer", { name: this.state.value })
            .then(response => {
                var customer = response.data;
                var tempData = this.state.data.slice();
                tempData.push(
                    <CustomerListRow
                        customer={customer}
                        key={customer._id}
                        onDelete={this.handleRemove}
                    />
                );
                this.setState({
                    data: tempData,
                    fetching: true,
                    value: ""
                });
            })
            .catch(error => {
                this.setState({});
            });
        event.preventDefault();*/
    }

    render() {
        return (
            <div className="">
                <Container className="toplmul">
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
                            {this.props.customers.map(customer => {
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

const mapToProps = ({ customers, customersLoading }) => ({ customers, customersLoading });

export default connect(mapToProps, actions)(Customers);
