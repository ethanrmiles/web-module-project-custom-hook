import { useState } from "react";

const useLocal = (key, initialValue) => {
    const [state, setState] = useState(() => {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });
    const setStored = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    };
    return ([state, setStored]);
};

export default useLocal;