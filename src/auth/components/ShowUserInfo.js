import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { showUserInfo } from '../apiAuth'
// import messages from '../messages'

class ShowUserInfo extends Component {

    componentDidMount() {
        // console.log(this.props.match.params);
        showUserInfo(this.props.match.params.username)
            .then((response) => {
                console.log(response);
                this.props.setProfile(response.data.profile);
            })
            .catch((error) => {
                console.log('API ERROR:', error);
            });
    }
    render() {
        return (
            <>
                <main className="mainIfo" >
                    <div className="inner">
                        <img src={"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"} className="rounded" alt="profile-img" />
                        <ul className="list-group">
                            <li className="list-group-item" >First Name:  {this.props.profile.firstName}</li>
                            <li className="list-group-item">Last Name:  {this.props.profile.lastName}</li>
                            <li className="list-group-item">Label:  {this.props.profile.label}</li>
                            <li className="list-group-item">Email: {this.props.profile.email}</li>
                            <li className="list-group-item">Phone:  {this.props.profile.phone}</li>
                        </ul>
                    </div>
                </main>
            </>
        );
    }
}

export default withRouter(ShowUserInfo);
