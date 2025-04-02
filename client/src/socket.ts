export default class AppWebSocket extends WebSocket {
  events: Array<[string, any]>;
  connected: boolean;

  constructor(url: string) {
    super(url);

    this.events = [];

    this.connected = false;

    this.addEventListener("message", this.onMessage);
    this.addEventListener("close", this.onClose);
    this.addEventListener("open", this.onOpen);
  }

  onOpen = () => {
    console.log("*".repeat(50));
    console.log("socket connected");
    console.log("*".repeat(50));

    this.connected = true;
  };

  onClose = () => {
    console.log("*".repeat(50));
    console.log("socket closed");
    console.log("*".repeat(50));
  };

  onMessage = (e: any) => {
    console.log("message event: ", e);

    let message = e.data;

    let jsonMessage;

    try {
      jsonMessage = JSON.parse(message);
    } catch {
      jsonMessage = null;
    }

    if (!jsonMessage || !jsonMessage.type) {
      console.error("unknown event format passed");
      return;
    }

    let messageType = jsonMessage.type;

    for (let [type, callback] of this.events) {
      if (messageType === type) {
        callback(jsonMessage.data);
      }
    }
  };

  on(type: string, callback: any) {
    const event: [string, any] = [type, callback];
    this.events.push(event);
  }

  emit(type: string, data: any = null) {
    console.log({ connected: this.connected });

    if (this.connected) {
      // stringify message

      let event = {
        type,
        data,
      };
      this.send(JSON.stringify(event));
    }
  }

  remove = (type: string, callback: any) => {
    this.events = this.events.filter((evt) => {
      let [evtType, evtCallback] = evt;
      if (evtType === type && callback === evtCallback) {
        return false;
      }
      return true;
    });
  };
}
