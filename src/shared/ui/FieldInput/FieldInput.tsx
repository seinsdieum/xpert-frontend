import { ChangeEventHandler, useMemo } from 'react';
import style from './FieldInput.module.css';
import { useClassName } from '@/shared/lib';
type Props = {
    isInner?: boolean;
    type: 'text' | 'email' | 'password';
    onChange: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    label?: string;
    validator?: (str: string) => boolean;
    isRequired?: boolean;
};

const FieldInput = ({ type, onChange, value, label, validator, isInner, isRequired }: Props) => {
    const isValid = useMemo(() => {
        return validator && value !== undefined ? validator(value) : true;
    }, [value]);

    const invalidClass = useClassName(!isValid, style.invalid);
    const activeClass = useClassName(value !== undefined && value.length > 0, style.active);
    const innerClass = useClassName(isInner, 'inner');
    const requiredClass = useClassName(isRequired, style.required);
    return (
        <div className={`${style.wrapper} ${invalidClass} ${requiredClass}`}>
            {label && <p className={`${style.label} ${activeClass}`}>{label}</p>}

            <input className={innerClass} value={value} type={type} onChange={onChange} />
        </div>
    );
};

export default FieldInput;
