const util = require("../util");

module.exports = {
  async execute({ args, api, event }) {
    if (!args[0]) return api.sendMessage("Vui lòng nhập ID", event.threadID);

    const user = util.usersMap.get(event.senderID);

    if (util.isUserInAGame(event.senderID))
      return api.sendMessage(
        "Bạn đang tham gia một trận đấu, !leave để thoát khỏi trận đấu.",
        event.threadID
      );

    if (!util.isGameExist(args[0]))
      return api.sendMessage("Game ID không tồn tại!", event.threadID);

    util.joinGame(args[0], event.senderID);

    api.sendMessage(`Người chơi ${user.name} đã tham gia!`, event.threadID);
  },
};
