import style from './MarketSideBar.module.css';
import { HiMenu } from 'react-icons/hi';
import { IconLink } from '@/shared/ui';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarLinkProps } from '@/shared/ui';

type Props = {
    options?: SideBarLinkProps[];
};

const MarketSideBar = (props: Props) => {
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
                          key={o.to}
                          to={o.to}
                          className={opt => {
                              return opt.isActive
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
export default MarketSideBar;
