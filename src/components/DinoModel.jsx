import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const DinoModel = ({ scrollProgress }) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/scene.gltf');
  const { actions } = useAnimations(animations, group);

  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setScale(0.25);
    }

    if (actions && actions['Armature|Walk']) {
      actions['Armature|Walk'].play();
    }
  }, [actions]);

  useFrame(() => {
    const targetRotation = Math.max(0, Math.PI / 2 - scrollProgress * Math.PI);

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotation,
      0.1
    );

    group.current.position.z = scrollProgress;
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={scale}
      position={[0, -0.3, 0.5]}
      rotation-y={(Math.PI * 1) / 2}
    />
  );
};

export default DinoModel;
