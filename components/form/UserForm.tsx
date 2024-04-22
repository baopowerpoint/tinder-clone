"use client";
import React, { useEffect } from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

const UserForm = () => {
  const [formData, setFormData] = React.useState({
    user_id: "",
    first_name: "",
    last_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "",
    url: "",
    about: "",
    matches: [],
  });
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitted");
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setFormData((prev) => {
      if (e.target.type === "radio") {
        return {
          ...prev,
          gender_identity: e.target.value,
        };
      }
      return {
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="flex w-full items-center justify-center gap-5">
          <div className="mb-5 w-full">
            <label
              htmlFor="first_name"
              className="mb-2 block text-lg font-semibold text-slate-700 dark:text-white"
            >
              Họ
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Họ"
              required
              value={formData.first_name}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 w-full">
            <label
              htmlFor="last_name"
              className="mb-2 block text-lg font-semibold text-slate-700 dark:text-white"
            >
              Tên
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Tên"
              required
              value={formData.last_name}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" w-full ">
          <label
            htmlFor="first_name"
            className="mb-2 block text-lg font-semibold text-slate-700 dark:text-white"
          >
            Sinh nhật
          </label>
          <div className="flex flex-row gap-3">
            <input
              type="number"
              id="dob_day"
              name="dob_day"
              placeholder="DD"
              required
              value={formData.dob_day}
              className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={handleChange}
            />
            <input
              type="number"
              id="dob_month"
              name="dob_month"
              placeholder="MM"
              required
              value={formData.dob_month}
              className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={handleChange}
            />
            <input
              type="number"
              id="dob_year"
              name="dob_year"
              placeholder="YYYY"
              required
              value={formData.dob_year}
              className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Radio button */}
        <p className="mb-2 mt-8 block text-lg font-semibold text-slate-700 dark:text-white">
          Giới tính
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <label className="cursor-pointer">
            <input
              type="radio"
              className="peer sr-only"
              name="gender_identity"
              value={"man"}
              onChange={handleChange}
            />
            <div className=" w-32 min-w-fit rounded-md border-2 border-slate-200 p-5  ring-2 ring-transparent peer-checked:text-blue-300  peer-checked:ring-blue-300 peer-checked:ring-offset-1">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Nam</p>
              </div>
            </div>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              className="peer sr-only"
              name="gender_identity"
              onChange={handleChange}
              value={"woman"}
            />
            <div className=" w-32 min-w-fit rounded-md border-2  border-slate-200 p-5  ring-2 ring-transparent peer-checked:text-rose-300 peer-checked:ring-rose-300 peer-checked:ring-offset-1">
              <div className="flex flex-col gap-1">
                {" "}
                <p className="text-xl font-semibold">Nữ</p>
              </div>
            </div>
          </label>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <Switch
            checked={formData.show_gender}
            onCheckedChange={() => {
              setFormData((prev) => {
                return {
                  ...prev,
                  show_gender: !formData.show_gender,
                };
              });
            }}
          />
          <p className="text-lg font-semibold text-slate-700 dark:text-white">
            Hiển thị giới tính
          </p>
        </div>
        {/* Show for me who is man or woman */}
        <p className="mb-2 mt-8 block text-lg font-semibold text-slate-700 dark:text-white">
          Hiển thị cho tôi
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <label className="cursor-pointer">
            <input
              type="radio"
              className="peer sr-only"
              name="gender_interest"
              value={"man"}
              onChange={handleChange}
            />
            <div className=" w-32 min-w-fit rounded-md border-2 border-slate-200 p-5  ring-2 ring-transparent peer-checked:text-blue-300  peer-checked:ring-blue-300 peer-checked:ring-offset-1">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Nam</p>
              </div>
            </div>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              className="peer sr-only"
              name="gender_interest"
              onChange={handleChange}
              value={"woman"}
            />
            <div className=" w-32 min-w-fit rounded-md border-2  border-slate-200 p-5  ring-2 ring-transparent peer-checked:text-rose-300 peer-checked:ring-rose-300 peer-checked:ring-offset-1">
              <div className="flex flex-col gap-1">
                {" "}
                <p className="text-xl font-semibold">Nữ</p>
              </div>
            </div>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              className="peer sr-only"
              name="gender_interest"
              onChange={handleChange}
              value={"everyone"}
            />
            <div className=" w-36 min-w-fit rounded-md border-2  border-slate-200 p-5  ring-2 ring-transparent peer-checked:text-slate-700 peer-checked:ring-slate-700 peer-checked:ring-offset-1">
              <div className="flex flex-col gap-1">
                {" "}
                <p className="text-xl font-semibold">Mọi người</p>
              </div>
            </div>
          </label>
        </div>
        <div className="mt-8 flex w-full items-center justify-center gap-5">
          <div className="mb-5 w-full">
            <label
              htmlFor="last_name"
              className="mb-2 block text-lg font-semibold text-slate-700 dark:text-white"
            >
              Về tôi
            </label>
            <input
              type="text"
              id="about"
              name="about"
              placeholder="Tôi thích được..."
              required
              value={formData.about}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          className="bg-gradient-to-r from-rose-200 to-rose-400 px-10 text-lg font-semibold"
          type="submit"
        >
          Lưu
        </Button>
      </form>
    </>
  );
};

export default UserForm;
