import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import ForceGraph2D from "react-force-graph-2d";
import { getLinkColor, RED, GREEN, GRAY, YELLOW } from "./Types";
import * as THREE from "three";

const NetworkGraph2 = ({ nodes, links, is3D }) => {
  const graphData = { nodes, links };

  const nodeThreeObject = React.useCallback((node) => {
    const group = new THREE.Group();

    // Create sphere
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5),
      new THREE.MeshBasicMaterial({
        color: node.added
          ? GREEN
          : node.deleted
          ? RED
          : node.changed
          ? YELLOW
          : GRAY,
        opacity: 0.6,
        transparent: true,
        depthWrite: false, // Disable depth writing
      })
    );
    group.add(sphere);

    // Create icon sprite
    if (node.image) {
      const spriteMaterial = new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load(node.image),
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(10, 10, 1);
      sprite.position.set(0, 0, 5); // Adjust this to change icon position relative to sphere
      sprite.renderOrder = 1; // Ensure sprite renders on top
      group.add(sprite);
    }

    return group;
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {is3D ? (
        <ForceGraph3D
          graphData={graphData}
          nodeThreeObject={nodeThreeObject}
          nodeAutoColorBy="group"
          linkDirectionalParticles={4}
          linkDirectionalParticleSpeed={(d) => d.value * 0.001}
          nodeLabel={(node) => `${node.name}`}
          nodeOpacity={0.5}
          linkLabel={(link) => `Value: ${link.value}`}
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
