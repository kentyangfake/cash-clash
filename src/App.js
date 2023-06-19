import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import data from './assets/data.json';
import CandidateCard from './components/CandiateCard';

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
      <div className="flex flex-wrap gap-2 w-[1000px]">
        {candidates.map((candidate) => {
          return (
            <div
              className={`${
                candidateLeft.姓名 === candidate.姓名 ||
                candidateRight.姓名 === candidate.姓名
                  ? 'bg-amber-300'
                  : 'bg-zinc-200 hover:bg-zinc-100'
              } flex justify-center items-center w-24 h-20 p-2`}
              key={candidate.姓名}
              onClick={() => {
                if (
                  candidateLeft.姓名 === candidate.姓名 ||
                  candidateRight.姓名 === candidate.姓名
                ) {
                  return;
                }
                if (swapLeft) {
                  setCandidateLeft((draft) => {
                    draft.姓名 = candidate.姓名;
                    draft.總收入 = candidate.總收入;
                    draft.捐贈企業數 = candidate.捐贈企業數;
                    draft.pie = [
                      ['來源', '金額'],
                      [
                        '個人',
                        parseInt(candidate.個人捐贈收入.split(',').join('')),
                      ],
                      [
                        '營利事業',
                        parseInt(
                          candidate.營利事業捐贈收入.split(',').join('')
                        ),
                      ],
                      [
                        '政黨',
                        parseInt(candidate.政黨捐贈收入.split(',').join('')),
                      ],
                      [
                        '人民團體',
                        parseInt(
                          candidate.人民團體捐贈收入.split(',').join('')
                        ),
                      ],
                      [
                        '匿名',
                        parseInt(candidate.匿名捐贈收入.split(',').join('')),
                      ],
                      [
                        '其他',
                        parseInt(candidate.其他收入.split(',').join('')),
                      ],
                    ];
                  });
                } else {
                  setCandidateRight((draft) => {
                    draft.姓名 = candidate.姓名;
                    draft.總收入 = candidate.總收入;
                    draft.捐贈企業數 = candidate.捐贈企業數;
                    draft.pie = [
                      ['來源', '金額'],
                      [
                        '個人',
                        parseInt(candidate.個人捐贈收入.split(',').join('')),
                      ],
                      [
                        '營利事業',
                        parseInt(
                          candidate.營利事業捐贈收入.split(',').join('')
                        ),
                      ],
                      [
                        '政黨',
                        parseInt(candidate.政黨捐贈收入.split(',').join('')),
                      ],
                      [
                        '人民團體',
                        parseInt(
                          candidate.人民團體捐贈收入.split(',').join('')
                        ),
                      ],
                      [
                        '匿名',
                        parseInt(candidate.匿名捐贈收入.split(',').join('')),
                      ],
                      [
                        '其他',
                        parseInt(candidate.其他收入.split(',').join('')),
                      ],
                    ];
                  });
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
