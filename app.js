const express = require('express');
const bodyParser = require('body-parser');
const MarkdownIt = require('markdown-it');
const matter = require('gray-matter');

const app = express();
const md = new MarkdownIt();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const experience  = matter.read('./views/experience.md');
const education  = matter.read('./views/education.md');
const skills  = matter.read('./views/skills.md');
const languages  = matter.read('./views/languages.md');
const c_exp =  md.render(experience.content);
const c_edu =  md.render(education.content);
const c_ski =  md.render(skills.content);
const c_lan =  md.render(languages.content);

app.get('/', function(req,res) {
  res.render("main", {experience: c_exp, education: c_edu, skills: c_ski, languages: c_lan});
});


app.listen(3000, function() {
  console.log('Server is running.');
});
