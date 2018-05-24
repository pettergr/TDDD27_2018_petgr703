import React, {Component} from "react";
import { connect } from "react-redux";
import ProductForm from "../components/ProductForm";
import * as productActions from '../actions/productActions';

class Product extends Component {
    /*
    When the container mounts we look at the parameters sent from
    the router. If an id is supplied we want to use the form to edit
    a product, if not, we want to create a new product.
    */
    componentWillMount() {
        console.log("xd");
        if (this.props.match.params.id !== undefined) {
            var productId = this.props.match.params.id;
            this.props.getProduct(productId);
            this.setState({
                id: this.props.match.params.id,
                submitFunction: this.props.editProduct
            });
        }
        else {
            // Reset active product so that the form will be empty
            this.props.resetActiveProduct();
            this.setState({
                id: 0,
                submitFunction: this.props.addProduct
            });
        }
    }

    render() {
        return <ProductForm onSubmit={this.state.submitFunction} id={this.state.id} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        //you can now say this.props.mappedAppActions
        editProduct: (product) => dispatch(productActions.editProduct(product)),
        addProduct: (product) => dispatch(productActions.addProduct(product)),
        getProduct: (productId) => dispatch(productActions.getProduct(productId)),
        resetActiveProduct: () => dispatch(productActions.resetActiveProduct())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
