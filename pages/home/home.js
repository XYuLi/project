// pages/home/home.js
//获取应用实例
var app = getApp()
Page({
  data: {
    recommendBooks: [
      {
        name: "Swift 精讲 2",
        image: "../../images/book0.jpg",
        url: "https://item.jd.com/11937350.html"
      },
      {
        name: "Swift 精讲 1",
        image: "../../images/book1.jpg",
        url: "https://item.jd.com/11672854.html"
      },
      {
        name: "Swift 入门",
        image: "../../images/book2.jpg",
        url: "https://item.jd.com/11706321.html#crumb-wrap"
      }],
    hotBooks: [
      {
        name: "Swift 精讲 2",
        image: "../../images/hotBook0.jpg",
        url: "https://item.jd.com/11937350.html"
      },
      {
        name: "Swift 精讲 1",
        image: "../../images/hotBook1.jpg",
        url: "https://item.jd.com/11672854.html"
      },
      {
        name: "Swift 入门",
        image: "../../images/hotBook2.jpg",
        url: "https://item.jd.com/11706321.html#crumb-wrap"
      }],
    boutiqueBooks: [
      {
        name: "Swift 精讲 2",
        miniSummary: "此书已更新至 Swift2.0版本",
        images: {
          title_img: "../../images/boutiquebook0.jpg",
          author: "../../images/head.jpg"
        },
        url: "https://item.jd.com/11937350.html"
      },
      {
        name: "Swift 精讲 1",
        miniSummary: "本书统统或实践项目来讲解应用方法，帮助读者快速掌握知识",
        images: {
          title_img: "../../images/boutiquebook1.jpg",
          author: "../../images/head.jpg"
        },
        url: "https://item.jd.com/11937350.html"
      },
      {
        name: "Swift 入门",
        miniSummary: "Swift系列丛书荣登年度好评排行榜，专注实战，学以致用",
        images: {
          title_img: "../../images/boutiquebook2.jpg",
          author: "../../images/head.jpg"
        },
        url: "https://item.jd.com/11937350.html"
      }]
  },
  onLoad: function () {
  },
  bindToDetailTap: function (e) {
    wx.navigateTo({
      url: '../detail/detail?url=' + e.currentTarget.dataset.url
    })
  }
})
