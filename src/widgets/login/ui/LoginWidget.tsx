import { useLoginMutation, useRegisterMutation } from '@/entities/auth';
import { useState } from 'react';
import style from './LoginWidget.module.css';
import { Button, FieldInput, InlineWrapper } from '@/shared/ui';
import { validatePassword, validateUsername } from '@/shared/lib';
import { HiChevronRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { feedRoute } from '@/shared/config/frontend';
const LoginWidget = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorLabel, setErrorLabel] = useState<string>('');

    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const tryLogin = async () => {
        if (username.length === 0) {
            setErrorLabel('Введите имя пользователя');
            return;
        }
        if (password.length === 0) {
            setErrorLabel('Введите пароль');
            return;
        }
        setErrorLabel('');
        login({ username, password })
            .unwrap()
            .then(() => navigate(feedRoute))
            .catch(err =>
                setErrorLabel(
                    err.data.statusCode === 401
                        ? err.data.message === 'banned'
                            ? 'Учетная запись заблокирована'
                            : 'Неверный логин или пароль'
                        : 'Упс... произошла ошибка'
                )
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
                />
            </div>
            <div className={style.switch_section}>
                <FieldInput
                    isInner
                    type="password"
                    label="Пароль"
                    isRequired
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <InlineWrapper>
                <Button
                    onClick={e => {
                        e.preventDefault();
                        tryLogin();
                    }}
                    className="inner"
                >
                    Войти
                    <HiChevronRight />
                </Button>
            </InlineWrapper>
            <p>{errorLabel}</p>
        </form>
    );
};

export default LoginWidget;
