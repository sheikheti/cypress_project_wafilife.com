import open_url from "../Base/openUrl"
import homePage from "../Pages/homePageLocator"

describe('waliLife', () => {

    const url = new open_url
    const home = new homePage

    it('test', () => {
      url.urlLink()
      home.homePageLocator()
    })
  })