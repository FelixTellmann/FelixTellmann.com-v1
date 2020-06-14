import React, { useState } from 'react';
import './index.scss';
import { Hero, LogoBanner } from 'components/Section';

console.log('asd'); /*?*/

function Index(ctx) {

    return (
        <>
            <Hero />
            <LogoBanner />
            <Hero />
        </>

    );
}

export default Index;