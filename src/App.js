import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import { useImmer } from 'use-immer';
import data from './assets/data.json';

function App() {
  const [swapLeft, setSwapLeft] = useState(true);
  const [candidateLeft, setCandidateLeft] = useImmer({});
  const [candidateRight, setCandidateRight] = useImmer({});
  const [candidates, setCandidates] = useState(data);

  const options = {
    legend: 'none',
    pieSliceText: 'label',
    title: '資金來源的相關性',
    pieStartAngle: 100,
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex m-10 gap-10 h-96 justify-center">
        <div
          className={`${
            swapLeft && 'border border-blue-500'
          } flex flex-col items-center bg-blue-200 w-96 hover:bg-blue-100`}
          onClick={() => setSwapLeft(true)}
        >
          {Object.keys(candidateLeft).length === 0 ? (
            '請選擇議員'
          ) : (
            <>
              <p>{candidateLeft.姓名}</p>
              <p>{candidateLeft.總收入}</p>
              <p>{candidateLeft.捐贈企業數}</p>
              <Chart
                chartType="PieChart"
                data={candidateLeft.pie}
                options={options}
                width={'100%'}
                height={'250px'}
              />
            </>
          )}
        </div>
        <div
          className={`${
            !swapLeft && 'border border-red-500'
          } flex flex-col items-center bg-red-200 w-96 hover:bg-red-100`}
          onClick={() => setSwapLeft(false)}
        >
          {Object.keys(candidateRight).length === 0 ? (
            '請選擇議員'
          ) : (
            <>
              <p>{candidateRight.姓名}</p>
              <p>{candidateRight.總收入}</p>
              <p>{candidateRight.捐贈企業數}</p>
              <Chart
                chartType="PieChart"
                data={candidateRight.pie}
                options={options}
                width={'100%'}
                height={'250px'}
              />
            </>
          )}
        </div>
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
