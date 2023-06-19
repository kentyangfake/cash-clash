import React, { createContext, useState } from 'react';
import { useImmer } from 'use-immer';
import data from './assets/data.json';
const CandidateContext = createContext();

const CandidateProvider = ({ children }) => {
  const [swapLeft, setSwapLeft] = useState(true);
  const [candidateLeft, setCandidateLeft] = useImmer({});
  const [candidateRight, setCandidateRight] = useImmer({});
  const [candidates, setCandidates] = useState(data);

  return (
    <CandidateContext.Provider
      value={{
        swapLeft,
        setSwapLeft,
        candidateLeft,
        setCandidateLeft,
        candidateRight,
        setCandidateRight,
        candidates,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

export { CandidateContext, CandidateProvider };
