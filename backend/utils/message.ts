class MessageUtils {

  public generateMessage = (message) => {
    return {
      sender: message.sender,
      text: message.text,
      createdAt: new Date().getTime(),
      choices: message.choices,
      type: message.type
    };
  };
}

export const messageUtils = new MessageUtils();