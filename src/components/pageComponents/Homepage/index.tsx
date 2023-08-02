"use client";

import SeasonSale from "./SeasonSale";
import LatestDrop from "./LatestDrop";
export default function HomePage() {
  return (
    <>
      <SeasonSale season="summer" deal={25} />
      <LatestDrop />
    </>
  );
}
