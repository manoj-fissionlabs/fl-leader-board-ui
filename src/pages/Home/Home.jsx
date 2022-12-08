import React, { useState, useEffect } from "react";
import './Home.css';
import { OrgChartComponent } from './OrgChart';
import { useSelector } from "react-redux";

const Home = () => {
  let [Treedata, setTreedata] = useState('');
  const storeData = useSelector(state => state.data.parentArr)

  useEffect(() => {
  setTreedata(structuredClone(storeData))
  }, [storeData]);

  const onNodeClick = (nodeId) => {
    const node = Treedata.find((n) => n.id == nodeId)
    console.log(node);
  }

  const gettree = (data) => {
      return <OrgChartComponent data={Treedata} onNodeClick={onNodeClick}/>
  }

  return (
    <>
      {gettree(Treedata)}
    </>
  );
};

export default Home;
