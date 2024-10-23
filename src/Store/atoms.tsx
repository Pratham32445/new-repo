import { atom } from "recoil";

export const selectedState = atom({
  default: "Status",
  key: "selectedState",
});
