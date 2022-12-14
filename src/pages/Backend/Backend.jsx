import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const Backend = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {totalMemberCount} = useSelector(state => state.data);
  
  return (
    <div className="no-shadow mb-5">
      <div className="col-md-10 col-sm-10 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>Backend - {totalMemberCount}</h5>
        <IndividualDepartmentDetails departmentName={'backendTechnologies'} />
      </div>
    </div>
  );
};

export default Backend;
