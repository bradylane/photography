$(document).ready(function(){

var photos = [
  'Sky Fire',
  'Winter Woods',
  'Tiger Lily',
  'Winter Oak',
  'Maple Leaves',
  'Red Maple',
  'Splotched',
  'Gaillardia',
  'Red Leaves',
  'Dahlia',
  'Hibiscus',
  'Orange Awakening',
  'Echinacea',
  'Birdsfoot Trefoil',
  'Grass Seed',
  'Sunflowers',
  'Summer Leaves',
  'Yellow Coneflower',
  'Misty Morning',
  'From Darkness',
  'White Marsh Marigold',
  'Flow',
  'Lake Sunset',
  'Leaf',
  'Leafy Spurge Flowers',
  'Purple Fragrance',
  'Grape Hyacinth',
  'Tulip',
  'Sunset Soaring',
  'Spring',
  'Crabapple Flowers',
  'Crown Hill Lake',
  'Smooth as Glass',
  'Rosemary',
  'Malabar Spinach Flowers',
  'Blooming Carrot',
  'Wibbly Extremities',
  'Blooming Tamarisk',
  'Pink Lily',
  'Pineapple',
  'Ocean Sunrise',
  'Coral Shore',
  'Needles',
  'Fall Yellow',
  'Sunflower Petals',
  'Clear Water',
  'Nodding Onion',
  'Aspen Grove',
  'Forest Fire',
  'Fog Among the Pines',
  'Echinacea Flower',
  'Cosmos Flower',
  'Last Flower',
  'Elephant Heads',
  'Waterfall',
  'Bubble Shapes',
  'Tiny Waterfall',
  'Trickling Stream',
  'Canopy of Leaves',
  'Light Reflection',
  'Into the Fold',
  'Red Rose Petals',
  'Spider Plant Flower',
  'Pasque Flower',
  'Jade',
  'Rushing Water',
  'Petals',
  'Blue Flame',
  'Frosted Forest',
  'Brown Leaves',
  'Darkness',
  'Curve',
  'Cactus Flower',
  'Great Blue',
  'Cactus',
  'Lake Powell',
  'Colors of the Desert',
  'Fire and Water',
  'Rydberg\'s Penstemon',
  'Blue Columbine',
  'Columbine Flowers',
  'Reaching',
  'Lonely Bleeding Heart',
  'Oak Bark',
  'Tower',
  'Above the Clouds',
  'Flower Garden',
  'Summer',
  'Roses',
  'Creek',
  'Lake Sunrise',
  'Dormant',
  'Snow Covered',
  'Tropical Sunrise',
  'Autumn Oak',
  'Awakening Daisies',
  'Looking Up',
  'Coming Darkness',
  'Dance of the Yucca',
  'Dead Under the Moon'
];

var loaded = 0;
var five = loaded + 5;

function load() {
  if(loaded < photos.length && $(window).scrollTop() + $(window).height() > $(document).height() - 300) {
    for (var i = loaded; i < five; i++) {
      $('#gallery').append('<a class="img" href="photos/' + photos[i] + '.jpg"><img src="photos/' + photos[i] + '-250.jpg" alt="' + photos[i] + '"></a>');
      loaded++;
      if(loaded >= photos.length) break;
    }
    five = loaded + 5;
    $('#gallery').justifiedGallery('norewind');
  }
}

for (var i = 0; i < 5; i++) {
  $('#gallery').append('<a class="img" href="photos/' + photos[i] + '.jpg"><img src="photos/' + photos[i] + '-250.jpg" alt="' + photos[i] + '"></a>');
  loaded++;
  if(loaded >= photos.length) break;
}
five = loaded + 5;
$('#gallery').justifiedGallery({
    rowHeight : 200,
    lastRow : 'nojustify',
    margins : 16,
    captions : false
}).on('jg.complete', function () {
    $('.img').swipebox();
    load();
});

$(window).scroll(load);

});
