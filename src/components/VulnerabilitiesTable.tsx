import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import reportData from '@/report/publish.json';

function VulnerabilitiesTable() {
    const [sortedReports, setSortedReports] = useState(reportData);

    return (
        <>
            {Object.entries(sortedReports).map(([severity, reports]) => (
                <div key={severity} className="block">
                    {reports.map((report, index) => (
                        <table key={index} className="table is-striped is-fullwidth">
                            <thead>
                                <tr>
                                    <th colSpan={2}>「{severity}」の報告事項</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{report.Primary}-{report.Secondary}</td>
                                    <td>
                                        <span className='has-text-weight-bold'>{report.description}</span>
                                        {report.location.map((location, index) => (
                                            <div key={index}>
                                                {location}
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
            ))}
        </>
    );
}

export default VulnerabilitiesTable;

