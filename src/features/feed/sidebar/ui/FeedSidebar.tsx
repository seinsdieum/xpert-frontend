import { Button, Card } from '@/shared/ui';
import {
    HiAnnotation,
    HiDotsHorizontal,
    HiMenu,
    HiPaperClip,
    HiPlus,
    HiUserCircle,
    HiUsers
} from 'react-icons/hi';
import style from './FeedSidebar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createRoute } from '@/shared/config';
import { feedRoute } from '@/shared/config/frontend';
import { useSelector } from 'react-redux';
import { selectAccount } from '@/entities/auth';

const FeedSidebar = () => {
    const [isCreateActive, setIsCreateActive] = useState<Boolean>(false);
    const authState = useSelector(selectAccount);

    return (
        <div className={style.wrapper}>
            {authState ? (
                <>
                    <Card
                        onMouseLeave={() => {
                            setIsCreateActive(false);
                        }}
                        className={style.navigation}
                    >
                        <Button isActive className="inner">
                            <HiAnnotation></HiAnnotation>
                            Лента
                        </Button>
                        <Button className="inner">
                            <HiUsers></HiUsers>
                            Подписки
                        </Button>
                        <Button
                            onClick={() => {
                                setIsCreateActive(!isCreateActive);
                            }}
                            className="inner"
                        >
                            <HiPlus></HiPlus>
                            Создать
                        </Button>
                        {isCreateActive && (
                            <div className={style.create_wrapper}>
                                <Link to={`${feedRoute}${createRoute}`}>
                                    <Button className="inner">
                                        <HiPaperClip></HiPaperClip>
                                        Пост
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </Card>

                    <Card className={style.tasks}>
                        <Button className="inner">
                            <HiDotsHorizontal></HiDotsHorizontal>
                            Моя задача 1
                        </Button>
                        <Button className="inner">
                            <HiDotsHorizontal></HiDotsHorizontal>
                            Заказ фронтенд
                        </Button>
                        <Button className="inner">
                            <HiDotsHorizontal></HiDotsHorizontal>
                            задача 2
                        </Button>
                        <Button className="inner">
                            <HiDotsHorizontal></HiDotsHorizontal>
                            Фронт
                        </Button>

                        <Button className="inner">
                            <HiMenu></HiMenu>
                            Все задачи
                        </Button>
                    </Card>
                </>
            ) : (
                <Card className={style.navigation}>
                    <Button isActive className="inner">
                        <HiUserCircle />
                        Войдите для доступа
                    </Button>
                </Card>
            )}
        </div>
    );
};

export default FeedSidebar;
