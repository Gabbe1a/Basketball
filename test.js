let cart = []

function addToCart(productId) {
	let product = document.getElementById(`product${productId}`)
	let productName = product.querySelector('h2').innerText
	let productPriceString = product.querySelectorAll('p')[1].innerText
	let productPrice = parseFloat(
		productPriceString.replace('Цена: ', '').replace(' ₽', '').replace('$', '')
	)

	cart.push({ id: productId, name: productName, price: productPrice })
	updateCart()
}

function updateCart() {
	let cartList = document.getElementById('cart-items')
	let totalPrice = 0 // Общая сумма

	cartList.innerHTML = ''

	cart.forEach(item => {
		let li = document.createElement('li')
		li.innerText = `${item.name} - ${item.price} ₽`
		cartList.appendChild(li)

		// Добавляем цену каждого товара к общей сумме
		totalPrice += item.price
	})

	// Создаем элемент для отображения общей суммы в корзине
	let totalLi = document.createElement('li')
	totalLi.innerText = `Общая сумма: ${totalPrice} ₽`
	cartList.appendChild(totalLi)
}

function checkout() {
	alert('Спасибо за ваш заказ!')
	cart = []
	updateCart()
}
