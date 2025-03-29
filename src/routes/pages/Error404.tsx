import s from './Error404.module.css'
import error404 from '@/assets/images/icons-origin/404.svg'

export const Error404 = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <img src={error404} alt={'404'} className={s.error404} />
      </div>
    </div>
  )
}
