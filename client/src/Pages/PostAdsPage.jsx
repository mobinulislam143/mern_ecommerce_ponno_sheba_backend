import React, { Fragment } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import PostAds from '../components/product/PostAds';

function PostAdsPage(props) {
    return (
        <Fragment>
            <MasterLayout>
                <PostAds/>
            </MasterLayout>
        </Fragment>
    );
}

export default PostAdsPage;