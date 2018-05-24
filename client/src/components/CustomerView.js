import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Button } from "semantic-ui-react";

const CustomerView = (props) => (
    <div className="topBotPadd">
    <Container>
        <Link to={`/customers`}>
            <Button color="blue">
                <Icon name="arrow left" />
                Back to customer list
                </Button>
        </Link>
        <h1>Hej</h1>
        <h2>{props.match.params.id}</h2>
    </Container>
    </div>
);

export default CustomerView;
