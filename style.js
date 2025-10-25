document.addEventListener('DOMContentLoaded', function () {
      // payment functions (exposed to global so inline onclick attributes still work)
      const paymentModal = document.getElementById('paymentModal');
      window.openModal = function () {
        if (!paymentModal) return;
        paymentModal.classList.remove('hidden');
        paymentModal.classList.add('flex');
      };
      window.closeModal = function () {
        if (!paymentModal) return;
        paymentModal.classList.add('hidden');
        paymentModal.classList.remove('flex');
      };
      // fixed header
      const head = document.getElementById('head');
      window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 0&&head) {
          head.style.position = 'fixed';
          head.style.top = '0';
          head.style.width = '100%';
        }
      });
      const listrightIcon = document.getElementById('listright');
      const lists = [
        "Iced latte",
        "Iced Cappucino",
        "Americano",
        "Iced Chocolate",
        "Matcha latte",
        "Green Tea",
        "Coconut Matcha latte",
        "Hot latte"
      ];
      let listPanel = null;
      function createListPanel() {
        listPanel = document.createElement('div');
        listPanel.id = 'listright-panel';
        // basic positioning and styles (you can convert to Tailwind classes if preferred)
        listPanel.style.position = 'fixed';
        listPanel.style.right = '12px';
        listPanel.style.top = '56px';
        listPanel.style.background = 'white';
        listPanel.style.color = '#1f2937';
        listPanel.style.padding = '10px';
        listPanel.style.borderRadius = '6px';
        listPanel.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
        listPanel.style.zIndex = '9999';
        listPanel.style.maxWidth = '200px';
        listPanel.style.fontSize = '14px';
        listPanel.style.cursor = "pointer";
        // Hover effect should be handled with CSS, not JS
        listPanel.innerHTML = lists.map(item => '<div style="padding:4px 0;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'" onmouseout="this.style.backgroundColor=\'white\'">' + item + '</div>').join('');
        
        document.body.appendChild(listPanel);
      }
      function toggleListPanel() {
        if (!listrightIcon) return;
        if (!listPanel) {
          createListPanel();
        } else {
          listPanel.classList.toggle('hidden');
        }
    }   
      if (listrightIcon) {
        listrightIcon.addEventListener('click', toggleListPanel);
        // accessibility: make keyboard-activatable
        listrightIcon.setAttribute('tabindex', '0');
        listrightIcon.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleListPanel();
          }
        });
      }
    });
    // login with js
    const loginForm = document.getElementById("loginform");
    window.openModals = function () {
      if (!loginForm) return;
      loginForm.classList.remove('hidden');
      loginForm.classList.add('flex');
    };
    window.closeModals = function () {
      if (!loginForm) return;
      loginForm.classList.add('hidden');
      loginForm.classList.remove('flex');
    };
    // Attach click handlers to specific trigger elements in the HTML instead of a global listener
      // online order
      const onlineOrder = document.getElementById("onlineOrder");
      const num1 = document.getElementById("num1");
      const num2 = document.getElementById("num2");
      const sumElem = document.getElementById("sum");
      
      function process() {
        const a = Number(num1.value) || 0;
        const b = Number(num2.value) || 0;
        const total = a + b;
        if (sumElem) {
          // support both input elements and normal elements
          if ('value' in sumElem) sumElem.value = total;
          else sumElem.textContent = total;
        }
        return total;
      }
      
      window.openModalM = function () {
        if (!onlineOrder) return;
        onlineOrder.classList.remove('hidden');
        onlineOrder.classList.add('flex');
      };
      window.closeModalM = function () {
        if (!onlineOrder) return;
        onlineOrder.classList.add('hidden');
        onlineOrder.classList.remove('flex');
      };
      // Do not call openModalM immediately or attach a global click handler here; attach to a specific trigger element instead