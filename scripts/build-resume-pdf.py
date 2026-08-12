import json
import shutil
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "tmp" / "pdfs" / "resume-data.json"
OUTPUT = ROOT / "output" / "pdf" / "Muhammad-Shahroze-Android-Engineer.pdf"
PUBLIC = ROOT / "public" / "Muhammad-Shahroze-Android-Engineer.pdf"

with DATA_PATH.open("r", encoding="utf-8") as stream:
    data = json.load(stream)

OUTPUT.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#151513")
BLUE = colors.HexColor("#2446FF")
MUTED = colors.HexColor("#66645E")
LINE = colors.HexColor("#D2D0C8")
PAPER = colors.HexColor("#FAF9F5")

def clean(value):
    return str(value).replace("—", "-").replace("–", "-").replace("→", "->").replace("·", "|").replace("&", "and")

def safe(value):
    return escape(clean(value))

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Kicker", parent=styles["Normal"], fontName="Courier-Bold", fontSize=6.8, leading=9, textColor=BLUE, spaceAfter=5, uppercase=True))
styles.add(ParagraphStyle(name="Name", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=28, leading=29, tracking=-1.1, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=BLUE))
styles.add(ParagraphStyle(name="Heading", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=17, leading=19, tracking=-.4, textColor=INK, spaceBefore=4, spaceAfter=6))
styles.add(ParagraphStyle(name="Subheading", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=10.5, leading=12.5, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="BodySmall", parent=styles["Normal"], fontName="Helvetica", fontSize=8.2, leading=11.2, textColor=MUTED))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontName="Helvetica", fontSize=9, leading=12.5, textColor=MUTED))
styles.add(ParagraphStyle(name="Meta", parent=styles["Normal"], fontName="Courier", fontSize=6.5, leading=8.5, textColor=MUTED))
styles.add(ParagraphStyle(name="MetaRight", parent=styles["Meta"], alignment=TA_RIGHT))
styles.add(ParagraphStyle(name="ProjectTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=INK))
styles.add(ParagraphStyle(name="ProjectSignal", parent=styles["Normal"], fontName="Courier-Bold", fontSize=6.2, leading=8, textColor=BLUE, alignment=TA_RIGHT))

def footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(LINE)
    canvas.line(16*mm, 12*mm, width-16*mm, 12*mm)
    canvas.setFont("Courier", 6)
    canvas.setFillColor(MUTED)
    canvas.drawString(16*mm, 7.5*mm, "MUHAMMAD SHAHROZE / ANDROID ENGINEER")
    canvas.drawRightString(width-16*mm, 7.5*mm, f"PAGE {doc.page}")
    canvas.restoreState()

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=16*mm, leftMargin=16*mm, topMargin=15*mm, bottomMargin=17*mm, title="Muhammad Shahroze - Android Engineer", author="Muhammad Shahroze")
story = []

profile = data["profile"]
header_left = [Paragraph(safe(profile["name"]), styles["Name"]), Paragraph("ANDROID ENGINEER", styles["Role"])]
header_right = Paragraph("<br/>".join([safe(profile["email"]), safe(profile["linkedin"].replace("https://", "")), safe(profile["github"].replace("https://", "")), safe(profile["location"]), "Remote: US and Europe | Hybrid: Islamabad | Collaborations"]), styles["MetaRight"])
header = Table([[header_left, header_right]], colWidths=[118*mm, 54*mm])
header.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "BOTTOM"), ("BOTTOMPADDING", (0,0), (-1,-1), 7), ("LINEBELOW", (0,0), (-1,-1), .8, INK)]))
story += [header, Spacer(1, 6*mm), Paragraph("PROFESSIONAL SUMMARY", styles["Kicker"]), Paragraph("Android engineer with 3+ years of experience building and maintaining native products across maps, productivity, AI-backed utilities, media, billing, Firebase, monetization, and production reliability.", styles["Body"]), Spacer(1, 5*mm)]

value_rows = [[
    [Paragraph("FROM-SCRATCH DELIVERY", styles["Kicker"]), Paragraph("Native Android implementation from architecture through Play release.", styles["BodySmall"])],
    [Paragraph("PRODUCTION RESCUE", styles["Kicker"]), Paragraph("Inherited codebases, crash and ANR work, feature repair, and modernization.", styles["BodySmall"])],
    [Paragraph("COMMERCIAL SYSTEMS", styles["Kicker"]), Paragraph("Billing, subscriptions, one-time purchases, ads, and premium experiences.", styles["BodySmall"])],
]]
value_table = Table(value_rows, colWidths=[57.3*mm, 57.3*mm, 57.3*mm])
value_table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("BOX", (0,0), (-1,-1), .35, LINE), ("INNERGRID", (0,0), (-1,-1), .35, LINE), ("TOPPADDING", (0,0), (-1,-1), 7), ("BOTTOMPADDING", (0,0), (-1,-1), 7), ("LEFTPADDING", (0,0), (-1,-1), 7), ("RIGHTPADDING", (0,0), (-1,-1), 7)]))
story += [value_table, Spacer(1, 6*mm)]

