import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/component/header/header.component';
import { BannerComponent } from '../../core/component/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/models/video-content.interface';
import { DescriptionPipe } from '../../shared/pipes/description.pipe';
 

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent,BannerComponent,MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  auth = inject(AuthService);
  movieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  popularMovies:IVideoContent[]=[];

  ngOnInit(): void {


    
    this.movieService.getMovies()
    .subscribe(res=>{
      console.log("From browse component")
      console.log(res);
      this.popularMovies =res.results;


      
    })
  }
  signOut()
  {
    
    sessionStorage.removeItem("loggedInUser")
    this.auth.signOut();
  }

  
}
