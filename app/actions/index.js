const getMessages = (message) => {
  return {
      type: "ADD_MESSAGE",
      data: message
    }
}

export default getMessages;