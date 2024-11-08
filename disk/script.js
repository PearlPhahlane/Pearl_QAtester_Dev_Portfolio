function type() {
    let myName = "Pearl Phahlane"
    let nameArr = myName.split("");

    function looping() {
        if(nameArr.length>0) {
            let n = nameArr.shift();
            document.getElementById("main-heading").innerHTML+=n;
        } else {
            return false;
        }
        setTimeout(looping, 400);
    }
    looping()
}
type()

/*function deleting(){

    nameVisible = document.getElementById("main-heading").innerHTML.split("");
    if(nameVisible.length>0){
        nameVisible.pop();
        document.getElementById("main-heading").innerHTML = nameVisible.join("");
    } else {
        type();
        return false
    }
    setTimeout(deleting,500)
}
type()*/



document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("fade-image");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        img.style.opacity = 1 ;
        observer.unobserve(img); //stop onserving after fade-in
      }
    });
  }, {threshold: 0.5});
  observer.observe(img);
});

//Theme Toggle

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");
  const iconLight = document.getElementById("icon-light");
  const iconDark = document.getElementById("icon-dark");

  themeToggleButton.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark"); // Toggles dark mode class on <html>

    // Toggle the icons
    iconLight.classList.toggle("hidden");
    iconDark.classList.toggle("hidden");
  });

  // Optional: Persist dark mode across page reloads
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    iconLight.classList.add("hidden");
    iconDark.classList.remove("hidden");
  }

  themeToggleButton.addEventListener("click", function () {
    const isDarkMode = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Function to animate the progress bar to its target width
  function animateProgress(bar) {
    let width = 0;
    const target = parseInt(bar.getAttribute("data-target")); // Get target from data attribute

    function increaseWidth() {
      if (width < target) {
        width++;
        bar.style.width = width + "%";
        setTimeout(increaseWidth, 10); // Adjust timing for speed
      }
    }
    increaseWidth();
  }

  // Intersection Observer to watch for when the progress bars enter the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgress(entry.target); // Start animation when element is visible
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the element is visible

  // Select progress bars and set their target widths as data attributes
  const progressHtml = document.getElementById("progress-html");
  const progressCss = document.getElementById("progress-CSS");
  const progressTailwind = document.getElementById("progress-tailwind");
  const progressJavaScript = document.getElementById("progress-JS");
  const progressReact = document.getElementById("progress-react");
  const progressGit = document.getElementById("progress-GIT");
  
  

  progressHtml.setAttribute("data-target", "100");
  progressCss.setAttribute("data-target", "100");
  progressTailwind.setAttribute("data-target", "85");
  progressJavaScript.setAttribute("data-target", "65");
  progressReact.setAttribute("data-target", "50");
  progressGit.setAttribute("data-target", "100");



  // Observe each progress bar
  observer.observe(progressHtml);
  observer.observe(progressCss);
  observer.observe(progressTailwind);
  observer.observe(progressJavaScript)
  observer.observe(progressReact);
  observer.observe(progressGit);
});

document.addEventListener("DOMContentLoaded", function() {
  const educationSection = document.getElementById("education");

  const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        educationSection.classList.add("animate-swipeUp", "opacity-100", "translate-y-0");
        observer.unobserve(educationSection); //stop observing after animation
      }
    });
  }, {threshold: 0.2});
  observer.observe(educationSection)
})