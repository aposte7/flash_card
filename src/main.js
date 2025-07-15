import './style.css'

document.querySelector('#app').innerHTML = `
 <div class="h-dvh">
  <div class="bg-white w-[48rem] mx-auto h-full flex flex-col items-center justify-center">
      <div class="rounded-2xl w-full h-[58dvh] p-4 bg-white shadow-sm">
        <div class="flex items-center justify-between">
          <p class="">Get a hint</p>
          <div>⭐</div>
        </div>

        <div class="flex h-full items-center justify-center">
          <img src="" alt="" class="bg-gray-400 h-44 w-56" />
        </div>
      </div>

      <div class="flex items-center justify-between w-full border-b  border-b-gray-400 py-4">
        <button id="play-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        </button>
      
        <div class="flex gap-4 items-center">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/></svg>
          </button>

          <p class="text-xl">1/65</p>

          <button class="">
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

setupCounter(document.querySelector('#counter'))
