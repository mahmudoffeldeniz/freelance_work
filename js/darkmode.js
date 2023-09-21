const options = {
    top: '0',
    right: 'unset',
    left: '32px',
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    label: '🌓',
    autoMatchOsTheme: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

const myCustomCode = () => {

    const darkModeButton = document.querySelector('.darkmode-toggle');
    if (darkModeButton) {
        darkModeButton.style.zIndex = '9999';



    }
}

// Özel kodu çalıştır
myCustomCode();