import json
import shutil
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "tmp" / "pdfs" / "resume-data.json"
OUTPUT = ROOT / "output" / "pdf" / "Muhammad-Shahroze-Android-Engineer.pdf"
PUBLIC = ROOT / "public" / "Muhammad-Shahroze-Android-Engineer.pdf"

with DATA_PATH.open("r", encoding="utf-8") as stream:
    data = json.load(stream)

OUTPUT.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#171717")
ACCENT = colors.HexColor("#1746A2")
MUTED = colors.HexColor("#444444")


def clean(value):
    return str(value).replace("—", "-").replace("–", "-").replace("→", "->").replace("·", "|").replace("&", "and")


def safe(value):
    return escape(clean(value))


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="ResumeName", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=25, leading=28, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="ResumeTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=ACCENT, spaceAfter=4))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=12.5, textColor=MUTED, spaceAfter=1))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=INK, spaceBefore=8, spaceAfter=4, borderWidth=0, borderPadding=0))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=13.2, textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="Skill", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=12.2, textColor=MUTED, spaceAfter=2))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceAfter=1))
styles.add(ParagraphStyle(name="Meta", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=12, textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="ResumeBullet", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=12.2, leftIndent=10, firstLineIndent=-7, textColor=MUTED, spaceAfter=2))
styles.add(ParagraphStyle(name="Project", parent=styles["Normal"], fontName="Helvetica", fontSize=10, leading=12, textColor=MUTED, spaceAfter=2))
styles.add(ParagraphStyle(name="Note", parent=styles["Normal"], fontName="Helvetica-Oblique", fontSize=10, leading=12, textColor=MUTED, spaceAfter=4))


def section(title):
    return Paragraph(safe(title.upper()), styles["Section"])


def bullet(text):
    return Paragraph(f"- {safe(text)}", styles["ResumeBullet"])


def skill(label, value):
    return Paragraph(f"<b>{safe(label)}:</b> {safe(value)}", styles["Skill"])


def project_line(title, signal, details):
    signal_text = f" | {safe(signal)}" if signal else ""
    return Paragraph(f"<b>{safe(title)}</b>{signal_text}<br/>{safe(details)}", styles["Project"])


def compact_project_line(title, signal, details):
    signal_text = f" | {safe(signal)}" if signal else ""
    return Paragraph(f"<b>{safe(title)}</b>{signal_text} - {safe(details)}", styles["Project"])


doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=17 * mm,
    leftMargin=17 * mm,
    topMargin=15 * mm,
    bottomMargin=15 * mm,
    title="Muhammad Shahroze - Android Engineer Resume",
    author="Muhammad Shahroze",
    subject="ATS-friendly resume for Android engineering roles",
)

profile = data["profile"]
story = [
    Paragraph(safe(profile["name"]), styles["ResumeName"]),
    Paragraph("ANDROID ENGINEER | KOTLIN | JETPACK COMPOSE", styles["ResumeTitle"]),
    Paragraph(safe(f'{profile["location"]} | Relocating to Islamabad | {profile["email"]}'), styles["Contact"]),
    Paragraph(safe(f'{profile["linkedin"]} | {profile["github"]}'), styles["Contact"]),
    section("Professional Summary"),
    Paragraph(
        "Android Engineer with 3+ years of experience designing, developing, releasing, and maintaining native mobile applications using Kotlin, Java, Android SDK, Jetpack Compose, XML, Clean Architecture, and MVVM. Production experience spans location and maps, productivity, audio and media, AI-assisted utilities, Firebase, REST APIs, Google Play Billing, RevenueCat, AdMob monetization, crash and ANR resolution, and Google Play delivery. Available for remote roles with US and European teams and hybrid opportunities in Islamabad.",
        styles["Body"],
    ),
    section("Professional Experience"),
]

current_experience = KeepTogether([
    Paragraph("Android App Developer | Top Edge Technologies (Pvt) Ltd", styles["Role"]),
    Paragraph("May 2025 - Present | Pakistan", styles["Meta"]),
    bullet("Engineer and maintain native Android applications using Kotlin, Jetpack Compose, Clean Architecture, MVVM, Room, Ktor, Koin, Firebase, and Google APIs."),
    bullet("Deliver production features across location, productivity, media, utility, and AI-assisted product categories, from implementation through Google Play release support."),
    bullet("Diagnose and resolve crashes, Application Not Responding (ANR) issues, lifecycle defects, and regressions in inherited Android codebases using Crashlytics and production evidence."),
    bullet("Implement and refine AdMob plans and placements, subscriptions, one-time purchases, and premium screens to improve ad show rates, revenue delivery, and purchase conversion opportunities without exposing confidential performance data."),
    bullet("Designed and built a reusable billing module supporting Google Play Billing and RevenueCat, including purchase acknowledgement, restoration, subscription-state handling, error and retry flows, analytics, and remote configuration; used across multiple company applications."),
])

