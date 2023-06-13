import React, { useEffect, useState } from 'react'
import { MailCardType } from '../../../types/mail-types'
import { useQuery } from '@tanstack/react-query'
import { fetchEmails } from '../../../API/email-api'
import MailCard from './Mail-Card'
import SelectSearchBy from './SelectSearchBy'
const MailScreen = () => {
  const [page, setPage] = useState('1')
  const [limit, setLimit] = useState('10')
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('email')
  const [searchBtn, setSearchBtn] = useState<boolean>(false)
  const { data, isLoading, isError, refetch } = useQuery(
    ['emails', page, limit],
    () => fetchEmails({ page, limit, searchType, search }),
  )

  const searchHanndler = () => {
    fetchEmails({ page, limit, searchType, search })
    setSearchBtn(!searchBtn)
    refetch()
  }

  const style = {
    mainDiv: `w-[100%] h-[100vh]   bg-gray-200 flex  items-center justify-center text-black flex-col`,
    section: `w-[100%] max-h-[2000px] py-10 overflow-y-scroll flex flex-col items-center gap-5 `,
    searchDiv: `flex   rounded-[9px] mt-10 bg-gray-100 shadow-md items-center justify-around h-[5rem] w-[70%] `,
    input: `outline outline-[1px] outline-gray-200 bg-gray-100  rounded-[12px] flex items-center justify-around h-[2.3rem] w-[70%] text-center  `,
    btn: `text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 h-[2.3rem] text-center   `,
  }
  if (isLoading) {
    return <div>Loading..</div>
  }
  if (isError) {
    return <div>{isError}</div>
  }
  if (data) {
    return (
      <div className={style.mainDiv}>
        <div className={style.searchDiv}>
          <SelectSearchBy
            setSearchType={setSearchType}
            searchType={searchType}
          />
          <input
            className={style.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search By ${searchType}`}
          />
          <button className={style.btn} onClick={() => searchHanndler()}>
            Search
          </button>
        </div>

        <section className={style.section}>
          {data.emailData.map((val: MailCardType) => (
            <MailCard {...val} />
          ))}
        </section>
      </div>
    )
  }
}

export default MailScreen
