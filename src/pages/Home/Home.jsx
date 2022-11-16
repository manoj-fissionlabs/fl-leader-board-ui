import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './Home.css';
import home from './../../assets/home.png';
import userPhoto from './../../assets/userPhoto.png';
import PMImage from "../../assets/Project-managers.png";
import { Tree, TreeNode } from 'react-organizational-chart';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const parentData = useSelector((state) => state.data.parentArr);

  const [ceos, setCeos] = useState([]);
  const [dms, setDms] = useState([]);
  const [clients, setClients] = useState([]);

  const childrenNodes = (count) => {
    return parentData[count].map(each => {
      return <TreeNode key={each.id} label={
        <div className={`styled-node`} onClick={() => console.log(each.name)}>
          <div className="styled Child-node">
            <div>
              <img src={PMImage} className="profile-img" alt="avatar" />
            </div>
            <div className="candidate-div">
              <div className="tree-candidate-name candidate-name">{each.name}</div>
              <div className="tree-candidate-name role">{each.role}</div>
            </div>
          </div>
        </div>}>
      </TreeNode>
    })
  }

  const recursion = (count = 0) => {
    if (count === parentData.length - 1) {
      return childrenNodes(count)
    }
    console.log(parentData[count])

    return <TreeNode label={
      <div className={`styled-node`} onClick={() => console.log(parentData[count].name)}>
        <div className={`styled ${parentData.length - 2 == count && "Parent-node"}`}>
          <div>
            {parentData[count].role && <img src={PMImage} className="profile-img" alt="avatar" />}
          </div>
          <div className="candidate-div">
            <div className="tree-candidate-name candidate-name">{parentData[count].name}</div>
            <div className="tree-candidate-name role">{parentData[count].role}</div>
          </div>
        </div>
      </div>}>
      {recursion(count + 1)}
    </TreeNode>
  }

  return (
    <div className="m-auto py-5">
      {isLoading && (
        <div className='notFoundCenteredDiv'>
          <div className='m-auto text-center'>
            <div className="spinner-border m-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>)}

      {!isLoading && (<Tree
        lineWidth={'3px'}
        lineColor={'#ff5722'}
        lineBorderRadius={'10px'}
        label={<div className="styled-node-main">
          <div>
            <img src={home} className="tree-icons" alt="avatar" />
            <div className="root-name m-3 org-name">Fission Labs</div>
          </div>
        </div>}
      >
        {recursion()}
      </Tree>)}
    </div>
  );
};




//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="no-shadow">
//       <div className="col-md-8 m-auto">
//         <h5 className='text-center bold-text mt-3 mb-4'>This is Organisational Structure page</h5>
//       </div>
//     </div>
//   );
// };

export default Home;
