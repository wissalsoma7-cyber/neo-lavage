import BookingSummary from "./pages/BookingSummary";
import Rating from "./pages/Rating";
import Tracking from "./pages/Tracking";
import History from "./pages/History";
import AppleLogin from "./pages/AppleLogin";
import EmailLogin from "./pages/EmailLogin";
import CodeVerification from "./pages/CodeVerification";
import Home from "./pages/Home";
import GoogleLogin from "./pages/GoogleLogin";
import Notifications from "./pages/Notifications";
import Location from "./pages/Location";
import Cookies from "./pages/Cookies";
import GoogleMaps from "./pages/GoogleMaps";
import WasherList from "./pages/WasherList";
import VehicleSelection from "./pages/VehicleSelection";
import Booking from "./pages/Booking";
import WasherProfile from "./pages/WasherProfile";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
export default function App() {
  const [page, setPage] = useState<"tracking"
    | "home"
    | "google"
    | "apple"
    | "email"
    | "verification"
    | "notifications"
    | "location"
    | "cookies"
    | "maps"
    | "washerlist"
    | "vehicle"
    | "booking"
    |  "bookingsummary"
    | "washer"
    | "payment"
    | "confirmation"
    | "tracking"
    | "history"
    | "rating"
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
  return (
    <GoogleMaps
      onContinue={() => 
        setPage("washerlist")}
    />
  );

  if (page === "washerlist")
  return (
    <WasherList
      onContinue={() => setPage("vehicle")}
    />
  );

  
  if (page === "vehicle")
    return <VehicleSelection onContinue={() => setPage("booking")} />;

  if (page === "booking")
  return (
    <Booking
      onContinue={() => 
        setPage("bookingsummary")}
    />
  );

  if (page === "bookingsummary")
  return (
    <BookingSummary
      onContinue={() => 
  setPage("washer")}  
      />
  );

  if (page === "washer")
  return (
    <WasherProfile
      onContinue={() => 
  setPage("payment")}
    />
  );

  if (page === "payment")
  return (<Payment
      onContinue={() => 
  setPage("confirmation")}
    />
  );
  
  if (page === "confirmation")
  return (
    <Confirmation
      onContinue={() => 
  setPage("tracking")}
    />
  );
  
  if (page === "tracking")
  return (
    <Tracking
      onContinue={() => setPage("history")}
    />
  );
  
if (page === "history")
  return (
    <History
      onContinue={() => setPage("rating")}
    />
  );
  
  if (page === "rating")
  return (
    <Rating
      onContinue={() => setPage("home")}
    />
  );
  
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

  return (
  <Home
    onGoogle={() => setPage("google")}
    onApple={() => setPage("apple")}
    onEmail={() => setPage("email")}
  />
);
