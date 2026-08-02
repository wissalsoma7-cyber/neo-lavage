import { useState } from "react";

import Home from "./pages/Home";
import GoogleLogin from "./pages/GoogleLogin";
import Notifications from "./pages/Notifications";
import Location from "./pages/Location";
import GoogleMaps from "./pages/GoogleMaps";

export default function App() {
  const [page, setPage] = useState<
    "home" | "google" | "notifications" | "location" | "maps"
  >("home");

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
    return (
      <Notifications
        onContinue={() => {
          setPage("location");
        }}
      />
    );
  }

  if (page === "location") {
    return (
      <Location
        onContinue={() => {
          setPage("maps");
        }}
      />
    );
  }

  if (page === "maps") {
    return <GoogleMaps />;
  }

  return (
    <Home
      onGoogle={() => {
        setPage("google");
      }}
    />
  );
}
