/*
  方法1：只使用fs，递归删除文件后删除文件夹
 */

const fs = require('fs')

const filePath = `${__dirname}/aaa`//要删除的文件夹 url

//删除所有的文件(将所有文件夹置空)
function emptyDir(filePath) {
  const files = fs.readdirSync(filePath)//读取该文件夹
  files.forEach((file) => {
    const nextFilePath = `${filePath}/${file}`
    const states = fs.statSync(nextFilePath)
    if (states.isDirectory()) {
      emptyDir(nextFilePath)
    } else {
      fs.unlinkSync(nextFilePath)
      console.log(`删除文件 ${nextFilePath} 成功`)
    }
  })
}

//删除所有的空文件夹
function rmEmptyDir(filePath) {
  const files = fs.readdirSync(filePath)
  // if (files.length === 0) {
  //   fs.rmdirSync(filePath)
  //   console.log(`删除空文件夹 ${filePath} 成功`)
  // } else {
    let tempFiles = 0
    files.forEach((file) => {
      tempFiles++
      const nextFilePath = `${filePath}/${file}`
      console.log(file)
      rmEmptyDir(nextFilePath)
    })
    fs.rmdirSync(filePath)
    console.log(`删除空文件夹 ${filePath} 成功`)
    // //删除母文件夹下的所有空文件夹后，将母文件夹也删除
    // if(tempFiles === files.length) {
    //   fs.rmdirSync(filePath)
    //   console.log(`删除空文件夹 ${filePath} 成功`)
    // }
  // }
}

function deleteFolder(filePath) {
  const files = []
  if (fs.existsSync(filePath)) {
    const files = fs.readdirSync(filePath)
    files.forEach((file) => {
      const nextFilePath = `${filePath}/${file}`
      const states = fs.statSync(nextFilePath)
      if (states.isDirectory()) {
        //recurse
        deleteFolder(nextFilePath)
      } else {
        //delete file
        fs.unlinkSync(nextFilePath)
      }
    })
    fs.rmdirSync(filePath)
  }
}
