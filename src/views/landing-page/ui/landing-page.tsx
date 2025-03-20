import React from 'react'
import Header from './header'
import HeroSections from './hero-section'
import BeforeAfter from './before-after'
import { PricingSection } from './pricing'
import { FAQSection } from './faq'
import { FooterSection } from './footer'

const LandingPage = () => {
    return (
        <>
            <Header />
            <HeroSections />
            <BeforeAfter />
            <PricingSection />
            <FAQSection />
            <FooterSection />
        </>
    )
}

export default LandingPage