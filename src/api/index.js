import axios from 'axios'

export const API_REQUEST = async () => {
  return await axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
}