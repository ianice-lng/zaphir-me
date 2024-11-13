const app = document.getElementById('writer');
const appLearn = document.getElementById('writerLearns');
const logo = document.getElementById('logo');
const logoDeco = document.getElementById('logoDeco');
const pseudo = document.getElementById('pseudo');
const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});
typewriter
    .pauseFor(500)
    .typeString('<span id="html">HTML</span>').pauseFor(100).typeString("/").pauseFor(100).typeString('<span id="css">CSS</span>').pauseFor(1500).deleteAll()
    .typeString('<span id="javascript">JavaScript</span>').pauseFor(500).typeString(' and <span id="nodejs">NodeJS</span>').pauseFor(1000).deleteChars(11).pauseFor(500).deleteAll()
    .typeString('<span id="python">Python</span>').pauseFor(1500).deleteAll()
    .start();
    const typewriterLearn = new Typewriter(appLearn, {
        loop: true,
        delay: 75,
    });
    typewriterLearn
        .pauseFor(500)
        .typeString('<span id="react">React</span>').pauseFor(1500).deleteAll()
        .typeString('<span id="java">Java</span>').pauseFor(1500).typeString(' and <span id="kotlin">Kotlin</span>').pauseFor(1000).deleteChars(11).pauseFor(500).deleteAll()
        .typeString('<span id="php">PHP</span>').pauseFor(1500).deleteAll()
        .start();
    
fetch("https://api.zaphir.me/discord/info/zaphir").then(response => response.json()).then(data => {
    console.log(data);
    logo.src = data.avatar;
    logoDeco.src = data.avatarDecoration;
    logo.style.borderRadius = "50%";
    logo.style.width = "50px";
    logoDeco.style.width = "60px";
    pseudo.textContent = data.globalName;
})

