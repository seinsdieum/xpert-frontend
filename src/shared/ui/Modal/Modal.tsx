import { ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import InlineWrapper from '../InlineWrapper/InlineWrapper';
import { HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'motion/react';
import { containerAnimvariants, wrapperAnimVariants } from './model';
import { useHotKey } from '@/shared/lib';
type Props = {
    header?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    hideHeader?: boolean;
};

const ModalElement = ({ header, hideHeader, children, onClose, isOpen }: Props) => {
    useHotKey(
        ['Escape'],
        () => {
            onClose?.();
        },
        true
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    onClick={() => onClose?.()}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={wrapperAnimVariants}
                    className={style.wrapper}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerAnimvariants}
                        onClick={e => e.stopPropagation()}
                        className={style.container}
                    >
                        {!hideHeader && (
                            <InlineWrapper className={style.header}>
                                <HiX />
                                <h2>{header}</h2>
                            </InlineWrapper>
                        )}
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Modal = (props: Props) => {
    const rootModals = useMemo(() => {
        return document.querySelector('#root-modals');
    }, []);

    return rootModals ? (
        createPortal(<ModalElement {...props} />, rootModals)
    ) : (
        <ModalElement {...props} />
    );
};

export default Modal;
