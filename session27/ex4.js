let soN=[];

function menu() {
    while (true) {
        console.log("===== MENU XỬ LÍ SỐ NGUYÊN =====");
        console.log("1. Nhập danh sách số nguyên");
        console.log("2. Tính trung bình các số");
        console.log("3. Tìm số chẵn lớn nhất");
        console.log("4. Tìm số lẻ lớn nhất");
        console.log("5. Thoát");

        let luaChon = prompt("Chọn chức năng (1-5):");

        switch (luaChon) {
            case "1":
                nhapSo();
                break;
            case "2":
               tinhTrungbinh();
                break;
            case "3":
                
                break;
            case "4":
                
                break;
            case "5":
                console.log("Chương trình kết thúc.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ Nhập từ 1 đến 5.");
        }
    }
}
function nhapSo(){
    let soLuong = parseInt(prompt("Nhập danh sách số nguyên:"));
    if (isNaN(soLuong)) {
        console.log("Số không hợp lệ");
        return;
    }

    for (let i = 0; i < soLuong; i++) {
        let number = prompt(`Nhập số thứ ${i + 1}:`);
        if (number) {
            soN.push(number);
        } else {
            console.log("Số không hợp lệ, Nhập lại.");
            i--;
        }
    }
}
function tinhTrungbinh() {
    let sum = 0;
    for (let i = 0; i < soN.length; i++){
        sum += soN[i];
    }
    console.log(sum);
    
    
}
    



menu(); 
