import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
export default function EmailForm() {
  const form = useRef();
  const sendFormEmail = () => {
    emailjs
      .sendForm(
        "service_j7l4f6f",
        "template_ftwix38",
        form.current,
        "-3WdRGPsYejHm-MGE"
      )
      .then(() => {
        toast.success("Ma'lumot yuborildi");
        console.log("Ma'lumot yuborildi");

      })
      .catch((err) => {
        toast.error("Ma'lumot yuborilmadi")
        console.log(`Ma'lumot yuborilmadi: ${err}`);
      });
  };

  return (
    <React.Fragment>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        ref={form}
        className="w-[600px] bg-blue-500 p-[10px] mx-auto flex flex-col gap-y-[20px]"
      >
        <input
          type="text"
          className="border-2 py-[3px] px-[8px]"
          placeholder="Ismingizni kiriting..."
          name="user_name"
        />

        <input
          type="number"
          className="border-2 py-[3px] px-[8px]"
          placeholder="Yoshingizni kiriting..."
          name="user_age"
        />

        <input
          name="user_email"
          type="email"
          className="border-2 py-[3px] px-[8px]"
          placeholder="Emailingizni kiriting..."
        />
        <input
          name="user_job"
          type="email"
          className="border-2 py-[3px] px-[8px]"
          placeholder="Kasbingizni kiriting..."
        />

        <button
          className="bg-green-500 p-[8px]"
          type={"button"}
          onClick={() => {
            sendFormEmail();
          }}
        >
          Yuborish
        </button>
      </form>
    </React.Fragment>
  );
}
