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
      <div class="rounded-2xl w-full h-[58dvh] p-4 bg-white shadow-sm">
        <div class="flex items-center justify-between">
          <p class="">Get a hint</p>
          <div>⭐</div>
        </div>

        <div id="text_container" class="flex h-full items-center justify-center">
        
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

          <p class="text-xl">1/65</p>

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
const answerParagraph = document.createElement('p')
const image = document.createElement('img')
const prevBtn = document.querySelector('#prev_btn')
const nextBtn = document.querySelector('#next_btn')

let index = 0

function containerLoader() {
	updateContent()

	prevBtn.onclick = () => {
		if (index > 0) {
			index -= 1
			updateContent()
		}
	}

	nextBtn.onclick = () => {
		if (index < flashCards.length - 1) {
			index += 1
			updateContent()
		}
	}
}

function updateContent() {
	image.classList.add('h-fit', 'object-fit', 'w-60', 'bg-gray-400')
	image.src = flashCards[index].img

	answerParagraph.classList.add('text-2xl')
	answerParagraph.textContent = flashCards[index].label

	textContainer.insertAdjacentElement('afterbegin', image)

	if (index <= 0) {
		prevBtn.setAttribute('disabled', '')
		prevBtn.classList.add('text-gray-400')
		prevBtn.classList.remove('text-gray-700')
	} else {
		prevBtn.removeAttribute('disabled')
		prevBtn.classList.remove('text-gray-400')
		prevBtn.classList.add('text-gray-700')
	}

	if (index >= flashCards.length - 1) {
		nextBtn.setAttribute('disabled', true)
		nextBtn.classList.add('text-gray-400')
		nextBtn.classList.remove('text-gray-700')
	} else {
		nextBtn.removeAttribute('disabled')
		nextBtn.classList.remove('text-gray-400')
		nextBtn.classList.add('text-gray-700')
	}
}
containerLoader()
