// scripts/dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        console.log('clicked-darkmode');
        document.body.classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('main').classList.toggle('dark-mode');
        document.querySelector('.container').classList.toggle('dark-mode');
        document.querySelectorAll('.course').forEach(course => {
            course.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.course-duration').forEach(duration => {
            duration.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.buy-now').forEach(button => {
            button.classList.toggle('dark-mode');
        });
        toggleButton.classList.toggle('dark-mode');
    });
});

console.log("dark-mode.js loaded");

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('dark-mode-toggle');
//     toggleButton.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//         document.querySelector('nav').classList.toggle('dark-mode');
//         document.querySelector('.container').classList.toggle('dark-mode');
//         document.querySelectorAll('.course').forEach(course => {
//             course.classList.toggle('dark-mode-course');
//         });
//         document.querySelectorAll('.course-duration').forEach(duration => {
//             duration.classList.toggle('dark-mode');
//         });
//         document.querySelectorAll('.buy-now-button').forEach(button => {
//             button.classList.toggle('dark-mode-button');
//         });
//         toggleButton.classList.toggle('dark-mode-toggle');
//         toggleProfileIcon(); // Call function to toggle profile icon
//     });
// });

// // Function to toggle profile icon visibility and color
// const toggleProfileIcon = () => {
//     const profileIcon = document.querySelector('.nav-links img');
//     if (profileIcon) {
//         profileIcon.classList.toggle('dark-mode-profile');
//     }
// };

// console.log("dark-mode.js loaded");
