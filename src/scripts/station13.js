function changeBackgroundColor(e) {
  const textArea = document.querySelector('#text');
  // ここに背景色を変える処理を書く。
  if (e.target.checked === true) {
    textArea.style.backgroundColor = 'red'
  } else {
    textArea.style.backgroundColor = ''
  }

}
