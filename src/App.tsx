/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Systems from './pages/Systems.tsx';
import LamasYFachadas from './pages/LamasYFachadas.tsx';
import Complementarios from './pages/Complementarios.tsx';
import Accesorios from './pages/Accesorios.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import TechnicalOffice from './pages/TechnicalOffice.tsx';
import Projects from './pages/Projects.tsx';
import Sustainability from './pages/Sustainability.tsx';
import Contact from './pages/Contact.tsx';
import AboutUs from './pages/AboutUs.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import MonacoTesting from './pages/MonacoTesting.tsx';
import AtlanticaMachining from './pages/AtlanticaMachining.tsx';
import NizaMachining from './pages/NizaMachining.tsx';
import MediterraneaMachining from './pages/MediterraneaMachining.tsx';
import MediterraneaRPTMachining from './pages/MediterraneaRPTMachining.tsx';
import MonacoMachining from './pages/MonacoMachining.tsx';
import GammaMachining from './pages/GammaMachining.tsx';
import TechnicalCatalog from './pages/TechnicalCatalog.tsx';

export default function App() {
  return (
    <Router>
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
        </Route>
      </Routes>
    </Router>
  );
}
