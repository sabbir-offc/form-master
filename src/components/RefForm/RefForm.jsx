import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  return (
    <div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter your name."
          name="userName"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          ref={emailRef}
          type="email"
          defaultValue={"rojoni@sojoni.com"}
          placeholder="Enter you email."
          name="userEmail"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter you Password."
          name="userPhone"
          className="input input-bordered focus:outline-none input-info w-full max-w-xs"
        />
        <br />
        <input type="submit" value="Submit" className="btn btn-accent" />
      </form>
    </div>
  );
};

export default RefForm;
