import React from 'react';
import ReportResult, { attributes as ReportResultProps } from '@/report/result.md';
import VulnerabilitiesTable from '@/components/VulnerabilitiesTable';
import VulnerabilitiesList from '@/components/VulnerabilitiesList';
import 'bulma/css/bulma.min.css';

function SummaryPage() {
    return (
        <>
            <div className="content">
                <hr />
                <h1 className="title has-text-centered">{ReportResultProps.title}</h1>
                <hr />
                <h2 className="subtitle">
                    検出一覧
                </h2>
                <VulnerabilitiesList />

                <h2 className="subtitle">
                    危険度別脆弱性一覧
                </h2>
                <VulnerabilitiesTable />
                <ReportResult />
            </div>
        </>
    );
}

export default SummaryPage;
