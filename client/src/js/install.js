const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.addEventListener('click', async () => {
        event.prompt();
    });
});


window.addEventListener('appinstalled', (event) => {
    console.log('App installed!', 'appinstalled', event);
});
