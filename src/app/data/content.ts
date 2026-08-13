export type WorkType = "from-scratch" | "maintenance" | "platform" | "earlier";
export type CaseStudyDepth = "flagship" | "standard" | "specialized" | "archive";

export type ProjectMedia = {
  src: string;
  alt: string;
  kind: "icon" | "screenshot";
};

export type ProjectDecision = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  year: string;
  period: string;
  workType: WorkType;
  depth: CaseStudyDepth;
  featured?: boolean;
  accent: string;
  summary: string;
  overview: string;
  ownership: string;
  teamBoundary: string;
  publicSignal?: string;
  publisher?: string;
  playUrl?: string;
  githubUrl?: string;
  stack: string[];
  capabilities: string[];
  constraints?: string[];
  decisions?: ProjectDecision[];
  hardestProblem?: string;
  quality?: string[];
  results: string[];
  lessons?: string[];
  media: ProjectMedia[];
  related?: string[];
  confidentiality?: string[];
  verifiedAt?: string;
};

export type AppPortfolioRecord = {
  slug: string;
  title: string;
  category: string;
  workType: "from-scratch" | "maintenance";
  summary: string;
  signal: string;
  installCount: number;
  verifiedAt: string;
  playUrl: string;
  detailUrl: string;
  icon?: ProjectMedia;
  details: string[];
};

export type InsightSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published: string;
  updated: string;
  readingTime: string;
  accent: string;
  sections: InsightSection[];
  relatedProjects: string[];
};

export const profile = {
  name: "Muhammad Shahroze",
  title: "Android Engineer",
  email: "smshahroze16602@gmail.com",
  location: "Islamabad, Pakistan",
  timezone: "UTC+5",
  experience: "3+ years",
  linkedin: "https://linkedin.com/in/muhammad-shahroze",
  github: "https://github.com/Shahroze16602",
  availability: "Available for remote roles with US and European teams · Open to hybrid roles in Islamabad · Open to collaborations",
  educationStatus:
    "Applicant for the MS in AI and Autonomous Systems at NUST, with studies planned for September 2026.",
};

export const proofMetrics = [
  { value: "3+", label: "Years building Android products", note: "Native Android delivery and production support" },
  { value: "1M+", label: "Largest public install band", note: "Experience maintaining established products" },
];

const playMedia = (slug: string, title: string, screenshots = 3): ProjectMedia[] => [
  { src: `/apps/${slug}/icon.webp`, alt: `${title} app icon from its public Google Play listing`, kind: "icon" },
  ...Array.from({ length: screenshots }, (_, index) => ({
    src: `/apps/${slug}/screen-${index + 1}.webp`,
    alt: `${title} public Google Play product screenshot ${index + 1}`,
    kind: "screenshot" as const,
  })),
];

const scratchBase = {
  period: "Last 15 months",
  workType: "from-scratch" as const,
  ownership: "Personally engineered the Android application from the ground up.",
  teamBoundary:
    "Android implementation was my responsibility within a wider company team; product direction, design, publishing, and supporting work involved other contributors.",
  stack: ["Kotlin", "Android SDK", "Production APIs"],
  verifiedAt: "August 12, 2026",
};

