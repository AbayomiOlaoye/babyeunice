import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Hero } from './components/Hero';
import { ProgressSection } from './components/ProgressSection';
import { StorySection } from './components/StorySection';
import { DonationSection } from './components/DonationSection';
import { AccountDetails } from './components/AccountDetails';
import { RecentDonors } from './components/RecentDonors';
import { MedicalDetails } from './components/MedicalDetails';
import { Footer } from './components/Footer';
import { MotionSection } from './components/MotionSection';

export default function App() {
  const [totalRaised, setTotalRaised] = useState(933885);
  const goal = 19000000;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-blue-50">
      <ToastContainer />
      <MotionSection>
        <Hero />
      </MotionSection>

      <MotionSection>
        <ProgressSection totalRaised={totalRaised} goal={goal} />
      </MotionSection>

      <MotionSection>
        <StorySection />
      </MotionSection>

      <MotionSection>
        <DonationSection onDonationSuccess={(amount) => setTotalRaised(prev => prev + amount)} />
      </MotionSection>

      <MotionSection>
        <MedicalDetails />
      </MotionSection>

      <MotionSection>
        <AccountDetails />
      </MotionSection>

      <MotionSection>
        <RecentDonors />
      </MotionSection>

      <MotionSection>
        <Footer />
      </MotionSection>
    </div>
  );
}
