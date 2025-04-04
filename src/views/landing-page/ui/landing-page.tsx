import React from 'react'

import BeforeAfter from './before-after'
import { FAQSection } from './faq'
import HeroSections from './hero-section'
import { PricingSection } from './pricing'

const LandingPage = () => {
    return (
        <>
            <HeroSections />
            <BeforeAfter />
            <PricingSection />
            <FAQSection />
        </>
    )
}

export default LandingPage
