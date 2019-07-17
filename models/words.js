const Word = require('../lib/mongo').Word

module.exports = {
  // 创建一个关键词
  create: function (word) {
    return Word.create(word).exec()
  },

  findWord: (name) => {
    return Word
      .findOne({ name })
      .addCreatedAt()
      .exec()
  },

  // 获取所有关键词
  getWords: function (name) {
    const query = {}
    if (name) {
      query.name = name
    }
    return Word
      .find(query)
      .addCreatedAt()
      .exec()
  },

  // 更新关键词使用次数
  updateWord: function (name) {
    return Word.update({ name }, { $inc: { count: 1 } }).exec()
  }
}
