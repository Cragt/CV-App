export default function WorkHistoryForm({ formData }) {
  const {
    setTitle,
    setCompany,
    setStartDate,
    setEndDate,
    setResponsible,
    setAchievement,
  } = formData;

  function handleDate() {
    const start = document.getElementById("start");
    const end = document.getElementById("end");

    start.addEventListener(
      "change",
      function () {
        if (start.value) end.min = start.value;
      },
      false
    );
    end.addEventListener(
      "change",
      function () {
        if (end.value) start.max = end.value;
      },
      false
    );
  }
  // Add button to add addition Companies, which will add the relative children forms
  // Add button to add additional Achievements
  // Add button to add additional Responsibilities
  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Full Stack Web Developer"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Amazon"
          onChange={(e) => setCompany(e.target.value)}
        />
        <label htmlFor="start">Start Date: </label>
        <input
          type="date"
          name="start"
          id="start"
          onClick={handleDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end">End Date: </label>
        <input
          type="date"
          name="end"
          id="end"
          onClick={handleDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <label htmlFor="responsibilities">Responsibilities: </label>
        <ul>
          <li>
            <input
              type="text"
              name="responsibilities"
              id="responsibilities"
              onChange={(e) => setResponsible(e.target.value)}
            />
          </li>
        </ul>
        <label htmlFor="achievements">Notable Achievements: </label>
        <textarea
          type="text"
          name="achievements"
          id="achievements"
          rows={1}
          wrap="soft"
          onChange={(e) => setAchievement(e.target.value)}
        />
      </form>
    </div>
  );
}
