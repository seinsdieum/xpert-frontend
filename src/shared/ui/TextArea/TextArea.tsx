import { ChangeEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import style from './TextArea.module.css';
import { useClassName } from '@/shared/lib';
interface TextAreaProps {
    className?: string;
    limit?: number;
    placeholder?: string;
    value: string;
    onChange?: (str: string) => void;
}

const TextArea = (props: TextAreaProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [mentionLimit, setMentionLimit] = useState(false);
    const wrapperRef = useRef(null);
    const placeholder = useMemo(() => {
        return props.placeholder || 'write somth...';
    }, [props.placeholder]);
    const inactiveClass = useClassName(!props.value && !isFocused, style.inactive);
    const starterClass = useClassName(props.value.length < 60, style.starter);
    const limitIsOverClass = useClassName(mentionLimit, style.over);
    return (
        <div ref={wrapperRef} className={style.wrapper}>
            <textarea
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
                value={isFocused || props.value ? props.value : placeholder}
                onChange={e => {
                    if (!props.limit || e.target.value.length <= props.limit) {
                        const newValue =
                            props.value == ''
                                ? e.target.value.replace(placeholder, '')
                                : e.target.value;
                        props.onChange?.(newValue);
                        return;
                    }

                    setMentionLimit(true);
                    props.onChange?.(e.target.value.slice(0, props.limit));
                    setTimeout(() => {
                        setMentionLimit(false);
                    }, 0);
                }}
                className={`empty ${inactiveClass} ${starterClass} ${limitIsOverClass} ${
                    props.className || ''
                }`}
            ></textarea>
            {props.limit && (
                <div className={`${style.limitation} ${limitIsOverClass}`}>
                    <p>{props.limit - props.value.length}</p>
                </div>
            )}
        </div>
    );
};

export default TextArea;
