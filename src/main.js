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

    <div class="w-full relative h-[28rem] perspective">
      <div id="card-wrapper" class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
        <!-- FRONT -->
        <div id="front-card" class="rounded-2xl [backface-visibility:hidden] absolute inset-0 w-full h-full p-4 bg-white shadow-sm flex flex-col">
          <div class="flex items-center justify-between">
            <p>Get a hint</p>
            <div>⭐</div>
          </div>
          <div id="text_container" class="flex h-full items-center justify-center">
            <!-- Image will go here -->
          </div>
        </div>

        <!-- BACK -->
        <div id="back-card" class="rounded-2xl [backface-visibility:hidden] rotate-y-180 absolute inset-0 w-full h-full p-4 bg-amber-600 shadow-sm flex items-center justify-center">
          <div id="answer" class="text-white text-2xl font-semibold">
            <!-- Answer will go here -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between w-full border-b  border-b-gray-400 py-4">
        <button id="play-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        </button>
      
        <div class="flex gap-4 items-center">
          <button id="prev_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/></svg>
          </button>

          <p id="progress" class="text-xl"></p>

          <button id="next_btn" class="">
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

const textContainer = document.querySelector('#text_container')
const answerDiv = document.querySelector('#answer')
const prevBtn = document.querySelector('#prev_btn')
const nextBtn = document.querySelector('#next_btn')
const progress = document.querySelector('#progress')
const cardWrapper = document.querySelector('#card-wrapper')

let index = 0
let isFlipped = false

function updateContent() {
	textContainer.innerHTML = ''
	answerDiv.textContent = ''

	const image = document.createElement('img')
	image.className = 'h-fit w-60 bg-gray-200 object-cover rounded'
	image.src = flashCards[index].img
	textContainer.appendChild(image)

	answerDiv.textContent = flashCards[index].label

	progress.textContent = `${index + 1} / ${flashCards.length}`

	prevBtn.disabled = index <= 0
	nextBtn.disabled = index >= flashCards.length - 1

	prevBtn.classList.toggle('text-gray-400', prevBtn.disabled)
	nextBtn.classList.toggle('text-gray-400', nextBtn.disabled)

	if (isFlipped) {
		cardWrapper.classList.remove('rotate-y-180')
		isFlipped = false
	}
}

function containerLoader() {
	updateContent()

	prevBtn.onclick = () => {
		if (index > 0) {
			index--
			updateContent()
		}
	}

	nextBtn.onclick = () => {
		if (index < flashCards.length - 1) {
			index++
			updateContent()
		}
	}
}

cardWrapper.onclick = () => {
	isFlipped = !isFlipped
	cardWrapper.classList.toggle('rotate-y-180')
}

containerLoader()
