import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Domains } from './components/Domains';
import { Events } from './components/Events';
import { RecruitmentPortal } from './components/recruitment/RecruitmentPortal';
import { Blogs } from './components/Blogs';
import { DroidCoins } from './components/DroidCoins';
import { Team } from './components/Team';
import { Sponsors } from './components/Sponsors';
import { CommunitySocial } from './components/CommunitySocial';
import { JoinCommunity } from './components/JoinCommunity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EventDetailModal } from './components/modals/EventDetailModal';
import { JoinClubModal } from './components/modals/JoinClubModal';
import { FlyingBugRoid } from './components/FlyingBugRoid';
import { CyberBackgroundCanvas } from './components/CyberBackgroundCanvas';
import { IntroVideoScreen } from './components/IntroVideoScreen';
import { BigBugRoidGreeting } from './components/BigBugRoidGreeting';
import { EventItem } from './types';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Cinematic Intro Flow:
  // 1. 'video': 3-4 second video intro displaying just "Android Club"
  // 2. 'greeting': Big Bugroid appears front & center, waves Hi, then minimizes and flies to bottom right
  // 3. 'ready': Full interactive showcase with dynamic multi-directional FlyingBugRoid companion
  const [introStage, setIntroStage] = useState<'video' | 'greeting' | 'ready'>('video');

  const handleExploreJourney = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToRecruitment = () => {
    const el = document.getElementById('recruitment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsJoinModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#F8FAFC] flex flex-col relative selection:bg-[#3DDC84]/30 selection:text-white">
      {/* Whole-website Dynamic Cyber Background (particles, matrix grid, laser scanline) */}
      <CyberBackgroundCanvas />

      {/* 1. Cinematic Intro Video Screen (3.5s auto-fade displaying just "Android Club") */}
      <AnimatePresence>
        {introStage === 'video' && (
          <IntroVideoScreen onComplete={() => setIntroStage('greeting')} />
        )}
      </AnimatePresence>

      {/* 2. Big BugRoid Full-Screen Greeting & Fly-to-Corner Transition */}
      <AnimatePresence>
        {introStage === 'greeting' && (
          <BigBugRoidGreeting onComplete={() => setIntroStage('ready')} />
        )}
      </AnimatePresence>

      {/* Sticky Top Navigation */}
      <Navbar onOpenJoinModal={handleGoToRecruitment} />

      {/* Main Single-Page Showcase Flow */}
      <main className="flex-1 relative z-10">
        {/* Section 2 & 3: Hero Section & Statistics */}
        <Hero 
          onOpenJoinModal={handleGoToRecruitment}
          onExploreProjects={handleExploreJourney}
        />

        {/* Section 4: About Us ("WHO WE ARE") */}
        <About onOpenJoinModal={handleGoToRecruitment} />

        {/* Section 5: Domains ("WHAT DO WE STAND FOR?") */}
        <Domains />

        {/* Section 7: Events and Activities ("EVENTS THAT BRING US TOGETHER") */}
        <Events onSelectEvent={(event) => setSelectedEvent(event)} />

        {/* Dynamic Recruitment & Application Portal */}
        <RecruitmentPortal />

        {/* Section 8: Educational Blogs / Learning Hub ("LEARN. EXPLORE. BUILD.") */}
        <Blogs />

        {/* Section 9: Special Feature – Droid Coins ("INTRODUCING DROID COINS") */}
        <DroidCoins />

        {/* Section 6: Leadership and Core Team ("MEET THE PEOPLE BEHIND THE COMMUNITY") */}
        <Team />

        {/* Section 10: Sponsors and Partners ("OUR SPONSORS & PARTNERS") */}
        <Sponsors />

        {/* Section 11: Community and Social Media ("CONNECT WITH OUR COMMUNITY") */}
        <CommunitySocial />

        {/* Community Call-to-Action */}
        <JoinCommunity onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* Section 12: Contact Section ("LET'S BUILD SOMETHING TOGETHER") */}
        <Contact />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Interactive Modals */}
      <EventDetailModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />

      <JoinClubModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />

      {/* 3. Dynamic Multi-Directional Flying Mascot Companion (active once greeting completes) */}
      {introStage === 'ready' && <FlyingBugRoid />}
    </div>
  );
}
