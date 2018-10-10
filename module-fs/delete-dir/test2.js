/*
  方法2：使用子进程
 */

const fs = require('fs')
const child_process = require('child_process');
const filePath = `${__dirname}/aaa`//要删除的文件夹 url

const workerProcess = child_process.exec(`rm -rf ${filePath}`,
    (error, stdout, stderr) => {
      if (error) {
          console.log(error.stack)
          console.log('Error code: '+error.code)
          console.log('Signal received: '+error.signal)
      }
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
    })

workerProcess.on('exit', function (code) {
  console.log('子进程已退出，退出码 '+code);
})

const rimraf = require('rimraf');
rimraf('./aaa', function (err) { // 删除当前目录下的 test.txt
  if (err) console.log(err);
});
