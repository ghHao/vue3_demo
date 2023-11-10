// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

const produceNewsData = function () {
  const newsList = []
  for (let i = 0; i < 20; i++) {
    const newNewsObject = {
      id: Random.increment(),
      pId: Random.int(0, 3),
      title: Random.ctitle(1, 10), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(1, 30), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd

    }
    newsList.push(newNewsObject)
  }

  return newsList
}
// 请求该url，就可以返回newsList
Mock.mock('/mock/news', produceNewsData) // 后面讲这个api的使用细节
