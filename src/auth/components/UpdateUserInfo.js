import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateUserInfo, deleteUserAcountFromTheDB } from '../apiAuth'
import messages from '../messages'

class UpdateUserInfo extends Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      label: "",
      phone: "",
      oldPassword: "",
      newPassword: ""
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onUpdateUserInfo = event => {
    event.preventDefault();

    const { alert, history, user } = this.props;

    updateUserInfo(this.state, user)
      .then(() => alert(messages.updateInfoSuccess, "success"))
      .then(() => history.push(`/profile/${user.username}`))
      .catch(error => {
        console.error(error);
        this.setState({ firstName: "", lastName: "", label: "", phone: "", oldPassword: "", newPassword: "" });
        alert(messages.updateInfoFailure, "check your password again");
      });
  };

  deleteUserAcount = () => {
    const { alert, history, user, clearUser } = this.props;
    deleteUserAcountFromTheDB(user._id)
      .then(() => history.push("/"))
      .finally(() => clearUser())
      .catch(error => {
        console.error(error);
        this.setState({ firstName: "", lastName: "", label: "", phone: "", oldPassword: "", newPassword: "" });
        alert(messages.updateInfoFailure, "check your password again");
      });
  };

  render() {
    console.log(this.props.user._id);

    const { firstName, lastName, label, phone, oldPassword, newPassword } = this.state

    return (
      <div className="display-5">
        <form className="auth-form" onSubmit={this.onUpdateUserInfo}>
          <h3>Update User Info</h3>

          <label htmlFor="firstName">First Name</label>
          <input
            required
            name="firstName"
            value={firstName}
            type="text"
            placeholder="New First Name"
            onChange={this.handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            name="lastName"
            value={lastName}
            type="text"
            placeholder="New Last Name"
            onChange={this.handleChange}
          />
          <label htmlFor="label">Label</label>
          <input
            required
            name="label"
            value={label}
            type="text"
            placeholder="New Label"
            onChange={this.handleChange}
          />
          <label htmlFor="phone">phone</label>
          <input
            required
            name="phone"
            value={phone}
            type="text"
            placeholder="New phone"
            onChange={this.handleChange}
          />

          <label htmlFor="oldpw">Old Password</label>
          <input
            required
            name="oldPassword"
            value={oldPassword}
            type="password"
            placeholder="Old Password"
            onChange={this.handleChange}
          />
          <label htmlFor="newPassword">New Password</label>
          <input
            required
            name="newPassword"
            value={newPassword}
            type="password"
            placeholder="New Password"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-outline-secondary">Update My Info</button>
        </form>
        <hr />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <label htmlFor="deleteAcount">Please Delete My Acount  </label>
        <br />
        <button type="submit" className="btn btn-outline-danger" onClick={this.deleteUserAcount}>Delete</button>
      </div>
    );
  }
}

export default withRouter(UpdateUserInfo);
