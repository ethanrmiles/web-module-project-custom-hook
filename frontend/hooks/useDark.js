
import useLocal from "./useLocal";

export default function useDark  (initialValue)  {
    const [darkMode, setDarkMode] = useLocal('darkMode', initialValue);
    return [darkMode, setDarkMode];
}
