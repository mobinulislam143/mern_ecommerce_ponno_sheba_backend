import React, { Fragment } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import AdsDetails from '../components/product/AdsDetails';

function AdsDetailPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <AdsDetails/>
            </MasterLayout>
        </Fragment>
    );
}

export default AdsDetailPage;