import { useState } from "react";

const StateFullForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be longer than 6 characters.");
    } else {
      setError("");
      console.log(email);
      console.log(password);
      console.log(name);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Enter your name."
          name="userName"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          type="email"
          onChange={handleEmailChange}
          placeholder="Enter you email."
          name="userEmail"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Enter you Password."
          name="userPassword"
          className="input input-bordered input-info w-full max-w-xs"
          required
        />
        <br />
        <input type="submit" value="Submit" className="btn btn-accent" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StateFullForm;
