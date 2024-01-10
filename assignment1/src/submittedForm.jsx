import { Component } from "react";

class SubmittedForm extends Component {
  render() {
    return (
      <div>
        <div> Name: {this.props.name}</div>
        <div> Email: {this.props.email}</div>
        <div> Gender: {this.props.gender}</div>
        <div> Age: {this.props.age}</div>
        <div> Date of Birth: {this.props.dob}</div>
      </div>
    );
  }
}

export default SubmittedForm;
