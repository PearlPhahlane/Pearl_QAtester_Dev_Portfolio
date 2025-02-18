//Name Type Writer Effect 

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

//Image Bounce Effect

document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("bounce-image");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.add("animate-bounce-three"); // Add bounce class to trigger animation
          observer.unobserve(img); // Stop observing after bounce-in
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(img);
});

//Theme Toggle

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");
  const iconLight = document.getElementById("icon-light");
  const iconDark = document.getElementById("icon-dark");
  const htmlElement = document.documentElement; // Target the <html> element

  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    htmlElement.classList.add("dark"); // Apply dark mode if saved
    iconLight.classList.add("hidden");
    iconDark.classList.remove("hidden");
  } else {
    htmlElement.classList.remove("dark"); // Apply light mode if saved
    iconLight.classList.remove("hidden");
    iconDark.classList.add("hidden");
  }

  // Add event listener to toggle theme on button click
  themeToggleButton.addEventListener("click", function () {
    const isDarkMode = htmlElement.classList.toggle("dark");

    // Toggle icons visibility
    iconLight.classList.toggle("hidden", isDarkMode);
    iconDark.classList.toggle("hidden", !isDarkMode);

    // Save theme preference in localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});

//Progress Bars 

document.addEventListener("DOMContentLoaded", function () {
  // Function to animate the progress bar to its target width
  function animateProgress(bar) {
    let width = 0;
    const target = parseInt(bar.getAttribute("data-target")); // Get target from data attribute

    function increaseWidth() {
      if (width < target) {
        width++;
        bar.style.width = width + "%";
        setTimeout(increaseWidth, 10); 
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
  const progressJira = document.getElementById("progress-jira");
  const progressHtml = document.getElementById("progress-html");
  const progressDevTools = document.getElementById("progress-dev-tools")
  const progressCss = document.getElementById("progress-CSS");
  const progressTailwind = document.getElementById("progress-tailwind");
  const progressJavaScript = document.getElementById("progress-JS-react");
  const progressGit = document.getElementById("progress-GIT");
  
  

  progressJira.setAttribute("data-target", "100");
  progressHtml.setAttribute("data-target", "100");
  progressDevTools.setAttribute("data-target", "100");
  progressCss.setAttribute("data-target", "100");
  progressTailwind.setAttribute("data-target", "85");
  progressJavaScript.setAttribute("data-target", "85");
  progressGit.setAttribute("data-target", "100");



  // Observe each progress bar
  observer.observe(progressJira);
  observer.observe(progressHtml);
  observer.observe(progressDevTools);
  observer.observe(progressCss);
  observer.observe(progressTailwind);
  observer.observe(progressJavaScript)
  observer.observe(progressGit);
});


//Education Swipe Up Animation

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