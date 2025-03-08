import { MarketPage } from '@/widgets/page';
import { Button, Card, ImageGroup } from '@/shared/ui';
import { IconWrapper, Image } from '@/shared/ui/';
import { HiCog } from 'react-icons/hi';
import style from './HomePage.module.css';
import { fishImage } from '@/assets/demo/images';
const HomePage = () => {
    return (
        <MarketPage className={style.wrapper}>
            <h1>Привет!</h1>
            <h2>Hola!</h2>
            <h3>Hello!</h3>
            <p className="bold">Бонжур епте</p>
            <Card>
                <ImageGroup srcCollection={[fishImage, fishImage, fishImage, fishImage]} />
                <p>Требуется Frontend-разработчик. Интересует? Подробнее в директ!</p>
                <Button className="inner">sdfd</Button>
            </Card>
            <Button>Перейти</Button>
            <div className="card">
                <h1>Привет!</h1>
                <IconWrapper>
                    <HiCog />
                </IconWrapper>
                <p>Бонжур епте sd fsf sdfasdf asdf asdf asdfasd sdf </p>
                <input className="inner" type="text"></input>
                <div className="buttons">
                    <button className="inner">Подробнее</button>
                    <button className="inner">Подробнее</button>
                </div>
            </div>
            <div className="card">
                <h1>Привет!</h1>
                <IconWrapper>
                    <HiCog />
                </IconWrapper>
                <p>Бонжур епте sd fsf sdfasdf asdf asdf asdfasd sdf </p>
                <input className="inner" type="text"></input>
                <div className="buttons">
                    <button className="inner">Подробнее</button>
                    <button className="inner">Подробнее</button>
                </div>
            </div>
            <div className="card">
                <h1>Привет!</h1>
                <IconWrapper>
                    <HiCog />
                </IconWrapper>
                <p>Бонжур епте sd fsf sdfasdf asdf asdf asdfasd sdf </p>
                <input className="inner" type="text"></input>
                <div className="buttons">
                    <button className="inner">Подробнее</button>
                    <button className="inner">Подробнее</button>
                </div>
            </div>
            <div className="card">
                <h1>Привет!</h1>
                <IconWrapper>
                    <HiCog />
                </IconWrapper>
                <p>Бонжур епте sd fsf sdfasdf asdf asdf asdfasd sdf </p>
                <input className="inner" type="text"></input>
                <div className="buttons">
                    <button className="inner">Подробнее</button>
                    <button className="inner">Подробнее</button>
                </div>
            </div>
            <div className="card">
                <h1>Привет!</h1>
                <IconWrapper>
                    <HiCog />
                </IconWrapper>
                <p>Бонжур епте sd fsf sdfasdf asdf asdf asdfasd sdf </p>
                <input className="inner" type="text"></input>
                <div className="buttons">
                    <button className="inner">Подробнее</button>
                    <button className="inner">Подробнее</button>
                </div>
            </div>
            <div className="card">
                <h1>Привет!</h1>
                <IconWrapper>
                    <HiCog />
                </IconWrapper>
                <p>Бонжур епте sd fsf sdfasdf asdf asdf asdfasd sdf </p>
                <input className="inner" type="text"></input>
                <div className="buttons">
                    <button className="inner">Подробнее</button>
                    <button className="inner">Подробнее</button>
                </div>
            </div>
        </MarketPage>
    );
};

export default HomePage;
