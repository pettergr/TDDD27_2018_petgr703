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
    InputField,
    TextAreaField
} from "react-semantic-redux-form";



let ProductForm = props => {
    const { handleSubmit, pristine, reset, submitting} = props;
    return (
        <Container>
        <div className="topBotPadd">
            <Link to={`/products`}>
                <Button color="blue">
                    <Icon name="arrow left" />
                    Back to product list
                </Button>
            </Link>
            <Form onSubmit={handleSubmit} loading={submitting}>
            <div className="topBotPadd">
                <Grid columns="two">
                <Grid.Column>
                    <Field
                        component={InputField}
                        label="Article Number"
                        name="articleNumber"
                        type="text"
                        placeholder=""
                    />
                    <Field
                        component={InputField}
                        label="Description"
                        name="description"
                        type="text"
                        placeholder=""
                    />
                    <Field
                        component={InputField}
                        label="Product ID"
                        name="_id"
                        type="text"
                        disabled={true}
                    />
                    </Grid.Column>
                    <Grid.Column>
                    <Field
                        component={InputField}
                        label="Price"
                        name="price"
                        type="text"
                    />
                    <Field
                        component={InputField}
                        label="UoM"
                        name="uom"
                        type="text"
                    />
                    <Field
                        label="Notes"
                        name="notes"
                        component={TextAreaField}
                    />
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

ProductForm = reduxForm({form: "productForm", enableReinitialize: true})(ProductForm)
ProductForm = connect((state, ownProps) => ({initialValues: state.productState.activeProduct}))(ProductForm)
export default ProductForm
