import Duties from "./Duties";

const JobInfo = ({ data, currentItem }) => {
  const { title, dates, duties, company } = data[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="jobdate">{dates}</p>
      <Duties data={duties} />
    </article>
  );
};
export default JobInfo;
