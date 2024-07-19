// import { useState } from "react";

export default function PersonalForm() {
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <label htmlFor="name">Full Name: </label>
        <input type="text" name="name" id="name" placeholder="Craig Taylor" />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="contact@craigtaylor.dev"
        />
        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" name="phone" id="phone" placeholder="812-881-6275" />
      </form>
    </div>
  );
}
