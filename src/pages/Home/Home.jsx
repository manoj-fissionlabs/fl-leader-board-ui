import React, { useState, useEffect } from "react";
import './Home.css';
import { OrgChartComponent } from './OrgChart';
import * as d3 from 'd3';
import { useSelector } from "react-redux";

const Home = () => {
  // const [data, setData] = useState(null);
  const data = useSelector(state => state.data.parentArr)



  //below is the only way to fetch partiular data and render it.. Need backend support
  useEffect(() => {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((data) => {
      // setData(data);
    });
  }, []);

  const onNodeClick = (nodeId) => {
    const node = data.find((n) => n.id == nodeId)
    console.log(node);
  }

  const gettree = (data) => {
      return <OrgChartComponent data={data} onNodeClick={onNodeClick}/>
  }

  return (
    <>
      {gettree(data)}
    </>
  );
};

export default Home;
