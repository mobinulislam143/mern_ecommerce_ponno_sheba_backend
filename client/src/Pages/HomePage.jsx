import React, { Fragment } from 'react';
import Home from '../components/Home/Home';
import MasterLayout from '../components/MasterLayout/MasterLayout';

function HomePage(props) {
    return (
        <>
           <Fragment>
                <MasterLayout>
                    <Home/>
                </MasterLayout>
           </Fragment>

        </>
    );
}

export default HomePage;