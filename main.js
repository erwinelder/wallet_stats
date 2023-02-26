const id = function (id) {
	return document.getElementById(id);
}

// const root = ReactDOM.createRoot(id('root'));
// const root_content = ReactDOM.createRoot(id('content'));

// localStorage.clear();



var categories_expense_titles = [];

const categories_expense_icons = [
	/* 1 */ 
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<path d="M 64.718 294.71 C 21.635 305.658 1.317 354.368 12.825 404.515 C 22.187 445.309 50.427 466.598 70.822 476.317 C 105.585 492.068 161.955 489.324 199.072 474.932 C 237.565 460.328 260.896 423.962 265.897 395.598 C 271.77 332.371 242.875 295.329 191.188 291.704"></path>
		<path d="M 124.088 272.482 C 105.315 272.604 74.98 280.717 57.862 293.33 C 73.793 295.983 88.732 299.268 97.529 304.05 L 91.098 345.504 L 134.694 312.627 L 178.293 344.073 L 173.648 300.835 C 180.476 294.03 202.218 287.77 210.096 286.181 C 196.257 276.291 160.531 270.951 143.48 271.53"></path>
		<path d="M 128.814 291.082 C 128.34 276.409 118.336 245.987 114.006 238.551 L 122.188 228.789 C 134.815 239.51 142.577 266.425 147.461 290.367"></path>
		<path d="M 298.973 492.575 L 431.129 492.575 C 414.076 478.365 387.077 484.049 364.34 452.787 L 364.34 280.84 C 394.182 242.472 473.761 204.104 480.866 177.105 C 489.392 148.683 449.603 63.421 435.392 8 L 294.709 8 C 280.499 63.421 240.711 148.683 249.236 177.105 C 256.341 204.104 334.498 242.472 364.34 280.84 L 364.34 452.787 C 340.184 484.049 316.025 478.365 298.973 492.575 Z"></path>
		<path d="M 252 151.7 C 302.899 143.105 310.183 125.644 364.3 137 C 398.851 147.66 429.044 160.627 478 150.9"></path>
	</svg>`,
	/* 2 */ 
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`,
	/* 3 */ 
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`,
	/* 4 */
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`,
	/* 5 */
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`,
	/* 6 */
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`,
	/* 7 */
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<g transform="matrix(4.888889, 0, 0, 4.888889, -972.222229, -1600.681519)">
			<ellipse style="stroke-width: 3px;" cx="250" cy="406.597" rx="4.5" ry="4.5"></ellipse>
			<path style="stroke-width: 3px;" d="M 235 393 C 240 382 260 382 265 393"></path>
			<path style="stroke-width: 3px;" d="M 220 380 C 235 360 265 360 280 380"></path>
			<path style="stroke-width: 3px;" d="M 205 367 C 233 339 267 339 295 367"></path>
		</g>
  	</svg>`,
	/* 8 */
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`,
	/* 9 */
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`,
	/* 10 */
	`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
		<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
	</svg>`

];

var subcategories_titles = [];

const subcategories_icons = [
  /* 1 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<path d="M 70.895 294.024 C 27.812 304.972 7.494 353.682 19.002 403.829 C 28.364 444.623 56.604 465.912 76.999 475.631 C 111.762 491.382 168.132 488.638 205.249 474.246 C 243.742 459.642 267.073 423.276 272.074 394.912 C 277.947 331.685 249.052 294.643 197.365 291.018"></path>
			<path d="M 130.265 271.796 C 111.492 271.918 81.157 280.031 64.039 292.644 C 79.97 295.297 94.909 298.582 103.706 303.364 L 97.275 344.818 L 140.871 311.941 L 184.47 343.387 L 179.825 300.149 C 186.653 293.344 208.395 287.084 216.273 285.495 C 202.434 275.605 166.708 270.265 149.657 270.844"></path>
			<path d="M 134.991 290.396 C 134.517 275.723 124.513 245.301 120.183 237.865 L 128.365 228.103 C 140.992 238.824 148.754 265.739 153.638 289.681"></path>
			<path d="M 308.721 490.338 L 469.401 490.338 C 483.175 487.583 487.766 480.467 490.061 467.382 L 490.061 210.291 C 485.47 159.791 471.698 108.833 444.151 65.681 L 333.971 65.681 C 315.319 108.568 290.386 155.822 288.061 210.291 L 288.061 463.02 C 289.23 479.566 294.733 486.473 308.721 490.338 Z" bx:origin="0.472971 0.424729"></path>
			<path d="M 320.198 65.681 L 457.925 65.681 C 462.069 65.584 467.109 60.817 467.106 56.496 L 467.106 17.475 C 467.059 11.931 461.946 8.245 455.63 8.291 L 320.198 8.291 C 315.606 8.615 310.953 12.876 311.016 17.475 L 311.016 56.496 C 311.161 61.269 315.715 65.681 320.198 65.681 Z" bx:origin="0.444248 4.737284"></path>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line x1="20" y1="400.609" x2="479.126" y2="401.523"></line>
			<line x1="20.874" y1="363.588" x2="480" y2="363.588"></line>
			<path d="M 20.874 363.589 C 59.134 57.506 441.739 57.506 480 363.589"></path>
			<path d="M 211.302 135.23 C 218.955 86.256 280.172 86.256 287.824 135.23"></path>
		</svg>`,
		
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<path d="M 70.895 294.024 C 27.812 304.972 7.494 353.682 19.002 403.829 C 28.364 444.623 56.604 465.912 76.999 475.631 C 111.762 491.382 168.132 488.638 205.249 474.246 C 243.742 459.642 267.073 423.276 272.074 394.912 C 277.947 331.685 249.052 294.643 197.365 291.018"></path>
			<path d="M 130.265 271.796 C 111.492 271.918 81.157 280.031 64.039 292.644 C 79.97 295.297 94.909 298.582 103.706 303.364 L 97.275 344.818 L 140.871 311.941 L 184.47 343.387 L 179.825 300.149 C 186.653 293.344 208.395 287.084 216.273 285.495 C 202.434 275.605 166.708 270.265 149.657 270.844"></path>
			<path d="M 134.991 290.396 C 134.517 275.723 124.513 245.301 120.183 237.865 L 128.365 228.103 C 140.992 238.824 148.754 265.739 153.638 289.681"></path>
			<path d="M 308.721 490.338 L 469.401 490.338 C 483.175 487.583 487.766 480.467 490.061 467.382 L 490.061 210.291 C 485.47 159.791 471.698 108.833 444.151 65.681 L 333.971 65.681 C 315.319 108.568 290.386 155.822 288.061 210.291 L 288.061 463.02 C 289.23 479.566 294.733 486.473 308.721 490.338 Z" bx:origin="0.472971 0.424729"></path>
			<path d="M 320.198 65.681 L 457.925 65.681 C 462.069 65.584 467.109 60.817 467.106 56.496 L 467.106 17.475 C 467.059 11.931 461.946 8.245 455.63 8.291 L 320.198 8.291 C 315.606 8.615 310.953 12.876 311.016 17.475 L 311.016 56.496 C 311.161 61.269 315.715 65.681 320.198 65.681 Z" bx:origin="0.444248 4.737284"></path>
		</svg>`
	],
  /* 2 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 3 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 4 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 5 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 6 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 7 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 8 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 9 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	],
  /* 10 */
	[
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`,
	
		`<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
			<line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
		</svg>`
	]
];

var categories_income_titles = [];

const categories_income_icons = [
  /* 1 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 2 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 3 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 4 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 5 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 6 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 7 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 8 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`,
  /* 9 */
  `<svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>`
];

const category_transfer_icon = `
  <svg class="category-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <line stroke-miterlimit: 5; x1="30" y1="30" x2="470" y2="470"></line>
  </svg>
`;


var expense_subcategories_results = [
	/* 1 */
	[ {total: 0}, {total: 0}, {total: 0} ],
	/* 2 */
	[ {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0},
		{total: 0}, {total: 0}, {total: 0}, {total: 0} ],
	/* 3 */
	[ {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0} ],
	/* 4 */
	[ {total: 0}, {total: 0}, {total: 0}, {total: 0} ],
	/* 5 */
	[ {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0} ],
	/* 6 */
	[ {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0},
		{total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0},
		{total: 0} ],
	/* 7 */
	[ {total: 0}, {total: 0}, {total: 0}, {total: 0} ],
	/* 8 */
	[ {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0}, {total: 0} ],
	/* 9 */
	[ {total: 0}, {total: 0}, {total: 0} ],
	/* 10 */
	[ {total: 0}, {total: 0} ]
];



// class Account extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div style={{color: '#ddd', background: '#' + this.props.color}} className="account" >
// 				<input type="text" value={this.props.currency} className="account-currency active-input" readOnly></input>
// 				<input type="number" value={this.props.balance} className="account-balance active-input" style={{background: 'rgba(255, 255, 255, 0.1)'}} readOnly></input>
// 			</div>
// 		);
// 	}
// }

const account_el = (accountnum, color, currency, balance) => {
	return (`
		<div accountnum="${accountnum}" style="color: #ddd; background: #${color};" class="account">
			<input type="text" value="${currency}" class="account-currency active-input" readonly>
			<input type="text" value="${getReadableNumber(balance)}" amount="${balance}" class="account-balance active-input" style="background: rgba(255, 255, 255, 0.1);" readonly>
		</div>
	`);
}

function getReadableNumber (number) {

	
	let number_as_string = '' + number;
	let readable_number = '';
	let addit_char = 0;
	
	let count_of_numbers = number_as_string.length - 3;
	if (number_as_string[0] == '-') {
		readable_number += '- ';
		addit_char = 1;
		count_of_numbers--;
	}

	let start_step = (count_of_numbers % 3) - 3;

	// alert(number + ' | ' + count_of_numbers);

	for (let a = 0; a < count_of_numbers; a++) {
		if ((a + 1 + start_step) % 3 == 0) readable_number += ' ';
		readable_number += number_as_string[a + addit_char];
	}

	readable_number += number_as_string[count_of_numbers + addit_char];
	readable_number += number_as_string[count_of_numbers + addit_char + 1];
	readable_number += number_as_string[count_of_numbers + addit_char + 2];

	// return readable_number;
	return number;
}



const category_list_el = (category_num, icons_array, titles_array) => {
	return (`
		<div class="category" categorynum="${category_num}">
			<div class="category-svg-cont">${icons_array[category_num]}</div>
			<h3 class="category-title">${titles_array[category_num]}</h3>
		</div>
	`);
}
const subcategory_list_el = (subcategory_num, icons_array, titles_array, array_num, nested_array_num) => {
	return (`
		<div class="subcategory" subcategorynum="${subcategory_num}">
			<div class="subcategory-svg-cont">${icons_array[array_num][nested_array_num]}</div>
			<h3 class="subcategory-title">${titles_array[array_num][nested_array_num]}</h3>
		</div>
	`);
}
const category_list_hr = `<hr class="categories-hr">`;





// const accounts_root = ReactDOM.createRoot(id('accounts'));
// const settings_accounts_root = ReactDOM.createRoot(id('settings-accounts'));

// upload app data

if (localStorage.getItem('L')) uploadAppData();
else openHelloScreen();

function openHelloScreen () {

	disableScrolling();

	id('hello-screen').classList.remove('hide');

	uploadHelloTitle(0);

	id('hello-language').setAttribute('langnum', 0);
	setTimeout(() => {
		uploadHelloLanguageName(0);
		id('hello-language').style.opacity = '1';

		setTimeout(() => {
			setUpClickOnHelloSliderButtons();
		}, 200);
	}, 1000);

	setTimeout(() => {
		setUpClickOnHelloSubmitLanguageButton();
	}, 1800);
}

function uploadHelloTitle (lang) {

	let el = id('hello-screen').firstElementChild;

	el.style.transition = 'opacity .5s';
	el.style.opacity = '0';
	
	setTimeout(() => {
		if (lang == 0) el.innerHTML = 'Hello!';
		else if (lang == 1) el.innerHTML = 'Ahoj!';
		else if (lang == 2) el.innerHTML = 'Привет!';
		else if (lang == 3) el.innerHTML = 'Привіт!';
		
		el.style.opacity = '1';
	}, 500);
}

function uploadHelloLanguageName (lang_num) {

	if (lang_num == -1) lang_num = 3;
	else if (lang_num == 4) lang_num = 0;

	let el = id('hello-language');
	
	if (lang_num == 0) el.innerHTML = 'English';
	else if (lang_num == 1) el.innerHTML = 'Čeština';
	else if (lang_num == 2) el.innerHTML = 'Русский';
	else if (lang_num == 3) el.innerHTML = 'Українська';

	return lang_num;
}

function hideHelloLanguageName (direction) {
	let el = id('hello-language');
	let x = 50 * direction;

	el.style.transition = '.5s transform, .5s opacity';
	el.style.transform = `scale(0.8) translateX(${x}px)`;
	el.style.opacity = '0';
}

function showHelloLanguage (direction) {
	let el = id('hello-language');
	let x = 50 * direction;

	el.style.transition = '0s transform, 0s opacity';
	el.style.transform = `scale(0.8) translateX(${x}px)`;
	
	setTimeout(() => {
		el.style.transition = '.5s transform, .5s opacity';
		el.style.opacity = '1';
		id('hello-language').style.transform = 'scale(1) translateX(0px)';
	}, 50);
}

function setUpClickOnHelloSliderButtons () {

	id('button-slider').firstElementChild.style.opacity = '1';

	id('button-slider').firstElementChild.onclick = function() {
		if (id('hello-screen').getAttribute('animstatus') == 'done')
			clickOnHelloScreenLeftButton();
	}
	
	id('button-slider').lastElementChild.style.opacity = '1';

	id('button-slider').lastElementChild.onclick = function() {
		if (id('hello-screen').getAttribute('animstatus') == 'done')
			clickOnHelloScreenRightButton();
	}
}

function clickOnHelloScreenLeftButton () {

	id('hello-screen').setAttribute('animstatus', 'processing');
	hideHelloLanguageName(1);

	let lang_num = id('hello-language').getAttribute('langnum');
	
	setTimeout(() => {
		lang_num = uploadHelloLanguageName(Number(lang_num) - 1);
		uploadHelloTitle(lang_num);
		id('hello-language').setAttribute('langnum', lang_num);
		showHelloLanguage(-1);

		setTimeout(() => {
			id('hello-screen').setAttribute('animstatus', 'done');
		}, 500);
	}, 500);
}

function clickOnHelloScreenRightButton () {

	id('hello-screen').setAttribute('animstatus', 'processing');
	hideHelloLanguageName(-1);
	
	let lang_num = id('hello-language').getAttribute('langnum');
	
	setTimeout(() => {
		lang_num = uploadHelloLanguageName(Number(lang_num) + 1);
		uploadHelloTitle(lang_num);
		id('hello-language').setAttribute('langnum', lang_num);
		showHelloLanguage(1);

		setTimeout(() => {
			id('hello-screen').setAttribute('animstatus', 'done');
		}, 500);
	}, 500);
}

function setUpClickOnHelloSubmitLanguageButton () {

	id('hello-submit-language').style.opacity = '1';

	id('hello-submit-language').onclick = () => {

		id('hello-title').style.transition = '.5s opacity, .5s transform';
		id('hello-title').style.transform = 'scale(0.8)';
		id('hello-title').style.opacity = '0';

		setTimeout(() => {
			id('hello-language').style.transition = '.5s opacity, .5s transform';
			id('hello-language').style.transform = 'scale(0.8)';
			id('hello-language').style.opacity = '0';
		}, 500);

		setTimeout(() => {
			id('button-slider').firstElementChild.style.transform = 'scale(0.8)';
			id('button-slider').firstElementChild.style.opacity = '0';
			id('button-slider').lastElementChild.style.transform = 'scale(0.8)';
			id('button-slider').lastElementChild.style.opacity = '0';
		}, 700);

		setTimeout(() => {
			id('hello-submit-language').style.transition = '1s opacity, 1s transform';
			id('hello-submit-language').style.transform = 'scale(0.8)';
			id('hello-submit-language').style.opacity = '0';

			setTimeout(() => {
				localStorage.setItem('L', getLanguageByNumber(id('hello-language').getAttribute('langnum')));
				closeHelloScreen();
			}, 1000);
		}, 1200);
		
	}
}

function getLanguageByNumber (lang_num) {

	if (lang_num == 0) return 'en';
	else if (lang_num == 1) return 'cz';
	else if (lang_num == 2) return 'ru';
	else if (lang_num == 3) return 'ua';
	return lang_num;
}

function closeHelloScreen () {
	id('hello-screen').classList.add('hide');
	uploadAppData();
}



