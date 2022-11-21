import React, { useEffect } from "react";
import IndividualDepartmentDetails from "../../components/IndividualDepartmentDetails/IndividualDepartmentDetails";

const Backend = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="no-shadow mb-5">
      <div className="col-md-10 col-sm-10 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>This is Backend page</h5>
        <IndividualDepartmentDetails departmentName={'backendTechnologies'} />
      </div>
    </div>
  );
};

export default Backend;
