export const containerAnimvariants = {
    hidden: { opacity: 0, scale: 0.0 },
    visible: { opacity: 1, scale: 1.0, transition: { duration: 0.2, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.9, transtition: { duration: 0.2, ease: 'easeInOut' } }
};

export const wrapperAnimVariants = {
    hidden: { backgroundColor: 'rgba(0,0,0,0)' },
    visible: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: { backgroundColor: 'rgba(0,0,0,0)', transtition: { duration: 0.2, ease: 'easeInOut' } }
};
