import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from "semantic-ui-react";

/*const Customer = () => {
    console.log(this.props.match.params.id);
  return (
    <Container>
      <h1>Hej</h1>
      <Link to='/customers'>Back</Link>
    </Container>
  )
}
*/
export default class Customer extends Component {

    render() {
        console.log(this.props);
    return(
      <div>
      <h1>Hej</h1>
        <h2>{this.props.match.params.id}</h2>
      </div>
  );
  }

}

//export default Customer
