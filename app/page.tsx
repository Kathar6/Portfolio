import { Fragment } from "react";

// Components
import HomePage from "@components/home-page";
import AboutPage from "@components/about-page";
import ExperiencePage from "@components/experience-page";

export default function MainPage() {
  return (
    <Fragment>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
    </Fragment>
  );
}
