import { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface GlobeDotsProps {
  radius: number;
  count: number;
  phi?: number;
  theta?: number;
  size: number;
  color: string;
}

export default function GlobeDots({ radius, count, phi, theta, size, color }: GlobeDotsProps) {
  const positions = useMemo(() => {
    const points = new Float32Array(count * 3);
    
    if (phi !== undefined) {
      // Latitude circle
      for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 2;
        points[i * 3] = radius * Math.sin(phi) * Math.cos(t);
        points[i * 3 + 1] = radius * Math.cos(phi);
        points[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(t);
      }
    } else if (theta !== undefined) {
      // Longitude circle
      for (let i = 0; i < count; i++) {
        const p = (i / count) * Math.PI;
        points[i * 3] = radius * Math.sin(p) * Math.cos(theta);
        points[i * 3 + 1] = radius * Math.cos(p);
        points[i * 3 + 2] = radius * Math.sin(p) * Math.sin(theta);
      }
    }
    
    return points;
  }, [radius, count, phi, theta]);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        fog={false}
      />
    </Points>
  );
}