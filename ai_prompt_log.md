prompt: hãy tạo cho tôi 5 trường hợp  (VD: Đặt thành công, đặt vào ghế đã có người, đặt số ghế âm, đặt số ghế vượt quá mảng).

KQ AI:
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
