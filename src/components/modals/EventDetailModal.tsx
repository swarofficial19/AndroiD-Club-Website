import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { EventItem } from '../../types';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentRoll, setStudentRoll] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentRoll.trim()) return;
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 shadow-2xl shadow-[#3DDC84]/10 p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-[#3DDC84] hover:bg-[#3DDC84]/10 transition"
        >
          <X size={20} />
        </button>

        {/* Status & Category */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
          <span className="text-[#3DDC84] font-semibold">{event.category}</span>
          <span>·</span>
          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
            event.status === 'Upcoming' 
              ? 'bg-[#3DDC84]/20 text-[#3DDC84] border border-[#3DDC84]/30' 
              : 'bg-white/10 text-slate-400'
          }`}>
            {event.status}
          </span>
          <span>·</span>
          <span>VIT Bhopal Campus Event</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          {event.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
          {event.description}
        </p>

        {/* Event Quick Facts Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#050706] border border-[#3DDC84]/20 mb-6 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <Calendar size={15} className="text-[#3DDC84] shrink-0" />
            <div>
              <p className="text-slate-500 text-[10px] font-mono">Scheduled Date</p>
              <p className="font-semibold text-white">{event.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock size={15} className="text-[#3DDC84] shrink-0" />
            <div>
              <p className="text-slate-500 text-[10px] font-mono">Format</p>
              <p className="font-semibold text-white">{event.mode || 'In-Person Session'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin size={15} className="text-[#00FF87] shrink-0" />
            <div>
              <p className="text-slate-500 text-[10px] font-mono">Location</p>
              <p className="font-semibold text-white">{event.location || 'VIT Bhopal University'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Users size={15} className="text-[#3DDC84] shrink-0" />
            <div>
              <p className="text-slate-500 text-[10px] font-mono">Audience</p>
              <p className="font-semibold text-white">All University Students</p>
            </div>
          </div>
        </div>

        {/* Detailed Schedule */}
        {event.detailedAgenda && event.detailedAgenda.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
              Event Schedule & Agenda
            </h4>
            <div className="space-y-2.5">
              {event.detailedAgenda.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#101512] border border-[#3DDC84]/15 text-xs"
                >
                  <span className="font-mono text-[#3DDC84] font-semibold shrink-0 w-28">
                    {item.time}
                  </span>
                  <span className="text-slate-200">{item.topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Organized By */}
        <div className="p-4 rounded-2xl bg-[#101512] border border-[#3DDC84]/15 mb-6">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mb-1">Organized By</p>
          <p className="text-sm font-bold text-white">Android Club (SDC)</p>
          <p className="text-xs text-slate-400">VIT Bhopal University · Student Development Cell</p>
        </div>

        {/* Registration Form / Status */}
        {event.status === 'Upcoming' ? (
          <div className="p-5 rounded-2xl bg-[#101512] border border-[#3DDC84]/30">
            {registered ? (
              <div className="text-center py-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#3DDC84]/20 text-[#3DDC84] flex items-center justify-center mb-2 border border-[#3DDC84]/30">
                  <CheckCircle2 size={20} />
                </div>
                <h5 className="text-base font-bold text-white">Seat Reserved! (Demo Registration)</h5>
                <p className="text-xs text-slate-300 mt-1">
                  Confirmed for <strong>{studentName}</strong> (ID: {studentRoll}). An invitation pass has been simulated for your attendance at VIT Bhopal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#3DDC84]">
                  <Sparkles size={14} /> Reserve Your Seat (Demo Onboarding)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84]"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Roll Number / Registration ID"
                    value={studentRoll}
                    onChange={(e) => setStudentRoll(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition shadow-lg shadow-[#3DDC84]/20"
                >
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#101512] border border-[#3DDC84]/15 text-center text-xs text-slate-400 font-mono">
            This event concluded successfully. Archives, takeaways and workshop photos are preserved in the club archives.
          </div>
        )}
      </div>
    </div>
  );
};
