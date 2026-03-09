/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Debugger from './pages/Debugger';
import Analysis from './pages/Analysis';
import Compiler from './pages/Compiler';
import Optimization from './pages/Optimization';
import Rewriting from './pages/Rewriting';

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/debugger" element={<Debugger />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/compiler" element={<Compiler />} />
            <Route path="/optimization" element={<Optimization />} />
            <Route path="/rewriting" element={<Rewriting />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}
