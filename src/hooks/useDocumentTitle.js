import { useEffect, useRef } from "react";

export const useDocumentTitle = (title, restoreOnUnmount = true) => {
  const previousTitleRef = useRef("");

  useEffect(() => {
    previousTitleRef.current = document.title;
  }, []);
  useEffect(() => {
    if (title !== "") {
      document.title = title;
    }
  });

  useEffect(() => {
    if (restoreOnUnmount) {
      return () => {
        document.title = previousTitleRef.current;
      };
    }

    return undefined;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
