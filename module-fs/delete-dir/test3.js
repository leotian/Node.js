/*
  方法3：使用 rimraf 模块
 */

const rimraf = require('rimraf');
rimraf('./aaa', function (err) { // 删除当前目录下的 test.txt
  if (err) console.log(err);
});
