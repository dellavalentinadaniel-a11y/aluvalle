import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';

// Lazy loading components
const Home = lazy(() => import('./pages/Home.tsx'));
const Systems = lazy(() => import('./pages/Systems.tsx'));
const LamasYFachadas = lazy(() => import('./pages/LamasYFachadas.tsx'));
const Complementarios = lazy(() => import('./pages/Complementarios.tsx'));
const Accesorios = lazy(() => import('./pages/Accesorios.tsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.tsx'));
const TechnicalOffice = lazy(() => import('./pages/TechnicalOffice.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Sustainability = lazy(() => import('./pages/Sustainability.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const AboutUs = lazy(() => import('./pages/AboutUs.tsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.tsx'));
const TermsOfService = lazy(() => import('./pages/TermsOfService.tsx'));
const MonacoTesting = lazy(() => import('./pages/MonacoTesting.tsx'));
const AtlanticaMachining = lazy(() => import('./pages/AtlanticaMachining.tsx'));
const NizaMachining = lazy(() => import('./pages/NizaMachining.tsx'));
const MediterraneaMachining = lazy(() => import('./pages/MediterraneaMachining.tsx'));
const MediterraneaRPTMachining = lazy(() => import('./pages/MediterraneaRPTMachining.tsx'));
const MonacoMachining = lazy(() => import('./pages/MonacoMachining.tsx'));
const GammaMachining = lazy(() => import('./pages/GammaMachining.tsx'));
const DeltaMachining = lazy(() => import('./pages/DeltaMachining.tsx'));
const TradicionalMachining = lazy(() => import('./pages/TradicionalMachining.tsx'));
const TechnicalCatalog = lazy(() => import('./pages/TechnicalCatalog.tsx'));

import { CalculatorProvider } from './context/CalculatorContext';
import { Analytics } from '@vercel/analytics/react';

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-background flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <CalculatorProvider>
      <Analytics />
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            <Route path="sistemas">
              <Route index element={<Navigate to="ventanas-y-puertas" replace />} />
              <Route path="ventanas-y-puertas" element={<Systems />} />
              <Route path="lamas-y-fachadas" element={<LamasYFachadas />} />
              <Route path="complementarios" element={<Complementarios />} />
              <Route path="accesorios" element={<Accesorios />} />
            </Route>
            <Route path="productos/:slug" element={<ProductDetail />} />
            <Route path="catalogo-tecnico/:slug" element={<TechnicalCatalog />} />
            <Route path="oficina-tecnica" element={<TechnicalOffice />} />
            <Route path="proyectos" element={<Projects />} />
            <Route path="sostenibilidad" element={<Sustainability />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sobre-nosotros" element={<AboutUs />} />
            <Route path="privacidad" element={<PrivacyPolicy />} />
            <Route path="terminos" element={<TermsOfService />} />
            <Route path="testeos/linea-monaco" element={<MonacoTesting />} />
            <Route path="mecanizados/linea-atlantica" element={<AtlanticaMachining />} />
            <Route path="mecanizados/linea-niza" element={<NizaMachining />} />
            <Route path="mecanizados/linea-mediterranea" element={<MediterraneaMachining />} />
            <Route path="mecanizados/linea-mediterranea-rpt" element={<MediterraneaRPTMachining />} />
            <Route path="mecanizados/linea-monaco" element={<MonacoMachining />} />
            <Route path="mecanizados/linea-gamma" element={<GammaMachining />} />
            <Route path="mecanizados/linea-delta" element={<DeltaMachining />} />
            <Route path="mecanizados/linea-tradicional" element={<TradicionalMachining />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
    </CalculatorProvider>
  );
}
