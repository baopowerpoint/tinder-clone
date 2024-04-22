import UserForm from "@/components/form/UserForm";
import React from "react";

const OnBoardPage = () => {
  return (
    <div className="p-20">
      <h1 className="text-center text-3xl font-bold text-slate-700">
        Thông tin người dùng
      </h1>
      <UserForm />
    </div>
  );
};

export default OnBoardPage;
