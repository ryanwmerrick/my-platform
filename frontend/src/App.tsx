import "./App.css";
import { useState } from "react";

type ReportKind = "bug" | "feature";

type Report = {
  id: string;
  text: string;
  kind: ReportKind;
};

function App() {
  const sampleReport: Report = {
    id: "1",
    text: "Navigation link is broken",
    kind: "bug",
  };

  const initialReports: Report[] = [
    { id: "1", text: "Navigation link is broken", kind: "bug" },
    { id: "2", text: "Add dark mode", kind: "feature" },
  ];

  const [reports, setReports] = useState<Report[]>([]);
  const [newReportText, setNewReportText] = useState("");

  const path = window.location.pathname.replace(/\/+$/, "") || "/";



  return (
    <main>
      <h1>Ryan Merrick</h1>

      <h2>Senior Capstone Production Platform</h2>

      <p>
        This site will present my software projects, engineering decisions, and
        production systems.
      </p>

      <p>Initial frontend setup in progress.</p>

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <ul>
          {initialReports.map((report) => (
            <li key={report.id}>
              {report.text} ({report.kind})
            </li>
          ))}
        </ul>
      </section>
      
      
    </main>
    
  );
}

export default App;