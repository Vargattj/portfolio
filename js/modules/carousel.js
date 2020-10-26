export default function carousel() {
  new Glider(document.querySelector('.glider'),{
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    slidesToScroll: 1,
    slidesToShow: 3,
    duration: .6,
  //   responsive: [
  // {
  //     breakpoint: 750,
  //     settings: {

  //         slidesToScroll: 3,
  //         slidesToShow: 3
  //     }
  // },{
  //     breakpoint: 725,
  //     settings: {

  //         slidesToScroll: 1,
  //         slidesToShow: 2,
  //         dots: false,
  //         arrows: false
  //     }
  // },

  // ]
});
}
