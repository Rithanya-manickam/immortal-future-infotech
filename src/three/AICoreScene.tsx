import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Float,
  Environment,
  MeshDistortMaterial,
  Sparkles,
  Html,
} from "@react-three/drei";

const ORBIT_LABELS = ["AI", "Cloud", "Automation", "Enterprise", "Finacle", "Cyber Security"];

function Core() {
  const inner = useRef<THREE.Mesh>(null);
  const outer = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (inner.current) {
      inner.current.rotation.y = t * 0.25;
      inner.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
    if (outer.current) {
      outer.current.rotation.y = -t * 0.1;
      outer.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group>
      {/* Glowing inner core */}
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.0, 6]} />
        <MeshDistortMaterial
          color="#0f3a35"
          emissive="#2ecc9b"
          emissiveIntensity={0.6}
          distort={0.55}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Wireframe halo */}
      <mesh>
        <icosahedronGeometry args={[1.9, 2]} />
        <meshBasicMaterial color="#7ee8c6" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={outer}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color="#3fbfa5" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Inner glow point */}
      <pointLight position={[0, 0, 0]} intensity={3} color="#4de3b3" distance={4} />
    </group>
  );
}

function Orbits() {
  return (
    <>
      {ORBIT_LABELS.map((label, i) => {
        const radius = 2.8 + (i % 3) * 0.4;
        const speed = 0.15 + i * 0.03;
        const offset = (i / ORBIT_LABELS.length) * Math.PI * 2;
        const tilt = (i % 2 === 0 ? 1 : -1) * (0.25 + i * 0.05);
        return (
          <OrbitLabel
            key={label}
            label={label}
            radius={radius}
            speed={speed}
            offset={offset}
            tilt={tilt}
          />
        );
      })}
    </>
  );
}

function OrbitLabel({
  label,
  radius,
  speed,
  offset,
  tilt,
}: {
  label: string;
  radius: number;
  speed: number;
  offset: number;
  tilt: number;
}) {
  const g = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (g.current) {
      g.current.position.x = Math.cos(t) * radius;
      g.current.position.z = Math.sin(t) * radius;
      g.current.position.y = Math.sin(t * 1.3 + offset) * 0.4 + tilt;
    }
  });
  return (
    <group ref={g}>
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#9df2d1" />
      </mesh>
      <Html center distanceFactor={9} zIndexRange={[0, 10]}>
        <div
          className="whitespace-nowrap rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white/90 backdrop-blur-md"
          style={{ boxShadow: "0 0 20px oklch(0.62 0.14 170 / .4)" }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

function Nodes() {
  const pts = useMemo(() => {
    const p: THREE.Vector3[] = [];
    for (let i = 0; i < 40; i++) {
      const r = 2.3 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p.push(new THREE.Vector3(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)));
    }
    return p;
  }, []);

  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={g}>
      {pts.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#b8f0d8" />
        </mesh>
      ))}
    </group>
  );
}

function CameraParallax() {
  useFrame((state) => {
    const { mouse, camera } = state;
    camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.5 + 0.2 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function AICoreScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.2, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0);
        scene.background = null;
      }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#c8f5e2" />
      <pointLight position={[-4, -2, -3]} intensity={1.2} color="#3fbfa5" />
      <pointLight position={[3, 3, 2]} intensity={0.9} color="#4de3b3" />

      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <Core />
        </Float>
        <Orbits />
        <Nodes />
        <Sparkles count={80} scale={7} size={2} speed={0.35} color="#9df2d1" />
        <Environment preset="night" background={false} environmentIntensity={0.4} />
      </Suspense>
      <CameraParallax />
    </Canvas>
  );
}
