import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from '../components/ScrollToTop'
import PageTransition from '../components/PageTransition'

import Home from '../pages/Home'
import SobreAfetoS from '../pages/SobreAfetoS'
import RecursosPedagogicos from '../pages/RecursosPedagogicos'

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/sobre-nexxus"
            element={
              <PageTransition>
                <SobreAfetoS />
              </PageTransition>
            }
          />

          <Route
            path="/recursos-pedagogicos"
            element={
              <PageTransition>
                <RecursosPedagogicos />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}
