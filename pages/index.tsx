import type { NextPage } from "next";
import { Banner } from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Banner />
    </div>
  );
};

export default Home;
