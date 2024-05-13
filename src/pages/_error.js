import React from "react";
import Link from "next/link";

export default function errorPage() {
  return (
    <div>
      <p>Oops,something went wrong!!</p>
      <p>
        Please try going <Link href="/">back</Link>
      </p>
    </div>
  );
}
