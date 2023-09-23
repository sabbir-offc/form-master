const ReusableForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {" "}
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name."
          name="userName"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          type="email"
          placeholder="Enter you email."
          name="userEmail"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          type="phone"
          placeholder="Enter you Phone."
          name="userPhone"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input type="submit" value="Submit" className="btn btn-accent" />
      </form>
    </div>
  );
};

export default ReusableForm;
