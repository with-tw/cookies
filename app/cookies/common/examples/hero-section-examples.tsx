import {
  HeroSection,
  HeroSectionCTAContainer,
  HeroSectionCTAPrimaryAction,
  HeroSectionCTASecondaryAction,
  HeroSectionDescription,
  HeroSectionHeadline,
} from '@/components/cookies/hero-section';

export const HeroSectionExample = () => (
  <HeroSection>
    <HeroSectionHeadline>This is a hero section</HeroSectionHeadline>
    <HeroSectionDescription>
      This is a hero section description, this component helps define a
      consistent patter for adding hero sections.
    </HeroSectionDescription>
    <HeroSectionCTAContainer>
      <HeroSectionCTAPrimaryAction>Get Started</HeroSectionCTAPrimaryAction>
      <HeroSectionCTASecondaryAction>Learn more</HeroSectionCTASecondaryAction>
    </HeroSectionCTAContainer>
  </HeroSection>
);
