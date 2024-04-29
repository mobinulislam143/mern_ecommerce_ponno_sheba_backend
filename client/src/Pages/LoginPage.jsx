import React from 'react';
import Login from '../components/user/Login';
import Copyright from '../components/MasterLayout/Copyright';

function LoginPage(props) {
    return (
        <div>
            <Login/>
            <Copyright/>
        </div>
    );
}

export default LoginPage;