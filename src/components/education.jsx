export default function Education() {
  return (
    <div>
      <h2>Education</h2>
      <form>
        <label htmlFor="school">Name of School: </label>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="Lincoln Trail College"
        />
        <label htmlFor="degree">Highest Level Achieved: </label>
        <select name="degree" id="degree" defaultValue={"associate"}>
          <option value="incomplete">Incomplete</option>
          <option value="associate">Associate</option>
          <option value="bachelor">Bachelor&apos;s</option>
          <option value="masters">Master&apos;s</option>
          <option value="doctorate">Doctorate</option>
        </select>
      </form>
    </div>
    // Add button to add extra forms for more than one school
  );
}
