import { useRef, useState, useEffect } from "react";

const useOnSearch = (searchHandler: Function) => {
  const searchRef = useRef(searchHandler);
  const [isTyping, setIsTyping] = useState(false);
  const text = useRef<string>("");
  const handleChange = (event: any) => {
    text.current = event.target.value;
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  useEffect(() => {
    if (!isTyping) {
      searchRef.current(text.current);
    }
  }, [isTyping, text]);

  return {
    handleChange,
  };
};

export default useOnSearch;
