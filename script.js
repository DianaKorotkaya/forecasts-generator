/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const sendButton = document.querySelector('.forecast-btn');
const conteinerText = document.querySelector('.current-forecast h1');
const conteinerNum = document.querySelector('.current-forecast p');
const itemTemplate = document.querySelector('#forecast-item');
const conteiner = document.querySelector('.forecasts');

function generateRandomValue(min, max) {
  let predictionNumber = Math.floor(Math.random() * (max-min)) + min;
  return predictionNumber;
}

sendButton.addEventListener('click', function(){
    let num = generateRandomValue(0, 3); 
    let predictionText = "";
    let percentage = generateRandomValue(0, 101);

    if (num == 1) {
      predictionText = "Все будет супер!";
    } else if (num == 2) {
      predictionText = "Все будет еще лучше!";
    } else {
      predictionText = "На WB отменят все комиссии";
    }

    function makeItemByTemplate(predictionText,percentage){
      const myCard = itemTemplate.content.cloneNode(true);
      myCard.querySelector('h3').textContent = predictionText;
      myCard.querySelector('p').textContent = 'Вероятность ' + percentage + ' % ';
      
      return myCard;
    }
   
    conteiner.prepend(makeItemByTemplate(predictionText,percentage));
    
    conteinerText.textContent = predictionText;
    conteinerNum.textContent = 'Вероятность ' + percentage + ' % ';

  })


  





  

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
