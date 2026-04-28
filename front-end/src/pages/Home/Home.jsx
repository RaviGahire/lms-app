import { PlatformOverview } from './PlatformOverview';
import { HomeHero } from './HomeHero';
import { SuccessAndFeatures } from './SuccessAndFeatures'
import { MasterTrack } from './WhatIsMasterTrack';
import { Footer } from '../../components/Common/Footer'

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HomeHero />

      {/* What is master track */}
      <MasterTrack />

      {/* Success And Features Section */}
      <SuccessAndFeatures />

      {/* Platform Overview Section */}
      <PlatformOverview />

      {/* Footer*/}
      <Footer />
    </>
  );
};


