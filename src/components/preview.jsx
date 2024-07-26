import jsPDF from "jspdf";

export default function Preview({ formData }) {
  const {
    fullName,
    email,
    number,
    title,
    company,
    startDate,
    endDate,
    responsible,
    achievement,
    school,
    degree,
    major,
  } = formData;

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const margin = 20;
    const lineHeight = 10;
    const pageWidth = pdf.internal.pageSize.width;
    let y = margin;

    // Set background color
    pdf.setFillColor(33, 53, 71); // Dark background
    pdf.rect(0, 0, pageWidth, pdf.internal.pageSize.height, "F");

    // Add custom styling
    pdf.setTextColor(226, 229, 231); // Light text
    pdf.setFont("Helvetica");
    pdf.setFontSize(12);

    // Helper function to add text
    const addText = (text, x, y, fontSize) => {
      pdf.setFontSize(fontSize);
      pdf.text(text, x, y);
      return y + fontSize + 2; // Return new Y position
    };

    // Add full name with custom font size and color
    pdf.setFontSize(18);
    pdf.setTextColor(226, 229, 231); // Light text color
    y = addText(fullName, margin, y, 18);

    // Add background rectangle for email and number
    const backgroundHeight = 20; // Height of the background rectangle
    const backgroundWidth = pageWidth - 2 * margin; // Width of the background rectangle
    const textOffset = 5; // Offset for text inside the rectangle
    const spacing = 20; // Space between email and number

    pdf.setFillColor(255, 165, 0); // Orange background
    pdf.rect(margin, y, backgroundWidth, backgroundHeight, "F"); // Draw rectangle

    // Add email and number text
    pdf.setTextColor(255, 255, 255); // White text
    pdf.setFontSize(12);

    // Calculate widths
    const emailWidth =
      pdf.getStringUnitWidth(email) * pdf.internal.getFontSize();
    const numberWidth =
      pdf.getStringUnitWidth(number) * pdf.internal.getFontSize();

    // Calculate available width and adjust if needed
    const availableWidth = backgroundWidth - 2 * textOffset; // Total available width minus margins

    if (emailWidth + numberWidth + spacing > availableWidth) {
      // If the combined width of email and number exceeds available width, reduce font size
      const scaleFactor = availableWidth / (emailWidth + numberWidth + spacing);
      pdf.setFontSize(12 * scaleFactor);
    }

    // Recalculate widths with adjusted font size
    const adjustedFontSize = pdf.internal.getFontSize();
    const adjustedEmailWidth = pdf.getStringUnitWidth(email) * adjustedFontSize;

    // Calculate positions
    const emailX = margin + textOffset;
    const numberX = emailX + adjustedEmailWidth + spacing;

    // Add email and number text
    y = addText(
      email,
      emailX,
      y + backgroundHeight / 2 - adjustedFontSize / 2,
      adjustedFontSize
    ); // Center vertically
    y = addText(number, numberX, y, adjustedFontSize); // Place number with spacing

    y += backgroundHeight + lineHeight; // Move y down for the next section

    // Add work history with custom formatting
    pdf.setFontSize(16);
    pdf.setTextColor(226, 229, 231); // Light text color for section headers
    y = addText("Work History", margin, y, 16);
    pdf.setFontSize(14);
    pdf.setTextColor(226, 229, 231); // Light text color for content
    y = addText(`Title: ${title}`, margin, y, 14);
    y = addText(`Company: ${company}`, margin, y, 14);
    y = addText(`Duration: ${startDate} to ${endDate}`, margin, y, 14);
    pdf.setFontSize(12);
    y = addText(`Responsibilities: ${responsible}`, margin, y, 12);
    y = addText(`Achievements: ${achievement}`, margin, y, 12);

    // Add education section
    pdf.setFontSize(16);
    pdf.setTextColor(226, 229, 231); // Light text color for section headers
    y = addText("Education", margin, y, 16);
    pdf.setFontSize(14);
    pdf.setTextColor(226, 229, 231); // Light text color for content
    y = addText(`Degree: ${degree}`, margin, y, 14);
    y = addText(`Major: ${major}`, margin, y, 14);
    y = addText(`School: ${school}`, margin, y, 14);

    // Save the PDF
    pdf.save("resume.pdf");
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download Resume as PDF</button>
      <h1>{fullName}</h1>
      <div
        className="email-number"
        style={{
          backgroundColor:
            formData.email || formData.number ? "orange" : "transparent",
        }}
      >
        <p>{number}</p>
        <p>{email}</p>
      </div>
      <div className="work-history">
        <h2>Work History</h2>
        <h3>Title</h3>
        <p>{title}</p>
        <h3>Company</h3>
        <p>{company}</p>
        <p>
          {startDate} to {endDate}
        </p>
        <h3>Responsibilities</h3>
        <p>{responsible}</p>
        <h3>Notable Achievements</h3>
        <p>{achievement}</p>
      </div>
      <div className="education">
        <h2>Education</h2>
        <p>
          {degree} {degree && major ? "Degree in" : ""} {major}
        </p>
        <p>{school}</p>
      </div>
    </div>
  );
}