function uploadAppData () {

	startPreloaderAnimation();

	// upload language
	if (!(localStorage.getItem('L'))) localStorage.setItem('L', 'en');
	uploadLanguage(localStorage.getItem('L'));

	// upload categories to its windows

	uploadCategoriesToItsWindow(id('categories-expense'), categories_expense_titles, categories_expense_icons);
	uploadCategoriesToItsWindow(id('categories-income'), categories_income_titles, categories_income_icons);
	uploadSubcategoriesToItsWindow();

	setUpOpeningSubcategoryList(
		id('categories-expense'),
		id('categories-expense').getElementsByClassName('category'),
		id('subcategories').getElementsByClassName('subcategory-cont')
	);

	// apply theme
	if (!localStorage.getItem('T')) localStorage.setItem('T', 'l');
		applyTheme(localStorage.getItem('T'));

	// apply top margin
	if (!(localStorage.getItem('TM'))) localStorage.setItem('TM', 0);
		applyTopmargin();

	// upload accounts or add the new one on first run of the app
	if (!localStorage.getItem('ACount')) {
		localStorage.setItem('ACount', 0);
		addAccount();
	}
	for (let a = 1; a <= localStorage.getItem('ACount'); a++)
		uploadAccount(a, id('accounts'));
	setUpClickOnAccounts();

	// invert all account's black colores in dark theme 
	checkAccountsColor();

	// upload records to history
	if (localStorage.getItem('RCount')) uploadRecordsToHistory();
	else localStorage.setItem('RCount', 0);
	
	// upload statistic
	uploadExpensesIncomesStats();
	fitPieChartSize();
	uploadDataToPieChart();
	
	// upload date filter menu
	setTimeout(uploadDataToCustomDateFilterMenu, 100);
	setTimeout(positionateDateFilterMenu, 101);
	setTimeout(setDateFilterMenuTopPosition, 102);

	hidePreloader();
}





function startPreloaderAnimation () {
	
	setTimeout(() => {
		
		disableScrolling();
		
		id('preloader').setAttribute('status', 'loading');
		id('preloader-path').classList.add('draw');
	
		setTimeout(() => {
			id('preloader-svg').classList.add('draw-start');
		}, 1);
		
		setTimeout(() => {
			id('preloader-svg').classList.add('draw-before-end');
			id('preloader-path-second').classList.add('show');
			
			setTimeout(() => {
				id('preloader-svg').classList.add('draw-end');
				id('preloader').setAttribute('status', 'done');
			}, 200);
		}, 980);

	}, 200);
	
}

function hidePreloader () {

	if (id('preloader').getAttribute('status') == 'done') {

		id('preloader').classList.add('hide');
		
		setTimeout(() => {
			id('preloader').style.display = 'none';
			enableScrolling();
		}, 300);
		
	} else setTimeout(hidePreloader, 100);
}





function uploadLanguage (lang) {

	uploadFontFamilyByLanguage(lang);
	uploadLanguageToRecordCategories(lang);
	uploadLanguageToHistoryNavbars(lang);
	uploadLanguageToWidgets(lang);
	uploadLanguageToTitles(lang);
	uploadLanguageToButtons(lang);
}


function uploadFontFamilyByLanguage (lang) {

	if (lang == 'en' || lang == 'cz')
		id('body').classList.add('font1');
	else if (lang == 'ru' || lang == 'ua')
		id('body').classList.add('font2');
}


function uploadLanguageToRecordCategories (lang) {

	categories_expense_titles = getCategoriesExpenseTitlesByLanguage(lang);
	subcategories_titles = getSubategoriesTitlesByLanguage(lang);
	categories_income_titles = getCategoriesIncomeTitlesByLanguage(lang);
}

function getCategoriesExpenseTitlesByLanguage (lang) {

	if (lang == 'en')
		return [
			/* 1 */ 'Food and drinks',
			/* 2 */ 'Shopping',
			/* 3 */ 'Housing',
			/* 4 */ 'Transport',
			/* 5 */ 'Vehicle',
			/* 6 */ 'Life and entertainment',
			/* 7 */ 'Communication',
			/* 8 */ 'Financial expenses',
			/* 9 */ 'Investments',
			/* 10 */ 'Others'
		];
	else if (lang == 'cz')
		return [
			/* 1 */ 'Jídlo a pití',
			/* 2 */ 'Nakupování',
			/* 3 */ 'Bydlení',
			/* 4 */ 'Doprava',
			/* 5 */ 'Vozidlo',
			/* 6 */ 'Život a zábava',
			/* 7 */ 'Sdělení',
			/* 8 */ 'Finanční výdaje',
			/* 9 */ 'Investice',
			/* 10 */ 'Ostatní'
		];
	else if (lang == 'ru')
		return [
			/* 1 */ 'Еда и напитки',
			/* 2 */ 'Шоппинг',
			/* 3 */ 'Жилье',
			/* 4 */ 'Транспорт',
			/* 5 */ 'Транспортное средство',
			/* 6 */ 'Жизнь и развлечения',
			/* 7 */ 'Коммуникация',
			/* 8 */ 'Финансовые расходы',
			/* 9 */ 'Вложения',
			/* 10 */ 'Другое'
		];
	else if (lang == 'ua')
		return [
			/* 1 */ 'Їжа та напої',
			/* 2 */ 'Шопінг',
			/* 3 */ 'Житло',
			/* 4 */ 'Транспорт',
			/* 5 */ 'Транспортний засіб',
			/* 6 */ 'Життя і розваги',
			/* 7 */ 'Комунікація',
			/* 8 */ 'Фінансові витрати',
			/* 9 */ 'Інвестиції',
			/* 10 */ 'Інше'
		];
}

function getSubategoriesTitlesByLanguage (lang) {
	
	if (lang == 'en')
		return [
			/* 1 */
			[
				'Groceries',
				'Restaurant, fast-food',
				'Cafe, bar',
			],
			/* 2 */
			[
				'Clothes and shoes',
				'Drug-store, chemist',
				'Electronic, accessories',
				'Gifts, joy',
				'Health and beauty',
				'Home, garden',
				'Jewels, accessories',
				'Kids',
				'Pets, animals',
				'Stationery, tools',
			],
			/* 3 */
			[
				'Energy, utilities',
				'Maintenance, repairs',
				'Mortgage',
				'Property insurance',
				'Rent',
				'Services',
			],
			/* 4 */
			[
				'Public transport',
				'Taxi',
				'Business trips',
				'Long distance',
			],
			/* 5 */
			[
				'Fuel',
				'Parking',
				'Leasing',
				'Rentals',
				'Vehicle insurance',
				'Vehicle maintenance',
			],
			/* 6 */
			[
				'Wellness, beauty',
				'Active sport, fitness',
				'Alcohol, tobacco',
				'Books, audio',
				'Gifts, charity',
				'Culture, events',
				'Education, development',
				'Health care, doctor',
				'Hobbies',
				'Holiday, trips, hotels',
				'Life events',
				'Lottery, gambling',
				'TV, Streaming',
			],
			/* 7 */
			[
				'Telephone communications',
				'Internet',
				'Subscriptions, software, apps, games',
				'Postal services',
			],
			/* 8 */
			[
				'Advisory',
				'Charges, fees',
				'Taxes',
				'Fines',
				'Insurance',
				'Loan, interests',
			],
			/* 9 */
			[
				'Financial investments',
				'Realty',
				'Savings',
			],
			/* 10 */
			[
				'Missing',
				'Other'
			]
		];
	else if (lang == 'cz')
		return [
			/* 1 */
			[
				'Potraviny',
				'Restaurace, fast-food',
				'Kavárna, bar',
			],
			/* 2 */
			[
				'Oblečení a boty',
				'Lékárna',
				'Elektronika, příslušenství',
				'Dárky, radost',
				'Zdraví a krása',
				'Dům a zahrada',
				'Šperky, doplňky',
				'Děti',
				'Domácí mazlíčci, zvířata',
				'Psací potřeby, nářadí',
			],
			/* 3 */
			[
				'Energie, utility',
				'Údržba, opravy',
				'Hypotéka',
				'Pojištění majetku',
				'Nájemné',
				'Ostátní služby',
			],
			/* 4 */
			[
				'Veřejná doprava',
				'Taxi',
				'Služební cesty',
				'Velká vzdálenost',
			],
			/* 5 */
			[
				'Palivo',
				'Parkoviště',
				'Leasing',
				'Pronájem vozidla',
				'Pojištění vozidla',
				'Údržba vozidla',
			],
			/* 6 */
			[
				'Wellness, krása',
				'Aktivní sport, fitness',
				'Alkohol, tabák',
				'Knihy, audio',
				'Dary, charita',
				'Kultura, akce',
				'Vzdělávání, rozvoj',
				'Zdravotní péče, lékař',
				'Koníčky',
				'Dovolená, výlety, hotely',
				'Životní události',
				'Loterie, hazardní hry',
				'TV, streamování',
			],
			/* 7 */
			[
				'Telefonní komunikace',
				'Internet',
				'Předplatné, software, aplikace, hry',
				'Poštovní služby',
			],
			/* 8 */
			[
				'Poradní',
				'Poplatky',
				'Daně',
				'Pokuty',
				'Pojištění',
				'Půjčka, úroky',
			],
			/* 9 */
			[
				'Finanční investice',
				'Nemovitost',
				'Úspory',
			],
			/* 10 */
			[
				'Chybějící',
				'Ostatní'
			]
		];
	else if (lang == 'ru')
		return [
			/* 1 */
			[
				'Продукты',
				'Ресторан, фаст-фуд',
				'Кафе, бар',
			],
			/* 2 */
			[
				'Одежда и обувь',
				'Аптека',
				'Электроника, аксессуары',
				'Подарки, радость',
				'Здоровье, красота',
				'Дом, сад',
				'Драгоценности, аксессуары',
				'Дети',
				'Домашние животные, животные',
				'Канцтовары, инструменты',
			],
			/* 3 */
			[
				'Коммунальные услуги',
				'Обслуживание, ремонт',
				'Ипотека',
				'Страхование собственности',
				'Аренда',
				'Услуги',
			],
			/* 4 */
			[
				'Общественный транспорт',
				'Такси',
				'Командировки',
				'Длинная дистанция',
			],
			/* 5 */
			[
				'Топливо',
				'Парковка',
				'Лизинг',
				'Аренда авто',
				'Страхование авто',
				'Обслуживание авто',
			],
			/* 6 */
			[
				'Красота',
				'Активный спорт, фитнес',
				'Алкоголь, табак',
				'Книги, аудио',
				'Подарки, благотворительность',
				'Культура, события',
				'Обучение, развитие',
				'Здравоохранение, врач',
				'Увлечения, хобби',
				'Отдых, поездки, отели',
				'Жизненные события',
				'Лотерея, азартные игры',
				'Телевидение',
			],
			/* 7 */
			[
				'Телефонная связь',
				'Интернет',
				'Подписки, программное обеспечение, приложения, игры',
				'Почтовые услуги',
			],
			/* 8 */
			[
				'Консультации',
				'Сборы',
				'Налоги',
				'Штрафы',
				'Страхование',
				'Кредит, проценты',
			],
			/* 9 */
			[
				'Финансовые вложения',
				'Недвижимость',
				'Сбережения',
			],
			/* 10 */
			[
				'Недостающее',
				'Другое'
			]
		];
	else if (lang == 'ua')
		return [
			/* 1 */
			[
				'Бакалія, продукты',
				'Ресторан, фаст-фуд',
				'Кафе, бар',
			],
			/* 2 */
			[
				'Одяг і взуття',
				'Аптека',
				'Електроніка, аксесуари',
				'Подарунки, радість',
				'Здоров\'я і краса',
				'Дім, сад',
				'Коштовності, аксесуари',
				'Діти',
				'Домашні тварини, тварини',
				'Канцтовари, інструменти',
			],
			/* 3 */
			[
				'Комунальні послуги',
				'Технічне обслуговування, ремонт',
				'Іпотека',
				'Страхування майна',
				'Оренда житла',
				'Послуги (житло)',
			],
			/* 4 */
			[
				'Громадський транспорт',
				'Таксі',
				'Відрядження',
				'Довга відстань',
			],
			/* 5 */
			[
				'Паливо',
				'Паркінг',
				'Лізинг',
				'Оренда авто',
				'Страхування авто',
				'Обслуговування авто',
			],
			/* 6 */
			[
				'Здоров\'я, краса',
				'Активний спорт, фітнес',
				'Алкоголь, тютюн',
				'Книги, аудіо',
				'Подарунки, благодійність',
				'Культура, заходи',
				'Освіта, розвиток',
				'Охорона здоров\'я, лікар',
				'Хобі',
				'Відпочинок, подорожі, готелі',
				'Життєві події',
				'Лотерея, азартні ігри',
				'Телебачення',
			],
			/* 7 */
			[
				'Телефонний зв\'язок',
				'Інтернет',
				'Підписки, програмне забезпечення, ігри',
				'Поштові послуги',
			],
			/* 8 */
			[
				'Дорадчий, консультації',
				'Збори',
				'Податки',
				'Штрафи',
				'Страхування',
				'Кредит, проценти',
			],
			/* 9 */
			[
				'Фінансові інвестиції',
				'Нерухомість',
				'Заощадження',
			],
			/* 10 */
			[
				'Відсутнє, загублене',
				'Інше'
			]
		];
}

function getCategoriesIncomeTitlesByLanguage (lang) {

	if (lang == 'en')
		return [
			/* 1 */ 'Salary',
			/* 2 */ 'Scholarship',
			/* 3 */ 'Sale',
			/* 4 */ 'Rent',
			/* 5 */ 'Investments',
			/* 6 */ 'Gifts',
			/* 7 */ 'Lottery',
			/* 8 */ 'Refund',
			/* 9 */ 'Transfers'
		  ];
	else if (lang == 'cz')
		return [
			/* 1 */ 'Plat',
			/* 2 */ 'Stipendium',
			/* 3 */ 'Prodej',
			/* 4 */ 'Nájemné',
			/* 5 */ 'Investice',
			/* 6 */ 'Dárky',
			/* 7 */ 'Loterie',
			/* 8 */ 'Vrácení peněz',
			/* 9 */ 'Převody'
		  ];
	else if (lang == 'ru')
		return [
			/* 1 */ 'Зарплата',
			/* 2 */ 'Стипендия',
			/* 3 */ 'Продажа',
			/* 4 */ 'Аренда',
			/* 5 */ 'Вложения',
			/* 6 */ 'Подарки, дары',
			/* 7 */ 'Лотерея',
			/* 8 */ 'Возвращение денег',
			/* 9 */ 'Переводы'
		  ];
	else if (lang == 'ua')
		return [
			/* 1 */ 'Зарплата',
			/* 2 */ 'Стипендія',
			/* 3 */ 'Продаж',
			/* 4 */ 'Оренда',
			/* 5 */ 'Інвестиції',
			/* 6 */ 'Подарунки',
			/* 7 */ 'Лотерея',
			/* 8 */ 'Повернення коштів',
			/* 9 */ 'Перекази'
		  ];
}


function uploadLanguageToHistoryNavbars (lang) {

	let array = id('history-period-nav').getElementsByTagName('input');

	if (lang == 'en') {
		array[0].value = 'This month';
		array[1].value = 'Prev month';
		array[2].value = 'Custom';
	} else if (lang == 'cz') {
		array[0].value = 'Tento měsíc';
		array[1].value = 'Před měsíc';
		array[2].value = 'Vlastní';
	} else if (lang == 'ru') {
		array[0].value = 'Этот месяц';
		array[1].value = 'Предыдущий';
		array[2].value = 'Фильтр';
	} else if (lang == 'ua') {
		array[0].value = 'Цей місяць';
		array[1].value = 'Попередній';
		array[2].value = 'Фільтр';
	}

	array = id('history-type-nav').getElementsByTagName('input');

	if (lang == 'en') {
		array[0].value = 'Expenses';
		array[1].value = 'Incomes';
		array[2].value = 'View all';
	} else if (lang == 'cz') {
		array[0].value = 'Výdaje';
		array[1].value = 'Příjmy';
		array[2].value = 'Vše';
	} else if (lang == 'ru') {
		array[0].value = 'Расходы';
		array[1].value = 'Доходы';
		array[2].value = 'Все';
	} else if (lang == 'ua') {
		array[0].value = 'Витрати';
		array[1].value = 'Доходи';
		array[2].value = 'Все';
	}
}


function uploadLanguageToWidgets (lang) {

	let array = id('stats-column').getElementsByClassName('stats-column-title');

	if (lang == 'en') {
		array[0].firstElementChild.innerHTML = 'Incomes';
		array[1].firstElementChild.innerHTML = 'Expenses';
	} else if (lang == 'cz') {
		array[0].firstElementChild.innerHTML = 'Příjmy';
		array[1].firstElementChild.innerHTML = 'Výdaje';
	} else if (lang == 'ru') {
		array[0].firstElementChild.innerHTML = 'Доходы';
		array[1].firstElementChild.innerHTML = 'Расходы';
	} else if (lang == 'ua') {
		array[0].firstElementChild.innerHTML = 'Доходи';
		array[1].firstElementChild.innerHTML = 'Витрати';
	}
}


function uploadLanguageToTitles(lang) {

	let el = id('make-record-window').getElementsByClassName('field-title');

	if (lang == 'en') {
		el[0].innerHTML = 'Amount';
		el[1].innerHTML = 'Account';
		el[2].innerHTML = 'Category';
	} else if (lang == 'cz') {
		el[0].innerHTML = 'Částka';
		el[1].innerHTML = 'Účet';
		el[2].innerHTML = 'Kategorie';
	} else if (lang == 'ru') {
		el[0].innerHTML = 'Сумма';
		el[1].innerHTML = 'Счёт';
		el[2].innerHTML = 'Категория';
	} else if (lang == 'ua') {
		el[0].innerHTML = 'Сума';
		el[1].innerHTML = 'Рахунок';
		el[2].innerHTML = 'Категорія';
	}

	el = id('edit-account').getElementsByClassName('field-title');

	if (lang == 'en') {
		el[0].innerHTML = 'Currency';
		el[1].innerHTML = 'Balance';
		el[2].innerHTML = 'Color';
	} else if (lang == 'cz') {
		el[0].innerHTML = 'Měna';
		el[1].innerHTML = 'Zůstatek';
		el[2].innerHTML = 'Barva';
	} else if (lang == 'ru') {
		el[0].innerHTML = 'Валюта';
		el[1].innerHTML = 'Баланс';
		el[2].innerHTML = 'Цвет';
	} else if (lang == 'ua') {
		el[0].innerHTML = 'Валюта';
		el[1].innerHTML = 'Баланс';
		el[2].innerHTML = 'Колір';
	}

	el = id('date-filter-menu').getElementsByClassName('field-title');

	if (lang == 'en') {
		el[0].innerHTML = 'From';
		el[1].innerHTML = 'To';
	} else if (lang == 'cz') {
		el[0].innerHTML = 'Od';
		el[1].innerHTML = 'Do';
	} else if (lang == 'ru') {
		el[0].innerHTML = 'От';
		el[1].innerHTML = 'До';
	} else if (lang == 'ua') {
		el[0].innerHTML = 'Від';
		el[1].innerHTML = 'До';
	}
}


