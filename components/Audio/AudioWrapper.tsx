import React, { useState } from "react";
const AudioContext = React.createContext(false);
const SetAudioContext = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>> | undefined
>(undefined);

export function useAudio() {
  const context = React.useContext(AudioContext);
  if (context === undefined)
    throw new Error("useAudio must be used within a AudioWrapper");
  return context;
}
export function useSetAudio() {
  const context = React.useContext(SetAudioContext);
  if (context === undefined)
    throw new Error("useSetAudio must be used within a AudioWrapper");
  return context;
}

const AudioWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isAudioOn, setIsAudioOn] = useState(false);
  return (
    <SetAudioContext.Provider value={setIsAudioOn}>
      <AudioContext.Provider value={isAudioOn}>
        {children}
      </AudioContext.Provider>
    </SetAudioContext.Provider>
  );
};

export default AudioWrapper;
