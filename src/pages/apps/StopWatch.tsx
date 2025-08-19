import { useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const formatTime = (timeinSec: number) => {
  const hours = Math.floor(timeinSec / 3600);
  const minuts = Math.floor((timeinSec % 3600) / 60);
  const seconds = timeinSec % 60;

  const hourInString = hours.toString().padStart(2, "0");
  const minutsInString = minuts.toString().padStart(2, "0");
  const secondsInString = seconds.toString().padStart(2, "0");

  return `${hourInString} : ${minutsInString} : ${secondsInString}`;
};

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [IsRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalID: number;
    if (IsRunning) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [IsRunning]);
  return (
    <div className="adminConatiner">
      {/* Side Bar */}
      <AdminSideBar />
      {/* Main */}
      <main className="dashboardAppContainer">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>
              {IsRunning ? "Stop" : "Start"}
            </button>
            <button
              onClick={() => {
                setIsRunning(false), setTime(0);
              }}
            >
              reset
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StopWatch;
