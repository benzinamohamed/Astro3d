import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

 function ClassRoom() {
  const gltf = useLoader(GLTFLoader, '/anime_class_room.glb');
  
  return (
    <primitive 
      object={gltf.scene} 
      scale={[1, 1, 1]}
      position={[1, -1, -3]}
      
    />
  );
}





export default ClassRoom