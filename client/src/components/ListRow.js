import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const List = props => {
    const { cellList, id, link} = props;
    return (
        <Table.Row key={id}>
            <Table.Cell><Link to={link}>{cellList[0]}</Link></Table.Cell>
            <Table.Cell>{cellList[1]}</Table.Cell>
            <Table.Cell>{cellList[2]}</Table.Cell>
            <Table.Cell>{cellList[3]}</Table.Cell>
            <Table.Cell>{cellList[4]}</Table.Cell>
            <Table.Cell>
                <Link to={`${link}/edit`}>
                    <Button color="blue">
                        <Icon name="edit" />
                        Edit
                    </Button>
                </Link>
            </Table.Cell>
        </Table.Row>
    );
};

export default List;
