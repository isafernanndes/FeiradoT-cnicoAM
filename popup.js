// Função para aumentar a fonte
document.getElementById("increase-font-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: increaseFontSize,
    });
  });
});

function increaseFontSize() {
  document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body).fontSize) + 2) + "px";
}

// Função para diminuir a fonte
document.getElementById("decrease-font-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: decreaseFontSize,
    });
  });
});

function decreaseFontSize() {
  document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body).fontSize) - 2) + "px";
}

// Função para ativar modo escuro
document.getElementById("dark-mode-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleDarkMode,
    });
  });
});

function toggleDarkMode() {
  document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? '' : 'black';
  document.body.style.color = document.body.style.color === 'white' ? '' : 'white';
}

// Função para ativar cores invertidas
document.getElementById("invert-colors-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleInvertColors,
    });
  });
});

function toggleInvertColors() {
  document.body.style.filter = document.body.style.filter === 'invert(100%)' ? '' : 'invert(100%)';
}

// Função para leitura de texto
document.getElementById("read-text-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: readText,
    });
  });
});

function readText() {
  let selectedText = window.getSelection().toString();
  if (!selectedText) {
    selectedText = document.body.innerText;
  }
  const utterance = new SpeechSynthesisUtterance(selectedText);
  window.speechSynthesis.speak(utterance);
}

// Função para tradução para Libras (simulada)
document.getElementById("translate-libras-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: translateToLibras,
    });
  });
});

function translateToLibras() {
  alert("Função de tradução para Libras ainda em desenvolvimento!");
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("A extensão Accessibility Helper foi instalada.");
});