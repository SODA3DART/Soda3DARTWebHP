
import React from 'react';

interface TouchControlsProps {
  onInput: (code: string, isPressed: boolean) => void;
}

const TouchButton: React.FC<{
  label: string | React.ReactNode;
  code: string;
  onInput: (code: string, isPressed: boolean) => void;
  className?: string;
}> = ({ label, code, onInput, className }) => {
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    onInput(code, true);
  };
  const handleEnd = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    onInput(code, false);
  };

  return (
    <button
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      className={`select-none flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 active:scale-90 active:bg-white/30 transition-all duration-75 text-white font-bold shadow-xl ${className}`}
    >
      {label}
    </button>
  );
};

const TouchControls: React.FC<TouchControlsProps> = ({ onInput }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-end pb-8 px-8 sm:pb-12 sm:px-12">
      <div className="flex justify-between items-end w-full">
        {/* Left Side: Movement (Joystick-like positioning) */}
        <div className="flex space-x-6 pointer-events-auto items-center mb-4">
          <TouchButton
            label={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>}
            code="KeyA"
            onInput={onInput}
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
          <TouchButton
            label={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>}
            code="KeyD"
            onInput={onInput}
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>

        {/* Right Side: Actions (Clustered for thumb) */}
        <div className="flex space-x-6 pointer-events-auto items-end mb-4">
          <TouchButton
            label={<span className="text-xs">ATTACK</span>}
            code="KeyF"
            onInput={onInput}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-red-500/20 border-red-500/40"
          />
          <TouchButton
            label={<span className="text-sm">JUMP</span>}
            code="Space"
            onInput={onInput}
            className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/20 border-blue-500/40"
          />
        </div>
      </div>
    </div>
  );
};

export default TouchControls;
