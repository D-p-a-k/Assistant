class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")||lowercase.includes("hi")) {
      this.actionProvider.greet();
    }

    if(lowercase.includes("search")){
      this.actionProvider.search();
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
  }
}

export default MessageParser;
