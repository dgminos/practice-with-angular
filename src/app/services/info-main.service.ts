import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class InfoMainService {

    public team: any[] = []
    constructor(private http: HttpClient){
console.log('HTTP service is ready')

this.getTeam()

}
private getTeam(){
    this.http.get('https://practice-with-angular-default-rtdb.firebaseio.com/team.json')
    .subscribe((res:any)=>{
this.team=res
console.log(res)
    }

    )
}
}
