## Minimum Viable Product

- [x] A list of Star Wars Characters rendered to the screen.
- [x] You must have at least one list element for each star wars character in the data set.
- [x] The list elements must all be minimally styled. (Don't rely on browser default styles.)

Required best practices:

- [x] Consistent naming. Examples: variables, functions, classes, and files.
- [x] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [x] Consistent quotation usage.
- [x] Spell-check.
- [x] Schedule time to review, refine and reassess your work.


# Break Down - This App should ... 

> A list of Star Wars Characters rendered to the screen.
  >> Component StarWarsList.js -- to hold the list of charcters

> Have at least one list element for each star wars character in the data set.
  >> Component StarWarsCharacter.js -- will display an li for each charcter
    >> li -- starwarsChars.name
      >> Once get name to display consider making display the array of films the character is in starwarsChars.films

> The list elements must all be minimally styled. 
  >> styles will go in StarWars.css


## Stretch Problems

- [ ] Build a pagination system that will allow you to load the next page of data

- Take note on the data that's coming back from the server call in our `getCharacters()`.
- console.log() the data coming back from the server.
- Notice that there are `next` `previous` fields that give you a URL.
- You have a function that will get chars called `getCharacters` you'll want to just call this function and supply it with the proper fields. You'll need to set this up on state to do this.

```js
 .then(data => {
    console.log(data); <-- Log data here to find the fields you will need.
    this.setState({ starwarsChars: data.results });
  })
```

- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.

- Be mindful of the `fetch API` that is now built into most modern browsers [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- Your data coming back from Dogs should be formatted in JSON format.