previous_experience = KeepTogether([
    Spacer(1, 2 * mm),
    Paragraph("Android App Developer | Appsqueeze Technologies (Pvt) Ltd", styles["Role"]),
    Paragraph("September 2023 - April 2025 | Pakistan", styles["Meta"]),
    bullet("Developed native Android applications with Kotlin, Java, Android SDK, XML layouts, and Material Design components."),
    bullet("Applied MVVM, Room, Retrofit, Firebase Authentication, and Firebase Realtime Database to connected, data-driven product features."),
    bullet("Built responsive user interfaces, debugged production issues, and supported reliable releases across Android versions and device configurations."),
    bullet("Collaborated through Git-based development workflows and maintained clear ownership of assigned application features."),
])

story += [
    current_experience,
    previous_experience,
    section("Education"),
    KeepTogether([
        Paragraph("MS Artificial Intelligence and Autonomous Systems", styles["Role"]),
        Paragraph("National University of Sciences and Technology (NUST), Islamabad | 2026 - Present", styles["Meta"]),
        Paragraph("Bachelor of Science in Computer Science", styles["Role"]),
        Paragraph("Bahauddin Zakariya University, Multan | Completed June 2025 | CGPA: 3.59", styles["Meta"]),
    ]),
    section("Professional Development"),
    Paragraph("M-Labs Summer Program 2024 | Mindstorm Studios | Certificate of Participation", styles["Meta"]),
    PageBreak(),
    section("Technical Skills"),
    skill("Languages and Android", "Kotlin, Java, Android SDK, Jetpack Compose, XML layouts, Material Design, Navigation, lifecycle-aware state, background work, notifications"),
    skill("Architecture and data", "Clean Architecture, MVVM, modular architecture, Room, SQLite, dependency injection, Koin, Hilt, Ktor, Retrofit, REST APIs"),
    skill("Firebase and backend", "Firebase Authentication, Realtime Database, Crashlytics, Analytics, Remote Config, MongoDB, Node.js, Socket.io, JavaScript, TypeScript"),
    skill("Platform integrations", "Google Maps API, location and navigation, Google Calendar, Google Drive, audio and media, sensors, printing"),
    skill("Billing and monetization", "Google Play Billing, RevenueCat, subscriptions, one-time purchases, purchase acknowledgement, restoration, subscription-state handling, error and retry flows, AdMob, ad placements, premium screens"),
    skill("Reliability, delivery, and AI", "Crash and ANR triage, production debugging, regression testing, Git, Google Play releases; Claude, Codex, ChatGPT, and Antigravity for AI-assisted engineering"),
    section("Selected Android Projects"),
    Paragraph("Public install bands indicate product scale on Google Play and are not presented as growth attributed solely to my work.", styles["Note"]),
]

project_by_slug = {project["slug"]: project for project in data["scratchProjects"]}
for slug in ["plant-identifier", "schedule-planner", "route-planner", "voice-recorder"]:
    project = project_by_slug[slug]
    story.append(project_line(project["title"], project["signal"], f'{project["summary"]} Technologies: {", ".join(project["stack"])}.'))

story.append(section("Additional Android Apps Engineered from Scratch"))
for project in data["scratchProjects"]:
    if project["slug"] in {"plant-identifier", "schedule-planner", "route-planner", "voice-recorder"}:
        continue
    story.append(compact_project_line(project["title"], project["signal"], f'{", ".join(project["stack"])}'))

story.append(section("Production Maintenance and Product Improvements"))
for app in data["maintenanceApps"]:
    story.append(compact_project_line(app["title"], app["signal"], app["contribution"]))

story.append(section("Earlier Projects"))
earlier_project_details = {
    "ai-chatbot": "Kotlin, Firebase Authentication, REST APIs, Room; real-time chat and image generation",
    "crypto-communication": "Kotlin, Next.js, Node.js, Socket.io; encrypted Android and web messaging",
}
for project in data["otherProjects"]:
    story.append(compact_project_line(project["title"], project["signal"], earlier_project_details[project["slug"]]))

doc.build(story)
shutil.copyfile(OUTPUT, PUBLIC)
print(OUTPUT)
