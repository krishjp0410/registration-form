import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    ShowFirstNameError: false,
    ShowLastNameError: false,
    isFormSubmitted: false,
  }

  onBlurFirstName = () => {
    const validFirstName = this.validFirstName()

    this.setState({ShowFirstNameError: !validFirstName})
  }

  onBlurLastName = () => {
    const validLastName = this.validLastName()

    this.setState({ShowLastNameError: !validLastName})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderLastName = () => {
    const {lastName} = this.state

    return (
      <div className="input-container">
        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          id="lastName"
          className="input"
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  renderFirstName = () => {
    const {firstName} = this.state

    return (
      <div className="input-container">
        <label htmlFor="firsName">FIRST NAME</label>
        <input
          type="text"
          id="firsName"
          className="input"
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  validFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  addOnSubmit = event => {
    event.preventDefault()

    const isValidFirstName = this.validFirstName()
    const isValidLastName = this.validLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true, firstName: '', lastName: ''})
    } else {
      this.setState({
        ShowFirstNameError: !isValidFirstName,
        ShowLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {ShowFirstNameError, ShowLastNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.addOnSubmit}>
        {this.renderFirstName()}
        {ShowFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastName()}
        {ShowLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickAnotherResponse = () =>
    this.setState({
      ShowFirstNameError: false,
      ShowLastNameError: false,
      isFormSubmitted: false,
    })

  renderSuccessViewCard = () => (
    <div className="success-container">
      <img
        className="success-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        className="another-response-btn"
        type="button"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="preview-container">
          {isFormSubmitted
            ? this.renderSuccessViewCard()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
