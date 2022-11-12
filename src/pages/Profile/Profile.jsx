import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../api/api";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(true);
  const { profileId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    setIsLoading(true);
    const employeesResponse = await api.get(`/employees`);
    const employeesResponseData = employeesResponse.data;
    console.log("employeesResponseData --> ", employeesResponseData);
    const getUser = employeesResponseData.filter(employee => employee.employeeId === +profileId);
    console.log("getUser --> ", getUser);
    if (getUser.length) {
      setUserDetails(getUser[0]);
    } else {
      navigate('/not-found');
    }
    setIsLoading(false);
  }

  return (
    <div className="no-shadow">
      <div className="col-md-8 m-auto">
        {userDetails && (<h5 className='text-center mt-3 mb-4'>
          <span className="bold-text">{userDetails.name} {userDetails.surname}</span>'s profile will be shown here
        </h5>)}
      </div>
    </div>
  );
};

export default Profile;
