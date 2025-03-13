function tinhToan() {
    while (true) {
        console.log("===== MENU TÍNH TOÁN =====");
        console.log("1. Cộng hai số");
        console.log("2. Trừ hai số");
        console.log("3. Nhân hai số");
        console.log("4. Chia hai số");
        console.log("5. Thoát");
        
        let luaChon = prompt("Chọn chức năng (1-5):");
        
        if (luaChon === "5") {
            console.log("Thoát");
            break;
        }

        let so1 = parseFloat(prompt("Nhập số thứ nhất:"));
        let so2 = parseFloat(prompt("Nhập số thứ hai:"));

        if (isNaN(so1) || isNaN(so2)) {
            console.log("Nhập số hợp lệ");
            continue;
        }

        switch (luaChon) {
            case "1":
                console.log(`Kết quả: ${so1} + ${so2} = ${so1 + so2}`);
                break;
            case "2":
                console.log(`Kết quả: ${so1} - ${so2} = ${so1 - so2}`);
                break;
            case "3":
                console.log(`Kết quả: ${so1} * ${so2} = ${so1 * so2}`);
                break;
            case "4":
                if (so2 === 0) {
                    console.log("Không chia cho 0.");
                } else {
                    console.log(`Kết quả: ${so1} ÷ ${so2} = ${so1 / so2}`);
                }
                break;
            default:
                console.log("Lựa chọn không hợp lệ Nhập từ 1 đến 5.");
        }
    }
}

tinhToan();
