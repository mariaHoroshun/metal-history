export class  GuitarService{
    private guitarCards: gutarCard[] = [
        {
            photo:'rr.png',
            description:'some text'
        },
        {
            photo:'kelly.png',
            description:'another text'
        }
    ]
   getGuitarCards(): gutarCards[]{
       return this.guitarCards;
   } 
}