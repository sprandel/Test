var btn = document.querySelector('#botao')
btn.addEventListener('click', resultado, false)

function resultado() {
    var nome = document.querySelector('#nom').value
    var numD = parseFloat(document.querySelector('#numd').value)
    var salBruto = parseFloat(document.querySelector('#salar').value)
    var inss = ""
    var porcentagemInss = ""
    var irpf = ""
    var porcentagemIrpf = ""
    var salAnual = salBruto * 12
    var salLiq = ""

    if(isNaN(salBruto) == true || isNaN(numD) == true) {
        return alert('Verifique os dados e tente novamente')
    }

    //cálculos INSS
    if (salBruto <= 1100.01) {
        inss = salBruto * 0.075
        porcentagemInss = '7.5%' 
    } else if (salBruto <= 2203.49) {
        inss = (salBruto - 1100.01) * 0.09 + 82.5
        porcentagemInss = '9%'
    } else if (salBruto <= 3305.22) {
        inss = (salBruto - 2203.49) * 0.12 + 181.81
        porcentagemInss = '12%'
    } else if (salBruto <= 6433.57) {
        inss = (salBruto - 3305.22) * 0.14 + 314.02
        porcentagemInss = '14%'
    } else {
        inss = 0
        porcentagemInss = '0%'
    }

    //cáluclos IRPF
    if (salAnual <= 22847.76) {
        irpf = 0
        porcentagemIrpf = '0%'
    } else if (salAnual <= 33919.80) {
        irpf = salAnual * 0.075
        porcentagemIrpf = '7.5%'
    } else if (salAnual <= 45012.60) {
        irpf = salAnual * 0.15
        porcentagemIrpf = '15%'
    } else if (salAnual <= 55976.16) {
        irpf = salAnual * 0.225
        porcentagemIrpf = '22.5%'
    } else {
        irpf = salAnual * 0.275
        porcentagemIrpf = '27.5%'
    }

    //cálculo salário líquido
    irpf = irpf / 12
    salLiq = salBruto - irpf - inss

    cellNome = nome
    cellNumDep = numD
    cellSalBruto = 'R$' + salBruto.toFixed(2)
    cellPorcInss = porcentagemInss
    cellDescInss = 'R$' + inss.toFixed(2)
    cellPorcIrpf = porcentagemIrpf
    cellDescIrpf = 'R$' + irpf.toFixed(2)
    cellSalLiq = 'R$' + salLiq.toFixed(2)

    let tbod = document.querySelector('tbody')
    let tabela = [cellNome, cellNumDep, cellSalBruto, cellPorcInss, cellDescInss, cellPorcIrpf, cellDescIrpf, cellSalLiq]
    let tr = document.createElement('tr')
    let txt = ""
    tabela.forEach(element => {
        let td = document.createElement('td')
        txt = document.createTextNode(element)
        tr.append(td)
        td.append(txt)
    })
    tbod.append(tr)
}