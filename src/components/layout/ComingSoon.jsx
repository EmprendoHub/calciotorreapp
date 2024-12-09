import React from "react";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Image
        alt={"Calcio Torre"}
        src={"/logos/calciotorrelogo.jpg"}
        width={500}
        height={500}
      />
    </div>
  );
};

export default ComingSoon;
