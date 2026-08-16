export default function IntroMenssage() {
    const roles = [
        "Full Stack Developer",
        "Frontend Web Developer",
        "Software Engineer"
    ];
    let titleContainer = document.querySelector("#title");
    
    // Clear and style container
    titleContainer.innerHTML = '';
    titleContainer.style.display = 'flex';
    titleContainer.style.flexDirection = 'column';
    titleContainer.style.alignItems = 'flex-start';
    titleContainer.style.width = 'fit-content';
    titleContainer.style.margin = '0 auto';
    titleContainer.style.gap = '8px';
    titleContainer.style.padding = '10px 0';
    
    let currentIndex = 0;
    
    // Create elements
    roles.forEach((role, i) => {
        let p = document.createElement('div');
        p.className = `role-option role-${i}`;
        p.style.fontSize = '1rem';
        p.style.fontWeight = 'bold';
        p.style.color = 'var(--color-background-three)';
        p.style.opacity = '0.5';
        p.style.transition = 'all 0.3s ease';
        p.innerHTML = `<span class="cursor" style="opacity:0; margin-right: 15px; color: var(--color-background-three);">></span><span class="role-text">${role}</span>`;
        titleContainer.appendChild(p);
    });

    // Add blink keyframes dynamically if not present
    if (!document.getElementById('blink-style')) {
        const style = document.createElement('style');
        style.id = 'blink-style';
        style.innerHTML = `
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .blink-cursor {
                animation: blink 0.5s step-end infinite !important;
            }
        `;
        document.head.appendChild(style);
    }

    function updateMenu() {
        // Reset all
        roles.forEach((_, i) => {
            let el = titleContainer.querySelector(`.role-${i}`);
            el.style.opacity = '0.5';
            el.style.color = 'var(--color-background-three)';
            el.style.transform = 'scale(1)';
            el.querySelector('.cursor').style.opacity = '0';
            el.querySelector('.cursor').classList.remove('blink-cursor');
        });

        // Highlight current
        let currentEl = titleContainer.querySelector(`.role-${currentIndex}`);
        currentEl.style.opacity = '1';
        currentEl.style.color = 'var(--color-background-three)'; // Use palette color
        currentEl.style.transform = 'scale(1.05)';
        currentEl.style.marginLeft = '5px';
        currentEl.querySelector('.cursor').style.opacity = '1';
        currentEl.querySelector('.cursor').style.color = 'var(--color-background-three)';
        currentEl.querySelector('.cursor').classList.add('blink-cursor');

        // Move to next
        currentIndex = (currentIndex + 1) % roles.length;
    }

    // Initial update
    updateMenu();

    // Cycle every 2.5 seconds
    setInterval(updateMenu, 2500);
}