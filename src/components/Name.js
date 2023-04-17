import React from "react";
import { useSelector } from "react-redux";
function Name({ login }) {
  const auth = useSelector((state) => state.auth);
  const Login = auth.Login;
  return (
    <a
      class="nav-link active"
      aria-current="page"
      href="#"
      style={{ display: !Login ? "none" : "" }}
    >
      ines zribi
    </a>
  );
}

export default Name;
