import React, { useState, useEffect } from "react";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const QA = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="no-shadow">
      <div className="col-md-10 col-sm-10 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>This is QA page</h5>
        <IndividualDepartmentDetails departmentName={'QATechnologies'} />
      </div>
    </div>
  );
};

export default QA;
