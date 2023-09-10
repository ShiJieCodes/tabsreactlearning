const BtnContainer = ({ data, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {data.map((item, index) => {
        const { id, company } = item;
        return (
          <button
            key={id}
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
