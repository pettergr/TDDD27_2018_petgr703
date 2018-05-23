import React from "react";
import { Field, reduxForm } from "redux-form";
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

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Grid columns="two">
                <Grid.Column>
                    <Field
                        component={InputField}
                        label="Customer Name"
                        name="customerName"
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
                    </Grid.Column>
                    <Grid.Column>
                    <Field
                        label="Notes"
                        name="notes"
                        component={TextAreaField}
                    />
                    </Grid.Column>
                </Grid>

                <Divider />
                <Grid columns="two" divided="true">
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


                <Button type="submit" disabled={pristine || submitting}>
                    Submit
                </Button>
                <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}>
                    Clear Values
                </Button>
            </Form>
        </Container>
    );
};

export default reduxForm({
    form: "simple" // a unique identifier for this form
})(SimpleForm);
