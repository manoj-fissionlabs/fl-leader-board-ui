import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../api/api";
import profile from "../../assets/UP_logo.png";
import { skills } from '../../utils/constants';
import { donutChartColors } from "../../utils/data";

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
      <div className="col-md-12 m-auto">
        {userDetails && (
          <div className="row">
            <div className="col-md-5">
              <div className="image_section p-3 text-center">
                <img src={profile} alt="profile_img" width="300px" height="300px" />
                <h2 className="pt-2">{userDetails.name} / <span>{userDetails.designation}</span></h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="profile_content p-3 py-4">
                <div className="profile_details">
                  <div className="row">
                    <div className="col-md-6 pe-4">
                      <div className="profile_list me-2 mb-2">
                        <h5>email ID</h5>
                        <p>{userDetails.emailId}</p>
                      </div>
                    </div>
                    <div className="col-md-6 pe-4">
                      <div className="profile_list me-2 mb-2">
                        <h5>mobile No</h5>
                        <p>{userDetails.mobileNo}</p>
                      </div>
                    </div>
                    <div className="col-md-6 pe-4">
                      <div className="profile_list me-2 mb-2">
                        <h5>reporting Manager</h5>
                        <p>{userDetails.managerName}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="profile_skills">
                  <h2>Skills</h2>
                  <div className="d-flex mt-4">
                    {userDetails?.skills?.map((d, i) => (
                      <p style={{ backgroundColor: donutChartColors[i] }} className="skill text-center px-5 py-2 me-4 mb-3">{skills[d].title}</p>
                    ))}
                  </div>
                  <hr />
                </div>
                <div className="profile_skills">
                  <div className="d-flex text-center">
                    <h5 className="pe-5"><b>Experience</b> </h5>
                    <p style={{ backgroundColor: '#F7F7F7' }} className="experience py-2 me-4 mb-3">{userDetails.experience} Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;
