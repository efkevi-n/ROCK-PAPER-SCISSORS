let score = JSON.parse (localStorage.getItem ('score'))
||{
    wins: 0,
    lose: 0,
    tie: 0
    };

    updateScoreElement();

  function Game(playerMove) 
  {
        const computerchoice = chooseComputerMove ();

       
        let result = '';
        
        if (playerMove === 'Rock') {
                if (computerchoice === 'Rock') {
              result = 'tie';
            }else if (computerchoice === 'Paper') {
              result = 'You lose';
            } else if (computerchoice === 'Scissors') {
              result = 'You win';
            }
          }
          else if (playerMove === 'Paper') {
                if (computerchoice === 'Rock') {
              result = 'You win';
            }else if (computerchoice === 'Paper') {
              result = 'tie';
            } else if (computerchoice === 'Scissors') {
              result = 'You lose';
            }
              }
          else if (playerMove === 'Scissors') {
                if (computerchoice === 'Rock') {
              result = 'You lose';
            }else if (computerchoice === 'Paper') {
              result = 'You win';
            } else if (computerchoice === 'Scissors') {
              result = 'tie';
            }
          }
        
          if (result === 'You win') {
            score.wins = score.wins + 1;
          } else if (result === 'You lose'){
          score.lose = score.lose + 1;
        } else if (result === 'tie') {
          score.tie = score.tie + 1;
        }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement ();
                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}-emoji.png" id="rest" >, Computer <img src="${computerchoice}-emoji.png" id="rest" >`;
              }
          

          function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = `win: ${score.wins}, losses: ${score.lose}, tie: ${score.tie}`;
    }

  function chooseComputerMove () {   
         
          const randomvalue = Math.random();
          let computerchoice = '';

          console.log (randomvalue);
            if (randomvalue >= 0 && randomvalue < 1 / 3){
              computerchoice ='Rock';
            } else if (randomvalue >= 1 / 3 && randomvalue < 2 / 3) {
              computerchoice ='Paper';
            } else if (randomvalue >= 2 / 3 && randomvalue <  1) {
              computerchoice ='Scissors';
            } 
            console.log (computerchoice)
            return computerchoice;
        }