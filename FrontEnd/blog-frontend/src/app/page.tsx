"use client";

import Typography from "@/components/Typography";
import { useRouter } from "next/navigation";
import { Icon } from "semantic-ui-react";

export default function HomeStarted() {
  const router = useRouter();

  const goToHomePage = () => router.push("/home");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <Typography size="15px" color="red">
        You are in the future started home
      </Typography>
      <Typography size="15px" color="red">
        Go to the home page
      </Typography>
      <button onClick={goToHomePage}>Home page</button>
    </div>
  );
}
