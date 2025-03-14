function sapXepChanLe(mang) {
    if (!Array.isArray(mang)) {
      return "Dữ liệu không hợp lệ";
    }
  
    let mangChan = [];
    for (let so of mang) {
      if (so % 2 === 0) {
        mangChan.push(so);
      }
    }
  
    
    for (let i = 0; i < mangChan.length - 1; i++) {
      for (let j = i + 1; j < mangChan.length; j++) {
        if (mangChan[i] > mangChan[j]) {
          let temp = mangChan[i];
          mangChan[i] = mangChan[j];
          mangChan[j] = temp;
        }
      }
    }
  
    let ketQua = [];
    let indexChan = 0;
  
    for (let i = 0; i < mang.length; i++) {
      if (mang[i] % 2 === 0) {
        ketQua.push(mangChan[indexChan]);
        indexChan++;
      } else {
        ketQua.push(mang[i]);
      }
    }
  
    return ketQua;
  }
  
  
  let mang1 = [5, 3, 2, 8, 1, 4];
  console.log(sapXepChanLe(mang1)); 
  
  let mang2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(sapXepChanLe(mang2)); 
  
  let mang3 = [1, 3, 5, 7, 9];
  console.log(sapXepChanLe(mang3)); 
  
  let mang4 = [2, 4, 6, 8, 10];
  console.log(sapXepChanLe(mang4)); 
  
  let mang5 = [];
  console.log(sapXepChanLe(mang5)); 
  
  let mang6 = "abc";
  console.log(sapXepChanLe(mang6)); 