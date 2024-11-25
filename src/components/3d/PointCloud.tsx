import { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PointCloudProps {
  count: number;
  radius: number;
  color: string;
  size: number;
  rotationSpeed?: { x: number; y: number };
}

export default function PointCloud({
  count,
  radius,
  color,
  size,
  rotationSpeed = { x: 0.1, y: 0.15 }
}: PointCloudProps) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * radius;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * rotationSpeed.x;
      ref.current.rotation.y += delta * rotationSpeed.y;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          fog={false}
        />
      </Points>
    </group>
  );
}