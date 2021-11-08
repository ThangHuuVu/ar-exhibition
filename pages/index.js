import React from "react";
import dynamic from "next/dynamic";

const Ar = dynamic(() => import("../components/Ar"), { ssr: false });

const IndexPage = () => (
  <div className="w-screen h-screen">
    <Ar />
  </div>
);

export default IndexPage;
