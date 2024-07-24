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
  } = formData;

  return (
    <div>
      <p>{fullName}</p>
      <p>{email}</p>
      <p>{number}</p>
      <p>{title}</p>
      <p>{company}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <p>{responsible}</p>
      <p>{achievement}</p>
      <p>{school}</p>
      <p>{degree}</p>
    </div>
  );
}
