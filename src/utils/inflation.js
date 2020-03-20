import { get } from 'axios'

export const getInflation = async (country) => {
  const i = await get(`./inflationData/${country}.json`)
  console.log(i)
  return i
}
