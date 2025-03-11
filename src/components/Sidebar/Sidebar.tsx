import { FC } from 'react'
import { NavLink } from 'react-router'
import s from './Sidebar.module.css'
import { PATH } from '../../routes/Pages'
import { IconClose } from '@/assets/icons/components'

type PropsType = {
  open: boolean
  handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')
  return (
    <>
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose}>
          <IconClose />
        </button>
        <nav className={s.nav}>
          <NavLink to={PATH.HOME} onClick={handleClose} className={({ isActive }) => (isActive ? s.active : s.nav)}>
            Home
          </NavLink>
          <NavLink to={PATH.BUTTON} onClick={handleClose} className={({ isActive }) => (isActive ? s.active : s.nav)}>
            Button
          </NavLink>
          <NavLink
            to={PATH.JUNIOR_PLUS}
            onClick={handleClose}
            className={({ isActive }) => (isActive ? s.active : s.nav)}
          >
            Junior Plus
          </NavLink>
        </nav>
      </aside>
    </>
  )
}
