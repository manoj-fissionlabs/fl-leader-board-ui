import React, { useEffect, useState } from "react";
import './Home.css';
import { OrgChartComponent } from './OrgChart';
import { useDispatch, useSelector } from "react-redux";

import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";
import { dataActions } from '../../reduxStore/dataSlice';


const Home = (props) => {
  const organizationData = useSelector(state => state.data.parentArr)
  const currentTreeData = useSelector(state => state.data.currentTreeData);
  const [breadCrumbData, setBreadCrumbData] = useState()
  const dispatch=useDispatch()

  useEffect(() => {
      const clickedNodePath = []
      const organizationDataClone=structuredClone(organizationData)
      findPathToClickedNode(organizationDataClone.Olivia,currentTreeData[0].nodeId,clickedNodePath,[false],"Olivia")
      setBreadCrumbData(clickedNodePath)
  }, [organizationData,currentTreeData])

  const findPathToClickedNode = (node,nodeId,clickedNodePath,nodeFound,name) => {
    if (! nodeFound[0] && node) {
      clickedNodePath.push({name,...node})
    } else {
      return
    }
    if (node && node.nodeId===nodeId){
      nodeFound[0] = true
      return
    }
    if (!(node && typeof node === "object" && !Array.isArray(node) && node !== null)) {
      return
    }
    for (const key of Object.keys(node)) {
      if (node[key] && typeof node[key] === "object" && !Array.isArray(node[key]) && node[key] !== null) {
        for (const key1 of Object.keys(node[key])){
          if (node[key][key1] && typeof node[key][key1] === "object" && !Array.isArray(node[key][key1]) && node[key][key1] !== null){
            if (! nodeFound[0]){
              findPathToClickedNode(node[key][key1],nodeId,clickedNodePath,nodeFound,key1)
            }
            if (! nodeFound[0]) {
              clickedNodePath.pop()
            }
          }
        }
      }
    }
  }


  const onNodeClick = (nodeId) => {
    if (breadCrumbData && breadCrumbData[breadCrumbData.length-1].nodeId===nodeId) return
    const clickedNodePath = []
    const organizationDataClone=structuredClone(organizationData)
    const initialKey = Object.keys(organizationDataClone)[0]
    findPathToClickedNode(organizationDataClone[initialKey],nodeId,clickedNodePath,[false],initialKey)
    const length = clickedNodePath.length
    const lastNode = {...clickedNodePath[length-1]}
    const nextDisplayTree = []
    if (lastNode.employees){
      const parentId = lastNode.nodeId
      const employees = lastNode.employees
      delete lastNode.employees
      nextDisplayTree.push({...lastNode})
      for (const employee of Object.keys(employees)){
        const tempEmployee = {}
        tempEmployee.name = employee
        for (const key of Object.keys(employees[employee])) {
          if (!(employees[employee][key] && typeof employees[employee][key] === "object" && !Array.isArray(employees[employee][key]) && employees[employee][key] !== null)) {
            tempEmployee[key] = employees[employee][key]
          }
        }
        tempEmployee["parentId"] = parentId
        nextDisplayTree.push(tempEmployee)
      }
      
      dispatch(dataActions.updateCurrentTreeData(nextDisplayTree))
    }
  }

  return <>
          <BreadCrumbs data = { breadCrumbData } getId = { onNodeClick }/>
          <OrgChartComponent data = { structuredClone(currentTreeData) } onNodeClick = { onNodeClick } />
         </>
};

export default Home;
