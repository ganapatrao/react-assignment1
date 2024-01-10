import { Component } from "react";
import SubmittedForm from "./submittedForm";

class Registration extends Component {
  state = {
    uName: "",
    uEmail: "",
    ugender: "Male",
    uInterests: "",
    uAge: "",
    uDOB: "",
    isFormSubmitted :false
  };



  onNameChange = (event) => {
    this.setState({ uName: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ uEmail: event.target.value });
  };

  onGenderChange = (event) => {
    this.setState({ ugender: event.target.value });
  };

  onAgeChange = (event) => {
    this.setState({ uAge: event.target.value });
  };

  onDateChange = (event) => {
    this.setState({ uDOB: event.target.value });
  };

  onSubmit = () => {

    this.setState({ isFormSubmitted: true });
  };

  render() {
    const { uName, uEmail, ugender, uInterests, uAge, uDOB } = this.state;
   const isButtonDisabled = (uName ==="" && uEmail ==="" && uName ==="")
    return (
      <div
        style={{
          width: "400px",
          margin: "0 auto",
          textAlign: "left",
          border: "1px solid grey",
          borderradius:"14px",
          padding: "14px",
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <div>
          <div>
            <label>Full Name</label>
          </div>
          <div>
            <input type="text" onChange={this.onNameChange}   style={{width: "100%"}} />
          </div>
          <div>
            {uName === "" && (
              <label className="empty-message" style={{ color: "red" }}>
                Username is required
              </label>
            )}
          </div>

          <div>
            <label for="email"> email</label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.onEmailChange}
              style={{width: "100%"}}
            />
          </div>
          <div>
            {uEmail === "" && (
              <label className="empty-message" style={{ color: "red" }}>
                email is required
              </label>
            )}
          </div>
{/* test */}
          <div>
            <label for="pwd">Password:</label>
          </div>
          <div>
            <input type="password" id="pwd" name="pwd" style={{width: "100%"}}/>
          </div>

          <div>
            <div>Gender</div>

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                //  checked={ugender === "Male"}
                onChange={this.onGenderChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                // checked={this.ugender === 'Female'}
                onChange={this.onGenderChange}
              />
              Female
            </label>
          </div>

          <div>Age</div>
          <input
            type="range"
            id="vol"
            name="vol"
            min="1"
            max="100"
            onChange={this.onAgeChange}
          />

          <div>Date of Birth</div>
          <input
            type="date"
            id="dob"
            name="birthday"
            onChange={this.onDateChange}
          />
        </div>

        <button
          type="button"
          style={{ backgroundColor: "blue", color: "white", margin: 14 }}
          // disabled ={isButtonDisabled}
          onClick={this.onSubmit}
        >
          Submit
        </button>

        <div>
        {/* this.isFormSubmitted */}
       {true && (     <SubmittedForm
          gender={ugender}
          age={uAge}
          dob={uDOB}
          name={uName}
          email={uEmail}
        />)} 
        </div>
   
      </div>
    );
  }
}

export default Registration;

// class Greetings extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome to the Jungle! from Class Comp</h1>
//         <p></p>
//       </div>
//     );
//   }
// }

// export default Greetings;
