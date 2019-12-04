document.addEventListener('DOMContentLoaded', init());

function init(){
    let datafile1 = fetch('https://jsonbox.io/box_fa981be94b401f6bd4b2')
            .then((result)=>{
                return result.json();
            })
            .then( (jsonData) =>{
                console.log(jsonData);
                let pIntro = document.createElement('p');
                pIntro.textContent = " Please choose the correct answer ";
                pIntro.classList.add('pIntro');
                document.getElementById('output').appendChild(pIntro);

                jsonData[0].english.forEach(element => {

                    let pQuestion = document.createElement('p');
                    pQuestion.textContent = "Question# "+element.id+" "+element.question;
                    pQuestion.classList.add('pQuestion');
                    document.getElementById('output').appendChild(pQuestion);

                    element.options.forEach(element => {
                        let pOptions = document.createElement('p');
                        pOptions.textContent = element.option;
                        pOptions.classList.add('pOptions');
                        document.getElementById('output').appendChild(pOptions);
                    });

                    let pAnswer = document.createElement('p');
                    pAnswer.textContent = "The correct answer is: "+element.answer;
                    pAnswer.classList.add('pAnswer');
                    document.getElementById('output').appendChild(pAnswer);  

                });
            })
            .catch((result)=>{
                console.log(result.json());
            })    
}