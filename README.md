# **Bowdoin Mentors**
## **GitHub**
https://github.com/williamwarlick/BowdoinMentors

## **Setup**

Setting up Bowdoin Mentors is very simple. Just drag and drop the BowdoinMentors code folder anywhere on your computer.
Make sure you have python3 installed on your system.

## **Configuring and running the website**

1. Depending on your machine's operating system, open up Terminal or Command Prompt.
2. Navigate to BowdoinMentors source code folder, ie. ```cd git/BowdoinMentors/```. If you are unsure if you are in the correct directory, type ```ls``` in the console and make sure index.html exists within the folder.
3. In the console, run a python server by typing: ```python3 -m http.server 8000```
4. Open up a browser of your choice (the website was tested on both Chrome and Safari) and navigate to 'localhost:8000'
5. Check that you have successfully opened up the Bowdoin Mentors sign in page.

## **Using the website**

To begin using Bowdoin Mentors, a user must create an account through the Registration button. The user can choose whether they want to sign up as a mentee or a mentor, and depending on that choice, they will be directed to different pages. *Note: this prototype saves user account information in localStorage so make sure to use the same browser throughout sessions.

If a user forgot their password, they can click the 'Forgot Password' button and enter their email to receive the corresponding password.

Once the user successfully creates an account and signs in, they should see a list of Bowdoin alumni. They can then browse through to find a mentor who matches their goals and interests most. To help with organization, users can mark each mentor they plan to reach out to so they do not forget. All mentors include a method of contacting them, whether it is email, phone, or LinkedIn. 

If the user wants to change their account details, navigate to Account and change the fields as necessary.

Lastly, if there are any comments or concerns, the 'Contact Us' page includes a form to submit those comments or concerns.

