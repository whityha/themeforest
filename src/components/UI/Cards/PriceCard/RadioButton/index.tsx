import React from 'react';
import uuid4 from 'uuid4';

interface RadioButton {
    name: string;
    children: React.ReactNode;
    checked?: boolean;
}

const RadioButton = ({ name, children, checked }: RadioButton) => {
    const id = uuid4();
    return (
        <>
            <input defaultChecked={checked} id={id} type="radio" name={name} />
            <label htmlFor={id}>{children}</label>
        </>
    );
};

export default RadioButton;
