(function () {

   /**
    * Price Range Slider
    */
   var slider = document.getElementById('price-range-slider'),
      sliderForm = document.getElementById('price-range'),
      sliderMin = document.getElementById('price-range-min'),
      sliderMax = document.getElementById('price-range-max');

   var startMin = parseInt(sliderMin.value, 10),
      startMax = parseInt(sliderMax.value, 10),
      rangeMin = parseInt(sliderForm.dataset.min, 10),
      rangeMax = parseInt(sliderForm.dataset.max, 10),
      rangeStep = parseInt(sliderForm.dataset.step, 10);

   noUiSlider.create(slider, {
      start: [startMin, startMax],
      connect: true,
      range: {
         'min': rangeMin,
         'max': rangeMax
      },
      step: rangeStep,
      tooltips: true,
      format: {
         to: function (value) {
            return '$' + value;
         },
         from: function (value) {
            return value.replace('$', '');
         }
      }
   });

   slider.noUiSlider.on('update', function (values, handle) {

      var value = values[handle];

      if (handle) {
         sliderMax.value = value.replace('$', '');
      } else {
         sliderMin.value = value.replace('$', '');
      }
   });

   /**
    * Product view mode
    */

   // Initial value
   var viewMode = localStorage.shopViewMode || 'tile';
   if (viewMode !== 'tile' && viewMode !== 'line') {
      viewMode = 'tile';
   }

   // Set active mode
   var body = document.querySelector('body'),
      tile = document.querySelector('#navigation-tile'),
      line = document.querySelector('#navigation-line');

   function viewModeodeChange() {
      if (this.tagName === 'SPAN') {
         if (this === tile) viewMode = 'tile';
         if (this === line) viewMode = 'line';
      }

      switch (viewMode) {

         case 'line':
            body.classList.remove('view-mode-tile');
            body.classList.add('view-mode-line');
            tile.classList.remove('active');
            line.classList.add('active');
            localStorage.shopViewMode = 'line';
            break;

         case 'tile':
         default:
            body.classList.remove('view-mode-line');
            body.classList.add('view-mode-tile');
            tile.classList.add('active');
            line.classList.remove('active');
            localStorage.shopViewMode = 'tile';
            break;
      }

      return false;
   }

   viewModeodeChange();

   tile.addEventListener('click', viewModeodeChange);
   line.addEventListener('click', viewModeodeChange);

})()
