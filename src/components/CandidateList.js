import React, { useState } from 'react';
import data from '../assets/data.json';

const CandidateList = ({
  swapLeft,
  candidateLeft,
  candidateRight,
  setCandidateLeft,
  setCandidateRight,
}) => {
  const [candidates, setCandidates] = useState(data);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredCandidates = data.filter((candidate) =>
      candidate.姓名.includes(value)
    );
    setCandidates(filteredCandidates);
  };

  const selectCandidate = (candidate) => {
    if (
      candidateLeft.姓名 === candidate.姓名 ||
      candidateRight.姓名 === candidate.姓名
    ) {
      return;
    }

    const convertToNumber = (value) => parseInt(value.split(',').join(''));

    const updateCandidate = (draft, candidate) => {
      draft.姓名 = candidate.姓名;
      draft.總收入 = candidate.總收入;
      draft.捐贈企業數 = candidate.捐贈企業數;
      draft.pie = [
        ['來源', '金額'],
        ['個人', convertToNumber(candidate.個人捐贈收入)],
        ['營利事業', convertToNumber(candidate.營利事業捐贈收入)],
        ['政黨', convertToNumber(candidate.政黨捐贈收入)],
        ['人民團體', convertToNumber(candidate.人民團體捐贈收入)],
        ['匿名', convertToNumber(candidate.匿名捐贈收入)],
        ['其他', convertToNumber(candidate.其他收入)],
      ];
    };

    if (swapLeft) {
      setCandidateLeft((draft) => {
        updateCandidate(draft, candidate);
      });
    } else {
      setCandidateRight((draft) => {
        updateCandidate(draft, candidate);
      });
    }
  };

  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="搜尋議員姓名"
        className="border-2 mb-10"
      />

      <div className="flex justify-center flex-wrap gap-2 w-[1000px]">
        {candidates.length === 0 ? (
          <p>查無此人</p>
        ) : (
          candidates.map((candidate) => {
            const isSelected =
              candidateLeft.姓名 === candidate.姓名 ||
              candidateRight.姓名 === candidate.姓名;

            return (
              <div
                className={`${
                  isSelected ? 'bg-amber-300' : 'bg-zinc-200 hover:bg-zinc-100'
                } flex justify-center items-center w-24 h-20 p-2`}
                key={candidate.姓名}
                onClick={() => selectCandidate(candidate)}
              >
                {candidate.姓名}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default CandidateList;
