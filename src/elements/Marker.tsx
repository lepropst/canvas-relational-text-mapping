import { CanvasTexture, ImageLoader, Shape, Triangle, Vector3 } from "three";

export default function Marker({
  vector,
  color = "white",
}: {
  vector: Vector3;
  color?: string;
}) {
  const x = 0,
    y = 0;
  const shape = new Shape();
  shape.moveTo(x, y);
  shape.bezierCurveTo(x, y, x, y, x + 10, y + 10);
  shape.bezierCurveTo(x + 10, y + 10, x + 10, y + 10, x - 10, y + 10);
  shape.bezierCurveTo(x - 10, y + 10, x - 10, y + 10, x, y);
  // shape.bezierCurveTo(x + 10, y + 10, x + 5, y + 5, x + 10, y + 10);

  // shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  // shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  vector.set(vector.x, vector.y, 1);
  return (
    <mesh position={vector}>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial color={"red"} />
    </mesh>
  );
}
