const express = require('express')
const app = express();
const path = require('path');

// use all files from public folder
app.use(express.static('public'));

// Set EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// tailwindcss file
const tailwindcss = '/css/style.css'

app.get('/', (req, res) => {
    res.render('home/home',{tailwindcss})
})

app.get('/courses', (req, res) => {
    res.render('courses/course')
})

app.get('/careers', (req, res) => {
    res.render('careers/careers')
})

app.get('/blog', (req, res) => {
    res.render('blog/blog')
})

app.get('/about', (req, res) => {
    res.render('aboutus/about')
})

// fallback route
app.use((req, res) => {
    res.status(404).render('partials/pageerror')
});

const Host = 3001
const Port = '127.0.0.1'

app.listen(Host, Port, () => {
    console.log(`Server running on http://${Port}:${Host}`)
})
