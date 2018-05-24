import React, { Component } from "react";
import { connect } from 'react-redux';
import * as productActions from '../actions/productActions';
import List from "../components/List";
import ListRow from "../components/ListRow";

class Products extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const productState = this.props.mappedProductState;
        const products = productState.products;
        const headerList = ['Article Number', 'ID', 'Description', 'Price', 'UoM'];
        const createNewLink = '/products/new';
        const createNewLinkText = 'Add new product'
        return (
            <List
                headerList={headerList}
                createNewLink={createNewLink}
                createNewLinkText={createNewLinkText}
                bodyItemList={products.map(product => (
                    <ListRow
                        cellList={[
                            product.articleNumber,
                            product._id,
                            product.description,
                            product.price,
                            product.uom
                        ]}
                        link={`/products/${product._id}`}
                        id={product._id}
                        key={product._id}
                        onDelete={this.props.deleteProduct}
                    />
                ))}
            />
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        mappedProductState: state.productState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //you can now say this.props.mappedAppActions
        getProducts: () => dispatch(productActions.getProducts()),
        addProduct: (product) => dispatch(productActions.addProduct(product)),
        deleteProduct: (productId) => dispatch(productActions.deleteProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
