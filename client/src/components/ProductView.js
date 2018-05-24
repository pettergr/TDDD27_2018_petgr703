import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Button } from "semantic-ui-react";

const ProductView = props => (
    <div className="topBotPadd">
        <Container>
            <Link to={`/products`}>
                <Button color="blue">
                    <Icon name="arrow left" />
                    Back to product list
                </Button>
            </Link>
            <h1>Hej</h1>
            <h2>{props.match.params.id}</h2>
        </Container>
    </div>
);

export default ProductView;
