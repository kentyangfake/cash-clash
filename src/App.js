import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import data from './assets/data.json';
import CandidateCard from './components/CandiateCard';
import CandidateList from './components/CandidateList';

function App() {
  const [swapLeft, setSwapLeft] = useState(true);
  const [candidateLeft, setCandidateLeft] = useImmer({});
  const [candidateRight, setCandidateRight] = useImmer({});
  const [candidates, setCandidates] = useState(data);

  return (
    <div className="flex flex-col items-center">
      <div className="flex m-10 gap-10 justify-center">
        <CandidateCard
          candidate={candidateLeft}
          isSelected={swapLeft}
          onClick={() => setSwapLeft(true)}
        />
        <CandidateCard
          candidate={candidateRight}
          isSelected={!swapLeft}
          onClick={() => setSwapLeft(false)}
        />
      </div>
      <CandidateList
        swapLeft={swapLeft}
        candidates={candidates}
        candidateLeft={candidateLeft}
        candidateRight={candidateRight}
        setCandidateLeft={setCandidateLeft}
        setCandidateRight={setCandidateRight}
      />
    </div>
  );
}

export default App;
