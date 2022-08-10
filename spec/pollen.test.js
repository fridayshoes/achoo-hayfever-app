const Pollen = require('../routes/pollen');

// require('jest-fetch-mock').enableMocks()

xdescribe('API class', () => {
  it ('calls fetch and loads data', () => {
  fetch.mockResponseOnce(JSON.stringify({
      "Count": {
        "grass_pollen":31,
        "tree_pollen":0,
        "weed_pollen":126
      },
      "Risk":{
        "grass_pollen":"Moderate",
        "tree_pollen":"Low",
        "weed_pollen":"High"
      },
      "Species":{
        "Grass":{"Grass / Poaceae":31},
        "Others":4,
        "Tree":{"Alder":0,"Birch":0,"Cypress":0,"Elm":0,"Hazel":0,"Oak":0,"Pine":0,"Plane":0,"Poplar / Cottonwood":0},
        "Weed":{"Chenopod":1,"Mugwort":2,"Nettle":113,"Ragweed":6}
      },
      "updatedAt":"2022-08-04T13:47:35.000Z"
    }
  ))
    expect(data.Count.grass_pollen).toBe(31)
    expect(data.Count.Risk).toBe({
      "grass_pollen":"Moderate",
      "tree_pollen":"Low",
      "weed_pollen":"High"
    })
    expect(response.data.data.updatedAt).toBe("2022-08-04T13:47:35.000Z")
  })
})