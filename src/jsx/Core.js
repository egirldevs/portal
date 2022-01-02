import TypeAnimation from "react-type-animation";
import "./css/Core.css";

function App() {
  return (
    <div className="Core"> 
      <img alt="Logo" src="/logo.png" width="256px" />
      <TypeAnimation className="Core-Typewrite" cursor={false} sequence={["We'll be ready soon"]} wrapper="h1" />
      <h2 className="Core-Subheader">
        At the moment, Raven is preparing to enter closed alpha testing. Our team is working incredibly hard to prepare
        the service for public beta testing. More updates coming.
      </h2>
    </div>
  );
}

export default App;
