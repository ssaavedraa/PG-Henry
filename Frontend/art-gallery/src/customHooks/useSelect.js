import { useState } from 'react';


export const useSelect= ( initialState = '0' ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues(target.value);

    }

    return [ values, handleInputChange, reset ];

}