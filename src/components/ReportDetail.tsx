import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

function Report() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const loadReports = async () => {
            const reportModules = import.meta.glob('/src/report/results/*.md');
            console.log(reportModules);
            const loadedReports = [];
            for (const path in reportModules) {
                const { default: component, attributes } = await reportModules[path]();
                loadedReports.push({ component, attributes });
            }
            setReports(loadedReports);
        };

        loadReports();
    }, []);

    return (
        <>
            {reports.map((report, index) => (
                <div key={index}>
                    <h1 className="title">{report.attributes.name}</h1>
                    <div className="content">
                        <report.component />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Report;
