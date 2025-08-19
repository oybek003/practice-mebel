import React from "react";
import { toast } from "react-toastify";

const Section4Oybek = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Подписка оформлена!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2"
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        className="p-4 w-[350px] h-[50px] bg-[#F9F9F9] border border-gray-300 rounded-md focus:outline-none"
      />
      <button
        type="submit"
        className="w-[120px] h-[50px] text-white bg-[#2A254B] rounded-md hover:bg-[#3c3570] transition"
      >
        Sign up
      </button>
    </form>
  );
};

export default Section4Oybek;
