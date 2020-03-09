import { useState, useEffect, useCallback } from "react";

const useHash = () => {
  const [value, setValue] = useState(window.location.hash.replace(/^#/, ""));
  const onChange = useCallback((ev: HashChangeEvent) => {
    if (ev.newURL.match(/#/)) {
      setValue(ev.newURL.replace(/^.*?#/, ""));
    } else {
      setValue("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
    };
  });

  return value;
};

export default useHash;
