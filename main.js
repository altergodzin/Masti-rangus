
canvas = new fabric.Canvas("myCanvas");
blockY = 1;
blockX = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject = "";

function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (img) {
		blockImageObject = img;
		blockImageObject.scaleToHeight(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);

		blockImageObject.set({
			top: blockY,
			left: blockX
		});
		canvas.add(blockImageObject)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '69') {
		blockX = 0;
		newImage("yr.png");
	}
	if (keyPressed == '86') {
		blockX = 20;
		newImage("br.png");
	}

	if (keyPressed == '65') {
		blockX = 400;
		newImage("rr.jpg");
	}
	if (keyPressed == '82') {
		blockX = 700;
		newImage("gr.png");
	}
	if (keyPressed == '73') {
		blockX = 900;
		newImage("pr.png")
	}

}

