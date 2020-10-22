import React from 'react';
import AppTextInput from '../AppTextInput';
import { useFormikContext } from 'formik';
import ErrorMessage from '../ErrorMessage';

function AppFormField({ name, ...otherProps}) {
    const {setFieldTouched, handleChange, touched, errors} = useFormikContext()
    return (
        <>
            <AppTextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}

            />
            {touched[name] && <ErrorMessage error={errors[name]} />}
        </>
    );
}

export default AppFormField;