
import React, { useState, useCallback, useEffect } from 'react';
import Game from './components/Game';
import TouchControls from './components/TouchControls';
import { useKeyboard } from './hooks/useKeyboard';

type GameState = 'start' | 'stage-select' | 'playing' | 'game-over' | 'won';

const OrientationWarning: React.FC = () => (
  <div className="fixed inset-0 bg-gray-900 z-[100] flex flex-col justify-center items-center p-8 text-center">
    <div className="w-24 h-40 border-4 border-white rounded-2xl mb-8 animate-rotate-phone relative">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-white rounded-full"></div>
    </div>
    <h2 className="text-2xl font-bold text-white mb-4">画面を横にしてください</h2>
    <p className="text-gray-400">このゲームは横画面でのプレイに最適化されています。</p>
  </div>
);

const Confetti: React.FC = () => {
  const confettiCount = 150;
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];

  const pieces = Array.from({ length: confettiCount }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}%`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      animationDuration: `${Math.random() * 3 + 4}s`,
      animationDelay: `${Math.random() * 5}s`,
      width: `${Math.random() * 8 + 6}px`,
      height: `${Math.random() * 10 + 8}px`,
    };
    return <div key={i} className="confetti-piece" style={style} />;
  });

  return <div className="confetti-container">{pieces}</div>;
};

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="absolute inset-0 bg-gray-900 flex flex-col justify-center items-center z-20 animate-fade-in">
    <div className="text-center px-4">
      <h1 className="text-5xl md:text-8xl font-black text-white animate-bounce-in text-shadow-pop">
        React 3D Platformer
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
        A magical adventure awaits on any device.
      </p>
    </div>
    <button
      onClick={onStart}
      className="mt-12 px-10 py-4 bg-yellow-500 text-gray-900 font-bold text-xl rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-transform transform animate-button-boing hover-animate-wiggle"
    >
      Start Game
    </button>
  </div>
);

const StageSelectScreen: React.FC<{ onSelectStage: (stageId: string) => void }> = ({ onSelectStage }) => {
  const stages = [
    { id: '1-1', name: 'Grassy Plains', locked: false },
    { id: '1-2', name: '???', locked: true },
    { id: '1-3', name: '???', locked: true },
    { id: '1-4', name: '???', locked: true },
  ];

  return (
    <div className="absolute inset-0 bg-gray-800 flex flex-col justify-center items-center z-20 animate-fade-in p-8">
      <h1 className="text-5xl md:text-7xl font-black text-white mb-12 animate-bounce-in text-shadow-pop">
        Stage Select
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 overflow-y-auto max-h-[70vh] p-4">
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            onClick={() => !stage.locked && onSelectStage(stage.id)}
            className={`stage-card w-32 h-32 md:w-48 md:h-48 bg-sky-600 rounded-2xl flex flex-col justify-center items-center p-4 text-white font-bold shadow-lg cursor-pointer ${stage.locked ? 'locked' : 'hover:bg-sky-500'} animate-bounce-in`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            {stage.locked ? (
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zm0 2a3 3 0 013 3v2H7V7a3 3 0 013-3z" /></svg>
            ) : (
              <>
                <p className="text-3xl md:text-4xl">{stage.id}</p>
                <p className="text-sm md:text-lg mt-2">{stage.name}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PauseMenu: React.FC<{
  onResume: () => void;
  onBackToStageSelect: () => void;
  onQuit: () => void;
}> = ({ onResume, onBackToStageSelect, onQuit }) => (
  <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center z-40 animate-fade-in">
    <h2 className="text-6xl md:text-7xl font-black text-white mb-12 animate-bounce-in text-shadow-pop">
      Paused
    </h2>
    <div className="flex flex-col space-y-4 px-6 w-full max-w-xs">
       <button
        onClick={onResume}
        className="w-full px-6 py-4 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle"
        style={{ animationDelay: '0.1s' }}
      >
        Resume Game
      </button>
      <button
        onClick={onBackToStageSelect}
        className="w-full px-6 py-4 bg-cyan-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle"
        style={{ animationDelay: '0.2s' }}
      >
        Stage Select
      </button>
       <button
        onClick={onQuit}
        className="w-full px-6 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle"
        style={{ animationDelay: '0.3s' }}
      >
        Quit Game
      </button>
    </div>
  </div>
);


const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [isPaused, setIsPaused] = useState(false);
  const [lives, setLives] = useState(3);
  const [gameKey, setGameKey] = useState(0);
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [totalCoins, setTotalCoins] = useState(20); // コイン総数（床の上15 + 床間5）
  const [collectedCoins, setCollectedCoins] = useState(0); // 獲得コイン数
  
  const input = useKeyboard();

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWin = useCallback(() => {
    if (gameState === 'playing') {
      setGameState('won');
    }
  }, [gameState]);

  const handleLoseLife = useCallback(() => {
    setLives(prevLives => (prevLives > 0 ? prevLives - 1 : 0));
  }, []);

  const handleGainLife = useCallback(() => {
    setLives(prevLives => Math.min(prevLives + 1, 3));
  }, []);

  const handleCollectCoin = useCallback(() => {
    setCollectedCoins(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (lives <= 0 && gameState === 'playing') {
      setGameState('game-over');
    }
  }, [lives, gameState]);

  const handleRestartFromGameOver = () => {
    input.reset();
    setGameState('playing');
    setLives(3);
    setCollectedCoins(0); // リセット
    setGameKey(prevKey => prevKey + 1);
  };

  const handleBackToStageSelect = () => {
    input.reset();
    setGameState('stage-select');
    setLives(3);
    setCollectedCoins(0); // リセット
    setGameKey(prevKey => prevKey + 1);
  };
  
  const handleQuitGame = () => {
    input.reset();
    setGameState('start');
    setLives(3);
    setCollectedCoins(0); // リセット
    setGameKey(prevKey => prevKey + 1);
  };

  const isGameVisible = gameState === 'playing' || gameState === 'game-over' || gameState === 'won';

  return (
    <main className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      {isPortrait && <OrientationWarning />}
      
      {gameState === 'start' && <StartScreen onStart={() => setGameState('stage-select')} />}
      {gameState === 'stage-select' && <StageSelectScreen onSelectStage={(stageId) => { if (stageId === '1-1') setGameState('playing'); }} />}
      
      {isGameVisible && (
        <>
          <div className="absolute top-0 left-0 p-4 sm:p-6 z-10 w-full flex justify-between items-start bg-gradient-to-b from-gray-900/90 to-transparent">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg">
                  Stage 1-1
                </h1>
                <p className="mt-1 text-[10px] sm:text-xs text-gray-300 drop-shadow-md hidden md:block">
                  Move: Arrows/WASD, Jump: Space, Attack: F
                </p>
              </div>
               {gameState === 'playing' && (
                <button
                  onClick={() => setIsPaused(true)}
                  className="p-2 bg-black/40 rounded-full text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition active:scale-90"
                  aria-label="Pause Game"
                >
                  <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              )}
            </div>
            <div className="flex items-center space-x-4">
              {/* ライフ表示 */}
              <div className="flex items-center space-x-1 sm:space-x-2 p-2 bg-black/30 rounded-lg">
                <span className="font-bold text-xs sm:text-lg hidden xs:inline">Lives:</span>
                {[...Array(3)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 sm:w-8 sm:h-8 ${i < lives ? 'text-red-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              {/* コイン表示 */}
              <div className="flex items-center space-x-1 sm:space-x-2 p-2 bg-black/30 rounded-lg">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-xs sm:text-lg text-yellow-400">
                  {collectedCoins}/{totalCoins}
                </span>
              </div>
            </div>
          </div>

          {gameState === 'playing' && !isPaused && (
            <TouchControls onInput={(code, isPressed) => input.setKey(code, isPressed)} />
          )}
        </>
      )}

      <div className={`w-full h-full absolute inset-0 transition-opacity duration-300 ${isGameVisible ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'}`}>
        <Game
          key={gameKey}
          input={input}
          onWin={handleWin}
          onLoseLife={handleLoseLife}
          onGainLife={handleGainLife}
          onCollectCoin={handleCollectCoin}
          isPaused={isPaused || gameState !== 'playing'}
        />
      </div>

      {isPaused && (
        <PauseMenu
          onResume={() => setIsPaused(false)}
          onBackToStageSelect={() => {
            setIsPaused(false);
            handleBackToStageSelect();
          }}
          onQuit={() => {
            setIsPaused(false);
            handleQuitGame();
          }}
        />
      )}

      {gameState === 'game-over' && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col justify-center items-center z-30 animate-fade-in">
          <div className="text-center px-4">
            <h2 className="text-6xl md:text-9xl font-black text-yellow-400 font-sans animate-bounce-in text-shadow-pop">
              Game Over
            </h2>
          </div>
          <button
            onClick={handleRestartFromGameOver}
            className="mt-12 px-10 py-4 bg-pink-500 text-white font-bold text-xl rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle"
          >
            Try Again
          </button>
        </div>
      )}

      {gameState === 'won' && (
        <>
          <Confetti />
          <div className="absolute inset-0 bg-sky-900/80 backdrop-blur-md flex flex-col justify-center items-center z-30 animate-fade-in">
            <h2 className="text-6xl md:text-9xl font-black font-sans animate-bounce-in animate-shine text-shadow-win">
              You Win!
            </h2>
            <button
              onClick={handleBackToStageSelect}
              className="mt-12 px-10 py-4 bg-cyan-500 text-white font-bold text-xl rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle"
            >
              Back to Stage Select
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default App;
