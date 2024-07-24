import { useState } from "react";
import PersonalForm from "./components/personal.jsx";
import WorkHistoryForm from "./components/work.jsx";
import Education from "./components/education.jsx";
import Preview from "./components/preview.jsx";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [responsible, setResponsible] = useState("");
  const [achievement, setAchievement] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState(null);

  const formData = {
    fullName,
    setFullName,
    email,
    setEmail,
    number,
    setNumber,
    title,
    setTitle,
    company,
    setCompany,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    responsible,
    setResponsible,
    achievement,
    setAchievement,
    school,
    setSchool,
    degree,
    setDegree,
  };
  return (
    <>
      <PersonalForm formData={formData} />
      <WorkHistoryForm formData={formData} />
      <Education formData={formData} />
      <Preview formData={formData} />
    </>
  );
}

export default App;
