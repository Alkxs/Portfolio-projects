
import particlesConfig from '../config/particles-config'
import Particles from 'react-tsparticles'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'


const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])
  return <Particles 
  id='tsparticles' 
  init={particlesInit} 
  loaded={particlesLoaded} 
  options={particlesConfig} />
}
export default ParticlesBackground  