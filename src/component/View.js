import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecordList from './RecordList';

class View extends Component {

    constructor(props) {
        super(props);
        this.state = { students: [] };
    }

    componentDidMount() {
        axios.get('http://localhost/ReactPHPCRUD/list.php')
            .then(Response => {
                this.setState({ students: Response.data });

            })
            .catch(function (error) {
                console.log(error);
            })
    }


    userList() {
        return this.state.students.map(function (object, i) {
            return <RecordList obj={object} key={i} />
        });

    }


    render() {
        return (

            <div>
                <h1>welcome to View page</h1>
                <Link to={"/insert"} style={{ marginTop: 14 }} className="btn btn-primary"> + Add New Record</Link>
                <div className="text-center table-responsive" xs={12} md={12} lg={12}>
                    <table data="" className="table" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>S_id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.userList()}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default View;