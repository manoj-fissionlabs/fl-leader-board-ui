import React, { useState, useEffect } from "react";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const IT = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="no-shadow">
      <div className="col-md-10 col-sm-10 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>This is IT page</h5>
        <IndividualDepartmentDetails departmentName={'IT'} />
      </div>
    </div>
  );
};

export default IT;
