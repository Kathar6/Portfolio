import { Fragment } from "react";

// Components
import HomePage from "@pages/home-page";
import AboutPage from "@pages/about-page";
import ExperiencePage from "@pages/experience-page";
import ProjectsPage from "@pages/projects-page";
import ContactPage from "@pages/contact-page";

export default function MainPage() {
  return (
    <Fragment>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </Fragment>
  );
}
