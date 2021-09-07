import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reg: ""
        }
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div style={{ margin: "30px" }}>

                <input value={this.state.reg} onChange={this.onInputchange.bind(this)} name="reg" placeholder="Enter your registeration number then enter the home page" style={{ padding: "10px 20px" }} />
                <Link to={this.state.reg == "selve12345" ? '/' : "registration"} ><button style={{ padding: "10px 30px", marginLeft: "20px" }} onClick={() => {
                    if (this.state.reg == "selve12345") {
                        localStorage.setItem("login", "x");

                    }
                }}>
                    next
                </button>
                </Link>
            </div>
        );
    }
}

export default Register;
