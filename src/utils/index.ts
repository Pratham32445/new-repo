import InProgress from "../assets/icons/in-progress.svg";
import Done from "../assets/icons/Done.svg";
import Cancelled from "../assets/icons/Cancelled.svg";
import Backlog from "../assets/icons/Backlog.svg";
import todo from "../assets/icons/To-do.svg";
import HightPriority from "../assets/icons/Img - High Priority.svg";
import LowtPriority from "../assets/icons/Img - Low Priority.svg";
import MediumPriority from "../assets/icons/Img - Medium Priority.svg";
import UrgentPriority from "../assets/icons/SVG - Urgent Priority grey.svg";
import Nopriority from "../assets/icons/No-priority.svg";

export const iconMap: Record<string, string> = {
  Todo: todo,
  "In progress": InProgress,
  Done: Done,
  Canceled: Cancelled,
  Backlog: Backlog,
};

export const Priority = {
  0: Nopriority,
  1: LowtPriority,
  2: MediumPriority,
  3: HightPriority,
  4: UrgentPriority,
};

export const PriorityValue = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

