import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Table, Form } from "semantic-ui-react";
import CustomerListRow from "./CustomerListRow";

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fetching: true,
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.submitName.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        axios
            .get("/customer")
            .then(response => {
                var rows = response.data.map(customer => (
                    <CustomerListRow
                        customer={customer}
                        key={customer._id}
                        onDelete={this.handleRemove}
                    />
                ));
                this.setState({
                    data: rows,
                    fetching: false
                });
            })
            .catch(error => {
                this.setState({
                    data: `API call failed: ${error}`,
                    fetching: false
                });
            });
    }

    handleRemove(customer) {
        var id = customer._id;
        axios.delete(`/customer/${id}`);

        var index = -1;
        var tempData = this.state.data.slice();
        for (var i = 0; i < tempData.length; i++) {
            if (tempData[i].key === id) {
                index = i;
            }
        }
        if (index !== -1) {
            tempData.splice(index, 1);
            this.setState({
                data: tempData
            });
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    submitName(event) {
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
        event.preventDefault();
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
                        <Table.Body>{this.state.data}</Table.Body>
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

export default CustomerList;
