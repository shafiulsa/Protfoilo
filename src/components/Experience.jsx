import { Environment, Float, MeshDistortMaterial, RoundedBox, useScroll } from "@react-three/drei";
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
import { CouchSmall } from "./CouchSmall";
import { Lamp } from "./Lamp";
import BookCase from "./BookCase";
import { Monitor } from "./Monitor";
import { Balloon } from "./Balloon";
import { ParkBench } from "./ParkBench";
import { Mailbox } from "./Mailbox";
import { Pigeon } from "./Pigeon";


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
      <Man scale={0.6} />

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
                position-x={2}
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
          <group position-x={-2}>

            <SectionTitle position-x={.5}>Skills</SectionTitle>
            <BookCase position-z={-2} />
            <CouchSmall
              scale={0.4}
              position-z={0}
              position-x={-0.2}
              rotation-y={Math.PI / 3}
            />
            <Lamp
              position-z={0.6}
              position-x={-0.4}
              position-y={-0.8}
              rotation-y={-Math.PI}
            />
          </group>
          <mesh position-y={2} position-z={-4} position-x={2}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>

        </group>
        {/* Projects */}
        <group position-z={-SECTION_DISTANCE * 2}>
          <group position-x={1}>
            <SectionTitle
              position-x={-0.5}
              position-z={0}
              rotation-y={-Math.PI / 6}
            >
              PROJECTS
            </SectionTitle>
            <group
              position-x={0.5}
              position-z={0}
              rotation-y={-Math.PI / 6}
              scale={0.8}
            >
              <Monitor
                scale={0.02}
                position-y={1}
                rotation-y={-Math.PI / 2}
                position-z={-1}
              />
              <RoundedBox scale-x={2} position-y={0.5} position-z={-1}>
                <meshStandardMaterial color="white" />
              </RoundedBox>
            </group>

          </group>
        </group>
        {/* Contact */}
        <group position-z={-SECTION_DISTANCE * 3}>
          <SectionTitle position-x={-2} position-z={0.6}>Contact</SectionTitle>
        <group>
          <ParkBench
            scale={0.5}
            position-x={-0.5}
            position-z={-2.5}
            rotation-y={-Math.PI / 4}
          />
          <group position-y={2.2} position-z={-0.5}>
            <Float floatIntensity={2} rotationIntensity={1.5}>
              <Balloon scale={1.5} position-x={-0.5} color="#71a2d9" />
            </Float>
            <Float
              floatIntensity={1.5}
              rotationIntensity={2}
              position-z={0.5}
            >
              <Balloon scale={1.3} color="#d97183" />
            </Float>
            <Float speed={2} rotationIntensity={2}>
              <Balloon scale={1.6} position-x={0.4} color="yellow" />
            </Float>
          </group>
          <Mailbox
  scale={0.25}
  rotation-y={1.25 * Math.PI}
  position-x={1}
  position-y={0.25}
  position-z={0.5}
/>
<Float floatIntensity={1.5} speed={3}>
  <Pigeon
    position-x={2}
    position-y={1.5}
    position-z={-0.5}
    scale={0.3}
  />
</Float>
        </group>
        </group>
      </group>
    </>
  );
};
