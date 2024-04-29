import React, { Fragment } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import AllAds from '../components/product/AllAds';

function AllAdsPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <AllAds/>
            </MasterLayout>
        </Fragment>
    );
}

export default AllAdsPage;