import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SummaryPage from './components/ReportSummary';
import VulnerabilitiesTable from './components/VulnerabilitiesTable';
import IndexPage from './components/IndexPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/resultlist" element={<VulnerabilitiesTable />} />

        <Route path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
