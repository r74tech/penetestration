import React from 'react';
import 'bulma/css/bulma.min.css';
import reportData from '@/report/publish.json';

function VulnerabilitiesList() {
    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>脆弱性</th>
                        <th>危険度</th>
                        <th>検出数</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(reportData).map(([severity, reports]) => (
                        reports.map((report, index) => (
                            <tr key={`${severity}-${index}`}>
                                <td>{report.description}</td>
                                <td>{severity}</td>
                                <td>{report.location.length}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default VulnerabilitiesList;
