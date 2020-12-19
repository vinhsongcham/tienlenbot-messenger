const util = require("../util");

module.exports = {
  execute({ args, api, event }) {
    if (!util.isUserInAGame(event.senderID))
      return api.sendMessage(
        "Bạn không có tham gia trận đấu nào!",
        event.threadID
      );

    const game = util.getGameById(util.getGameIdFromUser(event.senderID));

    if (game.inProgress) {
      return api.sendMessage(
        "Không thể thoát khi trận đấu đang diễn ra!",
        event.threadID
      );
    }

    if (game.removePlayer(event.threadID)) {
      util.leaveGame(event.threadID);
      return api.sendMessage(
        `Bạn đã thoát trận đấu '${gameId}'`,
        event.threadID
      );
    }

    return api.sendMessage(`Không thể xóa bạn khỏi trận đấu`, event.threadID);
  },
};
