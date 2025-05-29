
function loadComments() {
  const commentList = document.getElementById('commentList');
  commentList.innerHTML = '';
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach(comment => {
    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `<strong>${comment.name}</strong><p>${comment.message}</p>`;
    commentList.appendChild(div);
  });
}

document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name && message) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.unshift({ name, message });
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
    document.getElementById('commentForm').reset();
  }
});

document.addEventListener('DOMContentLoaded', loadComments);

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  if (slides.length > 0) {
    slides[0].classList.add('active');
    setInterval(showSlides, 3000);
  }
});

function zoomImage(img) {
  const src = img.src;
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.8)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 1000;
  const zoomed = document.createElement('img');
  zoomed.src = src;
  zoomed.style.maxWidth = '90%';
  zoomed.style.maxHeight = '90%';
  zoomed.style.borderRadius = '10px';
  overlay.appendChild(zoomed);
  overlay.onclick = () => document.body.removeChild(overlay);
  document.body.appendChild(overlay);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('contactResponse').innerText = "Mensagem enviada com sucesso!";
  this.reset();
});
