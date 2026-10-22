(function () {
  // 目次を見出しから作る
  var toc = document.getElementById('toc');
  document.querySelectorAll('.grade').forEach(function (g) {
    var box = document.createElement('div');
    box.className = 'toc-grade';
    var label = document.createElement('span');
    label.textContent = g.querySelector('h2').textContent;
    var ol = document.createElement('ol');
    g.querySelectorAll('.unit').forEach(function (u) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + u.id;
      a.innerHTML = u.querySelector('h3').innerHTML;
      li.appendChild(a);
      ol.appendChild(li);
    });
    box.appendChild(label);
    box.appendChild(ol);
    toc.appendChild(box);
  });

  // 数式
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }

  // 答えの一括開閉
  function setAll(open) {
    document.querySelectorAll('.ex details').forEach(function (d) { d.open = open; });
  }
  document.getElementById('open-all').addEventListener('click', function () { setAll(true); });
  document.getElementById('close-all').addEventListener('click', function () { setAll(false); });
})();
