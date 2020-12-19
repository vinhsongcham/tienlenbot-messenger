const util = require("../util");
module.exports = {
  execute({ args, api, event }) {
    if (!util.isUserInAGame(event.senderID))
      return api.sendMessage(
        "Bạn không có tham gia trận đấu nào!",
        event.threadID
      );

    const game = util.getGameById(util.getGameIdFromUser(event.senderID));

    const response = game.startGame();

    if (!response.success)
      return api.sendMessage(response.message, event.threadID);

    const playersInGame = game.getPlayers();

    playersInGame.forEach((player) => {
      const message = util.displayCards(player.cards, { userCard: true });

      api.sendMessage(message, player.id);
    });

    const currentTurn = playersInGame[game.currentPlayer].name;

    api.sendMessage(
      `Lượt đánh của ${currentTurn}. !play {index} để đánh`,
      event.threadID
    );
  },
};
