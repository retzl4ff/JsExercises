function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var birth = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(birth.value.length == 0 || Number(birth.value) > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        var formGender = document.getElementsByName('radgender')
        var idade = ano - Number(birth.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formGender[0].checked){
            gender = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'crianca-m.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if(formGender[1].checked) {
            gender = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'crianca-f.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovem-f.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Seu gênero é: ${gender} e você possui ${idade} anos`
        res.appendChild(img) 
        img.style.width = '450px'
        img.style.borderRadius = '75%'
    }
}