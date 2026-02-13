import { useState } from 'react'

/**
 * Health Dashboard – base layout from Figma.
 * Sidebar (right): expandable via menu_stack icon. Collapsed: icons only. Expanded: icons + labels (Space Grotesk 20px).
 */
const ICON_SIZE = 24;
const LOGO_WIDTH = 36;
const LOGO_HEIGHT = 50;

const navItems = [
  { id: 'menu', src: '/icons/menu_stack.png', alt: 'Menu', label: 'Close' },
  { id: 'home', src: '/icons/home.png', alt: 'Home', label: 'Home' },
  { id: 'appointments', src: '/icons/appointments.png', alt: 'Appointments', label: 'Appointment' },
  { id: 'cloud', src: '/icons/cloud.png', alt: 'Cloud', label: 'Cloud' },
  { id: 'machine', src: '/icons/machine.png', alt: 'Machines', label: 'Syringe' },
];

export default function Dashboard({ onLogout }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleNavClick = (id) => {
    if (id === 'menu') setIsExpanded((prev) => !prev)
  }

  return (
    <div className="flex h-full w-full min-h-0 bg-[#314490]">
      {/* Main content area */}
      <main className="flex-1 min-w-0 flex flex-col bg-[#314490]" />

      {/* Sidebar – right side, expandable. justify-between keeps all items equidistant in both states. */}
      <aside
        className={`shrink-0 flex flex-col justify-between py-5 bg-[#314490] border-l border-white/10 transition-[width] duration-200 ${
          isExpanded ? 'w-[220px] items-stretch px-5' : 'w-[72px] items-center'
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
  );
}
