import Home from "./Comp/Home";
import { WeatherProvider } from "./Context/WeatherContext.jsx";

function App() {
  return (
    <WeatherProvider>
      <div className=" bg-slate-400">
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
