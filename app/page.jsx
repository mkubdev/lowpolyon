'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Portfolio = dynamic(() => import('@/components/canvas/Experience').then((mod) => mod.Portfolio), { ssr: false })
const Fourviere = dynamic(() => import('@/components/canvas/Experience').then((mod) => mod.Fourviere), { ssr: false })

// !! Container for the canvas
// Note: Common is the ambient light and camera
// Note: Loader is the loading screen/components
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
	ssr: false,
	loading: () => (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
				<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
				<path
					className='opacity-75'
					fill='currentColor'
					d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
				/>
			</svg>
		</div>
	),
})

// SceneAndCamera is the ambient light and camera
const SceneAndCamera = dynamic(() => import('@/components/canvas/View').then((mod) => mod.SceneAndCamera), { ssr: false })

export default function Page() {
	return (
		<>
			<div className='h-screen w-full'>
				<View
					orbit
					className='h-screen'>
					<Suspense fallback={null}>

						<Fourviere />

						<SceneAndCamera color={'#111827'} />
					</Suspense>
				</View>
			</div>

		</>
	)
}
