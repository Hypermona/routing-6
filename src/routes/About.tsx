import { useLocation } from "react-router-dom";

function About() {
  const { state } = useLocation();
  throw new Error("Oops, something went wrong!");
  return <div>{state}</div>;
}

export default About;
