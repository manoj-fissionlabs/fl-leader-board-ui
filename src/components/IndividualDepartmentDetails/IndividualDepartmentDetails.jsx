import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DonutChart from "../../components/DonutChart/DonutChart";
import { donutChartColors } from "../../utils/data";
import { setProgress, sortArrayInDescendingOrder } from "../../utils/helpers";
import api from "../../api/api";
import "./IndividualDepartmentDetails.css"
import { AiOutlineSearch } from "react-icons/ai";

const IndividualDepartmentDetails = ({ departmentName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [uiTechnologies, setUiTechnologies] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [uiTechnologiesWithMembers, setUiTechnologiesWithMembers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadUiTechnologies();
  }, []);

  const loadUiTechnologies = async () => {
    setIsLoading(true);
    const uiTechnologiesResponse = await api.get(`/${departmentName}`);
    console.log("uiTechnologiesResponse --> ", uiTechnologiesResponse.data);
    const filterUiTechnologies = uiTechnologiesResponse.data;
    // console.log("filterUiTechnologies --> ", filterUiTechnologies);
    setUiTechnologies(filterUiTechnologies);

    let formUiTechnologiesWithMembers = [];

    const employeesResponse = await api.get(`/employees`);
    console.log("employeesResponse --> ", employeesResponse.data);
    const employees = employeesResponse.data;

    const mappedUiTechnologies = filterUiTechnologies.map((uiTechnology, i) => {

      const getCurrentTechonologyMembers = employees.filter(employee => employee.skills.includes(uiTechnology.technologyId));
      // console.log("getCurrentTechonologyMembers --> ", getCurrentTechonologyMembers);
      formUiTechnologiesWithMembers.push(getCurrentTechonologyMembers);
      return {
        label: uiTechnology.title,
        value: getCurrentTechonologyMembers.length
      }
    });
    console.log("mappedUiTechnologies --> ", mappedUiTechnologies);
    setChartData(mappedUiTechnologies);
    const mappedUiTechnologiesWithMembers = formUiTechnologiesWithMembers.map(member => {
      return {
        "title": member.name + ' ' + member.surname,
        "value": member.experience
      }
    });
    setUiTechnologiesWithMembers(formUiTechnologiesWithMembers);
    console.log("formUiTechnologiesWithMembers --> ", formUiTechnologiesWithMembers);

    setIsLoading(false);
  }
  
  return (<>
    {uiTechnologies && chartData && (<div className="donutChartContainer d-flex align-items-center">
      <div>{<DonutChart chartData={chartData} />}</div>
      <div className="m-auto">
        {chartData.map((tech, i) => (<div key={i} className="chart_data">
          <div className="donutChartColorIndicator" style={{ backgroundColor: donutChartColors[i] }}></div>
          <h4 className="m-0">{tech.label} </h4>
          <h4 className="m-0"> - {tech.value}</h4>
        </div>))}
      </div>
    </div>)}

    <div className="container my-5">
      <div className="row g-3 g-lg-4 row-cols-1 row-cols-sm-1 row-cols-lg-2">
        {chartData && uiTechnologiesWithMembers && chartData.map((tech, i) => (<div key={i}>
          <div className="col mb-4">
            <h3>{tech.label}</h3>
            <div className="race-chart-main-container p-4">
            <div className="navbar-text mb-4 d-flex justify-content-center align-item-center" >
               <span className='pointer'>
                  <i className='search-icon'> <AiOutlineSearch/></i>
                  <input style={{ background: "#FFFFFF"}} type="text" className='search-input' placeholder='Search for Employee' />
               </span>
            </div>
              {sortArrayInDescendingOrder(uiTechnologiesWithMembers[i]).map((uiTechnologiesWithMember, j) => (
                // <div key={j} className="p-2">{uiTechnologiesWithMember.name} {uiTechnologiesWithMember.surname}</div>
                <div className={`race-chart-container tr d-flex justify-content-between align-items-center mb-2 w-100 text-ellipsis pointer`}
                  style={{ height: '40px' }}
                  key={j}>
                  <Link to={`/profile/${uiTechnologiesWithMember.employeeId}`} className="w-100 racechart-title-container raceChart-radius">
                    <div className={`td font-size-16 text-capitalize d-flex align-items-center ps-3 p-3 raceChart-radius`}
                      width={setProgress(uiTechnologiesWithMember.experience, uiTechnologiesWithMembers[i])}
                      style={{ color: 'black', backgroundColor: (donutChartColors[i] && '#2d95ec'), width: `${setProgress(uiTechnologiesWithMember.experience, uiTechnologiesWithMembers[i]) + '%'}`, backgroundImage: `linear-gradient(to right, ${setProgress(uiTechnologiesWithMember.experience, uiTechnologiesWithMembers[i])}%, 'black' 0%)` }}>
                      <div className={`raceChart-itemTitle bold-text text-ellipsis`}>{uiTechnologiesWithMember.name} {uiTechnologiesWithMember.surname}</div>
                    </div>
                  </Link>
                  <div className={`td text-right d-flex mx-1 px-2`}>
                    <span className="item-count bold-text" style={{ color: '#000' }}>
                      {uiTechnologiesWithMember.experience}&nbsp;Yrs
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>))}
      </div>
    </div>
  </>
  );
};

export default IndividualDepartmentDetails;
