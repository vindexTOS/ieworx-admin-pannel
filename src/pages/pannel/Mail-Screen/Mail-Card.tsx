import React, { FC } from 'react'
import { MailCardType, MappeCardHeaderType } from '../../../types/mail-types'

const MailCard: FC<MailCardType> = (data) => {
  const { name, email, number, activity, message, date } = data

  const HeadersArray = [
    { title: 'Name', state: name },
    { title: 'Email', state: email },
    { title: 'Number', state: number },
    { title: 'Activity', state: activity },
  ]
  const Header = ({ title, state }: { title: string; state: string }) => {
    return (
      <p className={style.p}>
        {title}: <span className="text-gray-500">{state}</span>
      </p>
    )
  }
  const style = {
    mainDiv: `w-[80%] max-h-[1200px] bg-gray-100 items-center gap-5 p-5 rounded-[9px]  shadow-md`,
    infoDiv: `flex justify-around`,
    p: `w-[22rem] text-gray-400`,
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.infoDiv}>
        {HeadersArray.map((val: MappeCardHeaderType) => (
          <Header title={val.title} state={val.state} />
        ))}
      </div>
      <div>
        <p className={style.p}>Message:</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default MailCard
