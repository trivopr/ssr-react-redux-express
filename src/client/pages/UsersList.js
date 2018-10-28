import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';

class UsersList extends Component {

    componentWillMount() {
        this.props.actions.fetchUser();
    }

    renderUser () {
        let arr = this.props.users.map((item, key) => {
            return (
                <li key={key}>{item.name}</li>
            )
        });
        return arr;
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>User List</title>
                    <meta property="og:title" content="mẫu ánh kim dm 079" />
                </Helmet>
                <ul>
                    {this.renderUser()}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({fetchUser}, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export const loadData = (store) => {
    return store.dispatch(fetchUser());
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDispatchToProps)(UsersList)
}
