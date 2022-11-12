import React, { useEffect } from "react";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const UI = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="no-shadow mb-5">
      <div className="col-md-8 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>This is UI page</h5>
        <IndividualDepartmentDetails departmentName={'uiTechnologies'} />
      </div>
    </div>
  );
};

export default UI;
