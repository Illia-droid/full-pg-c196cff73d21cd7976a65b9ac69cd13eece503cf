import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, delUser } from "../../store/usersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const { users, error, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({ page: 1, amount: 5 })); // eslint-disable-next-line
  }, [users.length]);
  const handleDelete = (id) => {
    dispatch(delUser(id));
  };
  const mapUsers = (user) => (
    <li key={user.id}>
      {user.email}
      <Link to={`/users/${user.id}`}> profile</Link>
      <button onClick={() => handleDelete(user.id)}>delete</button>
    </li>
  );
  return (
    <>
      {error && <p>Error!</p>}
      {isFetching && <p>Loading...</p>}
      {!error && !isFetching && <ul>{users.map(mapUsers)}</ul>}
    </>
  );
};

export default UsersList;
