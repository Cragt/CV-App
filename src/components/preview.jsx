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

  return (
    <div>
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
          {degree} degree in {major}
        </p>
        <p>{school}</p>
      </div>
    </div>
  );
}
