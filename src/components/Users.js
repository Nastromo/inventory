import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserList from './UserList';


export class Users extends Component {
    render() {
        return (
            <div className="main-sde">
                <h2>Users</h2>
                <div className="flex mafgji">
                    <div className="flex al-cntr bas25">
                        <div className="derty">Add User</div>
                    </div>
                </div>
                <UserList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
