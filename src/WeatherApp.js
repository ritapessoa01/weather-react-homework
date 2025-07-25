import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="weather-app">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city">Paris</h1>
            <p className="current-details">
              <span>Friday 01:09</span>, moderate rain <br /> Humidity:{" "}
              <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">☀️</span>
            <span className="current-temperature-value">24</span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          {" "}
          This project was coded by{" "}
          <a href="https://github.com/ritapessoa01" target="_blank">
            Rita Pessoa
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ritapessoa01/weather-react-homework"
            target="_blank"
          >
            {" "}
            on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-homework4.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
