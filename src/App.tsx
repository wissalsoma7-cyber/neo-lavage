if (page === "apple")
  return (
    <AppleLogin
      onContinue={() => setPage("notifications")}
    />
  );

if (page === "email")
  return (
    <EmailLogin
      onContinue={() => setPage("verification")}
    />
  );

if (page === "verification")
  return (
    <CodeVerification
      onContinue={() => setPage("notifications")}
    />
  );
import AppleLogin from "./pages/AppleLogin";
import EmailLogin from "./pages/EmailLogin";
import CodeVerification from "./pages/CodeVerification";
if (page === "email")
  return (
    <EmailLogin
      onContinue={() => setPage("verification")}
    />
  );

if (page === "verification")
  return (
    <CodeVerification
      onContinue={() => setPage("notifications")}
    />
  );
import EmailLogin from "./pages/EmailLogin";
import CodeVerification from "./pages/CodeVerification";
import { useState } from "react";

import Home from "./pages/Home";
import GoogleLogin from "./pages/GoogleLogin";
import Notifications from "./pages/Notifications";
import Location from "./pages/Location";
import Cookies from "./pages/Cookies";
import GoogleMaps from "./pages/GoogleMaps";
import VehicleSelection from "./pages/VehicleSelection";
import Booking from "./pages/Booking";
import WasherProfile from "./pages/WasherProfile";
import Confirmation from "./pages/Confirmation";

export default function App() {
  const [page, setPage] = useState<
    | "home"
    | "google"
    | "notifications"
    | "location"
    | "cookies"
    | "maps"
    | "vehicle"
    | "booking"
    | "washer"
    | "confirmation"
  >("home");

  if (page === "google")
    return <GoogleLogin onContinue={() => setPage("notifications")} />;

  if (page === "notifications")
    return <Notifications onContinue={() => setPage("location")} />;

  if (page === "location")
    return <Location onContinue={() => setPage("cookies")} />;

  if (page === "cookies")
    return <Cookies onContinue={() => setPage("maps")} />;

  if (page === "maps")
    return <GoogleMaps onContinue={() => setPage("vehicle")} />;

  if (page === "vehicle")
    return <VehicleSelection onContinue={() => setPage("booking")} />;

  if (page === "booking")
    return <Booking />;

  if (page === "washer")
    return <WasherProfile />;

  if (page === "confirmation")
    return <Confirmation />;

  return <Home onGoogle={() => setPage("google")} />;
}
