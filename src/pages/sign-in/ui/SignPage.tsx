import { FieldInput, IconWrapper, InlineWrapper } from '@/shared/ui';
import style from './SignPage.module.css';
import { RegisterWidget } from '@/widgets/register';
import { HiLogin, HiUser } from 'react-icons/hi';
import { useState } from 'react';
import LoginWidget from '@/widgets/login/ui/LoginWidget';
const SignPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className={style.wrapper}>
            <div className={style.form_wrapper}>
                <h2 className={style.auth_label}>
                    ellipse auth • {isLogin ? 'sign in' : 'register'}
                </h2>

                {isLogin ? <LoginWidget /> : <RegisterWidget></RegisterWidget>}
                <p onClick={() => setIsLogin(!isLogin)} className={style.switcher}>
                    {isLogin ? 'Я новенький!' : 'Уже есть аккаунт?'}
                </p>
            </div>
        </div>
    );
};

export default SignPage;
