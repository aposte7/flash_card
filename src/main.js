import './style.css'

const flashCards = [
	{ img: 'src/assets/images/ketone.jpg', label: 'Ketone' },
	{ img: 'src/assets/images/Ester.jpg', label: 'Ester' },
	{ img: 'src/assets/images/Carboxylic Acid.jpg', label: 'Carboxylic Acid' },
	{ img: 'src/assets/images/Amine.jpg', label: 'Amine' },
	{ img: 'src/assets/images/Alkyl halide.jpg', label: 'Alkyl Halide' },
	{ img: 'src/assets/images/Aldehyde.jpg', label: 'Aldehyde' },
	{ img: 'src/assets/images/acohol.jpg', label: 'Alcohol' },
	{ img: 'src/assets/images/pentane.webp', label: 'Pentane' },
]

document.querySelector('#app').innerHTML = `
 <div class="h-dvh">
  <div class="bg-white w-[48rem] mx-auto h-full flex flex-col items-center justify-center">

    <div class="w-full relative  h-[28rem] perspective overflow-hidden">
      <div id="card-track" class="relative w-full h-full  overflow-hidden">
        <!-- Active card will be injected here -->
      </div>
    </div>

    <div class="flex items-center justify-between w-full border-b border-b-gray-400 py-4">
      <button id="play-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
      </button>

      <div class="flex gap-4 items-center">
        <button id="prev_btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/></svg>
        </button>

        <p id="progress" class="text-xl"></p>

        <button id="next_btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
        </button>
      </div>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-icon lucide-scan"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
      </div>
    </div>
  </div>
</div>
`

let index = 0
let isFlipped = false
let isAnimating = false
let hintTimeout = null

const track = document.getElementById('card-track')
const prevBtn = document.getElementById('prev_btn')
const nextBtn = document.getElementById('next_btn')
const progress = document.getElementById('progress')

function createCard(index) {
	const card = document.createElement('div')
	card.className =
		'w-[98%] mx-auto h-[98%] absolute inset-0 transition-transform duration-500 ease-in-out [transform-style:preserve-3d]'

	card.innerHTML = `
		<div class="rounded-2xl [backface-visibility:hidden]  absolute inset-0 w-full h-full p-4 bg-white shadow-sm flex flex-col">
			<div class="flex items-center justify-between">
				<div id="hint-wrapper" class="min-w-[8rem] h-6">
					<p id="get-hint" class="cursor-pointer text-blue-600 hover:underline">Get a hint</p>
					<p id="hint-text" class="text-gray-600 font-medium hidden"></p>
				</div>
				<div>⭐</div>
			</div>
			<div class="flex flex-col items-center justify-center h-full gap-2">
				<img src="${flashCards[index].img}" class="h-fit w-60 bg-gray-200 object-cover rounded" />
			</div>
		</div>

		<div class="rounded-2xl [backface-visibility:hidden] rotate-y-180 absolute inset-0 w-full h-full p-4 bg-amber-600 shadow-sm flex items-center justify-center">
			<p class="text-white text-2xl font-semibold">${flashCards[index].label}</p>
		</div>
	`

	card.addEventListener('click', () => {
		isFlipped = !isFlipped
		card.classList.toggle('rotate-y-180')
	})

	setTimeout(() => {
		const getHint = card.querySelector('#get-hint')
		const hintText = card.querySelector('#hint-text')

		getHint?.addEventListener('click', () => {
			const answer = flashCards[index].label
			const hint = answer.charAt(0) + '\u2003'.repeat(answer.length - 1)

			getHint.classList.add('hidden')
			hintText.classList.remove('hidden')
			hintText.textContent = hint

			clearTimeout(hintTimeout)
			hintTimeout = setTimeout(() => {
				hintText.classList.add('hidden')
				getHint.classList.remove('hidden')
			}, 3000)
		})
	}, 50)

	return card
}

function updateCard(newIndex, direction = 'none') {
	if (isAnimating) return
	isAnimating = true

	const oldCard = track.firstChild
	const newCard = createCard(newIndex)

	let enterClass =
		direction === 'next' ? 'translate-x-full' : '-translate-x-full'
	let exitClass =
		direction === 'next' ? '-translate-x-full' : 'translate-x-full'

	if (direction === 'none') {
		track.innerHTML = ''
		track.appendChild(newCard)
		isAnimating = false
		return
	}

	newCard.classList.add(enterClass)
	track.appendChild(newCard)

	requestAnimationFrame(() => {
		newCard.classList.remove(enterClass)
		oldCard?.classList.add(exitClass)

		setTimeout(() => {
			oldCard?.remove()
			isAnimating = false
		}, 500)
	})
}

function updateButtons() {
	progress.textContent = `${index + 1} / ${flashCards.length}`

	prevBtn.disabled = index === 0
	nextBtn.disabled = index === flashCards.length - 1

	prevBtn.classList.toggle('text-gray-400', prevBtn.disabled)
	nextBtn.classList.toggle('text-gray-400', nextBtn.disabled)
}

function setup() {
	updateCard(index)
	updateButtons()

	prevBtn.onclick = () => {
		if (index > 0) {
			updateCard(index - 1, 'prev')
			index--
			updateButtons()
		}
	}

	nextBtn.onclick = () => {
		if (index < flashCards.length - 1) {
			updateCard(index + 1, 'next')
			index++
			updateButtons()
		}
	}
}

setup()
