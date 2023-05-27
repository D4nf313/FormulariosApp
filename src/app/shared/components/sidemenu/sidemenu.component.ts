import { Component} from '@angular/core';


interface MenuItem{
  title:string;
  route:string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent{

  public reativeMenu:MenuItem[]=[

    {
      title:'Básicos',
      route:'./reactive/basic'
    },
    {
      title:'Dinamicos',
      route:'./reactive/dynamic'
    },
    {
      title:'Switches',
      route:'./reactive/switches'
    },
    


  ];


  authMenu:MenuItem[]=[

    {
      title:'Registro',
      route:'./auth'
    }


  ]
}
