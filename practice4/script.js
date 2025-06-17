 
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll(".nav-btn");
      const underline = document.querySelector(".underline");
      const navbar = document.getElementById("navbar");

      // Initialize underline position
      setTimeout(() => {
        const activeBtn = document.querySelector(".nav-btn.active");
        moveUnderline(activeBtn);
        underline.classList.add('active');
      }, 100);

      function moveUnderline(button) {
        const buttonRect = button.getBoundingClientRect();
        const navRect = navbar.getBoundingClientRect();
        
        // Calculate new position and width
        const newLeft = buttonRect.left - navRect.left;
        const newWidth = buttonRect.width;
        
        // Animate with smooth easing
        underline.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        underline.style.width = `${newWidth}px`;
        underline.style.left = `${newLeft}px`;
        
        // Add pulse effect
        underline.style.transform = 'scaleY(1.5)';
        setTimeout(() => {
          underline.style.transform = 'scaleY(1)';
        }, 200);
      }

      buttons.forEach(btn => {
        btn.addEventListener('click', function() {
          // Update active button
          buttons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          // Move underline
          moveUnderline(this);
          
          // Add click effect
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
            this.style.transform = 'scale(1)';
          }, 200);
        });
      });

      // Handle window resize
      window.addEventListener('resize', () => {
        const activeBtn = document.querySelector(".nav-btn.active");
        if (activeBtn) moveUnderline(activeBtn);
      });
    });
