# Node2Know — EJS Intro

A starting point for using **EJS (Embedded JavaScript)** with Express.

This demo covers the basics of setting up a view engine and rendering static templates.

Core concepts:

- Setting the view engine
- Promoting static assets (CSS, images)
- Rendering views with `res.render()`
- Serving static HTML with `res.sendFile()`

Example:

```js
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index"));
```

---

## ✅ Prereqs

- **Node.js**
- **npm**

Check:

```bash
node -v
npm -v
```

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm run dev
```

---

## 🧪 Try it

### Home Page (EJS)

Open:

- `http://localhost:3000/`

Renders `views/index.ejs`.

### Static Profile (HTML)

Open:

- `http://localhost:3000/josh`

Serves `pages/josh.html` via `res.sendFile()`.

### About Page (HTML)

Open:

- `http://localhost:3000/about`

Serves `pages/about.html` via `res.sendFile()`.

---

## 🧠 Key Code

### View Engine Setup

```js
// app.js
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
```

### Rendering

```js
// routers/indexRouter.js
res.render("index");
```

### Static Files

```js
// app.js
app.use(express.static("public"));
```

---

## 📁 Project Structure

```txt
.
├── app.js
├── public/          # Static assets (css, images)
├── views/           # EJS templates
├── pages/           # Static HTML pages
├── routers/         # Route handlers
└── README.md
```

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-02-01-A-EJS-Intro.git

---

## License

**Node2Know-LEARN-1.0**
