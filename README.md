# tienlenbot-messenger
Tiến Lên Miền Nam trên Messenger, có thể cùng chơi với bạn bè trên nhóm chat!

# Cách cài đặt
1. clone repository về máy, cài npm packages bằng `npm install`.
2. Điền tài khoản mật khẩu vào file login.js. Sau đó chạy bằng `node login.js`. (Nhớ điền code nếu có bật xác thực 2 bước)`
3. Sau khi login, chạy `node bot.js` để bắt đầu bot.
4. Tận hưởng ;3

# Hướng dẫn tạo phòng.
- Đầu tiên, tạo một room game với !create {id} (id ở đây bạn có thể nhập tùy ý).
- Tiếp theo, mời người chơi với !join {id} (id bạn đã tạo bằng !create).
- Sau đó, !start để bắt đầu game (Yêu cầu tối thiểu 2 người chơi và tối đa 4 người chơi).

# Cách đánh.
- Sau khi bắt đầu, mỗi người sẽ được hệ thống inbox riêng các lá bài. Mỗi lá bài có một con số ở bên trong ngoặc vuông ([]). Ta sẽ gọi nó là index.
- Để đánh bài, sử dụng lệnh !play {index}. Có thể sử dụng nhiều index cùng lúc. VD: !play 0 1 2 3.

_Hệ thống phát bài cho những người chơi_

![tutorial](https://i.ibb.co/fDwp5D9/Capture.png)


# Các lệnh
- create {id} - Tạo trận đấu với một id, id này dùng để mời người chơi khác

- join {id}   - Tham gia trận đấu với id có sẵn

- leave   - Thoát khỏi trận đấu. (Yêu cầu người chơi đã vào một trận đấu)

- start   - Bắt đầu trận đấu. (Yêu cầu ít nhất 2 người chơi)

- play {index} - Đánh bài với index của thẻ (Yêu cầu đã đến lượt đánh) VD: !play 0 1 2

- skip    - Bỏ qua lượt đánh.
