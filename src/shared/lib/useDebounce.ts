import { useCallback, useEffect, useRef } from 'react';

const useDebounce = (cb: (...args: any[]) => void, ms: number) => {
    const argsRef = useRef<any[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    function pushMacro() {
        timerRef.current = setTimeout(() => {
            if (argsRef.current) {
                cb(...argsRef.current);

                timerRef.current = null;
            }
        }, ms);
    }

    const debouncedCall = useCallback(
        (...args: any[]) => {
            argsRef.current = args;
            if (!timerRef.current) {
                pushMacro();
            } else {
                clearTimeout(timerRef.current);
                timerRef.current = null;
                pushMacro();
            }
        },
        [cb, ms]
    );

    useEffect(() => {
        return () => {
            timerRef.current = null;
        };
    }, []);

    return debouncedCall;
};

export default useDebounce;
