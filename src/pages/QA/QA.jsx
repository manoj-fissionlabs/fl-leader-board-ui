import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const QA = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {totalMemberCount} = useSelector(state => state.data);

  return (
    <div className="no-shadow">
      <div className="col-md-10 col-sm-10 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>QA - {totalMemberCount}</h5>
        <IndividualDepartmentDetails departmentName={'QATechnologies'} />
      </div>
    </div>
  );
};

export default QA;
