const walletInfoSection = document.querySelector('#wallet-info-section')

let walletListHtml = ``
for (let i = 0; i < walletList.length; i++) {
  walletListHtml += `
    <div class="wallet-info">
      <div>${i + 1}號選手</div>
      <div class="wallet-info-brand"><span>品牌: </span>${walletList[i].brand}</div>
      <div class="wallet-info-model"><span>型號: </span>${walletList[i].model}</div>
      <a class="wallet-info-url" href="${walletList[i].url}" target="_blank">前往${walletList[i].model}</a>
    </div>
    <hr>
  `
}

walletInfoSection.innerHTML = walletListHtml