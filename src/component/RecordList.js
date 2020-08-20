import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom";




class RecordList extends Component {
    //to call delete button
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }

    }

    delete() {
        axios.get('http://localhost/ReactPHPCRUD/delete.php?id=' + this.props.obj.s_id)
            //.then(console.log('Deleted'))
            .then(
                this.setState({ redirect: true })
            )
            .catch(err => console.log(err))

    }
    //end of to call delete button


    render() {
        //to redirect the pafe after deletion 
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/view' />
        }
        //end of to redirect the pafe after deletion 

        return (
            <tr>
                <td>{this.props.obj.s_id}</td>
                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link to={"/edit/" + this.props.obj.s_id} className="btn btn-info">View</Link>
                    <Link to={"/edit/" + this.props.obj.s_id} className="btn btn-primary ml-2">Edit</Link>
                    <button onClick={() => { if (window.confirm('Are you sure to delete this record?')) { this.delete() }; }} className="btn btn-danger ml-2">Delete</button></td>

            </tr >

        );
    }
}


export default RecordList;