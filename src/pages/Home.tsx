import CustomCursor from '../components/CustomCursor'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import CapabilitiesGrid from '../sections/CapabilitiesGrid'
import NoelCapabilities from '../sections/NoelCapabilities'
import { AgentSwarm } from '../sections/AgentSwarm'
import OpenSource from '../sections/OpenSource'
import GamesArcade from '../sections/GamesArcade'
import { X402Payments } from '../sections/X402Payments'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[700px] rounded-full bg-blue-500/[0.07] blur-[140px] dark:bg-blue-500/[0.12]" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[120px] dark:bg-blue-400/[0.07]" />
      </div>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Stats />
        <CapabilitiesGrid />
        <NoelCapabilities />
        <AgentSwarm />
        <OpenSource />
        <GamesArcade />
        <X402Payments />
        <Footer />
      </div>
      <CustomCursor />
      <ScrollToTop />
    </div>
  )
}
