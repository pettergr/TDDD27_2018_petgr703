import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { InputField, TextAreaField } from "react-semantic-redux-form";

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div className="login-form">
            <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
            <Grid
                textAlign="center"
                style={{ height: "100%" }}
                verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="blue" textAlign="center">
                        Log in to your account
                    </Header>
                    <Form onSubmit={handleSubmit} loading={submitting} size="large">
                        <Segment stacked>
                            <Field
                                component={InputField}
                                name="email"
                                icon="user"
                                iconPosition="left"
                                placeholder="E-mail address"
                            />
                            <Field
                                component={InputField}
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />

                            <Button color="blue" fluid size="large">
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        No account yet? <Link to={`/register`}>Register</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default reduxForm({form: 'loginForm'})(LoginForm)
