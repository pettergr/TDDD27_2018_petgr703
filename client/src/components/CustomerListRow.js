import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

class CustomerListRow extends Component {
    render() {
        const customer = this.props.customer;
        const name = customer.name;
        const id = customer._id;
        const phone = customer.phone;
        const email = customer.email;
        const website = customer.website;

        return (
            <Table.Row>
                <Table.Cell>
                    <a href={`/customers/${id}`}>{name}</a>
                </Table.Cell>
                <Table.Cell>{id}</Table.Cell>
                <Table.Cell>{phone}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{website}</Table.Cell>
                <Table.Cell>
                    <Button
                        color="red"
                        onClick={() => {
                            this.props.onDelete(customer);
                        }}
                    >
                        <Icon name="delete" />Delete
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default CustomerListRow;
