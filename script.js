
    

        // Assuming GSAP is included in your project
        // Ensure GSAP and ScrollTrigger are included in your project

        // Target all buttons within the specified sections
        const buttons = document.querySelectorAll('#equipment .btn-2, #equipment .btn-3, #equipment .btn-4, #equipment .btn-5');

        // Function to animate a single button with the specified effect
        function animateButton(button) {
            gsap.fromTo(button, {
                opacity: 0,
                scale: 0.5,
                filter: "blur(10px)"
            }, {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: button,
                    start: "top 100%",  // Start the animation when the image is 80% from the top of the viewport
                    end: "top 40%",    // End the animation when the image is 20% from the top of the viewport
                    scrub: true,
                    toggleActions: "play none none none"
                }
            });
        }

        // Apply the animation to each button
        buttons.forEach(animateButton);

        // Target all images within the specified sections
        const images = document.querySelectorAll('#equipment .row img');


        // Function to animate a single image based on scroll
        function animateImage(image, index) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: image,
                    start: "top 100%",  // Start the animation when the image is 80% from the top of the viewport
                    end: "top 40%",    // End the animation when the image is 20% from the top of the viewport
                    scrub: true,       // Smooth scrubbing based on the scroll position
                    toggleActions: "play none none none", // Only play the animation as the user scrolls down
                }
            });

            // Apply different animations based on image index
            switch (index) {
                case 0: // Image 1
                    tl.fromTo(image, {
                        opacity: 0,
                        x: -200,
                        rotate: -180,
                        transformOrigin: "50% 50%"
                    }, {
                        opacity: 1,
                        x: 0,
                        rotate: 0,
                        duration: 2,
                        ease: "bounce.out"
                    });
                    break;

                case 1: // Image 2
                    tl.fromTo(image, {
                        opacity: 0,
                        scale: 0.5,
                        filter: "blur(10px)"
                    }, {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 1.8,
                        ease: "back.out(1.7)"
                    });
                    break;

                case 2: // Image 3
                    tl.fromTo(image, {
                        opacity: 0,
                        y: 200,
                        scale: 0.5,
                        rotationY: 180
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotationY: 0,
                        duration: 1.8,
                        ease: "power4.out"
                    });
                    break;

                case 3: // Image 4
                    tl.fromTo(image, {
                        opacity: 0,
                        x: -100,
                        y: 100,
                        skewX: 20,
                        rotation: 45
                    }, {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        skewX: 0,
                        rotation: 0,
                        duration: 1.5,
                        ease: "circ.out"
                    });
                    break;

                case 4: // Image 5
                    tl.fromTo(image, {
                        opacity: 0,
                        x: -100,
                        skewX: -15
                    }, {
                        opacity: 1,
                        x: 0,
                        skewX: 0,
                        duration: 1.2,
                        ease: "power2.inOut"
                    });
                    break;

                case 5:
                    tl.fromTo(image, {
                        opacity: 0,
                        scale: 0.5,
                        filter: "blur(10px)"
                    }, {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 1.8,
                        ease: "back.out(1.7)"
                    });
                    break;
            }
        }

            // GSAP animation for .img1
                gsap.from(".img1", {
                    duration: 1.5,
                    opacity: 0,
                    x: -100,
                    ease: "power2.out",
                    delay: 0.5
                });

                // GSAP animation for .img2
                gsap.from(".img2", {
                    duration: 1.5,
                    opacity: 0,
                    y: 100,
                    ease: "power2.out",
                    delay: 1
                });

                // GSAP animation for .img3
                gsap.from(".img3", {
                    duration: 1.5,
                    opacity: 0,
                    x: 100,
                    ease: "power2.out",
                    delay: 1.5
                });
        // Apply the animation to each image
        images.forEach((image, index) => animateImage(image, index));

        // Create a GSAP timeline
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Repeat indefinitely with a 1-second delay

        // Rotate .img1
        tl.to(".img1", {
            rotateZ: 22360, // Rotate by 1 full rotation (360 degrees)
            duration: 10, // Duration of the rotation animation
            ease: "linear", // Linear animation for constant speed
        });

        // Rotate .img2 and .img3 simultaneously
        tl.to(".img2", {
            rotateZ: 760, // Rotate by 1 full rotation (360 degrees)
            duration: 10, // Duration of the rotation animation
            ease: "linear", // Linear animation for constant speed
        }, "<"); // Start this animation at the same time as the previous one

        tl.to(".img3", {
            rotateZ: 1600, // Rotate by 1 full rotation (360 degrees)
            duration: 10, // Duration of the rotation animation
            ease: "linear", // Linear animation for constant speed
        }, "<"); // Start this animation at the same time as the previous one

    const meteorContainer = document.querySelector('#intro');

    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');

        meteorContainer.appendChild(meteor);

        // Random starting position at the top of the container
        const x = Math.random() * meteorContainer.offsetWidth;
        const y = 0; // Start exactly at the top of the container

        gsap.set(meteor, { x: x, y: y }); // Set the initial position

        gsap.to(meteor, {
            x: x + Math.random() * 200 - 100,
            y: meteorContainer.offsetHeight + 100,
            duration: Math.random() * 3 + 2,
            ease: "power2.inOut",
            opacity: 0,
            scale: 0.5
        });

        // Create trail elements
        for (let i = 0; i < 10; i++) {
            const trail = document.createElement('div');
            trail.classList.add('meteor-trail');
            meteor.appendChild(trail);

            gsap.to(trail, {
                opacity: 0,
                scale: 0.5,
                duration: 1,
                delay: i * 0.1
            });
        }

        setTimeout(() => {
            meteor.remove();
        }, 3000);
    }

    setInterval(createMeteor, 300);

   const clientsContainer = document.querySelector('#equipment');

    function spawnMeteor() {
        const meteorElement = document.createElement('div');
        meteorElement.classList.add('meteor2');

        clientsContainer.appendChild(meteorElement);

        // Random starting position at the top of the container
        const startX = Math.random() * clientsContainer.offsetWidth;
        const startY = 200; // Start exactly at the top of the container

        gsap.set(meteorElement, { x: startX, y: startY }); // Set the initial position

        gsap.to(meteorElement, {
            x: startX + Math.random() * 200 - 100,
            y: clientsContainer.offsetHeight + 100,
            duration: Math.random() * 3 + 2,
            ease: "power2.inOut",
            opacity: 0,
            scale: 0.5
        });

        // Create trail elements
        for (let i = 0; i < 10; i++) {
            const trailElement = document.createElement('div');
            trailElement.classList.add('meteor-trail');
            meteorElement.appendChild(trailElement);

            gsap.to(trailElement, {
                opacity: 0,
                scale: 0.5,
                duration: 1,
                delay: i * 0.1
            });
        }

        setTimeout(() => {
            meteorElement.remove();
        }, 3000);
    }

    setInterval(spawnMeteor, 300);
