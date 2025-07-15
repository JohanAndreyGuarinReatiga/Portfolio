// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  // Highlight active section in navigation
  window.addEventListener("scroll", () => {
    let current = ""
  
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id")
      }
    })
  
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
      if (link.classList.contains(current)) {
        link.classList.add("active")
      }
    })
  })
  
  
  // Project card interactions with individual URLs
  const projectCards = document.querySelectorAll(".project-card")
  
  // Define specific URLs for each project
  const projectUrls = {
    0: {
      // ip finder
      github: "https://github.com/JohanAndreyGuarinReatiga/JavaScript-Progressive-Project",
      demo: "https://java-script-progressive-project.vercel.app/",
    },
    1: {
      // character generator
      github: "https://github.com/JohanAndreyGuarinReatiga/Proyecto_JavaScript_GuarinJohan",
      demo: "https://proyecto-java-script-guarin-johan.vercel.app/index.html",
    },
    2: {
      // forum
      github: "https://github.com/hely15/Vexo-Foro",
      demo: "https://vexo-foro.vercel.app/",
    },
  }
  
  projectCards.forEach((card, index) => {
    const overlay = card.querySelector(".project-overlay")
    const buttons = overlay.querySelectorAll(".btn")
  
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation()
        const isGithub = this.innerHTML.includes("github")
  
        // Get URLs for the specific project
        const projectData = projectUrls[index]
        if (projectData) {
          const url = isGithub ? projectData.github : projectData.demo
          window.open(url, "_blank")
        } else {
          // Fallback for projects without defined URLs
          const url = isGithub ? "https://github.com/JohanAndreyGuarinReatiga" : "#"
          if (url !== "#") {
            window.open(url, "_blank")
          }
        }
      })
    })
  })
  