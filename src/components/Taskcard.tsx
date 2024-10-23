import styles from "../styles/taskcard.module.css";
import { Ticket } from "../types";
import { iconMap, Priority } from "../utils";

const Taskcard = ({
  task,
  userName,
  Category,
}: {
  task: Ticket;
  userName: string;
  Category: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.taskDiv}>
        <div>
          <p style={{ color: "grey", fontSize: 12 }}>{task.id}</p>
          <div className={styles.innerTaskDiv}>
            {Category == "User" || Category == "Priority" && <img src={iconMap[task.status]} />}
            <h5 className={styles.taskHeading}>{task.title}</h5>
          </div>
          <div className={styles.bottomDiv}>
            {/* @ts-expect-error */}
            {Category != "Priority" && <img src={Priority[task.priority]} />}
            <div>
              <p style={{ color: "grey", fontSize: 12 }}>{task.tag[0]}</p>
            </div>
          </div>
        </div>
        <div>
          {Category != "User" && (
            <img
              src={`https://ui-avatars.com/api/?name=${userName}`}
              style={{ width: 30, height: 30, borderRadius: "50%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Taskcard;
