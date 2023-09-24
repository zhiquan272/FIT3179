{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 800,
  "height": 450,
  "title": "Earthquakes of magnitude 4 or large between 4 Oct 2020 and 10 Oct 2020",
  "projection": {"type": "equalEarth"},
  "layer": [
    {
      "data": {
        "url": "https://github.com/zhiquan272/FIT3179/blob/main/ne_110m.json",
        "format": {"type": "topojson", "feature": "ne_110m"}
      },
      "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"}
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/JiazhouLiu/FIT3179/main/VegaLite/2_symbol_map/data/earthquake.csv"
      },
      "mark": {"type": "circle", "tooltip": {"content": "data"}},
      "encoding": {
        "longitude": {"field": "longitude", "type": "quantitative"},
        "latitude": {"field": "latitude", "type": "quantitative"},
        "size": {
          "field": "mag",
          "type": "quantitative",
          "title": "Magnitude (Richter scale)",
          "scale": {"domain": [4, 8]}
        },
        "color": {
          "field": "depth",
          "type": "quantitative",
          "title": "Depth in km",
          "scale": {"scheme": "reds"}
        }
      }
    }
  ]
}
