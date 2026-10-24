(function () {
  "use strict";
  var C = window.CURSO, M = C.modulos;
  var KEY = "omb-curso-v1";
  var app = document.getElementById("app");

  /* ---------- armazenamento (sempre com try/catch) ---------- */
  function carregar() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || "{}"); return { done: s.done || {}, checks: s.checks || {}, quiz: s.quiz || {} }; }
    catch (e) { return { done: {}, checks: {}, quiz: {} }; }
  }
  var S = carregar();
  function salvar() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} atualizarBarra(); }

  /* ---------- tema ---------- */
  var root = document.documentElement;
  try { var t = localStorage.getItem(KEY + "-tema"); if (t === "light" || t === "dark") root.setAttribute("data-theme", t); } catch (e) {}
  document.getElementById("tema").addEventListener("click", function () {
    var atual = root.getAttribute("data-theme");
    if (!atual) atual = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    var novo = atual === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", novo);
    try { localStorage.setItem(KEY + "-tema", novo); } catch (e) {}
  });

  /* ---------- utilidades ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function txt(s) { return esc(s).replace(/\s*\[código\]/g, ' <span class="tag">só no código</span>'); }
  function limpo(s) { return String(s).replace(/\s*\[código\]/g, ""); }
  function el(id) { return document.getElementById(id); }
  var SECOES = [
    ["oque", "O que é"], ["porque", "Por que importa"], ["conceitos", "Conceitos"], ["passos", "Passo a passo"],
    ["dicas", "Dicas avançadas"], ["armadilhas", "Armadilhas"], ["teste", "Teste no seu MausBot"], ["quiz", "Quiz"], ["fontes", "Fontes"]
  ];

  function stats(m) {
    var ch = 0, q = 0, qc = 0;
    m.teste.forEach(function (_, i) { if (S.checks[m.slug + ":" + i]) ch++; });
    m.quiz.forEach(function (x, i) { var r = S.quiz[m.slug + ":" + i]; if (r !== undefined) { q++; if (r === x.c) qc++; } });
    return { ch: ch, q: q, qc: qc };
  }
  function atualizarBarra() {
    var total = 0, feito = 0;
    M.forEach(function (m) { var s = stats(m); total += m.teste.length + m.quiz.length + 1; feito += s.ch + s.q + (S.done[m.slug] ? 1 : 0); });
    el("barra").style.width = (total ? Math.round(feito / total * 100) : 0) + "%";
    return total ? Math.round(feito / total * 100) : 0;
  }

  /* ---------- radar da capa (um só ponto aceso) ---------- */
  function radarSVG() {
    var pts = [[120, 180], [300, 110], [370, 260], [210, 330], [150, 260], [330, 360], [260, 190], [180, 120], [400, 180], [290, 300], [230, 250], [110, 330]];
    var s = '<svg class="radar" viewBox="0 0 520 520" aria-hidden="true"><g fill="none" stroke="#9AA3B2" stroke-opacity=".22" stroke-width="1">';
    [60, 120, 180, 240].forEach(function (r) { s += '<circle cx="260" cy="260" r="' + r + '"/>'; });
    s += '<path d="M20 260H500M260 20V500"/></g><g fill="#9AA3B2" fill-opacity=".5">';
    pts.forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3"/>'; });
    s += '</g><g><path d="M260 260 L260 20 A240 240 0 0 1 430 90 Z" fill="url(#rg)"><animateTransform attributeName="transform" type="rotate" from="0 260 260" to="360 260 260" dur="6s" repeatCount="indefinite"/></path></g>';
    s += '<defs><linearGradient id="rg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FF6A1A" stop-opacity="0"/><stop offset="1" stop-color="#FF6A1A" stop-opacity=".16"/></linearGradient></defs>';
    s += '<circle cx="352" cy="168" r="16" fill="#FF6A1A" fill-opacity=".18"><animate attributeName="r" values="10;20;10" dur="3s" repeatCount="indefinite"/></circle><circle cx="352" cy="168" r="6" fill="#FF6A1A"/></svg>';
    return s;
  }

  /* ---------- telas ---------- */
  function inicio() {
    var pct = atualizarBarra();
    var feitos = M.filter(function (m) { return S.done[m.slug]; }).length;
    var prox = M.filter(function (m) { return !S.done[m.slug]; })[0] || M[0];
    var h = '<section class="capa" id="inicio"><div class="wrap">' + radarSVG() +
      '<div class="rot">Mini curso interativo · 12 módulos</div>' +
      '<h1>Entenda o OpenMausBot de ponta a ponta e monte o seu <em>orquestrador</em>.</h1>' +
      '<p class="lead">Do primeiro bot até um time de especialistas coordenado por um Chef. Cada módulo tem explicação simples, passo a passo, armadilhas, um exercício para fazer no seu MausBot e um quiz com correção na hora.</p>' +
      '<div class="acoes"><a class="btn" href="#m/' + prox.slug + '">' + (feitos ? "Continuar do módulo " + prox.id : "Começar pelo módulo 1") + '</a><a class="btn2" href="#glossario">Ver glossário</a></div>' +
      '<div class="kpis"><div><b>' + feitos + '/12</b><span>módulos concluídos</span></div><div><b>' + pct + '%</b><span>do curso</span></div><div><b>' + M.reduce(function (a, m) { return a + m.quiz.length; }, 0) + '</b><span>perguntas de quiz</span></div></div>' +
      '</div></section>';
    h += '<section class="sec"><div class="wrap"><div class="rot">Mapa do curso</div><h2>Do básico ao Chef, em sequência.</h2>' +
      '<p class="intro">Os módulos 1 a 6 mostram como cada bot trabalha. Os 7 a 10 mostram a infraestrutura por trás. O 11 abre o que a documentação quase não explica. O 12 junta tudo no seu bot orquestrador.</p>' +
      '<div class="trilha"><span>1–6 · o bot</span><span>7–10 · a estrutura</span><span>11 · escondido</span><span>12 · o Chef</span></div><div class="grade">';
    M.forEach(function (m) {
      var s = stats(m), f = S.done[m.slug];
      h += '<a class="card' + (f ? " feito" : "") + '" href="#m/' + m.slug + '"><span class="num">MÓDULO ' + String(m.id).padStart(2, "0") + ' · ' + esc(m.tempo) + '</span><h3>' + esc(m.titulo) + '</h3><p>' + esc(m.sub) + '</p>' +
        '<span class="estado"><span>' + s.ch + '/' + m.teste.length + ' exercícios · quiz ' + s.qc + '/' + m.quiz.length + '</span>' + (f ? "<b>concluído</b>" : "") + '</span></a>';
    });
    h += '</div><div class="aviso-codigo"><b>Como ler as marcas.</b> Tudo o que está na documentação oficial vem sem marca. O que só aparece no código do app ganha a etiqueta <span class="tag">só no código</span>: funciona na versão estudada, mas pode mudar. Antes de mexer em configuração escondida, teste num perfil separado.</div></div></section>';
    app.innerHTML = h; window.scrollTo(0, 0);
  }

  function lista(arr, cls) { return '<ul' + (cls ? ' class="' + cls + '"' : "") + '>' + arr.map(function (x) { return "<li>" + txt(x) + "</li>"; }).join("") + "</ul>"; }

  function modulo(slug, secao) {
    var i = M.findIndex(function (m) { return m.slug === slug; });
    if (i < 0) { inicio(); return; }
    var m = M[i], ant = M[i - 1], prox = M[i + 1];
    var h = '<section class="mod-topo"><div class="wrap"><a class="miga" href="#inicio">← Mapa do curso</a><div class="rot">Módulo ' + String(m.id).padStart(2, "0") + ' de 12</div><h1>' + esc(m.titulo) + '</h1><p>' + esc(m.sub) + '</p><div class="meta"><span>' + esc(m.tempo) + '</span><span>' + m.teste.length + ' exercícios</span><span>' + m.quiz.length + ' perguntas</span></div></div></section>';
    h += '<div class="wrap"><nav class="indice" aria-label="Seções do módulo">' + SECOES.map(function (s) { return '<a href="#m/' + m.slug + '/' + s[0] + '">' + s[1] + '</a>'; }).join("") + '</nav>';
    h += '<section class="bloco" id="s-oque"><div class="rot">01 · O que é</div><h2>' + esc(m.titulo) + ' em poucas palavras</h2>' + m.oque.map(function (p) { return "<p>" + txt(p) + "</p>"; }).join("") + '</section>';
    h += '<section class="bloco" id="s-porque"><div class="rot">02 · Por que importa</div><h2>O que muda para você</h2>' + m.porque.map(function (p) { return "<p>" + txt(p) + "</p>"; }).join("") + '</section>';
    h += '<section class="bloco" id="s-conceitos"><div class="rot">03 · Conceitos</div><h2>As palavras deste módulo</h2><div class="conceitos">' + m.conceitos.map(function (c) { return '<div class="conceito"><b>' + esc(c.t) + '</b><span>' + txt(c.d) + '</span></div>'; }).join("") + '</div></section>';
    h += '<section class="bloco" id="s-passos"><div class="rot">04 · Passo a passo</div><h2>Como fazer</h2><ol>' + m.passos.map(function (x) { return "<li>" + txt(x) + "</li>"; }).join("") + '</ol></section>';
    h += '<section class="bloco" id="s-dicas"><div class="rot">05 · Dicas avançadas</div><h2>Para extrair mais</h2>' + lista(m.dicas) + '</section>';
    h += '<section class="bloco" id="s-armadilhas"><div class="rot">06 · Armadilhas</div><h2>Onde as pessoas tropeçam</h2>' + lista(m.armadilhas, "lista-alerta") + '</section>';
    h += '<section class="bloco" id="s-teste"><div class="rot">07 · Teste no seu MausBot</div><h2>Exercício prático</h2><p>Faça no seu app e marque o que concluiu. Fica salvo neste navegador.</p><ul class="checks">' +
      m.teste.map(function (x, k) { var id = m.slug + ":" + k; return '<li><label><input type="checkbox" data-check="' + id + '"' + (S.checks[id] ? " checked" : "") + '><span>' + txt(x) + '</span></label></li>'; }).join("") + '</ul></section>';
    h += '<section class="bloco" id="s-quiz"><div class="rot">08 · Quiz</div><h2>Confira o que ficou</h2><p class="placar" id="placar"></p>';
    m.quiz.forEach(function (q, k) {
      var id = m.slug + ":" + k, r = S.quiz[id];
      h += '<div class="quiz-q" data-q="' + k + '"><h3><span>' + (k + 1) + '.</span>' + esc(q.q) + '</h3>';
      q.o.forEach(function (o, j) {
        var cls = "";
        if (r !== undefined) { if (j === q.c) cls = " certa"; else if (j === r) cls = " errada"; }
        h += '<button type="button" class="op' + cls + '" data-op="' + j + '"' + (r !== undefined ? " disabled" : "") + '><span class="m">' + "ABCD"[j] + '</span>' + esc(o) + '</button>';
      });
      h += '<div class="expl' + (r !== undefined ? " on" : "") + '">' + (r !== undefined ? feedback(r === q.c, q) : "") + '</div></div>';
    });
    h += '<button type="button" class="btn2" id="refazer">Refazer o quiz</button></section>';
    h += '<section class="bloco fontes" id="s-fontes"><div class="rot">09 · Fontes</div><h2>Para ir mais fundo</h2><ul>' + m.fontes.map(function (f) { return '<li><a href="' + esc(f.u) + '" target="_blank" rel="noopener">' + esc(f.t) + '</a><br><small class="mono">' + esc(f.u.replace("https://", "")) + '</small></li>'; }).join("") + '</ul></section>';
    h += '<div class="fim-mod"><button type="button" class="btn concluir" id="concluir">' + (S.done[m.slug] ? "Módulo concluído · desmarcar" : "Marcar módulo como concluído") + '</button>' +
      (ant ? '<a class="btn2" href="#m/' + ant.slug + '">← ' + esc(ant.titulo) + '</a>' : '<a class="btn2" href="#inicio">← Mapa</a>') +
      (prox ? '<a class="btn2" href="#m/' + prox.slug + '">' + esc(prox.titulo) + ' →</a>' : '<a class="btn2" href="#glossario">Glossário →</a>') + '</div></div>';
    app.innerHTML = h;
    placar(m);

    app.querySelectorAll("[data-check]").forEach(function (c) {
      c.addEventListener("change", function () { if (c.checked) S.checks[c.dataset.check] = true; else delete S.checks[c.dataset.check]; salvar(); });
    });
    app.querySelectorAll(".quiz-q").forEach(function (box) {
      var k = +box.dataset.q, q = m.quiz[k], id = m.slug + ":" + k;
      box.querySelectorAll(".op").forEach(function (b) {
        b.addEventListener("click", function () {
          var j = +b.dataset.op; S.quiz[id] = j; salvar();
          box.querySelectorAll(".op").forEach(function (o) { o.disabled = true; var oj = +o.dataset.op; if (oj === q.c) o.classList.add("certa"); else if (oj === j) o.classList.add("errada"); });
          var ex = box.querySelector(".expl"); ex.innerHTML = feedback(j === q.c, q); ex.classList.add("on");
          placar(m);
        });
      });
    });
    el("refazer").addEventListener("click", function () { m.quiz.forEach(function (_, k) { delete S.quiz[m.slug + ":" + k]; }); salvar(); modulo(m.slug, "quiz"); });
    el("concluir").addEventListener("click", function () { if (S.done[m.slug]) delete S.done[m.slug]; else S.done[m.slug] = true; salvar(); modulo(m.slug, "concluir"); });
    atualizarBarra();
    if (secao) { var alvo = secao === "concluir" ? el("concluir") : el("s-" + secao); if (alvo) alvo.scrollIntoView(); } else window.scrollTo(0, 0);
  }
  function feedback(ok, q) { return (ok ? '<b class="ok">Certo.</b> ' : '<b class="no">Ainda não.</b> A resposta é ' + "ABCD"[q.c] + '. ') + txt(q.e); }
  function placar(m) { var s = stats(m); el("placar").textContent = s.q ? "Você acertou " + s.qc + " de " + s.q + " respondidas (" + m.quiz.length + " no total)." : m.quiz.length + " perguntas. Toque numa opção para ver a correção."; }

  function glossarioItens() {
    var itens = [];
    M.forEach(function (m) { m.conceitos.forEach(function (c) { itens.push({ t: c.t, d: c.d, m: m }); }); });
    (C.glossarioExtra || []).forEach(function (c) { itens.push({ t: c.t, d: c.d }); });
    itens.sort(function (a, b) { return a.t.localeCompare(b.t, "pt-BR"); });
    return itens;
  }
  function glossario() {
    var itens = glossarioItens();
    var h = '<section class="sec"><div class="wrap"><a href="#inicio">← Mapa do curso</a><div class="rot" style="margin-top:16px">Glossário · ' + itens.length + ' termos</div><h2>As palavras do OpenMausBot, em português simples.</h2>' +
      '<label class="sr" for="gq">Filtrar glossário</label><input id="gq" class="gl-busca" type="search" placeholder="Filtrar termos (ex.: cron, Chief)"><div class="gl" id="gl"></div></div></section>';
    app.innerHTML = h; window.scrollTo(0, 0);
    function pinta(f) {
      var n = norm(f);
      el("gl").innerHTML = itens.filter(function (x) { return !n || norm(x.t + " " + x.d).indexOf(n) >= 0; }).map(function (x) {
        return '<div class="conceito"><b>' + esc(x.t) + '</b><span>' + txt(x.d) + '</span>' + (x.m ? '<small>Módulo ' + x.m.id + ' · <a href="#m/' + x.m.slug + '/conceitos">' + esc(x.m.titulo) + '</a></small>' : "") + '</div>';
      }).join("") || '<p>Nenhum termo encontrado.</p>';
    }
    pinta("");
    el("gq").addEventListener("input", function (e) { pinta(e.target.value); });
  }

  /* ---------- busca no curso ---------- */
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  var INDICE = [];
  M.forEach(function (m) {
    function add(sec, t) { INDICE.push({ m: m, sec: sec, t: limpo(t), n: norm(limpo(t)) }); }
    add("oque", m.titulo + ". " + m.sub);
    m.oque.forEach(function (x) { add("oque", x); }); m.porque.forEach(function (x) { add("porque", x); });
    m.conceitos.forEach(function (c) { add("conceitos", c.t + ": " + c.d); });
    m.passos.forEach(function (x) { add("passos", x); }); m.dicas.forEach(function (x) { add("dicas", x); });
    m.armadilhas.forEach(function (x) { add("armadilhas", x); }); m.teste.forEach(function (x) { add("teste", x); });
    m.quiz.forEach(function (q) { add("quiz", q.q + " " + q.e); });
  });
  var nomeSec = {}; SECOES.forEach(function (s) { nomeSec[s[0]] = s[1]; });
  var q = el("q"), res = el("res");
  function buscar() {
    var v = q.value.trim(); if (v.length < 2) { res.classList.remove("on"); res.innerHTML = ""; return; }
    var n = norm(v), achados = INDICE.filter(function (x) { return x.n.indexOf(n) >= 0; }).slice(0, 25);
    res.innerHTML = achados.length ? achados.map(function (x) {
      var p = x.n.indexOf(n), ini = Math.max(0, p - 50), trecho = x.t.slice(ini, p + n.length + 70);
      var pp = p - ini, marc = esc(trecho.slice(0, pp)) + "<mark>" + esc(trecho.slice(pp, pp + n.length)) + "</mark>" + esc(trecho.slice(pp + n.length));
      return '<a href="#m/' + x.m.slug + '/' + x.sec + '">Módulo ' + x.m.id + ' · ' + esc(x.m.titulo) + ' <span class="tag">' + esc(nomeSec[x.sec]) + '</span><small>' + (ini ? "…" : "") + marc + "…</small></a>";
    }).join("") : '<div class="vazio">Nada encontrado para "' + esc(v) + '". Tente o glossário.</div>';
    res.classList.add("on");
  }
  q.addEventListener("input", buscar);
  q.addEventListener("focus", buscar);
  q.addEventListener("keydown", function (e) { if (e.key === "Escape") { q.value = ""; buscar(); q.blur(); } });
  document.addEventListener("click", function (e) { if (!e.target.closest(".busca")) res.classList.remove("on"); });
  res.addEventListener("click", function (e) { if (e.target.closest("a")) { res.classList.remove("on"); q.value = ""; } });

  /* ---------- rotas ---------- */
  function rota() {
    var h = location.hash.replace(/^#/, "");
    var p = h.split("/");
    if (p[0] === "m" && p[1]) modulo(p[1], p[2]);
    else if (p[0] === "glossario") glossario();
    else inicio();
  }
  window.addEventListener("hashchange", rota);
  rota();
})();
