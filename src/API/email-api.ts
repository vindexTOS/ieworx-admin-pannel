import axios from 'axios'

const baseUrl = `http://localhost:5000/email/contact`

export const fetchEmails = async ({
  page,
  limit,
  searchType,
  search,
}: {
  page: string
  limit: string
  searchType: string
  search: string
}) => {
  const queryParams = new URLSearchParams({
    page: page,
    limit: limit,
    searchType: searchType,
    search: search,
  }).toString()
  const response = await axios.get(`${baseUrl}?${queryParams}`)
  console.log(response.data)

  return response.data
}
