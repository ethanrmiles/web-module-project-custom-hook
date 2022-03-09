
import useLocal from "./hooks/useLocal";

export default function useDark  (initialValue)  {
    const [darkMode, setDarkMode] = useLocal('darkMode', initialValue);
    return [darkMode, setDarkMode];
}