function uploadLanguageToButtons (lang) {

	let el = id('make-record-button');

	if (lang == 'en')
		el.value = 'Make record';
	else if (lang == 'cz')
		el.value = 'Udělelat záznam';
	else if (lang == 'ru')
		el.value = 'Сделать запись';
	else if (lang == 'ua')
		el.value = 'Зробити запис';

	el = id('settings-button');

	if (lang == 'en')
		el.value = 'Settings';
	else if (lang == 'cz')
		el.value = 'Nastavení';
	else if (lang == 'ru')
		el.value = 'Настройки';
	else if (lang == 'ua')
		el.value = 'Налаштування';

	el = id('remove-record');

	if (lang == 'en')
		el.value = 'Remove record';
	else if (lang == 'cz')
		el.value = 'Smazat záznam';
	else if (lang == 'ru')
		el.value = 'Удалить запись';
	else if (lang == 'ua')
		el.value = 'Видалити запис';

	el = id('record-types').getElementsByTagName('input');

	if (lang == 'en') {
		el[0].value = 'Transfer';
		el[1].value = 'Expense';
		el[2].value = 'Income';
	} else if (lang == 'cz') {
		el[0].value = 'Převod';
		el[1].value = 'Výdaj';
		el[2].value = 'Příjem';
	} else if (lang == 'ru') {
		el[0].value = 'Перевод';
		el[1].value = 'Расход';
		el[2].value = 'Доход';
	} else if (lang == 'ua') {
		el[0].value = 'Переказ';
		el[1].value = 'Витрата';
		el[2].value = 'Дохід';
	}

	el = id('make-record-save-button');

	if (lang == 'en')
		el.value = 'Save record';
	else if (lang == 'cz')
		el.value = 'Uložit záznam';
	else if (lang == 'ru')
		el.value = 'Сохранить запись';
	else if (lang == 'ua')
		el.value = 'Зберегти запис';

	el = id('root').getElementsByClassName('back-button');

	if (lang == 'en')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Back';
	else if (lang == 'cz')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Zpátky';
	else if (lang == 'ru')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Назад';
	else if (lang == 'ua')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Назад';

	el = id('settings-categories').getElementsByClassName('settings-categories-button');

	if (lang == 'en') {
		el[0].value = 'Language';
		el[1].value = 'Reset data';
		el[2].value = 'Themes';
		el[3].value = 'Top margin';
		el[4].value = 'Accounts';
	} else if (lang == 'cz') {
		el[0].value = 'Jazyk';
		el[1].value = 'Resetovat data';
		el[2].value = 'Motivy';
		el[3].value = 'Horní okraj';
		el[4].value = 'Účty';
	} else if (lang == 'ru') {
		el[0].value = 'Язык';
		el[1].value = 'Сбросить данные';
		el[2].value = 'Темы';
		el[3].value = 'Верхний отступ';
		el[4].value = 'Счета';
	} else if (lang == 'ua') {
		el[0].value = 'Мова';
		el[1].value = 'Скинути дані';
		el[2].value = 'Теми';
		el[3].value = 'Верхній відступ';
		el[4].value = 'Рахунки';
	}

	el = id('root').getElementsByClassName('close-button');

	if (lang == 'en')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Close';
	else if (lang == 'cz')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Zavřít';
	else if (lang == 'ru')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Закрыть';
	else if (lang == 'ua')
		for (let a = 0; a < el.length; a++)
			el[a].value = 'Закрити';

	el = id('remove-account');

	if (lang == 'en')
		el.value = 'Remove account';
	else if (lang == 'cz')
		el.value = 'Smazat účet';
	else if (lang == 'ru')
		el.value = 'Удалить счёт';
	else if (lang == 'ua')
		el.value = 'Видалити рахунок';

	el = id('save-account');

	if (lang == 'en')
		el.value = 'Save';
	else if (lang == 'cz')
		el.value = 'Uložit';
	else if (lang == 'ru')
		el.value = 'Сохранить';
	else if (lang == 'ua')
		el.value = 'Зберегти';

	el = id('submit-date-filter');

	if (lang == 'en')
		el.value = 'Confirm';
	else if (lang == 'cz')
		el.value = 'Potvrdit';
	else if (lang == 'ru')
		el.value = 'Подтвердить';
	else if (lang == 'ua')
		el.value = 'Підтвердити';

	el = id('date-filter-other').getElementsByTagName('input');

	if (lang == 'en') {
		el[0].value = 'This week';
		el[1].value = '7 days';
		el[2].value = 'This year';
		el[3].value = 'Prev year';
	} else if (lang == 'cz') {
		el[0].value = 'Tento týden';
		el[1].value = '7 dní';
		el[2].value = 'Tento rok';
		el[3].value = 'Před rok';
	} else if (lang == 'ru') {
		el[0].value = 'Эта неделя';
		el[1].value = '7 дней';
		el[2].value = 'Этот год';
		el[3].value = 'Пред год';
	} else if (lang == 'ua') {
		el[0].value = 'Цей тиждень';
		el[1].value = '7 днів';
		el[2].value = 'Цей рік';
		el[3].value = 'Попер рік';
	}

	el = id('date-filter-months').getElementsByTagName('input');

	if (lang == 'en') {
		el[0].value = 'Jan';
		el[1].value = 'Feb';
		el[2].value = 'Mar';
		el[3].value = 'Apr';
		el[4].value = 'May';
		el[5].value = 'June';
		el[6].value = 'July';
		el[7].value = 'Aug';
		el[8].value = 'Sept';
		el[9].value = 'Oct';
		el[10].value = 'Nov';
		el[11].value = 'Dec';
	} else if (lang == 'cz') {
		el[0].value = 'Led';
		el[1].value = 'Ún';
		el[2].value = 'Brez';
		el[3].value = 'Dub';
		el[4].value = 'Kvet';
		el[5].value = 'Cerv';
		el[6].value = 'Cerven';
		el[7].value = 'Srp';
		el[8].value = 'Září';
		el[9].value = 'Říj';
		el[10].value = 'List';
		el[11].value = 'Pros';
	} else if (lang == 'ru') {
		el[0].value = 'Янв';
		el[1].value = 'Фев';
		el[2].value = 'Мар';
		el[3].value = 'Апр';
		el[4].value = 'Май';
		el[5].value = 'Июн';
		el[6].value = 'Июл';
		el[7].value = 'Авг';
		el[8].value = 'Сен';
		el[9].value = 'Окт';
		el[10].value = 'Ноя';
		el[11].value = 'Дек';
	} else if (lang == 'ua') {
		el[0].value = 'Січ';
		el[1].value = 'Лют';
		el[2].value = 'Бер';
		el[3].value = 'Квіт';
		el[4].value = 'Трав';
		el[5].value = 'Черв';
		el[6].value = 'Лип';
		el[7].value = 'Серп';
		el[8].value = 'Вер';
		el[9].value = 'Жовт';
		el[10].value = 'Лист';
		el[11].value = 'Груд';
	}

	el = id('enable-history-scroll-button');

	if (lang == 'en')
		el.value = 'Enable scrolling';
	else if (lang == 'cz')
		el.value = 'Povolit rolování';
	else if (lang == 'ru')
		el.value = 'Включить прокрутку';
	else if (lang == 'ua')
		el.value = 'Увімкнути прокручування';
}





function applyTheme (theme) {
	if (theme == 'l') {
		id('root').classList.remove('wallet-darkblue');
		id('root').classList.remove('wallet-dark');
		id('root').classList.add('wallet-light');
	} else if (theme == 'b') {
		id('root').classList.remove('wallet-light');
		id('root').classList.remove('wallet-dark');
		id('root').classList.add('wallet-darkblue');
	} else if (theme == 'd') {
		id('root').classList.remove('wallet-darkblue');
		id('root').classList.remove('wallet-light');
		id('root').classList.add('wallet-dark');
	}

	setTimeout(() => {
		applyThemeForPreloader(theme);
	}, 1);
}

function applyThemeForPreloader (theme) {

	if (theme == 'l') {
		id('preloader').classList.add('light');
	} else if (theme == 'b') {
		id('preloader').classList.add('darkblue');
	} else if (theme == 'd') {
		id('preloader').classList.add('dark');
	}
}

function checkAccountsColor () {
	for (let account of id('root').getElementsByClassName('account'))
		if (account.style.background == 'rgb(5, 5, 5)')
			if (localStorage.getItem('T') == 'b' || localStorage.getItem('T') == 'd')
				account.classList.add('invert-color');
			else
				account.classList.remove('invert-color');
}
function checkAccountColor (account) {
	if (account.style.background == 'rgb(5, 5, 5)') {
		if (localStorage.getItem('T') == 'b' || localStorage.getItem('T') == 'd')
			account.classList.add('invert-color');
	} else
		account.classList.remove('invert-color');
}

function applyTopmargin () {
  id('accounts').style.paddingTop = `calc(15px + ${localStorage.getItem('TM')}px)`;
  id('settings').style.paddingTop = `calc(15px + ${localStorage.getItem('TM')}px)`;
  setDateFilterMenuTopPosition();
  // id('popup-notification-cont').style.paddingTop = 'calc(4vh + ' + localStorage.getItem('topmargin') + 'px';
}



function addAccount () {
	localStorage.setItem('ACount', Number(localStorage.getItem('ACount')) + 1);
	let acc_count = localStorage.getItem('ACount');

	localStorage.setItem('AColor' + acc_count, '050505');
	localStorage.setItem('ACurrency' + acc_count, 'USD');
	localStorage.setItem('ABalance' + acc_count, (0).toFixed(2));
}

function uploadAccount (account_num, container) {

	let color = localStorage.getItem('AColor' + account_num);
	let currency = localStorage.getItem('ACurrency' + account_num);
	let balance = Number(localStorage.getItem('ABalance' + account_num));
	
	// accounts_root.render(<Account color={color} currency={currency} balance={balance} />);
	// settings_accounts_root.render(<Account color={color} currency={currency} balance={balance} />);
	// make_record_accounts_root.render(<Account color={color} currency={currency} balance={balance} />);

	container.insertAdjacentHTML('beforeend', account_el(account_num, color, currency, Number(balance).toFixed(2)));
	adaptInputLengthExplicitly(container.lastElementChild.firstElementChild);
	adaptInputLengthExplicitly(container.lastElementChild.lastElementChild);
}



function uploadCategoriesToItsWindow (container, titles_array, icons_array) {

	container.insertAdjacentHTML(
		'afterbegin',
		category_list_el(titles_array.length - 1, icons_array, titles_array)
	);

	for (let a = titles_array.length - 2; a >= 0; a--) {
		container.insertAdjacentHTML('afterbegin', category_list_hr);
		container.insertAdjacentHTML(
			'afterbegin',
			category_list_el(a, icons_array, titles_array)
		);
	}
}

function uploadSubcategoriesToItsWindow() {
	
	for (let a = subcategories_titles.length - 1; a >= 0; a--) {

		id('subcategories').insertAdjacentHTML(
			'afterbegin',
			`<div class="subcategory-cont"></div>`
		);
		
		for (let b = subcategories_titles[a].length - 1; b >= 0; b--) {

			id('subcategories').firstElementChild.insertAdjacentHTML(
				'afterbegin',
				subcategory_list_el(
					b,
					subcategories_icons, subcategories_titles,
					a, b
					)
					);
			id('subcategories').firstElementChild.insertAdjacentHTML('afterbegin', category_list_hr);
			
		}

		id('subcategories').firstElementChild.firstElementChild.remove();

	}
}





