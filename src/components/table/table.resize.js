import {$} from '@core/dom';

export function resizeTable($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  const prop = type === 'col' ? 'bottom' : 'right';
  let value;
  $resizer.css({
    opacity: 1,
    [prop]: '-5000px',
  });
  if (type === 'col') {
    document.onmousemove = (e) => {
      const delta = e.pageX - coords.right;
      value = delta + coords.width;
      $resizer.css({right: -delta + 'px'});
    };
  } else {
    document.onmousemove = (e) => {
      const delta = e.pageY - coords.bottom;
      value = delta + coords.height;
      $resizer.css({bottom: -delta + 'px'});
    };
  }

  document.onmouseup = (e) => {
    document.onmousemove = null;
    document.onmouseup = null;
    if (type === 'col') {
      $parent.css({width: value + 'px'});
      $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((el) => {
        el.style.width = value + 'px';
      });
    } else {
      $parent.css({height: value + 'px'});
    }
    $resizer.css({
      opacity: 0,
      right: 0,
      bottom: 0,
    });
  };
}
