import React from "react";
import './Home.css';


const CustomNodeContent = (props) => {
  return (
            <div className="styled-node">
              <div className="styled Child-node">
                <div>
                  <img src={props.data.imageUrl} className='profile-img' alt="avatar" />
                </div>
                <div className="candidate-div">
                  <div className="candidate-name">{props.data.name}</div>
                  <div className="role">{props.data.positionName}</div>
                </div>
              </div>
            </div>
  );
};

export default CustomNodeContent;
