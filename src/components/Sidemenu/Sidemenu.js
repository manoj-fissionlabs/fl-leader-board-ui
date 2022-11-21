import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Sidemenu.css";

function Sidemenu({ data, handleChangeRedirect }) {
  const [activeUrl, setActiveUrl] = useState("");
  const location = useLocation();
  const sectionClickHandler = (url) => {
    handleChangeRedirect(url);
  };
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    setActiveUrl(`/${curPath}`);
  }, [location]);
  return (
    <div className="sidebar col-md-2 col-sm-2 d-flex flex-column align-items-start">
      {data?.map((section) => (
        <div
          className={`section ${activeUrl === section.url ? "bg-white" : ""}`}
          onClick={() => sectionClickHandler(section.url)}
          key={section.id}
        >
          {section.title}
        </div>
      ))}
    </div>
  );
}

export default Sidemenu;
