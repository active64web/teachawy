'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// استيراد الدوال اللي محتاجينها بس بدل * as THREE
import { MathUtils, Points as ThreePoints } from 'three';

const COUNT = 1500;
const generatePositions = () => {
    const temp = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) {
        temp[i] = (Math.random() - 0.5) * 15;
    }
    return temp;
};

const staticPositions = generatePositions();

function ParticleRing() {
    const ref = useRef<ThreePoints>(null);
    const positions = useMemo(() => staticPositions, []);

    useFrame((state, delta) => {
        if (!ref.current) return;

        // الدوران
        ref.current.rotation.y += delta * 0.1;
        ref.current.rotation.x += delta * 0.05;

        // التفاعل مع الماوس باستخدام MathUtils المستوردة مباشرة
        ref.current.position.x = MathUtils.lerp(
            ref.current.position.x,
            state.mouse.x * 1.5,
            0.05
        );
        ref.current.position.y = MathUtils.lerp(
            ref.current.position.y,
            state.mouse.y * 1.5,
            0.05
        );
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#0056B3"
                size={0.07}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

const HeroVisual = () => {
    return (
        <div className="hero-visual-canvas">
            <Canvas
                camera={{ position: [0, 0, 5] }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    powerPreference: "high-performance"
                }}
            >
                <ambientLight intensity={0.5} />
                <ParticleRing />
            </Canvas>
        </div>
    );
};

export default HeroVisual;