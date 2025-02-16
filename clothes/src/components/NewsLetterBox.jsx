import React from "react";

const NewsLetterBox = () => {
  const onSubmithandler = (event) => {
    event.preventDefaul();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
        distinctio.
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={onSubmithandler}
      >
        <input
          required
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none text-xl"
        />
        <button
          type="submit"
          className="bg-black text-white text-base px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
