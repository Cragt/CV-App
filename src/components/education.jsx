export default function Education({ formData }) {
  const { setSchool, setDegree, setMajor } = formData;
  return (
    <div>
      <h2>Education</h2>
      <form>
        <label htmlFor="school">Name of School: </label>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="Harvard"
          onChange={(e) => setSchool(e.target.value)}
        />
        <label htmlFor="major">Major:</label>
        <input
          type="text"
          name="major"
          id="major"
          placeholder="Computer Science"
          onChange={(e) => setMajor(e.target.value)}
        />
        <label htmlFor="degree">Highest Level Achieved: </label>
        <select
          name="degree"
          id="degree"
          defaultValue={"Associate's"}
          onClick={(e) => setDegree(e.target.value)}
        >
          <option value="Incomplete">Incomplete</option>
          <option value="Associate's">Associate</option>
          <option value="Bachelor's">Bachelor&apos;s</option>
          <option value="Master's">Master&apos;s</option>
          <option value="Doctorate">Doctorate</option>
        </select>
      </form>
    </div>
    // Add button to add extra forms for more than one school
  );
}
