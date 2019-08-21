import Utils from "../util/Utils.js"

const Suggest = {
  render : async() => {
    let view = `
      <datalist id="Keywords"></datalist>
    `
    return view
  },
  after_render : async () => {
    const app = {
      init: function() {
        this.bindEvent()
      },
      bindEvent: function() {
        this.createOption();
      },
      createOption: function() {
        const option = Utils.data.keywords.map((keyword) => {
          return `<option value="${keyword}"></option>`
        })
        $("#Keywords").html(option.join(''))
      }
    }
    app.init()
  }
}

export default Suggest