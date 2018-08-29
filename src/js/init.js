(function () {
   var slider = document.getElementById('price-range-slider'),
   sliderForm = document.getElementById('price-range'),
   sliderMin = document.getElementById('price-range-min'),
   sliderMax = document.getElementById('price-range-max');

   var startMin = parseInt(sliderMin.value, 10),
      startMax = parseInt(sliderMax.value, 10),
      rangeMin = parseInt(sliderForm.dataset.min, 10),
      rangeMax = parseInt(sliderForm.dataset.max, 10),
      rangeStep = parseInt(sliderForm.dataset.step, 10);

   console.log([startMin, startMax, rangeMin, rangeMax, rangeStep]);
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

})()
