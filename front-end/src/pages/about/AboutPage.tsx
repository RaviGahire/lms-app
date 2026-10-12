import { AboutHero } from './components/AboutHero';
import { CTASection } from './components/CTASection';
import { InstitutionalTrust } from './components/InstitutionalTrust';
import { LeadershipTeam } from './components/LeadershipTeam';
import { LearningPhilosophy } from './components/LearningPhilosophy';
import { MastertrackChronicle } from './components/MastertrackChronicle';

export const AboutPage = () => {
  return (
    <div aria-label="about-page">
      {/* about hero */}
      <AboutHero />
      {/*Learning Philosophy  */}
      <LearningPhilosophy />
      {/* Mastertrack Chronicle */}
      <MastertrackChronicle />
      {/* Leadership Team */}
      <LeadershipTeam />
      {/*Institutional Trust  */}
      <InstitutionalTrust />
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
