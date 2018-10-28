import React, {Component} from 'react';
import {fetchUser} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';

class Home extends Component {
    
    render() {
        return (
            <div className="center-align" style={{marginTop: "200px"}}>
                <Helmet>
                    <title>Welcome To Home Page</title>
                    <meta property="og:title" content="Home Page" />
                </Helmet>
                <h3> Welcome Home Component width nodemon 2</h3>
                <button onClick={() => console.log('DZOOO')} className="waves-light btn">CLICK ME</button>
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

export default {
    component:  connect(mapStateToProps, mapDispatchToProps)(Home)
}