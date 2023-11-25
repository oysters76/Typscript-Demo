function performAction(event:Event){
  const val = (<HTMLInputElement>document.getElementById("textbox")).value;
  let liTag = document.createElement("li");
  liTag.innerHTML = val; 
  document.querySelector(".list")?.appendChild(liTag);
}

/* Composition in TS */
class ImageEntity {
  name:string = ""; 
  
  constructor (name:string){
    this.name = name;
  }

  resize(factor:number){}
  remap(factor:number){}
  rescale(factor:number){}

}

interface ImageFile {
  load(filename:string) : boolean; 
  save(filename:string) : boolean;
}

class BitMapImage implements ImageFile{

  image : ImageEntity;
  
  constructor(image : ImageEntity){
    this.image = image;
  }

  load(filename: string): boolean {
    throw new Error("Method not implemented.");
  }
  save(filename: string): boolean {
    throw new Error("Method not implemented.");
  }

}

let image = new ImageEntity("name"); 
image.resize(5); 
image.remap(2); 
image.rescale(1); 
let bitMap = new BitMapImage(image);  
bitMap.save("test");