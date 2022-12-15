import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const UI = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {totalMemberCount} = useSelector(state => state.data);
  return (
    <div className="no-shadow mb-5">
      <div className="col-md-10 col-sm-10 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>UI - {totalMemberCount}</h5>
        <IndividualDepartmentDetails departmentName={'uiTechnologies'} />
      </div>
    </div>
  );
};

export default UI;
