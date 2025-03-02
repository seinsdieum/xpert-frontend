import { IconType } from 'react-icons/lib';
import style from './MarketMenu.module.css';
import { HiChat, HiMenu } from 'react-icons/hi';
import IconLink from '@/shared/ui/IconLink/IconLink';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type MenuOption = {
    title: string;
    icon: IconType;
    to: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
};

type Props = {
    options?: MenuOption[];
};

const MarketMenu = (props: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div
            onMouseLeave={() => {
                setIsExpanded(false);
            }}
            className={`card ${style.wrapper} ${isExpanded ? style.expanded : null}`}
        >
            <IconLink
                onClick={() => {
                    setIsExpanded(!isExpanded);
                }}
                isExpanded={isExpanded}
                icon={HiMenu}
                title="Свернуть"
            ></IconLink>
            {props.options
                ? props.options.map(o => (
                      <NavLink
                          to={o.to}
                          className={isActive => {
                              return isActive
                                  ? `${style.market_link} ${style.active}`
                                  : style.market_link;
                          }}
                      >
                          <IconLink
                              onClick={o.action}
                              isExpanded={isExpanded}
                              icon={o.icon}
                              title={o.title}
                          />
                      </NavLink>
                  ))
                : null}
        </div>
    );
};
export default MarketMenu;
