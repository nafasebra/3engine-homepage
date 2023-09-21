import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { EmailIcon, EmailStarIcon, SendIcon } from "@/assets/icons";
import Style from "./Tabbar.module.css";
import { tabType } from "./type";

interface PropType {
  state: tabType;
}

interface formDataType {
  email: string;
  inviterEmail: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  inviterEmail: Yup.string()
    .email("Invalid email address")
    .required("Inviter email is required"),
});

function TabbarBody(props: PropType) {
  const { state } = props;

  const handleSubmit = async (values: formDataType) => {
    // to handle state must do on here.
    // switch(state) {
    //   case 'join': do somthing
    //   case 'invited': do somthing
    //   case 'firends': do somthing
    // }
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      if (!res.ok) {
        throw Error("Network response was not ok");
      } else {
        console.log(res.json());
        console.log(values);
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      inviterEmail: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={Style.tabbar_body}>
      <div className={Style.tabbar_input__container}>
        <label htmlFor="email" className={Style.tabbar_input__label}>
          <EmailIcon />
          <p className="font-semibold">Your Email</p>
        </label>
        <input
          type="text"
          className={Style.tabbar_input__textbox}
          placeholder="example@gmail.com"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={Style.input_error}>{formik.errors.email}</div>
        )}
      </div>
      <div className={Style.tabbar_input__container}>
        <label htmlFor="inviterEmail" className={Style.tabbar_input__label}>
          <EmailStarIcon />
          <p className="font-semibold">Who invited you?</p>
        </label>
        <input
          type="text"
          className={Style.tabbar_input__textbox}
          placeholder="example@gmail.com"
          name="inviterEmail"
          id="inviterEmail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.inviterEmail}
        />
        {formik.touched.inviterEmail && formik.errors.inviterEmail && (
          <div className={Style.input_error}>{formik.errors.inviterEmail}</div>
        )}
      </div>
      <button type="submit" className={Style.tabbar_submit}>
        <SendIcon />
        <p className="text-lg">Join</p>
      </button>
    </form>
  );
}

export default TabbarBody;
