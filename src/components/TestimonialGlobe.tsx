import Scene3D from './3d/Scene';
import PointCloud from './3d/PointCloud';

export default function TestimonialGlobe() {
  return (
    <Scene3D height="h-[400px]">
      <PointCloud
        count={2000}
        radius={1.2}
        color="#8b5cf6"
        size={0.003}
        rotationSpeed={{ x: 0.1, y: 0.15 }}
      />
    </Scene3D>
  );
}