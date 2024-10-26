import React, { useState, useCallback } from "react";
import ForceGraph3D from "react-force-graph-3d";
import ForceGraph2D from "react-force-graph-2d";
import { getLinkColor, RED, GREEN, GRAY, YELLOW } from "./Types";
import * as THREE from "three";
import "./App.css";

const NetworkGraph2 = ({ nodes, links, is3D }) => {
    const [tooltipContent, setTooltipContent] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const graphData = { nodes, links };

    const nodeThreeObject = React.useCallback((node) => {
        const group = new THREE.Group();

        // Create sphere
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5),
            new THREE.MeshBasicMaterial({
                color: node.added ? GREEN : node.deleted ? RED : node.changed ? YELLOW : GRAY,
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

    const getNodeLabel = (node) => `
    <div>
      <div class="primary-txt-lg nova-mono-regular"> ${node.name}</div>
      <div><strong>Category:</strong> ${node.category}</div>
      <div><strong>Description:</strong> ${node.description}</div>
    </div>
  `;

    const handleNodeHover = useCallback((node) => {
        document.body.style.cursor = node ? "pointer" : "default";
        const elements = document.querySelectorAll(".scene-tooltip");
        elements.forEach((element) => {
            element.style.visibility = node ? "visible" : "none";
        });
    }, []);

    return (
        <div style={{ height: "100vh" }}>
            {is3D ? (
                <ForceGraph3D
                    graphData={graphData}
                    nodeThreeObject={nodeThreeObject}
                    nodeAutoColorBy="group"
                    linkDirectionalParticles={4}
                    linkDirectionalParticleSpeed={(d) => d.value * 0.001}
                    //nodeLabel={(node) => `${node.name}`}
                    nodeLabel={getNodeLabel}
                    nodeOpacity={0.5}
                    linkLabel={(link) => `Value: ${link.value}`}
                    linkColor={(link) => getLinkColor(link.source, link.target)}
                    backgroundColor="rgba(0,0,0,0.2)"
                    width={window.innerWidth * 0.66}
                    onNodeHover={handleNodeHover}
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
