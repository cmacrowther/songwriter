
'use-strict';

const fs = require('fs');
const fm = require('front-matter');
const { createCanvas, registerFont, loadImage } = require('canvas')

const fileFrontmatter = fs.readFileSync('src/pages/index.md', 'utf8')
const fileData = fm(fileFrontmatter)

// Wrap text in canvas
const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
	var words = text.split(' ')
	var line = ''

	for (var n = 0; n < words.length; n++) {
		var testLine = line + words[n] + ' '
		var metrics = context.measureText(testLine)
		var testWidth = metrics.width
		if (testWidth > maxWidth && n > 0) {
			context.fillText(line, x, y)
			line = words[n] + ' '
			y += lineHeight
		} else {
			line = testLine
		}
	}
	context.fillText(line, x, y)
}

loadImage("static/" + fileData.attributes.image).then((image) => {
  const width = 1200
  const height = 630
  let fontSize = 64
  let lineHeight = fontSize * 1.3975
  let textArtistY = 120
  let textTitleY = textArtistY + 220
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')
  const gradient = context.createLinearGradient(0, 630, 0, 0);

  // Add three color stops
  gradient.addColorStop(0, shadeColor(fileData.attributes.color, 20));
  gradient.addColorStop(1, fileData.attributes.color);

  // Set the fill style and draw a rectangle
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.translate(345, 0);
  context.save();
  context.beginPath();
  context.arc(256, 240, 128, 0, Math.PI * 2, true);
  context.closePath();
  context.clip();
  context.drawImage(image, 128, 110, 256, 256);
  context.beginPath();
  context.arc(0, 0, 25, 0, Math.PI * 2, true);
  context.clip();
  context.closePath();
  context.restore();

  registerFont('./static/fonts/segoeuil.ttf', {
    family: 'SegoeLight',
  })
  registerFont('./static/fonts/seguibl.ttf', {
    family: 'SegoeBlack',
  })
  lineHeight = fontSize * 1.175
  textArtistY = 375
  textTitleY = textArtistY + 65
  context.font = `normal 42pt Segoe UI Black`
  context.textAlign = 'left'
  context.textBaseline = 'top'
  context.fillRect(550, 90, 700, 500)
  context.fillStyle = pickTitleColor(fileData.attributes.color)
  context.textAlign = "center";
  wrapText(
    context,
    `${fileData.attributes.title}`,
    255,
    textArtistY,
    810,
    lineHeight
  )
  context.font = `lighter 36pt Segoe UI Light`
  context.fillStyle = pickSubtitleColor(fileData.attributes.color)
  context.textAlign = "center";
  wrapText(
    context,
    `on Songwriter`,
    230,
    textTitleY,
    810,
    lineHeight
  )
  loadImage('./static/assets/js-square.svg').then((data) => {
    context.drawImage(data, 375, 450, 45, 50)
  }).then(function() {
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./static/assets/og-image.png', buffer)
  });
})

const favico_32_width = 32
const favico_32_height = 32
const favico_32_canvas = createCanvas(favico_32_width, favico_32_height)
const favico_32_context = favico_32_canvas.getContext('2d')
favico_32_context.fillStyle = fileData.attributes.color
favico_32_context.beginPath()
favico_32_context.arc(16, 16, 16, 0, 2 * Math.PI)
favico_32_context.fill()
favico_32_context.fillStyle = "#ffffff"
favico_32_context.beginPath()
favico_32_context.arc(16, 16, 3, 0, 2 * Math.PI)
favico_32_context.fill()
const favico_32_buffer = favico_32_canvas.toBuffer('image/png')
fs.writeFileSync('./static/assets/favicon-32x32.png', favico_32_buffer)

const favico_16_width = 16
const favico_16_height = 16
const favico_16_canvas = createCanvas(favico_16_width, favico_16_height)
const favico_16_context = favico_16_canvas.getContext('2d')
favico_16_context.fillStyle = fileData.attributes.color
favico_16_context.beginPath()
favico_16_context.arc(8, 8, 8, 0, 2 * Math.PI)
favico_16_context.fill()
favico_16_context.fillStyle = "#ffffff"
favico_16_context.beginPath()
favico_16_context.arc(8, 8, 2, 0, 2 * Math.PI)
favico_16_context.fill()
const favico_16_buffer = favico_16_canvas.toBuffer('image/png')
fs.writeFileSync('./static/assets/favicon-16x16.png', favico_16_buffer)

function pickTitleColor(bgColor) {
  if (bgColor) {
    var lightColor = "#ffffff";
    var darkColor = "#111111";
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map((col) => {
      if (col <= 0.03928) {
        return col / 12.92;
      }
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? darkColor : lightColor;
  } else {
    return null;
  }
}

function pickSubtitleColor(bgColor) {
  if (bgColor) {
    var lightColor = "#f4f4f4";
    var darkColor = "#363636";
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); 
    var g = parseInt(color.substring(2, 4), 16); 
    var b = parseInt(color.substring(4, 6), 16); 
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map((col) => {
      if (col <= 0.03928) {
        return col / 12.92;
      }
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? darkColor : lightColor;
  } else {
    return null;
  }
}

function shadeColor(color, percent) {
  if (color) {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
  } else {
    return null;
  } 
}