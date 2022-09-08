function contar(){
    let numberStar = document.getElementById('star')
    let numberEnd = document.getElementById('end')
    let numberStep = document.getElementById('step')
    let res = document.getElementById('resul')

    if(numberStar.value.length == 0 || numberEnd.value.length == 0 || numberStep.value.length == 0){
        window.alert('Preencha os dados')
    } else{
        res.innerHTML = "Contando... <br/><br/>"
        //res.style.lineHeight = "10px"
        let s = Number(numberStar.value)
        let e = Number(numberEnd.value)
        let p = Number(numberStep.value)

        for(let c = s; c <= e; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `Fim. \u{1F3C1}`
    }


}