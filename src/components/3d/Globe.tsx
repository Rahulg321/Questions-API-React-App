import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import GlobeDots from './GlobeDots';

export default function Globe() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base sphere with subtle glow */}
      <Sphere args={[1, 64, 64]}>
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Latitude lines */}
      {Array.from({ length: 10 }).map((_, i) => {
        const phi = (i + 1) * (Math.PI / 11);
        return (
          <GlobeDots
            key={`lat-${i}`}
            radius={1}
            count={Math.floor(60 * Math.sin(phi))}
            phi={phi}
            size={0.015}
            color="#4338ca"
          />
        );
      })}
      
      {/* Longitude lines */}
      {Array.from({ length: 24 }).map((_, i) => (
        <GlobeDots
          key={`long-${i}`}
          radius={1}
          count={30}
          theta={(i * Math.PI) / 12}
          size={0.015}
          color="#4338ca"
        />
      ))}
    </group>
  );
}