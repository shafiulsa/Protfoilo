import { Environment } from "@react-three/drei";
import Man from "./Man";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Man scale={0.8} />
    </>
  );
};
