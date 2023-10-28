'use client'

import { ContactShadows, Float, MeshDistortMaterial, useGLTF } from '@react-three/drei';

export function Fourviere({ props }) {
	const { scene } = useGLTF('/fourviere_v2.glb')

	return (
		<>
			<Float rotationIntensity={0.9}>
				<primitive object={scene} {...props} />
			</Float>

			<ContactShadows
				position-y={-2.4}
				opacity={0.9}
				scale={50}
				blur={2.5}
			/>
		</>
	)
}


export function Portfolio({ route = '/', ...props }) {
	const router = useRouter()
	const [hovered, hover] = useState(false)
	useCursor(hovered)
	return (
		<mesh
			onClick={() => router.push(route)}
			onPointerOver={() => hover(true)}
			onPointerOut={() => hover(false)}
			{...props}>
			<sphereGeometry args={[1, 64, 64]} />
			<MeshDistortMaterial roughness={0} wireframe={false} color={hovered ? 'hotpink' : '#1fb2f5'} />
		</mesh>
	)
}