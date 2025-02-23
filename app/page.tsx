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
import Landing from '~/components/global/HeroComp/landing';
import Description from '~/components/global/DescriptionComp/description';
import Noise from '~/components/style/Noise';


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
    <div className='relative overflow-hidden'>
      <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={25}
  />
      <AnimatePresence mode='wait'>
              {isLoading && <Loader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      {/* <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} /> */}
    </div>
  );
}
