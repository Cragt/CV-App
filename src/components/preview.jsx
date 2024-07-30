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
    y = addText(fullName, margin, y, 22);

    // Add background rectangle for email and number
    const backgroundHeight = 20; // Height of the background rectangle
    const backgroundWidth = pageWidth - 2 * margin; // Width of the background rectangle
    const textOffset = 5; // Offset for text inside the rectangle

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

    // Calculate positions
    const availableWidth = backgroundWidth - 2 * textOffset; // Total available width minus margins
    const totalWidth = emailWidth + numberWidth + textOffset; // Combined width with spacing

    let emailX, numberX;

    if (totalWidth <= availableWidth) {
      // If the combined width of email and number fits, place them on the same line
      emailX = margin + textOffset;
      numberX = emailX + emailWidth + textOffset;
    } else {
      // If it doesn't fit, scale down font size
      const scaleFactor = availableWidth / totalWidth;
      pdf.setFontSize(12 * scaleFactor);
      emailX = margin + textOffset;
      numberX =
        emailX +
        pdf.getStringUnitWidth(email) * pdf.internal.getFontSize() +
        textOffset;
    }

    // Add email and number text
    y += backgroundHeight / 2; // Center vertically within the rectangle
    pdf.text(email, emailX, y);
    pdf.text(number, numberX, y);

    y += backgroundHeight + lineHeight; // Move y down for the next section

    // Add work history with custom formatting
    pdf.setFontSize(16);
    pdf.setTextColor(226, 229, 231); // Light text color for section headers
    y = addText("Work History", margin, y, 18);
    pdf.setFontSize(14);
    pdf.setTextColor(226, 229, 231); // Light text color for content
    y = addText(`Position: `, margin, y, 14);
    y = addText(`${title}`, margin, y, 12);
    y = addText(`Company: `, margin, y, 14);
    y = addText(
      `${company}                                                                      ${startDate} to ${endDate}`,
      margin,
      y,
      12
    );
    pdf.setFontSize(12);
    y = addText(`Responsibilities: `, margin, y, 14);
    y = addText(`${responsible}`, margin, y, 12);
    y = addText(`Achievements: `, margin, y, 14);
    y = addText(`${achievement}`, margin, y, 12);

    // Add education section
    pdf.setFontSize(16);
    pdf.setTextColor(226, 229, 231); // Light text color for section headers
    y = addText("Education", margin, y, 18);
    pdf.setFontSize(14);
    pdf.setTextColor(226, 229, 231); // Light text color for content
    y = addText(`Degree: `, margin, y, 14);
    y = addText(`${degree} degree in ${major}`, margin, y, 12);
    y = addText(`${school}`, margin, y, 12);

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
