import React, { useState, Fragment } from 'react';
import './index.scss';
import { Hero, LogoBanner } from 'components/Page/Sections';

function Index(ctx) {

    return (
        <Fragment>
            <Hero />
            <LogoBanner />
        </Fragment>

    );
}

export default Index;