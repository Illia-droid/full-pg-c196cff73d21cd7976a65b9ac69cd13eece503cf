import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../store/usersSlice";
import { getUserTasks } from "../../store/tasksSlice";
import UpdateUser from "../UpdateUser";

const UserProfile = () => {
  const [changeMode, setChangeMode] = useState(false);
  const { idUser } = useParams();
  const dispatch = useDispatch();
  const {
    users: { error: usersError, isFetching: usersIsFetching, currentUser },
    tasks: { error: tasksError, isFetching: tasksIsFetching, tasks },
  } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(Number(idUser))); // eslint-disable-next-line
  }, [idUser, dispatch]);
  const handleShowTasks = () => {
    dispatch(getUserTasks({ id: idUser }));
  };
  const handleSetChangeMode = () => {
    setChangeMode(!changeMode);
  };
  return (
    <>
      {usersError && <p>{usersError}</p>}
      {usersIsFetching && <p>Loading...</p>}
      {!usersError && !usersIsFetching && currentUser && (
        <article>
          <h2>
            {currentUser.firstName}
            {currentUser.lastName}
            UserProfile id = {idUser} email:{currentUser.email}
          </h2>
          {currentUser.avatar && (
            <div>
              <img
                width={250}
                src={`http://localhost:3000/images/${currentUser.avatar}`}
                alt="avatar"
              />
            </div>
          )}
          <section>
            <button onClick={handleShowTasks}>Show tasks</button>
            {tasksError && <p>{tasksError}</p>}
            {tasksIsFetching && <p>Loading...</p>}
            {!tasksError && !tasksIsFetching && tasks && (
              <ul>
                {tasks.map((task) => (
                  <>
                    <li key={task.id}>{task.id + " " + task.content}</li>
                  </>
                ))}
              </ul>
            )}
            <button onClick={handleSetChangeMode}>let`s update</button>
            {changeMode && <UpdateUser id={idUser} />}
          </section>
        </article>
      )}
    </>
  );
};

export default UserProfile;
