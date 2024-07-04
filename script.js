function lenisJs() {
    const lenis = new Lenis();
  
    lenis.on("scroll", ScrollTrigger.update);
  
    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });
  
    gsap.ticker.lagSmoothing(0);
  }
  
  lenisJs();



  function loaderAnimation() {
    const loader = document.querySelector(".loader");
    const loaderCursor = document.querySelector(".loader-cursor");
  
    loader.addEventListener("mousemove", (dets) => {
      gsap.to(loaderCursor, {
        left: dets.x,
        top: dets.y,
      });
    });
  
    let loaderSplittedText = "";
  
    document
      .querySelector(".loader>h1")
      .textContent.split("")
      .forEach((text) => {
        loaderSplittedText += `<span>${text}</span>`;
      });
  
    document.querySelector(".loader>h1").innerHTML = loaderSplittedText;
  
    loader.addEventListener("click", () => {
      tl.to(".loader>h1>span", {
        opacity: 0,
        stagger: -0.1,
      });
      tl.to(".loader", {
        top: "-100vh",
        ease: "power3.inOut",
        duration: 1,
      });
  
      tl.from(".page1 img", {
        opacity: 0,
        stagger: 0.1,
      });
  
      tl.from(".page1-text", {
        height: 0,
        opacity: 0,
      });
    });
  }
  
  loaderAnimation();


  
  const tl = gsap.timeline();
  function imgGalleryGsap() {
    tl.to(".page1-img-part3", {
      height: "100%",
      width: "100%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1-img-gallery",
        start: "top 0%",
        end: "top -100%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    })
      .to(".page1-img-part1", {
        left: "-35%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".page1-img-gallery",
          start: "top 0%",
          end: "top -100%",
          //   pin: true,
          scrub: 1,
          //   markers: true,
        },
      })
  
      .to(".page1-img-part2", {
        left: "-22%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".page1-img-gallery",
          start: "top 0%",
          end: "top -100%",
          //   pin: true,
          scrub: 1,
          //   markers: true,
        },
      })
      .to(".page1-img-part4", {
        right: "-22%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".page1-img-gallery",
          start: "top 0%",
          end: "top -100%",
          //   pin: true,
          scrub: 1,
          //   markers: true,
        },
      })
  
      .to(".page1-img-part5", {
        right: "-35%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".page1-img-gallery",
          start: "top 0%",
          end: "top -100%",
          //   pin: true,
          scrub: 1,
          //   markers: true,
        },
      })
  
      .from(".page1-img-part3 > h1", {
        y: 100,
        fontSize: "1vw",
        opacity: 0,
        scrollTrigger: {
          scroller: "body",
          trigger: ".page1-img-gallery",
          start: "top 0%",
          end: "top -100%",
          //   pin: true,
          scrub: 1,
          //   markers: true,
        },
      });
  }
  
  imgGalleryGsap();
  
  const page2Img = document.querySelectorAll(".page2 img");
  const page2Text = document.querySelectorAll(".page2-img-text");
  
  page2Img.forEach((img, index) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(page2Text[index], {
        opacity: 1,
        y: 10,
      });
    });
  
    img.addEventListener("mouseleave", () => {
      gsap.to(page2Text[index], {
        opacity: 0,
        y: 0,
      });
    });
  });
  
  function page3Animation() {
    tl.to(".page3-y-top", {
      top: "-55%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        start: "top 0",
        end: "top -100%",
        // markers: true,
        scrub: 1,
        pin: true,
      },
    });
  
    tl.to(".page3-y-bottom", {
      top: "45%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        start: "top 0",
        end: "top -100%",
        // markers: true,
        scrub: 1,
        // pin: true,
      },
    });
  }
  
  page3Animation();
  
  tl.from(".page4-text", {
    top: "100%",
    opacity: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page4",
      scrub: 1,
      pin: true,
      // markers: true,
      start: "top 0",
      end: "top -100%",
    },
  });
  
  gsap.to(".rotate-img", {
    rotate: 360,
    duration: 40,
    repeat: -1,
  });
  
  let lastScrollTop = 0;
  
  window.addEventListener("scroll", function () {
    let currentScrollTop = window.scrollY;
  
    if (currentScrollTop > lastScrollTop) {
      gsap.to(".rotate-img", {
        rotate: 360,
        duration: 40,
        repeat: -1,
      });
    } else {
      gsap.to(".rotate-img", {
        rotate: -360,
        duration: 40,
        repeat: -1,
      });
    }
    lastScrollTop = currentScrollTop;
  });
  
  function page6Part1Animation() {
    tl.from(".page6-part1-left-img1", {
      y: 350,
      scale: 0.9,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6-part1-left-img1",
        start: "top 100%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });
  
    tl.from(".page6-part1-right-img1", {
      y: 450,
      scale: 0.9,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6-part1-right-img1",
        start: "top 100%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });
  
    tl.from(".page6-part1-left-img2", {
      y: 350,
      scale: 0.9,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6-part1-left-img2",
        start: "top 100%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });
  
    tl.from(".page6-part1-right-img2", {
      y: 350,
      scale: 0.9,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6-part1-right-img2",
        start: "top 100%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });
  
    tl.from(".page6-part1-left-img3", {
      y: 350,
      scale: 0.9,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6-part1-left-img3",
        start: "top 100%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });
  
    const page6Text = document.querySelector(".page6-part1-text");
    let clutter = "";
  
    page6Text.textContent.split("").forEach((text) => {
      clutter += `<span>${text}</span>`;
    });
    page6Text.innerHTML = clutter;
  
    gsap.to(".page6-part1-text>span", {
      color: "#A39F9A",
      stagger: 0.1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6-part1-text>span",
        start: "top 60%",
        end: "top -100%",
        scrub: 1,
        // markers: true,
      },
    });
  }
  page6Part1Animation();
  
