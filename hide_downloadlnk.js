 // <![CDATA[
$ ('. download '). click (function () {
  var id_sp = $ (this) .attr (' name ');
  localStorage.setItem (' luu_id ', id_sp);
  $ .ajax ({
    type:' GET ',
    url:' / feeds / posts / summary / '+ id_sp,
    data: {
      ' alt ':' json '
    },
    dataType:' jsonp ',
    success: function (k) {
      if (k.entry) {
        for (var c = 0; c <k.entry.link.length; c ++) {
          if ("enclosure" == k.entry.link [c] .rel) {
            if ("text / html" == k.entry.link [c] .type) {
              var get_link = k.entry.link [c] .href;
              localStorage.setItem ('luu_get_link', get_link);
            }
          }
        }
      }
    }
  });
  var url_tv = '/p/downloads.html';
  setTimeout (function () {
    location.href = url_tv;
  }, 1000);
});
var id = localStorage.getItem ('luu_id')
var get_link = localStorage.getItem ('luu_get_link');
var timer = 15;
if (id) {
  document.querySelector ('. time-wrapper'). classList.remove ('hidden')
  var downloadTimer = setInterval (function () {
    document.getElementById ('timer-countdown'). innerHTML = timer;
    timer - = 1;
    if (timer <= 0) {
      clearInterval (downloadTimer);
      document.getElementById ('timer-countdown'). innerHTML = '0';
      document.querySelector ('. getlink-button'). innerHTML = '<a href=' + get_link +' target="_blank" rel="noopener nofollow" title="Get link"> Get link </a> ';
    }
  }, 1000)
}
//]]>
