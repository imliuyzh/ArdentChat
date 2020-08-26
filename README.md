![Demonstration](./demo.gif)
# ArdentChat
ArdentChat is a web application for people to have individual communication with each other. It was originally one of my assignments from my internship at Ardent Academy. It is also my first full-stack project that uses the MERN stack.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Running the Application
1. Install Node.js
2. Download/clone this repository to somewhere else and navigate to the folder in the command line
3. Open the ```ArdentChat``` folder
    - Go to the ```client``` folder and type ```yarn install``` to gather all the necessary packages 
    - Go to the ```server``` folder and type ```npm install``` to gather all the necessary packages
4. Follow this [tutorial](https://fullstackopen.com/en/part3/saving_data_to_mongo_db) to set up your MongoDB database
    - When you are done, create a file named ```config.js``` and put it under the ```server/util``` directory
5. Follow the template below for your ```config.js``` file
    - Should be simple with the SRV address provided by Atlas
    ``````
    const URI = 'mongodb+srv://<USERNAME>:<PASSWORD>@<SERVER-ADDRESS>/<APP-NAME>?retryWrites=true';
    module.exports = { URI };
    ``````
6. Type ```yarn start``` to run the front-end code and ```npm start``` for the back-end code
    - The front-end should be running on ```localhost:3000 ```and ```localhost:3001``` for the back-end unless you have other applications running simultaneously
7. Hit ```Ctrl+C``` on terminals running the front-end and back-end code to stop running

### Built With
- React.js
  - Material-UI
  - UUID
- MongoDB Atlas
  - Mongoose
- Node.js
  - nodemon
- Express.js
  - CORS
- Socket.IO

## Versioning
I used only Git bash for version management.

## Acknowledgments
I want to say thank you to my fellow interns in Ardent Academy for their assistance. Also, kudos to Dr. Li for providing this amazing opportunity to let me work in Ardent.
