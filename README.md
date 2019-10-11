### Pokémon database

#### Important dependencies

* Ant Design: I've used this UI library with a set of pre-built React components such as Slider and Input. Also, this app uses its default font.
* Bootstrap: grid used, nothing else.
* Jest: for testing.
* React router: created navigation for new pages containing pokémon description.

#### Architecture

I think that usage of Redux is an overkill solution for small applications like this one. That's why I decided to use "lift shared state up" solution instead. Here's the diagram showing components interactions. I haven't listed `Header.js` because it renders directly in `App.js`.

![Diagram](./img/diagram.png)