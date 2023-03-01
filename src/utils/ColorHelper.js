const ColorHelper = {
  shadeColor(color, percent) {
    if (color) {
      var R = parseInt(color.substring(1, 3), 16)
      var G = parseInt(color.substring(3, 5), 16)
      var B = parseInt(color.substring(5, 7), 16)

      R = parseInt((R * (100 + percent)) / 100)
      G = parseInt((G * (100 + percent)) / 100)
      B = parseInt((B * (100 + percent)) / 100)

      R = R < 255 ? R : 255
      G = G < 255 ? G : 255
      B = B < 255 ? B : 255

      R = Math.round(R)
      G = Math.round(G)
      B = Math.round(B)

      var RR =
        R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16)
      var GG =
        G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16)
      var BB =
        B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16)

      return '#' + RR + GG + BB
    } else {
      return null
    }
  },
  pickTitleColor(bgColor) {
    if (bgColor) {
      var lightColor = '#ffffff'
      var darkColor = '#111111'
      var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor
      var r = parseInt(color.substring(0, 2), 16)
      var g = parseInt(color.substring(2, 4), 16)
      var b = parseInt(color.substring(4, 6), 16)
      var uicolors = [r / 255, g / 255, b / 255]
      var c = uicolors.map((col) => {
        if (col <= 0.03928) {
          return col / 12.92
        }
        return Math.pow((col + 0.055) / 1.055, 2.4)
      })
      var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
      return L > 0.179 ? darkColor : lightColor
    } else {
      return null
    }
  },
  pickSubtitleColor(bgColor) {
    if (bgColor) {
      var lightColor = '#f4f4f4'
      var darkColor = '#363636'
      var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor
      var r = parseInt(color.substring(0, 2), 16)
      var g = parseInt(color.substring(2, 4), 16)
      var b = parseInt(color.substring(4, 6), 16)
      var uicolors = [r / 255, g / 255, b / 255]
      var c = uicolors.map((col) => {
        if (col <= 0.03928) {
          return col / 12.92
        }
        return Math.pow((col + 0.055) / 1.055, 2.4)
      })
      var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
      return L > 0.179 ? darkColor : lightColor
    } else {
      return null
    }
  },
}

export default ColorHelper
