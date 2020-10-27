export default function scrollHeader() {
 
  const menu = document.getElementById('menu');

  onscroll = () => {
    if(scrollY !== 0){
      menu.classList.add('headerScrolling');
      menu.classList.remove('headerFixed')
    }else{
      menu.classList.remove('headerScrolling')
      menu.classList.add('headerFixed');
    }
  }

}
