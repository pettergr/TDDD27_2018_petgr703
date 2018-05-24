import React, {Component} from "react";
import { connect } from "react-redux";
import CustomerForm from "../components/CustomerForm";
import * as customerActions from '../actions/customerActions';

class Customer extends Component {
    componentWillMount() {
        if (this.props.match.params.id !== undefined) {
            var customerId = this.props.match.params.id;
            this.props.getCustomer(customerId);
            this.setState({
                id: this.props.match.params.id,
                submitFunction: this.props.editCustomer
            });
        }
        else {
            this.props.resetActiveCustomer();
            this.setState({
                id: 0,
                submitFunction: this.props.addCustomer
            });
        }
    }

    render() {
        return <CustomerForm onSubmit={this.state.submitFunction} id={this.state.id} />;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        //you can now say this.props.mappedAppActions
        editCustomer: (customer) => dispatch(customerActions.editCustomer(customer)),
        addCustomer: (customer) => dispatch(customerActions.addCustomer(customer)),
        getCustomer: (customerId) => dispatch(customerActions.getCustomer(customerId)),
        resetActiveCustomer: () => dispatch(customerActions.resetActiveCustomer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
