Introduction:

Semantic HTML tags improve the accessibility, readability, and maintainability of web pages by providing meaningful structure. Unlike generic tags like <div> or <span>, semantic tags like <header>, <nav>, and <section> convey the purpose of the content they enclose. This lab will guide you in converting a non-semantic webpage into a semantic one without altering the content or layout.

Goal:

The goal of this lab is to transform a non-semantic webpage into a well-structured, semantic webpage using appropriate HTML tags, ensuring accessibility, clarity, and adherence to modern web development practices while maintaining the page's original content and layout. 

Objectives:

Understand the purpose and usage of semantic HTML tags. 

Identify areas in non-semantic HTML that can be improved using semantic tags. 

Center-align elements such as images and text using Bootstrap utility classes.

Update a given webpage to use semantic HTML while preserving its content and layout.

Instructions:

Part 1: Understanding and Viewing the Initial Webpage:
Step 1: Open the index.html file present in the PROJECT folder. This file contains a basic webpage layout using non-semantic tags.

Step 2: Analyze the non-semantic tags: Review the script present in the index.html file to understand the structure and identify where generic tags (like <div>) are used.

Step 3: Start the live server and view the webpage layout:

At the bottom-right of the editor, click on the Go Live button.

Once the server is up and running, you will see an exposed port number (e.g., 5500). This means your server is now live. 

At the middle-left of the editor, click on the Browser Preview button to open a new Browser Preview tab.

In the browser, enter the following URL format (replacing <exposed port> with the actual port number shown in the editor): http://localhost:<exposed port>.  

Once the URL is entered correctly, the webpage will load, and you should see the Welcome to My Blog webpage based on the default layout defined in the index.html file. 



Part 2: Modify the HTML Structure to Use Semantic Tags: 
Step 1: Replace the <div> elements with appropriate semantic tags like <header>, <nav>, <main>, <section>, <article>, or <footer>. 

Step 2: Follow the detailed comments in the provided index.html file script to identify where semantic tags should be applied.

Step 3: Ensure that the page structure and layout remain unchanged.

Initial Non-Semantic Example:  

123
<div class="header">
    <h1>Welcome to My Blog</h1>
</div>
Refactored (modified) Semantic Example:

123
<header>
    <h1>Welcome to My Blog</h1>
</header>

Part 3: Save and Verify Your Changes: 
Step 1: After successfully modifying the index.html file, navigate to File > Save to save changes in the file.

Step 2: In the browser preview pane, click the refresh button and verify that the layout remains consistent after applying semantic tags in the html.index file.


Step 3: Close the server after completing the lab: Once you’re done with the lab, make sure to close the server to free up the port:  

Click on the exposed port number (e.g., 5500) at the bottom-right of VSCode.

You should see a notification confirming that the server is now offline (stopped).  

Key Takeaways:
Semantic HTML tags like <header>, <nav>, <main>, <section>, and <footer> provide meaning to web content, enhancing accessibility and SEO.  

Replacing non-semantic tags improves a webpage's structure and usability without affecting its appearance.

Validation tools help ensure that your HTML meets web standards and best practices. 

Final Step: Mark as Completed

Click the Mark as Completed button present below to mark the lab as Completed.



## Live Server

How to route to port 5500

enter url:
http://localhost:5500/