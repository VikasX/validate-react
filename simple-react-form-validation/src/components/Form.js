import React from "react";
import "../styles.css";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameText: "",
      emailText: "",
      phoneText: "",
      urlText: "",
      nameValid: "",
      emailValid: "",
      phoneValid: "",
      urlValid: "",
      formValid: ""
    };
  }

  handleInputChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  checkEmailValid() {
    let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      this.state.emailText
    );
    this.setState({
      ...this.state,
      emailValid
    });
  }

  checkNameValid() {
    this.setState({
      ...this.state,
      nameValid: this.state.nameText.length >= 4
    });
  }

  checkPhoneValid() {
    const phoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      this.state.phoneText
    );
    this.setState({
      ...this.state,
      phoneValid
    });
  }

  checkUrlValid() {
    const urlValid = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(
      this.state.urlText
    );
    this.setState({
      ...this.state,
      urlValid
    });
  }

  handleFormSubmit() {
    const formValid =
      this.state.emailValid &&
      this.state.nameValid &&
      this.state.phoneValid &&
      this.state.urlValid;
    this.props.onFormValidChange(formValid);
    this.setState({
      ...this.state,
      formValid
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="nameText"
            placeholder="Enter name"
            value={this.state.nameText}
            onChange={e => this.handleInputChange(e)}
            onBlur={() => this.checkNameValid()}
            className={
              this.state.nameValid !== "" && !this.state.nameValid ? (
                "invalid-input"
              ) : (
                ""
              )
            }
          />
          <span className="form-helper">
            *Required(should have 4 or more characters)
          </span>
          <br />
          <label>Email: </label>
          <input
            type="email"
            name="emailText"
            placeholder="Enter email"
            value={this.state.emailText}
            onChange={e => this.handleInputChange(e)}
            onBlur={() => this.checkEmailValid()}
            className={
              this.state.emailValid !== "" && !this.state.emailValid ? (
                "invalid-input"
              ) : (
                ""
              )
            }
          />
          <span className="form-helper">
            *Required(should be a valid email)
          </span>
          <br />
          <label>Phone: </label>
          <input
            type="number"
            name="phoneText"
            placeholder="Enter telephone"
            value={this.state.phoneText}
            onChange={e => this.handleInputChange(e)}
            onBlur={() => this.checkPhoneValid()}
            className={
              this.state.phoneValid !== "" && !this.state.phoneValid ? (
                "invalid-input"
              ) : (
                ""
              )
            }
          />
          <span className="form-helper">
            *Required(should be a valid telephone number)
          </span>
          <br />
          <label>Website: </label>
          <input
            type="url"
            name="urlText"
            placeholder="Enter website"
            value={this.state.urlText}
            onChange={e => this.handleInputChange(e)}
            onBlur={() => this.checkUrlValid()}
            className={
              this.state.urlValid !== "" && !this.state.urlValid ? (
                "invalid-input"
              ) : (
                ""
              )
            }
          />
          <span className="form-helper">*Required(should be a valid URL)</span>
          <br />
          <br />
          <input
            type="button"
            value="submit"
            onClick={() => this.handleFormSubmit()}
          />
        </form>
      </div>
    );
  }
}