export const projects: Project[] = [
  {
    ...scratchBase,
    slug: "plant-identifier",
    title: "Plant Identifier & Plant Care",
    shortTitle: "Plant Identifier",
    category: "AI-assisted utility",
    year: "2026",
    depth: "flagship",
    featured: true,
    accent: "#b8ff5a",
    summary: "An AI-backed plant companion that turns a camera input into identification, disease guidance, care routines, reminders, and follow-up conversation.",
    overview:
      "The product connects an image-first recognition flow with structured plant knowledge and repeat-use care tools. The Android experience has to make an uncertain AI response understandable while keeping capture, results, reminders, history, and assistance coherent.",
    publicSignal: "100K+ installs on Google Play",
    publisher: "PIONEER SOCIAL MEDIA APPLICATIONS",
    playUrl: "https://play.google.com/store/apps/details?id=com.psma.plant.plantidentifier",
    stack: ["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM", "Ktor", "Koin", "Firebase"],
    capabilities: ["Camera-led identification", "Disease diagnosis flow", "Care plans and reminders", "Saved plant gallery", "AI chat"],
    constraints: ["Image capture and upload states", "Communicating probabilistic results", "Long-running care reminders", "API failure and retry paths", "Analytics without exposing private user content"],
    decisions: [
      { title: "Treat recognition as a state machine", detail: "Capture, processing, success, partial response, failure, and retry need explicit UI states instead of one fragile loading screen." },
      { title: "Separate discovery from retention", detail: "Identification solves the immediate question; care routines, reminders, history, and chat create the durable product loop." },
      { title: "Make uncertainty visible", detail: "AI-backed results should provide context and alternatives instead of presenting every response as absolute fact." },
    ],
    hardestProblem: "Coordinating media input, a remote recognition response, structured results, and recoverable failure states without making the user restart the journey.",
    quality: ["Crash reporting through Firebase", "Remote configuration for controlled product changes", "Clear empty, loading, error, and retry states", "Lifecycle-safe asynchronous work"],
    results: ["Live production product", "100K+ public install band", "Broad feature surface spanning acquisition and retention"],
    lessons: ["An AI feature becomes a product only when the states around the model response are dependable.", "Retention tools should feel like a natural continuation of the first-use promise."],
    media: playMedia("plant-identifier", "Plant Identifier & Plant Care"),
    related: ["antique-identifier", "schedule-planner"],
  },
  {
    ...scratchBase,
    slug: "schedule-planner",
    title: "To do List — Schedule Planner",
    shortTitle: "Schedule Planner",
    category: "Productivity",
    year: "2025",
    depth: "flagship",
    featured: true,
    accent: "#48d7ff",
    summary: "A persistent daily planning system connecting tasks, schedules, reminders, notes, and calendar context.",
    overview:
      "Schedule Planner brings several time-sensitive workflows into one Android product. The engineering challenge is less about rendering a task list and more about preserving intent across storage, reminders, calendar changes, process death, and repeated daily use.",
    publicSignal: "100K+ installs on Google Play",
    publisher: "PIONEER SOCIAL MEDIA APPLICATIONS",
    playUrl: "https://play.google.com/store/apps/details?id=todolist.dailyplanner.scheduleplanner.reminders.notes",
    stack: ["Kotlin", "MVVM", "Room", "Google Calendar", "Android reminders"],
    capabilities: ["Tasks and schedules", "Reminder delivery", "Notes", "Calendar integration", "Persistent local data"],
    constraints: ["Time-zone and date correctness", "Durable local state", "Process restarts", "Notification permissions", "Calendar synchronization boundaries"],
    decisions: [
      { title: "Local state is the source of continuity", detail: "The user should still understand the day and edit their plan even when a remote integration is unavailable." },
      { title: "Model time explicitly", detail: "Tasks, schedules, recurrence, reminders, and calendar events are related but not interchangeable concepts." },
      { title: "Design around interruption", detail: "Creation and editing flows need to survive navigation, permission requests, and app lifecycle changes." },
    ],
    hardestProblem: "Maintaining predictable reminder and schedule behavior while several Android lifecycle, permission, and time-related systems interact.",
    quality: ["Room-backed persistence", "Defensive schedule state", "Permission-aware reminder UX", "Crash and behavior monitoring"],
    results: ["Live production product", "100K+ public install band", "Multiple planning workflows unified in one app"],
    lessons: ["Productivity software earns trust through consistency more than novelty.", "Time-based domain models deserve more rigor than their simple screens imply."],
    media: playMedia("schedule-planner", "To do List — Schedule Planner", 1),
    related: ["plant-identifier", "route-planner", "production-improvements"],
  },
  {
    ...scratchBase,
    slug: "route-planner",
    title: "Route Planner — GPS & Maps",
    shortTitle: "Route Planner",
    category: "Location & navigation",
    year: "2025",
    depth: "flagship",
    featured: true,
    accent: "#7c5cff",
    summary: "A multi-feature travel utility combining route planning, navigation, places, compass, weather, and parking context.",
    overview:
      "Route Planner sits at the intersection of continuous location data, map rendering, permissions, network results, and several travel utilities. Its Android architecture needs to keep these systems useful across changing connectivity and lifecycle states.",
    publicSignal: "100K+ installs on Google Play",
    publisher: "TOPEDGE TECH",
    playUrl: "https://play.google.com/store/apps/details?id=gpsnavigation.routeplanner.routefinder.tet.app",
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Google Maps API", "REST APIs"],
    capabilities: ["Multi-stop route planning", "GPS navigation", "Nearby places", "Compass and weather", "Parking utilities"],
    constraints: ["Runtime location permissions", "GPS accuracy and availability", "Map and API lifecycle", "Network degradation", "Battery-conscious updates"],
    decisions: [
      { title: "Centralize location state", detail: "Map features should observe a single permission-aware location source rather than starting competing updates." },
      { title: "Keep utilities loosely coupled", detail: "Routes, nearby places, parking, weather, and compass context can share location without becoming one untestable screen state." },
      { title: "Design recovery paths", detail: "Denied permissions, disabled GPS, missing connectivity, and empty search results are ordinary product states." },
    ],
    hardestProblem: "Coordinating live location, permission transitions, map state, and network-backed utilities across the Android lifecycle.",
    quality: ["Permission-aware state", "Lifecycle-controlled updates", "Clear GPS/network recovery", "Firebase monitoring and remote configuration"],
    results: ["Live production product", "100K+ public install band", "Broad location-based feature set"],
    lessons: ["A map is only one surface of a reliable location product.", "Permission and recovery UX are core features, not edge cases."],
    media: playMedia("route-planner", "Route Planner — GPS & Maps", 0),
    related: ["fake-gps", "schedule-planner", "app-blocker"],
  },
  {
    ...scratchBase,
    slug: "voice-recorder",
    title: "Voice Recorder · Voice Memos",
    shortTitle: "Voice Recorder",
    category: "Media & audio",
    year: "2026",
    depth: "flagship",
    featured: true,
    accent: "#ff8ad8",
    summary: "A recording workspace spanning background capture, transcription, noise reduction, editing, and video-to-audio conversion.",
    overview:
      "Audio products combine a deceptively simple control surface with long-running work, file ownership, interruptions, media processing, and recovery. This product brings the recording and post-processing journey into one Android experience.",
    publicSignal: "50K+ installs on Google Play",
    publisher: "Markhoor Studio",
    playUrl: "https://play.google.com/store/apps/details?id=com.mks.voicerecorder.audiorecorder.voice",
    stack: ["Kotlin", "Android media APIs", "Background work", "Firebase"],
    capabilities: ["Background recording", "Transcription", "Noise reduction", "Audio editing", "Video-to-MP3 conversion"],
    constraints: ["Long-running capture", "Interruptions and lifecycle changes", "File and storage behavior", "Media processing feedback", "Recoverable failure states"],
    decisions: [
      { title: "Make recording state authoritative", detail: "UI controls must reflect the actual recorder lifecycle through start, pause, resume, stop, interruption, and error." },
      { title: "Separate capture from processing", detail: "Recording, transcription, cleanup, editing, and conversion are distinct jobs with distinct progress and failure behavior." },
      { title: "Protect user-created media", detail: "File operations require explicit success, recoverable errors, and careful handling across storage environments." },
    ],
    hardestProblem: "Keeping a long-running media operation understandable and recoverable while the app moves through lifecycle changes and downstream processing work.",
    quality: ["Explicit recorder state", "Background-operation feedback", "File-operation safeguards", "Crash monitoring"],
    results: ["Live production product", "50K+ public install band", "Capture and post-processing combined in one product"],
    lessons: ["The most important recorder UI is the truthfulness of its state.", "Long-running work needs visible progress and a recovery contract."],
    media: playMedia("voice-recorder", "Voice Recorder · Voice Memos"),
    related: ["voice-notepad", "smart-printer", "production-improvements"],
  },
  {
    ...scratchBase,
    slug: "hidden-device-detector",
    title: "Hidden Device Detector: Finder",
    shortTitle: "Hidden Device Detector",
    category: "Sensors & privacy",
    year: "2026",
    depth: "standard",
    accent: "#ffcc66",
    summary: "A privacy utility combining network inspection, magnetometer input, infrared-assisted checks, and offline tools.",
    overview: "An Android utility that turns several device capabilities into guided detection workflows while explaining limitations and permission needs.",
    publicSignal: "10K+ installs on Google Play",
    publisher: "TOPEDGE TECH",
    playUrl: "https://play.google.com/store/apps/details?id=com.tet.detectorhiddendevices.detector",
    capabilities: ["Wi-Fi/network scan", "Magnetometer detection", "Infrared-assisted checks", "Offline utilities"],
    results: ["Engineered from scratch", "Live on Google Play", "10K+ public install band"],
    media: playMedia("hidden-device-detector", "Hidden Device Detector: Finder"),
    related: ["app-blocker", "fake-gps"],
  },
  {
    ...scratchBase,
    slug: "recover-deleted-messages",
    title: "Recover Deleted Messages: RDM",
    shortTitle: "Recover Messages",
    category: "Notifications & media",
    year: "2026",
    depth: "standard",
    accent: "#59e3c1",
    summary: "A local-first notification and media utility for message history, status saving, and direct chat workflows.",
    overview: "The app organizes notification-derived history and media actions while keeping the workflow on-device and permission-aware.",
    publicSignal: "1K+ installs on Google Play",
    publisher: "IBES Nova Studio",
    playUrl: "https://play.google.com/store/apps/details?id=com.ibes.wa.recovered.app",
    capabilities: ["Notification history", "Deleted-message visibility", "Recovered media", "Status saving", "Direct chat"],
    results: ["Engineered from scratch", "Live on Google Play", "On-device processing emphasis"],
    media: playMedia("recover-deleted-messages", "Recover Deleted Messages: RDM"),
    related: ["notification-blocker", "status-downloader"],
  },
  {
    ...scratchBase,
    slug: "notification-blocker",
    title: "Notification Blocker & Cleaner",
    shortTitle: "Notification Blocker",
    category: "Focus & system utility",
    year: "2026",
    depth: "standard",
    accent: "#ff785a",
    summary: "A focused notification-management utility built around blocking, cleanup, and background reliability.",
    overview: "A compact system-facing product where permission clarity, durable rules, and predictable background behavior define trust.",
    publicSignal: "500+ installs on Google Play",
    publisher: "IBES Apps",
    playUrl: "https://play.google.com/store/apps/details?id=com.ibes.notificationblocker.cleaner",
    capabilities: ["Notification blocking", "Cleanup flows", "Background rules", "Focus-oriented UX"],
    results: ["Engineered from scratch", "Live on Google Play", "System-facing Android behavior"],
    media: playMedia("notification-blocker", "Notification Blocker & Cleaner"),
    related: ["app-blocker", "recover-deleted-messages"],
  },
  {
    ...scratchBase,
    slug: "football-live-scores",
    title: "Football Score — Live Scores",
    shortTitle: "Football Live Scores",
    category: "Real-time data",
    year: "2026",
    depth: "standard",
    accent: "#67e67a",
    summary: "A live football companion for scores, fixtures, standings, favorites, and match notifications.",
    overview: "A real-time data product that must reconcile frequent API updates, cached context, favorite teams, and time-sensitive alerts.",
    publicSignal: "10K+ installs on Google Play",
    publisher: "Mobile Notepad Apps",
    playUrl: "https://play.google.com/store/apps/details?id=com.mna.livescore.football",
    capabilities: ["Live scores", "Fixtures", "Standings", "Favorites", "Notifications"],
    results: ["Engineered from scratch", "Live on Google Play", "10K+ public install band"],
    media: playMedia("football-live-scores", "Football Score — Live Scores", 0),
    related: ["schedule-planner", "route-planner"],
  },
  {
    ...scratchBase,
    slug: "smart-printer",
    title: "Smart Printer: Scan & Print",
    shortTitle: "Smart Printer",
    category: "Documents & devices",
    year: "2026",
    depth: "standard",
    accent: "#63b9ff",
    summary: "A document utility combining wireless printing, scanning, PDF organization, signatures, and watermark tools.",
    overview: "The Android product coordinates files, device services, document transformation, and clear progress around actions users cannot afford to lose.",
    publicSignal: "5K+ installs on Google Play",
    publisher: "PIONEER SOCIAL MEDIA APPLICATIONS",
    playUrl: "https://play.google.com/store/apps/details?id=com.psma.smart.printer.smartprinter",
    capabilities: ["Wireless printing", "Document scanner", "PDF merge and reorder", "Crop and rotate", "Signatures and watermarks"],
    results: ["Engineered from scratch", "Live on Google Play", "Broad document workflow"],
    media: playMedia("smart-printer", "Smart Printer: Scan & Print"),
    related: ["voice-recorder", "copy-data"],
  },
  {
    ...scratchBase,
    slug: "antique-identifier",
    title: "Antique Identifier & Scanner",
    shortTitle: "Antique Identifier",
    category: "AI-assisted utility",
    year: "2026",
    depth: "standard",
    accent: "#d8a96d",
    summary: "An image-recognition utility connecting antique identification with valuation context and historical information.",
    overview: "A camera-to-result product that has to present recognition, uncertainty, valuation context, and reference information in an understandable hierarchy.",
    publicSignal: "1K+ installs on Google Play",
    publisher: "PIONEER SOCIAL MEDIA APPLICATIONS",
    playUrl: "https://play.google.com/store/apps/details?id=com.antiqueworth.identifier.psma.app",
    capabilities: ["Image recognition", "Valuation context", "Object history", "Result exploration"],
    results: ["Engineered from scratch", "Live on Google Play", "AI-backed visual workflow"],
    media: playMedia("antique-identifier", "Antique Identifier & Scanner"),
    related: ["plant-identifier", "coin-identifier", "stone-identifier"],
  },
  {
    ...scratchBase,
    slug: "app-blocker",
    title: "App Blocker: Block Apps, Sites",
    shortTitle: "App Blocker",
    category: "Digital wellbeing",
    year: "2026",
    depth: "standard",
    accent: "#c77dff",
    summary: "A system-level focus product with app and site blocking, schedules, usage reports, strict mode, and PIN controls.",
    overview: "A sensitive Android utility built around Accessibility Service behavior, background enforcement, clear consent, and escape-resistant but understandable controls.",
    publicSignal: "10K+ installs on Google Play",
    publisher: "TOPEDGE TECH",
    playUrl: "https://play.google.com/store/apps/details?id=com.tet.appblocker.screenmonitor.appblock",
    capabilities: ["App blocking", "Site blocking", "Schedules", "Usage reports", "Strict mode and PIN"],
    results: ["Engineered from scratch", "Live on Google Play", "10K+ public install band"],
    media: playMedia("app-blocker", "App Blocker: Block Apps, Sites"),
    related: ["notification-blocker", "hidden-device-detector"],
  },
  {
    ...scratchBase,
    slug: "fake-gps",
    title: "Fake GPS: Mock Location",
    shortTitle: "Fake GPS",
    category: "Location testing",
    year: "2026",
    depth: "standard",
    accent: "#f1df5b",
    summary: "A mock-location utility with map search, a virtual joystick, speed controls, bookmarks, and history.",
    overview: "The product turns Android developer-location capabilities into a controlled map experience useful for QA, geofence testing, and location simulation.",
    publicSignal: "5K+ installs on Google Play",
    publisher: "Byte Bloom",
    playUrl: "https://play.google.com/store/apps/details?id=com.bb.gps.location.map",
    capabilities: ["Mock location", "Map and address search", "Virtual joystick", "Speed controls", "Bookmarks and history"],
    results: ["Engineered from scratch", "Live on Google Play", "Developer and QA utility"],
    media: playMedia("fake-gps", "Fake GPS: Mock Location"),
    related: ["route-planner", "app-blocker"],
  },
  {
    slug: "production-improvements",
    title: "Production Maintenance & Growth",
    shortTitle: "Production Improvements",
    category: "Reliability & monetization",
    year: "2025–2026",
    period: "Last 15 months",
    workType: "platform",
    depth: "specialized",
    accent: "#ffb45a",
    summary: "A cross-product body of work covering crash and ANR remediation, feature repair, screen redesign, ads, billing, and premium conversion surfaces.",
    overview: "Existing products require a different engineering posture: understand unfamiliar behavior, protect active users, isolate regressions, and improve commercial systems without inventing unsupported outcomes.",
    ownership: "Owned the assigned Android diagnosis, implementation, redesign, feature, and monetization work across six inherited products.",
    teamBoundary: "The underlying products, source code, business strategy, and metrics belong to the employer and publishing teams.",
    publicSignal: "Experience across products from early-stage releases to a 1M+ public install band",
    stack: ["Kotlin", "Crashlytics", "Analytics", "Remote Config", "Play Billing", "Ad monetization"],
    capabilities: ["Crash and ANR triage", "Feature repair", "Premium-screen redesign", "Ad-plan and placement updates", "Subscriptions and one-time purchases"],
    constraints: ["Inherited architecture", "Active production users", "Store policy", "Commercial confidentiality", "Regression risk"],
    decisions: [
      { title: "Observe before changing", detail: "Start from reproducible behavior, Crashlytics evidence, analytics context, and code-path ownership rather than rewriting unfamiliar code." },
      { title: "Separate revenue from disruption", detail: "Monetization work must balance inventory, eligibility, pacing, premium state, and user experience." },
      { title: "Ship reversible changes", detail: "Remote configuration, staged rollouts, and focused changes reduce the cost of uncertainty in established products." },
    ],
    hardestProblem: "Improving reliability and commercial behavior inside inherited codebases while preserving active user journeys and confidential business context.",
    quality: ["Crashlytics-led triage", "ANR investigation", "Analytics verification", "Remote-configured behavior", "Regression-focused testing"],
    results: ["Six maintained products represented", "Feature and monetization work shipped", "Commercial figures remain confidential"],
    lessons: ["Production maintenance rewards evidence and restraint.", "A reliable rollback path is part of the feature design."],
    media: [
      { src: "/apps/voice-notepad/screen-1.webp", alt: "Voice Notepad public Google Play product screenshot", kind: "screenshot" },
      { src: "/apps/status-downloader/screen-1.webp", alt: "Status Downloader public Google Play product screenshot", kind: "screenshot" },
      { src: "/apps/coin-identifier/screen-1.webp", alt: "Coin Identifier public Google Play product screenshot", kind: "screenshot" },
    ],
    related: ["voice-recorder", "schedule-planner"],
    confidentiality: ["No revenue or conversion figures", "No company-owned source", "No internal product analytics"],
    verifiedAt: "August 12, 2026",
  },
  {
    slug: "android-billing-platform",
    title: "Reusable Android Billing Platform",
    shortTitle: "Billing Platform",
    category: "Platform engineering",
    year: "2026",
    period: "Current role",
    workType: "platform",
    depth: "specialized",
    accent: "#5bf0d1",
    summary: "A low-code integration layer that standardizes Google Play Billing and RevenueCat across numerous production applications.",
    overview: "Repeated billing integrations create duplicated state, acknowledgement, restoration, analytics, and retry behavior. I designed and implemented a reusable company-owned module under senior engineering supervision to centralize those concerns behind a compact caller surface.",
    ownership: "Designed and implemented the module; a senior engineer supervised and reviewed the work.",
    teamBoundary: "The company owns the source and proprietary integration details. Public material is conceptual and intentionally non-reconstructive.",
    publicSignal: "Adopted across numerous production apps and still used for new projects",
    stack: ["Kotlin", "Google Play Billing", "RevenueCat", "Analytics", "Remote Config"],
    capabilities: ["Subscriptions", "One-time purchases", "Purchase acknowledgement", "Restoration", "Subscription state", "Error and retry flows"],
    constraints: ["Two billing providers", "Process and lifecycle changes", "Pending and failed purchases", "Restore semantics", "Backwards-compatible adoption"],
    decisions: [
      { title: "One domain-facing contract", detail: "Application code consumes product and entitlement state without coupling screens to a specific provider." },
      { title: "Centralized lifecycle handling", detail: "Acknowledgement, restoration, pending state, retries, and subscription changes follow one reviewed implementation path." },
      { title: "Operations are part of the API", detail: "Analytics and remote configuration are first-class concerns rather than additions repeated by every consuming app." },
    ],
    hardestProblem: "Creating a small integration surface without hiding the billing lifecycle states that consuming products still need to represent honestly.",
    quality: ["Explicit state model", "Retry and recovery paths", "Provider separation", "Analytics hooks", "Remote configuration"],
    results: ["Adopted across numerous production apps", "Continues to support new project integrations", "Exact adoption and business figures intentionally withheld"],
    lessons: ["Reusable modules succeed when the common path is tiny and exceptional states remain visible.", "Internal adoption is a product problem: documentation and migration safety matter as much as code."],
    media: [],
    related: ["production-improvements", "plant-identifier", "schedule-planner"],
    confidentiality: ["No company identity", "No source code", "No exact adoption count", "No proprietary API or package names", "No revenue data"],
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    shortTitle: "AI Chatbot",
    category: "Artificial intelligence",
    year: "2024",
    period: "Previous role",
    workType: "earlier",
    depth: "standard",
    accent: "#8b7cff",
    summary: "A conversational Android experience connecting real-time chat, image generation, authentication, local storage, and backend services.",
    overview: "An earlier Android project focused on making text conversation and image generation feel immediate while maintaining a secure user and persistence layer.",
    ownership: "Android development contribution in a previous company role.",
    teamBoundary: "Presented as previous-employer work without claiming ownership of the complete product.",
    stack: ["Kotlin", "Firebase Authentication", "REST APIs", "Room"],
    capabilities: ["Conversational interface", "Image generation workflows", "Authentication", "Local data support"],
    results: ["Preserved from the original portfolio", "Earlier professional project"],
    media: [],
    related: ["plant-identifier", "crypto-communication"],
  },
  {
    slug: "crypto-communication",
    title: "Cryptographic Communication",
    shortTitle: "Cryptographic Communication",
    category: "Security",
    year: "2024",
    period: "BSCS final-year project",
    workType: "earlier",
    depth: "standard",
    accent: "#49d5ff",
    summary: "An end-to-end encrypted messaging concept spanning Android and web clients for private and group conversations.",
    overview: "A final-year project exploring secure real-time communication across Android and web surfaces with private and group chat experiences.",
    ownership: "Android and full-stack developer for the university final-year project.",
    teamBoundary: "Academic project; the current portfolio preserves its original scope and framing.",
    githubUrl: "https://github.com/Shahroze16602/FYP-Chat-App",
    stack: ["Kotlin", "Next.js", "Node.js", "Socket.io"],
    capabilities: ["Private messaging", "Group messaging", "End-to-end encryption concept", "Real-time communication", "Android and web clients"],
    results: ["BSCS final-year project", "Public GitHub repository"],
    media: [],
    related: ["ai-chatbot", "app-blocker"],
  },
];

