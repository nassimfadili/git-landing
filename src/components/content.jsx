import React, { useEffect, useState } from "react";
import "../style/tailwind.css";

// Définir des classes personnalisées pour les éléments récurrents
const buttonBaseClasses =
  "middle none center rounded-lg bg-gitBlack py-5 px-10 font-sans text-m font-bold uppercase text-white shadow-md shadow-gitBlack-500/20 transition-all hover:shadow-lg hover:shadow-gitBlack-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

export default function Content() {
  const phrases = [
    "--fast-version-control",
    "--distributed-even-if-your-workflow-isnt",
    "--local-branching-on-the-cheap",
    "--everything-is-local",
    "--distributed-is-the-new-centralized",
  ];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isPaused) {
        return;
      }

      if (!isDeleting && charIndex < currentPhrase.length) {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 3000); // Pause for 5 seconds
      }
    };

    const typingTimeout = setTimeout(typeEffect, isDeleting ? 50 : 100);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, phraseIndex, isPaused]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4" data-testid="content-container">
      {/* Section gauche : Titre, description et boutons */}
      <div
        className="flex flex-col justify-center gap-10"
        data-testid="left-section"
      >
        {/* Titre principal */}
        <h1
          className="text-8xl text-gitBlack drop-shadow-lg"
          data-testid="main-title"
        >
          Elevate Your Development With{" "}
          <span className="font-bold italic text-gitOrange">git!</span>
        </h1>

        {/* Description */}
        <p
          className="text-gitBlack text-2xl w-full text-balance tracking-widest drop-shadow-md"
          data-testid="description"
        >
          Discover Git, the free, open-source distributed version control system
          <br />
          that revolutionizes projects of all sizes with unparalleled speed and
          efficiency.
        </p>

        {/* Boutons d'action */}
        <div className="flex space-x-4 mt-4" data-testid="button-group">
          <button
            className={`${buttonBaseClasses} bg-gitBlack hover:bg-zinc-950`}
            data-testid="know-about-us-btn"
          >
            Know About Us
          </button>
          <button
            className={`${buttonBaseClasses} bg-gitOrange hover:bg-orange-600`}
            data-testid="git-started-btn"
          >
            Git Started
          </button>
        </div>
      </div>

      {/* Section droite : Terminal */}
      <div
        className="justify-center align-center"
        data-testid="terminal-section"
      >
        <div className="max-w-full h-full">
          {/* Fenêtre du terminal */}
          <div
            className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl overflow-hidden h-full"
            data-testid="terminal-window"
          >
            {/* Barre de titre du terminal */}
            <div className="flex items-center justify-between px-4 py-2">
              {/* Boutons de la fenêtre */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400">git</div>
            </div>
            {/* Contenu du terminal */}
            <div className="p-4 font-mono">
              <div className="flex items-center space-x-2 text-white">
                <span className="text-2xl text-white">$</span>
                <p
                  className="flex-1 typing items-center text-2xl"
                  data-testid="typing-effect"
                >
                  {text}
                  <span
                    className={`${
                      showCursor ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-100`}
                  >
                    |
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
