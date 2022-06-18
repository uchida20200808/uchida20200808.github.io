'use strict';

{
  // メニューを開く
  const open = document.getElementById('open');
  // メニュー画面を出す
  const overlay = document.querySelector('.overlay');
  // メニューを閉じる
  const close = document.getElementById('close');

  // メニュー画面を開く
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  // メニュー画面を閉じる
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}