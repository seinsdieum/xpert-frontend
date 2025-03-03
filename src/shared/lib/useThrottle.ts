import { useCallback, useEffect, useRef } from 'react';

function useThrottle(cb: (...args: any[]) => void, ms: number) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const argsRef = useRef<any[]>([]);

    const throttledFunction = useCallback(
        (...args: any[]) => {
            argsRef.current = args;
            if (timerRef.current === null) {
                timerRef.current = setTimeout(() => {
                    timerRef.current = null;
                    if (argsRef.current) cb(...argsRef.current);
                }, ms);
            }
        },
        [cb, ms]
    );

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) clearTimeout(timerRef.current);
        };
    }, []);
    return throttledFunction;
}

export default useThrottle;
