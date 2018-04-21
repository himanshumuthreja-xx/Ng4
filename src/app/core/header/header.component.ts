import { Component, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, public authService: AuthService) { }
@Output() selectedFeature = new EventEmitter<string>();

onSelectedFeature(feature: string) {
    this.selectedFeature.emit(feature);
}

onSaveData() {
    this.dataStorageService.saveRecipes()
    .subscribe(
        (response: Response) => { console.log(response); }
    );
}

onFetchData() {
    this.dataStorageService.getRecipes();
}

onLogout() {
    this.authService.logout();
}

}
