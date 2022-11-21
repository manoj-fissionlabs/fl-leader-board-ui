import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { OrgChart } from 'd3-org-chart';
import CustomNodeContent from './customNodeContent';
import ReactDOMServer from "react-dom/server";
import { useSelector } from 'react-redux';

export const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  let chart = null;

  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new OrgChart();
      }
      chart
      .container(d3Container.current)
      .data(props.data)
      .nodeWidth((n) => 220)
      .nodeHeight((n) => 80)
      .compactMarginBetween((d) => 60)
      .onNodeClick((d) => {
        props.onNodeClick(d)
      })
      .nodeContent((d) => {
        console.log(d)
        return ReactDOMServer.renderToStaticMarkup(
          <CustomNodeContent {...d} />
        );
  })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <div>
      <div ref={d3Container} />
    </div>
  );
};
