/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

window.onload= function() {
  const el = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  el.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>'
        ].join('');
      }
    }
  );

  el.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  el.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
      info.style.background = "white";
    }
  );


}
