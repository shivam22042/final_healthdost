import { useState } from 'react'

/**
 * Health Dashboard – base layout from Figma.
 * Sidebar (right): expandable via menu_stack icon. Collapsed: icons only. Expanded: icons + labels (Space Grotesk 20px).
 */
const ICON_SIZE = 24;
const LOGO_WIDTH = 36;
const LOGO_HEIGHT = 50;

function HealthCard({ icon, iconBg, title, value, unit, status, statusBg, statusText }) {
  return (
    <div className="h-[120px] bg-white rounded-xl shadow-md p-3 flex flex-col justify-between min-w-0 flex-1">
      <div className="flex items-center gap-2 shrink-0">
        <div className={`w-[34px] h-[34px] rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
          <img src={icon} alt="" className="w-[22px] h-[22px] object-contain" />
        </div>
        <span className="font-['Mulish'] text-[9px] leading-[13px] text-[#2d3035] font-bold flex-1 text-right">
          {title}
        </span>
      </div>
      <div className="flex items-baseline gap-1 shrink-0">
        <span className="font-['Mulish'] text-[#2d3035] font-bold text-base">{value}</span>
        <span className="font-['Mulish'] text-slate-500 text-xs">{unit}</span>
      </div>
      <div className={`w-fit shrink-0 flex items-center justify-center py-1 px-2 rounded-md ${statusBg} ${statusText}`}>
        <span className="font-['Mulish'] text-[9px] font-medium leading-tight">
          {status}
        </span>
      </div>
    </div>
  )
}

const navItems = [
  { id: 'menu', src: '/icons/menu_stack.png', alt: 'Menu', label: 'Close' },
  { id: 'home', src: '/icons/home.png', alt: 'Home', label: 'Home' },
  { id: 'appointments', src: '/icons/appointments.png', alt: 'Appointments', label: 'Appointment' },
  { id: 'cloud', src: '/icons/cloud.png', alt: 'Cloud', label: 'Cloud' },
  { id: 'machine', src: '/icons/machine.png', alt: 'Machines', label: 'Syringe' },
];

export default function Dashboard({ onLogout }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [diagnosisText, setDiagnosisText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )
  const [height, setHeight] = useState(180) // cm
  const [weight, setWeight] = useState(90) // kg
  const bmi = height > 0 ? weight / ((height / 100) ** 2) : 0
  const bmiIndicatorPosition = Math.min(100, Math.max(0, ((bmi - 16) / (40 - 16)) * 100))
  // Underweight: BMI < 18.5 | Healthy: 18.5 <= BMI < 25 | Overweight: 25 <= BMI < 30 | Obese: 30 <= BMI
  const bmiStatus = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy' : bmi < 30 ? 'Overweight' : 'Obese'

  const handleNavClick = (id) => {
    if (id === 'menu') setIsExpanded((prev) => !prev)
  }

  return (
    <div className="relative flex h-full w-full min-h-0 bg-[#314490]">
      {/* Main content area – always excludes 72px right gutter (sidebar slot) for layout continuity */}
      <main className="flex-1 min-w-0 flex flex-col p-5 overflow-auto">
        <div className="flex-1 min-h-0 bg-[#DCF7DE] rounded-3xl p-4 flex gap-4">
          {/* Left: header + health metric cards */}
          <div className="flex-1 flex flex-col min-w-0 gap-2 min-h-0">
            <div className="shrink-0 flex justify-between items-center">
              <h2 className="font-['Space_Grotesk'] text-[36px] leading-[42px] text-[#2d3035] font-semibold">
                Health Overview
              </h2>
              <span className="font-['Space_Grotesk'] text-slate-500 text-sm">
                August 12, 2021
              </span>
            </div>
            {/* Health metric cards + Live Heart Rate + Upcoming Appointment */}
            <div className="flex flex-col gap-2 flex-1 min-h-0 justify-end">
            <div className="flex gap-3 min-h-0 shrink-0">
              <HealthCard
                icon="/icons/blood_pressure.png"
                iconBg="bg-[#FFFBEB]"
                title="Blood Pressure"
                value="120/80"
                unit="mmHg"
                status="Normal"
                statusBg="bg-[#FFFBEB]"
                statusText="text-orange-600"
              />
              <HealthCard
                icon="/icons/temperature.png"
                iconBg="bg-[#F5F3FF]"
                title="Temperature"
                value="96"
                unit="°F"
                status="Normal"
                statusBg="bg-[#F5F3FF]"
                statusText="text-purple-600"
              />
              <HealthCard
                icon="/icons/blood_oxygen.png"
                iconBg="bg-[#E0E7EB]"
                title="Blood Oxygen"
                value="97"
                unit="%"
                status="Normal"
                statusBg="bg-[#E0E7EB]"
                statusText="text-slate-600"
              />
              <HealthCard
                icon="/icons/stress_level.png"
                iconBg="bg-[#FEE2E2]"
                title="Stress Level"
                value="40"
                unit="%"
                status="Normal"
                statusBg="bg-[#ECFDF5]"
                statusText="text-green-700"
              />
            </div>
            {/* Live Heart Rate card – full width below card row */}
            <div className="w-full bg-white rounded-xl shadow-md p-3 flex flex-col gap-2 min-h-0 shrink-0">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-[34px] h-[34px] rounded-lg bg-[#FEE2E2] flex items-center justify-center shrink-0">
                  <img src="/icons/heart_rate.png" alt="" className="w-[22px] h-[22px] object-contain" />
                </div>
                <span className="font-['Mulish'] text-sm leading-[18px] text-[#2d3035] font-bold flex-1 text-right">
                  Live Heart Rate
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 shrink-0">
                <span className="font-['Mulish'] text-[#2d3035] font-bold text-base">77 <span className="text-slate-500 font-normal text-xs">bpm</span></span>
                <div className="w-fit flex items-center justify-center py-1 px-2 rounded-md bg-[#FEE2E2] text-red-600">
                  <span className="font-['Mulish'] text-[9px] font-medium leading-tight">Normal</span>
                </div>
              </div>
              <div className="flex-1 min-h-[60px] w-full rounded-lg overflow-hidden bg-white">
                <img src="/icons/placeholder_waveform.png" alt="ECG waveform" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            {/* Upcoming Appointment card */}
            <div className="w-full bg-white rounded-xl shadow-md p-3 flex flex-col gap-2 min-h-0 shrink-0">
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-[34px] h-[34px] rounded-lg bg-[#DBEAFE] flex items-center justify-center shrink-0">
                  <img src="/icons/camera.png" alt="" className="w-[22px] h-[22px] object-contain" />
                </div>
                <span className="font-['Mulish'] text-sm leading-[18px] text-[#2d3035] font-bold flex-1 text-right">
                  Upcoming Appointment
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-['Mulish'] text-[10px] text-[#2d3035] bg-slate-100 px-1.5 py-0.5 rounded-md leading-tight">
                  August 14, 2021
                </span>
                <span className="font-['Mulish'] text-[10px] text-[#2d3035] leading-tight">
                  Consultation with Dr. James
                </span>
              </div>
            </div>
            </div>
          </div>
          {/* Right: two boxes with fixed dimensions */}
          <div className="flex flex-col gap-4 shrink-0">
            {/* Patient details – 320×189 */}
            <div className="w-[320px] h-[189px] bg-[#43474F] rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-start shrink-0">
                <span className="font-['Space_Grotesk'] text-[20px] text-white font-medium">John Doe</span>
                <span className="font-['Space_Grotesk'] text-[10px] text-white/80 bg-white/20 px-2 py-0.5 rounded-md">
                  Male
                </span>
              </div>
              <div className="flex gap-2 flex-1 min-h-0">
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <button
                    type="button"
                    className="flex-1 min-h-0 bg-[#B9EFBD] rounded-2xl px-3 py-2 flex items-center justify-between gap-2 hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer border-0 text-left"
                  >
                    <span className="font-['Space_Grotesk'] text-xs text-[#2d3035] font-medium">Height</span>
                    <div className="flex flex-col items-end gap-0.5">
                      <div className="flex items-end gap-0.5 h-2">
                        {[...Array(11)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-0.5 rounded-full ${i === 5 ? 'h-2 bg-[#e07a7a]' : 'h-1.5 bg-[#2d3035]/40'}`}
                          />
                        ))}
                      </div>
                      <span className="font-['Space_Grotesk'] text-xs text-[#2d3035] font-medium">{height} cm</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="flex-1 min-h-0 bg-[#EDA9AC] rounded-2xl px-3 py-2 flex items-center justify-between gap-2 hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer border-0 text-left"
                  >
                    <span className="font-['Space_Grotesk'] text-xs text-[#2d3035] font-medium">Weight</span>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="flex items-end gap-0.5 h-2">
                        {[...Array(11)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-0.5 rounded-full ${i === 5 ? 'h-2 bg-[#e07a7a]' : 'h-1.5 bg-[#2d3035]/40'}`}
                          />
                        ))}
                      </div>
                      <span className="font-['Space_Grotesk'] text-xs text-[#2d3035] font-medium">{weight}kg</span>
                    </div>
                  </button>
                </div>
                <div className="flex-1 min-w-0 bg-[#2D2D2D] rounded-2xl p-2.5 flex flex-col gap-1.5">
                  <span className="font-['Space_Grotesk'] text-[9px] text-[#B0B0B0]">Body Mass Index (BMI)</span>
                  <div className="flex justify-between items-center">
                    <span className="font-['Space_Grotesk'] text-[16px] text-white font-semibold">{bmi.toFixed(1)}</span>
                    <span className="font-['Space_Grotesk'] text-[9px] text-[#404040] bg-[#D0D0D0] px-2 py-0.5 rounded-md font-medium">
                      {bmiStatus}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 mt-auto">
                    <div className="relative h-1.5 w-full rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(to right, #ADD8E6, #7FFFD4, #FFD700, #FF7F7F)',
                        }}
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FF0000] -translate-x-1/2"
                        style={{ left: `${bmiIndicatorPosition}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] text-[#B0B0B0] font-['Space_Grotesk']">
                      <span>16</span>
                      <span>24</span>
                      <span>32</span>
                      <span>40</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* AI Diagnosis – 320×329 */}
            <div className="w-[320px] h-[329px] bg-[#3F215D] rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center text-left">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-h3 text-[20px] text-white font-medium">AI Diagnosis</h3>
                  <p className="font-mulish text-p1 text-[11px] text-white/70 mt-0.5">Last checked August 10, 2021</p>
                </div>
                <button
                  type="button"
                  className="font-['Space_Grotesk'] text-sm text-[#2d3035] bg-[#ebddfa] hover:bg-[#E0C8FF] px-3 py-1.5 rounded-lg shrink-0"
                >
                  Generate
                </button>
              </div>
              <textarea
                value={diagnosisText}
                onChange={(e) => setDiagnosisText(e.target.value)}
                className="font-mulish text-p1 text-[11px] text-[#2d3035] bg-white flex-1 min-h-0 resize-none rounded-lg p-2.5 border-0 focus:outline-none focus:ring-2 focus:ring-[#7e42ba]"
                placeholder="Enter diagnosis..."
              />
              <div className="flex justify-center w-full shrink-0">
                <button
                  type="button"
                  className="font-['Space_Grotesk'] text-base text-[#2d3035] bg-[#ebddfa] hover:bg-[#E0C8FF] px-4 py-2.5 rounded-lg w-fit"
                >
                  Save and Upload to Cloud
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sidebar slot – 72px locked; sidebar overlays when expanded */}
      <div className="w-[72px] shrink-0 relative">
        <aside
          className={`flex flex-col justify-between py-5 bg-[#314490] border-l border-white/10 transition-[width] duration-200 ${
            isExpanded
              ? 'absolute right-0 top-0 bottom-0 z-10 w-[220px] items-stretch px-5'
              : 'w-full h-full items-center'
          }`}
        aria-label="Navigation"
        aria-expanded={isExpanded}
      >
        {/* Logo: closed = icon only 36×50; expanded = White.png (same height for consistent positioning) */}
        <div className={`flex shrink-0 ${isExpanded ? 'items-center' : 'items-center justify-center'}`}>
          {isExpanded ? (
            <img
              src="/icons/White.png"
              alt="HEALTH दोस्त"
              className="h-[50px] w-auto object-contain object-left"
            />
          ) : (
            <img
              src="/icons/logo_white_icon.png"
              alt="HealthDost"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              className="w-9 h-[50px] object-contain"
            />
          )}
        </div>

        {/* Nav icons – 24×24, with labels when expanded */}
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavClick(item.id)}
            className={`flex shrink-0 items-center rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 ${
              isExpanded ? 'w-full justify-between py-1.5 px-2' : 'w-6 justify-center py-1.5 px-0'
            }`}
            aria-label={item.alt}
          >
            <img
              src={item.src}
              alt=""
              width={ICON_SIZE}
              height={ICON_SIZE}
              className="w-6 h-6 object-contain shrink-0"
            />
            {isExpanded && (
              <span className="font-['Space_Grotesk'] text-[20px] text-white truncate text-right">
                {item.label}
              </span>
            )}
          </button>
        ))}

        {/* Exit / Logout – 24×24 */}
        <button
          type="button"
          onClick={onLogout}
          className={`flex shrink-0 items-center rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 ${
            isExpanded ? 'w-full justify-between py-1.5 px-2' : 'w-6 justify-center py-1.5 px-0'
          }`}
          aria-label="Logout"
        >
          <img
            src="/icons/exit.png"
            alt=""
            width={ICON_SIZE}
            height={ICON_SIZE}
            className="w-6 h-6 object-contain shrink-0"
          />
          {isExpanded && (
            <span className="font-['Space_Grotesk'] text-[20px] text-white truncate text-right">
              Exit
            </span>
          )}
        </button>
      </aside>
      </div>
    </div>
  );
}
