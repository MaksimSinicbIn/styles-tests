import { ReactNode, useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    // Очистка эффекта
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [open]) // отключает прокрутку при открытом меню

  return (
    <>
      <Sidebar open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      <div>{children}</div>
    </>
  )
}
