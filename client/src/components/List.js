import React from "react";
import { Button, Container, Table, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const List = props => {
    const { headerList, bodyItemList, createNewLink, createNewLinkText} = props;
    return (
        <div className="">
            <Container className="topBotPadd">
                <Table sortable celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{headerList[0]}</Table.HeaderCell>
                            <Table.HeaderCell>{headerList[1]}</Table.HeaderCell>
                            <Table.HeaderCell>{headerList[2]}</Table.HeaderCell>
                            <Table.HeaderCell>{headerList[3]}</Table.HeaderCell>
                            <Table.HeaderCell>{headerList[4]}</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {bodyItemList.map(item => (
                            item
                        ))}
                    </Table.Body>
                </Table>

                <div className = "topBotPadd">
                    <Link to={createNewLink}>
                        <Button color="green">
                            <Icon name="edit" />
                            {createNewLinkText}
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default List;
