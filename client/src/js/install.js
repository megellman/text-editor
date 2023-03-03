const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// window.addEventListener('beforeinstallprompt', (event) => {
//     event.preventDefault();
//     butInstall.style.visibility = 'visible';
// });

// butInstall.addEventListener('click', async () => {
//     butInstall.setAttribute('disabled', true);
//     butInstall.textContent = 'Installed!';
// });

// window.addEventListener('appinstalled', (event) => {
//     console.log('App installed!', 'appinstalled', event);
// });
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});