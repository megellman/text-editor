# Text Editor
![license badge](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [git-scm.com](https://git-scm.com/)     |    
| Node.js | [nodejs.org/docs](https://nodejs.org/docs/latest-v16.x/api/) |
| Heroku | [devcenter.heroku.com](https://devcenter.heroku.com/categories/reference)
| Express.js | [expressjs.com](https://expressjs.com/en/guide/routing.html)
| Webpack | [webpack.js.org](https://webpack.js.org/)


## Description

[Visit the Deployed Site](https://just-a-text-editor1.herokuapp.com/)
    
This project is a text editor application that has data persistence. This can be run in the browser and can be downloaded as well. 


  ## Table of Contents
- [Text Editor](#text-editor)
  - [Technology Used](#technology-used)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Code Example](#code-example)
  - [Usage](#usage)
  - [Author Info](#author-info)
    - [Megan Ellman](#megan-ellman)
  - [License](#license)
  - [Questions](#questions)

## Code Example

```
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ content: content, id: 1 });
  const result = await request;
  console.log('Data saved to the database!', result);
}
```
Each time that a user adds content to the editor and clicks outside of it, the putDb is run. It opens the jate database, establlishes a read/write transaction, opens the object store for jate, and stores the content. The content is saved with the content value stored in the content key and given an id of 1. This means that every time content is added, this content with the id of 1 will be overridden with the current content in the editor.

## Usage
  
This project can be used for text editting.

## Author Info

### Megan Ellman

[LinkedIn](https://www.linkedin.com/in/megan-ellman/)

[GitHub](https://github.com/megellman)

[Portfolio](https://megellman.github.io/portfolio/)
       
## License
  
  This project is covered under the MIT license. For more information please click [here](https://choosealicense.com/)

## Questions

[GitHub](github.com/megellman)

If you have any additional questions, you can reach me at meganlellman@gmail.com