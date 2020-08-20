import React from 'react';
import axios from 'axios';


//export default class Test extends React.Component {
export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            //fields = { fields: { first_name: '' } },
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //first_name
        if (!fields["first_name"]) {
            formIsValid = false;
            errors["first_name"] = " first_name Cannot be empty";
        }

        if (typeof fields["first_name"] !== "undefined") {
            if (!fields["first_name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["first_name"] = "Only letters";
            }
        }
        //last_name
        if (!fields["last_name"]) {
            formIsValid = false;
            errors["last_name"] = " last_name Cannot be empty";
        }

        if (typeof fields["last_name"] !== "undefined") {
            if (!fields["last_name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["last_name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        };

        if (this.handleValidation()) {
            //alert("Form submitted");
            axios.post('http://localhost/ReactPHPCRUD/insert.php', obj)
                .then(res => console.log(res.data));

        } else {
            alert("Form has errors.")
        }



    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.contactSubmit.bind(this)}>
                    <div className="form-group">
                        <input className="form-control" type="text" size="30" placeholder="First Name"
                            onChange={this.handleChange.bind(this, "first_name")}
                            value={this.state.fields["first_name"]} />
                        <span style={{ color: "red" }}>{this.state.errors["first_name"]}</span>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" size="30" placeholder="Last Name"
                            onChange={this.handleChange.bind(this, "last_name")}
                            value={this.state.fields["last_name"]} />
                        <span style={{ color: "red" }}>{this.state.errors["last_name"]}</span>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" size="30" placeholder="Email"
                            onChange={this.handleChange.bind(this, "email")}
                            value={this.state.fields["email"]} />
                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}

