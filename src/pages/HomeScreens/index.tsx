import { Fragment } from 'react'
import Intro from './Intro'
import AboutUs from './AboutUs'
import ServicesSectionUI from './WhatWeDo'
import CaseStudySection from './CaseStudy'
import TeamSection from './Team'

function HomeScreen() {
    return (
        <Fragment>
            <Intro />
            <AboutUs />
            <ServicesSectionUI />
            <CaseStudySection />
            <TeamSection />
        </Fragment>
    )
}

export default HomeScreen