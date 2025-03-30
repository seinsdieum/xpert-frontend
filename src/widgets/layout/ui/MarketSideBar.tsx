import style from './MarketSideBar.module.css'
import { IconLink } from '@/shared/ui'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SideBarLinkProps } from '@/shared/ui'
import { searchQueryParam, selectRoute, selectSearch } from '@/features/search'
import { searchRoute } from '@/shared/config'
import { useSelector } from 'react-redux'
import { HiMenu, HiSearch } from 'react-icons/hi'

type Props = {
    options?: SideBarLinkProps[]
}

const MarketSideBar = (props: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const search = useSelector(selectSearch)
    const route = useSelector(selectRoute)
    return (
        <div
            onMouseLeave={() => {
                setIsExpanded(false)
            }}
            className={`${style.wrapper} ${
                isExpanded ? style.expanded : null
            }`}>
            <IconLink
                onClick={() => {
                    setIsExpanded(!isExpanded)
                }}
                isExpanded={isExpanded}
                icon={HiMenu}
                title='Свернуть'></IconLink>
            {search ? (
                <NavLink
                    to={`${searchRoute}${
                        route || ''
                    }?${searchQueryParam}=${search}`}
                    className={opt => {
                        return opt.isActive
                            ? `${style.market_link} ${style.active}`
                            : style.market_link
                    }}>
                    <IconLink
                        isExpanded={isExpanded}
                        icon={HiSearch}
                        title={'Поиск'}
                    />
                </NavLink>
            ) : null}
            {props.options
                ? props.options.map(o => (
                      <NavLink
                          key={o.to}
                          to={o.to}
                          className={opt => {
                              return opt.isActive
                                  ? `${style.market_link} ${style.active}`
                                  : style.market_link
                          }}>
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
    )
}
export default MarketSideBar