const googlePlayCheckedAt = "August 12, 2026";

export const maintenanceApps = [
  { slug: "copy-data", title: "Copy Data: Phone Transfer", signal: "1K+ installs", contribution: "Monetization updates", verifiedAt: googlePlayCheckedAt, playUrl: "https://play.google.com/store/apps/details?id=com.tet.copy.datacopy", media: playMedia("copy-data", "Copy Data: Phone Transfer") },
  { slug: "stone-identifier", title: "Stone Identifier: Rock Scanner", signal: "100+ installs", contribution: "Monetization updates", verifiedAt: googlePlayCheckedAt, playUrl: "https://play.google.com/store/apps/details?id=com.tet.stone.identifier.identification", media: playMedia("stone-identifier", "Stone Identifier: Rock Scanner") },
  { slug: "coin-identifier", title: "Coin Identifier: Value Scanner", signal: "10K+ installs", contribution: "Monetization updates", verifiedAt: googlePlayCheckedAt, playUrl: "https://play.google.com/store/apps/details?id=com.psma.coindetector.coinfinder", media: playMedia("coin-identifier", "Coin Identifier: Value Scanner") },
  { slug: "voice-notepad", title: "Voice Notepad — Speech to Text", signal: "1M+ installs", contribution: "Screen redesign, issue fixes, and monetization updates", verifiedAt: googlePlayCheckedAt, playUrl: "https://play.google.com/store/apps/details?id=com.mobilenotepadapps.voice.notepad.speech.to.text.notes", media: playMedia("voice-notepad", "Voice Notepad — Speech to Text", 2) },
  { slug: "status-downloader", title: "Status Downloader & Saver", signal: "100K+ installs", contribution: "Screen redesign, issue fixes, monetization, reposting, and direct-message features", verifiedAt: googlePlayCheckedAt, playUrl: "https://play.google.com/store/apps/details?id=com.mna.statussaver.savevideos.downloader", media: playMedia("status-downloader", "Status Downloader & Saver") },
  { slug: "medication-reminder", title: "Medication Reminder & Tracker", signal: "5K+ installs", contribution: "Monetization updates", verifiedAt: googlePlayCheckedAt, playUrl: "https://play.google.com/store/apps/details?id=com.bb.medicine.reminder.pill.tracker", media: playMedia("medication-reminder", "Medication Reminder & Tracker") },
];

