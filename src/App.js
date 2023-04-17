import Navbar from "./components/Navbar";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AllFlags, SingleFlag } from "./redux/actions/FlagsAction";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.flags);
  const [dataFlags, setDataFlags] = useState([]);
  const Login = () => {
    dispatch({
      type: "LOGIN",
    });
  };
  const Logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const FetchAll = async () => {
    await dispatch(AllFlags());
  };
  const FetchOne = async () => {
    await dispatch(SingleFlag());
    console.log(flags.flag);
  };

  useEffect(() => {
    setDataFlags(flags.flags);
  }, []);
  return (
    <div className="App">
      <Navbar login={false} />
      <h2>exemple1</h2>
      <button className="btn btn-primary" onClick={Login}>
        Login
      </button>{" "}
      <button className="btn btn-primary" onClick={Logout}>
        Logout
      </button>
      <hr />
      <h2>exple(fetch data apistore)</h2>
      <button className="btn btn-primary" onClick={FetchAll}>
        fetch all
      </button>{" "}
      <button className="btn btn-primary" onClick={FetchOne}>
        fetch one
      </button>
      <hr />
      <h2>all flags</h2>
      <div>
        {dataFlags.map(({ file_url }) => (
          <img src={`https://${file_url}`} alt="" width="200px" />
        ))}
      </div>
    </div>
  );
}

export default App;
