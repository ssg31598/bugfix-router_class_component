import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {localStorage.getItem("login") == "x" ? <div>Welcome to home Page</div> : <Redirect to="/registration" />}
                <Link to="/registration"> <button
                    onClick={() => {
                        localStorage.setItem("login", "y");

                    }}
                >Log out</button></Link>



            </div>
        );
    }
}

export default Home;


