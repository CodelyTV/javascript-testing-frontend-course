import { useState } from "react";
import { createUser } from "../services/userRepository";
import Form from "./Form";
import SuccessMessage from "./SuccessMessage";

function Profile() {
  const [user, setUser] = useState({});

  function submit(data) {
    createUser(data).then((newUser) => {
      setUser(newUser);
    });
  }

  const userCreated = !!user?.name;

  return (
    <div>
      <h1>Create profile</h1>
      {userCreated ? <SuccessMessage user={user} /> : <Form submit={submit} />}
      <a href="http://example.com" title="Visit page"></a>
    </div>
  );
}

export default Profile;
