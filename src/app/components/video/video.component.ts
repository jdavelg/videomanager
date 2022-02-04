import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Video } from 'src/app/interfaces/video';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [MessageService,ConfirmationService],
})
export class VideoComponent implements OnInit {

  videoDialog: boolean;

    videos: Video[];

    video: Video;

    selectedVideos: Video[];

    submitted: boolean;
    public selectedFile: any = null
    shows: any[];
    uploadedFiles: any[] = [];

    constructor(private _mediaService: MediaService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
   /*      this._mediaService.getVideos().then(data => this.videos = data); */

        this.shows = [
            {id: 'lib', value: 'liberadas'},
            {id: 'vlm', value: 'viva la mañana'},
            {id: 'play', value: 'play'}
        ];
    }
    onUpload(event) {
        console.log(event.files);
        
        for(let file of event.files) {
            this.uploadedFiles.push(file);

          
            
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
    openNew() {
        this.video = {};
        this.submitted = false;
        this.videoDialog = true;
    }

    deleteSelectedVideos() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected videos?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.videos = this.videos.filter(val => !this.selectedVideos.includes(val));
                this.selectedVideos = null;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Videos Deleted', life: 3000});
            }
        });
    }

    editVideo(video: Video) {
        this.video = {...video};
        this.videoDialog = true;
    }

   /*  deleteVideo(video: Video) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + video.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.videos = this.videos.filter(val => val.id !== video.id);
                this.video = {};
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Video Deleted', life: 3000});
            }
        });
    } */

    hideDialog() {
        this.videoDialog = false;
        this.submitted = false;
    }
/* 
    saveVideo() {
        this.submitted = true;

        if (this.video.name.trim()) {
            if (this.video.id) {
                this.videos[this.findIndexById(this.video.id)] = this.video;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Video Updated', life: 3000});
            }
            else {
                this.video.id = this.createId();
                this.video.image = 'video-placeholder.svg';
                this.videos.push(this.video);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Video Created', life: 3000});
            }

            this.videos = [...this.videos];
            this.videoDialog = false;
            this.video = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.videos.length; i++) {
            if (this.videos[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    saveProduct(product:any){
        const fd = new FormData();
    
        fd.append('thumbnail', this.selectedFile, this.selectedFile.name)
    
    
    
    
        this._userService.uploadImage(fd).subscribe(
          response => {
            if (response.path) {
              console.log(response.path);
              let firstPath = response.path
    
              let pathtoadd = firstPath.split("https://clips-vod-tcs.s3.amazonaws.com/")
              let definitelypath = global.toReplace + pathtoadd[1]
              console.log(definitelypath);
    
              this.product.image = definitelypath
            
              this._productService.save(this.product).subscribe(
                response => {
                  if (response.status == "success") {
                    Swal.fire(
                      'Guardado!',
                      'El registro se ha guardado.',
                      'success'
                    )
                    this.getProducts()
                    product.reset()
                    this.status = "success"
                    this.selectedFile = undefined
    
                  }
                },
                error => {
                  Swal.fire(
                    'Error!',
                    'Error al guardar el registro.',
                    'error'
                  )
                  this.status = "error"
                }
              )
    
            }
    
          },
          error => {
            Swal.fire(
              'Error!',
              'El registro no se ha guardado.',
              'error'
            )
          }
        )
    
      } */
}
