import { useState } from "react";
import { createUser } from "../services/userRepository";
import Form from "./Form";
import SuccessMessage from "./SuccessMessage";

function Profile() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  function isEmailInvalid(email) {
    return !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  }

  function submit(data) {
    if (isEmailInvalid(data.email)) {
      return setError(<p>The email is invalid.</p>);
    }
    setError(null);

    createUser(data)
      .then((newUser) => {
        setUser(newUser);
      })
      .catch(() => {
        setError(
          <p>
            There was an error processing your request. Please try again later.
          </p>
        );
      });
  }

  const userCreated = !!user?.name;

  return (
    <div>
      <h1>Create profile</h1>
      {error}
      {userCreated ? <SuccessMessage user={user} /> : <Form submit={submit} />}
    </div>
  );
}

export default Profile;
