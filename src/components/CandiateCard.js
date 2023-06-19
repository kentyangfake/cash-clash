import React from 'react';
import Chart from 'react-google-charts';

const CandidateCard = ({ candidate, isSelected, onClick }) => {
  const options = {
    legend: 'none',
    pieSliceText: 'label',
    title: '資金來源關係圖',
    pieStartAngle: 100,
  };
  return (
    <div
      className={`${
        isSelected ? 'border-amber-300' : 'hover:border-amber-100'
      } flex flex-col gap-1 p-2 border-8 items-center w-96 `}
      onClick={onClick}
    >
      {Object.keys(candidate).length === 0 ? (
        '請選擇議員'
      ) : (
        <>
          <p className="font-semibold text-3xl pb-3">{candidate.姓名}</p>
          <p>{`資金總額 ${candidate.總收入} 元`}</p>
          <p>{`捐贈企業 ${candidate.捐贈企業數} 間`}</p>
          <Chart
            chartType="PieChart"
            data={candidate.pie}
            options={options}
            width={'100%'}
            height={'240px'}
          />
        </>
      )}
    </div>
  );
};

export default CandidateCard;
