import React from "react";
import { tabType } from "./type";

interface PropType {
  state: tabType;
  handleChange: (value: tabType) => void;
}

function TabbarButtons(props: PropType) {
  const { state, handleChange } = props;

  return (
    <div className="flex">
      <button
        onClick={() => {
          handleChange("join");
        }}
        type="button"
        className={`${state === "join" ? "bg-white text-primary" : "bg-primary text-white"} text-center py-4 px-6 transition-colors rounded-tl-2xl`}
      >
        join
      </button>
      <button
        onClick={() => {
          handleChange("leaderborad");
        }}
        type="button"
        className={`${state === "leaderborad" ? "bg-white text-primary" : "bg-primary text-white"} text-center py-4 px-6 transition-colors`}
      >
        Leaderboards
      </button>
      <button
        onClick={() => {
          handleChange("friends");
        }}
        type="button"
        className={`${state === "friends" ? "bg-white text-primary" : "bg-primary text-white"} text-center py-4 px-6 transition-colors rounded-tr-2xl`}
      >
        Your Friends
      </button>
    </div>
  );
}

export default TabbarButtons;
