import React from 'react';

interface detailType {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}
const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: detailType) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>@{company}</a>
        </h3>
        <span>
          {time} | {address}
        </span>
        <p>{work}</p>
      </div>
    </li>
  );
};
const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-3/4 mx-auto relative">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
