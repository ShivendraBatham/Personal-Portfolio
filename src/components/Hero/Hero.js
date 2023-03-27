import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a frontend developer having 1 year of experience in React Js, JavaScript, HTML and CSS. I'm ready to learn new technologies and increase my potential to work hard on each task.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/ShivendraBatham'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;