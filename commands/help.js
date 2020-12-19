module.exports = {
  execute({ api, event, args }) {
    const message = `Commands:
create {id} - Tạo trận đấu với một id, id này dùng để mời người chơi khác'

join {id}   - Tham gia trận đấu với id có sẵn

leave   - Thoát khỏi trận đấu. (Yêu cầu người chơi đã vào một trận đấu)

start   - Bắt đầu trận đấu. (Yêu cầu ít nhất 2 người chơi)

players - Hiển thị những người chơi.

show {playerName} - Hiện thị số bài hiện có của người chơi. // Tạm thời bỏ

play {index} - Đánh bài với index của thẻ (Yêu cầu đã đến lượt đánh) VD: !play 0 1 2

skip    - Bỏ qua lượt đánh.

`;
    api.sendMessage(message, event.threadID);
  },
};
