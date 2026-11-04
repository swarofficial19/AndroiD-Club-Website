import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Download, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { OFFICIAL_EVENTS } from '../data/events';
import { EventItem } from '../types';
import { fadeIn, staggerContainer, cardHoverVariants } from '../utils/motion';

interface EventsProps {
  onSelectEvent?: (event: EventItem) => void;
}

export const Events: React.FC<EventsProps> = ({ onSelectEvent }) => {
  const [filterYear, setFilterYear] = useState<'All' | '2026' | '2025' | '2024' | '2023'>('All');
  const [selectedEventModal, setSelectedEventModal] = useState<EventItem | null>(null);

  const filteredEvents = OFFICIAL_EVENTS.filter((e) => {
    if (filterYear === 'All') return true;
    return e.year.toString() === filterYear;
  });

  // Utility to generate and trigger .ics file download for calendar integration
  const handleDownloadIcs = (event: EventItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Android Club VIT Bhopal//Events//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title} - Android Club VIT Bhopal`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location || 'VIT Bhopal University'}`,
      `DTSTART;VALUE=DATE:20260401`,
      `DTEND;VALUE=DATE:20260402`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}-invite.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="events" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-semibold text-[#3DDC84] mb-3 font-mono">
            <Sparkles size={14} />
            <span>COMMUNITY MILESTONES</span>
            <span className="text-slate-500">·</span>
            <span className="text-white">VIT BHOPAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            EVENTS THAT BRING US TOGETHER
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            From high-energy competitive coding tussles to hands-on Android bootcamps and annual college fest experiences, our events foster real connection, problem-solving, and memories.
          </p>
        </motion.div>

        {/* Chronological Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {(['All', '2026', '2025', '2024', '2023'] as const).map((year) => (
            <button
              key={year}
              onClick={() => setFilterYear(year)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                filterYear === year
                  ? 'bg-[#3DDC84] text-black font-bold shadow-lg shadow-[#3DDC84]/20'
                  : 'bg-[#0A0D0B] text-slate-400 border border-[#3DDC84]/20 hover:text-white hover:border-[#3DDC84]/40'
              }`}
            >
              {year === 'All' ? 'All Timeline' : `${year} Events`}
            </button>
          ))}
          <span className="text-xs text-slate-500 font-mono ml-auto hidden sm:inline">
            Chronological Order (Recent First)
          </span>
        </div>

        {/* Responsive Events Grid (Reverse Chronological) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                variants={cardHoverVariants}
                whileHover="hover"
                className="rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/20 overflow-hidden text-left flex flex-col justify-between glow-card hover:border-[#3DDC84]/50 shadow-lg"
              >
                <div>
                  {/* Event Top Banner */}
                  <div className="p-6 bg-gradient-to-b from-[#141A16] to-[#0A0D0B] border-b border-[#3DDC84]/15 relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-lg bg-[#000000]/80 border border-[#3DDC84]/30 text-[11px] font-mono font-semibold text-[#00FF87]">
                        {event.category}
                      </span>

                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider ${
                          event.status === 'Upcoming'
                            ? 'bg-[#3DDC84]/20 text-[#3DDC84] border border-[#3DDC84]/40 shadow-[0_0_8px_rgba(61,220,132,0.3)]'
                            : 'bg-white/5 text-slate-400 border border-white/10'
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#3DDC84] font-mono mb-2">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {event.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#050706] border border-[#3DDC84]/15 text-xs text-slate-400 space-y-2 font-mono">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#3DDC84] shrink-0" />
                        <span className="truncate">{event.location || 'VIT Bhopal University'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-[#00FF87] shrink-0" />
                        <span>Format: {event.mode || 'In-Person Session'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#3DDC84]/10 mt-2">
                  <button
                    onClick={() => {
                      if (onSelectEvent) {
                        onSelectEvent(event);
                      } else {
                        setSelectedEventModal(event);
                      }
                    }}
                    className="text-xs font-semibold text-[#3DDC84] hover:text-[#00FF87] flex items-center gap-1 transition"
                  >
                    <span>View Agenda</span>
                    <ChevronRight size={14} />
                  </button>

                  {event.status === 'Upcoming' && (
                    <button
                      onClick={(e) => handleDownloadIcs(event, e)}
                      title="Download .ics Calendar Invite"
                      className="px-3 py-1.5 rounded-xl bg-[#101512] hover:bg-[#3DDC84]/20 border border-[#3DDC84]/30 text-xs font-mono text-[#00FF87] inline-flex items-center gap-1.5 transition"
                    >
                      <Download size={13} />
                      <span>Add to Cal</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for viewing detailed agenda */}
        <AnimatePresence>
          {selectedEventModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-xl rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/30 shadow-2xl p-6 sm:p-8 text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#3DDC84]/15 border border-[#3DDC84]/30 text-xs font-mono text-[#3DDC84]">
                    {selectedEventModal.category} · {selectedEventModal.date}
                  </span>
                  <button 
                    onClick={() => setSelectedEventModal(null)}
                    className="text-slate-400 hover:text-white p-1 rounded-lg"
                  >
                    ✕
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {selectedEventModal.title}
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {selectedEventModal.description}
                </p>

                {selectedEventModal.detailedAgenda && selectedEventModal.detailedAgenda.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                      Event Schedule & Flow:
                    </p>
                    <div className="space-y-2.5">
                      {selectedEventModal.detailedAgenda.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-[#101512] border border-[#3DDC84]/15 text-xs"
                        >
                          <span className="font-mono text-[#3DDC84] font-semibold shrink-0 w-24">
                            {item.time}
                          </span>
                          <span className="text-slate-200">{item.topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-[#3DDC84]/15">
                  <span className="text-xs text-slate-500 font-mono">
                    VIT Bhopal University
                  </span>
                  <button
                    onClick={() => setSelectedEventModal(null)}
                    className="px-5 py-2 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black font-semibold text-xs transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
