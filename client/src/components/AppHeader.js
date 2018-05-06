import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

const AppHeader = () => (
    <Container>
        <header>
            <Menu>
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/customers">Customers</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/orders">Orders</Link>
                </Menu.Item>
            </Menu>
        </header>
    </Container>
);

export default AppHeader;
