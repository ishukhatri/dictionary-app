import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <div>
        <Image src="/assets/not-found.png" height={64} width={64} alt="logo" />
      </div>
      <div className="mt-11 text-center">
        <p className="font-bold text-xl text-black-dark">
          No Definitions Found
        </p>

        <p className="mt-6 font-normal text-lg text-grey-dark">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
