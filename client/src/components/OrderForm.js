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
    Divider,
    Message
} from "semantic-ui-react";
import {
    InputField,
    TextAreaField
} from "react-semantic-redux-form";



let OrderForm = props => {
    const { handleSubmit, pristine, reset, submitting, submitSucceeded} = props;
    return (
        <Container>
        <div className="topBotPadd">
            <Link to={`/orders`}>
                <Button color="blue">
                    <Icon name="arrow left" />
                    Back to order list
                </Button>
            </Link>
            <Form onSubmit={handleSubmit} loading={submitting} success={submitSucceeded && pristine}>

            <Message
                success
                header='Form Completed'
                content="Order submitted successfully"
                className="topMargin"
            />

            <div className="topBotPadd">
                <Grid columns="two">
                <Grid.Column>
                    <Field
                        component={InputField}
                        label="Customer name"
                        name="customerName"
                        type="text"
                        placeholder=""
                    />
                    <Field
                        component={InputField}
                        label="Customer email"
                        name="customerEmail"
                        type="text"
                        placeholder=""
                    />
					<Field
                        component={InputField}
                        label="Contact"
                        name="contact"
                        type="text"
                        placeholder=""
                    />
                    <Field
                        component={InputField}
                        label="Order ID"
                        name="_id"
                        type="text"
                        disabled={true}
                    />
                    </Grid.Column>
                    <Grid.Column>
					<Field
                        component={InputField}
                        label="Order date"
                        name="date"
                        type="text"
                        placeholder=""
                    />
					<Field
                        component={InputField}
                        label="Order status"
                        name="status"
                        type="text"
                        placeholder=""
                    />
					<Field
                        component={InputField}
                        label="PO number"
                        name="poNumber"
                        type="text"
                        placeholder=""
                    />
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
                            name="billingAddressLine1"
                            type="text"
                            placeholder=""
                        />
                        <Field
                            component={InputField}
                            name="billingAddressLine2"
                            type="text"
                            placeholder=""
                        />
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="City"
                                name="billingCity"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="ZIP"
                                name="billingZip"
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="State"
                                name="billingState"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="Country"
                                name="billingCountry"
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
                            name="shippingAddressLine1"
                            type="text"
                            placeholder=""
                        />
                        <Field
                            component={InputField}
                            name="shippingAddressLine2"
                            type="text"
                            placeholder=""
                        />
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="City"
                                name="shippingCity"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="ZIP"
                                name="shippingZip"
                                type="text"
                                placeholder=""
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Field
                                component={InputField}
                                label="State"
                                name="shippingState"
                                type="text"
                                placeholder=""
                            />
                            <Field
                                component={InputField}
                                label="Country"
                                name="shippingCountry"
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

OrderForm = reduxForm({form: "orderForm", enableReinitialize: true})(OrderForm)
OrderForm = connect((state, ownProps) => ({initialValues: state.orderState.activeOrder}))(OrderForm)
export default OrderForm
