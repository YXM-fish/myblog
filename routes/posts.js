const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// 所有用户或者特定用户的文章页
router.get('/', function (req, res, next) {
    res.render('posts')
})
// 发表文章
router.post('/create', checkLogin, function (req, res, next) {
    res.send('发表文章')
})
// 发表文章页
router.get('/create', checkLogin, function (req, res, next) {
    res.send('发表文章页')
})
// 单独一篇的文章页
router.get('/:postId', function (req, res, next) {
    res.send('文章详情页')
})
// 更新文章页
router.get('/:postId/edit', checkLogin, function (req, res, next) {
    res.send('更新文章页')
})
// 更新一篇文章
router.post('/:postId/edit', checkLogin, function (req, res, next) {
    res.send('更新文章')
})
// 删除一篇文章
router.get('/:postId/remove', checkLogin, function (req, res, next) {
    res.send('删除文章')
})

module.exports = router