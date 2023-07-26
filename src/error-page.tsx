import errorImage from "./assets/404.jpg";
export default function ErrorPage() {
  return (
    <div id="error-page" style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Oops!</h1>
      <p>Sorry, Page Not Founded.</p>
      <img
        src={errorImage}
        alt="error"
        style={{ width: 700, marginLeft: "32%" }}
      />
    </div>
  );
}
