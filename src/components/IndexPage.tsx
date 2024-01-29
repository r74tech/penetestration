import React from 'react';
import SummaryPage from '@/components/ReportSummary';
import ReportResult from '@/components/ReportResult';
import ReportDetail from '@/components/ReportDetail';

function IndexPage() {
    return (
        <>
            <SummaryPage />
            <ReportResult />

            <ReportDetail />

        </>
        
    );
}

export default IndexPage;
