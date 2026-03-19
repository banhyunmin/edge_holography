document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-copy-target]');

  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const targetId = button.getAttribute('data-copy-target');
      const target = document.getElementById(targetId);
      if (!target) return;

      const originalLabel = button.textContent;
      try {
        await navigator.clipboard.writeText(target.innerText.trim());
        button.textContent = 'Copied';
      } catch (error) {
        button.textContent = 'Failed';
      }

      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1400);
    });
  });
});