const installCountFromSignal = (signal: string) => {
  const match = signal.match(/([\d.]+)\s*([KM])?\+/i);
  if (!match) return 0;
  const multiplier = match[2]?.toUpperCase() === "M" ? 1_000_000 : match[2]?.toUpperCase() === "K" ? 1_000 : 1;
  return Number(match[1]) * multiplier;
};

/** Public Android apps, ordered by the strongest verified Google Play install band. */
export const appPortfolio: AppPortfolioRecord[] = [
  ...projects.filter((project) => project.workType === "from-scratch" && project.playUrl && project.publicSignal).map((project) => ({
    slug: project.slug,
    title: project.shortTitle,
    category: project.category,
    workType: "from-scratch" as const,
    summary: project.summary,
    signal: project.publicSignal as string,
    installCount: installCountFromSignal(project.publicSignal as string),
    verifiedAt: project.verifiedAt || googlePlayCheckedAt,
    playUrl: project.playUrl as string,
    detailUrl: `/projects/${project.slug}`,
    icon: project.media.find((media) => media.kind === "icon"),
    details: project.stack.slice(0, 4),
  })),
  ...maintenanceApps.map((app) => ({
    slug: app.slug,
    title: app.title,
    category: "Production improvement",
    workType: "maintenance" as const,
    summary: app.contribution,
    signal: `${app.signal} on Google Play`,
    installCount: installCountFromSignal(app.signal),
    verifiedAt: app.verifiedAt,
    playUrl: app.playUrl,
    detailUrl: "/projects/production-improvements",
    icon: app.media.find((media) => media.kind === "icon"),
    details: ["Inherited codebase", "Production maintenance", "Play Store delivery"],
  })),
].sort((first, second) => second.installCount - first.installCount || first.title.localeCompare(second.title));

