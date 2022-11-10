import React, { useState, useEffect } from "react";
import DonutChart from "../../components/DonutChart/DonutChart";
import { technologies, employees, donutChartColors } from "../../utils/data";

const UI = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [uiTechnologies, setUiTechnologies] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [uiTechnologiesWithMembers, setUiTechnologiesWithMembers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadUiTechnologies();
  }, []);

  const loadUiTechnologies = () => {
    setIsLoading(true);
    const filterUiTechnologies = technologies[0]['uiTechnologies'];
    // console.log("filterUiTechnologies --> ", filterUiTechnologies);
    setUiTechnologies(filterUiTechnologies);

    let formUiTechnologiesWithMembers = [];

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
    setUiTechnologiesWithMembers(formUiTechnologiesWithMembers);
    console.log("formUiTechnologiesWithMembers --> ", formUiTechnologiesWithMembers);

    setIsLoading(false);
  }

  return (
    <div className="no-shadow mb-5">
      <div className="col-md-8 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>This is UI page</h5>
        {uiTechnologies && chartData && (<div className="donutChartContainer d-flex align-items-center">
          <div>{<DonutChart chartData={chartData} />}</div>
          <div className="w-25 m-auto">
            {chartData.map((tech, i) => (<div key={i} className="d-flex justify-content-around align-items-center my-4">
              <div className="donutChartColorIndicator" style={{ backgroundColor: donutChartColors[i] }}></div>
              <h4 className="m-0">{tech.label} - {tech.value}</h4>
            </div>))}
          </div>
        </div>)}

        <div className="container my-5">
          <div className="row g-3 g-lg-4 row-cols-1 row-cols-sm-1 row-cols-lg-2">
            {chartData && uiTechnologiesWithMembers && chartData.map((tech, i) => (<div key={i}>
              <div className="col mb-4">
                <h3>{tech.label}</h3>
                <div className="race-chart-container p-3">
                  {uiTechnologiesWithMembers[i].map((uiTechnologiesWithMember, j) => (
                    <div key={j} className="p-2">{uiTechnologiesWithMember.name}</div>
                  ))}
                </div>
              </div>
            </div>))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
