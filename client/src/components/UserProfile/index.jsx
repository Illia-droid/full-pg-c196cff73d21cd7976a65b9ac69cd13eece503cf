import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../store/usersSlice";
import { getUserTasks } from "../../store/tasksSlice";

const UserProfile = () => {
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
  return (
    <>
      {usersError && <p>{usersError}</p>}
      {usersIsFetching && <p>Loading...</p>}
      {!usersError && !usersIsFetching && currentUser && (
        <article>
          <h2>
            UserProfile id = {idUser} email:{currentUser.email}
          </h2>
          {currentUser.avatar && (
            <div>
              <img
                width={100}
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
                    <li key={task.id}>{task.content}</li>
                    <button> change task</button>
                  </>
                ))}
              </ul>
            )}
          </section>
        </article>
      )}
    </>
  );
};

export default UserProfile;
