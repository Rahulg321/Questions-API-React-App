import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

export default function FeatureCard3D() {
  const linesRef = useRef<THREE.Group>(null);
  const lineCount = 10;
  const points = 50;

  // Create multiple curved lines
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const linePoints = [];
    const radius = 2 + Math.random() * 3;
    const yOffset = (i - lineCount / 2) * 1.5;
    
    for (let j = 0; j < points; j++) {
      const t = (j / (points - 1)) * Math.PI * 2;
      linePoints.push(
        new THREE.Vector3(
          Math.cos(t) * radius,
          yOffset + Math.sin(t * 2) * 0.5,
          Math.sin(t) * radius
        )
      );
    }
    
    return linePoints;
  });

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    
    const time = clock.getElapsedTime();
    linesRef.current.rotation.y = time * 0.1;
    linesRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
  });

  return (
    <group ref={linesRef}>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#4338ca"
          lineWidth={0.5}
          transparent
          opacity={0.2}
        />
      ))}
    </group>
  );
}