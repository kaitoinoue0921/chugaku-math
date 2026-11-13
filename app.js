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

  // 絞り込み検索。数式を描画する前の本文（$...$ のままの文字）を覚えておく
  function norm(t) {
    return t.normalize('NFKC').toLowerCase().replace(/[\u30a1-\u30f6]/g, function (c) {
      return String.fromCharCode(c.charCodeAt(0) - 0x60);
    });
  }
  var items = [];
  document.querySelectorAll('.unit').forEach(function (u) {
    var g = u.closest('.grade');
    var head = g.querySelector('h2').textContent + ' 中' + g.id.replace('g', '') + ' ' + u.querySelector('h3').textContent + ' ';
    u.querySelectorAll('.item').forEach(function (el) {
      items.push({ el: el, text: norm(head + el.textContent) });
    });
  });
  var qEl = document.getElementById('q');
  var countEl = document.getElementById('q-count');
  function filter() {
    var words = norm(qEl.value).split(/\s+/).filter(Boolean);
    var hit = 0;
    items.forEach(function (it) {
      var ok = words.every(function (w) { return it.text.indexOf(w) !== -1; });
      it.el.hidden = !ok;
      if (ok) hit++;
    });
    document.querySelectorAll('.unit, .grade').forEach(function (s) {
      s.hidden = !s.querySelector('.item:not([hidden])');
    });
    toc.hidden = words.length > 0;
    countEl.hidden = words.length === 0;
    countEl.textContent = hit ? hit + '項目が見つかりました。' : '見つかりませんでした。別のことばで試してください。';
  }
  qEl.addEventListener('input', filter);

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
