import { userService } from "@/services";
import { useEffect, useState } from "react";

const Home = (props) => {
  console.log('home')
  const [user, setUser] = useState(false);
  useEffect(() => {
    console.log('a')
    setUser(userService.userValue);
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="center">
      <h2>Home Page</h2>
      <p>{user.username}</p>
      <p>{user.firstName}</p>
    </div>
    </div>
  );
};

export default Home;