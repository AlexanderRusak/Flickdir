import { useState, useEffect } from 'react';
import { DEBOUNCED_DELAY } from '../../shutterStockApi/queryConst';


export default function useDebounce(value) {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, DEBOUNCED_DELAY);


            return () => {
                clearTimeout(handler);
            };
        }, [value]
    );

    return debouncedValue;
}