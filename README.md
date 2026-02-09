# Personal Website Frontend (Custom)

This is a static custom frontend for your site, designed to stay close to the current content structure at [niclin.me](https://niclin.me) while making updates easy.

## Start a dev build (local)

This project is static HTML/CSS/JS, so you can run it with a local server:

```bash
python3 -m http.server 3000
```

Then open:

- `http://localhost:3000`

Stop the server with `Ctrl + C`.

## Files

- `index.html`: page shell and mount points
- `styles.css`: visual design
- `src/site-data.js`: all editable content (sections/items/nested items)
- `src/app.js`: renderer that turns data into UI

## Edit content

Update `src/site-data.js`.

### Add a new section

```js
{
  id: "speaking",
  title: "Talks",
  description: "Selected talks and panels.",
  items: []
}
```

### Add an item

```js
{
  title: "Conference Talk",
  meta: "DevCon • 2026",
  summary: "Talk summary",
  bullets: ["Point one", "Point two"],
  links: [{ label: "Slides", url: "https://example.com/slides" }]
}
```

### Add nested items

```js
{
  title: "Featured Writings",
  children: [
    {
      title: "L2 Research",
      children: [
        { title: "Article A", links: [{ label: "Read", url: "https://..." }] }
      ]
    }
  ]
}
```

Any `item` can contain `children`, and children can contain their own `children` indefinitely.
