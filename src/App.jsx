import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(url);
      const data = await resp.json();
      setJobs(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* button cntainer */}
      <BtnContainer
        data={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* job info */}
      <JobInfo data={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
