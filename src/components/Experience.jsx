import { Environment, Float, useScroll } from "@react-three/drei";
import Man from "./Man";
import { useRef } from "react";
import { SectionTitle } from "./SectionTitle";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Star } from "./Star"
import { MacBookPro } from "./MacBookPro"
import { PalmTree } from "./PalmTree"
import { config } from "../config"
import { Center } from "@react-three/drei"; 


const SECTION_DISTANCE = 10;
export const Experience = () => {
  const sceneContainer = useRef();
  const scrollData = useScroll();

  useFrame(() => {
    sceneContainer.current.position.z = scrollData.offset * SECTION_DISTANCE * (scrollData.pages - 1);
  })
  return (
    <>
      <Environment preset="sunset" />
      <Man scale={0.8} />

      <group ref={sceneContainer}>
        {/* Home */}
        <group>
          {/* <SectionTitle position-x={0.5}>Home</SectionTitle> */}
          <group>
            <Star position-z={0} position-y={2.2} scale={0.3} />
            <Float floatIntensity={2} speed={2}>
              <MacBookPro
                position-x={-1}
                position-y={0.5}
                position-z={0}
                scale={0.3}
                rotation-y={Math.PI / 4}
              />
            </Float>
            <PalmTree
              scale={0.018}
              rotation-y={THREE.MathUtils.degToRad(140)}
              position={[4, 0, -5]}
            />
            <Float floatIntensity={0.6}>
              {/* <Center disableY disableZ> */}
                <SectionTitle
                  size={0.8}
                  position-y={1.6}
                  position-z={-3}
                  position-x={-2}  
                  bevelEnabled
                  bevelThickness={0.3}
                >
                  {config.home.title}
                </SectionTitle>
              {/* </Center> */}
            </Float>
           <Center disableY disableZ>
                <SectionTitle
                  size={1.2}
                  position-y={-.6}
                  position-z={-3}
                  bevelEnabled
                  bevelThickness={0.3}
                >
                  {config.home.description}
                </SectionTitle>
              </Center>
     
          </group>
        </group>
        {/* Skills */}
        <group position-z={-SECTION_DISTANCE}>
          <SectionTitle position-x={.5}>Skills</SectionTitle>
        </group>
        {/* Projects */}
        <group position-z={-SECTION_DISTANCE * 2}>
          <SectionTitle position-x={.5}>Projects</SectionTitle>
        </group>
        {/* Contact */}
        <group position-z={-SECTION_DISTANCE * 3}>
          <SectionTitle position-x={.5}>Contact</SectionTitle>
        </group>
      </group>
    </>
  );
};
