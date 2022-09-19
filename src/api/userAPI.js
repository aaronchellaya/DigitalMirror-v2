import axios from '../axios'

export default {
  async getTodoList() {
    let result
    try {
      result = await axios.get('user/todo')
    } catch (error) {
      // console.log(error);
    }
    return result.data
  },

  async getEmailList(numberOfEmails) {
    let result
    try {
      result = await axios.get('user/emails', {
        params: { numberOfEmails },
      })
    } catch (error) {
      // console.error("error: ", error);
      return []
    }
    return result.data
  },
}