story.append(Paragraph("PROFESSIONAL EXPERIENCE", styles["Kicker"]))
for experience in data["experiences"]:
    left = [Paragraph(safe(experience["title"]), styles["Subheading"]), Paragraph(safe(experience["company"]), styles["BodySmall"]), Paragraph(safe(experience["period"]), styles["Meta"])]
    bullets = "<br/>".join([f"- {safe(point)}" for point in experience["points"]])
    table = Table([[left, Paragraph(bullets, styles["BodySmall"])]], colWidths=[55*mm, 117*mm])
    table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("TOPPADDING", (0,0), (-1,-1), 5), ("BOTTOMPADDING", (0,0), (-1,-1), 6), ("LINEBELOW", (0,0), (-1,-1), .35, LINE)]))
    story.append(table)

story += [Spacer(1, 5*mm), Paragraph("TECHNICAL CAPABILITY", styles["Kicker"])]
skills = [
    ("Android", "Kotlin, Jetpack Compose, XML, Material Design, Android SDK"),
    ("Architecture", "Clean Architecture, MVVM, Room, Koin, Hilt, modular boundaries"),
    ("Networking and data", "Ktor, Retrofit, REST APIs, Firebase, SQLite, MongoDB"),
    ("Product systems", "Maps, Calendar, Drive, Play Billing, RevenueCat, AdMob, media, sensors"),
    ("Quality and delivery", "Crashlytics, Analytics, Remote Config, crash/ANR triage, Git, Play release"),
]
skill_rows = [[Paragraph(safe(title), styles["Subheading"]), Paragraph(safe(value), styles["BodySmall"])] for title, value in skills]
skill_table = Table(skill_rows, colWidths=[43*mm, 129*mm])
skill_table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("TOPPADDING", (0,0), (-1,-1), 3), ("BOTTOMPADDING", (0,0), (-1,-1), 3)]))
story += [skill_table, Spacer(1, 6*mm)]

edu = data["education"][0]
supporting = Table([[
    [Paragraph("EDUCATION", styles["Kicker"]), Paragraph(safe(edu["degree"]), styles["Subheading"]), Paragraph(safe(f'{edu["school"]} | {edu["period"]} | {edu["detail"]}'), styles["BodySmall"])],
    [Paragraph("PROFESSIONAL DEVELOPMENT", styles["Kicker"]), Paragraph("M-Labs Summer Program 2024", styles["Subheading"]), Paragraph("Mindstorm Studios | Certificate of Participation", styles["BodySmall"])],
]], colWidths=[92*mm, 80*mm])
supporting.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("TOPPADDING", (0,0), (-1,-1), 6), ("BOTTOMPADDING", (0,0), (-1,-1), 6), ("LINEABOVE", (0,0), (-1,-1), .35, LINE), ("RIGHTPADDING", (0,0), (0,0), 10)]))
story += [supporting, Spacer(1, 5*mm), Paragraph("AVAILABILITY", styles["Kicker"]), Paragraph("Available for remote roles with US and European teams | Open to hybrid roles in Islamabad | Open to collaborations", styles["Body"]), PageBreak()]

story += [Paragraph("PROJECT EXPERIENCE", styles["Kicker"]), Paragraph("Android product work", styles["Heading"]), Paragraph("From-scratch products, earlier work, and focused improvements to inherited production apps. Public install bands describe product scale, not growth attributed solely to my work.", styles["Body"]), Spacer(1, 4*mm), Paragraph("ENGINEERED FROM SCRATCH", styles["Kicker"])]

def project_table(projects):
    rows = []
    for project in projects:
        title = f'<link href="{escape(project["url"])}" color="#151513"><b>{safe(project["title"])}</b></link>'
        stack = safe(" | ".join(project["stack"]))
        rows.append([Paragraph(title + f"<br/><font name='Courier' color='#77756F' size='5.8'>{stack}</font>", styles["ProjectTitle"]), Paragraph(safe(project["signal"]), styles["ProjectSignal"])])
    table = Table(rows, colWidths=[142*mm, 30*mm], repeatRows=0)
    table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("TOPPADDING", (0,0), (-1,-1), 2.2), ("BOTTOMPADDING", (0,0), (-1,-1), 2.2), ("LINEBELOW", (0,0), (-1,-1), .35, LINE)]))
    return table

story.append(project_table(data["scratchProjects"]))
story += [Spacer(1, 3.5*mm), Paragraph("EARLIER WORK", styles["Kicker"]), project_table(data["otherProjects"]), Spacer(1, 3.5*mm)]

story += [Paragraph("PRODUCTION MAINTENANCE", styles["Kicker"]), Paragraph("Inherited products, focused improvements", styles["Heading"])]
maintenance_rows = []
for app in data["maintenanceApps"]:
    title = f'<link href="{escape(app["url"])}" color="#151513"><b>{safe(app["title"])}</b></link>'
    maintenance_rows.append([Paragraph(title + f"<br/><font color='#66645E' size='7.4'>{safe(app['contribution'])}</font>", styles["ProjectTitle"]), Paragraph(safe(app["signal"]), styles["ProjectSignal"])])
maintenance = Table(maintenance_rows, colWidths=[142*mm, 30*mm])
maintenance.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("TOPPADDING", (0,0), (-1,-1), 2.2), ("BOTTOMPADDING", (0,0), (-1,-1), 2.2), ("LINEBELOW", (0,0), (-1,-1), .35, LINE)]))
story += [maintenance]

doc.build(story, onFirstPage=footer, onLaterPages=footer)
shutil.copyfile(OUTPUT, PUBLIC)
print(OUTPUT)
