import { Routes, Route, Navigate } from 'react-router'
import { Error404 } from './pages/Error404'
import { Button } from '@/components/Button/Button'
import { HomePage } from './pages/HomePage'

export const PATH = {
  HOME: '/home',
  BUTTON: '/button',
  JUNIOR_PLUS: '/junior-plus',
}

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={PATH.HOME} />} />
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.BUTTON} element={<Button />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}
