import styles from "../styles/tasks.module.css";
import add from "../assets/icons/add.svg";
import threedot from "../assets/icons/3 dot menu.svg";
import Taskcard from "./Taskcard";
import { Ticket } from "../types";
import { getUserName } from "../Screen/Manager";
import { iconMap, Priority, PriorityValue } from "../utils";

// @ts-ignore
const Tasks = ({ tickets, title, allTasks, Category }) => {

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <div className={styles.titleLeftDiv}>
          {Category == "User" && tickets.length > 0 && (
            <img
              src={`https://ui-avatars.com/api/?name=${getUserName(
                tickets[0].userId,
                allTasks
              )}`}
              style={{ width: 30, height: 30, borderRadius: "50%" }}
            />
          )}
          {Category == "Priority" && tickets.length && (
            <img
            // @ts-ignore
              src={tickets[0].priority && Priority[tickets[0].priority]}
              style={{ width: 20, height: 20, borderRadius: "50%" }}
            />
          )}
          {Category == "Status"  && (
            <img
              src={iconMap[title]}
              style={{ width: 15, height: 15, borderRadius: "50%" }}
            />
          )}
          {/* @ts-expect-error */}
          <p>{Category == "Priority" ? PriorityValue[title] : title}</p>
          <p>{tickets.length}</p>
        </div>
        <div className={styles.titleRightDiv}>
          <img src={add} />
          <img src={threedot} />
        </div>
      </div>
      <div>
        {tickets.map((task: Ticket) => (
          <Taskcard
            task={task}
            userName={getUserName(task.userId, allTasks)}
            Category={Category}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
