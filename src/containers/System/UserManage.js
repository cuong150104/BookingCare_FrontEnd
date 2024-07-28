import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        console.log('get user from node,js', response);
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }


    }


    render() {
        let arrUsers = this.state.arrUsers;
        console.log(">> check 22", arrUsers);
        return (
            <div className='users-container'>
                <div className='title text-center'>Manage users</div>
                <div className='users-table mt-3 mx-3'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>LAddress</th>
                            <th>Acction</th>

                        </tr>

                        {arrUsers && arrUsers.map((item, index) => {
                            console.log(">> check ====", item, index);
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i class="fa-solid fa-pen"></i></button>
                                        <button className='btn-delete'><i class="fa-solid fa-trash"></i></button>
                                    </td>

                                </tr>
                            )
                        })}


                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
