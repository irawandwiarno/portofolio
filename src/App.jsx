import "./App.css";
import Ambathik from "./pages/ambatik";
import Porto from "./pages/PortoPage";

const experienceList = [
  {
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    link: "https://www.klaviyo.com",
    date: "2024 — Present",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tech: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
];

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
     {/* <Porto items={experienceList}></Porto> */}
     <Ambathik></Ambathik>
    </div>
  );
}

export default App;
