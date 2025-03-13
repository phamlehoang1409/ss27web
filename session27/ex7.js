function timSoBiThieu(mang) {
    if (!Array.isArray(mang)) {
      return "Dữ liệu không hợp lệ";
    }
  
    if (mang.length === 0) {
      return "Dữ liệu không hợp lệ";
    }
  
    for (let i = 0; i < mang.length - 1; i++) {
      if (mang[i + 1] - mang[i] !== 1) {
        return mang[i] + 1;
      }
    }
    return mang[mang.length - 1] + 1;
  }
  
  console.log(timSoBiThieu([1, 2, 3, 5]));
  console.log(timSoBiThieu([1, 2, 4, 5]));
  console.log(timSoBiThieu("abc"));