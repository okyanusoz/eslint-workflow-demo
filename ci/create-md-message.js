const fs = require("fs")

const report_txt = fs.readFileSync("report.txt", "utf-8")
if(report_txt == ""){
    fs.writeFileSync(".github/workflows/report.md", "All ESLint linting passed.")
    process.exit()
}
const report_md = report_txt.split("\n").map(line => {
    return line + "\n"
}).join("\n")

fs.writeFileSync(".github/workflows/report.md", report_md)
