import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../store/usersSlice";

const UserProfile = () => {
  const { idUser } = useParams();
  const dispatch = useDispatch();
  const { error, isFetching, currentUser } = useSelector(
    (store) => store.users
  );
  useEffect(() => {
    dispatch(getUser(Number(idUser))); // eslint-disable-next-line
  }, [idUser]);
  return (
    <>
      {error && <p>Error!</p>}
      {isFetching && <p>Loading...</p>}
      {!error && !isFetching && currentUser && (
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
            <button>Show tasks</button>
          </section>
        </article>
      )}
    </>
  );
};

export default UserProfile;
