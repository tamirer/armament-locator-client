const inputs = [...document.querySelectorAll('input')]
const canvases = [...document.querySelectorAll('canvas')]
const hasInput = [0, 0]

canvases.forEach(e => {e.width = e.height = 0})
inputs.forEach(e => e.addEventListener('change', handleInput))

function handleInput () {
  const input = this
  const index = inputs.indexOf(input)
  const canvas = canvases[index]
  const image = new Image()
  image.addEventListener('load', () => {
    canvas.width = image.width
    canvas.height = image.height
    canvas.getContext('2d').drawImage(image, 0, 0)
    hasInput[index] = 1
    if (hasInput.indexOf(0) === -1) compareCanvases()
  })
  image.src = URL.createObjectURL(input.files[0])
}

function compareCanvases() {
  const img1Ctx = canvases[0].getContext('2d')
  const img2Ctx = canvases[1].getContext('2d')
  const diffCtx = canvases[2].getContext('2d')
  const {width, height} = canvases[0]
  canvases[2].width = width
  canvases[2].height = height
  
  const img1 = img1Ctx.getImageData(0, 0, width, height)
  const img2 = img2Ctx.getImageData(0, 0, width, height)
  const diff = diffCtx.createImageData(width, height)

  const diffCount = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1})
  document.querySelector('output').textContent = diffCount

  diffCtx.putImageData(diff, 0, 0)
  let imgElement = document.getElementById('output');
  points = simpleBlobDetector(cv.imread(imgElement))
  console.log(points)
  var c = document.getElementById("output");
  var cAfter = document.getElementById("after");
  var ctx = c.getContext("2d");
  var ctxAfter = cAfter.getContext("2d");
  for (var i = 0; i < points.length; i++){
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.arc(points[i].pt.x, points[i].pt.y, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctxAfter.beginPath();
    ctxAfter.lineWidth = 20;
    ctxAfter.arc(points[i].pt.x, points[i].pt.y, 50, 0, 2 * Math.PI);
    ctxAfter.stroke();
  }
}
