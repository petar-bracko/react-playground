import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UnknownRoute = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  }, []);

  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
  }, [countdown]);

  return (
    <>
      <h2>Unknown route &#x1F6A9;</h2>
      <p>
        Returning to Homepage after{" "}
        <span style={{ color: "red" }}>{countdown}</span> sec...
      </p>
    </>
  );
};
