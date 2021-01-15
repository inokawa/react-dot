import React, { useEffect, useState } from "react";
import cluster from "../fixtures/cluster.gv";
import finite_automaton from "../fixtures/finite_automaton.gv";
import unix_family_tree from "../fixtures/unix_family_tree.gv";

import Dot, { parse } from "../src";

export default {
  title: "sample",
};

export const Cluster = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={parse(cluster)[0]}
          nodeRender={(n) => (
            <g>
              <rect
                x={n.point.x - 10}
                y={n.point.y - 10}
                width="20"
                height="20"
                fill="gray"
              />
              <text x={n.point.x} y={n.point.y}>
                {n.data.id}
              </text>
            </g>
          )}
          edgeRender={(n) => (
            <line
              x1={n.points[0].x}
              y1={n.points[0].y}
              x2={n.points[n.points.length - 1].x}
              y2={n.points[n.points.length - 1].y}
              stroke="lightgray"
            />
          )}
        />
      </g>
    </svg>
  );
};

export const FiniteStateMachine = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={parse(finite_automaton)[0]}
          nodeRender={(n) => (
            <text x={n.point.x} y={n.point.y}>
              {n.data.id}
            </text>
          )}
          edgeRender={(n) => (
            <line
              x1={n.points[0].x}
              y1={n.points[0].y}
              x2={n.points[n.points.length - 1].x}
              y2={n.points[n.points.length - 1].y}
              stroke="steelblue"
            />
          )}
        />
      </g>
    </svg>
  );
};

export const UnixFamilyTree = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={parse(unix_family_tree)[0]}
          nodeRender={(n) => (
            <text x={n.point.x} y={n.point.y}>
              {n.data.id}
            </text>
          )}
          edgeRender={(n) => (
            <line
              x1={n.points[0].x}
              y1={n.points[0].y}
              x2={n.points[n.points.length - 1].x}
              y2={n.points[n.points.length - 1].y}
              stroke="steelblue"
            />
          )}
        />
      </g>
    </svg>
  );
};
