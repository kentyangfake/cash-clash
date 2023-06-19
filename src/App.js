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
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredCandidates = data.filter((candidate) =>
      candidate.姓名.includes(value)
    );
    setCandidates(filteredCandidates);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex m-10 gap-10 h-96 justify-center">
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
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="搜尋議員姓名"
        className="border-2 mb-10"
      />
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
