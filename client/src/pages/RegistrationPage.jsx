import React from "react";
import UserForm from "../components/UserForm";
import { useSelector } from "react-redux";

const RegistrationPage = () => {
  const { error, isFetching, userAuth } = useSelector((store) => store.users);
  return (
    <>
      {error && <p>Error!</p>}
      {isFetching && <p>Loading...</p>}
      {!error && !isFetching && !userAuth && <UserForm />}
      {/* {!error && !isFetching && userAuth && <p>welcome!</p>} */}
    </>
  );
};

export default RegistrationPage;
