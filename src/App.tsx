import { useState } from "react";

import Home from "./pages/Home";
import GoogleLogin from "./pages/GoogleLogin";
import Notifications from "./pages/Notifications";

export default function App() {
  const [page, setPage] =
    useState<"home" | "google" | "notifications">("home");

  if (page === "google") {
    return (
      <GoogleLogin
        onContinue={() => {
          setPage("notifications");
        }}
      />
    );
  }

  if (page === "notifications") {
    return <Notifications />;
  }

  return (
    <Home
      onGoogle={() => {
        setPage("google");
      }}
    />
  );
}
