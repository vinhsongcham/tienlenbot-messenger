const util = require("../util");

module.exports = {
  execute({ args, api, event }) {
    if (!util.isUserInAGame(event.senderID))
      return api.sendMessage(
        "Bạn không có tham gia trận đấu nào!",
        event.threadID
      );

    const game = util.getGameById(util.getGameIdFromUser(event.senderID));

    api.sendMessage(game.handleSkip(event.senderID), event.threadID);
  },
};
