Introduction:

In this lab, you will create a personal webpage using HTML and CSS and then view it in a web browser using a local server.

Goal:

The goal of this lab is to create a personal webpage using HTML and CSS that includes an image, lists, headings, and a hyperlink. Learn to apply basic HTML structure and CSS styling.  

Objectives:

Use HTML to structure a webpage, including images, lists, headings, and links.

Style the webpage using CSS to enhance visual appeal. 

Instructions:

Part 1: Creating the HTML Document:
Set up the basic HTML structure: 

Open the index.html file present under the SRC folder. This is where you will write your HTML code.

Create the basic structure with <!DOCTYPE html>, <html>, <head>, and <body> tags.
<!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html>  

Set the document title: 

Add a <title> element in the <head> section. Set the title to your name.
<head>
   <title>Your Name</title>  
</head>

Link to the CSS file: 

 Link the styles.css file inside the <head> element.    
<head>
   <title>Your Name</title>  
   <link rel="stylesheet" href="styles.css">  
</head>

Create divider elements:

Add five <div> elements inside the <body>.

Add your name as a heading:

 Add an <h1> tag inside the first <div> to display your name.

Add an image:

Insert an <img> tag in the second <div> to display photo.jpg. Assign an id of photo.
<div>
   <img src="photo.jpg" id="photo" alt="My Photo">  
</div> 

Add a heading for music artists:

In the third <div>, add an <h2> for "Favorite Music Artists."

Add an unordered list <ul> with five list items <li> naming your top five artists.

Add a heading for films:

In the fourth <div>, add an <h2> for "Favorite Films."

Add an ordered list <ol> with five <li> elements naming your top five favorite films.

Add a hyperlink:

In the last <div>, add an <a> tag linking to your Facebook profile or https://www.meta.com/.

Use "My Profile" as the link text.
<div>
   <a href="https://www.meta.com/" traget="_blank">My Profile</a>   
</div>

Part 2:  Style the Webpage Using CSS: 
Open the styles.css file present under the SRC folder. This is where you define your webpage styles.

Style the image: Add a CSS rule for the image with id="photo".

Set the border to 2px solid blue.

Style the main heading: Add a CSS rule for the <h1> containing your name. 

Set its color to blue.

Style subheadings: Add a CSS rule for all <h2> elements.

Set their color to grey.

Style the divider elements: Add a CSS rule for all <div> elements.

Apply a margin of 4px. 

Part 3: Viewing Your HTML Document in the Browser: 
Start the live server:

At the bottom-right of the editor, click on the Go Live button.

Once the server is up and running, you will see an exposed port number (e.g., 5500). This means your server is now live.

Open the browser preview: At the middle-left of the editor, click on the Browser Preview button to open a new Browser Preview tab.

Enter the URL in the browser: In the browser, enter the following URL format (replacing <exposed port> with the actual port number shown in the editor): http://localhost:<exposed port>

Verify the created and modified webpage: Check that the webpage is created successfully, displaying the styles that you have applied to it. 

Close the server after completing the lab: Once you’re done with the lab, make sure to close the server to free up the port: 

Click on the exposed port number (e.g., 5500) at the bottom-right of VSCode. 

You should see a notification confirming that the server is now offline (stopped). 

Key Takeaways:
HTML is used to structure content, while CSS styles the appearance.

Dividing content into sections with <div> tags helps organize a webpage.

Linking a CSS file allows for reusable and centralized styling.

Setting attributes like id enables targeted styling in CSS.

Final Step: Submit Your Code:

Go to File > Save to ensure your work is saved.

Submit your assignment: Click the "Submit Assignment" button in the Lab toolbar.  

Your code will be autograded and feedback will be available shortly on the Grades tab.