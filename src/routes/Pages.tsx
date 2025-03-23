import { Routes, Route, Navigate } from 'react-router'
import { Error404 } from './pages/Error404'
import { HomePage } from './pages/HomePage'
import { ButtonExample } from '@/examples/ButtonExample/ButtonExample'
import { StyledTitleExample } from '@/examples/StyledTitle/StyledTitleExample'

export const PATH = {
  HOME: '/home',
  BUTTON: '/button',
  TITLE: '/title',
}

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={PATH.HOME} />} />
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.BUTTON} element={<ButtonExample />} />
        <Route path={PATH.TITLE} element={<StyledTitleExample />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}
