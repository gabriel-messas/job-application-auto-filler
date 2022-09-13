
// replace below here with your personal information
const keys = [
    ['first', ''],
    ['last', ''],
    ['email', ''],
    ['phone', ''],
    ['location', ''],
    ['title', ''],
    ['employer', ''],
    ['linkedin', '']
];

function fillField(element) {
    if (element.value !== '') {
        return;
    };
    for (const key of keys) {
        if(element.outerHTML.toLowerCase().includes(key[0])) {
            element.value = key[1];
        }
    }
}

function iterate(element) {
    if (!element) {
        throw new Error('General element not found');
    }

    if (element.children.length === 0) {
        if (element.tagName === 'INPUT') {
            console.log('Found input element', element);
            fillField(element);
        }
    } else {
        for (const section of element.children) {
            iterate(section);
        }
    }
}

function start(generalElementId) {
    let generalElement;
    if (generalElementId) {
        generalElement = document.getElementById(generalElementId);
    } else {
        generalElement = document.getElementsByTagName("html")[0];
    }

    console.log(generalElement);

    iterate(generalElement);
}

start();
