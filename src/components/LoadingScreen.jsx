import { useProgress, Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";
import * as THREE from "three";

const DissolveMaterial = ({ progress }) => {
  const materialRef = useRef();

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    uniform float uProgress;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      float n = noise(vUv * 20.0);
      if (n < uProgress) discard;
      gl_FragColor = vec4(0.96, 0.95, 0.93, 1.0); // #f5f3ee
    }
  `;

  const uniforms = useMemo(() => ({
    uProgress: { value: 0 }
  }), []);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uProgress.value,
        progress,
        0.05
      );
    }
  });

  return (
    <shaderMaterial
      ref={materialRef}
      transparent
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  );
};

export const LoadingScreen = () => {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);
  const [dissolveProgress, setDissolveProgress] = useState(0);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setDissolveProgress(1);
        setTimeout(() => setIsLoaded(true), 2500);
      }, 1000);
    }
  }, [progress]);

  if (isLoaded) return null;

  return (
    <div 
      className="loading-screen" 
      style={{ 
        background: dissolveProgress > 0 ? "transparent" : "#f5f3ee",
        pointerEvents: dissolveProgress > 0 ? "none" : "all",
        transition: "background 0.5s ease"
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "transparent" }}
        gl={{ alpha: true }}
      >
        <mesh scale={[5, 5, 1]}>
          <planeGeometry />
          <DissolveMaterial progress={dissolveProgress} />
        </mesh>
      </Canvas>

      <AnimatePresence>
        {dissolveProgress === 0 && (
          <motion.div
            className="loading-screen__content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.h1
              className="loading-screen__text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Bismillah
            </motion.h1>
            <div className="loading-screen__progress">
              <motion.div
                className="loading-screen__progress__bar"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="loading-screen__percentage">{Math.round(progress)}%</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
