function menu() {
    while (true) {
        console.log("===== MENU TÍNH TOÁN HÌNH HỌC =====");
        console.log("1. Tính diện tích hình tròn");
        console.log("2. Tính chu vi hình tròn");
        console.log("3. Tính diện tích hình chữ nhật");
        console.log("4. Tính chu vi hình chữ nhật");
        console.log("5. Thoát");

        let luaChon = prompt("Chọn chức năng (1-5):");

        switch (luaChon) {
            case "1":
                tinhDienTichHinhTron();
                break;
            case "2":
                tinhChuViHinhTron();
                break;
            case "3":
                tinhDienTichHinhChuNhat();
                break;
            case "4":
                tinhChuViHinhChuNhat();
                break;
            case "5":
                console.log("Chương trình kết thúc.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ Nhập từ 1 đến 5.");
        }
    }
}


function tinhDienTichHinhTron() {
    let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (isNaN(r) || r <= 0) {
        console.log("Bán kính không hợp lệ");
        return;
    }
    let dienTich = Math.PI * r * r;
    console.log(`Diện tích hình tròn là: ${dienTich.toFixed(2)}`);
}


function tinhChuViHinhTron() {
    let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (isNaN(r) || r <= 0) {
        console.log("Bán kính không hợp lệ!");
        return;
    }
    let chuVi = 2 * Math.PI * r;
    console.log(`Chu vi hình tròn là: ${chuVi.toFixed(2)}`);
}
function tinhDienTichHinhChuNhat() {
    let dai = parseFloat(prompt("Nhập chiều dài:"));
    let rong = parseFloat(prompt("Nhập chiều rộng:"));
    if (isNaN(dai) || isNaN(rong) || dai <= 0 || rong <= 0) {
        console.log("Kích thước không hợp lệ!");
        return;
    }
    let dienTich = dai * rong;
    console.log(`Diện tích hình chữ nhật là: ${dienTich.toFixed(2)}`);
}
function tinhChuViHinhChuNhat() {
    let dai = parseFloat(prompt("Nhập chiều dài:"));
    let rong = parseFloat(prompt("Nhập chiều rộng:"));
    if (isNaN(dai) || isNaN(rong) || dai <= 0 || rong <= 0) {
        console.log("Kích thước không hợp lệ!");
        return;
    }
    let chuVi = 2 * (dai + rong);
    console.log(`Chu vi hình chữ nhật là: ${chuVi.toFixed(2)}`);
}


menu();
