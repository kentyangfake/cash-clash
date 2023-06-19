import React from 'react';
import Chart from 'react-google-charts';

const CandidateCard = ({ candidate, isSelected, onClick }) => {
  const options = {
    legend: 'none',
    pieSliceText: 'label',
    title: '資金來源',
    pieStartAngle: 100,
  };
  return (
    <div
      className={`${
        isSelected ? 'border border-blue-500' : ''
      } flex flex-col items-center bg-blue-200 w-96 hover:bg-blue-100`}
      onClick={onClick}
    >
      {Object.keys(candidate).length === 0 ? (
        '請選擇議員'
      ) : (
        <>
          <p>{candidate.姓名}</p>
          <p>{`資金總額 ${candidate.總收入} 元`}</p>
          <p>{`捐贈企業 ${candidate.捐贈企業數} 間`}</p>
          <Chart
            chartType="PieChart"
            data={candidate.pie}
            options={options}
            width={'100%'}
            height={'250px'}
          />
        </>
      )}
    </div>
  );
};

export default CandidateCard;
