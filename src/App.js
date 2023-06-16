import React, { useState } from 'react';
import data from './assets/data.json';

function App() {
  const [swapLeft, setSwapLeft] = useState(true);
  const [candidateLeft, setCandidateLeft] = useState('');
  const [candidateRight, setCandidateRight] = useState('');
  const [candidates, setCandidates] = useState(data);

  return (
    <div className="flex flex-col items-center">
      <div className="flex m-10 gap-10 border border-green-300 h-96 justify-center">
        <div
          className={`${
            swapLeft && 'border border-blue-500'
          } flex flex-col items-center bg-blue-200 w-96 hover:bg-blue-100`}
          onClick={() => setSwapLeft(true)}
        >
          {candidateLeft ? <p>{candidateLeft.姓名}</p> : '請選擇議員'}
        </div>
        <div
          className={`${
            !swapLeft && 'border border-red-500'
          } flex flex-col items-center bg-red-200 w-96 hover:bg-red-100`}
          onClick={() => setSwapLeft(false)}
        >
          {candidateRight ? <p>{candidateRight.姓名}</p> : '請選擇議員'}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 w-[1500px]">
        {candidates.map((candidate) => {
          return (
            <div
              className={`${
                (candidateLeft.姓名 === candidate.姓名 ||
                  candidateRight.姓名 === candidate.姓名) &&
                'bg-amber-300'
              } flex hover:bg-amber-300 justify-center items-center bg-zinc-200 w-24 h-20 p-2`}
              key={candidate.姓名}
              onClick={() => {
                if (
                  candidateLeft.姓名 === candidate.姓名 ||
                  candidateRight.姓名 === candidate.姓名
                ) {
                  return;
                }
                if (swapLeft) {
                  setCandidateLeft({ 姓名: candidate.姓名 });
                } else {
                  setCandidateRight({ 姓名: candidate.姓名 });
                }
              }}
            >
              {candidate.姓名}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
