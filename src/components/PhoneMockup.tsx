import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Bell, 
  Camera, 
  CheckCircle2, 
  Heart, 
  Activity, 
  Droplet, 
  Sparkles
} from 'lucide-react';

interface PhoneMockupProps {
  type: 'finance' | 'campus' | 'recycling' | 'health';
  className?: string;
  interactive?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  type, 
  className = '',
}) => {
  // Interactive mini-states for demonstration
  const [activeTab, setActiveTab] = useState<'day' | 'week' | 'month'>('month');
  const [scanState, setScanState] = useState<'ready' | 'detected'>('detected');
  const [waterCups, setWaterCups] = useState(6);

  return (
    <div className={`relative mx-auto w-full max-w-[310px] rounded-[38px] p-2.5 bg-gradient-to-b from-[#1E2620] via-[#101512] to-[#050806] border border-[#3DDC84]/25 shadow-2xl shadow-black ${className}`}>
      {/* Outer Phone Bezel & Speaker Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#000000] rounded-full z-30 flex items-center justify-center gap-2">
        <div className="w-10 h-1 bg-white/20 rounded-full" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#101512] border border-[#3DDC84]/20 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#00FF87]" />
        </div>
      </div>

      {/* Screen Frame */}
      <div className="relative rounded-[30px] overflow-hidden bg-[#000000] text-slate-100 h-[480px] flex flex-col border border-[#3DDC84]/15 select-none font-sans">
        
        {/* Status Bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] text-slate-400 font-medium">
          <span className="font-mono">09:41</span>
          <div className="flex items-center gap-1.5">
            <Wifi size={12} className="text-[#3DDC84]" />
            <span className="text-[10px] text-[#00FF87] font-semibold">5G</span>
            <Battery size={13} className="text-[#3DDC84]" />
          </div>
        </div>

        {/* Dynamic App Content */}
        {type === 'finance' && (
          <div className="flex-1 flex flex-col p-4 overflow-y-auto scrollbar-none text-left">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Student Wallet</p>
                <h4 className="text-lg font-bold text-white tracking-tight">₹14,850<span className="text-xs text-[#3DDC84] font-normal">.00</span></h4>
              </div>
              <button 
                type="button" 
                onClick={() => alert('Quick Add Transaction is simulated in this preview!')}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00FF87] to-[#3DDC84] text-black flex items-center justify-center hover:opacity-90 transition shadow-md shadow-[#3DDC84]/30"
              >
                <Plus size={16} strokeWidth={3} />
              </button>
            </div>

            {/* Income / Expense Pills */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2.5 rounded-xl bg-[#0A0D0B] border border-[#3DDC84]/20">
                <div className="flex items-center gap-1 text-[10px] text-[#00FF87] mb-0.5">
                  <ArrowDownLeft size={11} /> Income
                </div>
                <div className="text-xs font-bold text-white font-mono">₹22,000</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0A0D0B] border border-[#3DDC84]/20">
                <div className="flex items-center gap-1 text-[10px] text-[#3DDC84] mb-0.5">
                  <ArrowUpRight size={11} /> Spent
                </div>
                <div className="text-xs font-bold text-white font-mono">₹7,150</div>
              </div>
            </div>

            {/* Spending Chart Visualization */}
            <div className="p-3 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-200">Monthly Spending</span>
                <div className="flex gap-1 text-[10px] bg-black/60 p-0.5 rounded-md border border-white/5">
                  {(['day', 'week', 'month'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`px-1.5 py-0.5 rounded capitalize ${activeTab === t ? 'bg-[#3DDC84] text-black font-semibold' : 'text-slate-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bar visualization in Greens */}
              <div className="h-16 flex items-end justify-between gap-1.5 pt-2 px-1">
                {[
                  { label: 'Food', h: '75%', color: 'bg-[#00FF87]' },
                  { label: 'Books', h: '45%', color: 'bg-[#3DDC84]' },
                  { label: 'Travel', h: '60%', color: 'bg-[#22C55E]' },
                  { label: 'Cloud', h: '30%', color: 'bg-[#10B981]' },
                  { label: 'Misc', h: '50%', color: 'bg-[#059669]' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-white/5 rounded-t-sm h-full flex items-end">
                      <div className={`w-full rounded-t ${bar.color}`} style={{ height: bar.h }} />
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions list */}
            <div>
              <p className="text-[11px] font-semibold text-slate-300 mb-1.5">Recent Campus Expenses</p>
              <div className="space-y-1.5">
                {[
                  { title: 'Campus Canteen', sub: 'Lunch & Chai', cost: '-₹180', time: 'Today, 1:15 PM' },
                  { title: 'Android Book Store', sub: 'Kotlin Guide', cost: '-₹650', time: 'Yesterday' },
                  { title: 'Stipend Credit', sub: 'Lab Assistant', cost: '+₹4,000', time: 'Nov 01', isCredit: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-[#3DDC84]/10">
                    <div>
                      <p className="text-xs font-medium text-white">{item.title}</p>
                      <p className="text-[9px] text-slate-400">{item.time} · {item.sub}</p>
                    </div>
                    <span className={`text-xs font-mono font-bold ${item.isCredit ? 'text-[#00FF87]' : 'text-slate-200'}`}>
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {type === 'campus' && (
          <div className="flex-1 flex flex-col p-4 overflow-y-auto scrollbar-none text-left">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] text-[#00FF87] font-semibold font-mono">CAMPUS CONNECT</p>
                <h4 className="text-sm font-bold text-white">Student Portal</h4>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#3DDC84]/15 flex items-center justify-center text-[#3DDC84]">
                <Bell size={13} />
              </div>
            </div>

            {/* Live Club Notice Banner */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-[#3DDC84]/15 to-[#00FF87]/10 border border-[#3DDC84]/30 mb-3">
              <div className="flex items-center gap-1.5 text-[10px] text-[#00FF87] font-semibold mb-1">
                <Sparkles size={11} /> Android Club Announcement
              </div>
              <p className="text-xs font-bold text-white">Bootcamp Registrations Open</p>
              <p className="text-[10px] text-slate-300 mt-0.5">3-day Jetpack Compose hands-on workshop in Lab 3.</p>
            </div>

            {/* Class schedule quick card */}
            <div className="p-3 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/15 mb-3">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 mb-2">
                <span>Today&apos;s Schedule</span>
                <span className="text-[10px] text-[#00FF87]">3 Classes</span>
              </div>
              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-black/40 border-l-2 border-[#00FF87]">
                  <p className="text-[11px] font-semibold text-white">Mobile Application Architecture</p>
                  <p className="text-[9px] text-slate-400 font-mono">10:30 AM · Hall 204</p>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border-l-2 border-[#3DDC84]">
                  <p className="text-[11px] font-semibold text-white">Distributed Database Systems</p>
                  <p className="text-[9px] text-slate-400 font-mono">02:00 PM · Lab 2</p>
                </div>
              </div>
            </div>

            {/* Channels */}
            <p className="text-[11px] font-semibold text-slate-300 mb-1.5">Active Channels</p>
            <div className="space-y-1">
              {[
                { name: '#android-dev', active: '18 students online' },
                { name: '#hackathon-teams', active: '4 posts today' },
                { name: '#lost-and-found', active: '1 query open' },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02]">
                  <span className="text-xs font-medium text-slate-200">{c.name}</span>
                  <span className="text-[9px] text-[#3DDC84] font-mono">{c.active}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'recycling' && (
          <div className="flex-1 flex flex-col p-4 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-[#00FF87] font-semibold tracking-wider uppercase font-mono">EcoSort AI Scanner</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3DDC84]/20 text-[#00FF87] font-mono">TFLite 96.2%</span>
            </div>

            {/* Camera Viewfinder Mock */}
            <div className="relative flex-1 rounded-2xl bg-gradient-to-b from-[#101512] to-[#050806] border border-[#3DDC84]/25 flex flex-col items-center justify-center p-3 overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid opacity-30" />
              
              {/* Scan Reticle */}
              <div className="relative w-36 h-36 border-2 border-dashed border-[#00FF87]/80 rounded-2xl flex flex-col items-center justify-center p-2 bg-[#3DDC84]/5">
                <div className="w-16 h-16 rounded-xl bg-black/40 border border-[#3DDC84]/30 flex items-center justify-center mb-1">
                  <span className="text-2xl">☕</span>
                </div>
                <div className="text-[10px] font-bold text-white bg-black/80 px-2 py-0.5 rounded-full border border-[#00FF87]/30">
                  Paper Coffee Cup
                </div>
              </div>

              {/* Classification Result Card */}
              <div className="w-full mt-3 p-2.5 rounded-xl bg-black/90 backdrop-blur-md border border-[#3DDC84]/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#00FF87]" />
                    <span className="text-xs font-bold text-white">Dry Recyclable</span>
                  </div>
                  <span className="text-[10px] text-[#00FF87] font-mono">+15 Pts</span>
                </div>
                <p className="text-[9px] text-slate-300 mt-1">
                  Dispose in <strong className="text-[#3DDC84]">Green Bin (Near Canteen Exit)</strong>
                </p>
              </div>
            </div>

            {/* Bottom button */}
            <div className="mt-3 flex gap-2">
              <button 
                type="button"
                onClick={() => setScanState(scanState === 'ready' ? 'detected' : 'ready')}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#00FF87] to-[#3DDC84] text-black text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Camera size={13} /> {scanState === 'detected' ? 'Rescan Item' : 'Analyzing...'}
              </button>
            </div>
          </div>
        )}

        {type === 'health' && (
          <div className="flex-1 flex flex-col p-4 overflow-y-auto scrollbar-none text-left">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] text-[#00FF87] font-semibold font-mono">STUDENT WELLNESS</p>
                <h4 className="text-sm font-bold text-white">Daily Vitality</h4>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#3DDC84]/15 text-[#3DDC84] flex items-center justify-center">
                <Heart size={13} />
              </div>
            </div>

            {/* Step count circular indicator */}
            <div className="p-3 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400">Step Activity</p>
                <p className="text-base font-bold text-white font-mono">6,840 <span className="text-[10px] text-slate-400 font-normal">/ 10,000</span></p>
                <p className="text-[9px] text-[#00FF87]">68% Goal Achieved</p>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-[#00FF87] border-r-[#3DDC84] flex items-center justify-center text-[10px] font-bold text-white font-mono">
                68%
              </div>
            </div>

            {/* Water Tracker in Greens */}
            <div className="p-3 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-200">
                  <Droplet size={13} className="text-[#00FF87]" />
                  <span>Hydration Target</span>
                </div>
                <span className="text-[10px] font-mono text-[#00FF87]">{waterCups * 250}ml / 2500ml</span>
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                {[...Array(8)].map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`flex-1 h-3 rounded-sm ${idx < waterCups ? 'bg-[#00FF87]' : 'bg-white/10'}`} 
                  />
                ))}
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <button 
                  type="button" 
                  onClick={() => setWaterCups(Math.max(1, waterCups - 1))}
                  className="px-2 py-0.5 rounded bg-white/5 text-slate-300 hover:bg-white/10"
                >
                  - 250ml
                </button>
                <span className="text-slate-400 font-mono">{waterCups} Logged</span>
                <button 
                  type="button" 
                  onClick={() => setWaterCups(Math.min(10, waterCups + 1))}
                  className="px-2 py-0.5 rounded bg-[#3DDC84]/20 text-[#00FF87] font-bold hover:bg-[#3DDC84]/30"
                >
                  + Add Glass
                </button>
              </div>
            </div>

            {/* Ergonomic Screen Break Timer */}
            <div className="p-2.5 rounded-xl bg-[#3DDC84]/10 border border-[#3DDC84]/20 flex items-center gap-2.5">
              <Activity size={16} className="text-[#00FF87] shrink-0" />
              <div>
                <p className="text-[11px] font-semibold text-white">20-20-20 Screen Rest</p>
                <p className="text-[9px] text-slate-300">Next eye strain pause in 14 minutes</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Android Gesture Bar */}
        <div className="h-4 flex items-center justify-center pb-2">
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};
