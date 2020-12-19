const util = require("../util");
const Game = require("../game/Game");

function createGame(id) {
  util.gamesMap.set(id, new Game(id));
}

module.exports = {
  execute({ args, api, event }) {
    if (!args[0]) return api.sendMessage("Vui lòng nhập ID", event.threadID);

    if (util.usersMap.get(event.senderID).gameId)
      return api.sendMessage(
        "Bạn đang tham gia một trận đấu, !leave để thoát khỏi trận đấu.",
        event.threadID
      );

    if (util.isGameExist(args[0]))
      return api.sendMessage(
        "ID bị trùng khớp, vui lòng thử ID khác",
        event.threadID
      );

    createGame(args[0]);

    api.sendMessage(
      "Tạo thành công! Mời người khác tham gia bằng !join {id}",
      event.threadID
    );
  },
};
