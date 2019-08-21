import Gallery from "./views/Gallery.js"
import Detail from "./views/Detail.js"

import Utils from "./util/Utils.js"

const routes = {
  "/"             : Gallery,
  "/image/:id"    : Detail
};

const router = async () => {
  const $Contents = $(".Contents")[0]

  const request = Utils.parseRequestUrl()
  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '')
  const page = routes[parsedURL]

  $Contents.innerHTML = await page.render()
  await page.after_render()
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);