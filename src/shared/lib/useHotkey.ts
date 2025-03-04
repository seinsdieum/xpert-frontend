import { useCallback, useEffect, useRef } from 'react';
import useDebounce from './useDebounce';

const useHotKey = (keys: string[], call?: () => void, active?: boolean) => {
    const keysPressedRef = useRef<Set<string>>(new Set());

    const debounceCall = useDebounce(
        (k: string[], kp: Set<string>, ev: KeyboardEvent, c?: () => void) => {
            if (k.length === kp.size && k.every(key => kp.has(key))) {
                ev.preventDefault();
                c?.();
            }
            keysPressedRef.current.clear();
        },
        150
    );

    const keyCall = useCallback(
        (e: KeyboardEvent) => {
            keysPressedRef.current.add(e.key);
            debounceCall(keys, new Set(keysPressedRef.current), e, call);
        },
        [keys, call, debounceCall]
    );

    useEffect(() => {
        if (!active) {
            window.removeEventListener('keydown', keyCall);
            return;
        }

        window.addEventListener('keydown', keyCall);
        return () => window.removeEventListener('keydown', keyCall);
    }, [active, keyCall]);

    return null;
};

export default useHotKey;
