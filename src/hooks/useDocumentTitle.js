import { useEffect, useRef } from "react";

export const useDocumentTitle = (title, restoreOnUnmount = true) => {
  const previousTitleRef = useRef("");

  useEffect(() => {
    // Set ref mutable value to current title, use it in cleanup function below
    previousTitleRef.current = document.title;
  }, []);
  useEffect(() => {
    // Set title on the document itself
    if (title !== "") {
      document.title = title;
    }
  });

  useEffect(() => {
    // Return cleanup function that will revert title to previous one, saved in ref
    if (restoreOnUnmount) {
      return () => {
        document.title = previousTitleRef.current;
      };
    }

    return undefined;
    // Disable hook rule as we want to run cleanup on unmount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
