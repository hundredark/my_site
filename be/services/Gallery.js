const GalleryModel = require('../db/models/gallery')

class GalleryService {
  addFake() {
    let data = []
    for (let i = 1; i <= 40; i++) {
      data.push({
        id: i - 1,
        url: `https://cdn.jsdelivr.net/gh/hundredark/imgBed@main/img/${i}.jpg`,
        des: ''
      })
    }

    return GalleryModel.bulkCreate(data);
  }

  getGalleryPage (page, pageSize) {

    return GalleryModel.findAndCountAll({
      order: [['id', 'DESC']],
      where: {},
      offset: page * pageSize,
      limit: pageSize
    });
  }
}

module.exports = new GalleryService()
