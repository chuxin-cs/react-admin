import {useMemo, useState} from 'react';

export interface Actions<T> {
    setLeft: () => void;
    setRight: () => void;
    set: (value: T) => void;
    toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];
function useToggle<T>(defaultValue: T): [T, Actions<T>];
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {

    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    const [state, setstate] = useState<D | R>(defaultValue);

    const actions = useMemo(() => {
        const set = (value: D | R) => setstate(value);
        const toggle = () => {
            setstate((value) => value === defaultValue ? reverseValueOrigin : defaultValue)
        }
        const setLeft = () => setstate(defaultValue);
        const setRight = () => setstate(reverseValueOrigin);

        return {
            toggle,
            set,
            setLeft,
            setRight
        }
    }, []);

    return [state, actions];
}

export default useToggle;