import { useState } from "react";

import Home from "./pages/Home";
import GoogleLogin from "./pages/GoogleLogin";

export default function App() {
  const [page] = useState("home");

  if (page === "google") {
    return <GoogleLogin />;
  }

  return <Home />;
}
