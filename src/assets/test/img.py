import requests
import time
import concurrent.futures
import csv
from PIL import Image


t1 = time.perf_counter()

if __name__ == '__main__':
    def download_image(img_url):
        img_bytes = requests.get(img_url.get('url')).content
        img_name = img_url.get('name')
        img_name = f'{img_name}.jpg'
        with open(img_name, 'wb') as img_file:
            img_file.write(img_bytes)
           
            print(f'{img_name} was downloaded...')
            img_file.flush()
            img_file.close()
            

        

       

    # # for img in img_urls:
    # #     download_image(img)
    
    rest = []
    def getUrl(rest):
        f = open('Food.csv', 'r')
        with f:
            reader = csv.reader(f, delimiter=",")
            for i, line in enumerate(reader):
                if i > 0:
                    if line[1] != '':
                        name = line[0]
                        name = name.strip()
                        name = name.replace(' ', '')
                        rest.append({'name' : name, 'url':line[19] } )

    def getName(str):
        jpg = str.replace(" ", '')
        jpg = jpg + ".jpg"
        return jpg
    
    getUrl(rest)


    # thread it 
    with concurrent.futures.ThreadPoolExecutor() as executor:
        executor.map(download_image, rest)

    # for img in rest:
    #     download_image(img)

    # for pic in rest:
    #     try:
    #         name = getName(pic.get('name'))
    #         image = Image.open( name)
    #         new_image = image.resize((267, 132))
    #         new_image.save(name)
    #     except Exception as ex:
    #         print(ex)
        


    t2 = time.perf_counter()
    print(f'Finished in {t2-t1} seconds')