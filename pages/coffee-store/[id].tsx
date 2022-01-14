import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

interface Props {}

function CoffeeStore({}: Props): ReactElement {
  const router = useRouter();
  console.log(router);

  return (
    <div className="container mx-auto">
      <h1>Coffee Store </h1>
      <Link href="/">Back to home</Link>
    </div>
  );
}

export default CoffeeStore;
