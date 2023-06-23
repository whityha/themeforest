import { useState } from 'react';

const useAccordion = () => {
    const [open, setOpen] = useState(false);
    const handleAccordion = () => {
        setOpen((prevState) => !prevState);
    };
    return {
        open,
        handleAccordion,
    };
};

export default useAccordion;
