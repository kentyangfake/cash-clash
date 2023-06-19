import React from 'react';

const CandidateList = ({
  swapLeft,
  candidates,
  candidateLeft,
  candidateRight,
  setCandidateLeft,
  setCandidateRight,
}) => {
  const selectCandidate = (candidate) => {
    if (
      candidateLeft.姓名 === candidate.姓名 ||
      candidateRight.姓名 === candidate.姓名
    ) {
      return;
    }

    const updateCandidate = (draft, candidate) => {
      draft.姓名 = candidate.姓名;
      draft.總收入 = candidate.總收入;
      draft.捐贈企業數 = candidate.捐贈企業數;
      draft.pie = [
        ['來源', '金額'],
        ['個人', parseInt(candidate.個人捐贈收入.split(',').join(''))],
        ['營利事業', parseInt(candidate.營利事業捐贈收入.split(',').join(''))],
        ['政黨', parseInt(candidate.政黨捐贈收入.split(',').join(''))],
        ['人民團體', parseInt(candidate.人民團體捐贈收入.split(',').join(''))],
        ['匿名', parseInt(candidate.匿名捐贈收入.split(',').join(''))],
        ['其他', parseInt(candidate.其他收入.split(',').join(''))],
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
    <div className="flex flex-wrap gap-2 w-[1000px]">
      {candidates.map((candidate) => {
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
      })}
    </div>
  );
};

export default CandidateList;