function getDateFormat (input_date) {

	let date = input_date;
	
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	if (Number(month) < 10) month = '0' + month;
	let day = date.getDate();
	if (Number(day) < 10) day = '0' + day;
	let hours = date.getHours();
	if (Number(hours) < 10) hours = '0' + hours;
	let minutes = date.getMinutes();
	if (Number(minutes) < 10) minutes = '0' + minutes;
	let seconds = date.getSeconds();
	if (Number(seconds) < 10) seconds = '0' + seconds;

	return (`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
}

function uploadRecordsToHistory () {

	let period = id('history-period-nav').getAttribute('period'),
		account = id('accounts').getAttribute('accountnum'),
		type = id('history-type-nav').getAttribute('history-type'),
		compare_date = new Date();

	id('history').innerHTML = null;
	
	if (period == 'month 0') {

		compare_date.setDate(1);
		uploadRecordsByThisMonth(getDateFormat(compare_date), type, account);
		
	} else if (period == 'month -1') {
		
		compare_date.setMonth(compare_date.getMonth() - 1);
		compare_date.setDate(1);
		uploadRecordsByPrevMonth(getDateFormat(compare_date), type, account);

	} else if (period == 'custom')
		uploadRecordsByCustomPeriod();
	
	for (let record of id('history').getElementsByClassName('record'))
		setUpClickOnRecord(record);
}

function uploadRecordsByThisMonth (compare_date, type, account) {
	
	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--)
		if ( (getRecordDateFormat(record_num)) > compare_date ) {
			if (
				(type == 'all' || localStorage.getItem(`RType${record_num}`) == type) &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				addRecordToHistory(record_num, localStorage.getItem(`RAccount${record_num}`), 'beforeend');
		} else break;
}

function uploadRecordsByPrevMonth (compare_date_pattern, type, account) {

	let compare_date = new Date(compare_date_pattern), 
		record_date;
	
	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--) {

		record_date = new Date(getRecordDateFormat(record_num));
		
		if (record_date.getMonth() == compare_date.getMonth()) {
			if (
				(type == 'all' || localStorage.getItem(`RType${record_num}`) == type) &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				addRecordToHistory(record_num, localStorage.getItem(`RAccount${record_num}`), 'beforeend');
		} else if (record_date.getMonth() < compare_date.getMonth())
			break;
		
	}
}

function uploadDataToCustomDateFilterMenu() {

	let inputs = id('date-filter-menu').getElementsByClassName('field-date');

	let this_month = (new Date()).getMonth();
	let this_year = (new Date()).getFullYear();
	let border1 = getDateBorderByInput(59, 59, 23, 0, this_month + 1, this_year);
	let border2 = getDateBorderByInput(0, 0, 0, 1, this_month, this_year);
	
	inputs[0].value = getDateFormat(border1);
	inputs[1].value = getDateFormat(border2);

	inputs = id('date-filter-other').getElementsByTagName('input');

	for (let a = 0; a < inputs.length; a++)
		adaptInputLengthExplicitly(inputs[a]);
}

function showCustomDateFilterMenu () {

	id('date-filter-menu').classList.add('show');
	
	let inputs = id('date-filter-menu').getElementsByClassName('field-date');
			
	id('submit-date-filter').onclick = () => {
		if ( (new Date(inputs[0].value)) > (new Date(inputs[1].value)) ) {
			hideCustomDateFilterMenu();
			uploadRecordsToHistoryAnimated();
			uploadExpensesIncomesStats();
			updatePieChart();
		} else
			animateEmptyFieldError(inputs[1]);
	}
}

function hideCustomDateFilterMenu () {
	id('date-filter-menu').classList.remove('show');
}

function uploadRecordsByCustomPeriod () {
	
	let inputs = id('date-filter-menu').getElementsByClassName('field-date');
	
	let account = id('accounts').getAttribute('accountnum'),
		type = id('history-type-nav').getAttribute('history-type');
	let date_border_from = new Date(inputs[0].value),
		date_border_to = new Date(inputs[1].value),
		record_date;
	
	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--) {

		record_date = new Date(getRecordDateFormat(record_num));
		
		if (record_date < date_border_from && record_date > date_border_to) {
			if (
				(type == 'all' || localStorage.getItem(`RType${record_num}`) == type) &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				addRecordToHistory(record_num, localStorage.getItem(`RAccount${record_num}`), 'beforeend');
		} else if (record_date < date_border_to)
			break;
		
	}
}

function uploadRecordsToHistoryAnimated () {

	id('history-reloading-background').classList.add('history-reloading-background-show');
	
	setTimeout(() => {
		id('history').innerHTML = null;
		uploadRecordsToHistory();
		id('history-reloading-background').classList.remove('history-reloading-background-show');
	}, 390);
}

function getRecordDateFormat (n) {

	let year = localStorage.getItem(`RYear${n}`);
	let month = localStorage.getItem(`RMonth${n}`);
	if (Number(month) < 10) month = '0' + month;
	let day = localStorage.getItem(`RDay${n}`);
	if (Number(day) < 10) day = '0' + day;
	let hour = localStorage.getItem(`RHour${n}`);
	if (Number(hour) < 10) hour = '0' + hour;
	let minute = localStorage.getItem(`RMinute${n}`);
	if (Number(minute) < 10) minute = '0' + minute;

	return (`${year}-${month}-${day}T${hour}:${minute}:00`);
}

function setUpClickOnRecord (record) {
	record.onclick = function() {

		let record_num = this.getAttribute('recordnum'),
			windowEl_cont = id('make-record-window-cont'),
			windowEl = id('make-record-window'),
			clickEl = this;
		
		disableScrolling();
		prepareEditRecordWindow(record_num);

		let top_position = openFloatingWindow(clickEl, windowEl_cont, windowEl, calculateScaleX(clickEl, windowEl_cont));
		windowEl.setAttribute('top-position', top_position);

		// set up click on remove record button
		id('remove-record').onclick = () => {

			removeRecord(record_num);

			reconnectFloatingWindow(clickEl, id('history'), windowEl_cont, windowEl);
			closeReconnectedFloatingWindow(windowEl_cont, windowEl);
			reuploadRecordsToHistoryAnimated();

			setTimeout(() => {
				resetMakeRecordWindowData();
				uploadExpensesIncomesStats();
				updatePieChart();
				enableScrolling();
			}, 390);

		}

		// set up click on close area
		windowEl_cont.firstElementChild.onclick = () => {
			enableScrolling();
			closeFloatingWindow(clickEl, windowEl_cont, windowEl);
			setTimeout(resetMakeRecordWindowData, 390);
		}

	}
}

function prepareEditRecordWindow (record_num) {

	id('record-types').classList.add('element-hide');
	id('record-types').setAttribute('record-type', localStorage.getItem(`RType${record_num}`));

	id('make-record-window').setAttribute('status', 'old');
	id('make-record-window').setAttribute('recordnum', record_num);
	
	id('make-record-date').value = getRecordDateFormat(record_num);

	id('make-record-amount').value = localStorage.getItem(`RAmount${record_num}`);
	adaptInputLengthExplicitly(id('make-record-amount'));

	let account_num = localStorage.getItem(`RAccount${record_num}`);
	
	id('make-record-account').innerHTML = account_el( account_num, localStorage.getItem(`AColor${account_num}`), localStorage.getItem(`ACurrency${account_num}`), Number(localStorage.getItem(`ABalance${account_num}`)).toFixed(2) );
	id('make-record-account').setAttribute( 'accountnum', account_num );
	
	checkAccountColor(id('make-record-account').firstElementChild);
	let account_inputs = id('make-record-account').getElementsByTagName('input');
	adaptInputLengthExplicitly(account_inputs[0]);
	adaptInputLengthExplicitly(account_inputs[1]);
		
	// if (localStorage.getItem('ACount') > 1) {
	// 	id('record-type-transfer').classList.remove('window-nav-el-hide');
	// 	// upload_transfer_account_in_makerecord();
	// }
	// else id('record-type-transfer').classList.add('window-nav-el-hide');
	
	if (localStorage.getItem(`RType${record_num}`) == '-') {
		
		id('make-record-category').firstElementChild.innerHTML = subcategories_icons[localStorage.getItem(`RCategory${record_num}`)][localStorage.getItem(`RSubcategory${record_num}`)];
		id('make-record-category').lastElementChild.value = subcategories_titles[localStorage.getItem(`RCategory${record_num}`)][localStorage.getItem(`RSubcategory${record_num}`)];
		
	} else if (localStorage.getItem(`RType${record_num}`) == '+') {
		
		id('make-record-category').firstElementChild.innerHTML = categories_income_icons[localStorage.getItem(`RCategory${record_num}`)];
		id('make-record-category').lastElementChild.value = categories_income_titles[localStorage.getItem(`RCategory${record_num}`)];
		
	}
	
	id('make-record-category').setAttribute('categorynum', localStorage.getItem(`RCategory${record_num}`));
	id('make-record-category').setAttribute('subcategorynum', localStorage.getItem(`RSubcategory${record_num}`));
	
}

function removeRecord (record_num) {
	
	returnRecordAmountToBalance(record_num);

	for (let a = Number(record_num); a <= Number(localStorage.getItem('RCount')); a++)
		if ( a < Number(localStorage.getItem('RCount')) ) moveRecord(a + 1, a);
		else if ( a == Number(localStorage.getItem('RCount')) ) removeRecordFromStorage(a);
}

function returnRecordAmountToBalance (record_num) {

	let type = localStorage.getItem(`RType${record_num}`);
	let amount = Number(localStorage.getItem(`RAmount${record_num}`));
	let account_num = localStorage.getItem(`RAccount${record_num}`);
	let balance = Number(localStorage.getItem(`ABalance${account_num}`));

	if (type == '-') localStorage.setItem(`ABalance${account_num}`, balance + amount);
	else if (type == '+') localStorage.setItem(`ABalance${account_num}`, balance - amount);

	setTimeout(() => {
		updateAccountInfo( account_num, 'Balance', id('accounts').getElementsByClassName('account') );
	}, 400);
}

function removeRecordFromStorage (n) {
	
	localStorage.removeItem(`RType${n}`);
	localStorage.removeItem(`RAmount${n}`);
	localStorage.removeItem(`RAccount${n}`);
	localStorage.removeItem(`RCategory${n}`);
	localStorage.removeItem(`RSubcategory${n}`);

	localStorage.removeItem(`RMinute${n}`);
	localStorage.removeItem(`RHour${n}`);
	localStorage.removeItem(`RDay${n}`);
	localStorage.removeItem(`RMonth${n}`);
	localStorage.removeItem(`RYear${n}`);

	localStorage.setItem('RCount', Number(localStorage.getItem('RCount')) - 1);
}



id('enable-history-scroll-button').onclick = function() {

	if (this.classList.contains('active'))
		this.classList.remove('active');
	else
		this.classList.add('active');
	
	changeHistoryScroll();
}

function changeHistoryScroll () {

	animateClickOnHistory(id('history'));

	setTimeout(() => {
		if (id('history').classList.contains('history-scroll'))
			id('history').classList.remove('history-scroll');
		else id('history').classList.add('history-scroll');
	}, 200);
}

function animateClickOnHistory (el) {
	el.style.transform = 'scale(0.99)';
	setTimeout(() => { el.style.transform = 'scale(1)'; }, 100);
}



function uploadExpensesIncomesStats () {

	let incomes_amount = getTotalAmountOfExactlyType('+');
	let expenses_amount = getTotalAmountOfExactlyType('-');
	let total_amount = incomes_amount + expenses_amount;
	
	if (total_amount == 0) total_amount = 1;
	id('incomes-column').style.width = ((100 / total_amount) * incomes_amount) + '%';
	id('expenses-column').style.width = ((100 / total_amount) * expenses_amount) + '%';
	
	let titles = id('stats-column').getElementsByClassName('stats-column-title');
	
	titles[0].style.opacity = '0';
	titles[1].style.opacity = '0';
	
	let currency = localStorage.getItem('ACurrency' + id('accounts').getAttribute('accountnum'));
	setTimeout(() => {
		id('incomes-column-amount').innerHTML = `+ ${incomes_amount} ${currency}`;
		id('expenses-column-amount').innerHTML = `- ${expenses_amount} ${currency}`;
		
		titles[0].style.opacity = '1';
		titles[1].style.opacity = '1';
	}, 300);
}

function getTotalAmountOfExactlyType (type) {

	let account = id('accounts').getAttribute('accountnum');
	let period = id('history-period-nav').getAttribute('period');
	let compare_date = new Date();
	let amount = 0;

	if (period == 'month 0') {

		compare_date.setDate(1);
		amount = getTotalAmountOfExactlyTypeByThisMonth(getDateFormat(compare_date), type, account, amount);
		
	} else if (period == 'month -1') {
		
		compare_date.setMonth(compare_date.getMonth() - 1);
		compare_date.setDate(1);
		amount = getTotalAmountOfExactlyTypeByPrevMonth(getDateFormat(compare_date), type, account, amount);

	} else if (period == 'custom')
		amount = getTotalAmountOfExactlyTypeByCustomPeriod(type, account, amount);

	return amount;
}

function getTotalAmountOfExactlyTypeByThisMonth (compare_date, type, account, amount) {

	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--)
		if ( (getRecordDateFormat(record_num)) > compare_date ) {
			if (
				localStorage.getItem(`RType${record_num}`) == type &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				amount += Number(localStorage.getItem(`RAmount${record_num}`));
		} else break;

	return amount;
}

function getTotalAmountOfExactlyTypeByPrevMonth (compare_date_pattern, type, account, amount) {

	let compare_date = new Date(compare_date_pattern), 
		record_date;
	
	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--) {

		record_date = new Date(getRecordDateFormat(record_num));
		
		if (record_date.getMonth() == compare_date.getMonth()) {
			if (
				localStorage.getItem(`RType${record_num}`) == type &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				amount += Number(localStorage.getItem(`RAmount${record_num}`));
		} else if (record_date.getMonth() < compare_date.getMonth())
			break;
		
	}

	return amount;
}

function getTotalAmountOfExactlyTypeByCustomPeriod (type, account, amount) {

	let inputs = id('date-filter-menu').getElementsByClassName('field-date');
	
	let date_border_from = new Date(inputs[0].value),
		date_border_to = new Date(inputs[1].value),
		record_date;
	
	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--) {

		record_date = new Date(getRecordDateFormat(record_num));
		
		if (record_date < date_border_from && record_date > date_border_to) {
			if (
				localStorage.getItem(`RType${record_num}`) == type &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				amount += Number(localStorage.getItem(`RAmount${record_num}`));
		} else if (record_date < date_border_to)
			break;
		
	}

	return amount;
}





function calculateInnerScale (parent, child) {
	return ( (parent.clientWidth - ((parseInt(window.getComputedStyle(parent).paddingLeft)) * 2)) / child.clientWidth );
}

function fitPieChartSize () {

	let scaleX = calculateInnerScale(id('pie-chart-cont'), id('pie-chart'));
	id('pie-chart').setAttribute('scaleX', scaleX);
	id('pie-chart').style.transform = `scale(${scaleX})`;
}

function updatePieChart () {
	
	id('pie-chart').style.transform = `scale(0)`;
	let scaleX = id('pie-chart').getAttribute('scaleX');
	
	setTimeout(() => {
		uploadDataToPieChart();
		id('pie-chart').style.transform = `scale(${scaleX})`;
	}, 350);
}

function uploadDataToPieChart () {

	let results = getCategoriesStats();

	let type = id('history-type-nav').getAttribute('history-type');
	if (type == 'all') type = '-';
	uploadCategoriesToDetailPieChartPreview(
		type,
		id('accounts').getAttribute('accountnum'),
		results
	);
	// setUpClickOnDetailCategoriesPreview();

	drawPieChart(results);
	uploadAmountToPieChart();
}

function getCategoriesStats () {

	let account = id('accounts').getAttribute('accountnum'),
		period = id('history-period-nav').getAttribute('period'),
		type = id('history-type-nav').getAttribute('history-type');
	if (type == 'all') type = '-';

	let compare_date = new Date();
	let results = getArrayForStatsResults(type);
	
	if (period == 'month 0') {

		compare_date.setDate(1);
		results = getCategoriesStatsByThisMonth(getDateFormat(compare_date), type, account, results);
		
	} else if (period == 'month -1') {
		
		compare_date.setMonth(compare_date.getMonth() - 1);
		compare_date.setDate(1);
		results = getCategoriesStatsByPrevMonth(getDateFormat(compare_date), type, account, results);

	} else if (period == 'custom')
		results = getCategoriesStatsByCustomPeriod(type, account, results);
		
	return results;
}

function getArrayForStatsResults (type) {
	let results;

	if (type == '-')
		results = [
			/* 1 */ {total: 0, color: "#97a97c"},
			/* 2 */ {total: 0, color: "#9a8c98"},
			/* 3 */ {total: 0, color: "#f2e9e4"},
			/* 4 */ {total: 0, color: "#a26769"},
			/* 5 */ {total: 0, color: "#6d2e46"},
			/* 6 */ {total: 0, color: "#4a4e69"},
			/* 7 */ {total: 0, color: "#006494"},
			/* 8 */ {total: 0, color: "#709775"},
			/* 9 */ {total: 0, color: "#c9ada7"},
			/* 10 */ {total: 0, color: "#22223b"}
		];
	else if (type == '+')
		results = [
			/* 1 */ {total: 0, color: "#97a97c"},
			/* 2 */ {total: 0, color: "#4a4e69"},
			/* 3 */ {total: 0, color: "#9a8c98"},
			/* 4 */ {total: 0, color: "#ece2d0"},
			/* 5 */ {total: 0, color: "#c9ada7"},
			/* 6 */ {total: 0, color: "#006494"},
			/* 7 */ {total: 0, color: "#6d2e46"},
			/* 8 */ {total: 0, color: "#a26769"},
			/* 9 */ {total: 0, color: "#709775"}
		];

	return results;
}

function getCategoriesStatsByThisMonth (compare_date, type, account, results) {

	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--)
		if ( (getRecordDateFormat(record_num)) > compare_date ) {
			if (
				localStorage.getItem(`RType${record_num}`) == type &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				results[localStorage.getItem(`RCategory${record_num}`)].total += Number(localStorage.getItem(`RAmount${record_num}`));
		} else break;

	return results;
}

function getCategoriesStatsByPrevMonth (compare_date_pattern, type, account, results) {

	let compare_date = new Date(compare_date_pattern), 
		record_date;
	
	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--) {

		record_date = new Date(getRecordDateFormat(record_num));
		
		if (record_date.getMonth() == compare_date.getMonth()) {
			if (
				localStorage.getItem(`RType${record_num}`) == type &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				results[localStorage.getItem(`RCategory${record_num}`)].total += Number(localStorage.getItem(`RAmount${record_num}`));
		} else if (record_date.getMonth() < compare_date.getMonth())
			break;
		
	}

	return results;
}

function getCategoriesStatsByCustomPeriod (type, account, results) {

	let inputs = id('date-filter-menu').getElementsByClassName('field-date');
	
	let date_border_from = new Date(inputs[0].value),
		date_border_to = new Date(inputs[1].value),
		record_date;
	
	for (let record_num = Number(localStorage.getItem('RCount')); record_num >= 1; record_num--) {

		record_date = new Date(getRecordDateFormat(record_num));
		
		if (record_date < date_border_from && record_date > date_border_to) {
			if (
				localStorage.getItem(`RType${record_num}`) == type &&
				localStorage.getItem(`RAccount${record_num}`) == account
			)
				results[localStorage.getItem(`RCategory${record_num}`)].total += Number(localStorage.getItem(`RAmount${record_num}`));
		} else if (record_date < date_border_to)
			break;
		
	}

	return results;
}

function uploadCategoriesToDetailPieChartPreview (type, account, results) {

	id('pie-chart-categories-details').innerHTML = null;

	for (let a = 0; results[a]; a++)
		if (results[a].total != 0)
			uploadCategoryToDetailPieChartPreview(a, results[a].total, results[a].color, type, account);

	if (!(id('pie-chart-categories-details').firstElementChild))
		id('pie-chart-categories-details').classList.add('hide');
	else if (id('pie-chart-categories-details').classList.contains('hide'))
		id('pie-chart-categories-details').classList.remove('hide');
}

function uploadCategoryToDetailPieChartPreview (unit_num, amount, color, type, account) {
	let el;
	
	if (type == '-')
		el = constructCategoryPreviewEl(
			categories_expense_icons[unit_num],
			categories_expense_titles[unit_num],
			unit_num, type, amount,
			localStorage.getItem(`ACurrency${account}`)
		);
	else if (type == '+')
		el = constructCategoryPreviewEl(
			categories_income_icons[unit_num],
			categories_income_titles[unit_num],
			type, amount, unit_num,
			localStorage.getItem(`ACurrency${account}`)
		);

	id('pie-chart-categories-details').insertAdjacentHTML('beforeend', el);
	id('pie-chart-categories-details').lastElementChild.style.borderLeft = `4px solid ${color}`;
	id('pie-chart-categories-details').lastElementChild.style.borderRight = `4px solid ${color}`;
}

function constructCategoryPreviewEl (icon, title, category_num, type, amount, account_currency) {

	let el = `<div class="category-details" categorynum="${category_num}">
				<div class="category">
					<div>${icon}</div>
					<h3>${title}</h3>
				</div>
				<div class="category-amount">
					<h3>${type}</h3>
					<h3>${getReadableNumber( amount.toFixed(2) )}</h3>
					<h3>${account_currency}</h3>
				</div>
			</div>`;

	return el;
}

function setUpClickOnDetailCategoriesPreview () {

	for (let el in id('pie-chart-categories-details').getElementsByClassName('category-details')) {
		el.onclick = function() {
			uploadSubcategoriesToDetailCatagoryPreview(this.getAttribute('categorynum'));
		}
	}
}

function uploadSubcategoriesToDetailCatagoryPreview (category_num) {

	
}

function drawPieChart (results) {

	let ctx = id('pie-chart').getContext('2d');
	ctx.clearRect(0, 0, id('pie-chart').width, id('pie-chart').height);

	let sum = 0, currentAngle = 0,
		totalNumberOfPeople = results.reduce((sum, {total}) => sum + total, 0);

    for (let unit of results) {
        //calculating the angle the slice (portion) will take in the chart
        let portionAngle = (unit.total / totalNumberOfPeople) * 2 * Math.PI;
        //drawing an arc and a line to the center to differentiate the slice from the rest
        ctx.beginPath();
        ctx.arc(400, 400, 400, currentAngle, currentAngle + portionAngle);
        currentAngle += portionAngle;
        ctx.lineTo(400, 400);
        //filling the slices with the corresponding mood's color
        ctx.fillStyle = unit.color;
        ctx.fill();
    }

	for (let a = 0; a < results.length - 1; a++)
		results[a].total = 0;
}

function uploadAmountToPieChart () {

	let type = id('history-type-nav').getAttribute('history-type');
	if (type == 'all') type = '-';
	
	id('pie-chart-amount').classList.add('pie-chart-amount-hide');

	setTimeout(() => {
		if (type == '-')
			id('pie-chart-amount').innerHTML = id('expenses-column-amount').innerHTML;
		else if (type == '+')
			id('pie-chart-amount').innerHTML = id('incomes-column-amount').innerHTML;

		id('pie-chart-amount').classList.remove('pie-chart-amount-hide');
	}, 350);
}





function positionateDateFilterMenu () {
	let x = window.innerWidth - id('date-filter-menu').getBoundingClientRect().left;
	id('date-filter-menu').style.transform = `translateX(calc(${x}px + 10vw))`;
}

function setDateFilterMenuTopPosition () {
	id('date-filter-menu').style.top = `${id('sticky-topbar').getBoundingClientRect().bottom}px`;
}





function calculateScaleX (clickEl, windowEl_cont) {
	return ( clickEl.offsetWidth / (window.innerWidth - ((parseInt(window.getComputedStyle(windowEl_cont).paddingTop)) * 2)) );
}

function openFloatingWindow (clickEl, windowEl_cont, windowEl, scaleX) {
	let transition = `opacity .4s, transform .4s .03s`;
	
	windowEl_cont.classList.add('floating-window-cont-visible');
	
	let clickEl_position = (windowEl.getBoundingClientRect().top + (windowEl.offsetHeight / 2) - clickEl.getBoundingClientRect().top + ((clickEl.offsetHeight / 2))) * scaleX;
	clickEl.style.transition = transition;
	
	let windowEl_full_height = windowEl.clientHeight;
	let scaleY = scaleX / ((windowEl_full_height * scaleX) / clickEl.offsetHeight);
	windowEl.style.transform = `translateY(0px) scale(${scaleX}, ${scaleY})`;
	let top_position = clickEl.getBoundingClientRect().bottom - windowEl.getBoundingClientRect().bottom;
	windowEl.style.transform = `translateY(${top_position}px) scale(${scaleX}, ${scaleY})`;

	setTimeout(() => {
		windowEl.style.transition = transition;
		windowEl_cont.classList.add('floating-window-cont-darker');

		clickEl.style.opacity = '0';
		clickEl.style.transform = `scale(${1 * 1 / scaleX}) translateY(${clickEl_position}px)`;
	}, 1);

	return top_position;
}

function closeFloatingWindow (clickEl, windowEl_cont, windowEl) {
	
  clickEl.style.transition = `opacity .5s, transform .4s`;
  clickEl.style.opacity = '1';
  clickEl.style.transform = 'scale(1) translateY(0px)';

  windowEl.style.transition = `opacity .35s .15s, transform .4s`;
  windowEl_cont.classList.remove('floating-window-cont-darker');
  
  setTimeout(() => {
    windowEl_cont.classList.remove('floating-window-cont-visible');
    windowEl.style.transform = 'translateY(0px) scale(1)';
    windowEl.style.transition = 'all 0s';

	clickEl.style.transition = null;
	clickEl.style.transform = null;
	clickEl.style.opacity = null;
}, 390);
}

function changeFloatingWindowTransformation (clickEl, windowEl_cont, windowEl) {

	let clickEL_transition = clickEl.style.transition;
	clickEl.style.transition = 'transform 0s';
	clickEl.style.transform = 'scale(1) translateY(0px)';
	
	let scaleX = calculateScaleX(clickEl, windowEl_cont);
	let scaleY = scaleX / ((windowEl.clientHeight * scaleX) / clickEl.clientHeight);
	let top_position = windowEl.getAttribute('top-position');
	windowEl.style.transform = `translateY(${top_position}px) scale(${scaleX}, ${scaleY})`;

	let clickEl_position = (windowEl.getBoundingClientRect().top + (windowEl.clientHeight / 2) - clickEl.getBoundingClientRect().top + ((clickEl.clientHeight / 2))) * scaleX;
	clickEl.style.transform = `scale(${1 * 1 / scaleX}) translateY(${clickEl_position}px)`;

	return clickEL_transition;
}

function reconnectFloatingWindow (previous_clickEl, clickEl, windowEl_cont, windowEl) {

	previous_clickEl.style.display = 'none';
	let scaleX = calculateScaleX(clickEl, windowEl_cont);
	let scaleY = scaleX / ((windowEl.clientHeight * scaleX) / clickEl.clientHeight);

	let height_difference = windowEl.clientHeight - (windowEl.clientHeight * scaleY);
	let top_position = clickEl.getBoundingClientRect().top - ((height_difference / 2) + windowEl.getBoundingClientRect().top);

	windowEl.style.transform = `translateY(${top_position}px) scale(${scaleX}, ${scaleY})`;
}

function closeReconnectedFloatingWindow (windowEl_cont, windowEl) {

  windowEl.style.transition = `opacity .35s .15s, transform .4s`;
  windowEl_cont.classList.remove('floating-window-cont-darker');
  
  setTimeout(() => {
    windowEl_cont.classList.remove('floating-window-cont-visible');
    windowEl.style.transform = 'translateY(0px) scale(1)';
    windowEl.style.transition = 'all 0s';
  }, 390);
}





function showPopUpConnectedNotification (notification_command, notification_contEl, connected_window) {
	let notificationEl = notification_contEl.firstElementChild;
	
	if (notification_command == 'remove account')
		notificationEl.lastElementChild.firstElementChild.innerHTML = 'It will also delete all records connected with this account. It is irreversible action.';

	notification_contEl.style.top = (connected_window.getBoundingClientRect().top + 20) + 'px';
	notification_contEl.classList.add('show');

	notificationEl.style.transform = `scale(1.02) translateY(calc(${-(notificationEl.clientHeight)}px - 46px))`;
	
	setTimeout(() => {
		notificationEl.style.transform = `scale(1) translateY(calc(${-(notificationEl.clientHeight)}px - 40px))`;
	}, 400);
	
	hide_notification = setTimeout(() => { hidePopUpConnectedNotificationAfterTimer (notification_contEl); }, 5000);

	notificationEl.onclick = () => {
		clearTimeout(hide_notification);
		hidePopUpConnectedNotificationAfterTimer(notification_contEl);
	}
}

function hidePopUpConnectedNotificationAfterTimer (notification_contEl) {
	let notificationEl = notification_contEl.firstElementChild;

	notificationEl.style.transform = null;
	
	setTimeout(() => {
		notification_contEl.classList.remove('show');
		notificationEl.lastElementChild.firstElementChild.innerHTML = null;
	}, 400);
}

function hidePopUpConnectedNotification (notification_contEl) {
	let notificationEl = notification_contEl.firstElementChild;

	clearTimeout(hide_notification);
	
	notificationEl.style.opacity = 0;
	
	setTimeout(() => {
		notification_contEl.classList.remove('show');
		notificationEl.style = null;
		notificationEl.lastElementChild.firstElementChild.innerHTML = null;
	}, 400);
}





function openWindowBlock (windowEl_cont, windowEl) {

  windowEl_cont.classList.add('window-block-cont-visible');

  setTimeout(() => {
    windowEl_cont.classList.add('window-block-cont-darker');
    
    setTimeout(() => {
      windowEl.classList.add('window-block-transform');
    }, 300);
  }, 1);
}

function closeWindowBlock (windowEl_cont, windowEl) {

	windowEl.style = null;
	windowEl.classList.remove('window-block-transform');
	windowEl_cont.classList.remove('window-block-cont-darker');

	setTimeout(() => {
		windowEl_cont.classList.remove('window-block-cont-visible');
	}, 300);
}





// set up clicks on accounts on topbar
function setUpClickOnAccounts () {

	for (let account of id('accounts').getElementsByClassName('account'))
		account.onclick = function() {

			if (!(account.classList.contains('active-account'))) {
				// change active account
				for (let account of id('accounts').getElementsByClassName('account'))
					if (account == this) {
						
						setTimeout(() => { account.classList.add('active-account'); }, 100);
						id('accounts').setAttribute('accountnum', account.getAttribute('accountnum'));
						
					} else if (account.classList.contains('active-account'))
						account.classList.remove('active-account');
	
				// upload records to history
				uploadRecordsToHistoryAnimated();
				uploadExpensesIncomesStats();
				updatePieChart();
			}
			
		}

	id('accounts').firstElementChild.classList.add('active-account');
	id('accounts').setAttribute('accountnum', id('accounts').firstElementChild.getAttribute('accountnum'));
}

// set up clicks on history period nav buttons
const history_period_nav_buttons = id('history-period-nav').getElementsByTagName('div');

for (let button of history_period_nav_buttons) {
	button.onclick = function() {

		if ( !(button.classList.contains('active-input-cont')) ) {
			// change active button
			for (let button of history_period_nav_buttons)
				if (button == this) {

					button.classList.add('active-input-cont');
					id('history-period-nav').setAttribute('period', button.getAttribute('period'));

				} else if (button.classList.contains('active-input-cont'))
					button.classList.remove('active-input-cont');
	
			// upload records to history
			uploadRecordsToHistoryAnimated();
			uploadExpensesIncomesStats();
			updatePieChart();
		}

		if (
			button.getAttribute('period') == 'custom' &&
			!(id('date-filter-menu').classList.contains('show'))
		)
			showCustomDateFilterMenu();
		else if (id('date-filter-menu').classList.contains('show'))
			hideCustomDateFilterMenu();
		
	}
}

for (let button of id('date-filter-other').getElementsByTagName('input')) {
	button.onclick = function() {

		applyOtherDateToDateFieldsOfDateFilterMenu(this);
		
	}
}

function applyOtherDateToDateFieldsOfDateFilterMenu (button) {

	let inputs = id('date-filter-menu').getElementsByClassName('field-date');
	let button_period = button.getAttribute('period');
	let border1 = new Date(), border2 = new Date();

	if (button_period == 'thisweek') {
		
		border1 = getDateBySunday(border1);
		border2 = getDateByMonday(border2);

		border1 = getDateBorderByInput(59, 59, 23, border1.getDate(), border1.getMonth(), border1.getFullYear());
		border2 = getDateBorderByInput(0, 0, 0, border2.getDate(), border2.getMonth(), border2.getFullYear());
		
	} else if (button_period == '7days') {

		border2.setDate(Number((new Date()).getDate()) - 6);

		border1 = getDateBorderByInput(59, 59, 23, border1.getDate(), border1.getMonth(), border1.getFullYear());
		border2 = getDateBorderByInput(0, 0, 0, border2.getDate(), border2.getMonth(), border2.getFullYear());
		
	} else if (button_period == 'thisyear') {

		border1 = getDateBorderByInput(59, 59, 23, 31, 11, border1.getFullYear());
		border2 = getDateBorderByInput(0, 0, 0, 1, 0, border2.getFullYear());

	} else if (button_period == 'prevyear') {

		border1.setFullYear((new Date()).getFullYear() - 1);
		border2.setFullYear((new Date()).getFullYear() - 1);

		border1 = getDateBorderByInput(59, 59, 23, 31, 11, border1.getFullYear());
		border2 = getDateBorderByInput(0, 0, 0, 1, 0, border2.getFullYear());
		
	}
		
	inputs[0].value = getDateFormat(border1);
	inputs[1].value = getDateFormat(border2);
}

function getDateByMonday (date) {

	while (date.getDay() != 1)
		date.setDate(Number(date.getDate()) - 1);

	return date;
}

function getDateBySunday (date) {

	while (date.getDay() != 0)
		date.setDate(Number(date.getDate()) + 1);
	
	return date;
}

for (let button of id('date-filter-months').getElementsByTagName('input')) {
	button.onclick = function() {

		let inputs = id('date-filter-menu').getElementsByClassName('field-date');
	
		let border_year = (new Date(inputs[0].value)).getFullYear();
		let border1 = getDateBorderByInput(59, 59, 23, 0, Number(button.getAttribute('num')) + 1, border_year);
		let border2 = getDateBorderByInput(0, 0, 0, 1, button.getAttribute('num'), border_year);
		
		inputs[0].value = getDateFormat(border1);
		inputs[1].value = getDateFormat(border2);
		
	}
}

function getDateBorderByInput (seconds, minutes, hours, day, month, year) {
	let date = new Date();
	
	date.setSeconds(seconds);
	date.setMinutes(minutes);
	date.setHours(hours);
	date.setMonth(month, day);
	date.setFullYear(year);

	return date;
}

// set up clicks on history type nav buttons
const history_type_nav_buttons = id('history-type-nav').getElementsByTagName('div');

for (let button of history_type_nav_buttons) {
	button.onclick = function() {

		if (!(button.classList.contains('active-input-cont'))) {
			// change active button
			for (let button of history_type_nav_buttons)
				if (button == this) {
					button.classList.add('active-input-cont');
					id('history-type-nav').setAttribute('history-type', button.getAttribute('history-type'));
				} else if (button.classList.contains('active-input-cont'))
					button.classList.remove('active-input-cont');
	
			// upload records to history
			uploadRecordsToHistoryAnimated();
			updatePieChart();
		}
		
	}
}





// const record_window_account_root = ReactDOM.createRoot(id('make-record-account'));
const make_record_types = id('record-types').getElementsByTagName('div');

id('make-record-button').onclick = () => {

	let windowEl_cont = id('make-record-window-cont');
	let windowEl = id('make-record-window');
	let clickEl = id('make-record-button');
	
	disableScrolling();
	prepareMakeRecordWindow();

  openFloatingWindow(clickEl, windowEl_cont, windowEl, calculateScaleX(clickEl, windowEl_cont));

	windowEl_cont.firstElementChild.onclick = () => {
		enableScrolling();
		closeFloatingWindow(clickEl, windowEl_cont, windowEl);
		setTimeout(resetMakeRecordWindowData, 390);
	}
}

function prepareMakeRecordWindow () {

	// record_window_account_root.render(<Account color={localStorage.getItem('account_color1')} currency={localStorage.getItem('account_currency1')} balance={localStorage.getItem('account_balance1')} />);
	// record_window_category_svg.render(<Category/>);

	id('make-record-window').setAttribute('status', 'new');
	id('make-record-window').setAttribute('recordnum', Number(localStorage.getItem('RCount')) + 1);

	id('remove-record-button-block').classList.add('element-hide');
	
	id('make-record-date').value = getDateFormat(new Date());
	
	id('make-record-account').innerHTML = account_el( 1, localStorage.getItem('AColor1'), localStorage.getItem('ACurrency1'), Number(localStorage.getItem('ABalance1')).toFixed(2) );
	id('make-record-account').setAttribute('accountnum', 1);
	checkAccountColor(id('make-record-account').firstElementChild);

	let account_inputs = id('make-record-account').getElementsByTagName('input');
	adaptInputLengthExplicitly(account_inputs[0]);
	adaptInputLengthExplicitly(account_inputs[1]);
		
	/* if (localStorage.getItem('ACount') > 1) {
		id('record-type-transfer').classList.remove('window-nav-el-hide');
		// upload_transfer_account_in_makerecord();
	}
	else  */id('record-type-transfer').classList.add('window-nav-el-hide');
	
	id('make-record-category').firstElementChild.innerHTML = subcategories_icons[subcategories_icons.length - 1][subcategories_icons[subcategories_icons.length - 1].length - 1];
	id('make-record-category').lastElementChild.value = subcategories_titles[subcategories_titles.length - 1][subcategories_icons[subcategories_icons.length - 1].length - 1];
	id('make-record-category').setAttribute('categorynum', subcategories_titles.length - 1);
	id('make-record-category').setAttribute('subcategorynum', subcategories_titles[subcategories_titles.length - 1].length - 1);
}

function resetMakeRecordWindowData () {

	// reset remove record button block hiding
	if (id('remove-record-button-block').classList.contains('element-hide'))
		id('remove-record-button-block').classList.remove('element-hide');
	
	// reset type of record
	
	if (id('record-types').classList.contains('element-hide'))
		id('record-types').classList.remove('element-hide');

	id('record-types').setAttribute('record-type', id('record-type-expense').getAttribute('record-type'));
  for (let button of make_record_types)
    if (button.id == 'record-type-expense')
			button.classList.add('active-input-cont');
    else
			button.classList.remove('active-input-cont');

	// reset amount
  id('make-record-amount').value = null;
	setTypingListenerForInput(id('make-record-amount'));
	
	// reset category
  id('make-record-category-cont').classList.remove('make-record-category-cont-hide');

  // id('make-record-transfer-account-cont').classList.add('make-record-transfer-account-cont-hide');
  // id('make-record-transfer-account').innerHTML = null;
}





// set up clicks on make record types buttons
for (let button of make_record_types) {
  button.onclick = function() {
    for (let button of make_record_types) {

      if (button == this) {
        button.classList.add('active-input-cont');

				id('record-types').setAttribute('record-type', button.getAttribute('record-type'));

        /* if (this.id == 'make-record-type-cont-transfer') {

          upload_transfer_account_in_makerecord();
          setTimeout(() => {
            id('make-record-transfer-account-cont').classList.remove('make-record-transfer-account-cont-hide');
            id('make-record-category-cont').classList.add('make-record-category-cont-hide');
          }, 1);

        } else { */

					changeMakeRecordCategoryType(button.id);

          /* setTimeout(() => {
            id('make-record-transfer-account-cont').classList.add('make-record-transfer-account-cont-hide');
            id('make-record-category-cont').classList.remove('make-record-category-cont-hide');
          }, 1);

        } */

      } else if (button.classList.contains('active-input-cont'))
				button.classList.remove('active-input-cont');

    }
  }
}

function changeMakeRecordCategoryType (record_type) {

	id('make-record-category').style = null;
	id('make-record-category').classList.add('category-button-changing-hide');
	
	setTimeout(() => {
		
		changeMakeRecordCatogory(record_type);
		
		id('make-record-category').style.transition = 'transform 0s';
		id('make-record-category').classList.remove('category-button-changing-hide');
		id('make-record-category').classList.add('category-type-changed-hide');
		
		setTimeout(() => {
			id('make-record-category').style = null;
			id('make-record-category').classList.remove('category-type-changed-hide');
		}, 50);

	}, 300);
}

function changeMakeRecordCatogory (record_type) {

	if (record_type == 'record-type-expense') {
		id('make-record-category').firstElementChild.innerHTML = subcategories_icons[subcategories_icons.length - 1][subcategories_icons[subcategories_icons.length - 1].length - 1];
		id('make-record-category').lastElementChild.value = subcategories_titles[subcategories_titles.length - 1][subcategories_icons[subcategories_icons.length - 1].length - 1];
		id('make-record-category').setAttribute('categorynum', subcategories_titles.length - 1);
		id('make-record-category').setAttribute('subcategorynum', subcategories_titles[subcategories_titles.length - 1].length);
	} else {
		id('make-record-category').firstElementChild.innerHTML = categories_income_icons[categories_income_icons.length - 1];
		id('make-record-category').lastElementChild.value = categories_income_titles[categories_income_titles.length - 1];
		id('make-record-category').setAttribute('categorynum', categories_income_titles.length - 1);
	}
}





id('make-record-account').onclick = function() {

	if (Number(localStorage.getItem('ACount')) > 1) {
		let clickEl = id('make-record-account'),
			windowEl_cont = id('accounts-window-cont'),
			windowEl = id('accounts-window');
	
		// upload account to window
		windowEl.innerHTML = null;
		for (let a = 1; a <= localStorage.getItem('ACount'); a++) uploadAccount(a, windowEl);
	
		let top_position = openFloatingWindow(clickEl, windowEl_cont, windowEl, calculateScaleX(clickEl, windowEl_cont));
		windowEl.setAttribute('top-position', top_position);
	
		// set up click on accounts
		setUpChoosingAccount(clickEl, windowEl_cont, windowEl);
	
		windowEl_cont.firstElementChild.onclick = function() {
			closeFloatingWindow(clickEl, windowEl_cont, windowEl);
		}
	}
	
}

function setUpChoosingAccount (clickEl, windowEl_cont, windowEl) {

	for (let account of windowEl.getElementsByClassName('account')) {
		account.onclick = function() {

			let account_num = account.getAttribute('accountnum');
			clickEl.setAttribute('accountnum', account_num);

			// upload choosen accounts data
			clickEl.firstElementChild.classList.add('account-block-animation');
			clickEl.firstElementChild.style.background = '#' + localStorage.getItem(`AColor${account_num}`);
			clickEl.firstElementChild.firstElementChild.value = localStorage.getItem(`ACurrency${account_num}`);
			clickEl.firstElementChild.lastElementChild.value = localStorage.getItem(`ABalance${account_num}`);

			adaptInputLengthExplicitly(clickEl.firstElementChild.firstElementChild);
			adaptInputLengthExplicitly(clickEl.firstElementChild.lastElementChild);

			let clickEL_transition = changeFloatingWindowTransformation(clickEl, windowEl_cont, windowEl);
			
			setTimeout(() => {
				clickEl.classList.remove('account-block-animation');
				clickEl.style.transition = clickEL_transition;
				closeFloatingWindow(clickEl, windowEl_cont, windowEl);
			}, 1);
			
		}
	}
}



id('make-record-category').onclick = () => {
	
	let clickEl = id('make-record-category'),
		windowEl_cont, windowEl, categories_els_arr;
	
	if (id('record-type-expense').classList.contains('active-input-cont')) {

		windowEl_cont = id('categories-expense-cont');
		windowEl = id('categories-expense');
		categories_els_arr = id('subcategories').getElementsByClassName('subcategory');

	} else if (id('record-type-income').classList.contains('active-input-cont')) {
		
		windowEl_cont = id('categories-income-cont');
		windowEl = id('categories-income');
		categories_els_arr = id('categories-income').getElementsByClassName('category');

	}

	openCategoryWindow(clickEl, windowEl_cont, windowEl);
	setUpClickOnSubcategory(clickEl, windowEl_cont, windowEl, categories_els_arr);
}

function openCategoryWindow (clickEl, windowEl_cont, windowEl) {
	
	let top_position = openFloatingWindow(clickEl, windowEl_cont, windowEl, calculateScaleX(clickEl, windowEl_cont));
	windowEl.setAttribute('top-position', top_position);
	
	windowEl_cont.firstElementChild.onclick = function() {
		closeFloatingWindow(clickEl, windowEl_cont, windowEl);

		if (id('subcategories-cont').classList.contains('subcategories-cont-visible'))
			setTimeout(() => {
				resetCategoryWindowData(id('subcategories').getElementsByClassName('subcategory-cont'))
			}, 325);
	}
}

function resetCategoryWindowData (subcategories_els_arr) {

	id('categories-expense').classList.remove('categories-overflow');
	id('subcategories-title').innerHTML = null;
	id('subcategories-cont').classList.remove('subcategories-cont-visible');
	subcategories_els_arr[id('make-record-category').getAttribute('categorynum')].classList.remove('subcategory-cont-visible');
}

function setUpOpeningSubcategoryList (categories_block, categories_els_arr, subcategories_els_arr) {
	
  for (let category of categories_els_arr) {
    category.onclick = function() {

			let category_num = this.getAttribute('categorynum');
			id('make-record-category').setAttribute('categorynum', category_num);

			categories_block.classList.add('categories-overflow');
			id('subcategories-title').innerHTML = this.lastElementChild.innerHTML;
			subcategories_els_arr[category_num].classList.add('subcategory-cont-visible');
				
      id('subcategories-cont').classList.add('subcategories-cont-visible');

			id('subcategories-back-button').onclick = function() {
				closeSubcategoriesWindow(categories_block, subcategories_els_arr, category_num);
			}

    }
  }
}

function closeSubcategoriesWindow (categories_block, subcategories_els_arr, category_num) {

	categories_block.classList.remove('categories-overflow');
	id('subcategories-cont').classList.remove('subcategories-cont-visible');

	setTimeout(() => {
		id('subcategories-title').innerHTML = null;
		subcategories_els_arr[category_num].classList.remove('subcategory-cont-visible');
	}, 300);
}

function setUpClickOnSubcategory (clickEl, windowEl_cont, windowEl, categories_els_arr) {

  for (let category of categories_els_arr) {
    category.onclick = function() {
      
			clickEl.firstElementChild.innerHTML = this.firstElementChild.innerHTML;
			clickEl.lastElementChild.value = this.lastElementChild.innerHTML;

			if (windowEl.id == 'categories-expense')
				clickEl.setAttribute('subcategorynum', this.getAttribute('subcategorynum'));
			else
				clickEl.setAttribute('categorynum', this.getAttribute('categorynum'));

			closeCategoriesWindow(clickEl, windowEl_cont, windowEl);

    }
  }
}

function closeCategoriesWindow (clickEl, windowEl_cont, windowEl) {
	
	let clickEL_transition = changeFloatingWindowTransformation(clickEl, windowEl_cont, windowEl);;
	
	setTimeout(() => {
		clickEl.style.transition = clickEL_transition;
		closeFloatingWindow(clickEl, windowEl_cont, windowEl);
	}, 1);

	if (id('subcategories-cont').classList.contains('subcategories-cont-visible'))
		setTimeout(() => {
			resetCategoryWindowData(id('subcategories').getElementsByClassName('subcategory-cont'))
		}, 325);
}





id('make-record-save-button').onclick = () => {

	if (id('make-record-amount').value != 0) {

		let record_num = id('make-record-window').getAttribute('recordnum'),
			record_type = id('record-types').getAttribute('record-type'),
			record_amount = Math.abs(id('make-record-amount').value),
			record_account = id('make-record-account').getAttribute('accountnum'),
			record_category = id('make-record-category').getAttribute('categorynum'),
			record_subcategory = id('make-record-category').getAttribute('subcategorynum');

		updateStorageAccountBalance(record_num, record_type, record_account, record_amount);
		updateAccountInfo( record_account, 'Balance', id('accounts').getElementsByClassName('account') );

		saveRecordToStorage(record_num, record_type, record_amount, record_account, record_category, record_subcategory);
	
		if (id('make-record-window').getAttribute('status') == 'new') {

			updateHistoryForNewRecord(record_num, record_type, record_account);
			closeFloatingWindow(id('make-record-button'), id('make-record-window-cont'), id('make-record-window'));
		} else
			for (let record of id('history').getElementsByClassName('record'))
				if (record.getAttribute('recordnum') == record_num) {
					updateHistoryForEditedRecord(record_num, record);					
					break;
				}

		uploadExpensesIncomesStats();
		updatePieChart();

		setTimeout(() => {
			resetMakeRecordWindowData();
			enableScrolling();
		}, 390);

	} else animateEmptyFieldError(id('make-record-amount'));
}

function saveRecordToStorage (record_num, record_type, record_amount, record_account, record_category, record_subcategory) {

	// save record data to storage
	localStorage.setItem(`RType${record_num}`, record_type);
	localStorage.setItem(`RAmount${record_num}`, record_amount);
	localStorage.setItem(`RAccount${record_num}`, record_account);
	localStorage.setItem(`RCategory${record_num}`, record_category);
	localStorage.setItem(`RSubcategory${record_num}`, record_subcategory);

	// save record date to storage
	saveRecordDateToStorage(record_num);
}

function saveRecordDateToStorage (record_num) {
	let date = new Date (id('make-record-date').value);

	localStorage.setItem(`RMinute${record_num}`, date.getMinutes());
	localStorage.setItem(`RHour${record_num}`, date.getHours());
	localStorage.setItem(`RDay${record_num}`, date.getDate());
	localStorage.setItem(`RMonth${record_num}`, (date.getMonth() + 1));
	localStorage.setItem(`RYear${record_num}`, date.getFullYear());
}

function updateStorageAccountBalance (record_num, record_type, record_account, record_amount) {
	
	let type_sign = Number(record_type + '1');
	let record_account_balance = Number(localStorage.getItem(`ABalance${record_account}`));

	if (id('make-record-window').getAttribute('status') == 'new') {
		localStorage.setItem(`ABalance${record_account}`, (record_account_balance + (record_amount * type_sign)).toFixed(2));
	} else {
		
		let account_num = localStorage.getItem(`RAccount${record_num}`);
		let account_balance = Number(localStorage.getItem(`ABalance${account_num}`));
		let storage_amount = Number(localStorage.getItem(`RAmount${record_num}`));
		
		localStorage.setItem(`ABalance${account_num}`, (account_balance - (storage_amount * type_sign)).toFixed(2));

		record_account_balance = Number(localStorage.getItem(`ABalance${record_account}`));
		localStorage.setItem(`ABalance${record_account}`, (record_account_balance + (record_amount * type_sign)).toFixed(2));
		
		for (let account of id('accounts').getElementsByClassName('account'))
			if (account.getAttribute('accountnum') == account_num)
				updateAccountInfo( account_num, 'Balance', id('accounts').getElementsByClassName('account') );
		
	}
}

function updateAllAccountInfo (account_num, info) {

	updateAccountInfo( account_num, info, id('accounts').getElementsByClassName('account') );
	updateAccountInfo( account_num, info, id('settings-category-window-content').getElementsByClassName('account') );
}

function updateAccountInfo (account_num, info, accounts) {
	
	for (let account of accounts) {
		if (account.getAttribute('accountnum') == account_num) {

			if (info == 'Currency') {

				account.firstElementChild.value = localStorage.getItem(`A${info}${account_num}`);
				adaptInputLengthExplicitly(account.firstElementChild);

			} else if (info == 'Balance') {

				account.lastElementChild.value = Number( localStorage.getItem(`A${info}${account_num}`) ).toFixed(2);
				adaptInputLengthExplicitly(account.lastElementChild);

			} else if (info == 'Color')
				account.style.background = '#' + localStorage.getItem(`A${info}${account_num}`);

		}
	}
}


function updateHistoryForNewRecord (record_num, record_type, record_account) {

	// increase records count in storage
	localStorage.setItem('RCount', record_num);

	let history_type = id('history-type-nav').getAttribute('history-type');
	
	if (
		checkRecordsOrderByDate(Number(record_num)) != record_num ||
		(history_type != 'all' && record_type != history_type)
	) {
		reuploadRecordsToHistoryAnimated();
	} else {
		// add record to history
		addRecordToHistory(record_num, record_account, 'afterbegin');
		animateAddingRecord(id('history').firstElementChild);
		setUpClickOnRecord(id('history').firstElementChild);
	}

}

function addRecordToHistory (record_num, record_account, place) {

	let record = constructRecordEl(record_num, record_account);
	let hr = `<hr class="small-hr">`;
	
	if (id('history').firstElementChild) {
		id('history').insertAdjacentHTML(place, hr);
	}
	id('history').insertAdjacentHTML(place, record);
}

function constructRecordEl (record_num, record_account) {

	let record_date = localStorage.getItem(`RDay${record_num}`) + '.' + ( Number(localStorage.getItem(`RMonth${record_num}`)) ),
		category_num = localStorage.getItem(`RCategory${record_num}`),
		subcategory_num = localStorage.getItem(`RSubcategory${record_num}`),
		icon, title;

	if (localStorage.getItem(`RType${record_num}`) == '-') {
		icon = subcategories_icons[category_num][subcategory_num];
		title = subcategories_titles[category_num][subcategory_num];
	} else {
		icon = categories_income_icons[category_num];
		title = categories_income_titles[category_num];
	}
	
	let record = `<div class="record" recordnum="${record_num}">
                    <h4 class="date">${record_date}</h4>
                    <div class="record-category" categorynum="${category_num}" subcategorynum="${subcategory_num}">
                      <div>${icon}</div>
                      <h3>${title}</h3>
                    </div>
                    <div class="record-amount">
                      <h3>${localStorage.getItem('RType' + record_num)}</h3>
                      <h3>${getReadableNumber( Number(localStorage.getItem('RAmount' + record_num)).toFixed(2) )}</h3>
                      <h3>${localStorage.getItem('ACurrency' + record_account)}</h3>
                    </div>
                  </div>`;

	return record;
}

function animateAddingRecord (record) {

	// .history has padding-block and gap set up on 15px, and small-hr has height 3px: 15 * 2 - 3 = 27
	let margin_top = 27 + record.clientHeight;

	record.style.marginTop = `-${margin_top}px`;

	setTimeout(() => {
		record.style.transition = 'margin-top .4s .4s';
		record.style.marginTop = '0px';
		
		setTimeout(() => {
			record.style.transition = null;
		}, 800);
	}, 1);
}


function updateHistoryForEditedRecord (record_num, record) {

	updateRecordInHistory(record_num, record);

	let period = id('history-period-nav').getAttribute('period');
	let compare_date = new Date();

	if (period == 'week') compare_date.setDate(compare_date.getDate() - 7);
	else if (period == 'month') compare_date.setMonth(compare_date.getMonth() - 1);
	else compare_date = new Date(getRecordDateFormat(record_num));

	if (
		checkRecordsOrderByDate(Number(record_num)) != record_num ||
		getRecordDateFormat(record_num) < getDateFormat(compare_date) ||
		id('make-record-account').getAttribute('accountnum') != id('make-record-account').firstElementChild.getAttribute('accountnum')
	) {
		reconnectFloatingWindow(record, id('history'), id('make-record-window-cont'), id('make-record-window'));
		closeReconnectedFloatingWindow(id('make-record-window-cont'), id('make-record-window'));
		reuploadRecordsToHistoryAnimated();
	} else {
		changeFloatingWindowTransformation(record, id('make-record-window-cont'), id('make-record-window'));
		closeFloatingWindow(record, id('make-record-window-cont'), id('make-record-window'));
	}
}

function updateRecordInHistory (record_num, record) {

	let record_date = localStorage.getItem(`RDay${record_num}`) + '.' + ( Number(localStorage.getItem(`RMonth${record_num}`)) ),
		category_num = localStorage.getItem(`RCategory${record_num}`),
		subcategory_num = localStorage.getItem(`RSubcategory${record_num}`),
		icon, title;

	if (localStorage.getItem(`RType${record_num}`) == '-') {
		icon = subcategories_icons[category_num][subcategory_num];
		title = subcategories_titles[category_num][subcategory_num];
	} else {
		icon = categories_income_icons[category_num];
		title = categories_income_titles[category_num];
	}

	// update date
	record.firstElementChild.innerHTML = record_date;

	// update category
	let categoryEl = record.firstElementChild.nextElementSibling;
	categoryEl.setAttribute('categorynum', localStorage.getItem(`RCategory${record_num}`));
	categoryEl.setAttribute('subcategorynum', localStorage.getItem(`RSubcategory${record_num}`));
	categoryEl.firstElementChild.innerHTML = icon;
	categoryEl.lastElementChild.innerHTML = title;

	// update amount
	record.lastElementChild.firstElementChild.nextElementSibling.innerHTML = localStorage.getItem(`RAmount${record_num}`);

	// update currency
	record.lastElementChild.lastElementChild.innerHTML = localStorage.getItem(`ACurrency${ localStorage.getItem('RAccount' + record_num) }`);
}

function checkRecordsOrderByDate (record_num) {

		for (;
			localStorage.getItem(`RDay${record_num - 1}`) &&
			getRecordDateFormat(record_num - 1) > getRecordDateFormat(record_num);
			record_num--
		)			
			swapRecords(record_num, record_num - 1);
			
		for (;
			localStorage.getItem(`RDay${record_num + 1}`) &&
			getRecordDateFormat(record_num + 1) < getRecordDateFormat(record_num);
			record_num++
		)			
			swapRecords(record_num, record_num + 1);

	return record_num;
}

function swapRecords (a, b) {

	let type = localStorage.getItem(`RType${a}`),
		amount = localStorage.getItem(`RAmount${a}`),
		account = localStorage.getItem(`RAccount${a}`),
		category = localStorage.getItem(`RCategory${a}`),
		subcategory = localStorage.getItem(`RSubcategory${a}`),
		minutes = localStorage.getItem(`RMinute${a}`),
		hours = localStorage.getItem(`RHour${a}`),
		day = localStorage.getItem(`RDay${a}`),
		month = localStorage.getItem(`RMonth${a}`),
		year = localStorage.getItem(`RYear${a}`);

	localStorage.setItem(`RType${a}`, localStorage.getItem(`RType${b}`)),
	localStorage.setItem(`RAmount${a}`, localStorage.getItem(`RAmount${b}`)),
	localStorage.setItem(`RAccount${a}`, localStorage.getItem(`RAccount${b}`)),
	localStorage.setItem(`RCategory${a}`, localStorage.getItem(`RCategory${b}`)),
	localStorage.setItem(`RSubcategory${a}`, localStorage.getItem(`RSubcategory${b}`)),
	localStorage.setItem(`RMinute${a}`, localStorage.getItem(`RMinute${b}`)),
	localStorage.setItem(`RHour${a}`, localStorage.getItem(`RHour${b}`)),
	localStorage.setItem(`RDay${a}`, localStorage.getItem(`RDay${b}`)),
	localStorage.setItem(`RMonth${a}`, localStorage.getItem(`RMonth${b}`)),
	localStorage.setItem(`RYear${a}`, localStorage.getItem(`RYear${b}`));

	localStorage.setItem(`RType${b}`, type),
	localStorage.setItem(`RAmount${b}`, amount),
	localStorage.setItem(`RAccount${b}`, account),
	localStorage.setItem(`RCategory${b}`, category),
	localStorage.setItem(`RSubcategory${b}`, subcategory),
	localStorage.setItem(`RMinute${b}`, minutes),
	localStorage.setItem(`RHour${b}`, hours),
	localStorage.setItem(`RDay${b}`, day),
	localStorage.setItem(`RMonth${b}`, month),
	localStorage.setItem(`RYear${b}`, year);
}

function reuploadRecordsToHistoryAnimated () {

	id('history-reloading-background').classList.add('history-reloading-background-show');
		
	setTimeout(() => {
		id('history').innerHTML = null;
		uploadRecordsToHistory();
			
		setTimeout(() => {
			id('history-reloading-background').classList.remove('history-reloading-background-show');
		}, 200);
	}, 390);
}





const settings_categories = id('settings-categories').getElementsByTagName('input');
const settings_category_windows = id('root').getElementsByClassName('settings-category-window-cont');

id('settings-button').onclick = () => {
	let windowEl_cont = id('settings-cont');
	let windowEl = id('settings');
	let clickEl = id('settings-button');
	
	disableScrolling();

  openFloatingWindow(clickEl, windowEl_cont, windowEl, calculateScaleX(clickEl, windowEl_cont));

	windowEl.lastElementChild.lastElementChild.onclick = () => {
		enableScrolling();
		closeFloatingWindow(clickEl, windowEl_cont, windowEl);
	}
}

// set up click on settings categories
for (let category of settings_categories) {
	category.onclick = function() {
		
		// open settings category window

		let settings_transition = id('settings').style.transition;
		prepareSettingsCategoryWindow(id('settings-category-window-cont'), this.getAttribute('category-name'), this);
		
		openWindowBlock(id('settings-category-window-cont'), id('settings-category-window-cont').lastElementChild);

		// set up closing settings category window
		id('settings-category-window-cont').firstElementChild.onclick = () => {
			
			id('settings').style.transition = settings_transition;
			closeSettingsCategoryWindow();

			if (id('topmargin-preview-window').classList.contains('topmargin-preview-window-visible'))
				closeTopmarginPreviewWindow();
		}

	}
}

function prepareSettingsCategoryWindow (windowEl_cont, category, clickEl) {
	let content_cont = id('settings-category-window-content');
	let button_cont = id('settings-category-window-button');

	windowEl_cont.lastElementChild.firstElementChild.firstElementChild.innerHTML = clickEl.value;

	if (category == 'Language') uploadSettingsCategoryData_Language(content_cont, button_cont);
	else if (category == 'Reset data') uploadSettingsCategoryData_Reset(content_cont, button_cont);
	else if (category == 'Themes') uploadSettingsCategoryData_Themes(content_cont, button_cont);
	else if (category == 'Top margin') uploadSettingsCategoryData_Margin(content_cont, button_cont);
	else if (category == 'Accounts') uploadSettingsCategoryData_Accounts(content_cont, button_cont);
}

function closeSettingsCategoryWindow () {

	closeWindowBlock(id('settings-category-window-cont'), id('settings-category-window-cont').lastElementChild);

	setTimeout(() => {
		id('settings-category-window-content').innerHTML = null;
		id('settings-category-window-button').innerHTML = null;
		id('settings-category-window-button').classList.remove('button-block-hide');
	}, 300);
}



function uploadSettingsCategoryData_Language (content_cont, button_cont) {
	let lang = localStorage.getItem('L');

	content_cont.insertAdjacentHTML('afterbegin',
		`<p class="description">
			${getDescription_Language(lang)}
		</p>
		<input type="button" lang="en" value="English" class="language-button clickable-button">
		<input type="button" lang="cz" value="Czech" class="language-button clickable-button">
		<input type="button" lang="ru" value="Russian" class="language-button clickable-button">
		<input type="button" lang="ua" value="Ukrainian" class="language-button clickable-button">`
	);
	button_cont.insertAdjacentHTML('afterbegin',
		`<hr class="big-hr">
		<input type="button" value="Save" class="clickable-button" id="save-language-button">`	
	);

	id('save-language-button').setAttribute('lang', lang);
	
	setUpButtonsValue_Language(id('settings-category-window-cont'), lang);
	setClickOnLanguageButtons(content_cont);

	id('save-language-button').onclick = function() {
		localStorage.setItem('L', this.getAttribute('lang'));
		window.location.reload();
	}
}

function setClickOnLanguageButtons (container) {

	for (let button of container.getElementsByClassName('language-button'))
		button.onclick = function() {
			id('save-language-button').setAttribute('lang', this.getAttribute('lang'));
		}
}

function getDescription_Language (lang) {
	
	if (lang == 'en')
		return ('After setting the new language, web-application will be reloaded.');
	else if (lang == 'cz')
		return ('Po nastavení nového jazyka se web-aplikace restartuje.');
	else if (lang == 'ru')
		return ('После установки нового языка веб-приложение будет перезагружено.');
	else if (lang == 'ua')
		return ('Після встановлення нової мови веб-додаток буде перезавантажено.');
}

function setUpButtonsValue_Language (container, lang) {
	let buttons = container.getElementsByTagName('input');

	if (lang == 'en') {
		buttons[0].value = 'English';
		buttons[1].value = 'Czech';
		buttons[2].value = 'Russian';
		buttons[3].value = 'Ukrainian';
		buttons[4].value = 'Save';
	} else if (lang == 'cz') {
		buttons[0].value = 'Angličtina';
		buttons[1].value = 'Čeština';
		buttons[2].value = 'Ruština';
		buttons[3].value = 'Ukrainština';
		buttons[4].value = 'Uložit';
	} else if (lang == 'ru') {
		buttons[0].value = 'Английский';
		buttons[1].value = 'Чешский';
		buttons[2].value = 'Русский';
		buttons[3].value = 'Украинский';
		buttons[4].value = 'Сохранить';
	} else if (lang == 'ua') {
		buttons[0].value = 'Англійська';
		buttons[1].value = 'Чеська';
		buttons[2].value = 'Російська';
		buttons[3].value = 'Українська';
		buttons[4].value = 'Зберегти';
	}
}



// reset data - settings category content
function uploadSettingsCategoryData_Reset (content_cont, button_cont) {
	let lang = localStorage.getItem('L');
	
	content_cont.insertAdjacentHTML('afterbegin',
		`<p class="description">
			${getDescription_ResetData(lang)}
		</p>
		<input type="button" value="" class="clickable-button" id="reset-data-button">`
	);
	button_cont.classList.add('button-block-hide');
	setUpButtonsValue_ResetData(id('reset-data-button'), lang);

	id('reset-data-button').onclick = () => {
		clearLocalStorage();
		enableScrolling();
		window.scrollTo(0, 0);
		window.location.reload();
	}
}

function getDescription_ResetData (lang) {
	
	if (lang == 'en')
		return ('Reset all data (accounts, records, settings), then application will be reloaded. <b>It is irreversible action.</b>');
	else if (lang == 'cz')
		return ('Resetovat všechna data (účty, záznamy, nastavení), poté se web-aplikace restartuje. <b>Je to nevratná akce.</b>');
	else if (lang == 'ru')
		return ('Сбросить все данные (счета, записи, настройки), после чего приложение перезагрузится. <b>Это необратимое действие.</b>');
	else if (lang == 'ua')
		return ('Скинути всі дані (рахунки, записи, налаштування), після чого веб-програма буде перезавантажена. <b>Це незворотна дія.</b>');
}

function setUpButtonsValue_ResetData (button, lang) {

	if (lang == 'en') {
		button.value = 'Reset data';
	} else if (lang == 'cz') {
		button.value = 'Resetovat data';
	} else if (lang == 'ru') {
		button.value = 'Сбросить данные';
	} else if (lang == 'ua') {
		button.value = 'Скинути дані';
	}
}

function clearLocalStorage () {

	localStorage.removeItem('L'); // language
	localStorage.removeItem('T'); // theme
	localStorage.removeItem('TM'); // top margin

	clearAccountsDataFromStorage(localStorage.getItem('ACount')); // accounts
	clearRecordsDataFromStorage(localStorage.getItem('RCount')); // records
}

function clearAccountsDataFromStorage (count) {
	
	for (let a = 1; a <= count; a++) {
		localStorage.removeItem(`AColor${a}`);
		localStorage.removeItem(`ACurrency${a}`);
		localStorage.removeItem(`ABalance${a}`);
	}
	
	localStorage.removeItem('ACount');
}

function clearRecordsDataFromStorage (count) {

	for (let a = 1; a <= count; a++) {
		localStorage.removeItem(`RType${a}`);
		localStorage.removeItem(`RAmount${a}`);
		localStorage.removeItem(`RAccount${a}`);
		localStorage.removeItem(`RCategory${a}`);
		localStorage.removeItem(`RSubcategory${a}`);

		localStorage.removeItem(`RMinute${a}`);
		localStorage.removeItem(`RHour${a}`);
		localStorage.removeItem(`RDay${a}`);
		localStorage.removeItem(`RMonth${a}`);
		localStorage.removeItem(`RYear${a}`);	
	}

	localStorage.removeItem('RCount');
}


// themes - settings category content
function uploadSettingsCategoryData_Themes (content_cont, button_cont) {
	
	content_cont.insertAdjacentHTML('afterbegin',
		`<div class="themes-cont">
			<div theme="l" class="theme-cont" style="background: #ECF0F3;" id="theme-button-light">
				<div class="theme-account"></div>
				<div class="theme-widget"></div>
				<div class="theme-button"></div>
			</div>
			<div theme="b" class="theme-cont" style="background: #1B252F;" id="theme-button-darkblue">
				<div class="theme-account"></div>
				<div class="theme-widget"></div>
				<div class="theme-button"></div>
			</div>
			<div theme="d" class="theme-cont" style="background: #0b0b0b;" id="theme-button-dark">
				<div class="theme-account"></div>
				<div class="theme-widget"></div>
				<div class="theme-button"></div>
			</div>
		</div>`
	);
	button_cont.classList.add('button-block-hide');

	id('settings').style.transition = '.4s background';

	for ( let el of content_cont.firstElementChild.getElementsByClassName('theme-cont') )
		el.onclick = () => {
			changeTheme(el.getAttribute('theme'));
		}
}

function changeTheme (theme) {
	
	localStorage.setItem('T', theme);
	applyTheme(theme);

	checkAccountsColor();
}



// top margin - settings category content
function uploadSettingsCategoryData_Margin (content_cont, button_cont) {
	let lang = localStorage.getItem('L');
	
	content_cont.insertAdjacentHTML('afterbegin',
		`<p class="description">${getDescription_TopMargin(lang)}</p>
		<input topmargin="" type="range" class="topmargin-range interective-field" id="topmargin-range" value="0" min="0" max="25" step="1">`
	);
	button_cont.insertAdjacentHTML('afterbegin',
		`<hr class="big-hr">
		<input type="button" value="Save" class="clickable-button" id="topmargin-save-button">`	
	);
	setUpButtonsValue_TopMargin(id('topmargin-save-button'), lang);


	prepareTopmarginSettingsCategory();

	id('topmargin-save-button').onclick = () => {
		localStorage.setItem('TM', Number(id('topmargin-range').value) * 2);
		applyTopmargin();
		closeTopmarginPreviewWindow();
		closeSettingsCategoryWindow();
	}

	openTopmarginPreviewWindow();
}

function prepareTopmarginSettingsCategory () {

	id('topmargin-preview-window').innerHTML =
		account_el(
			1,
			localStorage.getItem('AColor1'),
			localStorage.getItem('ACurrency1'),
			Number( Number(localStorage.getItem('ABalance1')) ).toFixed(2)
		);
	checkAccountColor(id('topmargin-preview-window').firstElementChild);
		
	adaptInputLengthExplicitly(id('topmargin-preview-window').firstElementChild.firstElementChild);
	adaptInputLengthExplicitly(id('topmargin-preview-window').firstElementChild.lastElementChild);

	setUpListenerOnTopmarginRange();
	
	id('topmargin-range').setAttribute('value', Number(localStorage.getItem('TM')) / 2);
	id('topmargin-preview-window').firstElementChild.style.transition = 'transform .2s';
	id('topmargin-preview-window').firstElementChild.style.transform = `translateY(${Number(localStorage.getItem('TM'))}px)`;
}

function openTopmarginPreviewWindow () {

  id('topmargin-preview-window').classList.add('topmargin-preview-window-visible');

  setTimeout(() => {
    id('topmargin-preview-window').classList.add('topmargin-preview-window-transform');
  }, 300);
}

function closeTopmarginPreviewWindow () {
  id('topmargin-preview-window').classList.remove('topmargin-preview-window-visible');
  id('topmargin-preview-window').classList.remove('topmargin-preview-window-transform');
}

function setUpListenerOnTopmarginRange () {
  id('topmargin-range').addEventListener('input', readTopmarginRange);
  readTopmarginRange.call(id('topmargin-range'));
}
function readTopmarginRange () {
  id('topmargin-preview-window').firstElementChild.style.transform = `translateY(${Number(id('topmargin-range').value) * 2}px)`;
}

function getDescription_TopMargin (lang) {

	if (lang == 'en')
		return ('Set the top margin for easy viewing of the interface on the screen with notch.');
	else if (lang == 'cz')
		return ('Nastavte horní okraj pro snadné prohlížení rozhraní na zářezové obrazovce.');
	else if (lang == 'ru')
		return ('Установите верхний отступ для удобного просмотра интерфейса на экране с вырезом.');
	else if (lang == 'ua')
		return ('Встановіть верхній відступ для зручного перегляду інтерфейсу на екрані з вирізом.');
}

function setUpButtonsValue_TopMargin (button, lang) {

	if (lang == 'en') {
		button.value = 'Save';
	} else if (lang == 'cz') {
		button.value = 'Uložit';
	} else if (lang == 'ru') {
		button.value = 'Сохранить';
	} else if (lang == 'ua') {
		button.value = 'Зберегти';
	}
}



// accounts - settings category content
function uploadSettingsCategoryData_Accounts (content_cont, button_cont) {

	button_cont.insertAdjacentHTML('afterbegin',
		`<hr class="big-hr">
		<input type="button" value="Add account" class="clickable-button" id="add-account">`	
	);
	setUpButtonsValue_Accounts(id('add-account'), localStorage.getItem('L'));

	uploadAccountsToSettingsWindow(content_cont);

	for (let account of content_cont.getElementsByClassName('account'))
		setUpClickOnAccount(account);

	setUpClickOnAddAccountButton(content_cont);
}

function uploadAccountsToSettingsWindow (windowEl_cont) {

	for (let account_num = 1; account_num <= localStorage.getItem('ACount'); account_num++) {

  	windowEl_cont.insertAdjacentHTML('beforeend',
			account_el(
				account_num,
				localStorage.getItem('AColor' + account_num),
				localStorage.getItem('ACurrency' + account_num),
				Number( Number(localStorage.getItem('ABalance' + account_num)) ).toFixed(2)
			)
		);
		checkAccountColor(windowEl_cont.lastElementChild);

		adaptInputLengthExplicitly(windowEl_cont.lastElementChild.firstElementChild);
		adaptInputLengthExplicitly(windowEl_cont.lastElementChild.lastElementChild);
	}
}

function setUpClickOnAccount (account) {
	account.onclick = function() {
		enableScrolling();

		let clickEl = this,
			windowEl_cont = id('edit-account-cont'),
			windowEl = id('edit-account');
						
		// open edit account window
		prepareEditAccountWindow(clickEl.getAttribute('accountnum'));
		let top_position = openFloatingWindow(clickEl, windowEl_cont, windowEl, calculateScaleX(clickEl, windowEl_cont));
		windowEl.setAttribute('top-position', top_position);

		// set up closing edit account window
		id('edit-account-cont').firstElementChild.onclick = () => {
			closeFloatingWindow(clickEl, windowEl_cont, windowEl);
			resetEditAccountWindow();
		}
		
		// set up click on remove account button
		id('remove-account').onclick = () => {
			let notification_cont = id('edit-account-cont').getElementsByClassName('popup-connected-notification-cont')[0];

			if (notification_cont.classList.contains('show')) {
				hidePopUpConnectedNotification(notification_cont);
				removeAccount(clickEl.getAttribute('accountnum'), clickEl, windowEl_cont, windowEl);
				resetEditAccountWindow();
			} else
				showPopUpConnectedNotification('remove account', notification_cont, windowEl);

		}
		
		// set up click on save account button
		id('save-account').onclick = () => {
			saveEditedAccount(clickEl.getAttribute('accountnum'), clickEl, windowEl_cont, windowEl);
			resetEditAccountWindow();
		}

	}
}

function prepareEditAccountWindow (account_num) {

	if (id('settings-category-window-cont').getElementsByClassName('account').length == 1) {
		id('edit-account').classList.add('top-padding');
		id('edit-account').firstElementChild.classList.add('element-hide');
	}

	// upload color
	id('edit-account-color-button').style.background = '#' + localStorage.getItem(`AColor${account_num}`);
	id('edit-account-color-button').setAttribute('color', localStorage.getItem(`AColor${account_num}`));

	// check color if dark theme is on
	checkColorOfEditAccountColorButton();

	// upload currency
	id('edit-account-currency').value = localStorage.getItem(`ACurrency${account_num}`);
	adaptInputLengthExplicitly(id('edit-account-currency'));
	
	// upload balance
	id('edit-account-balance').value = localStorage.getItem(`ABalance${account_num}`);
	adaptInputLengthExplicitly(id('edit-account-balance'));
}

function checkColorOfEditAccountColorButton () {

	if (
		(localStorage.getItem('T') == 'b' || localStorage.getItem('T') == 'd') &&
		id('edit-account-color-button').style.background == 'rgb(5, 5, 5)'
	)
		id('edit-account-color-button').classList.add('invert-color');
	else
		id('edit-account-color-button').classList.remove('invert-color');
}

function resetEditAccountWindow () {

	if (id('edit-account').classList.contains('top-padding')) {
		setTimeout(() => {
			id('edit-account').classList.remove('top-padding');
			id('edit-account').firstElementChild.classList.remove('element-hide');
		}, 400);
	}
}

function setUpClickOnAddAccountButton (content_cont) {

	id('add-account').onclick = () => {

		addAccount();

		let account_count = localStorage.getItem('ACount');
		uploadAccount(account_count, id('accounts'));
		setUpClickOnAccounts();

		content_cont.insertAdjacentHTML(
			'beforeend',
			account_el(
				account_count,
				localStorage.getItem(`AColor${account_count}`),
				localStorage.getItem(`ACurrency${account_count}`),
				Number(localStorage.getItem(`ABalance${account_count}`)).toFixed(2)
			)
		);
		checkAccountColor(content_cont.lastElementChild);

		adaptInputLengthExplicitly(content_cont.lastElementChild.firstElementChild);
		adaptInputLengthExplicitly(content_cont.lastElementChild.lastElementChild);

		setUpClickOnAccount(content_cont.lastElementChild);

		animateAddingAccount(
			id('settings-category-window-cont').lastElementChild,
			content_cont.lastElementChild,
			id('settings-category-window-cont').lastElementChild.lastElementChild
		);

	}
}

function animateAddingAccount (container, account, button_block) {
	let gap = account.getBoundingClientRect().top - account.previousElementSibling.getBoundingClientRect().top;
	
	container.style.transition = 'transform 0s';
	container.style.transform = `translateY(calc(${gap}px + 1vh))`;
	
	account.style.transition = 'transform 0s';
	account.style.transform = `translateY(${gap}px) scale(0)`;
	
	button_block.style.transition = 'transform 0s';
	button_block.style.transform = `translateY(-${gap}px)`;
	
	setTimeout(() => {
		container.style.transition = 'transform .3s';
		container.style.transform = `translateY(1vh)`;
		
		account.style.transition = 'transform .3s';
		account.style.transform = `translateY(0px) scale(1)`;
		
		button_block.style.transition = 'transform .3s';
		button_block.style.transform = `translateY(0px)`;
		
		setTimeout(() => {
			container.style = null;
			account.style.transition = null;
			button_block.style = null;
		}, 300);
	}, 1);
}

function removeAccount (account_num, clickEl, windowEl_cont, windowEl) {

	// remove all storage records connected with this account
	removeStorageRecordsOfAccount(account_num);
	changeAccountNumInStorageRecords(account_num);
	uploadRecordsToHistory();
		
	// get this account on window
	let account;
	for (let potential_account of id('settings-category-window-cont').getElementsByClassName('account'))
		if (potential_account.getAttribute('accountnum') == account_num) account = potential_account;
	
	let clickEL_transition = changeFloatingWindowTransformation(clickEl, windowEl_cont, windowEl);
	
	setTimeout(() => {

		// close edit account window
		clickEl.classList.remove('account-block-animation');
		clickEl.style.transition = clickEL_transition;
		closeFloatingWindow(clickEl, windowEl_cont, windowEl);
		
		// remove account
		setTimeout(() => {
			animateRemovingAccount(
				id('settings-category-window-cont').lastElementChild,
				account, account_num,
				id('settings-category-window-cont').lastElementChild.lastElementChild
			);
			removeAccountFromStorage(account_num);
			
			id('accounts').innerHTML = null;
			for (let a = 1; a <= Number(localStorage.getItem('ACount')); a++) uploadAccount(a, id('accounts'));
			setUpClickOnAccounts();

			uploadExpensesIncomesStats();
			uploadDataToPieChart();
		}, 390);

	}, 1);
}

function removeStorageRecordsOfAccount (account_num) {

	for (let a = 1; a <= Number(localStorage.getItem('RCount')); a++) {
		if (localStorage.getItem(`RAccount${a}`) == account_num) {

			for (let b = a; b <= Number(localStorage.getItem('RCount')); b++)
				if ( b < Number(localStorage.getItem('RCount')) ) moveRecord(b + 1, b);
				else if ( b == Number(localStorage.getItem('RCount')) ) removeStorageRecord(b);

			a--;

		}
	}
}

function removeStorageRecord (record_num) {

	localStorage.removeItem(`RType${record_num}`);
	localStorage.removeItem(`RAmount${record_num}`);
	localStorage.removeItem(`RAccount${record_num}`);
	localStorage.removeItem(`RCategory${record_num}`);
	localStorage.removeItem(`RSubcategory${record_num}`);

	localStorage.removeItem(`RMinute${record_num}`);
	localStorage.removeItem(`RHour${record_num}`);
	localStorage.removeItem(`RDay${record_num}`);
	localStorage.removeItem(`RMonth${record_num}`);
	localStorage.removeItem(`RYear${record_num}`);

	localStorage.setItem('RCount', Number(localStorage.getItem('RCount')) - 1);
}

function moveRecord (from, to) {

	localStorage.setItem(`RType${to}`, localStorage.getItem(`RType${from}`));
	localStorage.setItem(`RAmount${to}`, localStorage.getItem(`RAmount${from}`));
	localStorage.setItem(`RAccount${to}`, localStorage.getItem(`RAccount${from}`));
	localStorage.setItem(`RCategory${to}`, localStorage.getItem(`RCategory${from}`));
	localStorage.setItem(`RSubcategory${to}`, localStorage.getItem(`RSubcategory${from}`));

	localStorage.setItem(`RMinute${to}`, localStorage.getItem(`RMinute${from}`));
	localStorage.setItem(`RHour${to}`, localStorage.getItem(`RHour${from}`));
	localStorage.setItem(`RDay${to}`, localStorage.getItem(`RDay${from}`));
	localStorage.setItem(`RMonth${to}`, localStorage.getItem(`RMonth${from}`));
	localStorage.setItem(`RYear${to}`, localStorage.getItem(`RYear${from}`));
}

function changeAccountNumInStorageRecords (account_num) {
// change account's number in storage records to (account_num - 1) from account_num

	for (let a = 1; a <= localStorage.getItem('RCount'); a++)
		if (localStorage.getItem(`RAccount${a}`) > account_num)
			localStorage.setItem(`RAccount${a}`, Number(localStorage.getItem(`RAccount${a}`)) - 1);
}

function animateRemovingAccount (container, account, account_num, button_block) {
	let gap;

	if (account.previousElementSibling)
		gap = account.getBoundingClientRect().top - account.previousElementSibling.getBoundingClientRect().top;
	else gap =  account.nextElementSibling.getBoundingClientRect().top - account.getBoundingClientRect().top;

	container.style.transition = 'transform .3s';
	container.style.transform = `translateY(calc(${gap}px + 1vh))`;
	
	account.style.transition = 'transform .3s';
	account.style.transform = `scale(0)`;
	
	let accounts = container.getElementsByClassName('account');
	for (let a = Number(account_num); a < accounts.length; a++) {
		accounts[a].style.transition = 'transform .3s';
		accounts[a].style.transform = `translateY(${-(gap)}px)`;
	}
	
	button_block.style.transition = 'transform .3s';
	button_block.style.transform = `translateY(-${gap}px)`;

	setTimeout(() => {
		container.style.transition = 'transform 0s';
		container.style.transform = `translateY(1vh)`;
		
		button_block.style.transition = 'transform 0s';
		button_block.style.transform = `translateY(0px)`;

		for (let a = Number(account_num); a < accounts.length; a++) {
			accounts[a].style.transition = 'transform 0s';
			accounts[a].style.transform = `translateY(0px)`;
		}
		
		account.remove();
		
		// update accounts numbers attributes on accounts in settings
		updateAccountsNumbers();
	}, 300);
	
	
	// account.style.transition = 'transform .4s';
	// account.style.transform = 'scale(0)';
	// account.style.marginBottom = `-${accounts_gap}px`;
	
	// setTimeout(() => {
	// 	account.remove();
	// }, 402);
}

function removeAccountFromStorage (account_num) {
	
	for (let a = Number(account_num); a <= localStorage.getItem('ACount'); a++) {
		if ( a < Number(localStorage.getItem('ACount')) ) moveAccount(a + 1, a);
		else if ( a == Number(localStorage.getItem('ACount')) ) {
			localStorage.removeItem(`AColor${a}`);
			localStorage.removeItem(`ACurrency${a}`);
			localStorage.removeItem(`ABalance${a}`);
			localStorage.setItem('ACount', Number(localStorage.getItem('ACount')) - 1);
		}
	}
}

function moveAccount (from, to) {
	
	localStorage.setItem(`AColor${to}`, localStorage.getItem(`AColor${from}`));
	localStorage.setItem(`ACurrency${to}`, localStorage.getItem(`ACurrency${from}`));
	localStorage.setItem(`ABalance${to}`, localStorage.getItem(`ABalance${from}`));
}

function updateAccountsNumbers () {
	let accounts = id('settings-category-window-cont').getElementsByClassName('account');

	for (let a = 1; a <= accounts.length; a++) accounts[a - 1].setAttribute('accountnum', a);
}

id('edit-account-color-button').onclick = function() {

	let clickEl = this,
		windowEl_cont = id('edit-account-color-cont'),
		windowEl = id('edit-account-color');

	// check color if dark theme is on
	if (localStorage.getItem('T') == 'b' || localStorage.getItem('T') == 'd')
		id('edit-account-color-choose').lastElementChild.classList.add('invert-color');

	// set up click on accounts
	setUpChoosingAccountColor(clickEl, windowEl_cont, windowEl);

	openFloatingWindow(clickEl, windowEl_cont, windowEl, calculateScaleX(clickEl, windowEl_cont));

	windowEl_cont.firstElementChild.onclick = function() {
		closeFloatingWindow(clickEl, windowEl_cont, windowEl);
	}
	
}

function setUpChoosingAccountColor (clickEl, windowEl_cont, windowEl) {

	for (let button of windowEl.getElementsByClassName('color'))
		button.onclick = function() {

			let color = button.getAttribute('color');
			clickEl.setAttribute('color', color);
			clickEl.style.background = '#' + color;

			// check color if dark theme is on
			checkColorOfEditAccountColorButton();
			
			closeFloatingWindow(clickEl, windowEl_cont, windowEl);
			
		}
}

function saveEditedAccount (account_num, clickEl, windowEl_cont, windowEl) {

	let previous_currency = localStorage.getItem(`ACurrency${account_num}`);
	
	localStorage.setItem(`AColor${account_num}`, id('edit-account-color-button').getAttribute('color'));
	localStorage.setItem(`ACurrency${account_num}`, id('edit-account-currency').value);
	localStorage.setItem(`ABalance${account_num}`, id('edit-account-balance').value);

	// update account currency and balance everywhere
	clickEl.classList.add('account-block-animation');	
	updateAllAccountInfo(account_num, 'Color');
	updateAllAccountInfo(account_num, 'Balance');
	updateAllAccountInfo(account_num, 'Currency');

	checkAccountColorExlicitlyEverywhere(Number(account_num));

	if (previous_currency != id('edit-account-currency').value) uploadRecordsToHistory();

	// close edit account window

	let clickEL_transition = changeFloatingWindowTransformation(clickEl, windowEl_cont, windowEl);
	
	setTimeout(() => {
		clickEl.classList.remove('account-block-animation');
		clickEl.style.transition = clickEL_transition;
		closeFloatingWindow(clickEl, windowEl_cont, windowEl);
	}, 1);
}

function checkAccountColorExlicitlyEverywhere (account_num) {
	let account;

	account = id('settings-category-window-cont').getElementsByClassName('account')[account_num - 1];
	checkAccountColor(account);
	
	account = id('accounts').getElementsByClassName('account')[account_num - 1];
	checkAccountColor(account);
}

function setUpButtonsValue_Accounts (button, lang) {

	if (lang == 'en') {
		button.value = 'Add account';
	} else if (lang == 'cz') {
		button.value = 'Přidat účet';
	} else if (lang == 'ru') {
		button.value = 'Добавить счёт';
	} else if (lang == 'ua') {
		button.value = 'Додати рахунок';
	}
}






function disableScrolling () {
	var x = window.scrollX;
	var y = window.scrollY;
	window.onscroll = function() {
		window.scrollTo(x, y);
	};
}
function enableScrolling () {
	window.onscroll = function(){};
}



function animateEmptyFieldError (el) {
	el.classList.add('empty-field-transform1');

  setTimeout(() => {
    el.classList.add('empty-field-transform2');

    setTimeout(() => {
      el.classList.remove('empty-field-transform1');
      el.classList.remove('empty-field-transform2');
    }, 120);
  }, 120);
}


// change width of all active inputs while typing

setTypingListenerForAllInputs(id('root').getElementsByClassName('active-input'));
function setTypingListenerForAllInputs (inputs_arr) {

	for (let input of inputs_arr) setTypingListenerForInput(input);
}

function setTypingListenerForInput (input) {
	input.addEventListener('input', adaptInputLength);
	adaptInputLength.call(input);
}

function adaptInputLength () {
	let less_length, bigger_length;
	let lang = localStorage.getItem('L');

	if (lang == 'en' || lang == 'cz') {
		less_length = 3.5;
		bigger_length = 1.1;
	} else if (lang == 'ru' || lang == 'ua') {
		less_length = 4;
		bigger_length = 1.1;
	}
	
	if (this.value.length < 4)
		this.style.width = less_length + 'ch';
	else
		this.style.width = this.value.length * bigger_length + 'ch';
}

// change width of input by its characters count
function adaptInputLengthExplicitly (el) {
	let less_length, bigger_length;
	let lang = localStorage.getItem('L');

	if (lang == 'en' || lang == 'cz') {
		less_length = 3.5;
		bigger_length = 1.1;
	} else if (lang == 'ru' || lang == 'ua') {
		less_length = 4;
		bigger_length = 1.1;
	}
	
	if (el.value.length < 4)
		el.style.width = less_length + 'ch';
	else
		el.style.width = el.value.length * bigger_length + 'ch';
}