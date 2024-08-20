import "./App.css";
import "./index.css";
import ButtonLink from "./components/ButtonLink";

function App() {
  return (
    <div className="font-spartan intro-hero flex items-center justify-center h-full">
      <div className="home-container p-5">
        <div className="text-center p-8 rounded-lg w-full ">
          <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-md">
            Hi, I'm Ben!
          </h1>
          <p className="text-3xl mb-6 text-white">Are you interested in my:</p>
          <div className="flex justify-center space-x-4">
            <ButtonLink to="web" content="Web Development Work"></ButtonLink>
            <ButtonLink
              to="marketing"
              content="Marketing Experience"
            ></ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
