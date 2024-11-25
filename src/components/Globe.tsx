import Scene3D from './3d/Scene';
import PointCloud from './3d/PointCloud';

export default function Globe() {
  return (
    <Scene3D height="h-[600px]">
      <PointCloud
        count={5000}
        radius={1.5}
        color="#ffffff"
        size={0.002}
        rotationSpeed={{ x: -0.1, y: -0.15 }}
      />
    </Scene3D>
  );
}