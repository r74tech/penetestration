import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const REPORTS_DIR = path.join('src/report/results');
const OUTPUT_FILE = path.join('src/report/publish.json');

// 大項目の並び順を定義
const severityOrder = {
    'Critical': 1,
    'High': 2,
    'Medium': 3,
    'Low': 4,
    'Info': 5,
    // または日本語の場合
    '深刻': 1,
    '高': 2,
    '中': 3,
    '低': 4,
    '情報': 5
};


const generatePublishJson = () => {
    const reportFiles = fs.readdirSync(REPORTS_DIR);
    let reports = [];

    reportFiles.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(REPORTS_DIR, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(content);

            if (data.severity && data.issues) {
                reports.push(data);
            }
        }
    });

    const sortedReports = reports.reduce((acc, report) => {
        const severityLevel = report.severity || 'Unknown';
        if (!acc[severityLevel]) {
            acc[severityLevel] = [];
        }

        acc[severityLevel].push({
            description: report.issues.description,
            location: report.issues.location,
            Primary: severityOrder[severityLevel],
            Secondary: acc[severityLevel].length + 1,
        });

        return acc;
    }, {});

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(sortedReports, null, 2));
};

generatePublishJson();
