export default function PersonalForm({ formData }) {
  const { setFullName, setEmail, setNumber } = formData;
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <label htmlFor="name">Full Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Craig Taylor"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="contact@craigtaylor.dev"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="812-881-6275"
          onChange={(e) => setNumber(e.target.value)}
        />
      </form>
    </div>
  );
}
