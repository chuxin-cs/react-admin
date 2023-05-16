import {isFunction} from "../../utils";
import useEffectOnce from "../useEffectOnce";

function useMount(fn: () => void) {
    if (!isFunction(fn)) {
        console.error(
            `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
        );
    }
    useEffectOnce(() => {
        fn?.();
    });
}

export default useMount;