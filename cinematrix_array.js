/**
 * HỆ THỐNG ĐẶT VÉ CINEMATRIX (LEGACY CODE - CẤU TRÚC TỒI)
 * Vấn đề: Không dùng mảng, không thể mở rộng, code lặp lại (WET - Write Everything Twice)
 */

// Bảng giá đang lưu bằng các biến rời rạc

let priceNormal = 50000;
let priceVIP = 90000;
let priceCouple = 120000;

const ticketPrices = [
    priceNormal,
    priceVIP,
    priceCouple
];

// Sơ đồ ghế lưu bằng biến rời rạc. 0: Trống, 1: Đã đặt
// Thử tưởng tượng rạp có 500 ghế thì phải viết bao nhiêu dòng?
const sodoghe = [
                [0 , 1 , 0],
                [0 , 0 , 0],
                [0 , 0 , 1]
];
let sochotrong = 0;
let ghedadat = 1;

function bookSeatLegacy(hang, cot) {
      // Kiểm tra chỉ số hàng
    if (hang < 0 || hang >= sodoghe.length) {
        console.log("Lỗi: Hàng ghế không hợp lệ!");
        return;
    }

    // Kiểm tra chỉ số cột
    if (cot < 0 || cot >= sodoghe[hang].length) {
        console.log("Lỗi: Cột ghế không hợp lệ!");
        return;
    }

            if (sodoghe[hang][cot] === 0) {
        sodoghe[hang][cot] = 1;
        console.log("Đặt ghế thành công!");
        console.log("Giá vé:", ticketPrices[hang], "VNĐ");
    } else {
        console.log("Lỗi: Ghế này đã được đặt!");
    }
}

//TEST
bookSeatLegacy(1,2);
console.log("=== Test 1: Đặt ghế trống ===");
bookSeatLegacy(1, 2);

console.log("\n=== Test 2: Đặt lại ghế vừa đặt ===");
bookSeatLegacy(1, 2);

console.log("\n=== Test 3: Ghế đã có người từ đầu ===");
bookSeatLegacy(0, 1);

console.log("\n=== Test 4: Hàng âm ===");
bookSeatLegacy(-1, 1);

console.log("\n=== Test 5: Vượt quá số cột ===");
bookSeatLegacy(0, 5);

console.log("\n=== Test 6: Vượt quá số hàng ===");
bookSeatLegacy(5, 0);