/** Four strongest home-page signals; full case-study depth breaks ties within the 100K+ band. */
const featuredAppSlugs = ["voice-notepad", "plant-identifier", "schedule-planner", "route-planner"];
export const featuredApps = featuredAppSlugs.map((slug) => appPortfolio.find((app) => app.slug === slug)).filter((app): app is AppPortfolioRecord => Boolean(app));

export const services = [
  { slug: "build", number: "01", title: "Build", summary: "Native Android products from implementation planning through Play Store release.", includes: ["Kotlin and Compose development", "Architecture and state design", "API, Firebase, and device integrations", "Testing, analytics, and release support"] },
  { slug: "rescue", number: "02", title: "Rescue", summary: "Focused engineering for inherited products that need stability, clarity, or forward motion.", includes: ["Crash and ANR investigation", "Feature repair and modernization", "Legacy XML and Compose work", "Release-risk and regression control"] },
  { slug: "monetize", number: "03", title: "Monetize", summary: "Responsible implementation of the systems behind ads, premium experiences, and purchases.", includes: ["Ad plans and placements", "Subscriptions and one-time purchases", "Google Play Billing and RevenueCat", "Premium-screen implementation and analytics"] },
];

export const capabilities = [
  { title: "Product delivery", copy: "Kotlin, Jetpack Compose, XML, Material systems, navigation, permissions, and Play release workflows." },
  { title: "Architecture", copy: "Clean Architecture, MVVM, modular boundaries, Room, Koin, Hilt, and maintainable state models." },
  { title: "Connected systems", copy: "Ktor, Retrofit, Firebase, Maps, Calendar, Drive, real-time data, media, sensors, and background work." },
  { title: "Revenue & quality", copy: "Billing, RevenueCat, ads, Analytics, Crashlytics, Remote Config, crash/ANR triage, and production monitoring." },
];

