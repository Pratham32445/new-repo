import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import { useRecoilValue } from "recoil";
import { selectedState } from "../Store/atoms";
import axios from "axios";
import { Ticket } from "../types";
import styles from "../styles/manager.module.css";

interface User {
  id: string;
}

export const getUserName = (userId: string, allTasks: any) => {
  const { data } = allTasks;
  const user = data.users.find((user: User) => user.id == userId);
  return user ? user.name : "Unknown User";
};

const Manager = () => {
  const Category = useRecoilValue(selectedState);

  const [alltasks, setAlltasks] = useState();

  const [ticketState, setTicketState] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      // @ts-ignore
      setAlltasks(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!Category || !alltasks) return;

    const Results = async () => {
      if (Category == "Status") {
        const { data } = alltasks;
        const tickets = data.tickets;
        const res: any = {
          Backlog: [],
          Todo: [],
          "In progress": [],
          Done: [],
          Canceled: [],
        };
        tickets.forEach((ticket: Ticket) => {
          res[ticket.status].push(ticket);
        });
        setTicketState(res);
      } else if (Category == "User") {
        const { data } = alltasks;
        const tickets = data.tickets;
        const res: any = {};
        tickets.forEach((ticket: Ticket) => {
          const userName = getUserName(ticket.userId, alltasks);
          if (res.hasOwnProperty(userName)) res[userName].push(ticket);
          else res[userName] = [ticket];
        });
        console.log(tickets);
        setTicketState(res);
      } else if (Category == "Priority") {
        const { data } = alltasks;
        // @ts-ignore
        const tickets = data.tickets;
        const res = { 0: [], 1: [], 2: [], 3: [], 4: [] };
        tickets.forEach((ticket: Ticket) => {
          // @ts-ignore
          res[ticket.priority].push(ticket);
        });
        // @ts-ignore
        setTicketState(res);
      }
    };

    Results();
  }, [Category, alltasks]);

  return (
    <div className={styles.container}>
      {ticketState &&
        Object.keys(ticketState).map((category) => (
          <Tasks
            tickets={ticketState[category]}
            title={category}
            allTasks={alltasks}
            Category={Category}
          />
        ))}
    </div>
  );
};

export default Manager;
