alert("Welcome to Danny's CV!");

const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Clone first and last items
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');

container.appendChild(firstClone);
container.insertBefore(lastClone, items[0]);

// Update reference after cloning
const updatedItems = container.querySelectorAll('.carousel-item');
let activeIndex = 1; // Start from the actual first item (after clone)

function updateCarousel() {
  updatedItems.forEach((item, index) => {
    item.style.filter = 'blur(3px)';
    item.style.opacity = '0.5';
    item.style.transform = 'scale(0.85)';
  });

  const activeItem = updatedItems[activeIndex];
  activeItem.style.filter = 'none';
  activeItem.style.opacity = '1';
  activeItem.style.transform = 'scale(1)';

  const containerCenter = container.offsetWidth / 2;
  const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
  const scrollTo = itemCenter - containerCenter;

  container.scrollTo({
    left: scrollTo,
    behavior: 'smooth'
  });
}

function jumpToReal(index) {
  activeIndex = index;
  container.scrollTo({
    left: updatedItems[activeIndex].offsetLeft - container.offsetWidth / 2 + updatedItems[activeIndex].offsetWidth / 2,
    behavior: 'auto'
  });
  updateCarousel();
}

prevBtn.addEventListener('click', () => {
  activeIndex--;
  updateCarousel();

  if (updatedItems[activeIndex].classList.contains('clone')) {
    setTimeout(() => {
      jumpToReal(updatedItems.length - 2); // Last real item
    }, 300);
  }
});

nextBtn.addEventListener('click', () => {
  activeIndex++;
  updateCarousel();

  if (updatedItems[activeIndex].classList.contains('clone')) {
    setTimeout(() => {
      jumpToReal(1); // First real item
    }, 300);
  }
});

window.addEventListener('load', () => {
  jumpToReal(activeIndex);
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('ssc-toggle-btn');
  const moreSSC = document.getElementById('more-ssc');
  
  if (!toggleBtn || !moreSSC) {
    console.error('Required elements not found: #ssc-toggle-btn or #more-ssc');
    return;
  }

  let expanded = false;

  toggleBtn.addEventListener('click', () => {
    expanded = !expanded;
    moreSSC.style.display = expanded ? 'block' : 'none';
    toggleBtn.textContent = expanded ? 'Show Less' : 'Show More';
  });
});
