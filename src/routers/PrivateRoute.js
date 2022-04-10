import React from 'react';
import {connect} from 'react-redux'; 
import {Route, Redirect}  from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated, 
    component: Component,
    ...restOfProps
}) => (
    <Route {...restOfProps} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header/>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // boolean true if authenticated
});

export default connect(mapStateToProps)(PrivateRoute);