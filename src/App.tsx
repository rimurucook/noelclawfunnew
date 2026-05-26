import { Routes, Route } from 'react-router'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'

const Docs = lazy(() => import('./pages/Docs'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Docs />
        </Suspense>
      } />
    </Routes>
  )
}
