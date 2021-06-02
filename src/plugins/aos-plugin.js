import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
/**
 * la documentación se encuentra aquí
 * https://michalsnik.github.io/aos/
 */

export default class aos{
  constructor(){}
  static start(){
    //solo ese importante este, lo tro lo agregué
    AOS.init();
  }
}

