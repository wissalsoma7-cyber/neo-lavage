import Booking from "./pages/Booking";
import WasherProfile from "./pages/WasherProfile";
import Confirmation from "./pages/Confirmation";
import { useState } from "react";
import Home from "./pages/Home";
import GoogleLogin from "./pages/GoogleLogin";
import Notifications from "./pages/Notifications";
import Location from "./pages/Location";
import GoogleMaps from "./pages/GoogleMaps";
import VehicleSelection from "./pages/VehicleSelection";
import Booking from "./pages/Booking";

export default function App() {
  const [page, setPage] = useState<
    | "home"
    | "google"
    | "notifications"
    | "location"
    | "maps"
    | "vehicle"
    | "booking"
    | "booking"
    | "washer"
    | "confirmation"
  >("home");

  if (page === "google") {
    return <GoogleLogin onContinue={() => setPage("notifications")} />;
  }

  if (page === "notifications") {
    return <Notifications onContinue={() => setPage("location")} />;
  }

  if (page === "location") {
    return <Location onContinue={() => setPage("maps")} />;
  }

  if (page === "maps") {
    return <GoogleMaps onContinue={() => setPage("vehicle")} />;
  }

  if (page === "vehicle") {
    return <VehicleSelection onContinue={() => setPage("booking")} />;
  }

  if (page === "booking") {
    return <Booking />;
  }

  return <Home onGoogle={() => setPage("google")} />;
}
