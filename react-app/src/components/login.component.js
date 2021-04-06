import React, { Component } from "react";

export default class Login extends Component {
    render() {

        return (
            <form>
                <div className="App">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Enter username" />
                            </div>


                            <button type="submit" className="btn btn-dark btn-block" formAction="/student">Login as Student</button>
                            

                            <button type="submit" className="btn btn-dark btn-block" formAction="/instructor">Login as Instructor</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}