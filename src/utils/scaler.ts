type ScalerArgs = {
  file: Blob;
  scale: number;
};

export function getBase64Thumbnail({
  file,
  scale = 0.1
}: ScalerArgs): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement("canvas");

        const width = (canvas.width = image.width * scale);
        const height = (canvas.height = image.height * scale);
        
        const context = canvas.getContext("2d");
        
        if (!context) {
          return;
        }
        
        context.drawImage(image, 0, 0, width, height);
        
        return resolve(canvas.toDataURL());
      };
      
      reader.onerror = (event) => {
        reject(event.toString());
      };
      
      image.src = event?.target?.result as string;
    };
  });
};
