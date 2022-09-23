import { Component } from "@angular/core"
import { InfoMainService } from "src/app/services/info-main.service"

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})

export class MainComponent {
constructor(public infoService: InfoMainService){

}
}