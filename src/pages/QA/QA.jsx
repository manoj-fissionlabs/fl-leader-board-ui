import React, { useState, useEffect } from "react";

const QA = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="no-shadow">
      <div className="col-md-8 m-auto">
        <h5 className='text-center bold-text mt-3 mb-4'>This is QA page</h5>
      </div>
    </div>
  );
};

export default QA;
