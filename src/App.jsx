import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./temperatureSlice";
import { useEffect } from "react";
import "./App.css";

function App() {
  const temperature = useSelector((state) => state.temperature.value);
  const dispatch = useDispatch();

  // Function to get background color based on temperature
  const getBackgroundColor = () => {
    if (temperature <= 15) return "#3f69ff"; // Cold (Blue)
    if (temperature >= 30) return "red"; // Hot (Red)
    return "rgb(92, 206, 64)"; // Moderate (Green)
  };

  // Update body background color dynamically
  useEffect(() => {
    document.body.style.backgroundColor = getBackgroundColor();
  }, [temperature]);

  return (
    <div className="container">
      <h1>Temperature App</h1>
      <p>Temperature: {temperature}°C</p>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
}

export default App;
