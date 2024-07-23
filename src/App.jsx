import Companies from "./components/companies";
import Content from "./components/content";
import Navbar from "./components/navbar";
import "./style/tailwind.css";

function App() {
  return (
    <div className=" flex flex-col gap-32 pt-5 pb-5 px-10">
      <Navbar />
      <Content />
      <Companies />
    </div>
  );
}

export default App;
