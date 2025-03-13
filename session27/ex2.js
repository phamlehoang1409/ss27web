let sinhVien = [];

function menu() {
    while (true) {
        console.log("===== MENU QUẢN LÝ SINH VIÊN =====");
        console.log("1. Nhập danh sách sinh viên");
        console.log("2. Hiển thị danh sách sinh viên");
        console.log("3. Tìm sinh viên theo tên");
        console.log("4. Xóa sinh viên khỏi danh sách");
        console.log("5. Thoát");
        
        let luaChon = prompt("Chọn chức năng (1-5):");

        switch (luaChon) {
            case "1":
                nhapSinhVien();
                break;
            case "2":
                hienThiDanhSach();
                break;
            case "3":
                timSinhVien();
                break;
            case "4":
                xoaSinhVien();
                break;
            case "5":
                console.log("Chương trình kết thúc.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 5.");
        }
    }
}


function nhapSinhVien() {
    let soLuong = parseInt(prompt("Nhập số lượng sinh viên:"));
    if (isNaN(soLuong) || soLuong <= 0) {
        console.log("Số lượng không hợp lệ!");
        return;
    }

    for (let i = 0; i < soLuong; i++) {
        let ten = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
        if (ten) {
            sinhVien.push(ten);
        } else {
            console.log("Tên không hợp lệ, Nhập lại.");
            i--;
        }
    }
}

function hienThiDanhSach() {
    if (sinhVien.length === 0) {
        console.log("Danh sách sinh viên trống.");
    } else {
        console.log("Danh sách sinh viên:");
        sinhVien.forEach((sv, index) => {
            console.log(`${index + 1}. ${sv}`);
        });
    }
}

function timSinhVien() {
    let tenCanTim = prompt("Nhập tên sinh viên cần tìm:");
    let ketQua = sinhVien.filter(sv => sv.toLowerCase() === tenCanTim.toLowerCase());

    if (ketQua.length > 0) {
        console.log("Sinh viên tìm thấy:", ketQua.join(", "));
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}


function xoaSinhVien() {
    let tenCanXoa = prompt("Nhập tên sinh viên cần xóa:").trim();
    let index = sinhVien.findIndex(sv => sv.toLowerCase() === tenCanXoa.toLowerCase());

    if (index !== -1) {
        sinhVien.splice(index, 1);
        console.log("Sinh viên đã được xóa.");
    } else {
        console.log("Không tìm thấy sinh viên cần xóa.");
    }
}

menu();
