import { userService } from "@/services";
import React from "react";

const Home = () => {
  console.log(userService.userValue);
  console.log('a')
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="center">
      <h2>Home Page</h2>
    </div>
    </div>
  );
};
export default Home;