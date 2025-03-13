function timSoLonNhat(so) {
    if (!Number.isInteger(so) || so < 0 || isNaN(so)) {
      return "Dữ liệu không hợp lệ";
    }
    let chuoiSo = so.toString().split("");
    chuoiSo.sort((a, b) => b - a);
    let soLonNhat = parseInt(chuoiSo.join(""));
  
    return soLonNhat;
  }
  
  console.log(timSoLonNhat(2941));
  console.log(timSoLonNhat(3875));
  console.log(timSoLonNhat("1h8t"));