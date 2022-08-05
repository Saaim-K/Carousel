let img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
function handler(event) {
    let x = event.offsetX; //Where the mouse is clicked on the x axis
    let clientWidth = event.target.clientWidth; //Screen width
    let clickPercent = Math.floor((x) * 100 / clientWidth); //Percentage of the screen clicked
    let currentImage = document.getElementById('slide').src; //Getting src of the current image
    let currentUrl = currentImage.split('images/')[1]; //Splitting the src to get the image name
    let currentIndex = (img.indexOf(currentUrl)); //Using current URL to get the index of the image from the array
    let nextIndex = (img.indexOf(currentUrl) + 1); //Getting the index of the next image
    if (clickPercent > 25) {
        document.getElementById('slide').src = `images/${img[nextIndex]}`;//Changing the src of the image using template literal
        if (nextIndex == img.length) {
            document.getElementById('slide').src = `images/${img[0]}`;
        }
    } else {
        let prevIndex = (img.indexOf(currentUrl) - 1);
        document.getElementById('slide').src = `images/${img[prevIndex]}`;
        if (prevIndex < 0) {
            document.getElementById('slide').src = `images/${img[img.length - 1]}`;
        }
    }

    // console.log(event);
    // console.log("Offset:X", event.offsetX);
    // console.log("ClientWidth", event.target.clientWidth);
    // console.log("Click Percent:", clickPercent, "%");
    // console.log("Current Image:", currentImage);
    // console.log("Current Image URL:", currentUrl);
    // console.log("Current Image Index:", currentIndex);
    // console.log("Next Image Index:", nextIndex);

}
setInterval(() => {
    let currentImage = document.getElementById('slide').src;
    let currentUrl = currentImage.split('images/')[1];
    let currentIndex = (img.indexOf(currentUrl)); //
    let nextIndex = (img.indexOf(currentUrl) + 1);
    document.getElementById('slide').src = `images/${img[nextIndex]}`;
    if (nextIndex == img.length) {
        document.getElementById('slide').src = `images/${img[0]}`;
    }
}, 3000);
