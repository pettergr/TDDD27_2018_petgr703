import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import {
    Form,
    Icon,
    Button,
    Container,
    Grid,
    Divider
} from "semantic-ui-react";
import {
    LabelInputField,
    CheckboxField,
    InputField,
    TextAreaField
} from "react-semantic-redux-form";



let CustomerForm = props => {
    const { handleSubmit, pristine, reset, submitting} = props;
    return (
        <Container>
        <div className="topBotPadd">
            <Link to={`/customers`}>
                <Button color="blue">
                    <Icon name="arrow left" />
                    Back to customer list
                </Button>
            </Link>
            <Form onSubmit={handleSubmit}>
            <div className="topBotPadd">
                <Grid columns="two">
                <Grid.Column>
                    <Field
                        component={InputField}
                        label="Customer Name"
                        name="name"
                        type="text"
                        placeholder=""
                    />
                    <Field
                        component={InputField}
                        label="Email"
                        name="email"
                        type="text"
                        placeholder=""
                    />
                    <Field
                        component={InputField}
                        label="Customer ID"
                        name="_id"
                        type="text"
                    />
                    </Grid.Column>
                    <Grid.Column>
                    <Field
                        label="Notes"
                        name="notes"
                        component={TextAreaField}
                    />
                    </Grid.Column>
                </Grid>
                </div>

                <Divider />
                <div className="topBotPadd">
                <Grid columns="two" divided={true}>
                    <Grid.Column>
                        <h3>Billing address</h3>
                        <Field
                            component={InputField}
                            label="Address"
                            name="addressline1"
                            type="text"
                            placeholder=""
                        />
                        <Field
                            component={InputField}
                            name="addressline2"
                            type="text"
                            placeholder=""
                        />
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="City"
                                name="city"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="ZIP"
                                name="zip"
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="State"
                                name="state"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="Country"
                                name="country"
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Shipping Address</h3>
                        <Field
                            component={InputField}
                            label="Address"
                            name="addressline1"
                            type="text"
                            placeholder=""
                        />
                        <Field
                            component={InputField}
                            name="addressline2"
                            type="text"
                            placeholder=""
                        />
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="City"
                                name="city"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="ZIP"
                                name="zip"
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="State"
                                name="state"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="Country"
                                name="country"
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                    </Grid.Column>
                </Grid>
                </div>


                <Button type="submit" color="green" disabled={pristine || submitting}>
                    Save
                </Button>
                <Button
                    type="button"
                    color="red"
                    disabled={pristine || submitting}
                    onClick={reset}>
                    Clear Values
                </Button>
            </Form>
            </div>
        </Container>
    );
};

CustomerForm = reduxForm({form: "customerForm", enableReinitialize: true})(CustomerForm)
CustomerForm = connect((state, ownProps) => ({initialValues: state.customerState.activeCustomer}))(CustomerForm)
export default CustomerForm
