import React, { Component } from 'react';
import { fetchAdmins } from '../actions';
import {connect} from 'react-redux';
import requireAuth from "../components/hocs/requireAuth";

class AdminsListPage extends Component {

    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        if (!this.props.admins) {
            return;
        }
        return this.props.admins.map((admin) => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render() {
        return (
            <div>
                <h2>List Administrator</h2>
                <ul>{this.renderAdmins()}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        admins: state.admins
    }
}

export const loadData = (store) => {
    return store.dispatch(fetchAdmins());
}

export default {
    component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsListPage)),
    loadData
};