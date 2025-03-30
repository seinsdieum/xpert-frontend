import { AnimatePresence, motion } from 'motion/react'
import { ReactElement, ReactNode, useMemo, useState } from 'react'
import style from './DropoverButton.module.css'
import { useDebounce } from '@/shared/lib'

type Props = {
    renderTrigger: (
        onClick: React.MouseEventHandler<HTMLButtonElement>
    ) => ReactElement<any, any>
    children: ReactNode
    posX?: 'l' | 'r' | 'xc'
    posY?: 't' | 'b' | 'yc'
    className?: string
}

const variants = {
    init: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.1, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.1, ease: 'easeInOut' }
    }
}

const DropoverButton = ({ renderTrigger, posX, posY, children }: Props) => {
    const [isShown, setIsShown] = useState(false)

    const debounceVisibility = useDebounce((s: boolean) => {
        setIsShown(s)
    }, 2000)
    const show = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!e.currentTarget) return
        setIsShown(true)
        debounceVisibility(false)
    }

    const trigger = useMemo(() => {
        return renderTrigger(e => show(e))
    }, [])

    return (
        <div
            onMouseLeave={() => debounceVisibility(false)}
            className={style.wrapper}>
            <AnimatePresence>
                {isShown && (
                    <motion.div
                        onMouseEnter={() => debounceVisibility(true)}
                        onMouseLeave={() => {
                            setIsShown(false)
                            debounceVisibility(false)
                        }}
                        variants={variants}
                        initial='init'
                        animate='visible'
                        exit='exit'
                        className={`${style.menu} ${posX ? style[posX] : ''} ${
                            posY ? style[posY] : ''
                        }`}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            {trigger}
        </div>
    )
}

export default DropoverButton
