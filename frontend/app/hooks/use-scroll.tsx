import { useState, useEffect } from "react";

export default function useScroll() {
  //#region states
  const [currentPage, setCurrentPage] = useState<number>(0);
  //#endregion

  //#region handlers
  const getPages = () => {
    const pages = document.querySelectorAll<HTMLElement>(".page-container");

    return Array.from(pages);
  };

  /**
   * Set the current visible page when scroll
   */
  const syncCurrentPage = () => {
    // Set current page manually the first time, next the listener handle it
    const pages = getPages();
    const pageFound = pages.findIndex((page, index) => {
      const isVisible = page.getBoundingClientRect().y === 0;

      return isVisible;
    });

    if (pageFound === -1) return () => {};

    setCurrentPage(pageFound);

    const scrollContainer = document.getElementById("scroller");

    if (!scrollContainer) return () => {};

    let syncedPage = pageFound;

    const handleSearchPage = () => {
      const pages = getPages();

      const pageFound = pages.findIndex((page) => {
        const isVisible = page.getBoundingClientRect().y === 0;

        return isVisible;
      });

      if (pageFound === -1) return;

      setCurrentPage(pageFound);
      syncedPage = pageFound;
    };
    scrollContainer.addEventListener("scrollend", handleSearchPage);

    return () =>
      scrollContainer.removeEventListener("scrollend", handleSearchPage);
  };

  const scrollPageTo = (index: number) => {
    const pages = getPages();

    if (!pages[index]) return;

    if (pages[index] === pages[currentPage]) return;

    pages[index].scrollIntoView({ behavior: "smooth" });
  };

  const scrollPreviousPage = () => {
    const pages = getPages();

    const previousPage = pages[currentPage - 1];

    if (!previousPage) return;

    previousPage.scrollIntoView({ behavior: "smooth" });
  };

  const scrollNextPage = () => {
    const pages = getPages();

    const nextPage = pages[currentPage + 1];

    if (!nextPage) return;

    nextPage.scrollIntoView({ behavior: "smooth" });
  };
  //#endregion

  //#region effects
  useEffect(() => {
    const cleanup = syncCurrentPage();

    return () => {
      setCurrentPage(0);
      cleanup();
    };
  }, []);
  //#endregion

  return { currentPage, scrollPageTo, scrollNextPage, scrollPreviousPage };
}
