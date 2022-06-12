/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** Contact Form ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/diegocoderr@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $Response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

/* ********** Skills ********** */

((d) => {
  const skillsContent = document.getElementsByClassName("skill-card"),
    skillsHeader = document.querySelectorAll(".skills-header");

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skill-card skills-close";
    }
    if (itemClass === "skill-card skills-close") {
      this.parentNode.className = "skill-card";
    }
  }

  skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
  });
})(document);

/* ********** ScrollSpy ********** */

const d = document;

function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.75],
  });

  $sections.forEach((el) => observer.observe(el));
}

d.addEventListener("DOMContentLoaded", (e) => {
  scrollSpy();
});

/* ********** Writing ********** */

const writing = () => {
  const $title1 = d.querySelector("#title1"),
    $title2 = d.querySelector("#title2"),
    $title3 = d.querySelector("#title3");
  $btn = d.querySelector("#btn-header");

  setTimeout(() => {
    $title2.classList.add("delay-2");
    $title2.classList.remove("close");
    $title1.classList.add("none-border");
  }, 1000);

  setTimeout(() => {
    $title3.classList.add("delay-3");
    $title3.classList.remove("close");
    $title2.classList.add("none-border");
  }, 2000);

  setTimeout(() => {
    $title3.classList.add("none-border");
  }, 3000);

  setTimeout(() => {
    $btn.classList.remove("close");
  }, 3100);
};

writing();
