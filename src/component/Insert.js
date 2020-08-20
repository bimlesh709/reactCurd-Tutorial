import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

class Insert extends Component {
    //to insert the data into db first we need to create function

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            alert_message: '',
            first_nameError: '',
            last_nameError1: '',
            last_nameError: '',
            emailError: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    //validation
    validate = () => {
        let first_nameError = "";
        let last_nameError = "";
        let last_nameError1 = "";
        let emailError = "";

        var letters = /^[A-Za-z]+$/;
        var email_exp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        //firstName
        /*if (this.state.first_name.length < 0) {
            first_nameError = 'First Name cant blank';
        }
        */
        if (!this.state.first_name.match(letters)) {
            first_nameError = 'Please input alphabet characters only for first Name';
        }

        //lastName
        if (!this.state.last_name) {
            last_nameError1 = 'Last Name Cant blank ';
        }

        if (!this.state.last_name.match(letters)) {
            last_nameError = 'Please input alphabet characters only for Last Name';
        }

        //email
        /*if (!this.state.email) {
            emailError = ' Email cant blank';
        }
        */
        if (!this.state.email.match(email_exp)) {
            emailError = 'Please input a valid email';
        }

        if (emailError || first_nameError || last_nameError || last_nameError1) {
            this.setState({ emailError, first_nameError, last_nameError, last_nameError1 });
            return false;
        }

        return true;
    };



    //on submit request

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        };

        const isValidFormdata = this.validate();

        if (isValidFormdata) {

            axios.post('http://localhost/ReactPHPCRUD/insert.php', obj)
                // .then(res => console.log(res.data));
                .then(res => {
                    this.setState({ alert_message: "success" })
                }).catch(error => {
                    this.setState({ alert_message: "error" });
                })
            //console.log(obj);
            //to refresh the page after insert
            this.setState({
                first_name: '',
                last_name: '',
                email: '',
                alert_message: '',
                first_nameError: '',
                last_nameError: '',
                last_nameError1: '',
                emailError: ''
            });
            // end of to refresh after insert
        }

    }




    render() {
        return (
            <div style={{ marginTop: 10 }}>

                <hr />
                {this.state.alert_message === "success" ? <SuccessAlert /> : null}
                {this.state.alert_message === "error" ? <ErrorAlert /> : null}

                <h3>Add New User Here</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control"
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName} />
                        <div className="text-danger"> {this.state.first_nameError}</div>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control"
                            value={this.state.last_name}
                            onChange={this.onChangeLastName} />
                        <div className="text-danger"> {this.state.last_nameError}</div>
                        <div style={{ color: "green" }}>{this.state.last_nameError1}</div>

                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                        <div className="text-danger"> {this.state.emailError}</div>

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}


export default Insert;