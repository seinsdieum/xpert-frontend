import { useMemo } from 'react';

function useClassName(active?: boolean, activeClass?: string) {
    return useMemo(() => {
        return [active ? activeClass : ''].filter(Boolean).join(' ');
    }, [active, activeClass]);
}
export default useClassName;
