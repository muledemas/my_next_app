import React from "react";
import Link from "next/link";
import User from "@/app/components/User";

const Home = () => {
  return (
    <div>
      <h1 className="text-red-500">Welcome to My Portfolio!</h1>
      <User name="Mule" age="25"/>
      <p>Check out my projects and skills below:</p>
      <Link href="/projects">View Projects</Link>
    </div>
  );
};

export default Home;
