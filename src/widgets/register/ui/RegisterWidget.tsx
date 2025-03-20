import { Button, FieldInput, InlineWrapper } from '@/shared/ui';
import { useState } from 'react';
import style from './RegisterWidget.module.css';
import { HiChevronRight } from 'react-icons/hi';
import { validateEmail, validatePassword, validateUsername } from '@/shared/lib';
import { useRegisterMutation } from '@/entities/auth';
import { useNavigate } from 'react-router-dom';
import { feedRoute } from '@/shared/config/frontend';

const RegisterWidget = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [errorLabel, setErrorLabel] = useState('');

    const [register] = useRegisterMutation();

    const tryRegister = () => {
        setErrorLabel('');
        if (
            !validateUsername(username) ||
            !validatePassword(password) ||
            repeatPassword !== password ||
            !validateEmail(email) ||
            !validateUsername(firstname) ||
            lastname
                ? !validateUsername(lastname)
                : false
        ) {
            setErrorLabel('Введите корректные данные');
            return;
        }

        register({ username, password, email, firstname, lastname })
            .unwrap()
            .then(() => navigate(feedRoute))
            .catch(err =>
                err.data.statusCode === 401
                    ? 'Введите корректные данные'
                    : 'Упс... Произошла ошибка!'
            );
    };

    return (
        <form className={style.wrapper}>
            <div className={style.switch_section}>
                <FieldInput
                    type="text"
                    label="Имя пользователя"
                    isRequired
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    isInner
                    validator={s => s.length === 0 || validateUsername(s)}
                />
                <InlineWrapper>
                    <FieldInput
                        type="text"
                        label="Ваше имя"
                        isRequired
                        value={firstname}
                        onChange={e => setFirstName(e.target.value)}
                        isInner
                        validator={s => s.length === 0 || validateUsername(s)}
                    />
                    <FieldInput
                        type="text"
                        label="Фамилия"
                        value={lastname}
                        onChange={e => setLastName(e.target.value)}
                        isInner
                        validator={s => s.length === 0 || validateUsername(s)}
                    />
                </InlineWrapper>
            </div>
            <div className={style.switch_section}>
                <FieldInput
                    type="email"
                    label="Электронная почта"
                    isRequired
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    isInner
                    validator={s => s.length === 0 || validateEmail(s)}
                />
                <FieldInput
                    isInner
                    type="password"
                    label="Пароль"
                    isRequired
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    validator={s => s.length === 0 || validatePassword(s)}
                />
                <FieldInput
                    isInner
                    type="password"
                    label="Повторите пароль"
                    isRequired
                    value={repeatPassword}
                    validator={str => {
                        return str.length === 0 || (validatePassword(str) && str === password);
                    }}
                    onChange={e => setRepeatPassword(e.target.value)}
                />
            </div>
            <InlineWrapper>
                <Button
                    onClick={e => {
                        e.preventDefault();
                        tryRegister();
                    }}
                    className="inner"
                >
                    Зарегистрироваться
                    <HiChevronRight />
                </Button>
            </InlineWrapper>
            <p>{errorLabel}</p>
        </form>
    );
};

export default RegisterWidget;
