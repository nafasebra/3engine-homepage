import { EmailIcon, EmailStarIcon, SendIcon } from "@/assets/icons";
import React from "react";

import Style from "./Tabbar.module.css";

function TabbarBody() {
  return (
    <form className={Style.tabbar_body}>
      <div className={Style.tabbar_input__container}>
        <label className={Style.tabbar_input__label}>
          <EmailIcon />
          <p className="font-semibold">Your Email</p>
        </label>
        <input
          type="text"
          className={Style.tabbar_input__textbox}
          placeholder="example@gmail.com"
        />
      </div>
      <div className={Style.tabbar_input__container}>
        <label className={Style.tabbar_input__label}>
          <EmailStarIcon />
          <p className="font-semibold">Who invited you?</p>
        </label>
        <input
          type="text"
          className={Style.tabbar_input__textbox}
          placeholder="example@gmail.com"
        />
      </div>
      <button type="submit" className={Style.tabbar_submit}>
        <SendIcon />
        <p className="text-lg">Join</p>
      </button>
    </form>
  );
}

export default TabbarBody;
