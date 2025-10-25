// Sample blog posts data
const blogPosts = [
  {
    title: "Impact of Education Programs",
    image: "img/project/IBW-fb9.jpg",
    summary: "Discover how our education projects are transforming communities and empowering youth.",
    link: "#"
  },
  {
    title: "Water Initiative Success Stories",
    image: "blog2.jpg",
    summary: "Learn about the communities benefiting from clean water projects and their inspiring stories.",
    link: "#"
  },
  {
    title: "Sustainable Farming for Communities",
    image: "blog3.jpg",
    summary: "Our latest initiative helps farmers adopt sustainable practices for long-term growth.",
    link: "#"
  }
];


const blogGrid = document.querySelector('.blog-grid');

blogPosts.forEach((post, index) => {
  const card = document.createElement('div');
  card.classList.add('blog-card');
  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <div class="blog-info">
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <a href="#" class="btn-blog" data-index="${index}">Read More</a>
    </div>
  `;
  blogGrid.appendChild(card);
});

// Modal Elements
const modal = document.getElementById('blogModal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');

// Open modal
document.querySelectorAll('.btn-blog').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const post = blogPosts[this.dataset.index];
    modalTitle.textContent = post.title;
    modalImage.src = post.image;
    modalImage.alt = post.title;
    modalText.textContent = post.summary + " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt luctus, nisl nunc.";
    modal.style.display = 'block';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});
