import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Button } from "semantic-ui-react";

const OrderView = (props) => (
    <div className="topBotPadd">
    <Container>
        <Link to={`/orders`}>
            <Button color="blue">
                <Icon name="arrow left" />
                Back to order list
                </Button>
        </Link>
        <h1>Hej</h1>
        <h2>{props.match.params.id}</h2>
    </Container>
    </div>
);

export default OrderView;
