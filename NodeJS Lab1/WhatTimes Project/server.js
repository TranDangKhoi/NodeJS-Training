// Bạn tạo ứng dụng mới có tên là WhatTimes, có nhiệm vụ nhận thông tin về ngày và tháng. Thông tin về
// ngày tháng sẽ được dùng để đưa ra báo cáo thống kê phù hợp. 
// Tuy nhiên, việc có một báo cáo hoành tráng với chi tiết số liệu và biểu đồ thống kê… hơi phức tạp tại thời 
// điểm hiện tại. Vì vậy, chúng ta sẽ làm một việc đơn giản trước là chúng ta sẽ hiển thị tháng và năm đã 
// nhận như một phần thông tin quan trọng trong báo cáo. 
// Đây là code phía server để thực hiện yêu cầu đó. Bạn hãy đọc rồi phân tích, tìm hiểu và hỏi giáo viên nếu 
// chưa hiểu :)

var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url , true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8085);

// Khi client gửi đi một request kèm theo thông tin về year và month, thì server sẽ trả về kết quả là một đoạn 
// text gồm năm và tháng. 
// // Đoạn URL có định dạng ví dụ http://127.0.0.1:8081/?year=2020&month=Feb

console.log("Server is running");