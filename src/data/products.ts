export type DemoTab = {
  key: string;
  label: string;
  headline: string;
  kpis: { label: string; value: string }[];
  table?: { cols: string[]; rows: string[][] };
  chips?: string[];
  note?: string;
};

export type Product = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  accent: string; // css color token
  category: string;
  overview: string;
  audience: string[];
  problems: string[];
  solution: string;
  modules: { title: string; body: string }[];
  workflow: { step: string; body: string }[];
  tech: string[];
  outcomes: { label: string; body: string }[];
  cta: string;
  demo: DemoTab[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "hrm",
    name: "HRM",
    short: "Human Resource Management",
    tagline: "One platform for people, payroll and performance.",
    accent: "var(--p-hrm)",
    category: "Manage employees",
    overview:
      "HRM brings employee records, attendance, leave, payroll and appraisals into a single, configurable platform — so HR teams stop reconciling spreadsheets and start running people operations.",
    audience: ["HR teams", "Finance & payroll", "Managers", "Every employee"],
    problems: [
      "Employee data scattered across spreadsheets, email and paper files.",
      "Attendance and week-off rules differ per location and break monthly closing.",
      "Optional holidays and leave balances tracked manually.",
      "Payroll components hardcoded in a legacy tool nobody can change.",
      "Appraisal cycles run over email with no calibration trail.",
    ],
    solution:
      "A configurable HR core: define your working days, week-offs, leave types, optional holiday rules and salary components once — HRM applies them consistently across every payroll run, every branch and every employee self-service action.",
    modules: [
      { title: "Employee Management", body: "Profiles, records and documents, with employees uploading their own paperwork from their portal." },
      { title: "Attendance", body: "Daily tracking with configurable working days, week-offs and shift rules." },
      { title: "Leave & Holidays", body: "Requests, approvals, balances, leave types and an Indian holiday calendar with configurable optional holidays (minimum three, restricted to selected festivals)." },
      { title: "Payroll", body: "Salary structure, basic, PF, allowances and configurable deductions — processed, verified and released." },
      { title: "Payslips", body: "Branded payslips with the company logo, clear earnings and no clutter. Download any month." },
      { title: "Performance", body: "Appraisal cycles, evaluations, calibration and manager sign-off." },
      { title: "HR Dashboard", body: "Headcount, attendance, pending leave, payroll status and appraisal progress at a glance." },
      { title: "Self-Service", body: "Employees update details, upload documents, apply for leave and download payslips themselves." },
    ],
    workflow: [
      { step: "Configure", body: "Set working days, week-offs, leave types and salary components." },
      { step: "Onboard", body: "Import employees; they complete profiles and upload documents." },
      { step: "Operate", body: "Attendance and leave flow through approvals automatically." },
      { step: "Pay", body: "Run payroll on the configured structure and release payslips." },
      { step: "Appraise", body: "Run cycles, calibrate ratings and record outcomes." },
    ],
    tech: ["React", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL", "Redis", "AWS"],
    outcomes: [
      { label: "Less manual work", body: "Attendance, leave and payroll stop being three separate reconciliations." },
      { label: "Fewer payroll errors", body: "Salary components are configured once and applied consistently." },
      { label: "Faster HR response", body: "Self-service removes the routine queries from the HR inbox." },
      { label: "Audit-ready records", body: "Documents, approvals and appraisal trails stay in one place." },
    ],
    cta: "See HRM in Action",
    demo: [
      {
        key: "dashboard",
        label: "Dashboard",
        headline: "HR overview — March 2026",
        kpis: [
          { label: "Employees", value: "248" },
          { label: "Present today", value: "231" },
          { label: "Pending leave", value: "7" },
          { label: "Payroll status", value: "Ready" },
        ],
        chips: ["3 new joiners", "2 exits", "Appraisal cycle open"],
      },
      {
        key: "employees",
        label: "Employees",
        headline: "Employee directory",
        kpis: [
          { label: "Active", value: "248" },
          { label: "On probation", value: "14" },
          { label: "Documents pending", value: "9" },
        ],
        table: {
          cols: ["Employee", "Department", "Role", "Documents"],
          rows: [
            ["Anitha R", "Engineering", "Senior Developer", "Complete"],
            ["Karthik S", "Banking Practice", "Finacle Consultant", "Complete"],
            ["Divya M", "Finance", "Payroll Executive", "2 pending"],
            ["Rahul P", "Support", "L2 Engineer", "Complete"],
          ],
        },
        note: "Employees upload their own documents from the self-service portal.",
      },
      {
        key: "attendance",
        label: "Attendance",
        headline: "Attendance — week 11",
        kpis: [
          { label: "Working days", value: "22" },
          { label: "Week-offs", value: "Sat / Sun" },
          { label: "Avg attendance", value: "93%" },
        ],
        table: {
          cols: ["Employee", "Present", "Leave", "Week-off", "Status"],
          rows: [
            ["Anitha R", "5", "0", "2", "Regular"],
            ["Karthik S", "4", "1", "2", "Approved leave"],
            ["Divya M", "5", "0", "2", "Regular"],
            ["Rahul P", "3", "2", "2", "Approved leave"],
          ],
        },
      },
      {
        key: "leave",
        label: "Leave",
        headline: "Leave & holiday calendar",
        kpis: [
          { label: "Requests open", value: "7" },
          { label: "Optional holidays", value: "3 of 3" },
          { label: "Avg balance", value: "9.5 days" },
        ],
        table: {
          cols: ["Request", "Type", "Dates", "Status"],
          rows: [
            ["Karthik S", "Casual", "12–13 Mar", "Approved"],
            ["Rahul P", "Sick", "09–10 Mar", "Approved"],
            ["Divya M", "Optional — Pongal", "14 Jan", "Availed"],
            ["Anitha R", "Earned", "24–28 Mar", "Pending"],
          ],
        },
        note: "Optional holidays are restricted to a configured festival list, with a minimum of three days per year.",
      },
      {
        key: "payroll",
        label: "Payroll",
        headline: "Payroll run — March 2026",
        kpis: [
          { label: "Employees", value: "248" },
          { label: "Gross", value: "Configured" },
          { label: "Status", value: "Verified" },
        ],
        table: {
          cols: ["Component", "Type", "Basis", "Configurable"],
          rows: [
            ["Basic", "Earning", "% of CTC", "Yes"],
            ["HRA", "Earning", "% of basic", "Yes"],
            ["Special allowance", "Earning", "Balancing", "Yes"],
            ["Provident fund", "Deduction", "Statutory", "Yes"],
          ],
        },
        note: "Payslips carry the company logo and show earnings clearly — no invented deductions.",
      },
      {
        key: "performance",
        label: "Performance",
        headline: "Appraisal cycle — FY 25-26",
        kpis: [
          { label: "Cycle", value: "Annual" },
          { label: "Self-review done", value: "84%" },
          { label: "Calibration", value: "In progress" },
        ],
        table: {
          cols: ["Employee", "Self review", "Manager review", "Calibration"],
          rows: [
            ["Anitha R", "Submitted", "Submitted", "Done"],
            ["Karthik S", "Submitted", "In progress", "Pending"],
            ["Divya M", "Submitted", "Submitted", "Done"],
            ["Rahul P", "Pending", "—", "Pending"],
          ],
        },
      },
    ],
  },
  {
    slug: "campus",
    name: "Campus",
    short: "Campus & Education Management",
    tagline: "The whole institution, connected on one platform.",
    accent: "var(--p-campus)",
    category: "Manage an institution",
    overview:
      "Campus connects academics, administration and student life — attendance, timetable, examinations, OBE and NAAC, library, e-learning, fees, faculty, hostel and visitors — into one institutional ecosystem.",
    audience: ["Colleges & universities", "Schools", "Academic administrators", "Faculty & students"],
    problems: [
      "Every department runs a different tool; nothing reconciles.",
      "OBE and NAAC documentation assembled manually before every audit.",
      "Fee collection and academic records live in separate systems.",
      "Students chase staff for timetables, results and library status.",
    ],
    solution:
      "One ecosystem where academic and administrative data share the same source — so attendance feeds examination eligibility, results feed OBE attainment, and NAAC reporting is a query rather than a project.",
    modules: [
      { title: "Attendance", body: "Student attendance capture, tracking and records by section and subject." },
      { title: "Timetable", body: "Academic scheduling, faculty allocation and clash-free timetable management." },
      { title: "Examination", body: "Exam workflows, internal and external marks, results and academic information." },
      { title: "OBE & NAAC", body: "Outcome-based education mapping, attainment tracking and NAAC-ready academic data." },
      { title: "Library", body: "Catalogue, issue and return, dues and library records." },
      { title: "E-Learning", body: "Digital learning resources and online academic access." },
      { title: "Fee Management", body: "Fee structures, collection, payment tracking and receipts." },
      { title: "HR & Faculty", body: "Faculty profiles, workload and academic staff HR workflows." },
      { title: "AI Advisor", body: "AI assistance for students and staff on academic and institutional queries." },
      { title: "Knowledge Base", body: "Centralised institutional knowledge, circulars and policy access." },
      { title: "Visitor Management", body: "Visitor registration, records and campus gate tracking." },
      { title: "Hostel Management", body: "Room allocation, accommodation and hostel records." },
    ],
    workflow: [
      { step: "Set up", body: "Departments, programmes, courses and academic calendar." },
      { step: "Schedule", body: "Timetables, faculty allocation and exam calendar." },
      { step: "Run", body: "Attendance, e-learning, library and fees operate daily." },
      { step: "Assess", body: "Examinations, results and OBE attainment mapping." },
      { step: "Report", body: "NAAC and management reporting from live data." },
    ],
    tech: ["React", "TypeScript", "Java", "Spring Boot", "Python", "FastAPI", "MySQL", "MongoDB", "LLMs"],
    outcomes: [
      { label: "One source of truth", body: "Academics and administration stop maintaining parallel records." },
      { label: "Accreditation ready", body: "OBE attainment and NAAC data assembled from live records." },
      { label: "Less admin load", body: "Fees, library and hostel operations move to self-service." },
      { label: "Better student experience", body: "Timetable, results and resources available anytime." },
    ],
    cta: "Explore Campus",
    demo: [
      {
        key: "attendance",
        label: "Attendance",
        headline: "Attendance — CSE, Semester VI",
        kpis: [
          { label: "Students", value: "184" },
          { label: "Today", value: "91%" },
          { label: "Below 75%", value: "12" },
        ],
        table: {
          cols: ["Section", "Subject", "Present", "Absent"],
          rows: [
            ["A", "Machine Learning", "58", "4"],
            ["B", "Compiler Design", "55", "7"],
            ["C", "Cloud Computing", "54", "6"],
          ],
        },
      },
      {
        key: "timetable",
        label: "Timetable",
        headline: "Weekly schedule — CSE VI-A",
        kpis: [
          { label: "Periods / week", value: "35" },
          { label: "Faculty assigned", value: "9" },
          { label: "Clashes", value: "0" },
        ],
        table: {
          cols: ["Day", "Period 1", "Period 2", "Period 3"],
          rows: [
            ["Mon", "ML", "Compiler", "Cloud Lab"],
            ["Tue", "Cloud", "ML Lab", "Elective"],
            ["Wed", "Compiler", "Elective", "Project"],
          ],
        },
      },
      {
        key: "examination",
        label: "Examination",
        headline: "Exam cycle — End Semester",
        kpis: [
          { label: "Exams scheduled", value: "26" },
          { label: "Hall tickets", value: "Released" },
          { label: "Results published", value: "18" },
        ],
        table: {
          cols: ["Course", "Internal", "External", "Result"],
          rows: [
            ["Machine Learning", "Published", "Evaluated", "Published"],
            ["Compiler Design", "Published", "In progress", "Pending"],
            ["Cloud Computing", "Published", "Evaluated", "Published"],
          ],
        },
      },
      {
        key: "obe",
        label: "OBE & NAAC",
        headline: "Outcome attainment",
        kpis: [
          { label: "Courses mapped", value: "62" },
          { label: "PO attainment", value: "Tracked" },
          { label: "NAAC criteria", value: "7 of 7" },
        ],
        table: {
          cols: ["Course outcome", "Mapped PO", "Assessment", "Attainment"],
          rows: [
            ["CO1 — Model design", "PO1, PO3", "Internal + End sem", "Level 3"],
            ["CO2 — Evaluation", "PO2", "Assignment", "Level 2"],
            ["CO3 — Deployment", "PO5", "Lab", "Level 3"],
          ],
        },
      },
      {
        key: "library",
        label: "Library",
        headline: "Library operations",
        kpis: [
          { label: "Titles", value: "24,800" },
          { label: "Issued today", value: "76" },
          { label: "Overdue", value: "19" },
        ],
        table: {
          cols: ["Member", "Title", "Issued", "Due"],
          rows: [
            ["21CS042", "Pattern Recognition", "02 Mar", "16 Mar"],
            ["21CS118", "Distributed Systems", "05 Mar", "19 Mar"],
            ["Faculty — Dr. Meera", "Compiler Construction", "01 Mar", "29 Mar"],
          ],
        },
      },
      {
        key: "elearning",
        label: "E-Learning",
        headline: "Digital learning",
        kpis: [
          { label: "Courses online", value: "148" },
          { label: "Resources", value: "3,120" },
          { label: "Weekly active", value: "1,640" },
        ],
        chips: ["Lecture notes", "Recorded sessions", "Question banks", "Assignments"],
      },
      {
        key: "fees",
        label: "Fees",
        headline: "Fee collection",
        kpis: [
          { label: "Structures", value: "18" },
          { label: "Collected", value: "86%" },
          { label: "Pending", value: "214 students" },
        ],
        table: {
          cols: ["Programme", "Structure", "Collected", "Pending"],
          rows: [
            ["B.E. CSE", "Semester", "88%", "42"],
            ["B.E. ECE", "Semester", "84%", "51"],
            ["MBA", "Annual", "90%", "18"],
          ],
        },
      },
      {
        key: "faculty",
        label: "Faculty",
        headline: "Faculty & HR",
        kpis: [
          { label: "Faculty", value: "212" },
          { label: "Avg workload", value: "16 hrs" },
          { label: "Departments", value: "11" },
        ],
        table: {
          cols: ["Faculty", "Department", "Workload", "Status"],
          rows: [
            ["Dr. Meera K", "CSE", "18 hrs", "Active"],
            ["Prof. Suresh N", "ECE", "15 hrs", "Active"],
            ["Dr. Latha V", "MBA", "12 hrs", "On leave"],
          ],
        },
      },
      {
        key: "advisor",
        label: "AI Advisor",
        headline: "AI assistance for students and staff",
        kpis: [
          { label: "Queries this week", value: "1,284" },
          { label: "Grounded sources", value: "Institution data" },
          { label: "Escalations", value: "4%" },
        ],
        chips: ["\"When is my next exam?\"", "\"What is my attendance?\"", "\"Hostel fee due date?\"", "\"Library dues?\""],
        note: "Answers are grounded in institutional records and circulars.",
      },
      {
        key: "knowledge",
        label: "Knowledge Base",
        headline: "Institutional knowledge",
        kpis: [
          { label: "Documents", value: "2,410" },
          { label: "Circulars", value: "318" },
          { label: "Policies", value: "64" },
        ],
        chips: ["Academic regulations", "Examination policy", "Hostel rules", "Anti-ragging"],
      },
      {
        key: "visitor",
        label: "Visitors",
        headline: "Visitor management",
        kpis: [
          { label: "Today", value: "38" },
          { label: "Inside campus", value: "11" },
          { label: "Pre-approved", value: "22" },
        ],
        table: {
          cols: ["Visitor", "Purpose", "Host", "Status"],
          rows: [
            ["R. Karthik", "Placement drive", "T&P Cell", "Inside"],
            ["M. Shanthi", "Parent meeting", "CSE Office", "Checked out"],
            ["Vendor — Aqua", "Maintenance", "Facilities", "Inside"],
          ],
        },
      },
      {
        key: "hostel",
        label: "Hostel",
        headline: "Hostel management",
        kpis: [
          { label: "Rooms", value: "420" },
          { label: "Occupancy", value: "92%" },
          { label: "Requests", value: "7" },
        ],
        table: {
          cols: ["Block", "Rooms", "Occupied", "Vacant"],
          rows: [
            ["Men's A", "160", "151", "9"],
            ["Men's B", "140", "126", "14"],
            ["Women's C", "120", "110", "10"],
          ],
        },
      },
    ],
  },
  {
    slug: "worktrack",
    name: "WorkTrack",
    short: "Projects, Tasks & Team Productivity",
    tagline: "Every project, sprint and hour in one view.",
    accent: "var(--p-worktrack)",
    category: "Manage projects & teams",
    overview:
      "WorkTrack is a modern project, task and team productivity platform — projects, tasks, issues, sprints, timesheets and team management, with search that actually finds things.",
    audience: ["Delivery teams", "Project managers", "Engineering leads", "Operations"],
    problems: [
      "Project status lives in status calls, not in a system.",
      "Tasks, issues and sprints tracked in three different tools.",
      "Timesheets collected at month end, too late to act on.",
      "No single view of who is working on what.",
    ],
    solution:
      "A single workspace where work is planned, tracked and measured: projects roll up from tasks and issues, sprints show real progress, and timesheets are captured as work happens.",
    modules: [
      { title: "Dashboard", body: "Portfolio-level view of progress, risk and workload." },
      { title: "Projects", body: "Create, manage and track projects with details and progress." },
      { title: "Tasks", body: "Creation, assignment, status tracking and dependencies." },
      { title: "Issues", body: "Raise, triage, assign and resolve issues with history." },
      { title: "Sprints", body: "Sprint planning, scope changes and burn-down progress." },
      { title: "Timesheets", body: "Time tracking per employee and project with visibility for leads." },
      { title: "Team Management", body: "Members, roles and responsibilities across projects." },
      { title: "Search", body: "Global search across projects, tasks, issues and people." },
    ],
    workflow: [
      { step: "Plan", body: "Create the project, define scope and build the backlog." },
      { step: "Sprint", body: "Pull work into a sprint and assign owners." },
      { step: "Execute", body: "Tasks and issues move through status with live updates." },
      { step: "Track", body: "Timesheets and progress captured as work happens." },
      { step: "Review", body: "Sprint review, velocity and delivery reporting." },
    ],
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "WebSockets", "AWS"],
    outcomes: [
      { label: "Real visibility", body: "Status comes from the system, not from status meetings." },
      { label: "Predictable delivery", body: "Sprint history makes commitments realistic." },
      { label: "Accurate effort data", body: "Timesheets tie hours to projects while they are fresh." },
      { label: "Balanced teams", body: "Workload is visible before people are overloaded." },
    ],
    cta: "Explore WorkTrack",
    demo: [
      {
        key: "dashboard",
        label: "Dashboard",
        headline: "Delivery overview",
        kpis: [
          { label: "Active projects", value: "12" },
          { label: "Open tasks", value: "186" },
          { label: "Open issues", value: "23" },
          { label: "Sprint", value: "Day 6 of 10" },
        ],
        chips: ["3 projects at risk", "Velocity steady", "2 sprints closing Friday"],
      },
      {
        key: "projects",
        label: "Projects",
        headline: "Active projects",
        kpis: [
          { label: "Active", value: "12" },
          { label: "On track", value: "9" },
          { label: "At risk", value: "3" },
        ],
        table: {
          cols: ["Project", "Lead", "Progress", "Status"],
          rows: [
            ["Core Banking AMS", "Karthik S", "72%", "On track"],
            ["Campus Rollout — TN", "Divya M", "48%", "At risk"],
            ["AWS Migration", "Anitha R", "90%", "On track"],
          ],
        },
      },
      {
        key: "tasks",
        label: "Tasks",
        headline: "Task board",
        kpis: [
          { label: "To do", value: "64" },
          { label: "In progress", value: "41" },
          { label: "Done this sprint", value: "81" },
        ],
        table: {
          cols: ["Task", "Assignee", "Priority", "Status"],
          rows: [
            ["Payroll component config UI", "Divya M", "High", "In progress"],
            ["Attendance import job", "Rahul P", "Medium", "To do"],
            ["Sprint report export", "Anitha R", "Low", "Done"],
          ],
        },
      },
      {
        key: "issues",
        label: "Issues",
        headline: "Issue tracking",
        kpis: [
          { label: "Open", value: "23" },
          { label: "Critical", value: "2" },
          { label: "Avg resolution", value: "1.8 days" },
        ],
        table: {
          cols: ["Issue", "Severity", "Owner", "Status"],
          rows: [
            ["Timesheet totals off by rounding", "Medium", "Rahul P", "In review"],
            ["Sprint burndown not refreshing", "Critical", "Anitha R", "In progress"],
            ["Export missing sub-tasks", "Low", "Divya M", "Open"],
          ],
        },
      },
      {
        key: "sprints",
        label: "Sprints",
        headline: "Sprint 24 — Delivery",
        kpis: [
          { label: "Committed", value: "48 pts" },
          { label: "Completed", value: "31 pts" },
          { label: "Scope added", value: "5 pts" },
        ],
        table: {
          cols: ["Sprint", "Committed", "Completed", "Outcome"],
          rows: [
            ["Sprint 22", "44 pts", "44 pts", "Closed"],
            ["Sprint 23", "46 pts", "42 pts", "Closed"],
            ["Sprint 24", "48 pts", "31 pts", "In progress"],
          ],
        },
      },
      {
        key: "timesheets",
        label: "Timesheets",
        headline: "Time tracking — this week",
        kpis: [
          { label: "Hours logged", value: "1,284" },
          { label: "Billable", value: "78%" },
          { label: "Submissions", value: "94%" },
        ],
        table: {
          cols: ["Member", "Project", "Hours", "Status"],
          rows: [
            ["Anitha R", "AWS Migration", "38", "Submitted"],
            ["Karthik S", "Core Banking AMS", "41", "Submitted"],
            ["Rahul P", "Campus Rollout", "27", "Draft"],
          ],
        },
      },
      {
        key: "team",
        label: "Team",
        headline: "Team management",
        kpis: [
          { label: "Members", value: "46" },
          { label: "Roles", value: "8" },
          { label: "Allocation", value: "Balanced" },
        ],
        table: {
          cols: ["Member", "Role", "Projects", "Load"],
          rows: [
            ["Anitha R", "Tech Lead", "2", "Healthy"],
            ["Karthik S", "Consultant", "3", "High"],
            ["Divya M", "Analyst", "2", "Healthy"],
          ],
        },
      },
    ],
  },
  {
    slug: "iis",
    name: "IIS",
    short: "Immortal Intelligence Suite",
    tagline: "AI automation layer for Infosys Finacle.",
    accent: "var(--p-iis)",
    category: "Enterprise banking automation",
    overview:
      "IIS sits on top of an existing Finacle estate and takes over the repetitive core banking work — end of day, loan workflows, KYC, treasury and RBI reporting — without disrupting the setup operations teams already trust.",
    audience: ["Cooperative banks", "Private banks", "NBFCs", "Core banking operations"],
    problems: [
      "End-of-day processing consumes hours of manual effort every night.",
      "Loan and KYC workflows depend on repeated manual data entry.",
      "Regulatory reporting assembled by hand under deadline pressure.",
      "Every exception needs a senior operator to interpret it.",
    ],
    solution:
      "An automation layer that integrates through Finacle APIs, runs the repeatable work on schedule, and escalates only genuine exceptions to your operations team.",
    modules: [
      { title: "EOD Automation", body: "Scheduled end-of-day runs with reconciliation and exception routing." },
      { title: "Loan Workflows", body: "Origination, documentation and disbursement automation." },
      { title: "KYC Processing", body: "Document intelligence and verification workflows." },
      { title: "Treasury Automation", body: "Routine treasury operations and reconciliations." },
      { title: "RBI Reporting", body: "Automated regulatory returns with audit trails." },
      { title: "Finacle Integration", body: "API-level integration that respects existing configuration." },
    ],
    workflow: [
      { step: "Assess", body: "Map the manual work in the existing Finacle estate." },
      { step: "Integrate", body: "Connect through Finacle APIs in a controlled environment." },
      { step: "Automate", body: "Move batch and workflow steps onto schedules." },
      { step: "Monitor", body: "Track runs, exceptions and reconciliation results." },
      { step: "Extend", body: "Add modules once operations trust the first ones." },
    ],
    tech: ["Python", "Finacle APIs", "Oracle", "Java", "Airflow", "AWS"],
    outcomes: [
      { label: "Hours returned nightly", body: "EOD moves from manual execution to supervised automation." },
      { label: "Fewer manual errors", body: "Repeatable steps run the same way every time." },
      { label: "Reporting on time", body: "Regulatory returns generated from live data." },
      { label: "No rip and replace", body: "Works alongside the existing Finacle setup." },
    ],
    cta: "Explore IIS",
    demo: [
      {
        key: "eod",
        label: "EOD",
        headline: "End-of-day automation",
        kpis: [
          { label: "Batches", value: "36" },
          { label: "Completed", value: "34" },
          { label: "Exceptions", value: "2" },
        ],
        table: {
          cols: ["Batch", "Branch group", "Duration", "Status"],
          rows: [
            ["Interest application", "All", "6 min", "Completed"],
            ["GL reconciliation", "Zone 1", "9 min", "Completed"],
            ["Standing instructions", "Zone 2", "4 min", "Exception"],
          ],
        },
      },
      {
        key: "loans",
        label: "Loans & KYC",
        headline: "Workflow automation",
        kpis: [
          { label: "Applications", value: "142" },
          { label: "Auto-processed", value: "108" },
          { label: "Needs review", value: "34" },
        ],
        table: {
          cols: ["Application", "Stage", "Documents", "Status"],
          rows: [
            ["LN-20416", "Verification", "Extracted", "Auto"],
            ["LN-20417", "Credit check", "Extracted", "Review"],
            ["LN-20418", "Disbursement", "Complete", "Auto"],
          ],
        },
      },
      {
        key: "reporting",
        label: "Reporting",
        headline: "Regulatory reporting",
        kpis: [
          { label: "Returns", value: "Scheduled" },
          { label: "Audit trail", value: "Complete" },
          { label: "Manual edits", value: "Logged" },
        ],
        chips: ["Automated returns", "Reconciliation evidence", "Exception log", "Sign-off trail"],
      },
    ],
  },
  {
    slug: "askbot",
    name: "ASKBOT",
    short: "AI Assistant for Banking Staff",
    tagline: "Answers grounded in your own documentation.",
    accent: "var(--p-askbot)",
    category: "Build intelligent AI experiences",
    overview:
      "ASKBOT answers Finacle and process questions in natural language, grounded in your own documentation, so new staff become productive faster and senior staff get interrupted less.",
    audience: ["Branch staff", "Training teams", "Operations", "Support desks"],
    problems: [
      "New staff cannot find answers in hundreds of pages of documentation.",
      "Senior operators spend their day answering the same questions.",
      "Generic AI tools invent answers that do not match your setup.",
      "Knowledge differs branch to branch.",
    ],
    solution:
      "Retrieval-augmented generation over your own documents with role-based access — every answer cites the source it came from, so staff can verify before acting.",
    modules: [
      { title: "Natural Language Q&A", body: "Ask in plain language, in context." },
      { title: "Retrieval-Augmented Generation", body: "Answers grounded in your uploaded documentation." },
      { title: "FAISS Vector Search", body: "Fast semantic search across large document sets." },
      { title: "Role-Based Access", body: "Content visibility scoped to role and branch." },
      { title: "Onboarding Kits", body: "Guided learning paths for new joiners." },
      { title: "Multi-Branch Deployment", body: "Rollout across branches with shared knowledge." },
    ],
    workflow: [
      { step: "Ingest", body: "Upload manuals, SOPs and circulars." },
      { step: "Index", body: "Documents chunked and embedded into vector search." },
      { step: "Ask", body: "Staff query in natural language." },
      { step: "Ground", body: "Answers assembled from retrieved sources with citations." },
      { step: "Improve", body: "Gaps in documentation surfaced from unanswered queries." },
    ],
    tech: ["Python", "LangChain", "FAISS", "LLMs", "FastAPI", "PostgreSQL", "AWS"],
    outcomes: [
      { label: "Faster onboarding", body: "New staff find answers without waiting for a senior." },
      { label: "Fewer interruptions", body: "Routine questions handled by the assistant." },
      { label: "Consistent answers", body: "Every branch works from the same knowledge." },
      { label: "Verifiable", body: "Each answer cites its source document." },
    ],
    cta: "Explore ASKBOT",
    demo: [
      {
        key: "ask",
        label: "Ask",
        headline: "Natural language Q&A",
        kpis: [
          { label: "Questions / week", value: "2,140" },
          { label: "Answered with sources", value: "96%" },
          { label: "Escalated", value: "4%" },
        ],
        chips: [
          "\"How do I reverse a wrongly posted entry?\"",
          "\"What is the KYC re-verification cycle?\"",
          "\"Which menu handles standing instructions?\"",
        ],
      },
      {
        key: "sources",
        label: "Sources",
        headline: "Grounded knowledge base",
        kpis: [
          { label: "Documents indexed", value: "1,860" },
          { label: "Chunks", value: "94,000" },
          { label: "Search", value: "FAISS" },
        ],
        table: {
          cols: ["Document", "Type", "Scope", "Status"],
          rows: [
            ["Finacle Teller Manual", "Manual", "All branches", "Indexed"],
            ["KYC Circular 2026-04", "Circular", "Compliance", "Indexed"],
            ["Loan SOP v3", "SOP", "Credit team", "Indexed"],
          ],
        },
      },
      {
        key: "access",
        label: "Access",
        headline: "Role-based access",
        kpis: [
          { label: "Roles", value: "9" },
          { label: "Branches", value: "64" },
          { label: "Audit log", value: "Enabled" },
        ],
        table: {
          cols: ["Role", "Visible content", "Branch scope"],
          rows: [
            ["Teller", "Teller manuals, SOPs", "Own branch"],
            ["Branch manager", "All operational docs", "Own branch"],
            ["Compliance", "Circulars, audit docs", "All"],
          ],
        },
      },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);