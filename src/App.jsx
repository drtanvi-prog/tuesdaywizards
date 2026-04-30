import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import useSmoothScroll from './hooks/useSmoothScroll'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

function MainLayout() {
  useSmoothScroll()
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/tc" element={<TermsAndConditions />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
