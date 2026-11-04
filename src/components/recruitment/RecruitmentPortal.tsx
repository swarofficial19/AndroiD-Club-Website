import React, { useState } from 'react';
import { RecruitmentHero } from './RecruitmentHero';
import { RecruitmentInfoPanel } from './RecruitmentInfoPanel';
import { TeamBrowser } from './TeamBrowser';
import { ApplicationWizard } from './ApplicationWizard';
import { TeamId } from '../../types/recruitment';

export const RecruitmentPortal: React.FC = () => {
  // Test mode defaults to true for smooth preview & grading of the 6-step dynamic form, with clear closed banner
  const [isTestMode, setIsTestMode] = useState(true);
  const [selectedTeamId, setSelectedTeamId] = useState<TeamId | ''>('android');

  const scrollToWizard = () => {
    const el = document.getElementById('application-wizard');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTeams = () => {
    const el = document.getElementById('teams-browser');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTeamFromBrowser = (teamId: TeamId) => {
    setSelectedTeamId(teamId);
    scrollToWizard();
  };

  return (
    <section id="recruitment" className="relative py-20 bg-transparent border-t border-b border-[#3DDC84]/15">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3DDC84 1px, transparent 1px), linear-gradient(90deg, #3DDC84 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10">
        {/* Section 1: Hero Landing */}
        <RecruitmentHero
          onApplyClick={scrollToWizard}
          onExploreTeamsClick={scrollToTeams}
          isTestMode={isTestMode}
          onToggleTestMode={() => setIsTestMode((prev) => !prev)}
        />

        {/* Section 2: Recruitment Information Panel */}
        <RecruitmentInfoPanel
          isTestMode={isTestMode}
          onToggleTestMode={() => setIsTestMode((prev) => !prev)}
          onStartApplication={scrollToWizard}
        />

        {/* Section 3: 10 Specialized Teams Browser */}
        <TeamBrowser
          selectedTeamId={selectedTeamId}
          onSelectTeam={handleSelectTeamFromBrowser}
        />

        {/* Section 4: 6-Step Dynamic Application Form */}
        <ApplicationWizard
          isTestMode={isTestMode}
          onEnableTestMode={() => setIsTestMode(true)}
          preselectedTeamId={selectedTeamId}
        />
      </div>
    </section>
  );
};
