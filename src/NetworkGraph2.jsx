import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import ForceGraph2D from "react-force-graph-2d";
import { getLinkColor, RED, GREEN, GRAY, YELLOW } from "./Types";

const NetworkGraph2 = ({ nodes, links, is3D }) => {
  const graphData = { nodes, links };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {is3D ? (
        <ForceGraph3D
          graphData={graphData}
          nodeAutoColorBy="group"
          linkDirectionalParticles={4}
          linkDirectionalParticleSpeed={(d) => d.value * 0.001}
          nodeLabel={(node) => `${node.name}`}
          linkLabel={(link) => `Value: ${link.value}`}
          nodeColor={(node) =>
            node.added
              ? GREEN
              : node.deleted
              ? RED
              : node.changed
              ? YELLOW
              : GRAY
          }
          linkColor={(link) => getLinkColor(link.source, link.target)}
        />
      ) : (
        <ForceGraph2D
          graphData={graphData}
          nodeAutoColorBy="group"
          linkDirectionalParticles={4}
          linkDirectionalParticleSpeed={(d) => d.value * 0.001}
          nodeLabel={(node) => `${node.id}: ${node.group}`}
          linkLabel={(link) => `Value: ${link.value}`}
        />
      )}
    </div>
  );
};

export default NetworkGraph2;
