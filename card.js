class Card{
    constructor(image,title,productId,description,hbidder,hbid,timeleft){
        this.hbidder = hbidder;
        this.hbid = hbid;
        this.timeleft = timeleft;
        this.image = new Image();
        this.image.src = image;
        this.title = title;
        this.productId = productId;
        this.description = description;
    }
    
}