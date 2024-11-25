import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  children: React.ReactNode;
  height?: string;
  cameraPosition?: [number, number, number];
  background?: string;
}

export default function Scene3D({
  children,
  height = "h-[600px]",
  cameraPosition = [0, 0, 3],
  background = "transparent"
}: Scene3DProps) {
  return (
    <div className={`w-full ${height}`}>
      <Canvas
        camera={{
          position: cameraPosition,
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace
        }}
      >
        <color attach="background" args={[background]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}