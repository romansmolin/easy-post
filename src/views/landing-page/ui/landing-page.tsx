import React from 'react'
import HeroSections from './hero-section'
import BeforeAfter from './before-after'
import { PricingSection } from './pricing'
import { FAQSection } from './faq'

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