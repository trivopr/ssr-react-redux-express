import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { auth } from "../../reducers/authReducer";

export default (WrappedComponent) => {

    class RequireAuth extends Component {
        
        render() {
            let currentUrl = this.props.route.path;
            let redirectUrl = '/';

            switch (this.props.auth) {
                case false:
                    return <Redirect to= {redirectUrl} />;
                
                case null:
                    return <div>Loading....</div>

                default:
                    return <WrappedComponent {...this.props} />
            }
        }
    }
    
    const mapStateToProps = ({auth}) => {
        return { auth };
    }

    return connect(mapStateToProps)(RequireAuth);
}
