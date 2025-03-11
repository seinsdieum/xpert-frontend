import { MarketPage } from '@/widgets/page';
import { Button, Card, ImageGroup, InlineWrapper } from '@/shared/ui';
import { IconWrapper, Image } from '@/shared/ui/';
import { HiChatAlt, HiChatAlt2, HiCog, HiStar, HiUser } from 'react-icons/hi';
import style from './HomePage.module.css';
import { fishImage } from '@/assets/demo/images';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <MarketPage className={style.wrapper}>
            <Card>
                <ImageGroup srcCollection={[fishImage, fishImage, fishImage, fishImage]} />
                <div className="card">
                    <p>
                        Требуется Frontend-разработчик. Интересует? Подробнее в директ! ищем
                        талантливых ывыва фывфыв авыафжы фыа фывфыаф фыафызащывь ыфвьфыв фыв фыв
                        фывф ызвфы
                    </p>
                </div>
                <InlineWrapper>
                    <Link>
                        <Button className="inner">
                            <InlineWrapper>
                                <IconWrapper>
                                    <HiUser />
                                </IconWrapper>
                                <p>alexellipse</p>
                            </InlineWrapper>
                        </Button>
                    </Link>
                    <Link>
                        <Button isActive className="inner">
                            <InlineWrapper>
                                <IconWrapper>
                                    <HiChatAlt2 />
                                </IconWrapper>
                                <p>Написать</p>
                            </InlineWrapper>
                        </Button>
                    </Link>
                </InlineWrapper>
            </Card>
            <Card>
                <ImageGroup srcCollection={[fishImage, fishImage, fishImage, fishImage]} />
                <div className="card">
                    <p>
                        Требуется Frontend-разработчик. Интересует? Подробнее в директ! ищем
                        талантливых ывыва фывфыв авыафжы фыа фывфыаф фыафызащывь ыфвьфыв фыв фыв
                        фывф ызвфы
                    </p>
                </div>
                <InlineWrapper>
                    <Link>
                        <Button className="inner">
                            <InlineWrapper>
                                <IconWrapper>
                                    <HiUser />
                                </IconWrapper>
                                <p>alexellipse</p>
                            </InlineWrapper>
                        </Button>
                    </Link>
                    <Link>
                        <Button className="inner">
                            <InlineWrapper>
                                <IconWrapper>
                                    <HiStar />
                                </IconWrapper>
                                <p>4.2</p>
                            </InlineWrapper>
                        </Button>
                    </Link>
                    <Link>
                        <Button className="inner">
                            <InlineWrapper>
                                <IconWrapper>
                                    <HiChatAlt2 />
                                </IconWrapper>
                                <p>К обсуждению</p>
                            </InlineWrapper>
                        </Button>
                    </Link>
                </InlineWrapper>
            </Card>
        </MarketPage>
    );
};

export default HomePage;
