import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { deleteTask, setDoneTask } from "../../../store/todoSlice";
import styles from "./Task.module.scss";
const Task = (props) => {
  const dispatch = useDispatch();
  const {
    task: { id, body, isDone, deadLine },
  } = props;
  const handleIsDone = () => dispatch(setDoneTask({ id }));
  const handleDelete = () => dispatch(deleteTask({ id }));
  const classnames = cx(styles.taskItem, { [styles.done]: isDone });
  return (
    <li className={classnames}>
      <p>
        <strong>{body}</strong>
        <br />
        <em> deadLine: {deadLine}</em>
      </p>
      <div>
        <input type="checkbox" value={isDone} onChange={handleIsDone} />
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
};

export default Task;
