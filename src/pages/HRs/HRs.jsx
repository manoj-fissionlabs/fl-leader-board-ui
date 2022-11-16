import React, { useState, useEffect } from "react";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const HRs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="no-shadow">
      <div className="col-md-8 col-sm-8 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>This is HRs page</h5>
        <IndividualDepartmentDetails departmentName={'HR'} />
      </div>
    </div>
  );
};

export default HRs;
