exports.index = function (req, res, next) {
  var q = req.query.q;
  q = encodeURIComponent(q);
  // res.redirect('https://www.baidu.com/#hl=zh-CN&q=site:hi-xianghe.com+' + q);
  res.redirect('https://www.baidu.com/#hl=zh-CN&wd=' + q + " site:hi-xianghe.com");
};