export const skillGroups = [
  { title: "Native Android", description: "The core of my production work.", skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML layouts", "Material Design", "Navigation", "Permissions"] },
  { title: "Architecture & state", description: "Patterns and tools for codebases that need to keep changing safely.", skills: ["Clean Architecture", "MVVM", "Modular boundaries", "Room", "Koin", "Hilt", "Lifecycle-aware state", "Offline-first thinking"] },
  { title: "Networking & data", description: "Connected product flows, persistence, authentication, and real-time behavior.", skills: ["Ktor", "Retrofit", "REST APIs", "Firebase Authentication", "Firebase Realtime Database", "Room", "SQLite", "MongoDB", "Node.js", "Socket.io"] },
  { title: "Android platform", description: "Product work that reaches beyond standard screens.", skills: ["Google Maps", "Google Calendar", "Google Drive", "Location & navigation", "Audio & media", "Sensors", "Printing", "Notifications", "Background work"] },
  { title: "Billing & monetization", description: "Commercial systems implemented with lifecycle and recovery states in mind.", skills: ["Google Play Billing", "RevenueCat", "Subscriptions", "One-time purchases", "Purchase acknowledgement", "Restoration", "Subscription-state handling", "Error & retry flows", "AdMob", "Ad plans & placements", "Premium-screen implementation"] },
  { title: "Reliability & release", description: "The production discipline around the feature work.", skills: ["Firebase Crashlytics", "Firebase Analytics", "Remote Config", "Crash triage", "ANR triage", "Production debugging", "Regression testing", "Git", "Google Play release workflows"] },
  { title: "Web & supporting technology", description: "Skills used for full-stack and portfolio work alongside Android.", skills: ["JavaScript", "TypeScript", "Next.js", "Node.js", "Socket.io"] },
  { title: "AI-assisted engineering", description: "AI tools used to accelerate planning and execution while architecture, review, testing, and shipped quality remain my responsibility.", skills: ["Claude", "Codex", "ChatGPT", "Antigravity", "Technical planning", "Development assistance", "Bug investigation", "Image-asset generation"] },
];

export const aiWorkflow = [
  { tool: "Claude", role: "Planning, design exploration, and development support" },
  { tool: "Codex", role: "Implementation and development assistance" },
  { tool: "ChatGPT", role: "App image-asset generation and creative exploration" },
  { tool: "Antigravity", role: "Development assistance and bug fixing" },
];

export const experiences = [
  { title: "Android App Developer", company: "Top Edge Technologies (Pvt) Ltd", period: "May 2025 — Present", points: ["Engineered and maintained production Android apps with Kotlin and Jetpack Compose.", "Worked with Clean Architecture, MVVM, Room, Ktor, Koin, Firebase, Google APIs, billing, and monetization.", "Implemented subscriptions, one-time purchases, analytics, and remote configuration across production apps.", "Improved existing products through crash/ANR work, feature fixes, redesigns, and commercial integrations."] },
  { title: "Android App Developer", company: "Appsqueeze Technologies (Pvt) Ltd", period: "September 2023 — April 2025", points: ["Developed native Android products with Kotlin, Java, and XML.", "Used MVVM, Room, Firebase Authentication, Realtime Database, and Retrofit.", "Built responsive Material interfaces and supported production debugging.", "Collaborated through Git-based team workflows."] },
];

export const education = [
  { degree: "Bachelor of Science in Computer Science", school: "Bahauddin Zakariya University", period: "Completed June 2025", detail: "CGPA 3.59" },
];

export const insights: Insight[] = [
  {
    slug: "reliable-android-location-products",
    title: "What reliable Android location products need beyond rendering a map",
    excerpt: "A map is a surface. The product lives in permission state, location quality, lifecycle control, recovery, and honest feedback.",
    category: "Location engineering",
    published: "August 12, 2026",
    updated: "August 12, 2026",
    readingTime: "7 min read",
    accent: "#7c5cff",
    relatedProjects: ["route-planner", "fake-gps"],
    sections: [
      { id: "state", title: "Model location as state, not a callback", paragraphs: ["A location callback does not tell the product whether the user granted precise access, whether GPS is enabled, how old a fix is, or whether a route request is still relevant. A dependable app promotes those conditions into explicit state that the UI can explain.", "The useful model includes permission, provider availability, freshness, accuracy, loading, recoverable failure, and the last trusted value. That prevents every map feature from inventing its own interpretation of location."], bullets: ["Permission: unavailable, approximate, precise, or denied", "Provider: disabled, searching, available", "Quality: age and accuracy of the current fix", "Operation: idle, resolving, routing, navigating, failed"] },
      { id: "lifecycle", title: "Own the lifecycle and battery contract", paragraphs: ["Continuous updates are expensive and frequently unnecessary. A screen that needs one nearby search has a different contract from active navigation. The location layer should expose purpose-specific requests and stop work when the consumer no longer needs it.", "Lifecycle control is also a correctness feature. Duplicate listeners and stale observers can render an old route, waste battery, or update a screen the user already left."], bullets: ["Use the lowest update frequency that satisfies the feature", "Cancel or downgrade updates outside the active journey", "Keep one authoritative location source", "Make background behavior explicit and policy-compliant"] },
      { id: "failure", title: "Design the ordinary failure paths", paragraphs: ["Denied permission, weak GPS, offline routing, empty places, and an API timeout are not exceptional in a travel product. They are common states, especially when the user needs the app most.", "Each state needs a next action: explain why access helps, offer settings only when necessary, retain prior context, distinguish offline from no results, and make retry safe."], bullets: ["Never show a permanent spinner for missing prerequisites", "Preserve the searched destination when asking for permission", "Explain approximate-location limitations", "Keep the last useful map context during recoverable failures"] },
      { id: "testing", title: "Test journeys, not only coordinates", paragraphs: ["Unit tests can validate state transitions, but the product also needs scenario testing across process death, permission changes, provider toggles, timeouts, rotation, and returning from system settings.", "The highest-value test is often a sequence: start with no permission, choose a destination, grant approximate access, lose connectivity, restore it, and confirm that the intended journey survives."], bullets: ["Permission upgrades and denials", "Stale versus fresh fixes", "Process recreation", "Route request cancellation", "Offline and server-error recovery"] },
    ],
  },
  {
    slug: "resilient-subscription-state",
    title: "Designing resilient subscription state with Play Billing and RevenueCat",
    excerpt: "Purchase success is an event. Entitlement is durable state—and the difference shapes acknowledgement, restore, retry, and UI design.",
    category: "Billing architecture",
    published: "August 12, 2026",
    updated: "August 12, 2026",
    readingTime: "8 min read",
    accent: "#5bf0d1",
    relatedProjects: ["production-improvements"],
    sections: [
      { id: "domain", title: "Start with a provider-neutral domain", paragraphs: ["Screens should not need to understand every callback or object produced by a billing provider. They need a smaller domain: products, eligibility, purchase progress, entitlement state, recoverable error, and restoration progress.", "Provider adapters translate external results into that domain. This keeps the application honest about state without coupling every paywall to Google Play Billing or RevenueCat details."], bullets: ["Available product and offer", "Purchase progress", "Pending, active, expired, or unknown entitlement", "Restore progress and result", "Recoverable versus terminal errors"] },
      { id: "events", title: "Do not confuse a purchase callback with entitlement", paragraphs: ["A callback can be delayed, repeated, pending, cancelled, or disconnected from the latest server-side subscription state. The UI should celebrate only when the product has enough evidence to grant the expected access.", "This is why acknowledgement, verification, restore, and refresh belong to a coordinated state model rather than scattered button handlers."], bullets: ["Acknowledge eligible purchases", "Handle pending purchases without granting final access", "Refresh state after reconnect and app resume", "Make restoration idempotent", "Represent unknown state rather than guessing"] },
      { id: "recovery", title: "Make every transition retry-safe", paragraphs: ["Billing failures are often partial: the store UI completed but a follow-up request timed out, or a product refreshed while a screen was inactive. Repeating an operation must not duplicate purchases or analytics.", "Commands should be guarded by state and every externally visible event should carry enough context for idempotent handling."], bullets: ["Disable duplicate purchase starts", "Deduplicate callbacks", "Use bounded retries for transient failures", "Provide a manual restore path", "Record failure categories without purchase data"] },
      { id: "operations", title: "Treat analytics and remote configuration as architecture", paragraphs: ["Product teams need to know where a purchase journey failed, but analytics must describe the funnel without leaking sensitive purchase or user data. Remote configuration can control presentation and eligibility, but it should not override authoritative entitlement.", "A reusable module becomes valuable when it standardizes these operational contracts alongside the happy path."], bullets: ["Stable funnel event names", "No personal or payment data in analytics", "Remote-configured presentation, not entitlement truth", "Clear logs for integration and support"] },
    ],
  },
  {
    slug: "android-crash-anr-triage",
    title: "A practical crash and ANR triage workflow for inherited Android apps",
    excerpt: "The fastest reliable fix starts by narrowing evidence, reproducing the state transition, and changing the smallest responsible surface.",
    category: "Production reliability",
    published: "August 12, 2026",
    updated: "August 12, 2026",
    readingTime: "7 min read",
    accent: "#ffb45a",
    relatedProjects: ["production-improvements", "voice-recorder"],
    sections: [
      { id: "prioritize", title: "Prioritize by impact and confidence", paragraphs: ["A loud stack trace is not always the largest product problem. Start from affected users, recurrence, release version, device/API concentration, user journey, and whether the issue blocks launch or revenue-critical behavior.", "ANRs need the same discipline. Grouping every frozen frame as one issue hides the difference between main-thread I/O, lock contention, binder waits, expensive startup, and rendering work."], bullets: ["Affected users and sessions", "First and latest affected versions", "Device and Android-version clusters", "Foreground journey and business criticality", "Regression timing"] },
      { id: "reproduce", title: "Turn telemetry into a reproducible state transition", paragraphs: ["A stack trace describes where execution stopped, not always why the product reached that state. Reconstruct navigation, lifecycle, permissions, connectivity, account or premium state, and data shape around the failure.", "For intermittent issues, add narrow diagnostic events or logs that describe state categories without recording personal data. The goal is evidence for one hypothesis, not permanent noise."], bullets: ["Follow the first app-owned frame", "Inspect lifecycle and concurrency boundaries", "Compare the introducing release", "Reproduce with constrained network and process recreation", "Instrument only the missing context"] },
      { id: "fix", title: "Change the smallest responsible surface", paragraphs: ["Inherited code makes broad rewrites tempting and risky. A focused fix should restore an invariant, isolate unsafe work, or make an invalid state impossible without silently changing unrelated behavior.", "For an ANR, moving work off the main thread is only the beginning. The new execution path still needs cancellation, ordering, user feedback, and a safe result handoff."], bullets: ["Protect state invariants", "Avoid masking exceptions without recovery", "Move blocking work with lifecycle-aware cancellation", "Add a regression test around the triggering sequence", "Keep rollback practical"] },
      { id: "release", title: "Verify through a controlled release", paragraphs: ["A local reproduction fix is necessary but not sufficient. Validate the affected path, adjacent flows, analytics, and startup behavior, then use a staged rollout when the product context permits.", "After release, monitor both the original issue and replacement failure modes. A falling crash count can hide a new silent failure or abandoned flow."], bullets: ["Regression and adjacent-flow tests", "Staged rollout", "Crash-free and ANR monitoring", "Funnel sanity checks", "Documented rollback signal"] },
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getInsight = (slug: string) => insights.find((insight) => insight.slug === slug);
export const featuredProjects = projects.filter((project) => project.featured);
export const scratchProjects = projects.filter((project) => project.workType === "from-scratch");
