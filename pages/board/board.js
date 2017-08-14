let app = getApp()

Page({
  data: {
    boards: [
        { key: '', name: 'Home', link: '../plants/plants', type: 'switchTab' },
        { key: '', name: 'Daily', link: '../more/map/map', type: 'navigate' },
        { key: '', name: 'My', link: '../more/map/map', type: 'navigate' }
    ],
    photos: [
        { src: 'https://app.tefact.com/images/1.png' },
        { src: 'https://app.tefact.com/images/2.png' },
        { src: 'https://app.tefact.com/images/1.png' },
    ],
    loading: true
  },
  onShareAppMessage() {
    return {
      title: 'Your Fortune',
      desc: '',
      path: '/pages/board/board'
    }
  },
  onLoad() {
    app.getUser()
  }
})
