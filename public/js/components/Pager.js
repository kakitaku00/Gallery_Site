import Utils from "../util/Utils.js"
import Gallery from "../views/Gallery.js"

let Pager = {
  render : async() => {

    let view = `
      <div class="Gallery__pager">
        <ul id="Pager" class="Pager">
        </ul>
      </div>
    `
    return view
  },
  after_render : async () => {
  }
}

export default Pager;