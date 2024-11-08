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
        setTimeout(looping, 500);
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