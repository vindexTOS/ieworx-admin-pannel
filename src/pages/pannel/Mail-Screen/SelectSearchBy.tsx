import React, { FC, useState, useRef } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import useOutClick from '../../../hooks/useOutClick'
type SelectSearchProp = {
  searchType: string
  setSearchType: React.Dispatch<React.SetStateAction<string>>
}

const SelectSearchBy: FC<SelectSearchProp> = ({
  searchType,
  setSearchType,
}) => {
  const sortBy = ['email', 'name', 'activity', 'number', 'message']
  const [dropDown, setDropDown] = useState<boolean>(false)
  const style = {
    mainDiv: ` outline outline-[1px] outline-gray-200 rounded-[12px] flex items-center justify-around h-[2.3rem] w-[10rem] relative`,
    mapDiv: ` absolute  bg-gray-100 w-[10rem] shadow-md rounded-[9px] flex flex-col items-center text-gray-500 gap-1 p-2 top-10`,
  }
  const dropRef = useRef(null)
  const handleDropDown = () => {
    setDropDown(true)
  }

  useOutClick(dropRef, handleDropDown)
  return (
    <div
      ref={dropRef}
      onClick={() => setDropDown(!dropDown)}
      className={style.mainDiv}
    >
      <p className="text-gray-400">Sort by {searchType}</p>
      {!dropDown ? <MdArrowDropDown /> : <MdArrowDropUp />}
      <div
        style={{ visibility: dropDown ? 'hidden' : 'visible' }}
        className={style.mapDiv}
      >
        {sortBy.map((val: string) => (
          <p
            className="hover:bg-gray-200 hover:text-white w-[90%] text-center rounded-[5px] cursor-pointer"
            onClick={() => setSearchType(val)}
          >
            {val}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SelectSearchBy
