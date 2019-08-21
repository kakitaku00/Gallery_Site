import Utils from "../util/Utils.js"

const Detail = {
  render : async () => {
    let view = `
      <div id="Detail" class="Detail__contents"></div>
      <div class="Detail__btn"><a href="/#">back</a></div>
    `
    return view
  },
  after_render: async () => {
    const app = {
      init: async function() {
        await this.bindImage()
      },
      bindImage: async function() {
        await this.getImage()
        await this.renderImage()
      },
      getImage: async function() {
        const request = Utils.parseRequestUrl()
        await Utils.getImage(request.id).done(async (response) => {
          Utils.data.image = response.photo
        })
      },
      renderImage: async function() {
        const image = {
          title: Utils.data.image.title._content,
          farm: Utils.data.image.farm,
          server: Utils.data.image.server,
          id: Utils.data.image.id,
          secret: Utils.data.image.secret
        }
        const src = `
          <h2 class="Detail__title">${image.title}</h2>
          <img src="http://farm${image.farm}.static.flickr.com/${image.server}/${image.id}_${image.secret}.jpg" class="Detail__image">
        `
        await $("#Detail").html(src)
      }
    }
    app.init()
  }
}

export default Detail;