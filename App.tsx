
import React from 'react';
import Clock from './components/Clock';
import SmileyFace from './components/SmileyFace';
import SunnyLandscape from './components/SunnyLandscape';

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-300 via-blue-400 to-sky-300 text-white p-4 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-16">
          <SmileyFace />
          <Clock />
          <SunnyLandscape />
        </div>
      </div>
      <footer className="mt-8 text-center text-white/70 text-sm">
        <p>Crafted with React & Tailwind CSS</p>
      </footer>
    </main>
  );
};

export default App;
