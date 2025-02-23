"use client"

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '~/components/global/LoaderComp/loader';


export default function Page() {

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        console.log('Setting isLoading to false');
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
              {isLoading && <Loader />}
      </AnimatePresence>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
