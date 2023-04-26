import './Sec2Main.css'
import { TwoLeft } from './Sec2MainLeft'
import { Sec2MainRight } from './Sec2MainRight'

export const Sec2Main = () => {
  return (
    <div className="sec2">
      <div className="sec2-main-ctn">
        <TwoLeft />
        <Sec2MainRight/>
      </div>
    </div>
  )
}
