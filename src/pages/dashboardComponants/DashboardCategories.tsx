interface props {
  color: string;
  value: number;
  heading: string;
}

const DashboardCategories = ({ color, value, heading }: props) => {
  return (
    <div className="categoryItem">
      <h5>{heading}</h5>
      <div>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default DashboardCategories;
