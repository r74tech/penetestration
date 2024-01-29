import React from 'react';
import ReportSummary, { attributes as ReportSummaryProps } from '@/report/summary.md';
import 'bulma/css/bulma.min.css';

function SummaryPage() {
    return (
        <>
            <div className="content">
                <hr />
                <h1 className="title has-text-centered">{ReportSummaryProps.title}</h1>
                <hr />

                <ReportSummary />
            </div>
        </>
    );
}

export default SummaryPage;
