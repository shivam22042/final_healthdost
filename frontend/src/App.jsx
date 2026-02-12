import { useState } from 'react'

function WelcomeScreen({ onNewPatient, onExistingPatient }) {
  return (
    <div className="flex-1 flex items-start justify-center px-12 pt-0">
      <div className="bg-white rounded-xl shadow-lg px-12 py-12 w-full max-w-xl">
        <h1 className="font-['Space_Grotesk'] text-[24px] leading-[30px] text-[#2d3035] font-bold mb-10">Welcome</h1>
        <div className="flex gap-6">
          <button
            onClick={onNewPatient}
            className="flex-1 py-3 px-6 bg-[#ebddfa] text-[#2d3035] font-medium rounded-lg hover:bg-[#E0C8FF] transition-colors"
          >
            New Patient
          </button>
          <button
            onClick={onExistingPatient}
            className="flex-1 py-3 px-6 bg-[#ebddfa] text-[#2d3035] font-medium rounded-lg hover:bg-[#E0C8FF] transition-colors"
          >
            Existing Patient
          </button>
        </div>
      </div>
    </div>
  )
}

function RegisterScreen({ onBack, onRegister }) {
  return (
    <div className="flex-1 flex items-start justify-center px-12 pt-0 min-h-0">
      <div className="bg-white rounded-xl shadow-lg px-10 py-7 w-full max-w-xl shrink-0">
        <h1 className="font-['Space_Grotesk'] text-[24px] leading-[30px] text-[#2d3035] font-bold mb-6">Register New Patient</h1>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-3">
            <div className="w-36 shrink-0">
              <label className="inline-block px-2.5 py-1 bg-[#E0F2E0] text-[#1E6F5C] text-xs font-medium rounded-md w-fit">
                Patient Name
              </label>
            </div>
            <input
              type="text"
              placeholder="Allen Doe"
              className="flex-1 px-2.5 py-1.5 text-sm bg-white border-2 border-[#7e42ba] rounded-md text-[#2d3035] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7e42ba]"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-36 shrink-0">
              <label className="inline-block px-2.5 py-1 bg-[#E0F2E0] text-[#1E6F5C] text-xs font-medium rounded-md w-fit">
                Patient Gender
              </label>
            </div>
            <input
              type="text"
              placeholder="Male"
              className="flex-1 px-2.5 py-1.5 text-sm bg-white border-2 border-[#7e42ba] rounded-md text-[#2d3035] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7e42ba]"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-36 shrink-0">
              <label className="inline-block px-2.5 py-1 bg-[#E0F2E0] text-[#1E6F5C] text-xs font-medium rounded-md w-fit">
                Patient Weight (kg)
              </label>
            </div>
            <input
              type="text"
              placeholder="75"
              className="flex-1 px-2.5 py-1.5 text-sm bg-white border-2 border-[#7e42ba] rounded-md text-[#2d3035] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7e42ba]"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-36 shrink-0">
              <label className="inline-block px-2.5 py-1 bg-[#E0F2E0] text-[#1E6F5C] text-xs font-medium rounded-md w-fit">
                Patient Height (cm)
              </label>
            </div>
            <input
              type="text"
              placeholder="175"
              className="flex-1 px-2.5 py-1.5 text-sm bg-white border-2 border-[#7e42ba] rounded-md text-[#2d3035] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7e42ba]"
            />
          </div>

          <div className="flex gap-6 pt-6">
            <button
              type="submit"
              onClick={(e) => { e.preventDefault(); onRegister?.(); }}
              className="flex-1 py-3.5 px-8 text-sm bg-[#ebddfa] text-[#2d3035] font-medium rounded-lg hover:bg-[#E0C8FF] transition-colors"
            >
              Register
            </button>
            <button
              type="button"
              onClick={onBack}
              className="flex-1 py-3.5 px-8 text-sm bg-[#ebddfa] text-[#2d3035] font-medium rounded-lg hover:bg-[#E0C8FF] transition-colors"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function LoginScreen({ onBack }) {
  return (
    <div className="flex-1 flex items-start justify-center px-12 pt-0 min-h-0">
      <div className="bg-white rounded-xl shadow-lg px-10 py-7 w-full max-w-xl shrink-0">
        <h1 className="font-['Space_Grotesk'] text-[24px] leading-[30px] text-[#2d3035] font-bold mb-6">Enter Existing Patient</h1>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center gap-3">
            <div className="w-36 shrink-0">
              <label className="inline-block px-2.5 py-1 bg-[#E0F2E0] text-[#1E6F5C] text-xs font-medium rounded-md w-fit">
                Patient Name
              </label>
            </div>
            <input
              type="text"
              placeholder="Allen Doe"
              className="flex-1 px-2.5 py-1.5 text-sm bg-white border-2 border-[#7e42ba] rounded-md text-[#2d3035] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7e42ba]"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-36 shrink-0">
              <label className="inline-block px-2.5 py-1 bg-[#E0F2E0] text-[#1E6F5C] text-xs font-medium rounded-md w-fit">
                Nurse Name
              </label>
            </div>
            <input
              type="text"
              placeholder="Sally Page"
              className="flex-1 px-2.5 py-1.5 text-sm bg-white border-2 border-[#7e42ba] rounded-md text-[#2d3035] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7e42ba]"
            />
          </div>

          <div className="flex gap-6 pt-6">
            <button
              type="submit"
              className="flex-1 py-3.5 px-8 text-sm bg-[#ebddfa] text-[#2d3035] font-medium rounded-lg hover:bg-[#E0C8FF] transition-colors"
            >
              Start
            </button>
            <button
              type="button"
              onClick={onBack}
              className="flex-1 py-3.5 px-8 text-sm bg-[#ebddfa] text-[#2d3035] font-medium rounded-lg hover:bg-[#E0C8FF] transition-colors"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('welcome')

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="w-[1024px] h-[600px] bg-[#dcf7de] flex flex-col overflow-hidden shadow-xl">
        <header className="flex justify-center pt-6 pb-4 shrink-0">
          <img src="/Dark.png" alt="Health Dost" className="w-[293px] h-[122px] object-contain" />
        </header>

        {screen === 'welcome' && (
          <WelcomeScreen
            onNewPatient={() => setScreen('register')}
            onExistingPatient={() => setScreen('login')}
          />
        )}
        {screen === 'register' && (
          <RegisterScreen
            onBack={() => setScreen('welcome')}
            onRegister={() => setScreen('login')}
          />
        )}
        {screen === 'login' && <LoginScreen onBack={() => setScreen('welcome')} />}
      </div>
    </div>
  )
}

export default App
