export default function WeatherDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getdate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  day();
}
