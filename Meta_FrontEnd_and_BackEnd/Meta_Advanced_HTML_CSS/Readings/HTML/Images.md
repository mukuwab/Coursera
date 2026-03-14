# Key Concepts
src attribute: The src attribute specifies the path to the image file that is to be displayed on the webpage.

width and height attributes: These attributes define the dimensions of the image, allowing for control over its display size on the webpage.

Supported image file types: Web browsers support specific image file types such as .JPEG, .PNG, .GIF, and others, which are essential for proper image rendering.

<figure> and <figcaption> tags: These tags are used in conjunction with the <img> tag to provide a semantic description of the image, enhancing accessibility.

alt attribute: The alt attribute provides alternative text for the image, which is displayed if the image fails to load and is also used by screen readers for accessibility.

<img> tag: The <img> tag is used to embed images in a webpage, with the image's address specified by the src attribute.




This lesson will help refresh your knowledge of the <img> tag and how you can use it to embed images in webpages. 

The <img> tag is used to add an image to a web page. The image’s address is specified using the src attribute. For example, if you wanted to embed an image file named photo.png, you can do that with the following HTML. 

<img src="photo.png"> 

You can also specify the width and height of the image using the width and height attributes. For example, if the width of the photo is 640 pixels and the height of the photo is 480 pixels, you can use the following HTML. 

<img src="photo.png" width="640" height="480"> 

It is important to note that you can set the image to a larger or smaller size and the web browser will automatically scale the image. For example, you can update the previous HTML to half the width and height and the image would shrink by 50%. 

<img src="photo.png" width="320" height="240"> 

One useful feature of rendering images in the web browser is that the web browser can automatically keep the correct ratio of width to height. So for example, if you want to scale the image by 50%, you can simply set the width attribute and the web browser will automatically calculate the height. 

<img src="photo.png" width="320"> 

But what happens if the photo doesn’t load? Perhaps the file was accidentally deleted, or you mistyped the file name. Luckily, the web browser has a way to display some text when the image fails to load. This is done using the alt attribute. For example, you can display the text My Profile Photo using the alt attribute in the previous HTML. 

<img src="photo.png" width="320" alt="My Profile Photo"> 

It is important to ensure that screen reader accessibility software can interpret images displayed in the web browser. To support this, the <img> tag is combined with the <figure> and <figcaption> tags to provide a description of the image. The <img> tag is added inside the <figure> tag and the <figcaption> is specified after it. 



<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>


One last thing to note is that like videos and audio, the web browser only supports specific file types. These file types are: 

.APNG – Animated Portable Network Graphics 

.AVIF – AV1 Image Format 

.GIF – Graphics Interchange Format 

.JPEG / .JPG – Joint Photographic Expert Group image format 

.PNG – Portable Network Graphics 

.SVG – Scalable Vector Graphics 

.WEBP – Web Picture Format 


Images will be important as you build websites and ensuring they are accessible will provide a better user experience for all visitors. 