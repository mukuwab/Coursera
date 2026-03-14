Introduction:

Efficiently organizing files and directories is a key skill for developers. The command line provides powerful tools to create and manage directory structures, enabling you to set up projects or handle files programmatically.

In this lab, you will practice creating and manipulating directories and files in a structured manner. By the end of this exercise, you will have created a specific directory structure with nested directories and files, while mastering basic file operations.

Goal:

Create and manipulate a directory structure containing files using command-line commands. 

Objectives: 

Create a working directory named lab.

Create subdirectories dir1 and dir2 inside the lab directory.

Create, move, and inspect files across directories and subdirectories.

 Learner Instructions:

Step 1: Open a Terminal:

Open the terminal by navigating to the Terminal menu and selecting New Terminal.

Step 2: Create the lab directory:

Type the following command and press Enter:

    mkdir lab

Step 3: Navigate to the lab directory:

Enter the lab directory:

    cd lab

Step 4: Create a file in the lab directory:

Create a file named file1.txt:

    touch file1.txt

Step 5: Create the dir1 directory:

Create a subdirectory dir1:

    mkdir dir1

Step 6: Move the file to dir1:

Move file1.txt into the dir1 directory:

    mv file1.txt dir1/

Step 7: Create a new file:

Create a file named file2.txt:

    touch file2.txt

Step 8: Create nested directories:

Create dir2 and a subdirectory dir3 inside it:

    mkdir -p dir2/dir3

Step 9: Move file2.txt into dir3:

Move the file into the nested dir3 directory:

    mv file2.txt dir2/dir3/

Step 10: Create a file in dir2:

Navigate to the dir2 directory:

    cd dir2

Create a file named file3.txt:

    touch file3.txt

Step 11: Move file3.txt to lab:

Move file3.txt to the parent lab directory:

    mv file3.txt ../

Step 12: Navigate to lab:

Return to the lab directory:

    cd ..

Step 13: List contents of dir1:

Navigate to dir1:

    cd dir1

List all files and directories:

    ls -l

Step 14: Inspect dir2 and dir3:

Navigate to dir2:

    cd ../dir2

List the contents:

    ls -l

Navigate to dir3:

    cd dir3

List the contents:

    ls -l