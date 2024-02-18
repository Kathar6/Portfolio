import { Fragment } from "react";

// Components
import HomePage from "@components/home-page";
import AboutPage from "@components/about-page";

export default function MainPage() {
  return (
    <Fragment>
      <HomePage />
      <AboutPage />
    </Fragment>
  );
}
