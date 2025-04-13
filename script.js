const texts = [
  "Hello, I'm Sarika!",
  "Tech Enthusiast | Web Developer | CSE Student"
];

let i = 0;
let j = 0;
const speed = 60;

function typeWriter() {
  if (j < texts.length) {
    if (i < texts[j].length) {
      if (j === 0) {
        document.getElementById("typewriter-title").innerHTML += texts[j].charAt(i);
      } else {
        document.getElementById("typewriter-desc").innerHTML += texts[j].charAt(i);
      }
      i++;
      setTimeout(typeWriter, speed);
    } else {
      i = 0;
      j++;
      setTimeout(typeWriter, speed);
    }
  }
}

typeWriter();

    // Loading screen on page load
    window.onload = function () {
        const loadingScreen = document.getElementById('loadingScreen');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1300);
        type(); // Call typing effect here after page load
    };

    // Page change with loading
    function changePage(event, page) {
        const loadingScreen = document.getElementById('loadingScreen');
        const links = document.querySelectorAll('.navbar a');
        links.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');

        loadingScreen.style.display = 'flex';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }

 

    function toggleTab() {
        var tab = document.getElementById("hiddenTab");
        tab.classList.toggle("active");
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert("Thank you for contacting me! I'll get back to you soon.");
        event.target.reset();
    } 