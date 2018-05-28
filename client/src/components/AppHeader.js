import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import Auth from "../auth/auth"

const AppHeader = () => (
    <Container>
        <header>
            {Auth.isLoggedIn() &&
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
                    <Menu.Item>
                        <Link to="/products">Products</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={`/`}>
                            <Button primary
                            onClick={() => {
                                console.log("click")
                                Auth.logOut();
                            }}>
                                Log out</Button>
                        </Link>
                    </Menu.Item>
                </Menu>
            }
        </header>
    </Container>
);

export default AppHeader;
