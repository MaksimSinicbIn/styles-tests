import s from './Header.module.css'
import { useLocation } from 'react-router'
import { PATH } from '../../routes/Pages'
import { IconMenuOutline } from '@/assets/icons/components'

type Props = {
  handleOpen: () => void
}

export const Header = ({ handleOpen }: Props) => {
  // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
  const location = useLocation()
  const currentPath = location.pathname

  const pageName =
    currentPath === PATH.HOME
      ? 'Home'
      : currentPath === PATH.BUTTON
        ? 'Button'
        : currentPath === PATH.JUNIOR_PLUS
          ? 'Junior Plus'
          : 'Error'
  return (
    <>
      <div className={s.header}>
        <IconMenuOutline className={s.burgerMenuIcon} onClick={handleOpen} />
        <h1>{pageName}</h1>
      </div>
    </>
  )
}
