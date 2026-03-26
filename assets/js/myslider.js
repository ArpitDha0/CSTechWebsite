$(function () {
  const $outer = $('#carouselOuter');
  const $track = $('#carouselTrack');
  const $dots  = $('#carouselDots');
  const $cards = $track.children('.product-card');
  const total  = $cards.length;
  const GAP    = 16;
 
  let currentIndex = 0;
  let visibleCount = 4;
  let cardWidth    = 0;
 
  /* ── helpers ─────────────────────────────── */
  function getVisible() {
    const w = $outer[0].getBoundingClientRect().width;
    if (w < 480)  return 1;
    if (w < 768)  return 2;
    if (w < 1024) return 3;
    return 4;
  }
 
  function getMaxIndex() { return Math.max(0, total - visibleCount); }
 
  function calcCardWidth() {
    const w = $outer[0].getBoundingClientRect().width;
    return (w - GAP * (visibleCount - 1)) / visibleCount;
  }
 
  function offsetFor(i) { return i * (cardWidth + GAP); }
 
  /* ── dots ────────────────────────────────── */
  function buildDots() {
    $dots.empty();
    const pages = getMaxIndex() + 1;
    for (let i = 0; i < pages; i++) {
      $('<span class="dot"></span>')
        .toggleClass('active', i === currentIndex)
        .data('i', i).appendTo($dots);
    }
  }
 
  function syncDots() {
    $dots.children('.dot').each(function (i) {
      $(this).toggleClass('active', i === currentIndex);
    });
  }
 
  function syncArrows() {
    $('#prevBtn').toggleClass('disabled', currentIndex <= 0);
    $('#nextBtn').toggleClass('disabled', currentIndex >= getMaxIndex());
  }
 
  /* ── translate ───────────────────────────── */
  function moveTo(px, animate) {
    if (animate) {
      $track.addClass('animated');
    } else {
      $track.removeClass('animated');
      $track[0].getBoundingClientRect(); // force reflow
    }
    $track.css('transform', 'translateX(' + (-px) + 'px)');
  }
 
  /* ── layout ──────────────────────────────── */
  function layout(instant) {
    visibleCount = getVisible();
    cardWidth    = calcCardWidth();
    $cards.css('width', cardWidth + 'px');
    currentIndex = Math.min(currentIndex, getMaxIndex());
    moveTo(offsetFor(currentIndex), !instant);
    buildDots();
    syncArrows();
  }
 
  /* ── goTo — pure slide, no zoom ─────────── */
  function goTo(index) {
    const next = Math.max(0, Math.min(index, getMaxIndex()));
    if (next === currentIndex) return;
    currentIndex = next;
    moveTo(offsetFor(currentIndex), true);
    syncDots();
    syncArrows();
  }
 
  /* ── buttons & dots ──────────────────────── */
  $('#nextBtn').on('click', function () { goTo(currentIndex + 1); });
  $('#prevBtn').on('click', function () { goTo(currentIndex - 1); });
  $dots.on('click', '.dot', function () { goTo($(this).data('i')); });
 
  /* ── keyboard ────────────────────────────── */
  $(document).on('keydown', function (e) {
    if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });
 
  /* ── drag / swipe ────────────────────────── */
  let startX = 0, startY = 0, startOff = 0;
  let dragging = false, confirmed = false;
 
  function clientX(e) { return (e.touches ? e.touches[0] : e).clientX; }
  function clientY(e) { return (e.touches ? e.touches[0] : e).clientY; }
 
  function onStart(e) {
    startX   = clientX(e);
    startY   = clientY(e);
    startOff = offsetFor(currentIndex);
    dragging = true; confirmed = false;
    $track.removeClass('animated');
    $outer.addClass('dragging');
  }
 
  function onMove(e) {
    if (!dragging) return;
    const dx = clientX(e) - startX;
    const dy = clientY(e) - startY;
 
    if (!confirmed) {
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        // vertical — give back control
        dragging = false;
        $outer.removeClass('dragging');
        return;
      }
      confirmed = true;
    }
 
    if (e.cancelable) e.preventDefault();
 
    const maxOff = offsetFor(getMaxIndex());
    let off = startOff - dx;
    // rubber-band resistance at edges
    if (off < 0)      off = off * 0.18;
    if (off > maxOff) off = maxOff + (off - maxOff) * 0.18;
 
    $track.css('transform', 'translateX(' + (-off) + 'px)');
  }
 
  function onEnd(e) {
    if (!dragging) return;
    dragging = false;
    $outer.removeClass('dragging');
    if (!confirmed) return; // tap, not drag
 
    const endX = (e.changedTouches ? e.changedTouches[0] : e).clientX;
    const dx   = endX - startX;
    const threshold = Math.max(40, cardWidth * 0.22);
 
    let next = currentIndex;
    if (dx < -threshold) next = Math.min(currentIndex + 1, getMaxIndex());
    else if (dx > threshold) next = Math.max(currentIndex - 1, 0);
 
    currentIndex = next;
    moveTo(offsetFor(currentIndex), true);
    syncDots();
    syncArrows();
  }
 
  // Touch
  const el = $outer[0];
  el.addEventListener('touchstart',  onStart, { passive: true });
  el.addEventListener('touchmove',   onMove,  { passive: false });
  el.addEventListener('touchend',    onEnd,   { passive: true });
  el.addEventListener('touchcancel', onEnd,   { passive: true });
 
  // Mouse drag
  $outer.on('mousedown', onStart);
  $(document).on('mousemove', onMove).on('mouseup', function (e) {
    if (dragging) onEnd(e);
  });
 
  /* ── resize ──────────────────────────────── */
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { layout(true); }, 150);
  });
 
  /* ── init ────────────────────────────────── */
  layout(true);
});