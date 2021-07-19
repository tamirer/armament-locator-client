// Converts image to canvas; returns new canvas element
function convertImageToCanvas(imageID) {
    var image = document.getElementById(imageID);
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);
    // image.style = "width: 400px";
    return canvas;
}


function writeResultToPage(imgDataOutput)
{
  console.log("writeResultToPage was called. imgDataOutput.data.length =", imgDataOutput.data.length);
  var canvas = document.createElement("canvas"); //  new HTMLCanvasElement();
  canvas.width = imgDataOutput.width;
  canvas.height = imgDataOutput.height;
    var ctx = canvas.getContext("2d");
    ctx.putImageData(imgDataOutput, 0, 0);
    var result = document.getElementById("result");
    result.appendChild(ctx.canvas);
}


function compareImages()
{        
    console.clear();
    var cnvBefore = convertImageToCanvas("imgBefore");
    var cnvAfter = convertImageToCanvas("imgAfter");

    var ctxBefore = cnvBefore.getContext("2d");
    var ctxAfter = cnvAfter.getContext("2d");

    let imgDataBefore = ctxBefore.getImageData(0,0,cnvBefore.width, cnvBefore.height);
    let imgDataAfter = ctxAfter.getImageData(0,0, cnvAfter.width, cnvAfter.height);   

    const hght = imgDataBefore.height;
    const wdth = imgDataBefore.width;

    var imgDataOutput = new ImageData(wdth, hght);

    var numDiffPixels = pixelmatch(imgDataBefore.data, imgDataAfter.data, 
                        imgDataOutput.data, wdth, hght, {threshold: 0.1});
    console.log("numDiffPixels =", numDiffPixels);
     // this line does not work
     writeResultToPage(imgDataOutput)

}


Document.getElementById("diff").addEventListener('click', compareImages);