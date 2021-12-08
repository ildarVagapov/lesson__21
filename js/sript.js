
const someButton = document.querySelector('.btn');
const someItem = document.querySelectorAll('.some-main__item');

if (someButton) {
	console.log('ecть кнопка');
	let someNum = 0;
	someButton.addEventListener('click', function (e) {
		someNum++;
		if (someNum === 3) {
			console.log('три раза нажал');
			if (someItem.length) {
				someItem.forEach(function (someList) {
					someList.classList.toggle('number')
					console.log('успешно')
				});
			}
		}
	})
}

const someButton2 = document.querySelector('.btn2');
if (someButton2) {
	console.log('ecть кнопка2');
	someButton2.addEventListener('click', function (e) {
		if (someItem.length) {
			someItem.forEach(function (someList) {
				if (someList.classList.contains('number')) {
					someList.classList.remove('number')
					console.log('успешно удалил брат')
				}
			});
		}
	})
}

const someButton3 = document.querySelector('.btn3');
const someBlock = document.querySelector('.some-main__list')
if (someButton3) {
	console.log('есть кнопка3')
	someButton3.addEventListener('click', function (e) {
		if (someBlock) {
			console.log('есть класс')
			someBlock.classList.toggle('bg')
			console.log(':)')
		}
	})
}
